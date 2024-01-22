'use client';

import CalcCard from './organisms/CalcCard';
import AnimatedBackground from './organisms/AnimatedBackground';
import { Button } from './atoms/button';
import { useState, useEffect } from 'react';
import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './atoms/popover';
import BackgroundIcon from '../images/backgroundIcon.png';
import Image from 'next/image';

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
        <PopoverTrigger className='z-2000 absolute right-4 top-5 bg-white rounded-sm border-2'>
          <Image
            src={BackgroundIcon}
            alt='background icon on a button for background switching'
            height={32}
            width={32}
          ></Image>
        </PopoverTrigger>
        <PopoverContent className='w-30 bg-black flex flex-col gap-2'>
          <Button
            onClick={toggleBackground}
            className='hover:bg-white hover:text-black'
          >
            Light
          </Button>
          <Button
            onClick={toggleBackground}
            className='hover:bg-white hover:text-black'
          >
            Dark
          </Button>
          <Button
            onClick={toggleBackground}
            className='hover:bg-white hover:text-black'
          >
            Animated
          </Button>
        </PopoverContent>
      </Popover>
      <CalcCard></CalcCard>
    </>
  );
}
