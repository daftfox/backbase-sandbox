# data-bb-portfolio-summary-http-ng


Version: **6.1.1**

A data module for accessing the Portfolio Summary REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import portfolioSummaryDataModuleKey, {
  portfolioSummaryDataKey,
} from 'data-bb-portfolio-summary-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#portfolioSummaryDataKey">portfolioSummaryDataKey</a><br/>
- **PortfolioSummaryData**<br/>    <a href="#PortfolioSummaryData_getPortfoliosummary">#getPortfoliosummary(params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryRecord">#getPortfoliosummaryRecord(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_postPortfoliosummaryCustomListRecord">#postPortfoliosummaryCustomListRecord(data, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryCustomList">#getPortfoliosummaryCustomList(params, headers)</a><br/>    <a href="#PortfolioSummaryData_putPortfoliosummaryFavoritesRecord">#putPortfoliosummaryFavoritesRecord(data, headers)</a><br/>    <a href="#PortfolioSummaryData_postPortfoliosummaryClientOrderRecord">#postPortfoliosummaryClientOrderRecord(data, headers)</a><br/>    <a href="#PortfolioSummaryData_postPortfoliosummaryAliasRecord">#postPortfoliosummaryAliasRecord(data, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryPositions">#getPortfoliosummaryPositions(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryAllocationsAsset">#getPortfoliosummaryAllocationsAsset(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryAllocationsCurrency">#getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryTransactions">#getPortfoliosummaryTransactions(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryTransactionFilterOptions">#getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryValuationChart">#getPortfoliosummaryValuationChart(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryPerformanceChart">#getPortfoliosummaryPerformanceChart(portfolioId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_getPortfoliosummaryTransactionsRecord">#getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers)</a><br/>    <a href="#PortfolioSummaryData_deletePortfoliosummaryCustomListRecord">#deletePortfoliosummaryCustomListRecord(uuid, params, headers)</a><br/>    <a href="#PortfolioSummaryData_putPortfoliosummaryCustomListRecord">#putPortfoliosummaryCustomListRecord(uuid, data, headers)</a><br/>    <a href="#PortfolioSummaryData_postPortfoliosummaryCustomListPortfolioRecord">#postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers)</a><br/>    <a href="#PortfolioSummaryData_deletePortfoliosummaryCustomListPortfolioRecord">#deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers)</a><br/>    <a href="#PortfolioSummaryData_deletePortfoliosummaryFavoritesRecord">#deletePortfoliosummaryFavoritesRecord(iban, params, headers)</a><br/>    <a href="#PortfolioSummaryData_schemas">#schemas</a><br/>    <a href="#PortfolioSummaryData_schemas.postPortfoliosummaryCustomListRecord">#schemas.postPortfoliosummaryCustomListRecord</a><br/>    <a href="#PortfolioSummaryData_schemas.putPortfoliosummaryFavoritesRecord">#schemas.putPortfoliosummaryFavoritesRecord</a><br/>    <a href="#PortfolioSummaryData_schemas.postPortfoliosummaryClientOrderRecord">#schemas.postPortfoliosummaryClientOrderRecord</a><br/>    <a href="#PortfolioSummaryData_schemas.postPortfoliosummaryAliasRecord">#schemas.postPortfoliosummaryAliasRecord</a><br/>    <a href="#PortfolioSummaryData_schemas.putPortfoliosummaryCustomListRecord">#schemas.putPortfoliosummaryCustomListRecord</a><br/>    <a href="#PortfolioSummaryData_schemas.postPortfoliosummaryCustomListPortfolioRecord">#schemas.postPortfoliosummaryCustomListPortfolioRecord</a><br/>
- **PortfolioSummaryDataProvider**<br/>    <a href="#PortfolioSummaryDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#PortfolioSummaryDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#PortfolioSummaryData.AllocationsAssetGet">PortfolioSummaryData.AllocationsAssetGet</a><br/>    <a href="#PortfolioSummaryData.AllocationsCurrencyGet">PortfolioSummaryData.AllocationsCurrencyGet</a><br/>    <a href="#PortfolioSummaryData.CreatePortfolioCustomListRequest">PortfolioSummaryData.CreatePortfolioCustomListRequest</a><br/>    <a href="#PortfolioSummaryData.CumulativePerformanceChartDataGet">PortfolioSummaryData.CumulativePerformanceChartDataGet</a><br/>    <a href="#PortfolioSummaryData.Currency">PortfolioSummaryData.Currency</a><br/>    <a href="#PortfolioSummaryData.CustomListAddPortfolios">PortfolioSummaryData.CustomListAddPortfolios</a><br/>    <a href="#PortfolioSummaryData.CustomListResponse">PortfolioSummaryData.CustomListResponse</a><br/>    <a href="#PortfolioSummaryData.GetPortfolioCustomList">PortfolioSummaryData.GetPortfolioCustomList</a><br/>    <a href="#PortfolioSummaryData.MarkPortfolioAsFavoriteRequest">PortfolioSummaryData.MarkPortfolioAsFavoriteRequest</a><br/>    <a href="#PortfolioSummaryData.PortfolioClientOrder">PortfolioSummaryData.PortfolioClientOrder</a><br/>    <a href="#PortfolioSummaryData.PortfolioCustomListGetItem">PortfolioSummaryData.PortfolioCustomListGetItem</a><br/>    <a href="#PortfolioSummaryData.PortfolioSummaryGet">PortfolioSummaryData.PortfolioSummaryGet</a><br/>    <a href="#PortfolioSummaryData.PortfolioSummaryItemGet">PortfolioSummaryData.PortfolioSummaryItemGet</a><br/>    <a href="#PortfolioSummaryData.PositionsGet">PortfolioSummaryData.PositionsGet</a><br/>    <a href="#PortfolioSummaryData.PostPortfolioAlias">PortfolioSummaryData.PostPortfolioAlias</a><br/>    <a href="#PortfolioSummaryData.TransactionsDetailsGet">PortfolioSummaryData.TransactionsDetailsGet</a><br/>    <a href="#PortfolioSummaryData.TransactionsFilterOptionsGet">PortfolioSummaryData.TransactionsFilterOptionsGet</a><br/>    <a href="#PortfolioSummaryData.TransactionsGet">PortfolioSummaryData.TransactionsGet</a><br/>    <a href="#PortfolioSummaryData.TransactionsItem">PortfolioSummaryData.TransactionsItem</a><br/>    <a href="#PortfolioSummaryData.ValuationChartDataGet">PortfolioSummaryData.ValuationChartDataGet</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="portfolioSummaryDataKey"></a>*portfolioSummaryDataKey*

Angular dependency injection key for the PortfolioSummaryData service

**Type:** *String*


---

## PortfolioSummaryData

Public api for data-bb-portfolio-summary-http-ng service

### <a name="PortfolioSummaryData_getPortfoliosummary"></a>*#getPortfoliosummary(params, headers)*

Retrieve list of portfolio summary.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.query | String (optional) | The search term used to search for portfolios. |
| params.customListUuid | String (optional) | The search term used to return portfolios by custom list. |
| params.justFavorites | String (optional) | Flag to return just favorite portfolios. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.orderBy | String (optional) | Order by field: clientName, alias, riskClass, valuation.currencyCode, valuation.amount, performanceYTDpct, userOrder. |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.PortfolioSummaryGet](#PortfolioSummaryData.PortfolioSummaryGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummary(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryRecord"></a>*#getPortfoliosummaryRecord(portfolioId, params, headers)*

Retrieve single portfolio.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.PortfolioSummaryItemGet](#PortfolioSummaryData.PortfolioSummaryItemGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryRecord(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_postPortfoliosummaryCustomListRecord"></a>*#postPortfoliosummaryCustomListRecord(data, headers)*

Endpoint for creation Portfolio Custom List

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [PortfolioSummaryData.CreatePortfolioCustomListRequest](#PortfolioSummaryData.CreatePortfolioCustomListRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.CustomListResponse](#PortfolioSummaryData.CustomListResponse) on success*

## Example

```javascript
portfolioSummaryData
 .postPortfoliosummaryCustomListRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryCustomList"></a>*#getPortfoliosummaryCustomList(params, headers)*

Get current user all Custom Lists

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.GetPortfolioCustomList](#PortfolioSummaryData.GetPortfolioCustomList) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryCustomList(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_putPortfoliosummaryFavoritesRecord"></a>*#putPortfoliosummaryFavoritesRecord(data, headers)*

Marks portfolio as favorite

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [PortfolioSummaryData.MarkPortfolioAsFavoriteRequest](#PortfolioSummaryData.MarkPortfolioAsFavoriteRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .putPortfoliosummaryFavoritesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_postPortfoliosummaryClientOrderRecord"></a>*#postPortfoliosummaryClientOrderRecord(data, headers)*

post request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [PortfolioSummaryData.PortfolioClientOrder](#PortfolioSummaryData.PortfolioClientOrder) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .postPortfoliosummaryClientOrderRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_postPortfoliosummaryAliasRecord"></a>*#postPortfoliosummaryAliasRecord(data, headers)*

post request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [PortfolioSummaryData.PostPortfolioAlias](#PortfolioSummaryData.PostPortfolioAlias) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .postPortfoliosummaryAliasRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryPositions"></a>*#getPortfoliosummaryPositions(portfolioId, params, headers)*

The operations that involve using portfolio id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.PositionsGet](#PortfolioSummaryData.PositionsGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryPositions(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryAllocationsAsset"></a>*#getPortfoliosummaryAllocationsAsset(portfolioId, params, headers)*

Displaying all portfolio allocations by Asset Class.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.AllocationsAssetGet](#PortfolioSummaryData.AllocationsAssetGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryAllocationsAsset(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryAllocationsCurrency"></a>*#getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers)*

Displaying all portfolio allocations by Currency.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.AllocationsCurrencyGet](#PortfolioSummaryData.AllocationsCurrencyGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryAllocationsCurrency(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryTransactions"></a>*#getPortfoliosummaryTransactions(portfolioId, params, headers)*

Getting the list of transactions for the given portfolio.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object | Map of query parameters. |
| params.fromDate | String | Transaction date from which to show transactions. Eg: 2017-07-16. |
| params.toDate | String | Transaction date untill which to show transactions. Eg: 2017-08-16. |
| params.fromAmount | String (optional) | Transaction amount from which to show transactions. |
| params.toAmount | String (optional) | Transaction amount untill which to show transactions. |
| params.category | String (optional) | Transaction category like buy or sell. |
| params.instrumentName | String (optional) | Transaction instrument name. |
| params.counterpartyName | String (optional) | Transaction counter party name. |
| params.counterpartyAccount | String (optional) | Transaction counter party account. |
| params.subPortfolioId | String (optional) | Subportfolio to load transactions for. |
| params.iSIN | String (optional) | ISIN of transaction. |
| params.positionId | String (optional) | ID of position to load transactions for. |
| params.assetKey | String (optional) | The key for instrument/asset exact identification. |
| params.assetClass | String (optional) | Asset class category like stock or bond. |
| params.size | Number | The number of items per page. |
| params.from | Number | The number of pages to offset. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.TransactionsGet](#PortfolioSummaryData.TransactionsGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryTransactions(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryTransactionFilterOptions"></a>*#getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers)*

Returns object containing all asset classes, transactions categories, and accounts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.TransactionsFilterOptionsGet](#PortfolioSummaryData.TransactionsFilterOptionsGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryTransactionFilterOptions(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryValuationChart"></a>*#getPortfoliosummaryValuationChart(portfolioId, params, headers)*

Portfolio Valuation Chart data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object | Map of query parameters. |
| params.fromDate | String | A date from which to request data for the chart. Eg: 2017-07-16. |
| params.toDate | String | A date until which to request data for the chart. Eg: 2017-08-16. |
| params.granularity | String | Granularity of displayed data (e.g. monthly, weekly). Eg: monthly. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.ValuationChartDataGet](#PortfolioSummaryData.ValuationChartDataGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryValuationChart(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryPerformanceChart"></a>*#getPortfoliosummaryPerformanceChart(portfolioId, params, headers)*

Portfolio Cumulative Performance Chart data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| params | Object | Map of query parameters. |
| params.fromDate | String | A date from which to request data for the chart. Eg: 2017-07-16. |
| params.toDate | String | A date until which to request data for the chart. Eg: 2017-08-16. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.CumulativePerformanceChartDataGet](#PortfolioSummaryData.CumulativePerformanceChartDataGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryPerformanceChart(portfolioId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_getPortfoliosummaryTransactionsRecord"></a>*#getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers)*

Retrieve a transaction detials

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String |  |
| transactionId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.TransactionsDetailsGet](#PortfolioSummaryData.TransactionsDetailsGet) on success*

## Example

```javascript
portfolioSummaryData
 .getPortfoliosummaryTransactionsRecord(portfolioId, transactionId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_deletePortfoliosummaryCustomListRecord"></a>*#deletePortfoliosummaryCustomListRecord(uuid, params, headers)*

Delete custom list by uuid

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .deletePortfoliosummaryCustomListRecord(uuid, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_putPortfoliosummaryCustomListRecord"></a>*#putPortfoliosummaryCustomListRecord(uuid, data, headers)*

Rename the custom list by UUID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String |  |
| data | [PortfolioSummaryData.RenameCustomList](#PortfolioSummaryData.RenameCustomList) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [PortfolioSummaryData.CustomListResponse](#PortfolioSummaryData.CustomListResponse) on success*

## Example

```javascript
portfolioSummaryData
 .putPortfoliosummaryCustomListRecord(uuid, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_postPortfoliosummaryCustomListPortfolioRecord"></a>*#postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers)*

post request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String |  |
| data | [PortfolioSummaryData.CustomListAddPortfolios](#PortfolioSummaryData.CustomListAddPortfolios) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .postPortfoliosummaryCustomListPortfolioRecord(uuid, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_deletePortfoliosummaryCustomListPortfolioRecord"></a>*#deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers)*

delete request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String |  |
| portfolioIbanList | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .deletePortfoliosummaryCustomListPortfolioRecord(uuid, portfolioIbanList, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="PortfolioSummaryData_deletePortfoliosummaryFavoritesRecord"></a>*#deletePortfoliosummaryFavoritesRecord(iban, params, headers)*

Marks portfolio as not favorite

| Parameter | Type | Description |
| :-- | :-- | :-- |
| iban | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
portfolioSummaryData
 .deletePortfoliosummaryFavoritesRecord(iban, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="PortfolioSummaryData_schemas"></a>*#schemas*

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

### <a name="PortfolioSummaryData_schemas.postPortfoliosummaryCustomListRecord"></a>*#schemas.postPortfoliosummaryCustomListRecord*

An object describing the JSON schema for the postPortfoliosummaryCustomListRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 30,
      "required": true
    }
  }
}
```
### <a name="PortfolioSummaryData_schemas.putPortfoliosummaryFavoritesRecord"></a>*#schemas.putPortfoliosummaryFavoritesRecord*

An object describing the JSON schema for the putPortfoliosummaryFavoritesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "IBAN": {
      "type": "string",
      "minLength": 1,
      "maxLength": 36,
      "required": true
    }
  }
}
```
### <a name="PortfolioSummaryData_schemas.postPortfoliosummaryClientOrderRecord"></a>*#schemas.postPortfoliosummaryClientOrderRecord*

An object describing the JSON schema for the postPortfoliosummaryClientOrderRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```
### <a name="PortfolioSummaryData_schemas.postPortfoliosummaryAliasRecord"></a>*#schemas.postPortfoliosummaryAliasRecord*

An object describing the JSON schema for the postPortfoliosummaryAliasRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "IBAN": {
      "type": "string",
      "minLength": 1,
      "maxLength": 36,
      "required": true
    },
    "alias": {
      "type": "string",
      "maxLength": 30,
      "required": false
    }
  }
}
```
### <a name="PortfolioSummaryData_schemas.putPortfoliosummaryCustomListRecord"></a>*#schemas.putPortfoliosummaryCustomListRecord*

An object describing the JSON schema for the putPortfoliosummaryCustomListRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3,
      "maxLength": 30,
      "required": true
    }
  }
}
```
### <a name="PortfolioSummaryData_schemas.postPortfoliosummaryCustomListPortfolioRecord"></a>*#schemas.postPortfoliosummaryCustomListPortfolioRecord*

An object describing the JSON schema for the postPortfoliosummaryCustomListPortfolioRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {}
}
```

---

## PortfolioSummaryDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider* |


### <a name="PortfolioSummaryDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="PortfolioSummaryDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-portfolio-summary-http-ng:portfolioSummaryDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="PortfolioSummaryData.AllocationsAssetGet"></a>*PortfolioSummaryData.AllocationsAssetGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| allocations | Array (optional) of [AllocationsParentItem](#AllocationsParentItem) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.AllocationsCurrencyGet"></a>*PortfolioSummaryData.AllocationsCurrencyGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| allocations | Array (optional) of [AllocationsParentItem](#AllocationsParentItem) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.CreatePortfolioCustomListRequest"></a>*PortfolioSummaryData.CreatePortfolioCustomListRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Custom list name |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.CumulativePerformanceChartDataGet"></a>*PortfolioSummaryData.CumulativePerformanceChartDataGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| chartData | Array (optional) of [CumulativePerformanceChartItem](#CumulativePerformanceChartItem) | The list of items to build the chart. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.Currency"></a>*PortfolioSummaryData.Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | The amount in the specified currency |
| currencyCode | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.CustomListAddPortfolios"></a>*PortfolioSummaryData.CustomListAddPortfolios*


**Type:** *Object*


### <a name="PortfolioSummaryData.CustomListResponse"></a>*PortfolioSummaryData.CustomListResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| uuid | String (optional) | Custom list create or update response |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.GetPortfolioCustomList"></a>*PortfolioSummaryData.GetPortfolioCustomList*


**Type:** *Array of [PortfolioSummaryData.PortfolioCustomListGetItem](#PortfolioSummaryData.PortfolioCustomListGetItem)*


### <a name="PortfolioSummaryData.MarkPortfolioAsFavoriteRequest"></a>*PortfolioSummaryData.MarkPortfolioAsFavoriteRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Portfolio IBAN |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.PortfolioClientOrder"></a>*PortfolioSummaryData.PortfolioClientOrder*


**Type:** *Object*


### <a name="PortfolioSummaryData.PortfolioCustomListGetItem"></a>*PortfolioSummaryData.PortfolioCustomListGetItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Custom list name |
| uuid | String | Custom list uuid |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.PortfolioSummaryGet"></a>*PortfolioSummaryData.PortfolioSummaryGet*


**Type:** *Array of [PortfolioSummaryData.PortfolioSummaryItemGet](#PortfolioSummaryData.PortfolioSummaryItemGet)*


### <a name="PortfolioSummaryData.PortfolioSummaryItemGet"></a>*PortfolioSummaryData.PortfolioSummaryItemGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Account ID |
| clientName | String | The name of the client |
| alias | String (optional) | A portfolio name manually set by the client |
| valuation | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Total cost of all assets in the portfolio |
| inCashTotal | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Incoming cash for the period of time |
| outCashTotal | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Outgoing cash for the period of time |
| performanceMTD | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | A calculated portfolio performance amount from the mounth start to date |
| performanceMTDpct | Number (optional) | A calculated percentage of portfolio amount growth in percents |
| performanceYTD | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | A calculated portfolio performance amount from the year start to date |
| performanceYTDpct | Number (optional) | A calculated percentage of portfolio amount growth in percents |
| riskClass | String (optional) | Risk associated with portfolio investement strategy |
| assetClasses | Array (optional) of [PortfoliosAssetClassItem](#PortfoliosAssetClassItem) | The chart to display the asset allocation within a portfolio |
| managers | Array (optional) of [PortfoliosManagerItem](#PortfoliosManagerItem) | Managers of portfolio |
| attorneys | Array (optional) of [PortfoliosAttorneyItem](#PortfoliosAttorneyItem) | Attorneys of portfolio |
| isFavorite | Boolean (optional) | This flag responsible for Favorite marker |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.PositionsGet"></a>*PortfolioSummaryData.PositionsGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array (optional) of [PositionsAccountItem](#PositionsAccountItem) | The list of Accounts within the client Portfolio. |
| assetClasses | Array (optional) of [PositionsAssetClassItem](#PositionsAssetClassItem) | The list of Asset Classes within each Account. |
| regions | Array (optional) of [PositionsRegionItem](#PositionsRegionItem) | The list of Regions for each Asset Class and Account, to which positions are allocated. |
| countries | Array (optional) of [PositionsCountryItem](#PositionsCountryItem) | The list of Countries for each Region and AssetClass and Account, to which positions are allocated. |
| positions | Array of [PositionsItem](#PositionsItem) | The list of Positions. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.PostPortfolioAlias"></a>*PortfolioSummaryData.PostPortfolioAlias*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Portfolio IBAN |
| alias | String (optional) | Portfolio alias |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.TransactionsDetailsGet"></a>*PortfolioSummaryData.TransactionsDetailsGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| instrumentNameLong | String (optional) | The long name of the instrument the given transaction is related to. |
| valueDate | String | The date when transaction was executed. |
| market | String (optional) | The marketplace where the transaction was executed. |
| orderType | String (optional) | The type of the order. |
| grossAmount | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | The gross amount (price*quantity) of the transaction in the given curency. Usually is including taxes and fees. |
| exchangeRate | Number (optional) | The currency exchange rate(FX) applied to the transaction on the transaction date. |
| taxesLocal | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Local taxes in the given currency applied to the transaction. |
| taxesForeign | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Foreign taxes in the given currency applied to the transaction. |
| feesLocal | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Local fees in the given currency applied to the transaction. |
| feesForeign | [PortfolioSummaryData.Currency](#PortfolioSummaryData.Currency) (optional) | Foreign fees in the given currency applied to the transaction. |
| instrumentCodeCustom | String (optional) | The instrument/asset internal or custom code used within the bank. |
| officialCode | String (optional) | The instrument/asset official code that shown. |
| assetSubClass | String (optional) | The name of the asset sub-class the transaction belongs to. |
| notes | String (optional) | The description or notes related to the operation. |
| instrumentCurrency | String (optional) | The currency of the financial instrument. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.TransactionsFilterOptionsGet"></a>*PortfolioSummaryData.TransactionsFilterOptionsGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [TransactionsFilterOptionsAccountItem](#TransactionsFilterOptionsAccountItem) | This is the list of all accounts. |
| assetClasses | Array of [TransactionsFilterOptionsAssetClassItem](#TransactionsFilterOptionsAssetClassItem) | This is the list of all asset classes. |
| categories | Array of [TransactionsFilterOptionsCategoryItem](#TransactionsFilterOptionsCategoryItem) | This is the list of all transaction categories. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.TransactionsGet"></a>*PortfolioSummaryData.TransactionsGet*


**Type:** *Array of [PortfolioSummaryData.TransactionsItem](#PortfolioSummaryData.TransactionsItem)*


### <a name="PortfolioSummaryData.TransactionsItem"></a>*PortfolioSummaryData.TransactionsItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | Number | Numerical ID of the transaction |
| transactionDate | String | The date on which the transaction was booked. |
| category | String (optional) | The name of the transaction category. E.g. Buy/Sell or Redemption or other. |
| assetClass | String (optional) | The name of the asset class the transaction belongs to. |
| instrumentName | String (optional) | The short name of the instrument, the given transaction is related to. |
| quantity | Number (optional) | The quantity of units in the transaction operation. |
| price | [*](#*) (optional) | The price of one unit of transaction instrument in the instrument currency. |
| amount | [*](#*) (optional) | The amount of the transaction (price*quantity) in the client reference currency. |
| balanceAsset | Number (optional) | The quantitative balance state after transaction. |
| balanceAmount | [*](#*) (optional) | The amount balance state after transaction in the client reference currency. |
| assetKey | String | The key used for asset/instrument identification. |
| counterpartyName | String (optional) | A name of the transaction counterparty. |
| statusId | String | A status identificator of the transaction. String type to be able to accomodate both numerical and string statuses. |
| statusName | String (optional) | A name or description of the transaction status. E.g. Live, Pending |
| statusAbbr | String | The abbreviation of the transaction status the way it must be displayed on the UI. |
| positionType | String | A type of the position the given transaction belongs to. E.g. Cash position or Security. |
| counterpartyAccount | String (optional) | The account id of the counterpart of the transaction. |
| subPortfolioId | String (optional) | An subPortfolio id the transaction belongs to. |
| positionId | String (optional) | A position id the transaction belongs to. |
| iSIN | String (optional) | The instrument/asset international code. |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="PortfolioSummaryData.ValuationChartDataGet"></a>*PortfolioSummaryData.ValuationChartDataGet*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| chartData | Array (optional) of [ValuationChartItem](#ValuationChartItem) | The list of items to build the chart. |
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
