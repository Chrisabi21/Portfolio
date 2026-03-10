import { useEffect, useState } from "react";
import "./cursorGlow.css";

type Position = {
  x: number;
  y: number;
};

export default function CursorGlow() {
  const [pos, setPos] = useState<Position>({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
}
