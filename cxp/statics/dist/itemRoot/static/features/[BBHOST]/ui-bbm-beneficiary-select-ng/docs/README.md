# ui-bbm-beneficiary-select-ng


Version: **2.37.9**

Credit suggest input mobile UI component

## Imports

* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-textfield-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbmBeneficiarySelectKey from 'ui-bbm-beneficiary-select-ng';

export const dependencyKeys = [
  uiBbmBeneficiarySelectKey,
];

// file: templates/template.ng.html
<ui-bbm-beneficiary-select-ng
  name="beneficiary"
  ng-model="$ctrl.payment.to"
  accounts="$ctrl.accountsTo"
  debit-account="$ctrl.payment.to.debitAccount"
  allowCreate="!$ctrl.payment.from || $ctrl.payment.from.externalTransferAllowed"
  on-button-click="ext.helpers.onPaymentToAccountsClick($ctrl)"
  messages="{
    identifierPlaceholder: ('label.beneficiaryIdentifier' | i18n),
    namePlaceholder: ('label.beneficiaryName' | i18n),
  }">
</ui-bbm-beneficiary-select-ng>
```

## Table of Contents
- **Type Definitions**<br/>    <a href="#Beneficiary">Beneficiary</a><br/>

---

## uiBBMBeneficiarySelect


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [AccountsView](#AccountsView) | List of accounts to filter and select with user input |
| allowCreate | Boolean | Is creating of a new beneficiary allowed |
| messages | Object | Localized messages |
| debitAccount | Object | Debit Account |
| ngModel | [Beneficiary](#Beneficiary) | Beneficiary object |
| onButtonClick | Function | Handler for button clicks |

## Type Definitions


### <a name="Beneficiary"></a>*Beneficiary*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Beneficiary name |
| identifier | String | Beneficiary identifier |
| isNew | Boolean | If true, the beneficiary was entered by the user manually. False indicates that the beneficiary was selected from the list. |

---
