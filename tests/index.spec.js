// @ts-check
import { test, expect } from '@playwright/test';

test('has navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('navigation')).toBeVisible();
});
