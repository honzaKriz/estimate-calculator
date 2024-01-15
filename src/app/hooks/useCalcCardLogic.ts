import React, { useState, useEffect } from "react";

const useCalcCardLogic = () => {
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

  return {
    cardState,
    estimate,
    setEstimate,
    estimatesArr,
    result,
    handleNextButtonClick,
    handleBackButtonClick,
    handleSubmit,
  };
};

export default useCalcCardLogic;