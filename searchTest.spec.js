import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('flower');
  await page.getByRole('textbox', { name: 'Search...' }).press('Enter');
  await page.locator('[style*="FlowerfromSpain.jpg"]').click();
  await page.waitForTimeout(2000);
  await page.getByRole('img', { name: 'Image' }).click();
  await page.locator('.image__info').first().click();
  await page.getByText('Last changed: 07/26/').click();
});