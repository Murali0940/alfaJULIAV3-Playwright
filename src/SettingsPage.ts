import { type Page, type Locator, expect } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly settingslink: Locator;
  readonly materialAndThicknessLink: Locator;
  readonly machineConfigurationlink: Locator;
  readonly programConfigurationLink: Locator;
  readonly gaiaConnectionLink: Locator;
  readonly materialSearchBar: Locator;
  readonly addMaterialButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.settingslink = page.getByTitle("Settings");
    this.materialAndThicknessLink = page.getByRole('tab', { name: 'Material / Thickness / Joint Master' });
    this.machineConfigurationlink = page.getByRole('tab', { name: 'Machine Configuration' });
    this.programConfigurationLink = page.getByRole('tab', { name: 'Program Configuration' });
    this.gaiaConnectionLink = page.getByRole('tab', { name: 'AI / GAIA Connection' });
    //this.materialSearchBar = page.getByPlaceholder('e.g. SECC');
    this.materialSearchBar = page.getByLabel('Material');
    this.addMaterialButton = page.getByRole('button', { name: 'Add' }).first();

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

  async addMaterial(material: string) {
    await this.materialSearchBar.fill(material);
  }

  async addMaterialButtonClick() {
    await this.addMaterialButton.click();
  }

  async editMaterial(materialName: string) {
    console.log("Material name is:", materialName);

    const editMaterialButton = this.page.getByRole("button", {
        name: `${materialName} を編集`,
        exact: true
    });

    await expect(editMaterialButton).toBeVisible();

    await editMaterialButton.click();

    console.log(`Edit button clicked for material: ${materialName}`);
}


}