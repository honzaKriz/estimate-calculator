import { test, expect } from '@playwright/test';
import cardTexts from '@/app/organisms/cardTexts';

test.describe('CalcCard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Initial Rendering', async ({ page }) => {
    const input = page.locator('[data-testid="card-input"]');
    await expect(input).toBeVisible();

    const nextButton = page.locator('[data-testid="next-button"]');
    await expect(nextButton).toBeVisible();
  });
});

test('Going one step forward', async ({ page }) => {
  const input = page.locator('[data-testid="card-input"]');
  await input.fill('5');

  const nextButton = page.locator('[data-testid="next-button"]');
  await nextButton.click();

  const nextStepText = cardTexts.stepTwo;
  await expect(page.locator(`text=${nextStepText}`)).toBeVisible();
});

test('Going one step back', async ({ page }) => {
  const input = page.locator('[data-testid="card-input"]');
  await input.fill('5');

  const nextButton = page.locator('[data-testid="next-button"]');
  await nextButton.click();

  const backButton = page.locator('[data-testid="back-button"]');
  await backButton.click();

  const previousStepText = cardTexts.stepOne;
  await expect(page.locator(`text=${previousStepText}`)).toBeVisible();
});

test('Completing the Estimate', async ({ page }) => {
  const input = page.locator('[data-testid="card-input"]');
  await input.fill('5');

  const nextButton = page.locator('[data-testid="next-button"]');
  await nextButton.click();
  await input.fill('10');
  await nextButton.click();
  await input.fill('20');
  await nextButton.click();

  const resultButtonText = cardTexts.buttonNewCount;
  await expect(page.locator(`text=${resultButtonText}`)).toBeVisible();
});

test('Restarting After Completion', async ({ page }) => {
  const input = page.locator('[data-testid="card-input"]');
  await input.fill('5');

  const nextButton = page.locator('[data-testid="next-button"]');
  await nextButton.click();
  await input.fill('10');
  await nextButton.click();
  await input.fill('20');
  await nextButton.click();

  const firstStepText = cardTexts.stepOne;
  await expect(page.locator(`text=${firstStepText}`)).toBeVisible();
});
