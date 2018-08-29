/* global window,System,define,require */
/**
 * @module lib-bb-start
 *
 * @description
 * Provides a consistent interface for bootstrapping a Widget's JavaScript.
 *
 * The purpose of this module is to handle the loading of bootstrap helpers, so on-page `script`
 * tags can be consistent and independent of the bootstrap process.
 */

window.BB = window.BB || {};
window.BB.Widget = window.BB.Widget || {};

/**
 * A helper function that lazy loads the start library and
 * uses it to start the given module.
 *
 * It is attached to the global (`window`) scope under `BB.Widget` to allow access from non-modular
 * JavaScript code, such as the widget's main template (index.html)
 *
 * @example
 * <body g:onload="BB.Widget.start(__WIDGET__, {type: 'ng'});">
 *
 * @name start
 * @type {function}
 * @param {WidgetInstance} widgetInstance WidgetInstance to start
 * @param {options} options Options to use. Currently only 'type' is supported
 * @return {void}
 */
window.BB.Widget.start = function start(widgetInstance, options) {
  if (options === undefined) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  function startWidget(startModule) {
    startModule.default(System.amdRequire, widgetInstance);
  }

  function run() {
     // eslint-disable-next-line prefer-template
    System.import('lib-bb-start-' + (options.type || 'plain')).then(startWidget);
  }

  // If require JS is on the page, config-bb-module-loader won't have run yet.
  if (typeof define === 'function' && define.amd) {
    require(['config-bb-module-loader'], run); // eslint-disable-line global-require
  } else {
    run();
  }
};

/**
 * A helper function that lazy loads the angular start library and
 * uses it to start the given module.
 *
 * It is attached to the global (`window`) scope under `BB.Widget` to allow access from non-modular
 * JavaScript code, such as the widget's main template (index.html)
 *
 * See {@link module:lib-bb-start-ng.lib-bb-start-ng} for more info on how the angular app is
 * bootstrapped.
 *
 * @example
 * <body g:onload="BB.Widget.ngStart(__WIDGET__);">
 *
 * @name ngStart
 * @type {function}
 * @param {WidgetInstance} widgetInstance WidgetInstance to start
 * @return {void}
 */
window.BB.Widget.ngStart = function ngStart(widgetInstance) {
  return window.BB.Widget.start(widgetInstance, { type: 'ng' });
};

/**
 * @typedef WidgetInstance
 * @description The portal client widget instance (a.k.a __WIDGET__)
 * @type {object}
 * @property {string} id Unique ID of the widget instance
 * @property {string} name The name of the widget
 * @property {HTMLElement} body The DOM Node where the widget can be rendered
 * @property {WidgetInstance#getPreference} getPreference Get a preference from the widget model
 */

/**
 * @typedef WidgetInstance#getPreference
 * @type {function}
 * @param {string} preferenceName Name of the preference to fetch from the model
 * @returns {?string} The value of the preference in the model, or undefined if it isn't available
 */
