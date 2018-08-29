# lib-bb-start-ng


Version: **1.12.6**

Start module for angular apps. Initialises the widget instance, extensions,
locales, and translation messages.

Usually this module shouldn't be called directly. It will be called by
[lib-bb-start](lib-bb-start.html#lib-bb-start).

Bootstrapping involves the following features:
 - Initialises [BBWidget](lib-bb-widget.html#BBWidget) instance from CXP
 [WidgetInstance](lib-bb-start.html#WidgetInstance)
 - Loads the locale settings from [config-bb-locale](config-bb-locale.html#config-bb-locale)
 - Loads messages file (set from config-bb-locale's
 [messageBundleModule](config-bb-locale.html#messageBundleModule) function
 - Provides messages to lib-bb-i18n-ng
 [bbTranslateProvider#setMessages](lib-bb-i18n-ng.html#bbTranslateProvider_setMessages)
 - Restores the widget state into
 [bbStateContainerProvider#setInitialState](lib-bb-state-container-ng.html#bbStateContainerProvider_setInitialState)
 - Provides context to widget extensions (helpers, events, intents) with:
   - [lib-bb-extension-events-ng](lib-bb-extension-events-ng.html#lib-bb-extension-events-ng)
   - [lib-bb-extension-helpers-ng](lib-bb-extension-helpers-ng.html#lib-bb-extension-helpers-ng)
   - [lib-bb-extension-intents-ng](lib-bb-extension-intents-ng.html#lib-bb-extension-intents-ng)
 - Makes the extension hooks available to the widget instance via
 [lib-bb-widget-extension-ng](lib-bb-widget-extension-ng.html#lib-bb-widget-extension-ng)
 - Loads the widget's JS with the modules looader (configured by
 [config-bb-module-loader](config-bb-module-loader.html#config-bb-module-loader))
 - In case widget contains property 'initWidgetOnEvent',
 - starts to listen to event from this property
 - and when event is fired, bootstraps the angular application
 - Otherwise bootstraps the angular application immediately

## Imports

* config-bb-locale
* lib-bb-event-bus
* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-i18n-ng
* lib-bb-state-container-ng
* lib-bb-widget
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Table of Contents
- **Exports**<br/>    <a href="#start">start(require, widgetInstance)</a><br/>

## Exports


### <a name="start"></a>*start(require, widgetInstance)*

Start an Angular Based Widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| require | Function | Used to dynamically load modules |
| widgetInstance | [WidgetInstance](#WidgetInstance) | An instance of the CXP Widget Object (__WIDGET__) |

##### Returns

[void](#void) - **
