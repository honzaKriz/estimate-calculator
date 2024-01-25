import React, { useEffect } from 'react';
import { Button } from '../atoms/button';
import { Card } from '../atoms/card';
import { Input } from '@/app/atoms/input';
import Nav from '../molecules/Nav';
import cardTexts from './cardTexts';
import useCalcCardLogic from '../hooks/useCalcCardLogic';

const CalcCard = () => {
  const {
    cardState,
    estimate,
    setEstimate,
    estimatesArr,
    result,
    handleNextButtonClick,
    handleBackButtonClick,
    handleSubmit,
  } = useCalcCardLogic();

  useEffect(() => {
    if (cardState === 4) {
      handleSubmit();
    }
  }, [cardState, estimatesArr]);

  return (
    <>
      <Card
        className='bg-black mt-32 z-1000 absolute left-1/2 top-5 transform -translate-x-1/2 grid col-span-1 gap-4 px-32 pt-24'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <Nav stepNumber={cardState}>
          {cardState > 1 ? (
            <Button
              className='z-1000 absolute left-4 top-5 bg-slate-700 hover:bg-slate-800'
              onClick={handleBackButtonClick}
              data-testid='back-button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <polyline points='9 14 4 9 9 4' />
                <path d='M20 20v-7a4 4 0 0 0-4-4H4' />
              </svg>
            </Button>
          ) : null}
        </Nav>
        <p className='text-white font-semibold opacity-100 mb-3'>
          {cardState === 1
            ? cardTexts.stepOne
            : cardState === 2
            ? cardTexts.stepTwo
            : cardState === 3
            ? cardTexts.stepThree
            : null}
        </p>
        <div>
          {cardState < 4 ? (
            <Input
              placeholder='Odhad v hodinách'
              type='number'
              value={estimate}
              onChange={(e) => setEstimate(parseInt(e.target.value))}
              className='text-lime-400 font-bold'
              data-testid='card-input'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNextButtonClick();
                }
              }}
            ></Input>
          ) : (
            <>
              <div
                className='flex justify-between mb-8 text-white border-b pb-4'
                data-testid='detailed-result'
              >
                <div className='flex flex-col items-center'>
                  <p>Optimistický</p>
                  <p className='font-bold'>{estimatesArr[0]}h</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p>Realistický</p>
                  <p className='font-bold'>{estimatesArr[1]}h</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p>Pesimistický</p>
                  <p className='font-bold'>{estimatesArr[2]}h</p>
                </div>
              </div>
              <p className='font-bold text-3xl text-center text-lime-500 mb-12'>
                Výsledný odhad: {result}
              </p>
            </>
          )}
        </div>
        <Button
          type='submit'
          onClick={handleNextButtonClick}
          className='bg-green-600 h-12 hover:bg-green-700'
          data-testid='next-button'
        >
          {cardState < 3
            ? cardTexts.buttonNext
            : cardState === 3
            ? cardTexts.buttonFinished
            : cardTexts.buttonNewCount}
        </Button>
      </Card>
    </>
  );
};

export default CalcCard;
