import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./components/ui/Cube";
import { useState } from "react";

export default function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
  ];
  const [color, setColor] = useState("");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };
  return (
    <div>
      <Canvas style={{ height: "90vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube color={color} />
        <OrbitControls />
      </Canvas>
      <div className="button_container">
        <button className="color_change" onClick={getRandomColor}>
          Change color
        </button>
      </div>
    </div>
  );
}
