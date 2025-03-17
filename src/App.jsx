import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./components/ui/Cube";

export default function App() {
  return (
    <div>
      <Canvas style={{ height: "90vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls />
      </Canvas>
      <div>
        <button className="color_change">Change color</button>
      </div>
    </div>
  );
}
