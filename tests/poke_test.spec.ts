import { test, expect } from '@playwright/test';

test('Покупка рандомного аватара', async ({ page }) => {
  const mailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('#password');
  const loginButton = page.getByRole('button', { name: 'Войти' });
  const profileButton = page.locator('button:has-text("ID")');
  const changeAvatarLocator = page.getByRole('link', { name: 'Смена аватара' });
  const avatarList = page.locator('ul.shop__list');
  const avatarLocator = page.locator('li.shop__item.available button.shop__button');
  const cardNumber = page.locator('input[placeholder="0000 0000 0000 0000"]');
  const cardDate = page.locator('input[placeholder="00/00"]');
  const cardCvv = page.locator('input[placeholder="000"]');
  const cardName = page.locator('input[placeholder="GERMAN DOLNIKOV"]');
  const payButton = page.getByRole('button', { name: 'Оплатить' });
  const verCode = page.locator('input[placeholder="00000"]');
  const verButton = page.getByRole('button', { name: 'Отправить' });
  const succesHead = page.getByRole('heading', { name: 'Покупка прошла успешно' });

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
  const count = await avatarLocator.count();
  const randomIndex = Math.floor(Math.random() * count);
  const randomAvatar = avatarLocator.nth(randomIndex);
  console.log(count); // для самопроверки должно быть 11
  await randomAvatar.click();

  // console.log(avatarLocator2);
  // await avatarLocator.click();

  await expect(cardNumber).toBeVisible;
  await cardNumber.fill('4111111111111111');
  await expect(cardDate).toBeVisible;
  await cardDate.fill('1025');
  await expect(cardCvv).toBeVisible;
  await cardCvv.fill('125');
  await expect(cardName).toBeVisible;
  await cardName.fill('Test Name');
  await expect(payButton).toBeVisible;
  await expect(payButton).not.toHaveClass(/pay-btn_disable/); // без этой строки у меня кликает на кнопку и ничего не происходит (в Cypress у меня не было такой проблемы)
  await payButton.click();

  await expect(verCode).toBeVisible;
  await verCode.fill('56456');
  await expect(verButton).toBeVisible;
  await page.getByRole('main').click(); // если после ввода cvv не килкнуть по любому элементу - кнопка оплатить не становится активной (в Cypress у меня не было такой проблемы)
  await verButton.click();

  await expect(succesHead).toBeVisible;
  await expect(succesHead).toContainText('Покупка прошла успешно');
});
