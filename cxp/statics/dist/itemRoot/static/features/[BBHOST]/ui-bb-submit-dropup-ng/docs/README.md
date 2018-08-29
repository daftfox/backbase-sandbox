# ui-bb-submit-dropup-ng


Version: **2.37.9**

Submit button with menu UI component

## Imports

* ui-bb-button-spinner-ng
* ui-bb-ellipsis-tooltip-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSubmitDropupKey from 'ui-bb-submit-dropup-ng';

export const dependencyKeys = [
  uiBbSubmitDropupKey,
];

// file: templates/template.ng.html
<ui-bb-submit-dropup-ng
  data-tooltip-message="{{ 'label.review.submit.type.tooltip' | i18n }}"
  data-css-classes="col-md-3 col-sm-4 col-xs-12 p-0 mb-2 float-none"
  data-on-select="ext.helpers.selectPaymentSubmitType(button, $ctrl, $parent)"
  data-submit-button-types="ext.helpers.submitButtonTypes">
</ui-bb-submit-dropup-ng>
```

---
