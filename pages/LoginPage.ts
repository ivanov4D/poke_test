import { Page } from '@playwright/test';
export default class LoginPage {
  constructor(public page: Page) {}
  async enterMail(mail: string) {
    await this.page.locator('input[type="email"]').fill(mail);
  }
  async enterPassword(password: string) {
    await this.page.locator('input[type="password"]').fill(password);
  }
  async clickEnterBtn() {
    await Promise.all([this.page.waitForLoadState('load')]);
    await this.page.click('button[type="submit"]');
    // await this.page.locator('button[type="submit"]').click();
  }
}
