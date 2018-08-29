# lib-bb-styles


Version: **1.17.0**

Provides a method to read defined styles from document's stylesheet

## Example

```javascript
// file: my-helper.js

import getStyle from 'lib-bb-styles';

function integrateStyles() {
  return {
    color: getStyle('.some-class', 'color', true, false),
  };
} ```
```

## Table of Contents
- **lib-bb-styles**<br/>    <a href="#lib-bb-stylesgetStyle">getStyle(selector, style, useCache, strict)</a><br/>

---

### <a name="lib-bb-stylesgetStyle"></a>*getStyle(selector, style, useCache, strict)*

Retrieves style from document's stylesheets

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selector | String | CSS selector. Must match selector in stylesheet |
| style | String | defined in stylesheet |
| useCache | Boolean (optional) | check cache for result (default true) |
| strict | Boolean (optional) | If true, selector must be identical as style definition, otherwise selector must be part of style definition (default true) |

##### Returns

String - *Style value or empty string if not found*
