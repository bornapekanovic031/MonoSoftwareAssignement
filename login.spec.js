import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

  const menu = page.getByRole('link', { name: 'Menu' }).first();

  // Hover triggers dropdown
  await menu.hover();
  await expect(page.getByText('Menu')).toBeVisible();
  await page.getByRole('link', { name: 'Menu' }).first().click();
  await page.getByText('Login').click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Enter your email or username' }).click();
  await page.getByRole('textbox', { name: 'Enter your email or username' }).fill('BornaP');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Borna031!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
});


