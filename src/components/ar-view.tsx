"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ARViewProps {
  modelUrl: string;
  onClose: () => void;bp
}

export default function ARView({ modelUrl, onClose }: ARViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Clean up
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return (
    <div ref={containerRef} className="fixed inset-0">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full"
      >
        Close
      </button>
    </div>
  );
}
