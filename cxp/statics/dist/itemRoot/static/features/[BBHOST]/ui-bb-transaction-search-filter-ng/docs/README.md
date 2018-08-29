# ui-bb-transaction-search-filter-ng


Version: **3.34.0**

UI transaction-search filter component

## Imports

* ui-bb-calendar-popup-ng
* ui-bb-dropdown-select-ng
* ui-bb-search-box-ng
* ui-bb-track-form-changes-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';

export const dependencyKeys = [
  uiBbTransactionSearchFilterKey,
];

// file: templates/template.ng.html
<ui-bb-transaction-search-filter-ng
on-filter="$ctrl.filter()"
button-labels="{
 main: 'Filter',
 apply: 'Apply',
 cancel: 'Cancel',
}"
field-labels="{
 transaction: 'Transaction',
 credit: 'Credit',
 debit: 'Debit',
 dateRange: 'Date range',
 amountRange: 'Amount range',
 amountFrom: 'Amount from',
 amountTo: 'Amount to',
 billed: 'Billed',
 unbilled: 'Unbilled',
 pending: 'Pending',
 billingStatus: 'Billing status'
}">
</ui-bb-transaction-search-filter-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-transaction-search-filter-ng**<br/>    <a href="#ui-bb-transaction-search-filter-ngdefaultFilters">defaultFilters</a><br/>    <a href="#ui-bb-transaction-search-filter-ngcreditDebitIndicators">creditDebitIndicators</a><br/>    <a href="#ui-bb-transaction-search-filter-ngbillingStatuses">billingStatuses</a><br/>
- **uiBbTransactionSearchFilterController**<br/>    <a href="#uiBbTransactionSearchFilterController_state">#state</a><br/>    <a href="#uiBbTransactionSearchFilterController_filterParams">#filterParams</a><br/>    <a href="#uiBbTransactionSearchFilterController_toggleFilter">#toggleFilter()</a><br/>    <a href="#uiBbTransactionSearchFilterController_onApplyFilter">#onApplyFilter()</a><br/>    <a href="#uiBbTransactionSearchFilterController_onClearFilter">#onClearFilter()</a><br/>    <a href="#uiBbTransactionSearchFilterController_validateAmountKeypress">#validateAmountKeypress(event)</a><br/>    <a href="#uiBbTransactionSearchFilterController_validateAmountPaste">#validateAmountPaste(event)</a><br/>    <a href="#uiBbTransactionSearchFilterController_isFormValid">#isFormValid()</a><br/>
- **ui-bb-transaction-search-filter-ng**<br/>    <a href="#ui-bb-transaction-search-filter-ngcreditDebitIndicatorOptions">creditDebitIndicatorOptions</a><br/>    <a href="#ui-bb-transaction-search-filter-ngbillingStatusOptions">billingStatusOptions</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## filterConstants

`filterConstants` parameters object.

---

## Filter

Filter enum

---
### <a name="ui-bb-transaction-search-filter-ngdefaultFilters"></a>*defaultFilters*


**Type:** *Array of String*


---
### <a name="ui-bb-transaction-search-filter-ngcreditDebitIndicators"></a>*creditDebitIndicators*

Available options in creditDebitIndicator dropdown

**Type:** *Array of Object*


---
### <a name="ui-bb-transaction-search-filter-ngbillingStatuses"></a>*billingStatuses*

Available options in billingStatus dropdown

**Type:** *Array of Object*


---

## uiBbTransactionSearchFilterController

TransactionSearch filter controller

| Injector Key |
| :-- |
| *uiBbTransactionSearchFilterController* |

### <a name="uiBbTransactionSearchFilterController_state"></a>*#state*

State object.

**Type:** *Object*

### <a name="uiBbTransactionSearchFilterController_filterParams"></a>*#filterParams*

`filterParams` parameters object.

**Type:** *Object*


### <a name="uiBbTransactionSearchFilterController_toggleFilter"></a>*#toggleFilter()*

Toggle filter component.

##### Returns

Boolean - *A status of filter component*

### <a name="uiBbTransactionSearchFilterController_onApplyFilter"></a>*#onApplyFilter()*

Call filter method.

### <a name="uiBbTransactionSearchFilterController_onClearFilter"></a>*#onClearFilter()*

Reset filter parameters.

### <a name="uiBbTransactionSearchFilterController_validateAmountKeypress"></a>*#validateAmountKeypress(event)*

Validates the key pressed in the number input field.
Prevents the event if the key is an invalid one (not a number)
Allows arrow keys

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | [KeyboardEvent](#KeyboardEvent) | the browser event |

### <a name="uiBbTransactionSearchFilterController_validateAmountPaste"></a>*#validateAmountPaste(event)*

Validates the pasted value in the input field.
Prevents the event if the value is an invalid one (not a number)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | [KeyboardEvent](#KeyboardEvent) | the browser event |

### <a name="uiBbTransactionSearchFilterController_isFormValid"></a>*#isFormValid()*

Check if form state is pristine or invalid.

---
### <a name="ui-bb-transaction-search-filter-ngcreditDebitIndicatorOptions"></a>*creditDebitIndicatorOptions*

Array of selectable Credit/Debit indicator options

**Type:** *Array of Object*


---
### <a name="ui-bb-transaction-search-filter-ngbillingStatusOptions"></a>*billingStatusOptions*

Array of selectable Billing status options

**Type:** *Array of Object*

