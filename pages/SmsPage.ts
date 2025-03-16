import { Page, expect } from '@playwright/test';
export default class SmsPage {
  constructor(public page: Page) {}
  async smsCode(verCode: string) {
    await this.page.locator('input[placeholder="00000"]').fill(verCode);
  }
  async clickSendSmsBtn() {
    // await expect(this.page.getByRole('button', { name: 'Отправить' })).toHaveClass(
    //   /payment__active/,
    // );
    await this.page.click('body'); // без клика по окну - кнопка не становится активной, пробовал разные проверки чтобы оживить кнопку
    await this.page.getByRole('button', { name: 'Отправить' }).click();
  }
}
