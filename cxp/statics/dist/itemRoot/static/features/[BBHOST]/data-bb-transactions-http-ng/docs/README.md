# data-bb-transactions-http-ng


Version: **3.5.1**

A data module for accessing the Transactions REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import transactionsDataModuleKey, {
  transactionsDataKey,
} from 'data-bb-transactions-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#transactionsDataKey">transactionsDataKey</a><br/>
- **TransactionsData**<br/>    <a href="#TransactionsData_getTransactions">#getTransactions(params, headers)</a><br/>    <a href="#TransactionsData_postTransactionsRecord">#postTransactionsRecord(data, headers)</a><br/>    <a href="#TransactionsData_patchTransactionsRecord">#patchTransactionsRecord(data, headers)</a><br/>    <a href="#TransactionsData_getTurnovers">#getTurnovers(params, headers)</a><br/>    <a href="#TransactionsData_getCategorytotals">#getCategorytotals(params, headers)</a><br/>    <a href="#TransactionsData_getTransactionsEnumValuesRecord">#getTransactionsEnumValuesRecord(attributeName, params, headers)</a><br/>    <a href="#TransactionsData_getTransactionsCsvUrl">#getTransactionsCsvUrl(params)</a><br/>    <a href="#TransactionsData_schemas">#schemas</a><br/>    <a href="#TransactionsData_schemas.postTransactionsRecord">#schemas.postTransactionsRecord</a><br/>
- **TransactionsDataProvider**<br/>    <a href="#TransactionsDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#TransactionsDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#TransactionsData.CategoryTotalsGet">TransactionsData.CategoryTotalsGet</a><br/>    <a href="#TransactionsData.Currency">TransactionsData.Currency</a><br/>    <a href="#TransactionsData.DefaultValueGetResponse">TransactionsData.DefaultValueGetResponse</a><br/>    <a href="#TransactionsData.GetEnumValues">TransactionsData.GetEnumValues</a><br/>    <a href="#TransactionsData.TransactionIds">TransactionsData.TransactionIds</a><br/>    <a href="#TransactionsData.TransactionItem">TransactionsData.TransactionItem</a><br/>    <a href="#TransactionsData.TransactionItemPatch">TransactionsData.TransactionItemPatch</a><br/>    <a href="#TransactionsData.TransactionItemPost">TransactionsData.TransactionItemPost</a><br/>    <a href="#TransactionsData.TransactionsGet">TransactionsData.TransactionsGet</a><br/>    <a href="#TransactionsData.TransactionsIds">TransactionsData.TransactionsIds</a><br/>    <a href="#TransactionsData.TransactionsPatch">TransactionsData.TransactionsPatch</a><br/>    <a href="#TransactionsData.TransactionsPost">TransactionsData.TransactionsPost</a><br/>    <a href="#TransactionsData.TurnoversGet">TransactionsData.TurnoversGet</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="transactionsDataKey"></a>*transactionsDataKey*

Angular dependency injection key for the TransactionsData service

**Type:** *String*


---

## TransactionsData

Public api for data-bb-transactions-http-ng service

### <a name="TransactionsData_getTransactions"></a>*#getTransactions(params, headers)*

Retrieves a list of pages limited in size and number by the page selection parameters, sorted and filtered

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.amountGreaterThan | Number (optional) | Amount greater than equal to. Eg: 5. |
| params.amountLessThan | Number (optional) | Amount less than equal to. Eg: 5. |
| params.bookingDateGreaterThan | String (optional) | Booking date greater than equal to. Eg: 2016-05-16. |
| params.bookingDateLessThan | String (optional) | Booking date less than equal to. Eg: 2016-05-16. |
| params.type | String (optional) | Type category. Eg: International payment. |
| params.description | String (optional) | The description of transaction. Eg: description. |
| params.reference | String (optional) | reference. Eg: reference. |
| params.typeGroup | String (optional) | The type group. Eg: Payment. |
| params.counterPartyName | String (optional) | The name of the counterparty. Eg: counterPartyName. |
| params.counterPartyAccountNumber | String (optional) | The International Bank Account Number of the counterparty. Eg: counterPartyAccountNumber. |
| params.creditDebitIndicator | String (optional) | Indicates whether the amount is credited or debited. Eg: CRDT. |
| params.category | String (optional) | Category of the transactions - Depricated. Eg: Transportation. |
| params.categories | String (optional) | An array of transaction categories. Eg: Transportation,Salary,Home. |
| params.billingStatus | String (optional) | Billing status of the transaction. Eg: BILLED. |
| params.currency | String (optional) | Transaction currency. Eg: EUR. |
| params.notes | Number (optional) | If notes of the transaction are present. Eg: 1. |
| params.id | String (optional) | The transaction id. Eg: 8a48e0585f49dfcb015f57e92e2d0040. |
| params.productId | String (optional) | The arrangement id @deprecated since 2.11.0. Eg: 11-22-33. |
| params.arrangementId | String (optional) | The arrangement id. Eg: 11-22-33. |
| params.arrangementsIds | String (optional) | Array of arrangement ids. Eg: 8a48e0585f49dfcb015f57e92e2d0040,8a48e0585f49dfcb015f4ea2eabb001c. |
| params.fromCheckSerialNumber | Number (optional) | value greater than or equal to. Eg: 52444. |
| params.toCheckSerialNumber | Number (optional) | value less than or equal to. Eg: 78543. |
| params.checkSerialNumbers | String (optional) | Array of checkSerialNumbers. Eg: 32124234,5423534. |
| params.query | String (optional) | The search term used to search for transactions. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: description, bookingDate, arrangementId, reference, typeGroup, type, category, valueDate, amount, currency, creditDebitIndicator, instructedAmount, instructedCurrency, currencyExchangeRate, counterPartyName, counterPartyAccountNumber, checkSerialNumber. |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| params.secDirection | String (optional) | Secondary Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [TransactionsData.TransactionsGet](#TransactionsData.TransactionsGet) on success*

## Example

```javascript
transactionsData
 .getTransactions(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_postTransactionsRecord"></a>*#postTransactionsRecord(data, headers)*

# Transaction

This EndPoint allows creating of Business/Retail banking transactions

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [TransactionsData.TransactionsPost](#TransactionsData.TransactionsPost) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [TransactionsData.TransactionsIds](#TransactionsData.TransactionsIds) on success*

## Example

```javascript
transactionsData
 .postTransactionsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_patchTransactionsRecord"></a>*#patchTransactionsRecord(data, headers)*

# Transaction Update

This EndPoint allows update of Business/Retail banking transactions

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [TransactionsData.TransactionsPatch](#TransactionsData.TransactionsPatch) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
transactionsData
 .patchTransactionsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_getTurnovers"></a>*#getTurnovers(params, headers)*

get request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.arrangementIds | String (optional) | Reference to the arrangements to which the periodic balances belong. |
| params.periodStartDate | String | Date of the turnovers evaluation period start. Eg: 2016-12-31. |
| params.periodEndDate | String | Date of a turnovers evaluation period end. Eg: 2017-04-30. |
| params.intervalDuration | String | Length of each periodic interval. Eg: MONTH. |
| params.intervalStartDay | Number (optional) | Day of a month to start turnover interval. Eg: 1. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [TransactionsData.TurnoversGet](#TransactionsData.TurnoversGet) on success*

## Example

```javascript
transactionsData
 .getTurnovers(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_getCategorytotals"></a>*#getCategorytotals(params, headers)*

get request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.creditDebitIndicator | String | Flag to determine if credit or debit transactions will be aggregated. |
| params.arrangementIds | String (optional) | Reference to the arrangements to which the income/spending analysis belong. |
| params.periodStartDate | String | Date of the income/spending evaluation period start. Eg: 2016-12-31. |
| params.periodEndDate | String | Date of a income/spending evaluation period end. Eg: 2017-04-30. |
| params.intervalDuration | String (optional) | Length of each periodic interval. (defaults to MONTH) |
| params.parentCategory | String (optional) | If this is present the responce will have all child categories of that parent. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [TransactionsData.CategoryTotalsGet](#TransactionsData.CategoryTotalsGet) on success*

## Example

```javascript
transactionsData
 .getCategorytotals(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_getTransactionsEnumValuesRecord"></a>*#getTransactionsEnumValuesRecord(attributeName, params, headers)*

Retrieves a list of possible values for specific attributes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| attributeName | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [TransactionsData.GetEnumValues](#TransactionsData.GetEnumValues) on success*

## Example

```javascript
transactionsData
 .getTransactionsEnumValuesRecord(attributeName, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="TransactionsData_getTransactionsCsvUrl"></a>*#getTransactionsCsvUrl(params)*

Retrieves a list of pages in csv format limited in size and number by the page selection parameters, sorted and filtered

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.amountGreaterThan | Number (optional) | Amount greater than equal to. Eg: 5. |
| params.amountLessThan | Number (optional) | Amount less than equal to. Eg: 5. |
| params.bookingDateGreaterThan | String (optional) | Booking date greater than equal to. Eg: 2016-05-16. |
| params.bookingDateLessThan | String (optional) | Booking date less than equal to. Eg: 2016-05-16. |
| params.type | String (optional) | Type category. Eg: International payment. |
| params.description | String (optional) | The description of transaction. Eg: description. |
| params.reference | String (optional) | reference. Eg: reference. |
| params.typeGroup | String (optional) | The type group. Eg: Payment. |
| params.counterPartyName | String (optional) | The name of the counterparty. Eg: counterPartyName. |
| params.counterPartyAccountNumber | String (optional) | The International Bank Account Number of the counterparty. Eg: counterPartyAccountNumber. |
| params.creditDebitIndicator | String (optional) | Indicates whether the amount is credited or debited. Eg: CRDT. |
| params.category | String (optional) | Category of the transactions - Depricated. Eg: Transportation. |
| params.categories | String (optional) | An array of transaction categories. Eg: Transportation,Salary,Home. |
| params.billingStatus | String (optional) | Billing status of the transaction. Eg: BILLED. |
| params.currency | String (optional) | Transaction currency. Eg: EUR. |
| params.notes | Number (optional) | If notes of the transaction are present. Eg: 1. |
| params.id | String (optional) | The transaction id. Eg: 8a48e0585f49dfcb015f57e92e2d0040. |
| params.productId | String (optional) | The arrangement id @deprecated since 2.11.0. Eg: 11-22-33. |
| params.arrangementId | String (optional) | The arrangement id. Eg: 11-22-33. |
| params.arrangementsIds | String (optional) | Array of arrangement ids. Eg: 8a48e0585f49dfcb015f57e92e2d0040,8a48e0585f49dfcb015f4ea2eabb001c. |
| params.fromCheckSerialNumber | Number (optional) | value greater than or equal to. Eg: 52444. |
| params.toCheckSerialNumber | Number (optional) | value less than or equal to. Eg: 78543. |
| params.checkSerialNumbers | String (optional) | Array of checkSerialNumbers. Eg: 32124234,5423534. |
| params.query | String (optional) | The search term used to search for transactions. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. |
| params.orderBy | String (optional) | Order by field: description, bookingDate, arrangementId, reference, typeGroup, type, category, valueDate, amount, currency, creditDebitIndicator, instructedAmount, instructedCurrency, currencyExchangeRate, counterPartyName, counterPartyAccountNumber, checkSerialNumber. |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| params.secDirection | String (optional) | Secondary Direction. (defaults to DESC) |

##### Returns

String - *Request URL*

## Example

```javascript
const url = transactionsData.getTransactionsCsvUrl(params)
$http({ url })
 .then(function(result){
   console.log('result', result);
 });
```
### <a name="TransactionsData_schemas"></a>*#schemas*

Schema data. Keys of the object are names of the POST and PUT methods

Note: The schema is not strictly a JSON schema. It is a whitelisted set of
keys for each object property. The keys that are exposed are meant for validation
purposes.

The full list of *possible* keys for each property is:
type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
properties, items, minItems, maxItems, uniqueItems and required.

See http://json-schema.org/latest/json-schema-validation.html for more details
on the meaning of these keys.

The "required" array from JSON schema is tranformed into a "required" boolean
on each property. This is for ease of use.

**Type:** *Object*

### <a name="TransactionsData_schemas.postTransactionsRecord"></a>*#schemas.postTransactionsRecord*

An object describing the JSON schema for the postTransactionsRecord method

**Type:** *Object*


## Example

```javascript
{
  "type": "array",
  "items": {
    "properties": {
      "arrangementId": {
        "type": "string",
        "maxLength": 36,
        "required": false
      },
      "externalId": {
        "type": "string",
        "maxLength": 50,
        "required": true
      },
      "externalArrangementId": {
        "type": "string",
        "maxLength": 50,
        "required": true
      },
      "reference": {
        "type": "string",
        "maxLength": 36,
        "required": false
      },
      "description": {
        "type": "string",
        "maxLength": 128,
        "required": true
      },
      "typeGroup": {
        "type": "string",
        "maxLength": 36,
        "required": true
      },
      "type": {
        "type": "string",
        "maxLength": 36,
        "required": true
      },
      "category": {
        "type": "string",
        "maxLength": 50,
        "required": false
      },
      "bookingDate": {
        "type": "string",
        "format": "date",
        "required": true
      },
      "valueDate": {
        "type": "string",
        "format": "date",
        "required": false
      },
      "amount": {
        "type": "number",
        "required": true
      },
      "currency": {
        "type": "string",
        "pattern": "^[A-Z]{3}$",
        "required": true
      },
      "creditDebitIndicator": {
        "type": "string",
        "enum": [
          "CRDT",
          "DBIT"
        ],
        "required": true
      },
      "instructedAmount": {
        "type": "number",
        "required": false
      },
      "instructedCurrency": {
        "type": "string",
        "pattern": "^[A-Z]{3}$",
        "required": false
      },
      "currencyExchangeRate": {
        "type": "number",
        "required": false
      },
      "counterPartyName": {
        "type": "string",
        "maxLength": 128,
        "required": false
      },
      "counterPartyAccountNumber": {
        "type": "string",
        "maxLength": 36,
        "required": false
      },
      "counterPartyBIC": {
        "type": "string",
        "maxLength": 11,
        "required": false
      },
      "counterPartyCountry": {
        "type": "string",
        "minLength": 2,
        "maxLength": 2,
        "required": false
      },
      "counterPartyBankName": {
        "type": "string",
        "maxLength": 128,
        "required": false
      },
      "creditorId": {
        "type": "string",
        "maxLength": 19,
        "required": false
      },
      "mandateReference": {
        "type": "string",
        "maxLength": 128,
        "required": false
      },
      "billingStatus": {
        "type": "string",
        "maxLength": 8,
        "required": false
      },
      "checkSerialNumber": {
        "type": "number",
        "minimum": 0,
        "maximum": 10000000000000000,
        "required": false
      },
      "sequenceNumber": {
        "type": "string",
        "maxLength": 20,
        "pattern": "(^[1-9][0-9]*)|0$",
        "required": false
      },
      "runningBalance": {
        "type": "number",
        "required": false
      }
    }
  }
}
```

---

## TransactionsDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-transactions-http-ng:transactionsDataProvider* |


### <a name="TransactionsDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="TransactionsDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-transactions-http-ng:transactionsDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-transactions-http-ng:transactionsDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="TransactionsData.CategoryTotalsGet"></a>*TransactionsData.CategoryTotalsGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| total | [TransactionsData.Currency](#TransactionsData.Currency) (optional) | The aggregate amount of all returned categories |
| items | Array (optional) of [CategoryTotalsItem](#CategoryTotalsItem) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.Currency"></a>*TransactionsData.Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | The amount in the specified currency |
| currencyCode | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.DefaultValueGetResponse"></a>*TransactionsData.DefaultValueGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| value | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.GetEnumValues"></a>*TransactionsData.GetEnumValues*


**Type:** *Array of [TransactionsData.DefaultValueGetResponse](#TransactionsData.DefaultValueGetResponse)*


### <a name="TransactionsData.TransactionIds"></a>*TransactionsData.TransactionIds*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| externalId | String | Externally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.TransactionItem"></a>*TransactionsData.TransactionItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification of the transaction |
| arrangementId | String | Reference to the product to which the transaction belongs |
| reference | String (optional) | A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction |
| description | String |  |
| typeGroup | String | Bank specific code of the group the transaaction type belangs to this to be mapped to in integration |
| type | String | Bank specific code to be mapped to generic type in integration |
| category | String (optional) | Transaction category |
| bookingDate | String | The date the amount is posted to the balance of an account from a book keeping perspective. |
| valueDate | String (optional) | The date on which an amount posted to an account becomes interest bearing |
| amount | Number | The amount of the transaction |
| currency | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| creditDebitIndicator | String |  |
| instructedAmount | Number (optional) | Only present if the transaction currency&lt;&gt;account currency |
| instructedCurrency | String (optional) | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| currencyExchangeRate | Number (optional) | The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same |
| counterPartyName | String (optional) | The name of the counterparty |
| counterPartyAccountNumber | String (optional) | The International Bank Account Number of the counterparty |
| counterPartyBIC | String (optional) | The BIC of the counterparty |
| counterPartyCountry | String (optional) | ISO Country code |
| counterPartyBankName | String (optional) | The bank name of the counterparty |
| creditorId | String (optional) | Id of the creditor (Only for SEPA DD) |
| mandateReference | String (optional) | Mandate Reference (Only for SEPA DD) |
| billingStatus | String (optional) |  |
| checkSerialNumber | [Integer](#Integer) (optional) | Serial number of the check. Each check has a different number for identification purposes. |
| notes | String (optional) |  |
| runningBalance | Number (optional) | Indicates the balance of the account at that moment when the transaction was executed |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.TransactionItemPatch"></a>*TransactionsData.TransactionItemPatch*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Unique identification for the transaction as used in the external system |
| arrangementId | String | Unique identification for the arrangement of the transaction |
| category | String (optional) | Transaction category |
| billingStatus | String (optional) |  |
| notes | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.TransactionItemPost"></a>*TransactionsData.TransactionItemPost*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String (optional) | Reference to the product to which the transaction belongs |
| externalId | String | Internally used unique external identification of the transaction |
| externalArrangementId | String | External reference to the product to which the transaction belongs |
| reference | String (optional) | A tag/label issued by the initiator of the transaction in order to be able to refer to the respective transaction |
| description | String |  |
| typeGroup | String | Bank specific code of the group the transaaction type belangs to this to be mapped to in integration |
| type | String | Bank specific code to be mapped to generic type in integration |
| category | String (optional) | Transaction category |
| bookingDate | String | The date the amount is posted to the balance of an account from a book keeping perspective. |
| valueDate | String (optional) | The date on which an amount posted to an account becomes interest bearing |
| amount | Number | The amount of the transaction |
| currency | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| creditDebitIndicator | String |  |
| instructedAmount | Number (optional) | Only present if the transaction currency&lt;&gt;account currency |
| instructedCurrency | String (optional) | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| currencyExchangeRate | Number (optional) | The exchange rate (between both account and transaction currency) that was used for the conversion. To be used if those currencies are not the same |
| counterPartyName | String (optional) | The name of the counterparty |
| counterPartyAccountNumber | String (optional) | The International Bank Account Number of the counterparty |
| counterPartyBIC | String (optional) | The BIC of the counterparty |
| counterPartyCountry | String (optional) | ISO Country code |
| counterPartyBankName | String (optional) | The bank name of the counterparty |
| creditorId | String (optional) | Id of the creditor (Only for SEPA DD) |
| mandateReference | String (optional) | Mandate Reference (Only for SEPA DD) |
| billingStatus | String (optional) |  |
| checkSerialNumber | Number (optional) | Serial number of the check. Each check has a different number for identification purposes. |
| sequenceNumber | String (optional) |  |
| runningBalance | Number (optional) | Indicates the balance of the account at that moment when the transaction was executed |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="TransactionsData.TransactionsGet"></a>*TransactionsData.TransactionsGet*


**Type:** *Array of [TransactionsData.TransactionItem](#TransactionsData.TransactionItem)*


### <a name="TransactionsData.TransactionsIds"></a>*TransactionsData.TransactionsIds*


**Type:** *Array of [TransactionsData.TransactionIds](#TransactionsData.TransactionIds)*


### <a name="TransactionsData.TransactionsPatch"></a>*TransactionsData.TransactionsPatch*


**Type:** *Array of [TransactionsData.TransactionItemPatch](#TransactionsData.TransactionItemPatch)*


### <a name="TransactionsData.TransactionsPost"></a>*TransactionsData.TransactionsPost*


**Type:** *Array of [TransactionsData.TransactionItemPost](#TransactionsData.TransactionItemPost)*


### <a name="TransactionsData.TurnoversGet"></a>*TransactionsData.TurnoversGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementIds | Array (optional) of String | Reference to the arrangements to which the periodic balances belong |
| intervalDuration | String (optional) |  |
| turnovers | Array (optional) of [TurnoverItem](#TurnoverItem) |  |
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
