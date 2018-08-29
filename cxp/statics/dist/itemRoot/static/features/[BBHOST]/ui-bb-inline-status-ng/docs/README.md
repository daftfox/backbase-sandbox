# ui-bb-inline-status-ng


Version: **2.5.1**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbInlineStatusNgKey from 'ui-bb-inline-status-ng';

export const dependencyKeys = [
  uiBbInlineStatusNgKey,
];

// file: templates/template.ng.html
<ui-bb-inline-status-ng
  show-spinner="$ctrl.state.contacts.loading"
  text="'Loading contacts'">
</ui-bb-inline-status-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbInlineStatusComponent

Inline Status Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| text | String | Text to display |
| showSpinner | String | condition to show/hide spinner |
