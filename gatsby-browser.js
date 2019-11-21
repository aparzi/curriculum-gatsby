/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('bootstrap/dist/css/bootstrap.min.css');
require('materialize-css/dist/css/materialize.min.css');
require('./src/styles/global.css');
require('./src/styles/lime.css');
require('font-awesome/css/font-awesome.min.css');

const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider
