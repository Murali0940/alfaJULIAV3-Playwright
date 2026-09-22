// import { defineConfig, devices } from "@playwright/test";

// export default defineConfig({
//   testDir: "./tests",

//   fullyParallel: false,

//   forbidOnly: !!process.env.CI,

//   retries: process.env.CI ? 2 : 0,

//   workers: 1,

//   reporter: "html",

//   use: {
//     headless: false,

//     trace: "on-first-retry",

//     viewport: null,

//     launchOptions: {
//       args: ["--start-maximized"],
//     },
//   },

//   projects: [
//     {
//       name: "chromium",
//       use: { ...devices["Desktop Chrome"] },
//     },
//   ],
// });

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1,

  reporter: "html",

  projects: [
    {
      name: "chromium",

      use: {

        browserName: "chromium",

        headless: false,

        // Use the actual browser window dimensions
        viewport: null,

        trace: "on-first-retry",

        launchOptions: {
          args: [
            "--start-maximized"
          ],
          slowMo: 1000,
        },
      },
    },
  ],
});
