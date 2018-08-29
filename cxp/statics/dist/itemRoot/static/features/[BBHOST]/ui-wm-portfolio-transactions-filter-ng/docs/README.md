# ext-portfolio-transactions-filter


Version: **2.12.2**

Transactions filter`s module.

## Imports

* lib-bb-event-bus-ng
* ui-bb-dropdown-select-ng
* vendor-bb-angular
* vendor-bb-angular-ng-messages

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbPortfolioTransactionsFilterKey from 'ui-wm-portfolio-transactions-filter-ng';

export const dependencyKeys = [
  uiBbPortfolioTransactionsFilterKey,
];
```

## Table of Contents
- **ext-portfolio-transactions-filter**<br/>    <a href="#ext-portfolio-transactions-filterdefaultInitialFilterState">defaultInitialFilterState</a><br/>
- **TransactionsFilterController**<br/>    <a href="#TransactionsFilterController_state">#state</a><br/>    <a href="#TransactionsFilterController_applyFilters">#applyFilters()</a><br/>    <a href="#TransactionsFilterController_isFilterApplied">#isFilterApplied()</a><br/>    <a href="#TransactionsFilterController_cancelFilter">#cancelFilter()</a><br/>    <a href="#TransactionsFilterController_clearSelectedFilters">#clearSelectedFilters()</a><br/>
- **ext-portfolio-transactions-filter**<br/>    <a href="#ext-portfolio-transactions-filterdefault">default</a><br/>
- **Type Definitions**<br/>    <a href="#initialFilterState">initialFilterState</a><br/>    <a href="#timePeriod">timePeriod</a><br/>    <a href="#assetClass">assetClass</a><br/>    <a href="#transactionCategory">transactionCategory</a><br/>    <a href="#account">account</a><br/>    <a href="#validation">validation</a><br/>

---

## TransactionsFilterComponent

Transactions filter component.

| Injector Key |
| :-- |
| *transactionsFilter* |


## Example

```javascript
<div class="col-xs-12">
  <ui-wm-portfolio-transactions-filter
  data-on-filter-apply="$ctrl.applyFilter($filter)"
  data-on-filter-cancel="$ctrl.closeFilter()"
  data-filter-time-period-config="ext.helpers.filterTimePeriodConfig"
  data-filter-transaction-categories="ext.helpers.transactionCategories"
  data-filter-accounts="ext.helpers.accounts"
  data-filter-asset-classes="ext.helpers.assetClasses"
  data-filter-btn-label="portfolioTransactions.filter"
  data-filter-labels="{
      instrumentName: ('portfolioTransactions.filter.instrumentName' | i18n),
      counterpartyName: ('portfolioTransactions.filter.counterpartyName' | i18n),
      counterpartyNameExample: ('portfolioTransactions.filter.counterpartyNameExample' | i18n),
      counterpartyAccount: ('portfolioTransactions.filter.counterpartyAccount' | i18n),
      counterpartyAccountExample: ('portfolioTransactions.filter.counterpartyAccountEx' | i18n),
      instrumentNameExample: ('portfolioTransactions.filter.instrumentNameExample' | i18n),
      ISIN: ('portfolioTransactions.filter.ISIN' | i18n),
      ISINExample: ('portfolioTransactions.filter.ISINExample' | i18n),
      timePeriod: ('portfolioTransactions.filter.timePeriod' | i18n),
      assetClass: ('portfolioTransactions.filter.assetClass' | i18n),
      transactionCategory: ('portfolioTransactions.filter.transactionCategory' | i18n),
      account: ('portfolioTransactions.filter.account' | i18n),
      amountRange: ('portfolioTransactions.filter.amountRange' | i18n),
      amountRangeFrom: ('portfolioTransactions.filter.amountRangeFrom' | i18n),
      amountRangeTo: ('portfolioTransactions.filter.amountRangeTo' | i18n),
      amountRangeExample: ('portfolioTransactions.filter.amountRangeExample' | i18n),
      clearSelected: ('portfolioTransactions.filter.clearSelected' | i18n),
      cancel: ('portfolioTransactions.filter.cancel' | i18n),
      applyFilters: ('portfolioTransactions.filter.applyFilters' | i18n)
  }">
 </ui-wm-portfolio-transactions-filter>
</div>
```

---
### <a name="ext-portfolio-transactions-filterdefaultInitialFilterState"></a>*defaultInitialFilterState*

Initial state of transactions` filter

**Type:** *[initialFilterState](#initialFilterState)*


---

## TransactionsFilterController

Portfolio Transactions controller.

| Injector Key |
| :-- |
| *TransactionsFilterController* |

### <a name="TransactionsFilterController_state"></a>*#state*

Controller's state object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| filter | Object | Current state of filter |
| appliedFilter | Object | Filter state that was applied to transactions` list |
| validation | [validation](#validation) | Properties related to filer validation |

### <a name="TransactionsFilterController_applyFilters"></a>*#applyFilters()*

Method to apply selected filters. Updates inner state of controller,
invokes components callback 'onFilterApply',
closes filter popover

### <a name="TransactionsFilterController_isFilterApplied"></a>*#isFilterApplied()*

Informs whether filter is applied to transactions` list

### <a name="TransactionsFilterController_cancelFilter"></a>*#cancelFilter()*

Resets filter state to state that filter had before current filter popup`s opening,
closes filter popover

### <a name="TransactionsFilterController_clearSelectedFilters"></a>*#clearSelectedFilters()*

Resets filter`s state to initial filter`s state

---
### <a name="ext-portfolio-transactions-filterdefault"></a>*default*

Angular module name

**Type:** *String*


## Type Definitions


### <a name="initialFilterState"></a>*initialFilterState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| instrumentName | String | Name of the instrument in transaction |
| isin | String | Instrument/asset international code |
| counterpartyName | String | Name of counterparty of the transaction |
| counterpartyAccount | String | Account id of counterpart in transaction |
| timePeriod | [timePeriod](#timePeriod) | Time period of transactions to filter |
| assetClass | [assetClass](#assetClass) | Asset class selected to filter |
| transactionCategory | [transactionCategory](#transactionCategory) | Transactions category selected to filter |
| account | [account](#account) | Acount selected to filter |
| amountRangeFrom | Number | Amount to filter from |
| amountRangeTo | Number | Amount to filter to |

### <a name="timePeriod"></a>*timePeriod*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| startDate | Date | start date |
| endDate | Date | end date |

### <a name="assetClass"></a>*assetClass*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | asset class name |
| id | String | id of asset class |

### <a name="transactionCategory"></a>*transactionCategory*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | transaction category name |
| id | String | id of transaction category |

### <a name="account"></a>*account*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | account name |
| id | String | id of account |

### <a name="validation"></a>*validation*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| nameInputValidationPattern | String | validation pattern for name fields |
| nameInputMaxLength | String | maximum length for input |
| numberInputValidationPattern | String | validation pattern for amount |

---
