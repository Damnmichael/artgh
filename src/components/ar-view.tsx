"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

interface ARViewProps {
  modelUrl: string;
  productImage: string;
  onClose: () => void;
}

export default function ARView({
  
  productImage,
  onClose,
}: ARViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store container reference
    const container = containerRef.current;

    // Set up Three.js scene
    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;

    // Set up camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const camera = cameraRef.current;
    camera.position.z = 5;

    // Set up renderer
    rendererRef.current = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create a plane for the product image
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(productImage, (texture) => {
      const aspectRatio = texture.image.width / texture.image.height;
      const geometry = new THREE.PlaneGeometry(aspectRatio * 2, 2);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8,
      });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
    });

    // Add some light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      if (!scene || !camera || !renderer) return;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (renderer && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      if (scene) {
        scene.clear();
      }
    };
  }, [productImage]);

  return (
    <div className="fixed inset-0 z-50">
      <div ref={containerRef} className="relative h-full">
        {/* Controls */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-sm"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm w-full mx-4">
          <p className="text-sm text-center">
            Move your device to place the item in your space
          </p>
        </div>
      </div>
    </div>
  );
}
