import { useState } from 'react';

const useCalcCardLogic = () => {
  const [cardState, setCardState] = useState(1);
  const [estimate, setEstimate] = useState(0);
  const [result, setResult] = useState('');
  const [estimatesArr, setEstimatesArr] = useState<number[]>([]);

  const handleNextButtonClick = () => {
    if (estimate <= 0 && cardState !== 4) {
      alert('Zadaná hodnota nemůže být nula');
    } else if (cardState === 4) {
      setCardState(1);
      setResult('');
      setEstimatesArr([]);
    } else {
      setCardState((prevState) => prevState + 1);
      setEstimatesArr((prevEstimates) => [...prevEstimates, estimate]);
      setEstimate(0);
    }
  };

  const handleBackButtonClick = () => {
    setCardState((prevState) => prevState - 1);
    setEstimatesArr((prevEstimateArray) => prevEstimateArray.slice(0, -1));
  };

  const handleSubmit = () => {
    setResult(calculateEstimate(estimatesArr));
  };

  const calculateEstimate = (arr: number[]) => {
    const [o, r, p] = arr;
    let res = Math.ceil((o + 4 * r + p) / 6);
    if (res > 8) {
      return `${res / 8} MD (${res} hodin)`;
    } else if (res > 4) {
      return `${res} hodin`;
    } else {
      return `${res} hodiny`;
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
