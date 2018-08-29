# data-bb-account-statements-http-ng


Version: **1.3.0**

A data module for accessing the Account Statements REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import accountStatementsDataModuleKey, {
  accountStatementsDataKey,
} from 'data-bb-account-statements-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#accountStatementsDataKey">accountStatementsDataKey</a><br/>
- **AccountStatementsData**<br/>    <a href="#AccountStatementsData_getAccountStatements">#getAccountStatements(params, headers)</a><br/>    <a href="#AccountStatementsData_getAccountStatementsCategories">#getAccountStatementsCategories(params, headers)</a><br/>    <a href="#AccountStatementsData_getAccountStatementsDownloadRecordUrl">#getAccountStatementsDownloadRecordUrl(uid, params)</a><br/>
- **AccountStatementsDataProvider**<br/>    <a href="#AccountStatementsDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#AccountStatementsDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#AccountStatementsData.AccountStatement">AccountStatementsData.AccountStatement</a><br/>    <a href="#AccountStatementsData.AccountStatementsCategoriesResponse">AccountStatementsData.AccountStatementsCategoriesResponse</a><br/>    <a href="#AccountStatementsData.AccountStatementsResponse">AccountStatementsData.AccountStatementsResponse</a><br/>    <a href="#AccountStatementsData.BadRequest">AccountStatementsData.BadRequest</a><br/>    <a href="#AccountStatementsData.Forbidden">AccountStatementsData.Forbidden</a><br/>    <a href="#AccountStatementsData.InternalServerError">AccountStatementsData.InternalServerError</a><br/>    <a href="#AccountStatementsData.NotFound">AccountStatementsData.NotFound</a><br/>    <a href="#AccountStatementsData.UnprocessableEntity">AccountStatementsData.UnprocessableEntity</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="accountStatementsDataKey"></a>*accountStatementsDataKey*

Angular dependency injection key for the AccountStatementsData service

**Type:** *String*


---

## AccountStatementsData

Public api for data-bb-account-statements-http-ng service

### <a name="AccountStatementsData_getAccountStatements"></a>*#getAccountStatements(params, headers)*

Get the list of 'available' statements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.accountId | String (optional) | accountId. |
| params.dateFrom | String (optional) | Date from which the statements should be retrieved. Eg: 2017-02-03. |
| params.dateTo | String (optional) | Date to which the statements should be retrieved. Eg: 2017-02-03. |
| params.category | String (optional) | Categories to filter on. Eg: cat_1,cat_2. |
| params.from | Number (optional) | Skip over a page of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field. |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [AccountStatementsData.AccountStatementsResponse](#AccountStatementsData.AccountStatementsResponse) on success*

## Example

```javascript
accountStatementsData
 .getAccountStatements(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="AccountStatementsData_getAccountStatementsCategories"></a>*#getAccountStatementsCategories(params, headers)*

Get the list of 'available' categories

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [AccountStatementsData.AccountStatementsCategoriesResponse](#AccountStatementsData.AccountStatementsCategoriesResponse) on success*

## Example

```javascript
accountStatementsData
 .getAccountStatementsCategories(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="AccountStatementsData_getAccountStatementsDownloadRecordUrl"></a>*#getAccountStatementsDownloadRecordUrl(uid, params)*

Download account statements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uid | String |  |
| params | Object (optional) | Map of query parameters. |

##### Returns

String - *Request URL*

## Example

```javascript
const url = accountStatementsData.getAccountStatementsDownloadRecordUrl(uid, params)
$http({ url })
 .then(function(result){
   console.log('result', result);
 });
```

---

## AccountStatementsDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-account-statements-http-ng:accountStatementsDataProvider* |


### <a name="AccountStatementsDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="AccountStatementsDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-account-statements-http-ng:accountStatementsDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-account-statements-http-ng:accountStatementsDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="AccountStatementsData.AccountStatement"></a>*AccountStatementsData.AccountStatement*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accountId | String (optional) | Reference to the account to which the statement belongs |
| date | String | The context agnostic statement date |
| description | String (optional) | The description of the statement |
| category | String (optional) | Category of the account statement |
| documents | Array of [AccountStatementIdentification](#AccountStatementIdentification) | List of documents provided by the bank |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.AccountStatementsCategoriesResponse"></a>*AccountStatementsData.AccountStatementsCategoriesResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categories | Array of String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.AccountStatementsResponse"></a>*AccountStatementsData.AccountStatementsResponse*


**Type:** *Array of [AccountStatementsData.AccountStatement](#AccountStatementsData.AccountStatement)*


### <a name="AccountStatementsData.BadRequest"></a>*AccountStatementsData.BadRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.Forbidden"></a>*AccountStatementsData.Forbidden*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.InternalServerError"></a>*AccountStatementsData.InternalServerError*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.NotFound"></a>*AccountStatementsData.NotFound*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AccountStatementsData.UnprocessableEntity"></a>*AccountStatementsData.UnprocessableEntity*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
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
