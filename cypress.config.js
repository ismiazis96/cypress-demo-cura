const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();


module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true, // fungsi buat rekam saat running
  videoCompression: 32,
  watchForFileChanges: false, // fungsi buat otomatis jalan saat di save
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  experimentalStudio: true,  //ini agar bisa di jalankan record secara otomatis code di buat.
  e2e: {
    //baseUrl: 'https://katalon-demo-cura.herokuapp.com',

    baseUrl:process.env.BASE_URL,
    env: {
      ...process.env
    },

    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
