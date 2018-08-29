# ui-bb-transaction-details-ng


Version: **1.13.1**

UI transaction-details component

## Imports

* ui-bb-format-amount-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbTransactionDetailsKey from 'ui-bb-transaction-details-ng';

export const dependencyKeys = [
  uiBbTransactionDetailsKey,
];

// file: templates/template.ng.html
<li ng-repeat="transaction in $ctrl.transactions">
  <ui-bb-transaction-details-ng
    transaction="transaction"
    show-account-number="$ctrl.isMultipleAccounts"
    on-change-category="$ctrl.onChangeCategory"
    button-labels="{
      changeCategory: 'Change Category',
    }"
    field-labels="{
      accountNumber: 'Account Number',
      transactionType: 'Transaction Type',
      counterPartyName: 'Counter Party Name',
      counterPartyAccountNumber: 'Counter Party Account Number',
      scheduledDate: 'Scheduled Date',
      transactionReference: 'Transaction Reference',
      instructedCurrency: 'Instructed Currency',
      currencyExchangeRate: 'Currency Exchange Rate',
      instructedAmount: 'Instructed Amount',
      description: 'Description',
      category: 'Category',
      checkSerialNumber: 'Check Number',
      runningBalance: 'Running Balance',
    }"
  >
  </ui-bb-transaction-details-ng>
</li>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbTransactionDetailsController**<br/>    <a href="#uiBbTransactionDetailsController_changeCategory">#changeCategory()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbTransactionDetailsController

Transaction details controller

| Injector Key |
| :-- |
| *uiBbTransactionDetailsController* |


### <a name="uiBbTransactionDetailsController_changeCategory"></a>*#changeCategory()*

Calls the function passed in the onChangeCategory binding, passing the transaction object used
in this component
