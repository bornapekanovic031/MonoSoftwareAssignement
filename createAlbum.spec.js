import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

  const menu = page.getByRole('link', { name: 'Menu' }).first();

  // Open login
  await menu.hover();
  await expect(page.getByText('Menu')).toBeVisible();
  await menu.click();
  await page.getByText('Login').click();

  // Login
  await page.getByRole('textbox', { name: 'Enter your email or username' }).fill('BornaP');
  await page.getByRole('textbox', { name: 'Password' }).fill('Borna031!');
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for profile page
  await expect(page).toHaveURL(/profile/);

  // Create album
  const createAlbumBtn = page.getByRole('button', { name: 'Create Album' });
  await expect(createAlbumBtn).toBeVisible({ timeout: 10000 });
  await createAlbumBtn.click();

  const albumInput = page.getByRole('textbox', { name: 'Album Name' });
  await expect(albumInput).toBeVisible();
  await albumInput.fill(`BornaTest-${Date.now()}`);

  await page.getByRole('button', { name: 'Save album' }).click();

  // Upload section
  const placeholderIcon = page.locator('.placeholder__icon');
  await expect(placeholderIcon).toBeVisible();
  await placeholderIcon.click();

  // File path (same folder as test)
  const filePath = path.join(__dirname, 'NatureTest.jpeg');

  const fileInput = page.locator('input[type="file"]');
  await expect(fileInput).toBeAttached();
  await fileInput.setInputFiles(filePath);

  // Fill required field (IMPORTANT)
  await page.getByRole('textbox', { name: 'Photo Name' }).fill('Test Photo');

  // Upload
  const uploadBtn = page.getByRole('button', { name: 'Upload' });
  await expect(uploadBtn).toBeEnabled();
  await uploadBtn.click();

  // Optional: verify upload happened
  await expect(page.getByText('BornaTest')).toBeVisible();
});