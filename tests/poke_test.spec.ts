import { test, expect } from '@playwright/test';

test('Покупка рандомного аватара', async ({ page }) => {
  const mailInput = await page.locator('input[type="email"]');
  const passwordInput = await page.locator('#password');
  const loginButton = await page.getByRole('button', { name: 'Войти' });
  const profileButton = await page.locator('button:has-text("ID")');
  const changeAvatarLocator = await page.getByRole('link', { name: 'Смена аватара' });
  const avatarList = await page.locator('ul.shop__list');
  const avatarLocator = await page.locator('li.shop__item.available button.shop__button').first();
  const cardNumber = await page.locator('input[placeholder="0000 0000 0000 0000"]');
  const cardDate = await page.locator('input[placeholder="00/00"]');

  await page.goto('https://pokemonbattle.ru/login');

  await expect(mailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await mailInput.fill('ivanovcgi@yandex.ru');
  await passwordInput.fill('123456Q');
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toContainText('Войти');
  await loginButton.click();

  await expect(profileButton).toBeVisible();
  await profileButton.click();

  await expect(changeAvatarLocator).toBeVisible();
  await expect(changeAvatarLocator).toHaveAttribute('href', '/shop');
  await changeAvatarLocator.click();

  await expect(avatarList).toBeVisible();
  await avatarLocator.click();

  await expect(cardNumber).toBeVisible;
  await cardNumber.type('4111111111111111');
  await expect(cardDate).toBeVisible;
  await cardDate.type('1025');
});
