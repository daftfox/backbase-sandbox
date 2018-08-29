# data-bb-product-summary-http-ng


Version: **1.6.3**

A data module for accessing the Product Summary REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import productSummaryDataModuleKey, {
  productSummaryDataKey,
} from 'data-bb-product-summary-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#productSummaryDataKey">productSummaryDataKey</a><br/>
- **ProductSummaryData**<br/>    <a href="#ProductSummaryData_getProductsummary">#getProductsummary(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryDebitaccounts">#getProductsummaryDebitaccounts(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryCreditaccounts">#getProductsummaryCreditaccounts(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryArrangements">#getProductsummaryArrangements(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryConfigurationRecord">#getProductsummaryConfigurationRecord(legalEntityId, params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryContextArrangements">#getProductsummaryContextArrangements(params, headers)</a><br/>    <a href="#ProductSummaryData_getProductsummaryContextArrangementsWithoutBalances">#getProductsummaryContextArrangementsWithoutBalances(params, headers)</a><br/>
- **ProductSummaryDataProvider**<br/>    <a href="#ProductSummaryDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#ProductSummaryDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#ProductSummaryData.AggregatedBalance">ProductSummaryData.AggregatedBalance</a><br/>    <a href="#ProductSummaryData.Productsummary-EXAMPLE">ProductSummaryData.Productsummary-EXAMPLE</a><br/>    <a href="#ProductSummaryData.Productsummary-GET">ProductSummaryData.Productsummary-GET</a><br/>    <a href="#ProductSummaryData.ProductsummaryFlatStructure-GET">ProductSummaryData.ProductsummaryFlatStructure-GET</a><br/>    <a href="#ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET">ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET</a><br/>    <a href="#ProductSummaryData.ProductsummaryItem">ProductSummaryData.ProductsummaryItem</a><br/>    <a href="#ProductSummaryData.ProductsummaryItemNoBalances">ProductSummaryData.ProductsummaryItemNoBalances</a><br/>    <a href="#ProductSummaryData.creditCards">ProductSummaryData.creditCards</a><br/>    <a href="#ProductSummaryData.currentAccounts">ProductSummaryData.currentAccounts</a><br/>    <a href="#ProductSummaryData.debitCards">ProductSummaryData.debitCards</a><br/>    <a href="#ProductSummaryData.investmentAccounts">ProductSummaryData.investmentAccounts</a><br/>    <a href="#ProductSummaryData.loans">ProductSummaryData.loans</a><br/>    <a href="#ProductSummaryData.savingsAccounts">ProductSummaryData.savingsAccounts</a><br/>    <a href="#ProductSummaryData.termDeposits">ProductSummaryData.termDeposits</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="productSummaryDataKey"></a>*productSummaryDataKey*

Angular dependency injection key for the ProductSummaryData service

**Type:** *String*


---

## ProductSummaryData

Public api for data-bb-product-summary-http-ng service

### <a name="ProductSummaryData_getProductsummary"></a>*#getProductsummary(params, headers)*

Retrieve list of products summaries.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummary(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryDebitaccounts"></a>*#getProductsummaryDebitaccounts(params, headers)*

Retrieve a list of accounts when debitAccounts is selected true

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryDebitaccounts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryCreditaccounts"></a>*#getProductsummaryCreditaccounts(params, headers)*

Retrieve a list of accounts when creditAccounts is selected true

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.Productsummary-GET](#ProductSummaryData.Productsummary-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryCreditaccounts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryArrangements"></a>*#getProductsummaryArrangements(params, headers)*

Retrieve list of products summaries, flat structure.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.legalEntityId | String (optional) | legalEntityId. Eg: id9876543210. |
| params.productKindName | String (optional) | Product kind name. Eg: Current Account. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryArrangements(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryConfigurationRecord"></a>*#getProductsummaryConfigurationRecord(legalEntityId, params, headers)*

Retrieve list of products summaries, flat structure.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String |  |
| params | Object (optional) | Map of query parameters. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryConfigurationRecord(legalEntityId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryContextArrangements"></a>*#getProductsummaryContextArrangements(params, headers)*

Get a list of arrangements according to a given business function

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.businessFunction | String | Provide the context for retrieving arrangements. Eg: Product Summary. |
| params.resourceName | String | Provide the resource for retrieving arrangements. Eg: Product Summary. |
| params.privilege | String | Privilege for the arrangements. Eg: view. |
| params.externalTransferAllowed | String (optional) | Privilege for external transfers. Eg: false. |
| params.creditAccount | String (optional) | Type of account. Eg: true. |
| params.debitAccount | String (optional) | Type of account. Eg: true. |
| params.productKindName | String (optional) | Product Kind Name. Eg: Current Account. |
| params.searchTerm | String (optional) | Full text search. Eg: Account X. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructure-GET](#ProductSummaryData.ProductsummaryFlatStructure-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryContextArrangements(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="ProductSummaryData_getProductsummaryContextArrangementsWithoutBalances"></a>*#getProductsummaryContextArrangementsWithoutBalances(params, headers)*

Get a list of arrangements according to a given business function

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.businessFunction | String | Provide the context for retrieving arrangements. Eg: Product Summary. |
| params.resourceName | String | Provide the resource for retrieving arrangements. Eg: Product Summary. |
| params.privilege | String | Privilege for the arrangements. Eg: view. |
| params.externalTransferAllowed | String (optional) | Privilege for external transfers. Eg: false. |
| params.creditAccount | String (optional) | Type of account. Eg: true. |
| params.debitAccount | String (optional) | Type of account. Eg: true. |
| params.productKindName | String (optional) | Product Kind Name. Eg: Current Account. |
| params.searchTerm | String (optional) | Full text search. Eg: Account X. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: "name", "externalArrangementId", "externalLegalEntityId", "externalProductId", "alias", "bookedBalance", "availableBalance", "creditLimit", "IBAN", "BBAN", "BIC", "currency", "externalTransferAllowed", "urgentTransferAllowed", "accruedInterest", "Number", "principalAmount", "currentInvestmentValue", "legalEntityId", "productId", "productNumber", "accountOpeningDate", "accountInterestRate", "valueDateBalance", "creditLimitUsage", "creditLimitInterestRate", "creditLimitExpiryDate", "debitCards", "startDate", "termUnit", "termNumber", "maturityDate", "maturityAmount", "autoRenewalIndicator", "interestPaymentFrequencyUnit", "interestPaymentFrequencyNumber", "interestSettlementAccount", "outstandingPrincipalAmount", "monthlyInstalmentAmount", "amountInArrear", "minimumRequiredBalance", "creditCardAccountNumber", "validThru", "applicableInterestRate", "remainingCredit", "outstandingPayment", "minimumPayment", "minimumPaymentDueDate", "totalInvestmentValue", "accountHolderAddressLine1", "accountHolderAddressLine2", "accountHolderAddressLine3", "accountHolderAddressLine4", "accountHolderStreetName", "postCode", "town", "countrySubDivision", "accountHolderCountry", "creditAccount", "debitAccount","productKindName","productTypeName". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET](#ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET) on success*

## Example

```javascript
productSummaryData
 .getProductsummaryContextArrangementsWithoutBalances(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

---

## ProductSummaryDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-product-summary-http-ng:productSummaryDataProvider* |


### <a name="ProductSummaryDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="ProductSummaryDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-product-summary-http-ng:productSummaryDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-product-summary-http-ng:productSummaryDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="ProductSummaryData.AggregatedBalance"></a>*ProductSummaryData.AggregatedBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currency | String (optional) |  |
| value | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.Productsummary-EXAMPLE"></a>*ProductSummaryData.Productsummary-EXAMPLE*


**Type:** *[*](#*)*


### <a name="ProductSummaryData.Productsummary-GET"></a>*ProductSummaryData.Productsummary-GET*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| currentAccounts | [ProductSummaryData.currentAccounts](#ProductSummaryData.currentAccounts) (optional) |  |
| savingsAccounts | [ProductSummaryData.savingsAccounts](#ProductSummaryData.savingsAccounts) (optional) |  |
| termDeposits | [ProductSummaryData.termDeposits](#ProductSummaryData.termDeposits) (optional) |  |
| loans | [ProductSummaryData.loans](#ProductSummaryData.loans) (optional) |  |
| creditCards | [ProductSummaryData.creditCards](#ProductSummaryData.creditCards) (optional) |  |
| debitCards | [ProductSummaryData.debitCards](#ProductSummaryData.debitCards) (optional) |  |
| investmentAccounts | [ProductSummaryData.investmentAccounts](#ProductSummaryData.investmentAccounts) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.ProductsummaryFlatStructure-GET"></a>*ProductSummaryData.ProductsummaryFlatStructure-GET*


**Type:** *Array of [ProductSummaryData.ProductsummaryItem](#ProductSummaryData.ProductsummaryItem)*


### <a name="ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET"></a>*ProductSummaryData.ProductsummaryFlatStructureNoBalances-GET*


**Type:** *Array of [ProductSummaryData.ProductsummaryItemNoBalances](#ProductSummaryData.ProductsummaryItemNoBalances)*


### <a name="ProductSummaryData.ProductsummaryItem"></a>*ProductSummaryData.ProductsummaryItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | A unique identifier for the Arrangement object that is generated and used Internally in DBS. |
| externalArrangementId | String | A unique external identifier for the arrangement |
| externalLegalEntityId | String | A unique identifier for the legal entity for which the arrangement is assigned to. |
| externalProductId | String | A unique identifier for the product that the arrangement applies to |
| name | String (optional) | The name that can be assigned by the bank to label a arrangement. |
| alias | String (optional) | The name that can be assigned by the customer to label the arrangement. |
| bookedBalance | Number (optional) | Amount of money available before any adjustments have been made for deposits in transit, checks that have not yet been cleared, reserve requirements and interest received. |
| availableBalance | Number (optional) | The amount that is available for transactions. |
| creditLimit | Number (optional) | The maximum amount of credit that the financial institution will extend to the account holder for this arrangement. |
| IBAN | String (optional) | Specifying the IBAN of the account. |
| BBAN | String (optional) | Specifying the BBAN of the account. |
| currency | String (optional) | The currency qualifies the amounts specified above. |
| externalTransferAllowed | Boolean (optional) | Defines if transfer to another party is allowed. |
| urgentTransferAllowed | Boolean (optional) | Defines if urgent transfer is allowed. |
| accruedInterest | Number (optional) | The interest that is earned (credit interest) or due (debit interest) but not settled yet. |
| number | String (optional) | Last 4 digits of a Payment card. |
| principalAmount | Number (optional) | The amount that was (originally) contracted for the respective product. This is mainly used in the context of loans and deposits. |
| currentInvestmentValue | Number (optional) | The total current value of all the securities kept in the account. |
| legalEntityId | String (optional) | Reference to the legal entity that is the owner of the arrangement. |
| productId | String (optional) | Reference to the product of which the arrangement is an instantiation. |
| productNumber | String (optional) | The number identifying the contract. |
| productKindName | String (optional) | The label/name that is used for the respective product kind |
| productTypeName | String (optional) | The label/name that is used to label a specific product type |
| BIC | String (optional) | Bank Identifier Code - international bank code that identifies particular banks worldwide |
| bankBranchCode | String (optional) | (This is to accomodate additional country specific fields like Sort Code in UK) |
| visible | Boolean (optional) | indicator whether to show or hide the arrangement on the widget |
| accountOpeningDate | String (optional) | The date of activation of the account in the bank's system. |
| accountInterestRate | Number (optional) | The annualized cost of credit or debt-capital computed as the percentage ratio of interest to the principal. |
| valueDateBalance | Number (optional) | The balance of the account on a specific date that needs to be used for the calculation of interest. NB! If no date is specified (like for the book date balance) the current date can be assumed. |
| creditLimitUsage | Number (optional) | Monetary amount of the used overdraft. |
| creditLimitInterestRate | Number (optional) | Overdraft Interest is an interest applied to the account for any time throughout the month when the account is overdrawn. |
| creditLimitExpiryDate | String (optional) | The date after which overdraft will no longer be available to the account (renewed automatically or cancelled). |
| startDate | String (optional) |  |
| termUnit | String (optional) | The period of time and/or the interest rate arranged between Bank and customer. |
| termNumber | Number (optional) | The number of times interest rate is paid on the settlement account. |
| interestPaymentFrequencyUnit | String (optional) | Number of times per year when the accumulated interest is settled to the account on a regular basis. The frequency could be yearly, half-yearly, quarterly, monthly, weekly, daily (or not at all, until maturity). |
| interestPaymentFrequencyNumber | Number (optional) |  |
| maturityDate | String (optional) | End term of a holding period. |
| maturityAmount | Number (optional) | Amount payable at the end of a holding period of a product (maturity date). For deposit all of the interest is usualy paid at maturity date (IF the term is shorter then one year). |
| autoRenewalIndicator | Boolean (optional) | Indicates whether or not an arrangement is to be continued after maturity automatically. Usually the product is renewed using the same principal and term unless renegotiation has taken place prior to expiration. |
| interestSettlementAccount | String (optional) | Account that provides quick access to accumulated cash to facilitate daily settlements with other businesses. |
| outstandingPrincipalAmount | Number (optional) | This IS the value date balance of the arrangement. |
| monthlyInstalmentAmount | Number (optional) | A fixed payment amount paid by a borrower to the bank at a specified date each calendar month. |
| amountInArrear | Number (optional) | The part of a debt that is overdue after missing one or more required payments. The amount of the arrears is the amount accrued from the date on which the first missed payment was due. |
| minimumRequiredBalance | Number (optional) | Minimum amount that a customer must have in an account in order to receive some sort of service, such as keeping the account open or receive interest. |
| creditCardAccountNumber | String (optional) | The number of the account the credit card transactions settle on (so actually the reference to the settlement account of the card)? |
| validThru | String (optional) | Expiration date of a credit card, after which is no longer valid. |
| applicableInterestRate | Number (optional) | The interest rate or rates which would be used for a particular arrangement. |
| remainingCredit | Number (optional) |  |
| outstandingPayment | Number (optional) |  |
| minimumPayment | Number (optional) | The minimum payment set a percentage of balance, or a fixed cash amount. |
| minimumPaymentDueDate | String (optional) | Minimum Payment Due Date shown on your monthly statement to remain in good standing. |
| totalInvestmentValue | Number (optional) |  |
| debitCards | Array (optional) of [DebitCardItem](#DebitCardItem) |  |
| accountHolderAddressLine1 | String (optional) | Address of the Payer/Payee - Alternate address line for the account. |
| accountHolderAddressLine2 | String (optional) | Address of the Payer/Payee - Alternate address line for the account. |
| accountHolderAddressLine3 | String (optional) | Deprecated. In future will be replace with accountHolderStreetName |
| accountHolderAddressLine4 | String (optional) | Deprecated. In future will be replace with town |
| accountHolderStreetName | String (optional) | Street name of the Payer/Payee - Alternate street name for the account. |
| town | String (optional) | Town of the Payer/Payee - Alternate town for the account. |
| postCode | String (optional) |  |
| countrySubDivision | String (optional) |  |
| accountHolderName | String (optional) |  |
| accountHolderCountry | String (optional) | ISO Country code 2 chars |
| creditAccount | Boolean (optional) | Indicator whether or not the arrangement can be used in payment orders as credit account. |
| debitAccount | Boolean (optional) | Indicator whether or not the arrangement can be used in payment orders as debit account. |
| lastUpdateDate | String (optional) | Last date of parameter update for the arrangement. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.ProductsummaryItemNoBalances"></a>*ProductSummaryData.ProductsummaryItemNoBalances*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | A unique identifier for the Arrangement object that is generated and used Internally in DBS. |
| externalArrangementId | String | A unique external identifier for the arrangement |
| externalLegalEntityId | String | A unique identifier for the legal entity for which the arrangement is assigned to. |
| externalProductId | String | A unique identifier for the product that the arrangement applies to |
| name | String (optional) | The name that can be assigned by the bank to label a arrangement. |
| alias | String (optional) | The name that can be assigned by the customer to label the arrangement. |
| creditLimit | Number (optional) | The maximum amount of credit that the financial institution will extend to the account holder for this arrangement. |
| IBAN | String (optional) | Specifying the IBAN of the account. |
| BBAN | String (optional) | Specifying the BBAN of the account. |
| currency | String (optional) | The currency qualifies the amounts specified above. |
| externalTransferAllowed | Boolean (optional) | Defines if transfer to another party is allowed. |
| urgentTransferAllowed | Boolean (optional) | Defines if urgent transfer is allowed. |
| accruedInterest | Number (optional) | The interest that is earned (credit interest) or due (debit interest) but not settled yet. |
| number | String (optional) | Last 4 digits of a Payment card. |
| principalAmount | Number (optional) | The amount that was (originally) contracted for the respective product. This is mainly used in the context of loans and deposits. |
| currentInvestmentValue | Number (optional) | The total current value of all the securities kept in the account. |
| legalEntityId | String (optional) | Reference to the legal entity that is the owner of the arrangement. |
| productId | String (optional) | Reference to the product of which the arrangement is an instantiation. |
| productNumber | String (optional) | The number identifying the contract. |
| productKindName | String (optional) | The label/name that is used for the respective product kind |
| productTypeName | String (optional) | The label/name that is used to label a specific product type |
| BIC | String (optional) | Bank Identifier Code - international bank code that identifies particular banks worldwide |
| bankBranchCode | String (optional) | (This is to accomodate additional country specific fields like Sort Code in UK) |
| visible | Boolean (optional) | indicator whether to show or hide the arrangement on the widget |
| accountOpeningDate | String (optional) | The date of activation of the account in the bank's system. |
| accountInterestRate | Number (optional) | The annualized cost of credit or debt-capital computed as the percentage ratio of interest to the principal. |
| valueDateBalance | Number (optional) | The balance of the account on a specific date that needs to be used for the calculation of interest. NB! If no date is specified (like for the book date balance) the current date can be assumed. |
| creditLimitUsage | Number (optional) | Monetary amount of the used overdraft. |
| creditLimitInterestRate | Number (optional) | Overdraft Interest is an interest applied to the account for any time throughout the month when the account is overdrawn. |
| creditLimitExpiryDate | String (optional) | The date after which overdraft will no longer be available to the account (renewed automatically or cancelled). |
| startDate | String (optional) |  |
| termUnit | String (optional) | The period of time and/or the interest rate arranged between Bank and customer. |
| termNumber | Number (optional) | The number of times interest rate is paid on the settlement account. |
| interestPaymentFrequencyUnit | String (optional) | Number of times per year when the accumulated interest is settled to the account on a regular basis. The frequency could be yearly, half-yearly, quarterly, monthly, weekly, daily (or not at all, until maturity). |
| interestPaymentFrequencyNumber | Number (optional) |  |
| maturityDate | String (optional) | End term of a holding period. |
| maturityAmount | Number (optional) | Amount payable at the end of a holding period of a product (maturity date). For deposit all of the interest is usualy paid at maturity date (IF the term is shorter then one year). |
| autoRenewalIndicator | Boolean (optional) | Indicates whether or not an arrangement is to be continued after maturity automatically. Usually the product is renewed using the same principal and term unless renegotiation has taken place prior to expiration. |
| interestSettlementAccount | String (optional) | Account that provides quick access to accumulated cash to facilitate daily settlements with other businesses. |
| outstandingPrincipalAmount | Number (optional) | This IS the value date balance of the arrangement. |
| monthlyInstalmentAmount | Number (optional) | A fixed payment amount paid by a borrower to the bank at a specified date each calendar month. |
| amountInArrear | Number (optional) | The part of a debt that is overdue after missing one or more required payments. The amount of the arrears is the amount accrued from the date on which the first missed payment was due. |
| minimumRequiredBalance | Number (optional) | Minimum amount that a customer must have in an account in order to receive some sort of service, such as keeping the account open or receive interest. |
| creditCardAccountNumber | String (optional) | The number of the account the credit card transactions settle on (so actually the reference to the settlement account of the card)? |
| validThru | String (optional) | Expiration date of a credit card, after which is no longer valid. |
| applicableInterestRate | Number (optional) | The interest rate or rates which would be used for a particular arrangement. |
| remainingCredit | Number (optional) |  |
| outstandingPayment | Number (optional) |  |
| minimumPayment | Number (optional) | The minimum payment set a percentage of balance, or a fixed cash amount. |
| minimumPaymentDueDate | String (optional) | Minimum Payment Due Date shown on your monthly statement to remain in good standing. |
| totalInvestmentValue | Number (optional) |  |
| debitCards | Array (optional) of [DebitCardItem](#DebitCardItem) |  |
| accountHolderAddressLine1 | String (optional) | Address of the Payer/Payee - Alternate address line for the account. |
| accountHolderAddressLine2 | String (optional) | Address of the Payer/Payee - Alternate address line for the account. |
| accountHolderAddressLine3 | String (optional) | Deprecated. In future will be replace with accountHolderStreetName |
| accountHolderAddressLine4 | String (optional) | Deprecated. In future will be replace with town |
| accountHolderStreetName | String (optional) | Street name of the Payer/Payee - Alternate street name for the account. |
| town | String (optional) | Town of the Payer/Payee - Alternate town for the account. |
| postCode | String (optional) |  |
| countrySubDivision | String (optional) |  |
| accountHolderName | String (optional) |  |
| accountHolderCountry | String (optional) | ISO Country code 2 chars |
| creditAccount | Boolean (optional) | Indicator whether or not the arrangement can be used in payment orders as credit account. |
| debitAccount | Boolean (optional) | Indicator whether or not the arrangement can be used in payment orders as debit account. |
| lastUpdateDate | String (optional) | Last date of parameter update for the arrangement. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.creditCards"></a>*ProductSummaryData.creditCards*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [CreditCard](#CreditCard) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.currentAccounts"></a>*ProductSummaryData.currentAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [CurrentAccount](#CurrentAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.debitCards"></a>*ProductSummaryData.debitCards*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [DebitCard](#DebitCard) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.investmentAccounts"></a>*ProductSummaryData.investmentAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [InvestmentAccount](#InvestmentAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.loans"></a>*ProductSummaryData.loans*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [Loan](#Loan) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.savingsAccounts"></a>*ProductSummaryData.savingsAccounts*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [SavingsAccount](#SavingsAccount) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="ProductSummaryData.termDeposits"></a>*ProductSummaryData.termDeposits*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String (optional) |  |
| products | Array (optional) of [TermDeposit](#TermDeposit) |  |
| aggregatedBalance | [ProductSummaryData.AggregatedBalance](#ProductSummaryData.AggregatedBalance) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
