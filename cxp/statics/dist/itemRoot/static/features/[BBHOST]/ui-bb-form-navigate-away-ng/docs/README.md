# ui-bb-form-navigate-away-ng


Version: **1.2.9**

Show browser confirm message when navigating away if form is not pristine.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbFormNavigateAwayNg from 'ui-bb-form-navigate-away-ng';

export const dependencyKeys = [
  uiBbFormNavigateAwayNg,
];

// Use custom navigate away flag
// file: templates/template.ng.html
<form name="formName"
  ui-bb-form-navigate-away-ng="isFormPristine()"
  form-navigate-away-msg="Are you sure to leave?"
></form>

// Use form.$pristine flag
// file: templates/template.ng.html
<form name="formName"
  ui-bb-form-navigate-away-ng
  form-navigate-away-msg="Are you sure to leave?"
></form>
```

---

## uiBbFormNavigateAwayNg


| Property | Type | Description |
| :-- | :-- | :-- |
| uiBbFormNavigateAwayNg | Boolean | If set to true means form is pristine and does not need to show confirm dialog when navigating away. Otherwise browser ```onbeforeunload``` confirm dialog will be shown. If not provided it will check form pristiness. |
| formNavigateAwayMsg | String | In supported browsers this message will be shown in confirm dialog. |
