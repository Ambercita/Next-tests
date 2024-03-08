"use client";

import { Novatrix } from "uvcanvas";
import { MaskContainer } from "./components/mask";
import { TypewriterEffect } from "./components/typewriter";

import { useState } from "react";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-screen w-screen">
      <MaskContainer
        revealText="Shhh... no se lo digas a nadie 🤫"
        revealSize={600}
        className="flex items-center justify-center"
        isHovered={isHovered}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
          className="text-2l absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <TypewriterEffect
            words={[
              {
                text: "¿Te cuento un secreto?",
                className: isHovered
                  ? "font-bold text-transparent py-2"
                  : "font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black py-2",
              },
            ]}
            cursorClassName={isHovered ? "bg-transparent" : "bg-black"}
          />
        </div>
        <Novatrix />
      </MaskContainer>
    </div>
  );
}
