import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const email = 'ivanovcgi@yandex.ru';
const password = '123456Q';
test('Купить рандомный аватар POM', async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  const mainPage = new MainPage(page);
  await page.goto('${baseURL}/login');
  await login.enterMail(email);
  await login.enterPassword(password);
  await login.clickEnterBtn();
  expect(await page.title()).toBe('Битва Покемонов'); // походу не надо проверять в е2е

  await mainPage.premiumCheck();
  await mainPage.clickProfileBtn(); // после клика тайтл остается тот же , надо ли проверять что перешли? у нас же е2е тест и если не перешли - в любом случае тест упадет
});
