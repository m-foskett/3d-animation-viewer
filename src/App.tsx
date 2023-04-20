import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import Interface from "./components/Interface"

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [-125, 250, 350], fov: 50 }}>
        <Experience />
      </Canvas>
      <Interface />
    </>
  )
}

export default App
