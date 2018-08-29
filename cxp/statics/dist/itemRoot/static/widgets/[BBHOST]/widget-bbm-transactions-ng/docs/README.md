# widget-bbm-transactions-ng


Version: **1.33.1**

Mobile Transactions widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-transactions-ng
* vendor-bb-angular

---

## Table of Contents
- **defaultHooks**<br/>    <a href="#defaultHooks_processRequestParams">#processRequestParams(params)</a><br/>    <a href="#defaultHooks_processReloadRequestParams">#processReloadRequestParams(params)</a><br/>    <a href="#defaultHooks_processSearchRequestParams">#processSearchRequestParams(params)</a><br/>
- **TransactionsService**<br/>    <a href="#TransactionsService_loadMoreTransactions">#loadMoreTransactions()</a><br/>    <a href="#TransactionsService_searchMoreTransactions">#searchMoreTransactions()</a><br/>    <a href="#TransactionsService_setSelectedProduct">#setSelectedProduct(product)</a><br/>    <a href="#TransactionsService_setSelectedTransaction">#setSelectedTransaction(transaction)</a><br/>    <a href="#TransactionsService_setSearchQuery">#setSearchQuery()</a><br/>    <a href="#TransactionsService_cancelSearch">#cancelSearch()</a><br/>
- **Events**<br/>    <a href="#cxp.item.loaded">cxp.item.loaded</a><br/>    <a href="#bb.item.loaded">bb.item.loaded</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#RequestParams">RequestParams</a><br/>    <a href="#TransactionsResponse">TransactionsResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>    <a href="#TransactionsSearchResponse">TransactionsSearchResponse</a><br/>    <a href="#SearchRequestParams">SearchRequestParams</a><br/>

---

## TransactionsDetailsController

Transactions widget details controller

| Injector Key |
| :-- |
| *TransactionsDetailsController* |


---

## TransactionsListController

Transactions widget list controller

| Injector Key |
| :-- |
| *TransactionsListController* |


---

## defaultHooks

Default hooks for widget-bbm-transactions-ng

### <a name="defaultHooks_processRequestParams"></a>*#processRequestParams(params)*

Default hook for transactions query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.productId | String (optional) | The product id |
| params.query | String (optional) | The search term used to search for transactions |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processReloadRequestParams"></a>*#processReloadRequestParams(params)*

Default hook for transactions query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.productId | String (optional) | The product id |
| params.query | String (optional) | The search term used to search for transactions |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processSearchRequestParams"></a>*#processSearchRequestParams(params)*

Default hook for transactions search query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.productId | String (optional) | The product id |
| params.query | String (optional) | The search term used to search for transactions |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

---

## TransactionsService

The service encapsulates the core functionality of the Transactions
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-transactions-ng:service* |


### <a name="TransactionsService_loadMoreTransactions"></a>*#loadMoreTransactions()*

Loads more `transactions` for the currently selected product.

### <a name="TransactionsService_searchMoreTransactions"></a>*#searchMoreTransactions()*

Loads more `transactions` that meet the current search query.

### <a name="TransactionsService_setSelectedProduct"></a>*#setSelectedProduct(product)*

Sets the selected product, loads the corresponding `transactions`
and updates the [ViewState](#ViewState) to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | Product to select and load transactions for |

### <a name="TransactionsService_setSelectedTransaction"></a>*#setSelectedTransaction(transaction)*

Sets the selected transaction and updates the [ViewState](#ViewState) to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction to select |

### <a name="TransactionsService_setSearchQuery"></a>*#setSearchQuery()*

Prepares and starts the search on the [ViewState](#ViewState).

### <a name="TransactionsService_cancelSearch"></a>*#cancelSearch()*

Cancels the search and resets the search on the [ViewState](#ViewState).

---

## Events

### <a name="cxp.item.loaded"></a>*cxp.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |
### <a name="bb.item.loaded"></a>*bb.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |

---

## Type Definitions


### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| product | Object |  |
| product.data | Object | Current product (arrangement) object |
| product.error | Object | The last encountered error |
| product.error.message | String | Error message |
| product.loading | Boolean | Indicates if the product is being loaded |
| searching | Boolean | Indicates if transactions search is active at the moment |
| search | Object |  |
| search.data | Array of Object | Collection of searched transactions |
| search.error | Object | The last encountered error |
| search.error.message | String | Error message |
| search.loading | Boolean | Indicates if search transactions are loading at the moment |
| search.requestParams | [RequestParams](#RequestParams) | A set of request params for searching transactions |
| search.totalCount | Number | Total number of search results |
| transaction | Object |  |
| transaction.data | Object | Current transaction object |
| transaction.error | Object | The last encountered error |
| transaction.error.message | String | Error message |
| transaction.loading | Boolean | Indicates if the transaction is being loaded |
| transactions | Object |  |
| transactions.data | Array of Object | Collection of transactions |
| transactions.error | Object | The last encountered error |
| transactions.error.message | String | Error message |
| transactions.loading | Boolean | Indicates if transactions are loading at the moment |
| transactions.requestParams | [RequestParams](#RequestParams) | A set of request params for loading transactions |
| transactions.totalCount | Number | Total number of transactions |

### <a name="RequestParams"></a>*RequestParams*

A set of request params that defines how to load the requested data.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | The current page (0 indexed), null from the start |
| size | Number | The number of transactions in the page |
| query | String (optional) | Query search parameter |

### <a name="TransactionsResponse"></a>*TransactionsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Object | Loaded transactions array |
| totalCount | Number | Total number of transactions |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| productId | String | Product ID of transactions to load |

### <a name="TransactionsSearchResponse"></a>*TransactionsSearchResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Object | Search transactions array |
| totalCount | Number | Total number of found transactions |
| requestParams | [SearchRequestParams](#SearchRequestParams) | Request parameters object |

### <a name="SearchRequestParams"></a>*SearchRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| productId | String | Product ID of transactions to load |
| query | String (optional) | Query search parameter |

---

## Templates

* *template.ng.html*

---
