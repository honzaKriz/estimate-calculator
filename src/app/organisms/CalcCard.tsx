import React, { useState, useEffect } from "react";
import { Button } from "../atoms/button";
import { Card } from "../atoms/card";
import { Input } from "@/app/atoms/input";
import Nav from "../molecules/Nav";
import cardTexts from "./cardTexts";
import AnimatedBackground from "./AnimatedBackground";

const CalcCard = () => {
  const [cardState, setCardState] = useState(1);
  const [estimate, setEstimate] = useState(0);
  const [result, setResult] = useState("");
  const [estimatesArr, setEstimatesArr] = useState<number[]>([]);

  const handleNextButtonClick = () => {
    if (cardState === 4) {
      setCardState(1);
      setResult("");
      setEstimatesArr([]);
    } else {
      setCardState((prevState) => prevState + 1);
      setEstimatesArr((prevEstimates) => [...prevEstimates, estimate]);
      setEstimate(0);
    }
  };

  const handleBackButtonClick = () => {
    setCardState((prevState) => prevState - 1);
  };

  const handleSubmit = () => {
    setResult(calculateEstimate(estimatesArr));
  };

  const calculateEstimate = (arr: number[]) => {
    const [o, r, p] = arr;
    let res = Math.ceil((o + 4 * r + p) / 6);
    if (res > 8) {
      return `${res / 8} MD (${res} hodin)`;
    } else {
      return `${res} hodin`;
    }
  };

  useEffect(() => {
    if (cardState === 4) {
      handleSubmit();
    }
  }, [cardState, estimatesArr]);

  return (
    <>
      <AnimatedBackground className="relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden"></AnimatedBackground>
      <Card
        className="bg-black mt-32 z-1000 absolute left-1/2 top-5 transform -translate-x-1/2 grid col-span-1 gap-4 px-32 pt-24"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <Nav stepNumber={cardState}>
          {cardState > 1 ? (
            <Button
              className="z-1000 absolute left-4 top-5"
              onClick={handleBackButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 14 4 9 9 4" />
                <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
              </svg>
            </Button>
          ) : null}
        </Nav>
        <p className="text-white font-semibold opacity-100 mb-3">
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
              placeholder="Odhad v hodinách"
              type="number"
              value={estimate}
              onChange={(e) => setEstimate(parseInt(e.target.value))}
            ></Input>
          ) : (
            <p className="font-bold text-3xl text-center text-lime-400 mb-12">
              Výsledný odhad je {result}
            </p>
          )}
        </div>
        <Button type="submit" onClick={handleNextButtonClick}>
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
