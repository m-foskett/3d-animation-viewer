import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene"
import Interface from "./components/Interface"

function App() {
  return (
    <>
      {/* Base Canvas */}
      <Canvas shadows camera={{ position: [-125, 250, 350], fov: 50 }}>
        {/* Model Display Scene */}
        <Scene />
      </Canvas>
      {/* Animation Select Interface */}
      <Interface />
    </>
  )
}

export default App
