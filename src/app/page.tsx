"use client";

import CalcCard from "./organisms/CalcCard";
import AnimatedBackground from "./organisms/AnimatedBackground";
import { Button } from "./atoms/button";
import { useState } from "react";

export default function Home() {
  const [background, setBackground] = useState(true);

  const toggleBackground = () => {
    setBackground((prevState) => !prevState);
  };
  return (
    <>
      <Button
        className="z-1000 relative left-4 top-5"
        onClick={toggleBackground}
      >
        Toggle background
      </Button>
      {background ? (
        <AnimatedBackground className="relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden"></AnimatedBackground>
      ) : null}
      <CalcCard></CalcCard>
    </>
  );
}
