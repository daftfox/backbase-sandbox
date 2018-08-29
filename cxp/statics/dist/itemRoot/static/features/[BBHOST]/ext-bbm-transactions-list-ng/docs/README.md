# ext-bbm-transactions-list-ng


Version: **2.34.0**

Transaction list view for the widget-bbm-transactions-ng

NOTE: Starting from version 2.0.0 this extension (ext-bbm-transactions-list-ng)
is only compatible with widget-bbm-transactions-ng (mobile widget).
Please use version 1.x.x if you are using widget-bb-transactions-ng.

## Imports

* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- transactions widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-transactions-list-ng</value>
</property>
```

## Table of Contents
- **ext-bbm-transactions-list-ng**<br/>    <a href="#ext-bbm-transactions-list-nggetSelectedProductToDisplay">getSelectedProductToDisplay(product)</a><br/>    <a href="#ext-bbm-transactions-list-nggetTransactionsToDisplay">getTransactionsToDisplay(transactions)</a><br/>
- **Helpers**<br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_isSearching">#isSearching()</a><br/>    <a href="#Helpers_isAndroid">#isAndroid()</a><br/>    <a href="#Helpers_isIOS">#isIOS()</a><br/>    <a href="#Helpers_showSearchErrorState">#showSearchErrorState()</a><br/>    <a href="#Helpers_showSearchEmptyState">#showSearchEmptyState()</a><br/>    <a href="#Helpers_showSearchLoadingState">#showSearchLoadingState()</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>    <a href="#Helpers_showAccountActions">#showAccountActions()</a><br/>    <a href="#Helpers_showFAB">#showFAB()</a><br/>    <a href="#Helpers_showLoadMoreLoading">#showLoadMoreLoading()</a><br/>    <a href="#Helpers_showSearchLoadMoreLoading">#showSearchLoadMoreLoading()</a><br/>    <a href="#Helpers_showSearchLoadMore">#showSearchLoadMore()</a><br/>    <a href="#Helpers_showLoadMore">#showLoadMore()</a><br/>    <a href="#Helpers_getSignedAmount">#getSignedAmount(transaction)</a><br/>    <a href="#Helpers_initiatePayment">#initiatePayment()</a><br/>    <a href="#Helpers_selectTransaction">#selectTransaction(transaction)</a><br/>    <a href="#Helpers_loadMore">#loadMore()</a><br/>    <a href="#Helpers_searchMore">#searchMore()</a><br/>
- **Type Definitions**<br/>    <a href="#ProductView">ProductView</a><br/>

---

### <a name="ext-bbm-transactions-list-nggetSelectedProductToDisplay"></a>*getSelectedProductToDisplay(product)*

Processes a product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | The original product from the API |

##### Returns

Object - *The processed product*

---

### <a name="ext-bbm-transactions-list-nggetTransactionsToDisplay"></a>*getTransactionsToDisplay(transactions)*

Processes the list of transactions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The original transactions from the API |

##### Returns

Array of Object - *The list of processed transactions*

---

## Helpers

Helpers for ext-bbm-transactions-list-ng.

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for initial loading.

##### Returns

Boolean - **

### <a name="Helpers_isSearching"></a>*#isSearching()*

Checks whether the searching flag on the state is set to true

##### Returns

Boolean - **

### <a name="Helpers_isAndroid"></a>*#isAndroid()*

Checks whether the widget is running on Android.
Returns true, if the platform is Android, false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_isIOS"></a>*#isIOS()*

Checks whether the widget is running on iOS.
Returns true, if the platform is iOS, false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showSearchErrorState"></a>*#showSearchErrorState()*

Determines if the search error view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchEmptyState"></a>*#showSearchEmptyState()*

Determines if the search empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadingState"></a>*#showSearchLoadingState()*

Determines if the search empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState()*

Determines if the empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Determines if the error state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showAccountActions"></a>*#showAccountActions()*

Checks whether actions for a given account should be displayed.
Returns true, if they should be displayed, or `false` otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showFAB"></a>*#showFAB()*

Checks whether FAB (Floating Action Buttons) should be displayed. Returns true
if it should be displayed, false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showLoadMoreLoading"></a>*#showLoadMoreLoading()*

Checks for the load more's loading state.

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMoreLoading"></a>*#showSearchLoadMoreLoading()*

Checks for the load more's loading state.

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMore"></a>*#showSearchLoadMore()*

Checks if the load more message should be visible.

##### Returns

Boolean - **

### <a name="Helpers_showLoadMore"></a>*#showLoadMore()*

Checks if the load more message should be visible.

##### Returns

Boolean - **

### <a name="Helpers_getSignedAmount"></a>*#getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

### <a name="Helpers_initiatePayment"></a>*#initiatePayment()*

Initiates payment from the given product.

### <a name="Helpers_selectTransaction"></a>*#selectTransaction(transaction)*

Sets the currently selected transactions and fires the intent
to show the transaction details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

### <a name="Helpers_loadMore"></a>*#loadMore()*

Loads more transactions

### <a name="Helpers_searchMore"></a>*#searchMore()*

Loads more transactions for the active search query

---

## Intents


## Type Definitions


### <a name="ProductView"></a>*ProductView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| alias | String | The product's alias, suitable for display to users |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| primaryValue | String (optional) | The most important associated value to be displayed |
| secondaryValue | String (optional) | A secondary associated value to be displayed |
| secondaryLabel | String (optional) | A label to describe the secondary value |

---
