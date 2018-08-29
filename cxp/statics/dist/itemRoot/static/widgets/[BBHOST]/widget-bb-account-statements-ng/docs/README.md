# widget-bb-account-statements-ng


Version: **2.2.0**

Account statements widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-account-statements-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-account-statements-ng**<br/>    <a href="#widget-bb-account-statements-ngDEFAULT_PAGE_SIZE">DEFAULT_PAGE_SIZE</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_MAX_NAV_PAGES">DEFAULT_MAX_NAV_PAGES</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_DISMISS_MESSAGE_TIME">DEFAULT_DISMISS_MESSAGE_TIME</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_MULTI_CATEGORY">DEFAULT_MULTI_CATEGORY</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_SHOW_CATEGORY">DEFAULT_SHOW_CATEGORY</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_SHOW_DESCRIPTION">DEFAULT_SHOW_DESCRIPTION</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_MULTISELECT">DEFAULT_MULTISELECT</a><br/>    <a href="#widget-bb-account-statements-ngDEFAULT_RELATIVE_DATE">DEFAULT_RELATIVE_DATE</a><br/>
- **AccountStatementsController**<br/>    <a href="#AccountStatementsController_state">#state</a><br/>    <a href="#AccountStatementsController_loadCategories">#loadCategories(params)</a><br/>    <a href="#AccountStatementsController_updateAccounts">#updateAccounts(options)</a><br/>    <a href="#AccountStatementsController_onPageChange">#onPageChange(params)</a><br/>    <a href="#AccountStatementsController_onSort">#onSort(orderBy, direction)</a><br/>    <a href="#AccountStatementsController_toggleStatementCheckInOut">#toggleStatementCheckInOut(stm)</a><br/>    <a href="#AccountStatementsController_toggleSelectAll">#toggleSelectAll()</a><br/>    <a href="#AccountStatementsController_onFilter">#onFilter(params)</a><br/>    <a href="#AccountStatementsController_onAccountSelect">#onAccountSelect()</a><br/>    <a href="#AccountStatementsController_getDownloadUrl">#getDownloadUrl(uid)</a><br/>    <a href="#AccountStatementsController_$onInit">#$onInit()</a><br/>
- **DefaultHooks**<br/>    <a href="#DefaultHooks_processAccountStatements">#processAccountStatements(accountStatements)</a><br/>    <a href="#DefaultHooks_processAccounts">#processAccounts(accounts)</a><br/>    <a href="#DefaultHooks_processSelectedAccount">#processSelectedAccount(account)</a><br/>    <a href="#DefaultHooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#DefaultHooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>
- **Type Definitions**<br/>    <a href="#ErrorKeys">ErrorKeys</a><br/>    <a href="#MessageKey">MessageKey</a><br/>    <a href="#Event">Event</a><br/>    <a href="#Preference">Preference</a><br/>    <a href="#loadResponce">loadResponce</a><br/>    <a href="#loadAccountsResponce">loadAccountsResponce</a><br/>

---
### <a name="widget-bb-account-statements-ngDEFAULT_PAGE_SIZE"></a>*DEFAULT_PAGE_SIZE*

Defines the default pageSize for the statements page
as defined in the widget model.xml

**Type:** *Number*


---
### <a name="widget-bb-account-statements-ngDEFAULT_MAX_NAV_PAGES"></a>*DEFAULT_MAX_NAV_PAGES*

Defines the default maxNavPages for the statements page
as defined in the widget model.xml

**Type:** *[int](#int)*


---
### <a name="widget-bb-account-statements-ngDEFAULT_DISMISS_MESSAGE_TIME"></a>*DEFAULT_DISMISS_MESSAGE_TIME*

Defines the default dismissMessageTime for the statements widget
as defined in the widget model.xml

**Type:** *[int](#int)*


---
### <a name="widget-bb-account-statements-ngDEFAULT_MULTI_CATEGORY"></a>*DEFAULT_MULTI_CATEGORY*

Defines the category filter will be multiple or single selection

**Type:** *Boolean*


---
### <a name="widget-bb-account-statements-ngDEFAULT_SHOW_CATEGORY"></a>*DEFAULT_SHOW_CATEGORY*

Defines show/hide category filter and column

**Type:** *Boolean*


---
### <a name="widget-bb-account-statements-ngDEFAULT_SHOW_DESCRIPTION"></a>*DEFAULT_SHOW_DESCRIPTION*

Defines show/hide description column

**Type:** *Boolean*


---
### <a name="widget-bb-account-statements-ngDEFAULT_MULTISELECT"></a>*DEFAULT_MULTISELECT*

Defines account statements will be multiple select or not

**Type:** *Boolean*


---
### <a name="widget-bb-account-statements-ngDEFAULT_RELATIVE_DATE"></a>*DEFAULT_RELATIVE_DATE*

Defines the default relative date to be used in the widget filter

**Type:** *Number*


---

## AccountStatementsController

Account statements controller.

| Injector Key |
| :-- |
| *AccountStatementsController* |

### <a name="AccountStatementsController_state"></a>*#state*

When something went wrong, this variable should be filled with
the return of uiError fn

**Type:** *Boolean or Object*


### <a name="AccountStatementsController_loadCategories"></a>*#loadCategories(params)*

Load categories from model.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | The request parameters object |

### <a name="AccountStatementsController_updateAccounts"></a>*#updateAccounts(options)*

Loads accounts depending on options.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object (optional) | Optional object with loading params |

### <a name="AccountStatementsController_onPageChange"></a>*#onPageChange(params)*

Change page of displayed accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | The request parameters object |
| params.currentPage | Number | Current page number |

### <a name="AccountStatementsController_onSort"></a>*#onSort(orderBy, direction)*

Loads sorted list of account statements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

### <a name="AccountStatementsController_toggleStatementCheckInOut"></a>*#toggleStatementCheckInOut(stm)*

Functionality to checkin and checkout the statements in multiselect

| Parameter | Type | Description |
| :-- | :-- | :-- |
| stm | Object |  |

##### Returns

[void](#void) - **

### <a name="AccountStatementsController_toggleSelectAll"></a>*#toggleSelectAll()*

Functionality to select all statements in the list

##### Returns

[void](#void) - **

### <a name="AccountStatementsController_onFilter"></a>*#onFilter(params)*

Filter account statements.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Filter params |

### <a name="AccountStatementsController_onAccountSelect"></a>*#onAccountSelect()*

Handles selection of account

### <a name="AccountStatementsController_getDownloadUrl"></a>*#getDownloadUrl(uid)*

Retrive the download url from the model module.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uid | String | the statement id |

##### Returns

String - *the download url*

### <a name="AccountStatementsController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise of [loadAccountsResponce](#loadAccountsResponce), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with available account statements*

---

## DefaultHooks

Default for widget-bb-account-statements-ng

### <a name="DefaultHooks_processAccountStatements"></a>*#processAccountStatements(accountStatements)*

Hook for processing account statements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accountStatements | Array | Array of account statements to process |

##### Returns

Array - *Processed account statements*

### <a name="DefaultHooks_processAccounts"></a>*#processAccounts(accounts)*

processSelectedAccount default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array | Array of accounts to process |

##### Returns

Array - *Processed account*

### <a name="DefaultHooks_processSelectedAccount"></a>*#processSelectedAccount(account)*

Hook for processing selected account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) | Account to process |

##### Returns

[ProductSummaryData.ProductsummaryItem](data-bb-product-summary-http-ng.html#ProductSummaryData.ProductsummaryItem) - *Processed account*

### <a name="DefaultHooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - *Sortable column*

### <a name="DefaultHooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

## Type Definitions


### <a name="ErrorKeys"></a>*ErrorKeys*

Custom error keys for widget static error messages

**Type:** *Enumeration*


### <a name="MessageKey"></a>*MessageKey*

Widget static messages for the template

**Type:** *Enumeration*


### <a name="Event"></a>*Event*

Widget events enum

**Type:** *Enumeration*


### <a name="Preference"></a>*Preference*

Widget preferences enum


**Type:** *Enumeration*


### <a name="loadResponce"></a>*loadResponce*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [AccountStatementsData.AccountStatement](data-bb-account-statements-ng.html#AccountStatementsData.AccountStatement) | array of Account statements |
| totalCount | Number (optional) | total count of account statements if needed |

### <a name="loadAccountsResponce"></a>*loadAccountsResponce*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-ng.html#ProductSummaryData.ProductsummaryItem) | array of Account statements |
| totalCount | Number (optional) | total count of account statements if needed |

---

## Templates

* *template.ng.html*

---
