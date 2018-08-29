# widget-bb-transactions-ng


Version: **1.50.1**

Transactions widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-transactions-ng
* vendor-bb-angular

---

## Table of Contents
- **TransactionsController**<br/>    <a href="#TransactionsController_state">#state</a><br/>    <a href="#TransactionsController_search">#search(query)</a><br/>    <a href="#TransactionsController_cancelSearch">#cancelSearch()</a><br/>    <a href="#TransactionsController_applySearchFilter">#applySearchFilter(params)</a><br/>    <a href="#TransactionsController_searchMore">#searchMore(done)</a><br/>    <a href="#TransactionsController_loadMore">#loadMore(done)</a><br/>    <a href="#TransactionsController_changePage">#changePage(params)</a><br/>    <a href="#TransactionsController_onTransactionClick">#onTransactionClick(selectedTransaction)</a><br/>    <a href="#TransactionsController_showProductDetails">#showProductDetails(productId)</a><br/>    <a href="#TransactionsController_dismissNotification">#dismissNotification(notificationId)</a><br/>    <a href="#TransactionsController_changeTransactionCategory">#changeTransactionCategory(transactionObj)</a><br/>    <a href="#TransactionsController_$onInit">#$onInit()</a><br/>    <a href="#TransactionsController_onSort">#onSort(orderBy, direction, header)</a><br/>    <a href="#TransactionsController_exportToFile">#exportToFile(format, nbDays)</a><br/>    <a href="#TransactionsController_transactions">#transactions</a><br/>    <a href="#TransactionsController_product">#product</a><br/>    <a href="#TransactionsController_loading">#loading</a><br/>    <a href="#TransactionsController_loadingError">#loadingError</a><br/>    <a href="#TransactionsController_allTransactionsLoaded">#allTransactionsLoaded</a><br/>    <a href="#TransactionsController_searching">#searching</a><br/>    <a href="#TransactionsController_searchLoading">#searchLoading</a><br/>    <a href="#TransactionsController_searchLoadingError">#searchLoadingError</a><br/>    <a href="#TransactionsController_searchTransactions">#searchTransactions</a><br/>    <a href="#TransactionsController_searchAllTransactionsLoaded">#searchAllTransactionsLoaded</a><br/>    <a href="#TransactionsController_transaction">#transaction</a><br/>    <a href="#TransactionsController_showAllTransactions">#showAllTransactions</a><br/>    <a href="#TransactionsController_currencies">#currencies</a><br/>    <a href="#TransactionsController_categories">#categories</a><br/>    <a href="#TransactionsController_transactionsEnumValues">#transactionsEnumValues</a><br/>    <a href="#TransactionsController_isMultipleAccounts">#isMultipleAccounts</a><br/>    <a href="#TransactionsController_errors">#errors</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processProductSelected">#processProductSelected(productSelected)</a><br/>    <a href="#Hooks_processRequestParams">#processRequestParams(params)</a><br/>    <a href="#Hooks_processTransactions">#processTransactions(transactions)</a><br/>    <a href="#Hooks_processExportRequestParams">#processExportRequestParams(exportParams, state)</a><br/>    <a href="#Hooks_defaultPaginationType">#defaultPaginationType()</a><br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>    <a href="#Hooks_isDefaultProductFirst">#isDefaultProductFirst()</a><br/>    <a href="#Hooks_extendLoadMoreParams">#extendLoadMoreParams(params)</a><br/>    <a href="#Hooks_isTransactionsShown">#isTransactionsShown()</a><br/>    <a href="#Hooks_setChangeTransCategoryIntent">#setChangeTransCategoryIntent()</a><br/>    <a href="#Hooks_shouldUpdateAnalysisView">#shouldUpdateAnalysisView()</a><br/>    <a href="#Hooks_processCategories">#processCategories(categories)</a><br/>    <a href="#Hooks_processTransactionsEnumValues">#processTransactionsEnumValues(enumValues)</a><br/>
- **TransactionsService**<br/>    <a href="#TransactionsService_load">#load(params)</a><br/>    <a href="#TransactionsService_search">#search(params)</a><br/>    <a href="#TransactionsService_export">#export(params, format)</a><br/>    <a href="#TransactionsService_checkTodayTransactions">#checkTodayTransactions()</a><br/>    <a href="#TransactionsService_setupSelectedProduct">#setupSelectedProduct(isDefaultProductFirst)</a><br/>    <a href="#TransactionsService_loadCurrentTransaction">#loadCurrentTransaction()</a><br/>    <a href="#TransactionsService_updateTransactionCategory">#updateTransactionCategory(data)</a><br/>    <a href="#TransactionsService_storeCurrentTransaction">#storeCurrentTransaction(transaction)</a><br/>    <a href="#TransactionsService_getCurrencies">#getCurrencies()</a><br/>    <a href="#TransactionsService_getCategories">#getCategories()</a><br/>    <a href="#TransactionsService_getTransactionsEnumValues">#getTransactionsEnumValues()</a><br/>
- **Type Definitions**<br/>    <a href="#ExportRequestParams">ExportRequestParams</a><br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#TransactionsResponse">TransactionsResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>    <a href="#TransactionsSearchResponse">TransactionsSearchResponse</a><br/>    <a href="#SearchRequestParams">SearchRequestParams</a><br/>

---

## TransactionsController

Transactions widget controller

| Injector Key |
| :-- |
| *TransactionsController* |

### <a name="TransactionsController_state"></a>*#state*


#### Deprecated: since 1.10.0. Use `viewModel.getState()` instead.
State on transactions

**Type:** *Object*


### <a name="TransactionsController_search"></a>*#search(query)*

Searches by a given query

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String | Search query |

##### Returns

Promise of [void](#void) - *Promise*

### <a name="TransactionsController_cancelSearch"></a>*#cancelSearch()*

Resets search

##### Returns

[void](#void) - **

### <a name="TransactionsController_applySearchFilter"></a>*#applySearchFilter(params)*

Searches by given filter parameters

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Search filter params |

##### Returns

Promise of [void](#void) - *Promise*

### <a name="TransactionsController_searchMore"></a>*#searchMore(done)*

Loads more search results and appends them to the search result.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function (optional) | Callback function for `ui-bb-load-more-ng` component |

##### Returns

Null or Promise of [void](#void) - *Promise or null if search is finished*

### <a name="TransactionsController_loadMore"></a>*#loadMore(done)*

Loads more transactions and append them to the transaction's list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function (optional) | Callback function for `ui-bb-load-more-ng` component |

##### Returns

Null or Promise of [void](#void) - *Promise or null if loading is finished*

### <a name="TransactionsController_changePage"></a>*#changePage(params)*

Change page of displayed accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |
| params.currentPage | Number | Transactions page to load |

##### Returns

Promise of [void](#void) - *A Promise*

### <a name="TransactionsController_onTransactionClick"></a>*#onTransactionClick(selectedTransaction)*

Handles transaction select

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedTransaction | Object | Object with selected transaction |

##### Fires Events:

> bb.event.transaction.selected


### <a name="TransactionsController_showProductDetails"></a>*#showProductDetails(productId)*

Handles the intent to show the product details for the given product

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productId | String | The id of the product |

### <a name="TransactionsController_dismissNotification"></a>*#dismissNotification(notificationId)*

Helper method to remove a notification from state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationId | Number | Id of the notification that should be dismissed |

### <a name="TransactionsController_changeTransactionCategory"></a>*#changeTransactionCategory(transactionObj)*

Trigger change transaction category intent

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionObj | Object | The transaction object |

### <a name="TransactionsController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically in the angular cycle.

### <a name="TransactionsController_onSort"></a>*#onSort(orderBy, direction, header)*

Loads sorted list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |
| header | Object | Config object reference. Deprecated. |

### <a name="TransactionsController_exportToFile"></a>*#exportToFile(format, nbDays)*

Exports list of transactions to a file in specified format - if search/filter is active, then
apply the same parameters to the export.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| format | String | Specified format (CSV, PDF) |
| nbDays | Number | Number of days to export - pass 0 to get all transactions, pass 1 to get today's transactions (default), or a number N to get the last N days of transactions |
### <a name="TransactionsController_transactions"></a>*#transactions*


#### Deprecated: since 1.10.0. Use `viewModel.getState().transactions.rawData` instead.
The list of transactions

**Type:** *Array of [TransactionsData.TransactionItemGet](data-bb-transactions-ng.html#TransactionsData.TransactionItemGet)*

### <a name="TransactionsController_product"></a>*#product*


#### Deprecated: since 1.10.0. Use `viewModel.getState().product.data` instead.
Selected product info

**Type:** *[Product](model-bb-transactions-ng.html#Product)*

### <a name="TransactionsController_loading"></a>*#loading*


#### Deprecated: since 1.10.0. Use `viewModel.getState().transactions.loading`
or `viewModel.getState().search.loading` instead.
Loading flag which is true while the list of transactions is loading

**Type:** *Boolean*

### <a name="TransactionsController_loadingError"></a>*#loadingError*


#### Deprecated: since 1.10.0. Use `viewModel.getState().error` instead.
Last occurred error

**Type:** *[ModelError](ui-bb-model-errors.html#ModelError)*

### <a name="TransactionsController_allTransactionsLoaded"></a>*#allTransactionsLoaded*


#### Deprecated: since 1.10.0. Use `viewModel.getState().transactions.loadedAll`
or `viewModel.getState().search.loadedAll` instead.
Flag that indicates whether all the transactions have been loaded

**Type:** *Boolean*

### <a name="TransactionsController_searching"></a>*#searching*


#### Deprecated: since 1.10.0. Use `viewModel.getState().searching` instead.
Searching flag which is true while user is searching transactions

**Type:** *Boolean*

### <a name="TransactionsController_searchLoading"></a>*#searchLoading*


#### Deprecated: since 1.10.0. Use `viewModel.getState().search.loading` instead.
Loading flag which is true while the list of transactions is loading

**Type:** *Boolean*

### <a name="TransactionsController_searchLoadingError"></a>*#searchLoadingError*


#### Deprecated: since 1.10.0. Use `viewModel.getState().error` instead.
Search error

**Type:** *[ModelError](ui-bb-model-errors.html#ModelError)*

### <a name="TransactionsController_searchTransactions"></a>*#searchTransactions*


#### Deprecated: since 1.10.0. Use `viewModel.getState().searching` instead.
Returns whether search filter is applied

**Type:** *Boolean*

### <a name="TransactionsController_searchAllTransactionsLoaded"></a>*#searchAllTransactionsLoaded*


#### Deprecated: since 1.10.0. Use `viewModel.getState().search.loadedAll` instead.
Flag that indicates whether all the transactions have been loaded during a search

**Type:** *Boolean*

### <a name="TransactionsController_transaction"></a>*#transaction*


#### Deprecated: since 1.10.0. Use `viewModel.getState().transaction.data` instead.
Selected transaction info

**Type:** *Object*

### <a name="TransactionsController_showAllTransactions"></a>*#showAllTransactions*


#### Deprecated: since 1.10.0. Use `viewModel.getState().search.category` instead.
Show all available transactions

**Type:** *Boolean*

### <a name="TransactionsController_currencies"></a>*#currencies*

Return all available currencies

**Type:** *Array*

### <a name="TransactionsController_categories"></a>*#categories*

Return all available categories

**Type:** *Array*

### <a name="TransactionsController_transactionsEnumValues"></a>*#transactionsEnumValues*

Return all available transactions enum values

**Type:** *Array*

### <a name="TransactionsController_isMultipleAccounts"></a>*#isMultipleAccounts*

Check if multiple accounts are selected

**Type:** *Boolean*

### <a name="TransactionsController_errors"></a>*#errors*


#### Deprecated: since 1.10.0. Use `viewModel.getState().error` instead.
Contains transaction error

**Type:** *Object*


---

## Hooks

Default hooks for widget-bb-transactions-ng

### <a name="Hooks_processProductSelected"></a>*#processProductSelected(productSelected)*

Default hook for selected product processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productSelected | [Product](model-bb-transactions.html#Product) | Product to process |

##### Returns

Object - *Processed product*

### <a name="Hooks_processRequestParams"></a>*#processRequestParams(params)*

Default hook for transactions query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to process |
| params.amountGreaterThan | Number (optional) | Amount greater than |
| params.amountLessThan | Number (optional) | Amount less than |
| params.bookingDateGreaterThan | String (optional) | Booking date greater than |
| params.bookingDateLessThan | String (optional) | Booking date less than |
| params.productId | String (optional) | The product id |
| params.type | String (optional) | Type category |
| params.orderBy | String (optional) | The key to order by |
| params.direction | String (optional) | The direction to order by |
| params.from | Number (optional) | The page to list from |
| params.size | Number (optional) | The number of results per page |
| params.query | String (optional) | The search term used to search for transactions |

##### Returns

Object - *Processed params*

### <a name="Hooks_processTransactions"></a>*#processTransactions(transactions)*

Default hook for transactions list post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of [TransactionsData.TransactionItemGet](data-bb-transactions-ng.html#TransactionsData.TransactionItemGet) | Transactions to process |

##### Returns

Array - *Processed transactions*

### <a name="Hooks_processExportRequestParams"></a>*#processExportRequestParams(exportParams, state)*

Default hook for transactions query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| exportParams | [ExportRequestParams](#ExportRequestParams) | Params to process |
| state | [ViewState](#ViewState) | Widget state |

##### Returns

[ExportRequestParams](#ExportRequestParams) - *Processed params*

### <a name="Hooks_defaultPaginationType"></a>*#defaultPaginationType()*

defaultPaginationType default hook for setting load-more or pagination as default

##### Returns

String (optional) - **

### <a name="Hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

### <a name="Hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

### <a name="Hooks_isDefaultProductFirst"></a>*#isDefaultProductFirst()*

isDefaultProductFirst default hook

##### Returns

Boolean - **

### <a name="Hooks_extendLoadMoreParams"></a>*#extendLoadMoreParams(params)*

Default hook for extending loadMore params

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to extend |
| params.amountGreaterThan | Number (optional) | Amount greater than |
| params.amountLessThan | Number (optional) | Amount less than |
| params.bookingDateGreaterThan | String (optional) | Booking date greater than |
| params.bookingDateLessThan | String (optional) | Booking date less than |
| params.productId | String (optional) | The product id |
| params.type | String (optional) | Type category |

##### Returns

Object - *Processed params*

### <a name="Hooks_isTransactionsShown"></a>*#isTransactionsShown()*

Default hook for checking if the transactions should be visible

##### Returns

Boolean - **

### <a name="Hooks_setChangeTransCategoryIntent"></a>*#setChangeTransCategoryIntent()*

Default hook for setting the intent to trigger the change transaction category widget

##### Returns

String - **

### <a name="Hooks_shouldUpdateAnalysisView"></a>*#shouldUpdateAnalysisView()*

Default hook for shouldUpdateAnalysisView flag

##### Returns

Boolean - **

### <a name="Hooks_processCategories"></a>*#processCategories(categories)*

Default hook for categories list post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| categories | Array of [CategoriesManagement.Category](data-bb-categories-management-http-ng.html#CategoriesManagement.Category) | Categories to process |

##### Returns

Array - *Processed categories*

### <a name="Hooks_processTransactionsEnumValues"></a>*#processTransactionsEnumValues(enumValues)*

Default hook for transactions enum values post processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| enumValues | Array of [TransactionsData.DefaultValueGetResponse](data-bb-transactions-http-ng.html#TransactionsData.DefaultValueGetResponse) | Transactions enum values to process |

##### Returns

Array - *Processed transactions enum values*

---

## TransactionsService

The service encapsulates the core functionality of the Transactions Widget. It co-ordinates the
communication of data from the `Model` with the communication with the user by updating the
[ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential stages; "before", "success", and
"error", to allow the view to provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bb-transactions-ng:service* |


### <a name="TransactionsService_load"></a>*#load(params)*

Fetch a `page` of `transactions` from the model and update the [ViewState](#ViewState) to display
them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [LoadRequestParams](#LoadRequestParams) | Request params |

##### Returns

Promise of [void](#void) - **

### <a name="TransactionsService_search"></a>*#search(params)*

Fetch a `page` of `transactions` search results from the model and update the [ViewState](#ViewState)
to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [SearchRequestParams](#SearchRequestParams) | Request params |

##### Returns

Promise of [void](#void) - **

### <a name="TransactionsService_export"></a>*#export(params, format)*

Download transactions, which satisfy request parameter conditions, in specified format

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [ExportRequestParams](#ExportRequestParams) | Request params |
| format | String | Export format |

##### Returns

Promise of [void](#void) - **

### <a name="TransactionsService_checkTodayTransactions"></a>*#checkTodayTransactions()*

Fetch one transaction with today's date and update `ViewState` to indicate whether a
transaction for today is present.

##### Returns

[void](#void) - **

### <a name="TransactionsService_setupSelectedProduct"></a>*#setupSelectedProduct(isDefaultProductFirst)*

Fetch selected product and update `ViewState`.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| isDefaultProductFirst | Boolean | Indicates whether default product should be returned first |

##### Returns

Promise of [void](#void) - **

### <a name="TransactionsService_loadCurrentTransaction"></a>*#loadCurrentTransaction()*

Fetch selected transaction and update `ViewState`.

##### Returns

Promise of [void](#void) - **

### <a name="TransactionsService_updateTransactionCategory"></a>*#updateTransactionCategory(data)*

Updates transaction's category and `ViewState`.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Object with transactionId, arrangementId and categoryName properties |

##### Returns

Promise of Boolean, Object - *True if the update was successful, error object otherwise*

### <a name="TransactionsService_storeCurrentTransaction"></a>*#storeCurrentTransaction(transaction)*

Stores currently selected transaction and updates `ViewState`.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Currently selected transaction |

##### Returns

[void](#void) - **

### <a name="TransactionsService_getCurrencies"></a>*#getCurrencies()*

Request currencies list.

##### Returns

Array of [PaymentOrdersData.Currency](data-bb-payment-orders-ng.html#PaymentOrdersData.Currency) - *Currencies array*

### <a name="TransactionsService_getCategories"></a>*#getCategories()*

Request categories list.

##### Returns

Array of [CategoriesManagement.Category](data-bb-categories-management-http-ng.html#CategoriesManagement.Category) - *categories array*

### <a name="TransactionsService_getTransactionsEnumValues"></a>*#getTransactionsEnumValues()*

Request transactions enum values.

##### Returns

Array of [TransactionsData.DefaultValueGetResponse](data-bb-transactions-http-ng.html#TransactionsData.DefaultValueGetResponse) - *transactions enum values array*

## Type Definitions


### <a name="ExportRequestParams"></a>*ExportRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| exportFormat | String | Export format |
| productId | String | Product ID of transactions to load |
| query | String (optional) | Query search parameter |
| bookingDateLessThan | String (optional) | Maximum booking date search parameter |
| bookingDateGreaterThan | String (optional) | Minimum booking date search parameter |
| amountGreaterThan | String (optional) | Minimum amount search parameter |
| amountLessThan | String (optional) | Maximum amount search parameter |
| creditDebitIndicator | String (optional) | Credit or debit search parameter |
| billingStatus | String (optional) | Billing status search parameter |

### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| initialLoading | Boolean | Indicates whether widget's initial loading is done |
| searching | Boolean | Indicates whether transactions search is active at the moment |
| error | Object | The last encountered error |
| error.message | String | Error message |
| paginationType | String | Represents current pagination type. 'pagination' or 'load-more' |
| currencies | Array of [PaymentOrdersData.Currency](data-bb-payment-orders-ng.html#PaymentOrdersData.Currency) | List of available currencies |
| transactions | Object |  |
| transactions.rawData | Array of Object | Collection of transactions |
| transactions.loading | Boolean | Indicates whether transactions are loading at the moment |
| transactions.loadedAll | Boolean | Indicates whether all transactions are loaded |
| transactions.total | Number | Total number of transactions |
| transactions.from | Number | The current page (0 indexed) |
| transactions.size | Number | The number of transactions in page |
| transactions.today | String | Today date in the `yyyy-MM-dd` format |
| transactions.hasTodayTransactions | Boolean | Indicates whether transactions collection contains today transactions |
| transaction | Object |  |
| transaction.data | Boolean | Current transaction object |
| product | Object |  |
| product.data | Boolean | Current product object |
| search | Object |  |
| search.rawData | Array of Object | Collection of search transactions |
| search.loading | Boolean | Indicates whether search transactions are loading at the moment |
| search.loadedAll | Boolean | Indicates whether all search transactions are loaded |
| search.total | Number | Total number of search results |
| search.from | Number | The current page (0 indexed) |
| search.size | Number | The number of transactions in page |
| search.query | String | Query search parameter |
| search.bookingDateLessThan | String | Maximum booking date search parameter |
| search.bookingDateGreaterThan | String | Minimum booking date search parameter |
| search.amountGreaterThan | String | Minimum amount search parameter |
| search.amountLessThan | String | Maximum amount search parameter |
| search.creditDebitIndicator | String | Credit or debit search parameter |
| search.category | String | Transaction category search parameter |
| search.categories | String | Transaction categories search parameter |
| search.billingStatus | String | Billing status search parameter |
| search.fromCheckSerialNumber | String | Minimum check serial number search parameter |
| search.toCheckSerialNumber | String | Maximum check serial number search parameter |
| export | Object |  |
| export.exportFailed | Boolean | Indicates whether last transactions export failed |
| notifications | Array of Object | Array of notifications to be displayed |
| sort | Object |  |
| sort.orderBy | String | Property by which transactions have to be ordered |
| sort.direction | [direction](#direction) | Ordering direction |
| categories | Object | Categories by which transactions can be filtered |
| transactionsEnumValues | Object | Enum values by which transactions can be filtered |

### <a name="TransactionsResponse"></a>*TransactionsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| rawData | Array of Object | Loaded transactions array |
| totalCount | Number | Total number of transactions |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| productId | String | Product ID of transactions to load |
| orderBy | String (optional) | Order transactions by property |
| direction | String (optional) | Transactions order direction |

### <a name="TransactionsSearchResponse"></a>*TransactionsSearchResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| rawData | Array of Object | Search transactions array |
| totalCount | Number | Total number of found transactions |
| requestParams | [SearchRequestParams](#SearchRequestParams) | Request parameters object |

### <a name="SearchRequestParams"></a>*SearchRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| productId | String | Product ID of transactions to load |
| orderBy | String (optional) | Order transactions by property |
| direction | String (optional) | Transactions order direction |
| query | String (optional) | Query search parameter |
| bookingDateLessThan | String (optional) | Maximum booking date search parameter |
| bookingDateGreaterThan | String (optional) | Minimum booking date search parameter |
| amountGreaterThan | String (optional) | Minimum amount search parameter |
| amountLessThan | String (optional) | Maximum amount search parameter |
| creditDebitIndicator | String (optional) | Credit or debit search parameter |
| billingStatus | String (optional) | Billing status search parameter |
| category | String (optional) | Transaction category search parameter |
| categories | String (optional) | Transaction categories search parameter |
| fromCheckSerialNumber | String (optional) | Minimum check serial number search parameter |
| toCheckSerialNumber | String (optional) | Maximum check serial number search parameter |

---

## Templates

* *template.ng.html*

---
