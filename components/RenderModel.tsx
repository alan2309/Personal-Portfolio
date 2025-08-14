"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense,ReactNode } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";
interface MyComponentProps {
  children: ReactNode
}
const RenderModel = ({ children }: MyComponentProps) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative -z-10")}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
