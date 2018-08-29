# ui-bus-format-amount-ng


Version: **2.5.1**


## Imports

* lib-bb-currency-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBusFormatAmountKey from 'ui-bus-format-amount-ng';

export const dependencyKeys = [
  uiBusFormatAmountKey,
];

// file: templates/template.ng.html
<ui-bus-format-amount
amount="$option.amount"
currency="$option.currency"
></ui-bus-format-amount>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bus-format-amount-ng**<br/>    <a href="#ui-bus-format-amount-nguiBusFormatAmountController">uiBusFormatAmountController(currencyRules)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBusFormatAmountComponent

Format Business Amount Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | Amount string |
| currency | String | Currency string |

---

### <a name="ui-bus-format-amount-nguiBusFormatAmountController"></a>*uiBusFormatAmountController(currencyRules)*

Format Business Amount Controller

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyRules | Object | Currency rules |
