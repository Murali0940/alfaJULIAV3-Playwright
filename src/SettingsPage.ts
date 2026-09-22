import type { Page, Locator } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly settingslink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settingslink = page.getByTitle("Settings");
  }

    async clickSettingsLink() {
    await this.settingslink.click();
    }


}
