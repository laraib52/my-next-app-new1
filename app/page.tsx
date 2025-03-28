import React from "react"; // ✅ Explicitly import React
import Image from "next/image";
import TestButton from "@/components/common/TestButton"
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
            <p className="py-6">Shop your favorite items here with ease.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
