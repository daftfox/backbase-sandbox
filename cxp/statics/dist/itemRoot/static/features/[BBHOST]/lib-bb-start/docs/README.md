# lib-bb-start


Version: **2.0.69**

Provides a consistent interface for bootstrapping a Widget's JavaScript.

The purpose of this module is to handle the loading of bootstrap helpers, so on-page `script`
tags can be consistent and independent of the bootstrap process.

## Table of Contents
- **lib-bb-start**<br/>    <a href="#lib-bb-startstart">start(widgetInstance, options)</a><br/>    <a href="#lib-bb-startngStart">ngStart(widgetInstance)</a><br/>
- **Type Definitions**<br/>    <a href="#WidgetInstance">WidgetInstance</a><br/>    <a href="#WidgetInstance_getPreference">WidgetInstance#getPreference(preferenceName)</a><br/>

---

### <a name="lib-bb-startstart"></a>*start(widgetInstance, options)*

A helper function that lazy loads the start library and
uses it to start the given module.

It is attached to the global (`window`) scope under `BB.Widget` to allow access from non-modular
JavaScript code, such as the widget's main template (index.html)


| Parameter | Type | Description |
| :-- | :-- | :-- |
| widgetInstance | [WidgetInstance](#WidgetInstance) | WidgetInstance to start |
| options | [options](#options) | Options to use. Currently only 'type' is supported |

##### Returns

[void](#void) - **

## Example

```javascript
<body g:onload="BB.Widget.start(__WIDGET__, {type: 'ng'});">
```

---

### <a name="lib-bb-startngStart"></a>*ngStart(widgetInstance)*

A helper function that lazy loads the angular start library and
uses it to start the given module.

It is attached to the global (`window`) scope under `BB.Widget` to allow access from non-modular
JavaScript code, such as the widget's main template (index.html)

See [lib-bb-start-ng](lib-bb-start-ng.html#lib-bb-start-ng) for more info on how the angular app is
bootstrapped.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| widgetInstance | [WidgetInstance](#WidgetInstance) | WidgetInstance to start |

##### Returns

[void](#void) - **

## Example

```javascript
<body g:onload="BB.Widget.ngStart(__WIDGET__);">
```

## Type Definitions


### <a name="WidgetInstance"></a>*WidgetInstance*

The portal client widget instance (a.k.a __WIDGET__)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Unique ID of the widget instance |
| name | String | The name of the widget |
| body | [HTMLElement](#HTMLElement) | The DOM Node where the widget can be rendered |
| getPreference | [WidgetInstance#getPreference](#WidgetInstance_getPreference) | Get a preference from the widget model |


### <a name="WidgetInstance_getPreference"></a>*WidgetInstance#getPreference(preferenceName)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| preferenceName | String | Name of the preference to fetch from the model |

##### Returns

String (optional) - *The value of the preference in the model, or undefined if it isn't available*

---
