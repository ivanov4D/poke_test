import { Page, expect } from '@playwright/test';
export default class CardPayment {
  constructor(public page: Page) {}
  async cardNumber(cardNumber: string) {
    await this.page.locator('input[placeholder="0000 0000 0000 0000"]').fill(cardNumber);
  }
  async cardDate(cardDate: string) {
    await this.page.locator('input[placeholder="00/00"]').fill(cardDate);
  }
  async cardCvv(cardCvv: string) {
    await this.page.locator('input[placeholder="000"]').fill(cardCvv);
  }
  async cardName(cardName: string) {
    await this.page.locator('input[placeholder="GERMAN DOLNIKOV"]').fill(cardName);
  }
  async clickPaymentBtn() {
    await expect(this.page.getByRole('button', { name: 'Оплатить' })).not.toHaveClass(
      /pay-btn_disable/,
    ); // без этой проверки у меня кликает на кнопку и ничего не происходит (в Cypress у меня не было такой проблемы)
    await this.page.getByRole('button', { name: 'Оплатить' }).click();
  }
}
