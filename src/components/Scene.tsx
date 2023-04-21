import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import Guts from "./Guts";
import { useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";
import { useEffect } from "react";

const Scene = () => {
  // Texture Loading
  const [roughness, normal ] = useLoader(TextureLoader, [
    "textures/terrain-roughness.jpg",
    "textures/terrain-roughness.jpg",
  ]);
  // Set Texture Properties
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5,5);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  return (
    // Root Scene
    <mesh>
        {/* Camera Controls */}
        <OrbitControls />
        <color args={[1, 0, 0]} attach='background' />
        {/* Lighting */}
        <ambientLight castShadow intensity={1}/>
        <directionalLight position={[-1000, 3000, 2000]} castShadow shadow-mapSize={1024} />
        {/* Model */}
        <group position={[0, -1, 0]}>
            <Guts />
        </group>
        {/* Ground */}
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow castShadow >
            <planeGeometry args={[1000, 1000]} />
            <MeshReflectorMaterial
              normalMap={normal}
              normalScale={[0.15, 0.15]}
              roughnessMap={roughness}
              envMapIntensity={0}
              dithering={true}
              color={[0.015, 0.015, 0.015]}
              roughness={0.7}
              blur={[1000, 400]}
              mixBlur={30}
              mixStrength={80}
              mixContrast={1}
              resolution={1024}
              mirror={0}
              depthScale={0.01}
              minDepthThreshold={0.9}
              maxDepthThreshold={1}
              depthToBlurRatioBias={0.25}
              reflectorOffset={0.2}
            />
        </mesh>
    </mesh>
  );
}

export default Scene;