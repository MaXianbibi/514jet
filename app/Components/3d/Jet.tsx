"use client"

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Étendre les effets de post-traitement

export default function Model() {
  const gltf = useGLTF("/lowPolyJet.gltf");
  const modelRef = useRef<THREE.Object3D | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const currentRotation = useRef(new THREE.Quaternion());
  const [isIntroDone, setIsIntroDone] = useState(false);
  const introProgress = useRef(0);

  // Gestion des mouvements de la souris
  React.useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const model = modelRef.current;
    if (!model) return;

    if (!isIntroDone) {
      // Progression rapide et non linéaire avec une courbe d'accélération
      introProgress.current += delta * 1.5; // Vitesse de base plus rapide
      const progress = Math.min(1, 1 - Math.pow(1 - introProgress.current, 3)); // Courbe d'easing cubique pour un départ lent et une fin rapide

      // Trajectoire dramatique
      const startPos = new THREE.Vector3(-30, -10, -50); // Loin à gauche, en bas, et derrière
      const midPos = new THREE.Vector3(10, 5, -10); // Point intermédiaire avec un virage
      const endPos = new THREE.Vector3(0, 0, 0); // Position finale

      // Interpolation en deux étapes pour un mouvement cinématographique
      let position;
      if (progress < 0.5) {
        // Première moitié : de startPos à midPos
        position = startPos.clone().lerp(midPos, progress * 2);
      } else {
        // Deuxième moitié : de midPos à endPos
        position = midPos.clone().lerp(endPos, (progress - 0.5) * 2);
      }
      model.position.copy(position);

      // Rotation dynamique pour un effet de vol réaliste
      const startRoll = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 1.5)); // Roulis initial à gauche
      const midRoll = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.3, 0.5, -0.8)); // Virage dramatique
      const endRoll = new THREE.Quaternion(); // Orientation finale neutre

      let quaternion;
      if (progress < 0.5) {
        quaternion = startRoll.clone().slerp(midRoll, progress * 2);
      } else {
        quaternion = midRoll.clone().slerp(endRoll, (progress - 0.5) * 2);
      }
      model.quaternion.copy(quaternion);

      // Ajout d'une légère oscillation pour simuler la turbulence
      const turbulence = Math.sin(state.clock.getElapsedTime() * 10) * 0.1;
      model.position.y += turbulence;

      if (progress === 1) {
        setIsIntroDone(true); // Fin de la mise en scène
      }
    } else {
      // Comportement interactif après l'intro
      const target = new THREE.Vector3(-mouse.current.x * 10, -mouse.current.y * 10, -10);
      const direction = target.clone().sub(model.position).normalize();
      const forward = new THREE.Vector3(0, 0, -1);

      const rollAngle = THREE.MathUtils.lerp(model.rotation.z, -mouse.current.x * 1.2, 0.1);
      const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(forward, direction);
      const rollQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rollAngle);
      const finalQuaternion = targetQuaternion.multiply(rollQuaternion);

      currentRotation.current.slerp(finalQuaternion, 0.01);
      model.quaternion.copy(currentRotation.current);

      const time = Date.now() * 0.001;
      model.position.y = Math.sin(time) * 1 + Math.cos(time * 0.5) * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[1.5, 1.5, 1.5]}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  );
}

