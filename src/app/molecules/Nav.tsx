'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Progress } from '../atoms/progress';

import { cn } from '@/app/utils/lib/utils';

type NavProps = {
  children: React.ReactNode;
  stepNumber: number;
};

const Nav: React.FC<NavProps> = ({ children, stepNumber }) => {
  const stepToPercent = (step: number) => {
    if (step === 1) {
      return 0;
    } else if (step === 2) {
      return 33;
    } else if (step === 3) {
      return 66;
    } else {
      return 100;
    }
  };

  return (
    <header className={cn('grid place-items-center')}>
      <nav className={cn('place-self-end space-x-2')}>
        {children}
        <div className={cn('absolute top-6 right-4 w-[20%]')}>
          <Progress
            value={stepToPercent(stepNumber)}
            className='h-8 border border-white'
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
