# widget-wm-portfolio-transactions-ng


Version: **3.15.2**

Portfolio transactions widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PortfolioTransactionsController as $ctrl">
   <ul>
      <li ng-repeat="transaction in $ctrl.portfolioTransactions">{{transaction.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-wm-portfolio-transactions-ng**<br/>    <a href="#widget-wm-portfolio-transactions-ngDEFAULT_PAGE_SIZE">DEFAULT_PAGE_SIZE</a><br/>
- **PortfolioTransactionsController**<br/>    <a href="#PortfolioTransactionsController_applyFilter">#applyFilter(filterState)</a><br/>    <a href="#PortfolioTransactionsController_loadMore">#loadMore(done)</a><br/>
- **widget-wm-portfolio-transactions-ng**<br/>    <a href="#widget-wm-portfolio-transactions-ngPortfolioTransactionsService">PortfolioTransactionsService(model, viewModel)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngload">load(filterState, doSelectPositionType, doMerge)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngloadFilterOptions">loadFilterOptions()</a><br/>    <a href="#widget-wm-portfolio-transactions-ngloadTransactionDetails">loadTransactionDetails(id)</a><br/>    <a href="#widget-wm-portfolio-transactions-nginitialFilterOptions">initialFilterOptions</a><br/>    <a href="#widget-wm-portfolio-transactions-nginitialFilterState">initialFilterState</a><br/>    <a href="#widget-wm-portfolio-transactions-ngViewModel">ViewModel(stateContainer)</a><br/>    <a href="#widget-wm-portfolio-transactions-nggetState">getState()</a><br/>    <a href="#widget-wm-portfolio-transactions-nginit">init(state)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngbeforeLoadPortfolioTransactions">beforeLoadPortfolioTransactions()</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadPortfolioTransactionsSuccess">afterLoadPortfolioTransactionsSuccess(state, data, doMerge, doSelectPositionType)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadPortfolioTransactionsError">afterLoadPortfolioTransactionsError(state, error)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadFilterOptionsSuccess">afterLoadFilterOptionsSuccess(state, data)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadFilterOptionsError">afterLoadFilterOptionsError(state, error)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngswitchPositionType">switchPositionType(state, type)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngapplyFilter">applyFilter(filterState)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngsetSize">setSize(state, size)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadTransactionDetailsSuccess">afterLoadTransactionDetailsSuccess(state, data, id)</a><br/>    <a href="#widget-wm-portfolio-transactions-ngafterLoadTransactionDetailsError">afterLoadTransactionDetailsError(state, error)</a><br/>
- **Type Definitions**<br/>    <a href="#PortfolioTransactions">PortfolioTransactions</a><br/>    <a href="#initialFilterState">initialFilterState</a><br/>    <a href="#timePeriod">timePeriod</a><br/>    <a href="#assetClass">assetClass</a><br/>    <a href="#transactionCategory">transactionCategory</a><br/>    <a href="#account">account</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## Event

Widget events to be handled

| Property | Type | Description |
| :-- | :-- | :-- |
| TRANSACTION_LIST | String | Used to display a transaction list to move to the transaction list |
| UPDATE_TRANSACTION_FILTER | String | Used to set a new filters for transactions |

---

## Intent

Widget intents to be handled

| Property | Type | Description |
| :-- | :-- | :-- |
| TRANSACTION_LIST | String | Used when clicking on the transaction icon to move to the transaction list |

---

## WidgetPropNames

Custom widget properties

| Property | Type | Description |
| :-- | :-- | :-- |
| ITEMS_PER_PAGE | String | Number of items to display per page |

---
### <a name="widget-wm-portfolio-transactions-ngDEFAULT_PAGE_SIZE"></a>*DEFAULT_PAGE_SIZE*

Default number of transaction records per page

**Type:** *Number*


---

## PortfolioTransactionsController

Portfolio Transactions controller.

| Injector Key |
| :-- |
| *PortfolioTransactionsController* |


### <a name="PortfolioTransactionsController_applyFilter"></a>*#applyFilter(filterState)*

applies transactions filter,
reload data passing applied filter in request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| filterState | Object | state of the filter to apply |

##### Returns

Promise - **

### <a name="PortfolioTransactionsController_loadMore"></a>*#loadMore(done)*

Loads more transactions and append them to the transaction's list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback function for `ui-bb-load-more-ng` component |

##### Returns

Promise - **

---

### <a name="widget-wm-portfolio-transactions-ngPortfolioTransactionsService"></a>*PortfolioTransactionsService(model, viewModel)*

Service that serves to connect ng container with model and save data to view model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Portfolio transactions model module |
| viewModel | Object | Portfolio transactions view model responsible for state |

##### Returns

Object - *Service that connects controller with model*

---

### <a name="widget-wm-portfolio-transactions-ngload"></a>*load(filterState, doSelectPositionType, doMerge)*

Loads set of transactions

| Parameter | Type | Description |
| :-- | :-- | :-- |
| filterState | Object | Set of filter rules |
| doSelectPositionType | Boolean | Flag, that tells whether position type must be set |
| doMerge | Boolean | Flag, that tells whether we need to merge data or overwrite it |

##### Returns

Promise - *Promise, returned by model*

---

### <a name="widget-wm-portfolio-transactions-ngloadFilterOptions"></a>*loadFilterOptions()*

Loads options for transactions' filter

##### Returns

Promise - *Promise, returned by model*

---

### <a name="widget-wm-portfolio-transactions-ngloadTransactionDetails"></a>*loadTransactionDetails(id)*

Loads additional data for given transaction

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number | Transaction id |

##### Returns

Promise - *Promise, returned by model*

---
### <a name="widget-wm-portfolio-transactions-nginitialFilterOptions"></a>*initialFilterOptions*

Initial options of transactions` filter

**Type:** *[initialFilterOptions](#initialFilterOptions)*


---
### <a name="widget-wm-portfolio-transactions-nginitialFilterState"></a>*initialFilterState*

Initial state of transactions` filter

**Type:** *[initialFilterState](#initialFilterState)*


---

### <a name="widget-wm-portfolio-transactions-ngViewModel"></a>*ViewModel(stateContainer)*

Creates ViewModel for PortfolioTransactions widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| stateContainer | Object |  |

##### Returns

Object - *Model for changing our state*

---

### <a name="widget-wm-portfolio-transactions-nggetState"></a>*getState()*


##### Returns

Function - *Functions that returns state of our widget*

---

### <a name="widget-wm-portfolio-transactions-nginit"></a>*init(state)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | State of our widget |

##### Returns

Object - *Initial state*

---

### <a name="widget-wm-portfolio-transactions-ngbeforeLoadPortfolioTransactions"></a>*beforeLoadPortfolioTransactions()*


##### Returns

[{portfolioTransactions: {loading: true}}](#{portfolioTransactions: {loading: true}}) - *Sets loading flag of portfolio transactions to true*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadPortfolioTransactionsSuccess"></a>*afterLoadPortfolioTransactionsSuccess(state, data, doMerge, doSelectPositionType)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of out widget |
| data | Array | Data, returned from model |
| doMerge | Boolean | Flag, that tells whether we need to merge data or overwrite it |
| doSelectPositionType | Boolean | Flag, that tells whether position type must be set |

##### Returns

[{initialLoading: boolean](#{initialLoading: boolean), [positionType](#positionType), [portfolioTransactions: {data: *](#portfolioTransactions: {data: *), [list: *](#list: *), [loading: boolean}](#loading: boolean}), [errors: {portfolioTransactionsError: null}}](#errors: {portfolioTransactionsError: null}}) - *New state after transactions load*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadPortfolioTransactionsError"></a>*afterLoadPortfolioTransactionsError(state, error)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| error | Object | Error, which occurred after model method call |

##### Returns

[{errors: {portfolioTransactionsError: number}}](#{errors: {portfolioTransactionsError: number}}) - *Saves received error to state*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadFilterOptionsSuccess"></a>*afterLoadFilterOptionsSuccess(state, data)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| data | Object | Received filter options |

##### Returns

[{filterOptions: object}](#{filterOptions: object}) - *Sets new filter options*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadFilterOptionsError"></a>*afterLoadFilterOptionsError(state, error)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| error | Object | Error, which occurred after model method call |

##### Returns

[{errors: {portfolioTransactionsError: number}}](#{errors: {portfolioTransactionsError: number}}) - *Saves received error to state*

---

### <a name="widget-wm-portfolio-transactions-ngswitchPositionType"></a>*switchPositionType(state, type)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| type | String | New transactions' position type |

##### Returns

[{positionType: string}](#{positionType: string}) - *New transactions' position type*

---

### <a name="widget-wm-portfolio-transactions-ngapplyFilter"></a>*applyFilter(filterState)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| filterState | Object | Set of filter rules |

##### Returns

[{appliedFilter: object](#{appliedFilter: object), [allTransactionsLoaded: false](#allTransactionsLoaded: false), [offset: 0}](#offset: 0}) - *New transactions' filter state*

---

### <a name="widget-wm-portfolio-transactions-ngsetSize"></a>*setSize(state, size)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| size | Number | Amount of transactions per page |

##### Returns

[{size: number}](#{size: number}) - *Amount of transactions per page*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadTransactionDetailsSuccess"></a>*afterLoadTransactionDetailsSuccess(state, data, id)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| data | Object | Detailed transaction data |
| id | Number | Transaction id |

##### Returns

Object - *Detailed data for given transaction*

---

### <a name="widget-wm-portfolio-transactions-ngafterLoadTransactionDetailsError"></a>*afterLoadTransactionDetailsError(state, error)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |
| error | Object | Error, which occurred after model method call |

##### Returns

[{errors: {portfolioTransactionsError: number}}](#{errors: {portfolioTransactionsError: number}}) - *Saves received error to state*

## Type Definitions


### <a name="PortfolioTransactions"></a>*PortfolioTransactions*

Portfolio transactions type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array | Set of portfolio transaction ids |
| list | Object | Normalized set of portfolio transactions |
| loading | Boolean | Loading flag |

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

---

## Templates

* *template.ng.html*

---
