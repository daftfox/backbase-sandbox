# model-bb-saving-goals-ng


Version: **1.6.0**

Saving goals widget model

## Imports

* data-bb-product-summary-http-ng
* data-bb-saving-goals-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelSavingGoalsModuleKey, { modelSavingGoalsKey } from 'model-bb-saving-goals-ng';
```

## Table of Contents
- **savingGoalsModel**<br/>    <a href="#savingGoalsModel_getProducts">#getProducts()</a><br/>    <a href="#savingGoalsModel_getProductsArray">#getProductsArray(keepEmptyProducts)</a><br/>    <a href="#savingGoalsModel_getSelectedProduct">#getSelectedProduct()</a><br/>    <a href="#savingGoalsModel_getSchema">#getSchema()</a><br/>    <a href="#savingGoalsModel_getSavingGoals">#getSavingGoals(params)</a><br/>    <a href="#savingGoalsModel_createSavingGoal">#createSavingGoal(item)</a><br/>    <a href="#savingGoalsModel_updateSavingGoal">#updateSavingGoal(savingGoalId, savingGoal)</a><br/>    <a href="#savingGoalsModel_deleteSavingGoal">#deleteSavingGoal(savingGoalId, savingGoal)</a><br/>
- **Type Definitions**<br/>    <a href="#SavingGoalsResponse">SavingGoalsResponse</a><br/>    <a href="#SavingGoalItem">SavingGoalItem</a><br/>    <a href="#SavingGoalsSchema">SavingGoalsSchema</a><br/>

---

## BbStorageKeys

bbStorage keys enum

---

## savingGoalsModel


### <a name="savingGoalsModel_getProducts"></a>*#getProducts()*

Get products either from storage or from the service

##### Returns

Promise of [ProductKinds](model-bb-product-summary-ng.html#ProductKinds), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with ProductsKinds and TotalBalance.*

### <a name="savingGoalsModel_getProductsArray"></a>*#getProductsArray(keepEmptyProducts)*

Get products.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| keepEmptyProducts | Boolean | defines if empty product kinds should be passed. |

##### Returns

Promise of Array of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to array with Products.*

### <a name="savingGoalsModel_getSelectedProduct"></a>*#getSelectedProduct()*

Get current selected product.

##### Returns

Promise of [Product](model-bb-product-summary-ng.html#Product), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to a selected product object.*

### <a name="savingGoalsModel_getSchema"></a>*#getSchema()*

Gets the saving goals item schema from the data (RAML)

##### Returns

[SavingGoalsSchema](#SavingGoalsSchema) - **

### <a name="savingGoalsModel_getSavingGoals"></a>*#getSavingGoals(params)*

Gets the list of saving goals

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters to be passed. |

##### Returns

Promise of [SavingGoalsResponse](#SavingGoalsResponse) - *A Promise with an array of saving goals*

### <a name="savingGoalsModel_createSavingGoal"></a>*#createSavingGoal(item)*

Creates a new saving goal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Saving goal data |

##### Returns

Promise - *A Promise with response data*

### <a name="savingGoalsModel_updateSavingGoal"></a>*#updateSavingGoal(savingGoalId, savingGoal)*

Updates an existing saving goal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| savingGoalId | String | Saving goal id |
| savingGoal | Object | Saving goal object |

##### Returns

Promise - *A Promise with response data*

### <a name="savingGoalsModel_deleteSavingGoal"></a>*#deleteSavingGoal(savingGoalId, savingGoal)*

Deletes a saving goal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| savingGoalId | String | Saving goal id |
| savingGoal | Object | Saving goal data |

##### Returns

Promise - *A Promise with response data*

## Type Definitions


### <a name="SavingGoalsResponse"></a>*SavingGoalsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [SavingGoalItem](#SavingGoalItem) |  |

### <a name="SavingGoalItem"></a>*SavingGoalItem*


*Extends*: [savingGoalsData](data-bb-saving-goals-http-ng.html#savingGoalsData)

**Type:** *Object*


### <a name="SavingGoalsSchema"></a>*SavingGoalsSchema*


*Extends*: [schemas](data-bb-saving-goals-http-ng.html#schemas)

**Type:** *Object*


---
