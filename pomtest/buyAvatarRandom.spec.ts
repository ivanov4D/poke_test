import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import AvatarPage from '../pages/AvatarPage';
import CardPayment from '../pages/CardPaymentPage';
import SmsPage from '../pages/SmsPage';
import PaymentSucces from '../pages/PaymentSuccesPage';

const email = process.env.LOGIN!;
const password = process.env.PASSWORD!;
const cardNum = process.env.CARDNUM!;
const cardDate = process.env.CARDDATE!;
const cardCvv = process.env.CARDCVV!;
const cardName = process.env.CARDNAME!;
const verCode = process.env.VERCODE!;

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
