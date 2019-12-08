/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('bootstrap/dist/css/bootstrap.min.css');
require('materialize-css/dist/css/materialize.min.css');
require('font-awesome/css/font-awesome.min.css');
require('./src/styles/timeline.css');
require('./src/styles/animate.css');
require('./src/styles/nav.css');
require('./src/styles/global.css');
require('./src/styles/responsive.css');
require('./src/styles/lime.css');

require('jquery/dist/jquery.min');
require('materialize-css/dist/js/materialize.min.js');

const wrapWithI18nProvider = require("./src/components/wrapWithI18nProvider")
  .wrapWithI18nProvider
exports.wrapPageElement = wrapWithI18nProvider
