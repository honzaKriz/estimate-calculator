import React from 'react';
import Image from 'next/image';
import { Button } from '../atoms/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import BackgroundIcon from '../../images/backgroundIcon.png';

interface BackgroundControllerProps {
  onBackgroundChange: (background: string) => void;
  currentBackground: string;
}

export const BackgroundController = ({
  onBackgroundChange,
  currentBackground,
}: BackgroundControllerProps) => {
  const toggleBackground = (e: React.MouseEvent<HTMLButtonElement>) => {
    onBackgroundChange(e.currentTarget.innerText);
  };

  return (
    <Popover>
      <PopoverTrigger className='z-2000 absolute right-4 top-5 bg-white rounded-sm border-2'>
        <Image
          src={BackgroundIcon}
          alt='Background icon'
          height={32}
          width={32}
        />
      </PopoverTrigger>
      <PopoverContent className='w-30 bg-black flex flex-col gap-2 rounded-sm border-2 p-4'>
        {['Light', 'Dark', 'Animated'].map((bg) => (
          <Button
            key={bg}
            onClick={toggleBackground}
            className={`${
              currentBackground === bg ? 'bg-white text-black' : 'text-white'
            } hover:bg-white hover:text-black`}
          >
            {bg}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
