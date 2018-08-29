# model-wm-portfolio-summary-ng


Version: **1.34.2**

Model-wm-portfolio-summary-ng

## Imports

* data-bb-portfolio-summary-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modelPortfolioSummaryModuleKey, { modelPortfolioSummaryKey }
from 'model-wm-portfolio-summary-ng';

angular
  .module('ExampleModule', [
    modelPortfolioSummaryModuleKey,
  ])
  .factory('someFactory', [
    modelPortfolioSummaryKey,
    // into
    function someFactory(portfolioSummaryModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **portfolioSummaryModel**<br/>    <a href="#portfolioSummaryModel_load">#load(params)</a><br/>    <a href="#portfolioSummaryModel_loadPortfoliosOrder">#loadPortfoliosOrder()</a><br/>    <a href="#portfolioSummaryModel_savePortfoliosOrder">#savePortfoliosOrder(order)</a><br/>    <a href="#portfolioSummaryModel_savePortfolioAlias">#savePortfolioAlias(IBAN, alias)</a><br/>    <a href="#portfolioSummaryModel_loadPortfolioSummaryRecord">#loadPortfolioSummaryRecord(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_loadPortfolioPositions">#loadPortfolioPositions(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_getSelectedPortfolioId">#getSelectedPortfolioId()</a><br/>    <a href="#portfolioSummaryModel_getSelectedCustomList">#getSelectedCustomList()</a><br/>    <a href="#portfolioSummaryModel_loadAllocationClasses">#loadAllocationClasses(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_loadAllocationCurrencies">#loadAllocationCurrencies(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_loadTransactions">#loadTransactions(portfolioId, params)</a><br/>    <a href="#portfolioSummaryModel_loadTransactionDetails">#loadTransactionDetails(portfolioId, transactionId, params)</a><br/>    <a href="#portfolioSummaryModel_loadTransactionsFilterOptions">#loadTransactionsFilterOptions(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_loadPerformanceValuation">#loadPerformanceValuation(portfolioId, Granularity, Date, Date)</a><br/>    <a href="#portfolioSummaryModel_loadPerformanceChart">#loadPerformanceChart(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_setPortfolioIdSelected">#setPortfolioIdSelected(portfolioId)</a><br/>    <a href="#portfolioSummaryModel_setCustomListSelected">#setCustomListSelected(customList)</a><br/>    <a href="#portfolioSummaryModel_loadCustomList">#loadCustomList()</a><br/>    <a href="#portfolioSummaryModel_createCustomList">#createCustomList(requestData)</a><br/>    <a href="#portfolioSummaryModel_setPortfoliosToCustomList">#setPortfoliosToCustomList(uuid, portfolios)</a><br/>    <a href="#portfolioSummaryModel_deleteCustomList">#deleteCustomList(uuid)</a><br/>    <a href="#portfolioSummaryModel_deletePortfoliosFromCustomList">#deletePortfoliosFromCustomList(portfolios, uuid)</a><br/>    <a href="#portfolioSummaryModel_renameCustomList">#renameCustomList(uuid, list)</a><br/>    <a href="#portfolioSummaryModel_updateFavoriteStatusOfPortfolio">#updateFavoriteStatusOfPortfolio(IBAN, isFavorite)</a><br/>
- **Type Definitions**<br/>    <a href="#Portfolio">Portfolio</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>    <a href="#AssetClass">AssetClass</a><br/>    <a href="#attorney">attorney</a><br/>    <a href="#manager">manager</a><br/>

---

## portfolioSummaryModel


### <a name="portfolioSummaryModel_load"></a>*#load(params)*

Load portfolios.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [Portfolios](#Portfolios), [ModelError](#ModelError) - *A Promise resolving to object with Portfolios.*

### <a name="portfolioSummaryModel_loadPortfoliosOrder"></a>*#loadPortfoliosOrder()*

Load portfolios order.

##### Returns

Promise of Array of String, [ModelError](#ModelError) - *A Promise resolving to array with Portfolios IBANs.*

### <a name="portfolioSummaryModel_savePortfoliosOrder"></a>*#savePortfoliosOrder(order)*

Load portfolios order.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| order | Array of String | Array of portfolios IBANs |

##### Returns

Promise of Array of String, [ModelError](#ModelError) - *A Promise resolving to array with Portfolios IBANs.*

### <a name="portfolioSummaryModel_savePortfolioAlias"></a>*#savePortfolioAlias(IBAN, alias)*

Save portfolio with new alias name.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Changed portfolio IBAN |
| alias | String | New alias name |

### <a name="portfolioSummaryModel_loadPortfolioSummaryRecord"></a>*#loadPortfolioSummaryRecord(portfolioId)*

Load specific portfolio

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

##### Returns

Promise of [Portfolio](#Portfolio), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio*

### <a name="portfolioSummaryModel_loadPortfolioPositions"></a>*#loadPortfolioPositions(portfolioId)*

Load portfolio positions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

##### Returns

Promise of [Positions](#Positions), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio positions.*

### <a name="portfolioSummaryModel_getSelectedPortfolioId"></a>*#getSelectedPortfolioId()*

Get current selected portfolio id.

##### Returns

Promise of String, [ModelError](#ModelError) - *A Promise with portfolio id.*

### <a name="portfolioSummaryModel_getSelectedCustomList"></a>*#getSelectedCustomList()*

Get current selected custom list

##### Returns

Promise of String, [ModelError](#ModelError) - *A Promise with custom list*

### <a name="portfolioSummaryModel_loadAllocationClasses"></a>*#loadAllocationClasses(portfolioId)*

Load allocation classes.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

##### Returns

Promise of [Allocations](#Allocations), [ModelError](#ModelError) - *A Promise resolving to object with Allocation classes.*

### <a name="portfolioSummaryModel_loadAllocationCurrencies"></a>*#loadAllocationCurrencies(portfolioId)*

Load allocation currencies.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

##### Returns

Promise of [Allocations](#Allocations), [ModelError](#ModelError) - *A Promise resolving to object with Allocation currencies.*

### <a name="portfolioSummaryModel_loadTransactions"></a>*#loadTransactions(portfolioId, params)*

Load portfolio transactions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | Number | ID of portfolio to load |
| params | String | Filter params |

##### Returns

Promise of [PortfolioTransactions](#PortfolioTransactions), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio transactions.*

### <a name="portfolioSummaryModel_loadTransactionDetails"></a>*#loadTransactionDetails(portfolioId, transactionId, params)*

Load portfolio transaction detailed data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | Number | ID of portfolio to load |
| transactionId | Number | ID of transaction to load |
| params | String | Filter params |

##### Returns

Promise of [PortfolioTransaction](#PortfolioTransaction), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio transaction.*

### <a name="portfolioSummaryModel_loadTransactionsFilterOptions"></a>*#loadTransactionsFilterOptions(portfolioId)*

Load filter options for portfolio transactions` filter.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | Number | ID to load data for |

##### Returns

Promise of [PortfolioTransactionsFilterOptions](#PortfolioTransactionsFilterOptions), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio transactions` filter options.*

### <a name="portfolioSummaryModel_loadPerformanceValuation"></a>*#loadPerformanceValuation(portfolioId, Granularity, Date, Date)*

Load performance valuation data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |
| Granularity | [granularity](#granularity) | of data to load |
| Date | [fromDate](#fromDate) | to load data from |
| Date | [toDate](#toDate) | to load data to |

##### Returns

Promise of [ValuationData](#ValuationData), [ModelError](#ModelError) - *A Promise resolving to object with Performance valuation data.*

### <a name="portfolioSummaryModel_loadPerformanceChart"></a>*#loadPerformanceChart(portfolioId)*

Load data for portfolio performance chart.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | Number | ID to load data for |

##### Returns

Promise of [PortfolioPerformance](#PortfolioPerformance), [ModelError](#ModelError) - *A Promise resolving to object with Portfolio performance chart data.*

### <a name="portfolioSummaryModel_setPortfolioIdSelected"></a>*#setPortfolioIdSelected(portfolioId)*

Set current selected portfolio id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | portfolio id to set selected |

### <a name="portfolioSummaryModel_setCustomListSelected"></a>*#setCustomListSelected(customList)*

Set current selected custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| customList | String | custom list to set selected |

### <a name="portfolioSummaryModel_loadCustomList"></a>*#loadCustomList()*

Load custom lists.

##### Returns

Promise of [CustomList](#CustomList), [ModelError](#ModelError) - *A Promise resolving to object with Custom lists.*

### <a name="portfolioSummaryModel_createCustomList"></a>*#createCustomList(requestData)*

Create custom list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestData | Object | request body data |

##### Returns

Promise of [CustomList](#CustomList), [ModelError](#ModelError) - *A Promise resolving to object with Custom list.*

### <a name="portfolioSummaryModel_setPortfoliosToCustomList"></a>*#setPortfoliosToCustomList(uuid, portfolios)*

Add portfolios to custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String | Identifier of custom list |
| portfolios | Array | List of portfolio ids |

##### Returns

Promise of String - *Uuid of custom list*

### <a name="portfolioSummaryModel_deleteCustomList"></a>*#deleteCustomList(uuid)*

Delete custom list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String | customlist uuid |

##### Returns

Promise of String, [ModelError](#ModelError) - **

### <a name="portfolioSummaryModel_deletePortfoliosFromCustomList"></a>*#deletePortfoliosFromCustomList(portfolios, uuid)*

Delete portfolios from custom list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolios | Array of String | List of portfolios ids to remove from custom list |
| uuid | String | customlist uuid |

##### Returns

Promise of String, [ModelError](#ModelError) - **

### <a name="portfolioSummaryModel_renameCustomList"></a>*#renameCustomList(uuid, list)*

Rename custom list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | Object | customlist uuid |
| list | Object | object with a list name property |

##### Returns

Promise of String, [ModelError](#ModelError) - **

### <a name="portfolioSummaryModel_updateFavoriteStatusOfPortfolio"></a>*#updateFavoriteStatusOfPortfolio(IBAN, isFavorite)*

Update `favorite` status of portfolio.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Portfolio IBAN |
| isFavorite | Boolean | Flag that stands for 'favorite' status of portfolio |

##### Returns

Promise of String, [ModelError](#ModelError) - **

## Type Definitions


### <a name="Portfolio"></a>*Portfolio*

Portfolio type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | International Bank Account Number |
| clientName | String | Client name |
| alias | String | A portfolio name manually set by the client |
| assetClasses | Array of [assetClass](#assetClass) | Asset classes list for portfolio |
| valuation | Object | Total cost of all assets in the portfolio |
| inCashTotal | Object | Incoming cash for the period of time |
| outCashTotal | Object | Outgoing cash for the period of time |
| performanceMTD | Number | Portfolio performance for month |
| performanceMTDpct | Number | Portfolio performance for month in percents |
| performanceYTD | Number | Portfolio performance amount for year |
| performanceYTDpct | Number | Portfolio performance amount for year in percents |
| riskClass | String | Risk of portfolio investement strategy |
| managers | Array of [manager](#manager) | Managers of portfolio |
| attorneys | Array of [attorney](#attorney) | Attorneys of portfolio |
| dataseries | Array of [BBSeries](#BBSeries) | data in format suitable for chart UI components |

### <a name="BBSeries"></a>*BBSeries*

BBSeries data object used to draw charts

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array chart slices labels |
| datasets | Array of [Dataset](#Dataset) | Array of chart datasets |

### <a name="Dataset"></a>*Dataset*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points for chart slices |

### <a name="AssetClass"></a>*AssetClass*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | name of asset class |
| valuePct | Number | value that represents percentage of asset |

### <a name="attorney"></a>*attorney*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of a portfolio manager |
| name | String | name of a portfolio manager |

### <a name="manager"></a>*manager*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of a portfolio manager |
| name | String | name of a portfolio manager |

---
