'use client';

import CalcCard from './organisms/CalcCard';
import AnimatedBackground from './organisms/AnimatedBackground';
import React, { useState, useEffect } from 'react';
import { BackgroundController } from './organisms/BackgroundController';

export default function Home() {
  const [background, setBackground] = useState('Light');

  useEffect(() => {
    const color = background === 'Dark' ? 'black' : '';
    document.body.style.backgroundColor = color;
  }, [background]);

  return (
    <>
      <BackgroundController
        onBackgroundChange={setBackground}
        currentBackground={background}
      />
      {background === 'Animated' && (
        <AnimatedBackground className='relative max-h-screen bg-opacity-100 bg-black h-screen w-full overflow-hidden' />
      )}
      <CalcCard />
    </>
  );
}
