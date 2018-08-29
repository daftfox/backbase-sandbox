# widget-bb-accounts-overview-ng


Version: **1.29.0**

Accounts overview widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-permissions-ng
* lib-bb-widget-extension-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="AccountsOverviewController as $ctrl">
   <table>
     <thead>
       <tr>
         <th i18n-key="accounts.header.name"></th>
         <th i18n-key="accounts.header.number"></th>
         <th i18n-key="accounts.header.bic"></th>
         <th i18n-key="accounts.header.type"></th>
         <th i18n-key="accounts.header.currency"></th>
         <th i18n-key="accounts.header.bookedBalance"></th>
         <th i18n-key="accounts.header.availableBalance"></th>
       </tr>
     </thead>
     <tbody>
       <tr ng-repeat="account in $ctrl.state.accounts.data track by account.id">
         <td i18n-key="{{ account.name }}"></td>
         <td ng-bind="{{ account.IBAN || account.BBAN || account.product.Number }}"></td>
         <td i18n-key="{{ account.BIC }}"></td>
         <td i18n-key="{{ account.productKindName }}"></td>
         <td i18n-key="{{ account.currency }}"></td>
         <td i18n-key="{{ account.bookedBalance }}"></td>
         <td i18n-key="{{ account.availableBalance }}"></td>
       </tr>
     </tbody>
   </table>
</div>
```

## Table of Contents
- **AccountsOverviewController**<br/>    <a href="#AccountsOverviewController_loadHistoryBalance">#loadHistoryBalance(arrangementsId, balanceHistoryFilter)</a><br/>    <a href="#AccountsOverviewController_loadAccountDetails">#loadAccountDetails(item)</a><br/>    <a href="#AccountsOverviewController_selectAccount">#selectAccount(product)</a><br/>    <a href="#AccountsOverviewController_navigateToTransaction">#navigateToTransaction(account)</a><br/>    <a href="#AccountsOverviewController_navigateToCreatePayment">#navigateToCreatePayment(account)</a><br/>    <a href="#AccountsOverviewController_navigateToAccountDetails">#navigateToAccountDetails(account)</a><br/>    <a href="#AccountsOverviewController_loadMore">#loadMore(done)</a><br/>    <a href="#AccountsOverviewController_hasAccounts">#hasAccounts()</a><br/>    <a href="#AccountsOverviewController_changePage">#changePage()</a><br/>    <a href="#AccountsOverviewController_onSort">#onSort(orderBy, direction)</a><br/>    <a href="#AccountsOverviewController_onSearch">#onSearch(query)</a><br/>    <a href="#AccountsOverviewController_filter">#filter(options)</a><br/>    <a href="#AccountsOverviewController_clearFilter">#clearFilter()</a><br/>    <a href="#AccountsOverviewController_getPermissions">#getPermissions()</a><br/>    <a href="#AccountsOverviewController_$onInit">#$onInit()</a><br/>
- **widget-bb-accounts-overview-ng**<br/>    <a href="#widget-bb-accounts-overview-nggetBalanceHistory">getBalanceHistory(accounts)</a><br/>
- **DefaultHooks**<br/>    <a href="#DefaultHooks_processAccounts">#processAccounts(accounts)</a><br/>    <a href="#DefaultHooks_processSelectedAccount">#processSelectedAccount(account)</a><br/>
- **MessageHandler**<br/>    <a href="#MessageHandler_DataManageProductsErrorMessage">#DataManageProductsErrorMessage</a><br/>    <a href="#MessageHandler_dataBalanceHistoryErrorMessage">#dataBalanceHistoryErrorMessage(modelError)</a><br/>
- **Type Definitions**<br/>    <a href="#loadResponse">loadResponse</a><br/>    <a href="#FilterResponse">FilterResponse</a><br/>    <a href="#FilterOptions">FilterOptions</a><br/>

---

## AccountsOverviewController

Accounts overview widget

### <a name="AccountsOverviewController_loadHistoryBalance"></a>*#loadHistoryBalance(arrangementsId, balanceHistoryFilter)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| arrangementsId | Array of String | Ids of the requested arrangements |
| balanceHistoryFilter | Object (optional) | optional configuration object |

##### Returns

Promise of [BalanceHistory](model-bb-product-summary-ng.html#BalanceHistory), [ModelError](model-bb-product-summary-ng.html#ModelError) - *Balance history data for given arrengements ids*

### <a name="AccountsOverviewController_loadAccountDetails"></a>*#loadAccountDetails(item)*

Loads the details of a specific account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Account to load details of |

##### Returns

Promise of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails), [ModelError](model-bb-product-summary-ng.html#ModelError) - **

### <a name="AccountsOverviewController_selectAccount"></a>*#selectAccount(product)*

Sets the alternate workflow when a user selects a Account from the overview.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | Selected account |

##### Fires Events:

> bb.event.product.selected


### <a name="AccountsOverviewController_navigateToTransaction"></a>*#navigateToTransaction(account)*

Navigate to transaction

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | Account to select. |

### <a name="AccountsOverviewController_navigateToCreatePayment"></a>*#navigateToCreatePayment(account)*

Navigate to create payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | Account to select. |

### <a name="AccountsOverviewController_navigateToAccountDetails"></a>*#navigateToAccountDetails(account)*

Navigate to account details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | Account to select. |

### <a name="AccountsOverviewController_loadMore"></a>*#loadMore(done)*

Loads more payments if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Null or Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
loaded accounts or null if loading is in process*

### <a name="AccountsOverviewController_hasAccounts"></a>*#hasAccounts()*

Check if there are accounts loaded

##### Returns

Boolean - *True if there is at least one account loaded, false otherwise*

### <a name="AccountsOverviewController_changePage"></a>*#changePage()*

Change page of displayed accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params.currentPage | Number | Page number to navigate to |

### <a name="AccountsOverviewController_onSort"></a>*#onSort(orderBy, direction)*

Loads sorted list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
sorted accounts*

### <a name="AccountsOverviewController_onSearch"></a>*#onSearch(query)*

Loads queried list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String | Search query |

##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
searched accounts*

### <a name="AccountsOverviewController_filter"></a>*#filter(options)*

Loads filtered list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | [FilterOptions](#FilterOptions) | Config object |

##### Returns

Promise of [FilterResponse](#FilterResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
filtered accounts*

### <a name="AccountsOverviewController_clearFilter"></a>*#clearFilter()*

Resets filtered list of accounts

##### Returns

Promise of [FilterResponse](#FilterResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
filtered accounts*

### <a name="AccountsOverviewController_getPermissions"></a>*#getPermissions()*

Loads user permission for the extension

### <a name="AccountsOverviewController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [loadResponse](#loadResponse), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with
loaded accounts*

## Example

```javascript
<div ng-controller="AccountsOverviewController as $ctrl">
  <!-- ... -->
</div>
```

---

## balanceHistoryParams

balance History Params

---

### <a name="widget-bb-accounts-overview-nggetBalanceHistory"></a>*getBalanceHistory(accounts)*

Returns balance history records for selected account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array | All accounts |

##### Returns

Array - **

---

## DefaultHooks

Hooks for widget-bb-accounts-overview-ng

### <a name="DefaultHooks_processAccounts"></a>*#processAccounts(accounts)*

Hook for processing accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) | Accounts to process |

##### Returns

Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) - *Processed account*

### <a name="DefaultHooks_processSelectedAccount"></a>*#processSelectedAccount(account)*

Hook for processing selected account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) | Account to process |

##### Returns

[ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) - *Processed account*

---

---

## MessageHandler

list of message handlers
### <a name="MessageHandler_DataManageProductsErrorMessage"></a>*#DataManageProductsErrorMessage*

Object for mapping errors used in extension

**Type:** *Object*


### <a name="MessageHandler_dataBalanceHistoryErrorMessage"></a>*#dataBalanceHistoryErrorMessage(modelError)*

Create error message array for update product
Checks if message has one or more then one error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modelError | [ModelError](#ModelError) | response error object |

##### Returns

[MessageArray](#MessageArray) - *message array*

## Type Definitions


### <a name="loadResponse"></a>*loadResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) | Array of accounts |
| totalCount | String | Total accounts number |

### <a name="FilterResponse"></a>*FilterResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) | Array of accounts |
| totalItems | Number | Total number of accounts |
| hasMore | Boolean | Controls whether or not has more accounts |

### <a name="FilterOptions"></a>*FilterOptions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| searchQuery | String | Search query |
| isLoadMore | Boolean | Controls whether or not it is request for loading more accounts |

---

## Templates

* *template.ng.html*

---
