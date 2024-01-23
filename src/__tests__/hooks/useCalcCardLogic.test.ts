import { renderHook, act } from '@testing-library/react';
import useCalcCardLogic from '../../app/hooks/useCalcCardLogic';

describe('useCalcCardLogic', () => {
  let alertSpy: jest.SpyInstance<void, [message?: any], any>;

  beforeAll(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation();
  });

  afterAll(() => {
    alertSpy.mockRestore();
  });

  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    expect(result.current.cardState).toBe(1);
    expect(result.current.estimate).toBe(0);
    expect(result.current.result).toBe('');
    expect(result.current.estimatesArr).toEqual([]);
  });

  it('should increment cardState on handleNextButtonClick', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.handleNextButtonClick();
    });

    expect(result.current.cardState).toBe(1);
  });

  it('should decrement cardState on handleBackButtonClick', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.handleNextButtonClick(); // increment first to 2
      result.current.handleBackButtonClick();
    });

    expect(result.current.cardState).toBe(1);
  });

  it('should update estimatesArr with the estimate values', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.setEstimate(5);
      result.current.handleNextButtonClick();
    });

    expect(result.current.estimatesArr).toEqual([5]);
  });

  it('should display an alert if estimate is 0 and handleNextButtonClick is invoked', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.handleNextButtonClick();
    });

    expect(alertSpy).toHaveBeenCalled();
  });

  it('should reset state when cardState is 4 and handleNextButtonClick is invoked', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      for (let i = 0; i < 3; i++) {
        result.current.handleNextButtonClick();
      }
    });

    act(() => {
      result.current.handleNextButtonClick();
    });

    expect(result.current.cardState).toBe(1);
    expect(result.current.result).toBe('');
    expect(result.current.estimatesArr).toEqual([]);
  });

  it('should update result correctly on handleSubmit', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.setEstimate(1);
      result.current.handleNextButtonClick();
      result.current.setEstimate(2);
      result.current.handleNextButtonClick();
      result.current.setEstimate(3);
      result.current.handleNextButtonClick();
      result.current.handleSubmit();
    });

    expect(result.current.result).toBe('2 hodin');
  });

  it('should update result correctly on handleSubmit with different input values', () => {
    const { result } = renderHook(() => useCalcCardLogic());

    act(() => {
      result.current.setEstimate(1);
      result.current.handleNextButtonClick();
      result.current.setEstimate(2);
      result.current.handleNextButtonClick();
      result.current.setEstimate(3);
      result.current.handleNextButtonClick();
      result.current.handleSubmit();
    });

    expect(result.current.result).toBe('2 hodin');

    act(() => {
      result.current.setEstimate(8);
      result.current.handleNextButtonClick();
      result.current.setEstimate(16);
      result.current.handleNextButtonClick();
      result.current.setEstimate(24);
      result.current.handleNextButtonClick();
      result.current.handleSubmit();
    });

    expect(result.current.result).toBe('1 MD (16 hodin)');
  });
});
