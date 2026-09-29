import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface PokemonVariantData {
  id: string;
  name: string;
  number: string;
  set: string;
  rarity: string;
  type: 'fire' | 'electric' | 'psychic' | 'dragon' | 'water' | 'dark' | 'grass';
  cardImageUrl: string;
  characterSpriteUrl: string;
  rawPrice: number;
  psa9Price: number;
  psa10Price: number;
  artist: string;
  pokedexEntry: string;
  hp: number;
}

export const POPULAR_3D_POKEMON: PokemonVariantData[] = [
  {
    id: 'charizard-base',
    name: 'Charizard',
    number: '4/102',
    set: 'Base Set 1st Edition',
    rarity: 'Holo Rare',
    type: 'fire',
    cardImageUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    rawPrice: 1850,
    psa9Price: 4200,
    psa10Price: 9850,
    artist: 'Mitsuhiro Arita',
    pokedexEntry: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
    hp: 120
  },
  {
    id: 'pikachu-151',
    name: 'Pikachu',
    number: '173/165',
    set: '151 Scarlet & Violet',
    rarity: 'Special Illustration Rare',
    type: 'electric',
    cardImageUrl: 'https://images.pokemontcg.io/sv3pt5/173_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/sv3pt5/173_hires.png',
    rawPrice: 280,
    psa9Price: 550,
    psa10Price: 2850,
    artist: 'Hiroyuki Yamamoto',
    pokedexEntry: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    hp: 60
  },
  {
    id: 'umbreon-vmax',
    name: 'Umbreon VMAX',
    number: '215/203',
    set: 'Evolving Skies',
    rarity: 'Secret Alternate Art',
    type: 'dark',
    cardImageUrl: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    rawPrice: 850,
    psa9Price: 1450,
    psa10Price: 3800,
    artist: 'kawayoo',
    pokedexEntry: 'When exposed to the moon’s aura, the rings on its body glow faintly with mysterious dark power.',
    hp: 310
  },
  {
    id: 'rayquaza-vmax',
    name: 'Rayquaza VMAX',
    number: '218/203',
    set: 'Evolving Skies',
    rarity: 'Special Illustration Rare',
    type: 'dragon',
    cardImageUrl: 'https://images.pokemontcg.io/swsh7/218_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/swsh7/218_hires.png',
    rawPrice: 420,
    psa9Price: 780,
    psa10Price: 2200,
    artist: 'AKIRA EGAWA',
    pokedexEntry: 'It flies endlessly through the ozone layer. It descends to the ground only if it feeds on meteorites.',
    hp: 320
  },
  {
    id: 'mewtwo-gold',
    name: 'Mewtwo VSTAR',
    number: 'GG44/GG70',
    set: 'Crown Zenith',
    rarity: 'Galarian Gallery Gold',
    type: 'psychic',
    cardImageUrl: 'https://images.pokemontcg.io/swsh12pt5/GG44_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/swsh12pt5/GG44_hires.png',
    rawPrice: 190,
    psa9Price: 340,
    psa10Price: 950,
    artist: 'Gakutarou',
    pokedexEntry: 'A Pokémon created by recombination of Mew’s genes. It is said to have the most savage heart among Pokémon.',
    hp: 280
  },
  {
    id: 'blastoise-151',
    name: 'Blastoise ex',
    number: '200/165',
    set: '151 Scarlet & Violet',
    rarity: 'Special Illustration Rare',
    type: 'water',
    cardImageUrl: 'https://images.pokemontcg.io/sv3pt5/200_hires.png',
    characterSpriteUrl: 'https://images.pokemontcg.io/sv3pt5/200_hires.png',
    rawPrice: 140,
    psa9Price: 260,
    psa10Price: 820,
    artist: 'Mitsuhiro Arita',
    pokedexEntry: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    hp: 330
  }
];

interface Card3DPopoutCanvasProps {
  card: PokemonVariantData;
  variantType: 'holo' | 'first_edition' | 'sir' | 'gold' | 'rainbow' | 'reverse';
  popOutDepth: number; // 0.1 to 1.5
  auraIntensity: 'off' | 'low' | 'high' | 'hyper';
  foilFinish: 'prismatic' | 'gold_liquid' | 'diamond_star' | 'laser_rainbow';
  showWireframe?: boolean;
  className?: string;
}

export const Card3DPopoutCanvas: React.FC<Card3DPopoutCanvasProps> = ({
  card,
  variantType,
  popOutDepth = 0.5,
  auraIntensity = 'high',
  foilFinish = 'prismatic',
  showWireframe = false,
  className = 'w-full h-[500px]'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Root Card Group
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    // 1. CARD BACKING / FRAME MESH
    const cardWidth = 2.4;
    const cardHeight = 3.35;
    const cardThickness = 0.08;

    const cardBaseGeo = new THREE.BoxGeometry(cardWidth, cardHeight, cardThickness);
    
    // Texture Loaders
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'Anonymous';
    const cardTexture = textureLoader.load(card.cardImageUrl);

    const baseMat = new THREE.MeshStandardMaterial({
      map: cardTexture,
      roughness: 0.25,
      metalness: variantType === 'gold' ? 0.8 : 0.2,
      wireframe: showWireframe
    });

    const cardBaseMesh = new THREE.Mesh(cardBaseGeo, baseMat);
    cardBaseMesh.castShadow = true;
    cardBaseMesh.receiveShadow = true;
    cardGroup.add(cardBaseMesh);

    // 2. 3D POP-OUT CHARACTER SPRITE LAYER (Extruded/Planes)
    const charGeo = new THREE.PlaneGeometry(2.1, 2.9);
    
    // Canvas texture for 3D Pop-out Character cutout with glowing aura border
    const charTexture = textureLoader.load(card.characterSpriteUrl);
    
    const charMat = new THREE.MeshPhysicalMaterial({
      map: charTexture,
      transparent: true,
      opacity: 0.96,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
      wireframe: showWireframe
    });

    const charMesh = new THREE.Mesh(charGeo, charMat);
    // Position character in front of card according to popOutDepth
    const targetZ = 0.15 + popOutDepth * 0.65;
    charMesh.position.set(0, 0.05, targetZ);
    cardGroup.add(charMesh);

    // Duplicate shadow layer behind character
    const charShadowGeo = new THREE.PlaneGeometry(2.1, 2.9);
    const charShadowMat = new THREE.MeshBasicMaterial({
      map: charTexture,
      color: 0x000000,
      transparent: true,
      opacity: 0.4
    });
    const charShadowMesh = new THREE.Mesh(charShadowGeo, charShadowMat);
    charShadowMesh.position.set(0.08, -0.08, targetZ * 0.4);
    cardGroup.add(charShadowMesh);

    // 3. HOLOGRAPHIC FOIL SHIMMER OVERLAY
    const foilGeo = new THREE.PlaneGeometry(cardWidth - 0.04, cardHeight - 0.04);
    
    const foilCanvas = document.createElement('canvas');
    foilCanvas.width = 512;
    foilCanvas.height = 512;
    const foilCtx = foilCanvas.getContext('2d');

    const redrawFoil = (time: number, rotY: number) => {
      if (!foilCtx) return;
      foilCtx.clearRect(0, 0, 512, 512);

      const offset = (rotY * 200 + time * 120) % 512;

      let grad = foilCtx.createLinearGradient(offset, 0, offset + 256, 512);

      if (foilFinish === 'gold_liquid') {
        grad.addColorStop(0, 'rgba(251, 191, 36, 0.6)');
        grad.addColorStop(0.5, 'rgba(253, 224, 71, 0.9)');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0.6)');
      } else if (foilFinish === 'diamond_star') {
        grad.addColorStop(0, 'rgba(168, 85, 247, 0.5)');
        grad.addColorStop(0.3, 'rgba(34, 211, 238, 0.7)');
        grad.addColorStop(0.7, 'rgba(236, 72, 153, 0.6)');
        grad.addColorStop(1, 'rgba(250, 204, 21, 0.5)');
      } else if (foilFinish === 'laser_rainbow') {
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.6)');
        grad.addColorStop(0.2, 'rgba(249, 115, 22, 0.6)');
        grad.addColorStop(0.4, 'rgba(234, 179, 8, 0.6)');
        grad.addColorStop(0.6, 'rgba(34, 197, 94, 0.6)');
        grad.addColorStop(0.8, 'rgba(59, 130, 246, 0.6)');
        grad.addColorStop(1, 'rgba(168, 85, 247, 0.6)');
      } else { // Prismatic
        grad.addColorStop(0, 'rgba(34, 211, 238, 0.5)');
        grad.addColorStop(0.33, 'rgba(192, 132, 252, 0.7)');
        grad.addColorStop(0.66, 'rgba(251, 191, 36, 0.6)');
        grad.addColorStop(1, 'rgba(56, 189, 248, 0.5)');
      }

      foilCtx.fillStyle = grad;
      foilCtx.fillRect(0, 0, 512, 512);

      // Diagonal sheen streak
      foilCtx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      foilCtx.beginPath();
      foilCtx.moveTo(offset - 100, 0);
      foilCtx.lineTo(offset, 0);
      foilCtx.lineTo(offset + 100, 512);
      foilCtx.lineTo(offset, 512);
      foilCtx.closePath();
      foilCtx.fill();
    };

    redrawFoil(0, 0);

    const foilTexture = new THREE.CanvasTexture(foilCanvas);
    const foilMat = new THREE.MeshBasicMaterial({
      map: foilTexture,
      transparent: true,
      opacity: variantType === 'reverse' ? 0.25 : 0.45,
      blending: THREE.AdditiveBlending,
      wireframe: showWireframe
    });

    const foilMesh = new THREE.Mesh(foilGeo, foilMat);
    foilMesh.position.set(0, 0, targetZ * 0.5);
    cardGroup.add(foilMesh);

    // 4. ELEMENTAL AURA PARTICLES (Fire, Lightning, Psychic, Water, Cosmic)
    const particleCount = auraIntensity === 'hyper' ? 240 : auraIntensity === 'high' ? 140 : auraIntensity === 'low' ? 60 : 0;
    
    let auraColor = 0x22d3ee; // Default Cyan
    if (card.type === 'fire') auraColor = 0xf97316; // Orange Fire
    else if (card.type === 'electric') auraColor = 0xfacc15; // Yellow Lightning
    else if (card.type === 'psychic') auraColor = 0xc084fc; // Purple Psychic
    else if (card.type === 'dragon') auraColor = 0x38bdf8; // Dragon Stardust
    else if (card.type === 'dark') auraColor = 0xa855f7; // Cosmic Moon
    else if (card.type === 'water') auraColor = 0x06b6d4; // Hydro Stream

    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 3.2;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.0;
      particlePositions[i * 3 + 2] = targetZ + (Math.random() - 0.2) * 1.5;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: 0.008 + Math.random() * 0.015,
        z: (Math.random() - 0.5) * 0.01
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: auraColor,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleMesh = new THREE.Points(particleGeo, particleMat);
    cardGroup.add(particleMesh);

    // 5. LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const typeLight = new THREE.PointLight(auraColor, 4, 10);
    typeLight.position.set(2, 2, 4);
    scene.add(typeLight);

    const rimLight = new THREE.PointLight(0xffffff, 2, 8);
    rimLight.position.set(-2, -2, 3);
    scene.add(rimLight);

    // 6. INTERACTION & MOUSE PARALLAX TILT
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX = x;
      mouseY = y;

      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Touch support for mobile tilt
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5;
        const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5;
        targetRotationY = x * 0.8;
        targetRotationX = -y * 0.8;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 7. ANIMATION LOOP
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Rotation
      cardGroup.rotation.y += (targetRotationY - cardGroup.rotation.y) * 0.08;
      cardGroup.rotation.x += (targetRotationX - cardGroup.rotation.x) * 0.08;

      // 3D Character Floating Bobbing Effect
      charMesh.position.y = 0.05 + Math.sin(elapsedTime * 2.2) * 0.04;
      charMesh.position.z = targetZ + Math.cos(elapsedTime * 1.8) * 0.03;

      // Particle Motion Loop
      if (particleCount > 0) {
        const posArr = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          posArr[i * 3 + 1] += particleVelocities[i].y;
          posArr[i * 3] += Math.sin(elapsedTime * 3 + i) * 0.003;

          // Reset particle if floating off top
          if (posArr[i * 3 + 1] > 2.2) {
            posArr[i * 3 + 1] = -2.2;
            posArr[i * 3] = (Math.random() - 0.5) * 3.2;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      // Foil Sheen Update
      redrawFoil(elapsedTime, cardGroup.rotation.y);
      foilTexture.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [card, variantType, popOutDepth, auraIntensity, foilFinish, showWireframe]);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_40px_rgba(34,211,238,0.15)] ${className}`}>
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-hud-grid opacity-20 pointer-events-none" />
      
      {/* 3D Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />

      {/* Holographic Badge Indicator */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/40 font-mono text-xs text-cyan-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-bold">PARALLAX 3D POP-OUT • MOUSE TILT</span>
      </div>
    </div>
  );
};
