import type { Page, Locator } from "@playwright/test";

export class HomepageValidation {
  readonly page: Page;

  readonly languageDropdown: Locator;
  readonly logo: Locator;
  readonly versionInfo: Locator;
  readonly homeLink: Locator;
  readonly weldingSupportLink: Locator;
  readonly gaiaSupportlink: Locator;
  readonly weldingConditionDBLink: Locator;
  readonly logsLink: Locator;
  readonly robotdropdown: Locator;
  readonly settingslink: Locator;
  readonly logoutLink: Locator;
  readonly searchButton: Locator;
  readonly scanQRButton: Locator;
  readonly currentRobotProgramName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.languageDropdown = page.getByRole("button", { name: "Language" });
    this.logo = page.getByAltText("alfa JULIA");
    this.versionInfo = page.getByText("v3.0.0 | Welding Support");
    this.homeLink = page.getByRole("link", { name: "Home" });
    this.weldingSupportLink = page.getByRole("link", {
      name: "Welding Support",
    });
    this.gaiaSupportlink = page.getByRole("link", { name: "GAIA Support" });
    this.weldingConditionDBLink = page.getByRole("link", {
      name: "Welding Conditions DB",
    });
    this.logsLink = page.getByRole("link", { name: "Logs" });
    this.robotdropdown = page.getByRole("button", { name: "Robot : " });
    this.settingslink = page.getByTitle("Settings");
    this.logoutLink = page.getByTitle("Logout");
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.scanQRButton = page.getByRole("button", { name: "Scan QR" });
    this.currentRobotProgramName = page.locator(
      "//div[@class='aj-home-robot-program']",
    );
  }

  async selectLanguage(language: string): Promise<void> {
    await this.languageDropdown.click();
    const languageOption = this.page.getByRole("option", { name: language });
    await languageOption.click();
  }

  async getrobotname() {
    const robotname = await this.robotdropdown.locator("span").textContent();
    console.log("robot name is : " + robotname);
  }

  async getCurrentRobotName() {
    const currentRobotName = await this.currentRobotProgramName
      .locator("strong")
      .textContent();
    console.log("Current Robot Program Name is : " + currentRobotName);
  }
}
