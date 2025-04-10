"use client";

import { useState, use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Add AR View with dynamic import (to avoid SSR issues with Three.js)
const ARView = dynamic(() => import("@/components/ar-view"), { ssr: false });

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: "Rae's Painting",
    price: "GH₵300.00",
    image: "/images/sampleart.jpg",
    category: "Canvas",
    description:
      "A versatile DIY table that combines modern aesthetics with practical functionality. Perfect for both work and dining spaces.",
    details: [
      "Dimensions: 120cm x 75cm x 73cm",
      "Material: Premium engineered wood with solid oak legs",
      "Assembly time: 30-45 minutes",
      "Weight capacity: 80kg",
      "Available in multiple finishes",
    ],
    features: [
      "Easy tool-free assembly",
      "Scratch-resistant surface",
      "Adjustable feet for stability",
      "Cable management solutions",
      "Environmental-friendly materials",
    ],
  },
  {
    id: 2,
    name: "Open Space Bed",
    price: "GH₵5,000.00",
    image: "/images/bedding.png",
    category: "Bedding",
    description:
      "A versatile DIY table that combines modern aesthetics with practical functionality. Perfect for both work and dining spaces.",
    details: [
      "Dimensions: 120cm x 75cm x 73cm",
      "Material: Premium engineered wood with solid oak legs",
      "Assembly time: 30-45 minutes",
      "Weight capacity: 80kg",
      "Available in multiple finishes",
    ],
    features: [
      "Easy tool-free assembly",
      "Scratch-resistant surface",
      "Adjustable feet for stability",
      "Cable management solutions",
      "Environmental-friendly materials",
    ],
  },
  {
    id: 3,
    name: "Zuri Chair",
    price: "GH₵1,103.00",
    image: "/images/chair.png",
    category: "Furniture",
    description:
      "A versatile DIY table that combines modern aesthetics with practical functionality. Perfect for both work and dining spaces.",
    details: [
      "Dimensions: 120cm x 75cm x 73cm",
      "Material: Premium engineered wood with solid oak legs",
      "Assembly time: 30-45 minutes",
      "Weight capacity: 80kg",
      "Available in multiple finishes",
    ],
    features: [
      "Easy tool-free assembly",
      "Scratch-resistant surface",
      "Adjustable feet for stability",
      "Cable management solutions",
      "Environmental-friendly materials",
    ],
  },
  {
    id: 4,
    name: "Morning Plant",
    price: "GH₵700.00",
    image: "/images/plants.png",
    category: "Furniture",
    description:
      "A versatile DIY table that combines modern aesthetics with practical functionality. Perfect for both work and dining spaces.",
    details: [
      "Dimensions: 120cm x 75cm x 73cm",
      "Material: Premium engineered wood with solid oak legs",
      "Assembly time: 30-45 minutes",
      "Weight capacity: 80kg",
      "Available in multiple finishes",
    ],
    features: [
      "Easy tool-free assembly",
      "Scratch-resistant surface",
      "Adjustable feet for stability",
      "Cable management solutions",
      "Environmental-friendly materials",
    ],
  },
  {
    id: 5,
    name: "Cloudy Mirror",
    price: "GH₵350.00",
    image: "/images/mirrors.png",
    category: "Furniture",
    description:
      "A versatile DIY table that combines modern aesthetics with practical functionality. Perfect for both work and dining spaces.",
    details: [
      "Dimensions: 120cm x 75cm x 73cm",
      "Material: Premium engineered wood with solid oak legs",
      "Assembly time: 30-45 minutes",
      "Weight capacity: 80kg",
      "Available in multiple finishes",
    ],
    features: [
      "Easy tool-free assembly",
      "Scratch-resistant surface",
      "Adjustable feet for stability",
      "Cable management solutions",
      "Environmental-friendly materials",
    ],
  },
  // ... other products
];

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const unwrappedParams = use(params);
  const product = products.find((p) => p.id === parseInt(unwrappedParams.id));

  const startCamera = async () => {
    try {
      console.log(navigator.mediaDevices);
      // Check if mediaDevices is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera access is not supported in your browser");
      }

      // Request camera access with specific constraints for mobile
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }, // Prefer back camera
          width: { ideal: window.innerWidth },
          height: { ideal: window.innerHeight },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(console.error);
        setShowCamera(true);
        setCameraError(null);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      let errorMessage = "Unable to access camera. ";

      // Provide more specific error messages
      if (error instanceof DOMException) {
        switch (error.name) {
          case "NotAllowedError":
            errorMessage +=
              "Please grant camera permissions to use this feature.";
            break;
          case "NotFoundError":
            errorMessage += "No camera found on your device.";
            break;
          case "NotSupportedError":
            errorMessage += "Your browser doesn't support camera access.";
            break;
          default:
            errorMessage +=
              "Please make sure you're using a supported device and browser.";
        }
      }

      setCameraError(errorMessage);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  // Add a check for camera support when component mounts
  useEffect(() => {
    const checkCameraSupport = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setCameraError("Your browser doesn't support camera access");
          return;
        }

        // Check if we can access any video devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some(
          (device) => device.kind === "videoinput"
        );

        if (!hasCamera) {
          setCameraError("No camera found on your device");
        }
      } catch (error) {
        console.error("Error checking camera support:", error);
      }
    };

    checkCameraSupport();

    return () => {
      stopCamera();
    };
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-[#F4F1DE]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4
                ${
                  product.category === "Furniture"
                    ? "bg-[#F4F1DE] text-[#3D405B]"
                    : ""
                }
                ${
                  product.category === "Bedding"
                    ? "bg-[#F2CC8F] text-[#3D405B]"
                    : ""
                }
                ${
                  product.category === "Plants" ? "bg-[#81B29A] text-white" : ""
                }
                ${product.category === "Decor" ? "bg-[#E07A5F] text-white" : ""}
              `}
              >
                {product.category}
              </span>
              <h1 className="text-3xl font-serif text-[#E07A5F] mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-900 font-medium">
                {product.price}
              </p>
            </div>

            <div className="prose prose-sm">
              <p className="text-gray-600">{product.description}</p>

              <h3 className="text-lg font-medium mt-8 mb-4 text-[#E07A5F]">
                Product Details
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-medium mt-8 mb-4 text-[#E07A5F]">
                Features
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button
                variant="outline"
                className="flex-1 rounded-none border-black/30 text-black hover:border-2 hover:text-black"
                onClick={startCamera}
              >
                <span className="flex items-center justify-center gap-2">
                  <Camera className="h-4 w-4" />
                  View in Your Space
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-none border-black/30 text-black hover:border-2 hover:text-black"
              >
                Purchase Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Camera View Modal */}
      {showCamera && (
        <ARView
          modelUrl="" // We're not using 3D models yet, just images
          productImage={product.image}
          onClose={() => {
            stopCamera();
            setShowCamera(false);
          }}
        />
      )}

      {/* Error Message */}
      {cameraError && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-medium mb-4">Camera Error</h3>
            <p className="mb-6 text-gray-600">{cameraError}</p>
            <Button className="w-full" onClick={() => setCameraError(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
