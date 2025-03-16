import { Page, expect } from '@playwright/test';
export default class MainPage {
  constructor(public page: Page) {}
  async premiumCheck() {
    await expect(
      this.page.locator('.trainer_info__legend.trainer_info_l_fix.k_info_premium_only_text'),
    ).toHaveAttribute('data-premium', 'true');
  }
  async clickProfileBtn() {
    // await Promise.all([this.page.waitForLoadState('networkidle')]); //надо ли ждать если и так находит?
    await this.page.click('button:has-text("ID")');
  }
}
