'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { ArrowRight, ShieldCheck, Cpu, Sparkles, BookOpen } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particlesMesh: THREE.Points;
    let ringMesh: THREE.LineSegments;
    let coreMesh: THREE.Mesh;
    let animationFrameId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        currentMount.clientWidth / currentMount.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 28;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      // 1. Create Neural / Cyber Shield Particles
      const particleCount = 1200;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color('#2563eb'); // Electric Blue
      const color2 = new THREE.Color('#d926aa'); // Vibrant Magenta
      const color3 = new THREE.Color('#06b6d4'); // Neon Cyan

      for (let i = 0; i < particleCount; i++) {
        // Distribute in a spherical / orbital shell
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * 16 + 2;

        const sinPhi = Math.sin(phi);
        const x = r * sinPhi * Math.cos(theta);
        const y = r * sinPhi * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Interpolate brand colors
        const mixed = color1.clone().lerp(color2, Math.random()).lerp(color3, Math.random() * 0.5);
        colors[i * 3] = mixed.r;
        colors[i * 3 + 1] = mixed.g;
        colors[i * 3 + 2] = mixed.b;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.28,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });

      particlesMesh = new THREE.Points(particleGeo, particleMat);
      scene.add(particlesMesh);

      // 2. Add an Icosahedron Wireframe Core (The Cognitive Shield)
      const coreGeo = new THREE.IcosahedronGeometry(7, 1);
      const wireframe = new THREE.WireframeGeometry(coreGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      ringMesh = new THREE.LineSegments(wireframe, lineMat);
      scene.add(ringMesh);

      // 3. Central Glowing Pulsar Sphere
      const sphereGeo = new THREE.SphereGeometry(3.5, 32, 32);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x05070f,
        transparent: true,
        opacity: 0.9,
      });
      coreMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(coreMesh);

      // Mouse tracking
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = currentMount.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };

      window.addEventListener('mousemove', handleMouseMove);

      const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Subtle dynamic rotation
        particlesMesh.rotation.y = elapsedTime * 0.08 + targetX * 0.5;
        particlesMesh.rotation.x = elapsedTime * 0.04 + targetY * 0.3;

        ringMesh.rotation.y = -elapsedTime * 0.12 + targetX * 0.4;
        ringMesh.rotation.z = elapsedTime * 0.06;

        const pulseScale = 1 + Math.sin(elapsedTime * 2) * 0.04;
        coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (currentMount && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to 2D CSS visuals:', err);
      setWebglSupported(false);
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 cyber-grid">
      {/* Dynamic 3D WebGL Canvas or Fallback */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        {(!webglSupported || reducedMotion) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/20 via-fuchsia-600/20 to-orange-500/20 blur-3xl animate-pulse-slow" />
          </div>
        )}
      </div>

      {/* Radial Atmospheric Lighting Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-hero-glow pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Mission Badges */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 mb-6 backdrop-blur-md shadow-lg shadow-black/50">
          <span className="flex h-2 w-2 rounded-full bg-fuchsia-500 animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Human Protection & AI Innovation
          </span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs font-medium text-cyan-400">EVAR Intelligence Ltd.</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Building{' '}
          <span className="text-gradient">Intelligent Solutions</span>
          <br />
          for a Safer Tomorrow
        </h1>

        {/* Master Supporting Message */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          AI awareness, intelligent automation and practical AI solutions designed with human
          responsibility at the center. Protecting organizations and individuals in the frontier
          intelligence era.
        </p>

        {/* Dual Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          <div className="glass-panel p-4 rounded-xl flex items-start space-x-3.5 border-l-4 border-l-fuchsia-500 hover:border-l-cyan-400 transition-colors">
            <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                Pillar 01
              </div>
              <h3 className="text-sm font-semibold text-white">AI Awareness & Literacy</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Executive masterclasses, workforce literacy, red-teaming, and responsible AI governance.
              </p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl flex items-start space-x-3.5 border-l-4 border-l-blue-500 hover:border-l-orange-400 transition-colors">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Pillar 02
              </div>
              <h3 className="text-sm font-semibold text-white">AI Automation & Products</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Multi-agent workflow orchestration, deepfake defenses, and confidential neural enclaves.
              </p>
            </div>
          </div>
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-500 text-white font-semibold shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold backdrop-blur-md transition-all"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Learn About EVAR</span>
          </Link>
        </div>

        {/* Live Security Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">Zero-Trust</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
              AI Safety & Alignment
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient-cyan tracking-tight">&lt; 5ms</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
              Defense Proxy Latency
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">ISO 42001</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
              AI Governance Compliant
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-fuchsia-400 tracking-tight">Human-Centric</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
              Bounded Agency Oversight
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
