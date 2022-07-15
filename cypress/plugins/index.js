/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};



module.exports = (on, config) => {
  config.env.LOGIN_SVT= process.env.LOGIN_SVT
  config.env.PASSWORD_SVT = process.env.PASSWORD_SVT
  config.env.LOGIN_CY= process.env.LOGIN_CY
  config.env.PASSWORD_CY = process.env.PASSWORD_CY
  config.env.BASE_URL_SVT = process.env.BASE_URL_SVT
  config.env.BASE_URL_CY = process.env.BASE_URL_CY 
  return config
}
