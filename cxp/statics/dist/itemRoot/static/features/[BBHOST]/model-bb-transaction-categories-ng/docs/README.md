# model-bb-transaction-categories-ng


Version: **1.13.0**

Model for widget-bb-transaction-categories-ng

## Imports

* data-bb-categories-management-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelTransactionCategoriesModuleKey, {
 modelTransactionCategoriesKey
} from 'model-bb-transaction-categories-ng';

angular
  .module('ExampleModule', [
    modelTransactionCategoriesModuleKey,
  ])
  .factory('someFactory', [
    modelTransactionCategoriesKey,
    // into
    function someFactory(transactionCategoriesModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **transactionCategoriesModel**<br/>    <a href="#transactionCategoriesModel_getCategoriesLevel">#getCategoriesLevel()</a><br/>    <a href="#transactionCategoriesModel_loadCategories">#loadCategories(params)</a><br/>    <a href="#transactionCategoriesModel_getCategories">#getCategories(params)</a><br/>

---

## bbStorageKeys

bbStorage keys enum

---

## transactionCategoriesModel


### <a name="transactionCategoriesModel_getCategoriesLevel"></a>*#getCategoriesLevel()*

Get current categories' level

##### Returns

Promise of String - *A Promise with current categories' level.*

### <a name="transactionCategoriesModel_loadCategories"></a>*#loadCategories(params)*

Load the availabe categories.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Get request parameters |

##### Returns

Promise of Object - *A Promise with all of the availabe categories.*

### <a name="transactionCategoriesModel_getCategories"></a>*#getCategories(params)*

Load the availabe categories from server or storage.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Get request parameters |

##### Returns

Promise of Object - *A Promise with all of the availabe categories.*
