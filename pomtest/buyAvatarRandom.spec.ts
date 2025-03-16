import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import AvatarPage from '../pages/AvatarPage';
import CardPayment from '../pages/CardPaymentPage';
import SmsPage from '../pages/SmsPage';
import PaymentSucces from '../pages/PaymentSuccesPage';

const email = '';
const password = '';
const cardNum = '4111111111111111';
const cardDate = '1025';
const cardCvv = '125';
const cardName = 'test name';
const verCode = '56456';

test('Купить рандомный аватар POM', async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  const mainPage = new MainPage(page);
  const profilePage = new ProfilePage(page);
  const avatarPage = new AvatarPage(page);
  const cardPayment = new CardPayment(page);
  const smsPage = new SmsPage(page);
  const paymentSucces = new PaymentSucces(page);

  await page.goto('${baseURL}/login');
  await login.enterMail(email);
  await login.enterPassword(password);
  await login.clickEnterBtn();
  // expect(await page.title()).toBe('Битва Покемонов'); // походу не надо проверять в е2е

  await mainPage.premiumCheck();
  await mainPage.clickProfileBtn();

  await profilePage.clickChangeAvatarBtn();

  await avatarPage.buyAvatarRandom();

  await cardPayment.cardNumber(cardNum);
  await cardPayment.cardDate(cardDate);
  await cardPayment.cardCvv(cardCvv);
  await cardPayment.cardName(cardName);
  await cardPayment.clickPaymentBtn();

  await smsPage.smsCode(verCode);
  await smsPage.clickSendSmsBtn();

  await paymentSucces.checkSuccesText();
});
