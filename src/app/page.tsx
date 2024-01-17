'use client';

import CalcCard from './organisms/CalcCard';
import AnimatedBackground from './organisms/AnimatedBackground';
import { Button } from './atoms/button';
import { useState, useEffect } from 'react';
import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './atoms/popover';

export default function Home() {
  const [background, setBackground] = useState('light');

  useEffect(() => {
    if (background === 'Dark') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = '';
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [background]);

  const toggleBackground = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setBackground(target.innerText);
  };
  return (
    <>
      {background === 'Animated' ? (
        <AnimatedBackground className='relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden'></AnimatedBackground>
      ) : null}
      <Popover>
        <PopoverTrigger className='z-2000 absolute left-4 top-5'>
          Toggle background
        </PopoverTrigger>
        <PopoverContent className='w-40 bg-black flex flex-col'>
          <Button onClick={toggleBackground}>Light</Button>
          <Button onClick={toggleBackground}>Dark</Button>
          <Button onClick={toggleBackground}>Animated</Button>
        </PopoverContent>
      </Popover>
      <CalcCard></CalcCard>
    </>
  );
}
