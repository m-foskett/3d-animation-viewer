// import React from 'react'

import { OrbitControls } from "@react-three/drei";
import Guts from "./Guts";

const Experience = () => {
  return (
    <mesh>
        <OrbitControls />
        {/* Lighting */}
        <ambientLight />
        <directionalLight position={[-625, 1250, 1750]} castShadow shadow-mapSize={1024} />
        {/* Model */}
        <group position={[0, -1, 0]}>
            <Guts />
        </group>
        {/* Floor */}
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow >
            <planeBufferGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
        </mesh>
    </mesh>
  );
}

export default Experience;