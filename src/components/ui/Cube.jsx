import { useState } from "react";

export function Cube({ color }) {
  const [size, _setSize] = useState([2, 2, 2]);

  return (
    <>
      <mesh scale={size}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
