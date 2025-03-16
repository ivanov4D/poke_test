import { Page } from '@playwright/test';
export default class ProfilePage {
  constructor(public page: Page) {}
  async clickChangeAvatarBtn() {
    await this.page.locator('a', { hasText: 'Смена аватара' }).click();
  }
}
