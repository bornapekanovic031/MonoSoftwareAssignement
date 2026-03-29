const { test, expect } = require('@playwright/test');

test('register with random user', async ({ page }) => {
  // Generate unique user data
  const random = Date.now();
  const email = `test${random}@test.net`;
  const username = `User${random}`;

  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');

  const menu = page.getByRole('link', { name: 'Menu' }).first();
  await menu.hover();
  await menu.click();

  await page.getByText('Register').click();

  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test123!');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test123!');

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('You have successfully registered')).toBeVisible();
});