# model-bb-product-summary-ng


Version: **1.28.0**

Product summary widget model.

## Imports

* data-bb-arrangements-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelProductSummaryModuleKey, {
  modelProductSummaryKey,
} from 'model-bb-product-summary-ng';

angular.module('widget-bb-product-summary-ng', [
  modelProductSummaryModuleKey,
])
.controller('ProductSummaryController', [
  modelProductSummaryKey,
  ...,
])
```

## Table of Contents
- **Exports**<br/>    <a href="#modelProductSummaryKey">modelProductSummaryKey</a><br/>
- **ProductSummaryModel**<br/>    <a href="#ProductSummaryModel_patchArrangement">#patchArrangement(arrangement)</a><br/>    <a href="#ProductSummaryModel_load">#load(forceLoad)</a><br/>    <a href="#ProductSummaryModel_setProductSelected">#setProductSelected(product)</a><br/>    <a href="#ProductSummaryModel_setProductsSelected">#setProductsSelected(products)</a><br/>    <a href="#ProductSummaryModel_getProductSelected">#getProductSelected(getFirstInstead)</a><br/>    <a href="#ProductSummaryModel_getProductsSelected">#getProductsSelected(getDefault)</a><br/>    <a href="#ProductSummaryModel_loadByLegalEntityId">#loadByLegalEntityId(params)</a><br/>    <a href="#ProductSummaryModel_loadContextArrangements">#loadContextArrangements(params)</a><br/>    <a href="#ProductSummaryModel_getProductDetails">#getProductDetails(productId)</a><br/>    <a href="#ProductSummaryModel_getAccountsOverviewPreferences">#getAccountsOverviewPreferences()</a><br/>    <a href="#ProductSummaryModel_getBalanceHistory">#getBalanceHistory(arrangementsId, params)</a><br/>    <a href="#ProductSummaryModel_transformToSeries">#transformToSeries(data)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKinds">ProductKinds</a><br/>    <a href="#ProductKind">ProductKind</a><br/>    <a href="#Products">Products</a><br/>    <a href="#Product">Product</a><br/>    <a href="#TotalBalance">TotalBalance</a><br/>    <a href="#ProductDetails">ProductDetails</a><br/>    <a href="#DebitCard">DebitCard</a><br/>    <a href="#ArrangementsData.ArrangementPatch">ArrangementsData.ArrangementPatch</a><br/>    <a href="#Response">Response</a><br/>    <a href="#ErrorBadRequest">ErrorBadRequest</a><br/>    <a href="#Errors">Errors</a><br/>    <a href="#ErrorsResponseKeys">ErrorsResponseKeys</a><br/>    <a href="#BalanceHistory">BalanceHistory</a><br/>    <a href="#BalanceHistoryItem">BalanceHistoryItem</a><br/>    <a href="#balanceHistory">balanceHistory</a><br/>    <a href="#BalanceHistorySeries">BalanceHistorySeries</a><br/>    <a href="#DataSets">DataSets</a><br/>

## Exports

### <a name="modelProductSummaryKey"></a>*modelProductSummaryKey*

Injector name of the model service

**Type:** *String*


---

## BadRequestError

Additional errors thrown from the model

---

## ProductSummaryModel

Product Summary model service

### <a name="ProductSummaryModel_patchArrangement"></a>*#patchArrangement(arrangement)*

Perform Patch request for arrangement

| Parameter | Type | Description |
| :-- | :-- | :-- |
| arrangement | [ArrangementsData.ArrangementPatch](#ArrangementsData.ArrangementPatch) | Arrangement data to be sent as the request message data. |

##### Returns

Promise of [Response](#Response) - **

### <a name="ProductSummaryModel_load"></a>*#load(forceLoad)*

Load Product Summary data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| forceLoad | Object | True if should always load data from server |

##### Returns

Promise of [ProductKinds](#ProductKinds), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with ProductsKinds and TotalBalance.*

### <a name="ProductSummaryModel_setProductSelected"></a>*#setProductSelected(product)*

Set current selected product

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | [Product](#Product) | A product to select |

### <a name="ProductSummaryModel_setProductsSelected"></a>*#setProductsSelected(products)*

Set currently selected products array

| Parameter | Type | Description |
| :-- | :-- | :-- |
| products | Array of [Product](#Product) | Array of products to select |

### <a name="ProductSummaryModel_getProductSelected"></a>*#getProductSelected(getFirstInstead)*

Temporary. Get current selected product

| Parameter | Type | Description |
| :-- | :-- | :-- |
| getFirstInstead | Boolean (optional) | Get first product if there is no product selected in the storage (default true) |

##### Returns

Promise of [Product](#Product) - *A Promise resolving to Product.*

### <a name="ProductSummaryModel_getProductsSelected"></a>*#getProductsSelected(getDefault)*

Get currently selected products array

| Parameter | Type | Description |
| :-- | :-- | :-- |
| getDefault | Boolean (optional) | Get all products if there are no products selected in the storage (default true) |

##### Returns

Promise of Array of [Product](#Product) - *A Promise resolving to Product array*

### <a name="ProductSummaryModel_loadByLegalEntityId"></a>*#loadByLegalEntityId(params)*

Load some data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | optional configuration object |

##### Returns

Promise of [Products](#Products), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with Accounts by legalEntityId.*

### <a name="ProductSummaryModel_loadContextArrangements"></a>*#loadContextArrangements(params)*

Load arrangements collection for a given context

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | optional configuration object |

##### Returns

Promise of [Products](#Products), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to
  a collection containing products.*

### <a name="ProductSummaryModel_getProductDetails"></a>*#getProductDetails(productId)*

Get all the details of a product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productId | String | Id of the requested product |

##### Returns

Promise of [ProductDetails](#ProductDetails), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with Account details.*

### <a name="ProductSummaryModel_getAccountsOverviewPreferences"></a>*#getAccountsOverviewPreferences()*

Getting accounts preferences from widget

##### Returns

Object - *Preferences object*

### <a name="ProductSummaryModel_getBalanceHistory"></a>*#getBalanceHistory(arrangementsId, params)*

Get Balance history for given arrangements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| arrangementsId | Array of String | Ids of the requested arrangements |
| params | Object (optional) | optional configuration object |

##### Returns

Promise of [BalanceHistory](#BalanceHistory), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise resolving to object with Balance history.*

### <a name="ProductSummaryModel_transformToSeries"></a>*#transformToSeries(data)*

Transforms data per arrangement into format suitable for chart UI components

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BalanceHistory](#BalanceHistory) | Balance History data |

##### Returns

[BalanceHistorySeries](#BalanceHistorySeries) - *Data in format suitable for chart UI components*

## Type Definitions


### <a name="ProductKinds"></a>*ProductKinds*

ProductKind type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| total | [TotalBalance](#TotalBalance) | total balance of products |
| productKinds | Array of [ProductKind](#ProductKind) | array of Products Kinds |

### <a name="ProductKind"></a>*ProductKind*

ProductKind type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | [!string](#!string) | id of the ProductKind (currentAccounts, savingsAccounts, termDeposits, creditCards, debitCards, loans, investmentAccounts) |
| name | [!string](#!string) | name of the ProductKind |
| aggregatedBalance | String | aggregated balance |
| currency | String | currency code |
| products | Array of [Product](#Product) | array of Products |

### <a name="Products"></a>*Products*

ProductKind type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| totalCount | Number | total number of products |
| products | Array of [Product](#Product) | array of Products |

### <a name="Product"></a>*Product*

Product type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | [!string](#!string) | id of the Product |
| name | [!string](#!string) | name of the Product |
| kind | [!string](#!string) | id of the ProductKind |
| alias | String | alias of the Product |
| IBAN | String | International Bank Account Number |
| BBAN | String | Basic Bank Account Number |
| currency | String | currency code |
| PANSuffix | String | Primary Account Number Suffix |
| bookedBalance | String | booked balance |
| availableBalance | String | available balance |
| creditLimit | String | credit limit |
| currentInvestmentValue | String | current investment value |
| principalAmount | String | principal amount |
| accruedInterest | String | accrued interest |

### <a name="TotalBalance"></a>*TotalBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| aggregatedBalance | String | aggregated balance |
| currency | String | currency code |

### <a name="ProductDetails"></a>*ProductDetails*

Product details definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalArrangementId | [!string](#!string) | id of the external arrangement |
| externalLegalEntityId | [!string](#!string) | id of the external legal entity |
| externalProductId | [!string](#!string) | id of the external product |
| name | String | name of the account |
| alias | String | alias of the account |
| bookedBalance | Number | booked balance |
| availableBalance | Number | available balance |
| creditLimit | Number | credit limit |
| IBAN | String | International Bank Account Number |
| BBAN | String | Basic Bank Account Number |
| currency | String | 3 characteres currency code |
| externalTransferAllowed | Boolean | is external transfer allowed |
| urgentTransferAllowed | Boolean | is urgent transfer allowed |
| accruedInterest | String | accrued interest |
| number | String | number |
| principalAmount | Number | principal amount |
| currentInvestmentValue | Number | current investment value |
| legalEntityId | [!string](#!string) | id of the legal entity |
| productId | [!string](#!string) | id of the product |
| productNumber | String | number of the product |
| accountOpeningDate | String | date when account was opened |
| accountInterestRate | Number | account interest rate |
| valueDateBalance | Number | value date balance |
| overdraftAmount | Number | overdraft amount |
| overdraftInterestRate | Number | overdraft interest rate |
| overdraftExpiryDate | Number | overdraft expiry date |
| overdraftLimit | Number | overdraft limit |
| bankBranchCode | String | bank branch code |
| startDate | Date | start date |
| term | String | term |
| maturityDate | Date | maturity date |
| maturityAmount | Number | maturity amount |
| autoRenevalIndicator | Boolean | is auto renewal enabled |
| interestPaymentFrequency | String | interest payment frequency |
| interestSettlementAccount | String | interest settlement account |
| outstandingPrincipal | Number | outstanding principal |
| monthlyInstalmentAmount | Number | monthly instalment amount |
| minimumRequiredBalance | Number | minimum required balance |
| creditCardAccountNumber | String | credit card account number |
| validThru | Date | credit card validity through date |
| applicableInterestRate | Number | applicable interest rate |
| remainingCredit | Number | remaining credit |
| outstandingPayment | Number | outstanding payment |
| minimunPayment | Number | minimum payment |
| minimunPaymentDueDate | Date | minimum payment due date |
| totalInvestmentValue | Number | total investment value |
| debitCard | Array of [DebitCard](#DebitCard) | debit card collection |

### <a name="DebitCard"></a>*DebitCard*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| number | String | debit card number |
| expiryDate | Date | debit card expiry date |

### <a name="ArrangementsData.ArrangementPatch"></a>*ArrangementsData.ArrangementPatch*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification of arrangement |
| alias | String (optional) | User specific naming for an arrangement |
| visible | Boolean (optional) | User specific visibility for an arrangement |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

### <a name="ErrorBadRequest"></a>*ErrorBadRequest*

Error desctiption for bad request status 400

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Message description for bad request |
| errors | Array of [Errors](#Errors) | List of errors |

### <a name="Errors"></a>*Errors*

Errors type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | error message discription |
| key | String | error key |

### <a name="ErrorsResponseKeys"></a>*ErrorsResponseKeys*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| ERR_ACCOUNT_ARRANGEMENT_NOT_EXIST | String | error key when arrangement does not exist |
| ERR_ACCOUNT_ARRANGEMENT_NO_PRIVILEGES | String | error key when no privileges were found for arrangement |
| ERR_ACCOUNT_ARRANGEMENT_NOT_ENTITLED_TO_SEE | String | error key when not entitled to see arrangement |
| ERR_ACCOUNT_PRODUCT_NOT_EXIST | String | error key when Product does not exist |
| ERR_ACCOUNT_PRODUCT_UPDATE_SIZE | String | error key when size must be in allowed range |
| ERR_ARRANGEMENT_NOT_FOUND | String | error key when arrangement not found |
| ERR_ARRANGEMENT_NOT_EXIST_PRODUCT_KIND_NAME | String | error key when given product kind name does not exist |
| ERR_PRODUCT_SUMMARY_LEGAL_ENTITY_NOT_ALLOWED | String | error key when not allowed to list arrangements for this legal entity id |
| ERR_PRODUCT_SUMMARY_REQUEST_SIZE | String | error key when invalid paging size velue must be greater than or equal to 1 |
| ERR_PRODUCT_SUMMARY_REQUEST_FROM | String | error key when invalid paging from value must be greater than or equal to 0 |
| ERR_PRODUCT_SUMMARY_REQUEST_ORDER_BY | String | error key when invalid sorting order by value must match name |
| ERR_PRODUCT_SUMMARY_REQUEST_DIRECTION | String | error key when invalid sorting direction by value must be in must match asc|desc |
| ERR_BALANCE_HISTORY_ARRANGEMENT_IDS_ARE_EMPTY | String | error key when request object arrangements ids are empty for balance history |
| ERR_BALANCE_HISTORY_INVALID_COMBO_OF_RANGE_PERIOD | String | error key when request object for balance history has invalid combination of range/period |
| ERR_BALANCE_HISTORY_INVALID_DATE_FROM_TO_RANGE_PERIOD | String | error key when request object has invalid combination of from and to date |
| ERR_BALANCE_HISTORY_INVALID_FROM_DATE | String | error key when request object date is less than allowed years from now |

### <a name="BalanceHistory"></a>*BalanceHistory*

Balance History object
Arrangements with balace history

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| items | Array of [BalanceHistoryItem](#BalanceHistoryItem) | List of balance history items for given Arrangement id's |

### <a name="BalanceHistoryItem"></a>*BalanceHistoryItem*

Arrangement balance history
balance history object for given Arrangement id's

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String | Arrangement Id |
| balanceHistory | Array of [balanceHistory](#balanceHistory) | balance history data for arrangement id |

### <a name="balanceHistory"></a>*balanceHistory*

Balance History

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| dateFrom | String | date from |
| dateTo | String | date to |
| valuePtc | String | balance history value |
| value | Object | balance history values that holds currency and balance value |
| currency | String | currency for balance history (yAxes) |
| balance | String | balance value (xAxes) |

### <a name="BalanceHistorySeries"></a>*BalanceHistorySeries*

BalanceHistorySeries Data in format suitable for chart UI components

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String | Arrangement Id for mapping balance history |
| labels | Array of Number | label data for x-axis |
| datasets | Array of [DataSets](#DataSets) | label data for x-axis |

### <a name="DataSets"></a>*DataSets*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of String | Data that is shown on axis |

---
