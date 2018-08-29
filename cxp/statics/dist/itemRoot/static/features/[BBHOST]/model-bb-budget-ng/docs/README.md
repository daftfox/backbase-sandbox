# model-bb-budget-ng


Version: **2.1.0**

Budget widget model

## Imports

* data-bb-budgeting-http-ng
* data-bb-categories-management-http-ng
* data-bb-transactions-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelBudgetModuleKey, { modelBudgetKey } from 'model-bb-budget-ng';
```

## Table of Contents
- **budgetModel**<br/>    <a href="#budgetModel_getBudgetSchema">#getBudgetSchema()</a><br/>    <a href="#budgetModel_getBudgets">#getBudgets(params)</a><br/>    <a href="#budgetModel_createBudget">#createBudget(budget)</a><br/>    <a href="#budgetModel_updateBudget">#updateBudget(budgetId, budget)</a><br/>    <a href="#budgetModel_deleteBudget">#deleteBudget(budgetId, budget)</a><br/>    <a href="#budgetModel_getCategories">#getCategories()</a><br/>    <a href="#budgetModel_getSpending">#getSpending(params)</a><br/>
- **Type Definitions**<br/>    <a href="#BudgetingResponse">BudgetingResponse</a><br/>    <a href="#BudgetingItem">BudgetingItem</a><br/>    <a href="#BudgetingSchema">BudgetingSchema</a><br/>

---

## budgetModel


### <a name="budgetModel_getBudgetSchema"></a>*#getBudgetSchema()*

Gets the budgeting item schema from the data (RAML)

##### Returns

[BudgetingSchema](#BudgetingSchema) - **

### <a name="budgetModel_getBudgets"></a>*#getBudgets(params)*

Gets the list of budgets

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters to be passed. |

##### Returns

Promise of [BudgetingResponse](#BudgetingResponse) - *A Promise with an array of budgets*

### <a name="budgetModel_createBudget"></a>*#createBudget(budget)*

Creates a new budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budget | Object | Budget data |

##### Returns

Promise - *A Promise with response data*

### <a name="budgetModel_updateBudget"></a>*#updateBudget(budgetId, budget)*

Updates an existing budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | Budget id |
| budget | Object | budget object |

##### Returns

Promise - *A Promise with response data*

### <a name="budgetModel_deleteBudget"></a>*#deleteBudget(budgetId, budget)*

Deletes a budget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| budgetId | String | Budget id |
| budget | Object | Budget data |

##### Returns

Promise - *A Promise with response data*

### <a name="budgetModel_getCategories"></a>*#getCategories()*

Load the availabe categories from server or storage.

##### Returns

Promise of Object - *A Promise with all of the availabe categories.*

### <a name="budgetModel_getSpending"></a>*#getSpending(params)*

Load spending analysis data by category

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters |

##### Returns

Promise of [AnalysisCategoryData](model-bb-income-spending-analysis-category-ng.html#AnalysisCategoryData), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with spending or error data*

---

## bbStorageKeys

bbStorage keys enum

## Type Definitions


### <a name="BudgetingResponse"></a>*BudgetingResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [BudgetingItem](#BudgetingItem) |  |

### <a name="BudgetingItem"></a>*BudgetingItem*


*Extends*: [BudgetingData](data-bb-budgeting-http-ng.html#BudgetingData)

**Type:** *Object*


### <a name="BudgetingSchema"></a>*BudgetingSchema*


*Extends*: [schemas](data-bb-budgeting-http-ng.html#schemas)

**Type:** *Object*


---
