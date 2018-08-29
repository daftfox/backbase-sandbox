# ui-bus-payment-order-details-ng


Version: **4.37.9**

Adds a <tr> row after each data row in order
to show item details

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBusPaymentOrderDetailsNg from 'ui-bus-payment-order-details-ng';

export const dependencyKeys = [
  uiBusPaymentOrderDetailsNg,
];

// file: templates/template.ng.html
<tr ui-bus-payment-order-details-ng item="payment" toggler="toggle"
ng-click="toggle = ext.helpers.toggleDetails(toggle, payment.id)">
...
</tr>
```
