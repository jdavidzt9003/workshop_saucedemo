import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import preprocessor from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild.js';
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';

const setupNodeEvents = async function (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [
        createEsbuildPlugin.default(config),
        NodeModulesPolyfills.default(),
      ],
    })
  );

  return config;
};


{ chromeWebSecurity: false }

export default defineConfig({
  env: {
    mobileViewportWidthBreakpoint: 767,
  },
  e2e: {
    specPattern: '**/*.{feature,features}',
    setupNodeEvents,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    "experimentalSessionAndOrigin": true
  },
});
