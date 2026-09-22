
import { HomepageValidation } from "../src/HomepageValidation.js";
import { test, expect } from "../fixtures/test-fixture.js";
import { SettingsPage } from "../src/SettingsPage.js";


test.describe("alfaJULIA home page", () => {
  test("Homepage Elements Validation", async ({ page }) => {
    const homepageValidation = new HomepageValidation(page);
    await homepageValidation.selectLanguage("EN");
    await expect(homepageValidation.logo).toBeVisible();
    await expect(homepageValidation.languageDropdown).toBeVisible();
    await expect(homepageValidation.versionInfo).toBeVisible();
    await expect(homepageValidation.homeLink).toBeVisible();
    await expect(homepageValidation.weldingSupportLink).toBeVisible();
    await expect(homepageValidation.gaiaSupportlink).toBeVisible();
    await expect(homepageValidation.weldingConditionDBLink).toBeVisible();
    await expect(homepageValidation.logsLink).toBeVisible();
    await expect(homepageValidation.settingslink).toBeVisible();
    await expect(homepageValidation.logoutLink).toBeVisible();
    await expect(homepageValidation.searchButton).toBeVisible();
    await homepageValidation.getrobotname();
    await homepageValidation.getCurrentRobotName();
  });

  test("settings Elements Validation", async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.clickSettingsLink();
    await expect(page).toHaveURL(/.*settings/);

    await expect(settingsPage.materialAndThicknessLink).toBeVisible();
    await expect(settingsPage.machineConfigurationlink).toBeVisible();
    await expect(settingsPage.programConfigurationLink).toBeVisible();
    await expect(settingsPage.gaiaConnectionLink).toBeVisible();


    await settingsPage.clickMaterialAndThicknessLink();
    await settingsPage.clickMachineConfigurationLink();
    await settingsPage.clickProgramConfigurationLink();
    await settingsPage.clickGaiaConnectionLink();
  });
});
