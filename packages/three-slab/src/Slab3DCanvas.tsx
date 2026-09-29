import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import * as THREE from 'three';
import { drawVcaLabel, type LabelStyle } from './drawVcaLabel';

export type SlabEnvironment = 'void' | 'studio' | 'nebula';

export interface Slab3DCanvasProps {
  cardImageUrl?: string;
  cardName?: string;
  cardSet?: string;
  cardNumber?: string;
  /** Real grade only. null → RAW / UNGRADED. Never invent a grade. */
  grade?: number | string | null;
  gradeText?: string;
  /** Real serial only. null → DISPLAY PREVIEW · NOT CERTIFIED */
  serialNumber?: string | null;
  labelStyle?: LabelStyle;
  environment?: SlabEnvironment;
  lightTint?: string;
  holoIntensity?: number;
  cardOffset?: number;
  showGrade?: boolean;
  autoSpin?: boolean;
  interactive?: boolean;
  className?: string;
  onReady?: () => void;
}

export interface Slab3DCanvasHandle {
  flip: () => void;
  reset: () => void;
  setZoom: (factor: number) => void;
  getZoom: () => number;
}

const ENV_BG: Record<SlabEnvironment, number> = {
  studio: 0xe8eef6,
  void: 0x0b1220,
  nebula: 0x1a1230,
};

function parseTint(hex: string | undefined, fallback: number): number {
  if (!hex) return fallback;
  const cleaned = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) return fallback;
  return parseInt(cleaned, 16);
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const Slab3DCanvas = forwardRef<Slab3DCanvasHandle, Slab3DCanvasProps>(
  function Slab3DCanvas(
    {
      cardImageUrl,
      cardName,
      cardSet,
      cardNumber,
      grade = null,
      gradeText,
      serialNumber = null,
      labelStyle = 'classic',
      environment = 'studio',
      lightTint = '#244cb4',
      holoIntensity = 55,
      cardOffset = 0,
      showGrade = true,
      autoSpin = false,
      interactive = true,
      className = 'w-full h-[480px]',
      onReady,
    },
    ref,
  ) {
    const mountRef = useRef<HTMLDivElement>(null);
    const apiRef = useRef<{
      flip: () => void;
      reset: () => void;
      setZoom: (f: number) => void;
      getZoom: () => number;
    } | null>(null);

    // Latest props for the animation loop without rebuilding the scene
    const propsRef = useRef({
      cardName,
      cardSet,
      cardNumber,
      grade,
      gradeText,
      serialNumber,
      labelStyle,
      holoIntensity,
      showGrade,
      autoSpin,
      cardOffset,
      environment,
      lightTint,
    });
    propsRef.current = {
      cardName,
      cardSet,
      cardNumber,
      grade,
      gradeText,
      serialNumber,
      labelStyle,
      holoIntensity,
      showGrade,
      autoSpin,
      cardOffset,
      environment,
      lightTint,
    };

    useImperativeHandle(ref, () => ({
      flip: () => apiRef.current?.flip(),
      reset: () => apiRef.current?.reset(),
      setZoom: (f: number) => apiRef.current?.setZoom(f),
      getZoom: () => apiRef.current?.getZoom() ?? 1,
    }));

    useEffect(() => {
      const container = mountRef.current;
      if (!container) return;

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 480;
      const reducedMotion = prefersReducedMotion();

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(ENV_BG[environment] ?? ENV_BG.studio);

      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      const baseCameraZ = 7.2;
      let zoomFactor = 1;
      camera.position.set(0, 0.15, baseCameraZ);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      const slabGroup = new THREE.Group();
      scene.add(slabGroup);

      // --- Particle motes ---
      const particleCount = 120;
      const particleGeo = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleSpeeds = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
        particleSpeeds[i] = 0.002 + Math.random() * 0.006;
      }
      particleGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(particlePositions, 3),
      );
      const particleMat = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.05,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const particlesMesh = new THREE.Points(particleGeo, particleMat);
      scene.add(particlesMesh);

      // --- Acrylic slab ---
      const slabWidth = 2.35;
      const slabHeight = 3.55;
      const slabThickness = 0.2;
      const acrylicGeo = new THREE.BoxGeometry(slabWidth, slabHeight, slabThickness);
      const acrylicMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.32,
        roughness: 0.04,
        metalness: 0.12,
        transmission: 0.9,
        thickness: 0.4,
        ior: 1.5,
        reflectivity: 0.85,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        side: THREE.DoubleSide,
      });
      const acrylicMesh = new THREE.Mesh(acrylicGeo, acrylicMat);
      acrylicMesh.castShadow = true;
      slabGroup.add(acrylicMesh);

      const borderEdges = new THREE.EdgesGeometry(acrylicGeo);
      const borderMat = new THREE.LineBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.45,
      });
      const borderLine = new THREE.LineSegments(borderEdges, borderMat);
      slabGroup.add(borderLine);

      // --- Card plane ---
      const cardGeo = new THREE.PlaneGeometry(1.78, 2.48);
      const cardMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.55,
        metalness: 0.05,
        side: THREE.DoubleSide,
      });
      const cardMesh = new THREE.Mesh(cardGeo, cardMat);
      cardMesh.position.set(0, -0.32 + (cardOffset || 0) * 0.02, 0.012);
      slabGroup.add(cardMesh);

      const texturesToDispose: THREE.Texture[] = [];
      let cardTexture: THREE.Texture | null = null;

      if (cardImageUrl) {
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('Anonymous');
        loader.load(
          cardImageUrl,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            cardTexture = tex;
            texturesToDispose.push(tex);
            cardMat.map = tex;
            cardMat.color.set(0xffffff);
            cardMat.needsUpdate = true;
          },
          undefined,
          () => {
            // Fallback solid if image fails (CORS / 404) — keep slate color
            cardMat.map = null;
            cardMat.color.set(0x334155);
            cardMat.needsUpdate = true;
          },
        );
      }

      // --- Animated digital VCA label (CanvasTexture) ---
      const labelCanvas = document.createElement('canvas');
      labelCanvas.width = 1024;
      labelCanvas.height = 256;
      const labelCtx = labelCanvas.getContext('2d');
      const labelTexture = new THREE.CanvasTexture(labelCanvas);
      labelTexture.colorSpace = THREE.SRGBColorSpace;
      labelTexture.minFilter = THREE.LinearFilter;
      labelTexture.magFilter = THREE.LinearFilter;
      texturesToDispose.push(labelTexture);

      const paintLabel = (time: number, rotY: number) => {
        if (!labelCtx) return;
        const p = propsRef.current;
        const gradeForLabel = p.showGrade ? p.grade : null;
        drawVcaLabel(labelCtx, labelCanvas.width, labelCanvas.height, {
          cardName: p.cardName,
          cardSet: p.cardSet,
          cardNumber: p.cardNumber,
          grade: gradeForLabel,
          gradeText: p.gradeText,
          serialNumber: p.serialNumber,
          labelStyle: p.labelStyle,
          holoIntensity: p.holoIntensity,
          time,
          rotationY: rotY,
        });
        labelTexture.needsUpdate = true;
      };
      paintLabel(0, 0);

      const labelGeo = new THREE.PlaneGeometry(2.05, 0.52);
      const labelMat = new THREE.MeshBasicMaterial({
        map: labelTexture,
        side: THREE.DoubleSide,
        transparent: true,
      });
      const labelMesh = new THREE.Mesh(labelGeo, labelMat);
      labelMesh.position.set(0, 1.28, 0.025);
      slabGroup.add(labelMesh);

      // Soft pedestal / dais
      const daisGeo = new THREE.CylinderGeometry(1.85, 2.25, 0.22, 48);
      const daisMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.35,
        metalness: 0.7,
        emissive: parseTint(lightTint, 0x244cb4),
        emissiveIntensity: 0.25,
      });
      const daisMesh = new THREE.Mesh(daisGeo, daisMat);
      daisMesh.position.set(0, -2.35, 0);
      daisMesh.receiveShadow = true;
      scene.add(daisMesh);

      const daisRingGeo = new THREE.RingGeometry(1.7, 1.95, 48);
      const daisRingMat = new THREE.MeshBasicMaterial({
        color: parseTint(lightTint, 0x22d3ee),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      });
      const daisRing = new THREE.Mesh(daisRingGeo, daisRingMat);
      daisRing.rotation.x = -Math.PI / 2;
      daisRing.position.set(0, -2.22, 0);
      scene.add(daisRing);

      // Lighting + fog by environment
      const ambient = new THREE.AmbientLight(0xffffff, environment === 'void' ? 0.55 : 0.95);
      scene.add(ambient);

      const keyLight = new THREE.PointLight(parseTint(lightTint, 0x22d3ee), 3.2, 18);
      keyLight.position.set(3.2, 3.5, 4.5);
      scene.add(keyLight);

      const fillLight = new THREE.PointLight(0xc084fc, environment === 'nebula' ? 2.8 : 1.6, 14);
      fillLight.position.set(-3.5, -1.5, 3);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
      rimLight.position.set(0, 4, -3);
      scene.add(rimLight);

      if (environment === 'nebula') {
        scene.fog = new THREE.FogExp2(0x1a1230, 0.035);
        const nebulaA = new THREE.PointLight(0xa78bfa, 2.2, 16);
        nebulaA.position.set(-4, 2, -2);
        scene.add(nebulaA);
        const nebulaB = new THREE.PointLight(0x22d3ee, 1.8, 14);
        nebulaB.position.set(4, -1, -1);
        scene.add(nebulaB);
      } else if (environment === 'void') {
        scene.fog = new THREE.FogExp2(0x0b1220, 0.028);
      } else {
        scene.fog = null;
        const studioFill = new THREE.HemisphereLight(0xffffff, 0xcbd5e1, 0.55);
        scene.add(studioFill);
      }

      // Interaction state
      let isDragging = false;
      let previousPosition = { x: 0, y: 0 };
      let velocity = { x: 0, y: 0 };
      let idleTimer: ReturnType<typeof setTimeout> | null = null;
      let isIdle = false;
      let disposed = false;
      let lastLabelPaint = 0;

      const resetIdleTimer = () => {
        isIdle = false;
        if (idleTimer) clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
          isIdle = true;
        }, 3000);
      };

      const handlePointerDown = (clientX: number, clientY: number) => {
        isDragging = true;
        previousPosition = { x: clientX, y: clientY };
        velocity = { x: 0, y: 0 };
        resetIdleTimer();
      };

      const handlePointerMove = (clientX: number, clientY: number) => {
        if (!isDragging || !interactive) return;
        const deltaX = clientX - previousPosition.x;
        const deltaY = clientY - previousPosition.y;
        velocity = { x: deltaX * 0.007, y: deltaY * 0.007 };
        slabGroup.rotation.y += velocity.x;
        slabGroup.rotation.x += velocity.y;
        slabGroup.rotation.x = Math.max(-0.85, Math.min(0.85, slabGroup.rotation.x));
        previousPosition = { x: clientX, y: clientY };
        resetIdleTimer();
      };

      const handlePointerUp = () => {
        isDragging = false;
        resetIdleTimer();
      };

      const onMouseDown = (e: MouseEvent) => handlePointerDown(e.clientX, e.clientY);
      const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
      const onMouseUp = () => handlePointerUp();
      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      };
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };
      const onTouchEnd = () => handlePointerUp();

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        zoomFactor = Math.max(0.65, Math.min(1.45, zoomFactor - e.deltaY * 0.001));
        camera.position.z = baseCameraZ / zoomFactor;
        resetIdleTimer();
      };

      if (interactive) {
        container.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        container.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);
        container.addEventListener('wheel', onWheel, { passive: false });
      }
      resetIdleTimer();

      // Imperative API for Flip / Reset / Zoom controls
      const initialRot = { x: -0.12, y: -0.32 };
      slabGroup.rotation.x = initialRot.x;
      slabGroup.rotation.y = initialRot.y;

      apiRef.current = {
        flip: () => {
          slabGroup.rotation.y += Math.PI;
          velocity = { x: 0, y: 0 };
          resetIdleTimer();
        },
        reset: () => {
          slabGroup.rotation.x = initialRot.x;
          slabGroup.rotation.y = initialRot.y;
          slabGroup.position.y = 0;
          velocity = { x: 0, y: 0 };
          zoomFactor = 1;
          camera.position.z = baseCameraZ;
          resetIdleTimer();
        },
        setZoom: (factor: number) => {
          zoomFactor = Math.max(0.65, Math.min(1.45, factor));
          camera.position.z = baseCameraZ / zoomFactor;
        },
        getZoom: () => zoomFactor,
      };

      const clock = new THREE.Clock();
      let animationFrameId = 0;

      const animate = () => {
        if (disposed) return;
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();
        const p = propsRef.current;

        // Sync live prop changes that don't need scene rebuild
        cardMesh.position.y = -0.32 + (p.cardOffset || 0) * 0.02;
        const tint = parseTint(p.lightTint, 0x244cb4);
        daisMat.emissive.setHex(tint);
        daisRingMat.color.setHex(tint);
        keyLight.color.setHex(tint);

        // Particles
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += particleSpeeds[i];
          if (positions[i * 3 + 1] > 6) positions[i * 3 + 1] = -6;
        }
        particleGeo.attributes.position.needsUpdate = true;

        // Momentum
        if (!isDragging) {
          if (Math.abs(velocity.x) > 0.00008 || Math.abs(velocity.y) > 0.00008) {
            slabGroup.rotation.y += velocity.x;
            slabGroup.rotation.x += velocity.y;
            slabGroup.rotation.x = Math.max(-0.85, Math.min(0.85, slabGroup.rotation.x));
            velocity.x *= 0.94;
            velocity.y *= 0.94;
          }

          const allowSpin = p.autoSpin && !reducedMotion && isIdle;
          if (allowSpin) {
            slabGroup.position.y = Math.sin(elapsed * 1.4) * 0.1;
            slabGroup.rotation.y += 0.005;
            slabGroup.rotation.x += (initialRot.x - slabGroup.rotation.x) * 0.02;
          } else if (!isDragging) {
            slabGroup.position.y += (0 - slabGroup.position.y) * 0.05;
          }
        }

        // Label redraw ~30fps
        if (elapsed - lastLabelPaint > 1 / 30) {
          paintLabel(elapsed, slabGroup.rotation.y);
          lastLabelPaint = elapsed;
        }

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container || disposed) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w < 1 || h < 1) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      onReady?.();

      return () => {
        disposed = true;
        cancelAnimationFrame(animationFrameId);
        if (idleTimer) clearTimeout(idleTimer);
        window.removeEventListener('resize', handleResize);
        if (interactive) {
          container.removeEventListener('mousedown', onMouseDown);
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
          container.removeEventListener('touchstart', onTouchStart);
          window.removeEventListener('touchmove', onTouchMove);
          window.removeEventListener('touchend', onTouchEnd);
          container.removeEventListener('wheel', onWheel);
        }
        apiRef.current = null;

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        acrylicGeo.dispose();
        acrylicMat.dispose();
        borderEdges.dispose();
        borderMat.dispose();
        cardGeo.dispose();
        cardMat.dispose();
        labelGeo.dispose();
        labelMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        daisGeo.dispose();
        daisMat.dispose();
        daisRingGeo.dispose();
        daisRingMat.dispose();
        for (const t of texturesToDispose) t.dispose();
        if (cardTexture && !texturesToDispose.includes(cardTexture)) {
          cardTexture.dispose();
        }
        renderer.dispose();
      };
      // Rebuild when structural inputs change; live props use propsRef
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardImageUrl, environment, interactive]);

    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/25 bg-slate-950/80 backdrop-blur-md ${className}`}
      >
        <div
          ref={mountRef}
          className="h-full w-full cursor-grab active:cursor-grabbing"
          role="img"
          aria-label={`${cardName ?? 'Card'} digital VCA slab display. Drag to rotate. Not a certificate.`}
        />

        <div className="pointer-events-none absolute bottom-3 left-3 z-20 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/90 px-2.5 py-1 font-mono text-[10px] text-cyan-300 sm:text-[11px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span>3D VCA SLAB · DRAG TO ROTATE</span>
          </div>
          <div className="rounded-full border border-amber-500/40 bg-slate-900/90 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wide text-amber-200/95 sm:text-[10px]">
            DIGITAL DISPLAY · NOT A CERTIFICATE
          </div>
        </div>
      </div>
    );
  },
);

export default Slab3DCanvas;
