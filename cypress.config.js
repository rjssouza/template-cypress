import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    screenshotsFolder: "cypress/screenshots",
    downloadsFolder: "cypress/downloads",
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    env: {
      login_url: "/login",
      products_url: "/products",
    },
  },
});
