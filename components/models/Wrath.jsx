"use client";
import React, { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Wrath(props) {
  const { nodes, materials } = useGLTF(
    "/models/3d_model_of_a_stone_golem_full_body_g.glb"
  );

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.15;
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 2.7}
        // autoRotate={true}
        // autoRotateSpeed={0.5}
      />
      <group
        {...props}
        ref={modelRef}
        dispose={null}
        scale={[3.8, 3.8, 3.8]}
        rotation={[0, -Math.PI / 2, -0.02]}
        position={[0, 0, 0]}
      >
        <mesh
          name="tripo_node_e15d4b35-f607-4188-9c1b-fde205dda01d"
          castShadow
          receiveShadow
          geometry={
            nodes["tripo_node_e15d4b35-f607-4188-9c1b-fde205dda01d"].geometry
          }
          material={
            materials["tripo_material_e15d4b35-f607-4188-9c1b-fde205dda01d"]
          }
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/3d_model_of_a_stone_golem_full_body_g.glb");
