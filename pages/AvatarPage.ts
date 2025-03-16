import { Page } from '@playwright/test';
export default class AvatarPage {
  constructor(public page: Page) {}
  async buyAvatarRandom() {
    await Promise.all([this.page.waitForLoadState('load')]);
    const avatarLocator = this.page.locator('li.shop__item.available button.shop__button');
    const count = await avatarLocator.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomAvatar = avatarLocator.nth(randomIndex);
    console.log(count); // для самопроверки должно быть 11
    await randomAvatar.click();
  }
}
