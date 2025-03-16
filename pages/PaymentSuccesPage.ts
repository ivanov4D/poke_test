import { Page, expect } from '@playwright/test';
export default class PaymentSucces {
  constructor(public page: Page) {}
  async checkSuccesText() {
    await expect(this.page).toHaveURL('https://pokemonbattle.ru/success');
    await expect(this.page.getByRole('heading', { name: 'Покупка прошла успешно' })).toContainText(
      'Покупка прошла успешно',
    );
  }
}
