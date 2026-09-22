import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {

    await page.goto("https://ntc.alfadock-pro.com/alfaJULIAv3/#/alfaJULIA/14/4/5578");

    await page.addStyleTag({
      content: `
        html {
          zoom: 80%;
        }
      `,
    });

    await use(page);
  },
});

export { expect };