import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Slab3DCanvasProps {
  cardImageUrl?: string;
  grade?: number;
  gradeText?: string;
  serialNumber?: string;
  className?: string;
  interactive?: boolean;
}

export const Slab3DCanvas: React.FC<Slab3DCanvasProps> = ({
  cardImageUrl = 'https://images.pokemontcg.io/sv3pt5/173_hires.png',
  grade = 10,
  gradeText = 'GEM MINT',
  serialNumber = 'VCA-000-000-001',
  className = 'w-full h-[400px]',
  interactive = true
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group for the floating Slab
    const slabGroup = new THREE.Group();
    scene.add(slabGroup);

    // Background Particle Motes Field
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      particleSpeeds[i] = 0.003 + Math.random() * 0.008;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.06,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // Outer Acrylic Slab Geometry
    const slabWidth = 2.4;
    const slabHeight = 3.6;
    const slabThickness = 0.22;

    const acrylicGeo = new THREE.BoxGeometry(slabWidth, slabHeight, slabThickness);
    const acrylicMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.38,
      roughness: 0.05,
      metalness: 0.15,
      transmission: 0.92,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      side: THREE.DoubleSide
    });
    const acrylicMesh = new THREE.Mesh(acrylicGeo, acrylicMat);
    slabGroup.add(acrylicMesh);

    // Bevel frame outline
    const borderEdges = new THREE.EdgesGeometry(acrylicGeo);
    const borderMat = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.6 });
    const borderLine = new THREE.LineSegments(borderEdges, borderMat);
    slabGroup.add(borderLine);

    // Card Mesh inside Acrylic
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'Anonymous';
    const cardTexture = textureLoader.load(cardImageUrl);

    const cardGeo = new THREE.PlaneGeometry(1.8, 2.5);
    const cardMat = new THREE.MeshBasicMaterial({ map: cardTexture, side: THREE.DoubleSide });
    const cardMesh = new THREE.Mesh(cardGeo, cardMat);
    cardMesh.position.set(0, -0.35, 0.01);
    slabGroup.add(cardMesh);

    // Top Holographic Header Nameplate
    const headerGeo = new THREE.PlaneGeometry(2.1, 0.55);
    const canvasHeader = document.createElement('canvas');
    canvasHeader.width = 512;
    canvasHeader.height = 128;
    const ctx = canvasHeader.getContext('2d');

    const redrawHeaderCanvas = (shiftOffset = 0) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, 512, 128);

      // Dynamic Holographic Gradient with rotation shift
      const grad = ctx.createLinearGradient(shiftOffset, 0, 512 + shiftOffset, 128);
      grad.addColorStop(0, '#22d3ee');
      grad.addColorStop(0.25, '#c084fc');
      grad.addColorStop(0.5, '#fbbf24');
      grad.addColorStop(0.75, '#38bdf8');
      grad.addColorStop(1, '#22d3ee');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 128);

      // Light sweep sheen band
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.beginPath();
      ctx.moveTo(100 + (shiftOffset % 300), 0);
      ctx.lineTo(180 + (shiftOffset % 300), 0);
      ctx.lineTo(120 + (shiftOffset % 300), 128);
      ctx.lineTo(40 + (shiftOffset % 300), 128);
      ctx.closePath();
      ctx.fill();

      // Header Copy
      ctx.fillStyle = '#05070a';
      ctx.font = '900 48px Orbitron, sans-serif';
      ctx.fillText('VCA', 24, 75);

      ctx.beginPath();
      ctx.moveTo(170, 20);
      ctx.lineTo(170, 108);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#05070a';
      ctx.stroke();

      ctx.font = '900 38px Orbitron, sans-serif';
      ctx.fillText(`#${grade}`, 200, 60);

      ctx.font = '800 20px Orbitron, sans-serif';
      ctx.fillText(gradeText, 200, 95);

      ctx.font = '600 16px "JetBrains Mono", monospace';
      ctx.fillText(serialNumber, 24, 115);
    };

    redrawHeaderCanvas(0);

    const headerTexture = new THREE.CanvasTexture(canvasHeader);
    const headerMat = new THREE.MeshBasicMaterial({ map: headerTexture, side: THREE.DoubleSide });
    const headerMesh = new THREE.Mesh(headerGeo, headerMat);
    headerMesh.position.set(0, 1.25, 0.02);
    slabGroup.add(headerMesh);

    // Glowing Pedestal Dais below
    const daisGeo = new THREE.CylinderGeometry(2.0, 2.5, 0.3, 32);
    const daisMat = new THREE.MeshStandardMaterial({
      color: 0x0a101d,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x082f49,
      emissiveIntensity: 0.5
    });
    const daisMesh = new THREE.Mesh(daisGeo, daisMat);
    daisMesh.position.set(0, -2.4, 0);
    scene.add(daisMesh);

    const daisRingGeo = new THREE.RingGeometry(1.8, 2.0, 32);
    const daisRingMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, side: THREE.DoubleSide });
    const daisRing = new THREE.Mesh(daisRingGeo, daisRingMat);
    daisRing.rotation.x = Math.PI / 2;
    daisRing.position.set(0, -2.24, 0);
    scene.add(daisRing);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x22d3ee, 3.5, 12);
    cyanPointLight.position.set(3, 3, 4);
    scene.add(cyanPointLight);

    const violetPointLight = new THREE.PointLight(0xc084fc, 2.5, 10);
    violetPointLight.position.set(-3, -2, 3);
    scene.add(violetPointLight);

    // Interactivity: Drag to Rotate with Momentum & Touch Support
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let isIdle = false;

    const resetIdleTimer = () => {
      isIdle = false;
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
      }, 4000); // Resume auto-rotate after 4s idle
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

      velocity = { x: deltaX * 0.008, y: deltaY * 0.008 };

      slabGroup.rotation.y += velocity.x;
      slabGroup.rotation.x += velocity.y;

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
      if (e.touches.length === 1) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => handlePointerUp();

    if (interactive) {
      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      container.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);
    }

    resetIdleTimer();

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Particle Drift Animation
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 7) positions[i * 3 + 1] = -7;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Momentum Velocity Damping
      if (!isDragging) {
        if (Math.abs(velocity.x) > 0.0001 || Math.abs(velocity.y) > 0.0001) {
          slabGroup.rotation.y += velocity.x;
          slabGroup.rotation.x += velocity.y;
          velocity.x *= 0.94; // inertia damping
          velocity.y *= 0.94;
        }

        // Idle floating sine wave and slow spin
        if (isIdle) {
          slabGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
          slabGroup.rotation.y += 0.006;
          slabGroup.rotation.x *= 0.98;
        }
      }

      // Shimmer sweep texture update based on slab rotation
      if (headerTexture && ctx) {
        const angleShift = Math.floor(slabGroup.rotation.y * 120);
        redrawHeaderCanvas(angleShift);
        headerTexture.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
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
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [cardImageUrl, grade, gradeText, serialNumber, interactive]);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-950/80 backdrop-blur-md ${className}`}>
      {/* HUD scanlines */}
      <div className="absolute inset-0 hud-scanlines pointer-events-none z-10 opacity-30" />
      
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Control prompt overlay */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono text-cyan-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D HOLOGRAPHIC SLAB • DRAG TO ROTATE</span>
      </div>
    </div>
  );
};
