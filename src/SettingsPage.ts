import type { Page, Locator } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly settingslink: Locator;
  readonly materialAndThicknessLink: Locator;
  readonly machineConfigurationlink: Locator;
  readonly programConfigurationLink: Locator;
  readonly gaiaConnectionLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.settingslink = page.getByTitle("Settings");
    this.materialAndThicknessLink = page.getByRole('link', { name: 'Material / Thickness / Joint Master' });
    this.machineConfigurationlink = page.getByRole('link', { name: 'Machine Configuration' });
    this.programConfigurationLink = page.getByRole('link', { name: 'Program Configuration' });
    this.gaiaConnectionLink = page.getByRole('link', { name: 'AI / GAIA Connection' });

  }

  async clickSettingsLink() {
    await this.settingslink.click();
  }

  async clickMaterialAndThicknessLink() {
    await this.materialAndThicknessLink.click();
  }

  async clickMachineConfigurationLink() {
    await this.machineConfigurationlink.click();
  }

  async clickProgramConfigurationLink() {
    await this.programConfigurationLink.click();
  }

  async clickGaiaConnectionLink() {
    await this.gaiaConnectionLink.click();
  }
}