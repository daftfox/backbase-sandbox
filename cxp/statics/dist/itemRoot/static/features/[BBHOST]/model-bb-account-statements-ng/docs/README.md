# model-bb-account-statements-ng


Version: **2.2.0**

Model for widget-bb-account-statements-ng

## Imports

* data-bb-account-statements-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelAccountStatementsModuleKey, {
  modelAccountStatementsKey
} from 'model-bb-account-statements-ng';

angular
  .module('ExampleModule', [
    modelAccountStatementsModuleKey,
  ])
  .factory('someFactory', [
    modelAccountStatementsKey,
    // into
    function someFactory(accountStatementsModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **AccountStatementsModel**<br/>    <a href="#AccountStatementsModel_loadAccounts">#loadAccounts(params)</a><br/>    <a href="#AccountStatementsModel_getSelectedAccountId">#getSelectedAccountId()</a><br/>    <a href="#AccountStatementsModel_load">#load(params)</a><br/>    <a href="#AccountStatementsModel_getStatementUrl">#getStatementUrl(uid)</a><br/>    <a href="#AccountStatementsModel_getCategories">#getCategories()</a><br/>
- **Type Definitions**<br/>    <a href="#AccountStatements">AccountStatements</a><br/>    <a href="#Accounts">Accounts</a><br/>

---

## AccountStatementsModel

Model factory for widget-bb-account-statements-ng

### <a name="AccountStatementsModel_loadAccounts"></a>*#loadAccounts(params)*

Retrieves list of accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [Accounts](#Accounts), [ModelError](#ModelError) - *A Promise resolving to object with List of Accounts.*

### <a name="AccountStatementsModel_getSelectedAccountId"></a>*#getSelectedAccountId()*

Retrieves selected account id.

##### Returns

Promise of String, [ModelError](#ModelError) - *A Promise resolving selected account ID.*

### <a name="AccountStatementsModel_load"></a>*#load(params)*

Gets the list of account statements.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [AccountStatements](#AccountStatements), [ModelError](#ModelError) - *A Promise resolving to object with the list of account statements.*

### <a name="AccountStatementsModel_getStatementUrl"></a>*#getStatementUrl(uid)*

Retrieves the account statement download record url.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uid | String | The uid of the statement to get the download record url |

##### Returns

String - **

### <a name="AccountStatementsModel_getCategories"></a>*#getCategories()*

get all statements categories.

##### Returns

Promise of [Categories](#Categories), [ModelError](#ModelError) - **

## Type Definitions


### <a name="AccountStatements"></a>*AccountStatements*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [AccountStatementsData.AccountStatement](data-bb-account-statements-ng.html#AccountStatementsData.AccountStatement) | array of Account statements |
| totalCount | Number (optional) | total count of account statements if needed |

### <a name="Accounts"></a>*Accounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [ProductSummaryData.ProductsummaryItem](data-bb-product-summary-ng.html#ProductSummaryData.ProductsummaryItem) | array of Accountss |
| totalCount | Number (optional) | total count of account statements if needed |

---
