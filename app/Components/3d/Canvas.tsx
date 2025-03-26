
"use client"

import React from "react";
import { Canvas,  } from "@react-three/fiber";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Model from "./Jet";

export default function Jet() {
    return (
      <div className="flex flex-col gap-5 absolute z-10 overflow-visible  ">
        <Canvas
          style={{ height: "50vh", width: "50vw", background: "transparent" }}
          camera={{ position: [0, 5, 10], fov: 60 }}
          shadows
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.3} color="#87CEEB" />
          <directionalLight
            position={[5, 8, 5]}
            intensity={6.0}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <pointLight position={[0, 3, 2]} intensity={80} color="#4169E1" distance={20} decay={2} />
          <pointLight position={[0, 5, -5]} intensity={50} color="#87CEEB" distance={15} decay={2} />
  
          <Suspense fallback={null}>
            <Model />
          </Suspense>
  
          <EffectComposer>
            <Bloom intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.1} />
          </EffectComposer>
        </Canvas>
      </div>
    );
  }