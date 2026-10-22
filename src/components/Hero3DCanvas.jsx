import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer, scene, camera, animationFrameId;
    let mainGroup, sphereMesh, innerMesh, ring1, ring2, particleSystem;
    let sphereGeo, sphereMat, innerGeo, innerMat, ringGeo1, ringMat1, ringGeo2, ringMat2, particleGeometry, particleMaterial;

    try {
      // Scene
      scene = new THREE.Scene();

      const width = container.clientWidth || window.innerWidth || 800;
      const height = container.clientHeight || window.innerHeight || 600;

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);

      // Group for objects
      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. Core Sphere Wireframe
      sphereGeo = new THREE.IcosahedronGeometry(7.5, 2);
      sphereMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      mainGroup.add(sphereMesh);

      // 2. Inner Glowing Core
      innerGeo = new THREE.IcosahedronGeometry(4.5, 1);
      innerMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      innerMesh = new THREE.Mesh(innerGeo, innerMat);
      mainGroup.add(innerMesh);

      // 3. Orbital Rings
      ringGeo1 = new THREE.TorusGeometry(10.5, 0.04, 16, 100);
      ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
      });
      ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      mainGroup.add(ring1);

      ringGeo2 = new THREE.TorusGeometry(12, 0.03, 16, 100);
      ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.35,
      });
      ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 4;
      ring2.rotation.x = -Math.PI / 6;
      mainGroup.add(ring2);

      // 4. Floating Particles Cloud
      const particleCount = 240;
      particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorCyan = new THREE.Color(0x06b6d4);
      const colorPurple = new THREE.Color(0xa855f7);
      const colorEmerald = new THREE.Color(0x10b981);

      for (let i = 0; i < particleCount; i++) {
        const radius = 6 + Math.random() * 14;
        const theta = (Math.random() - 0.5) * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 2;

        positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
        positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = radius * Math.cos(theta);

        const mixedColor = i % 3 === 0 ? colorCyan : i % 3 === 1 ? colorPurple : colorEmerald;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      particleMaterial = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      mainGroup.add(particleSystem);

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (event) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        mouseX = (x / (container.clientWidth || 800) - 0.5) * 2;
        mouseY = -(y / (container.clientHeight || 600) - 0.5) * 2;
      };

      window.addEventListener("mousemove", onMouseMove);

      const onResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth || window.innerWidth || 800;
        const h = container.clientHeight || window.innerHeight || 600;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        mainGroup.rotation.y = elapsedTime * 0.15 + targetX * 0.5;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 + targetY * 0.4;

        sphereMesh.rotation.y = elapsedTime * 0.08;
        innerMesh.rotation.x = -elapsedTime * 0.12;
        ring1.rotation.z = elapsedTime * 0.2;
        ring2.rotation.z = -elapsedTime * 0.15;
        particleSystem.rotation.y = -elapsedTime * 0.05;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        if (sphereGeo) sphereGeo.dispose();
        if (sphereMat) sphereMat.dispose();
        if (innerGeo) innerGeo.dispose();
        if (innerMat) innerMat.dispose();
        if (ringGeo1) ringGeo1.dispose();
        if (ringMat1) ringMat1.dispose();
        if (ringGeo2) ringGeo2.dispose();
        if (ringMat2) ringMat2.dispose();
        if (particleGeometry) particleGeometry.dispose();
        if (particleMaterial) particleMaterial.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL 3D canvas could not initialize, falling back to cyber ambient graphics:", err);
      setWebGLFailed(true);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {webGLFailed && (
        <div className="absolute inset-0 bg-radial-gradient from-cyan-900/20 via-transparent to-transparent opacity-60" />
      )}
    </div>
  );
}
