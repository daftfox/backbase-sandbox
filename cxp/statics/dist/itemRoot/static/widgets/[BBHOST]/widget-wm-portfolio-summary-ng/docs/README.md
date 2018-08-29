# widget-wm-portfolio-summary-ng


Version: **3.15.2**

Portfolio summary widget.

## Imports

* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PortfolioSummaryController as $ctrl">
   <ul>
      <li ng-repeat="portfolio in $ctrl.portfolios">{{portfolio.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **PortfolioSummaryController**<br/>    <a href="#PortfolioSummaryController_getCustomListSelected">#getCustomListSelected()</a><br/>    <a href="#PortfolioSummaryController_load">#load(page)</a><br/>    <a href="#PortfolioSummaryController_setCustomListSelected">#setCustomListSelected(customList)</a><br/>
- **widget-wm-portfolio-summary-ng**<br/>    <a href="#widget-wm-portfolio-summary-ngviewPortfolioDetails">viewPortfolioDetails(portfolioId)</a><br/>    <a href="#widget-wm-portfolio-summary-ngonSort">onSort(orderBy, direction)</a><br/>    <a href="#widget-wm-portfolio-summary-nggetCustomListSelected">getCustomListSelected()</a><br/>    <a href="#widget-wm-portfolio-summary-ngloadPortfolioSummary">loadPortfolioSummary(page)</a><br/>    <a href="#widget-wm-portfolio-summary-ngloadCustomLists">loadCustomLists()</a><br/>    <a href="#widget-wm-portfolio-summary-ngsetPortfolioIdSelected">setPortfolioIdSelected(portfolioId)</a><br/>    <a href="#widget-wm-portfolio-summary-ngsetCustomListSelected">setCustomListSelected(customList)</a><br/>    <a href="#widget-wm-portfolio-summary-ngsort">sort(orderBy, direction)</a><br/>    <a href="#widget-wm-portfolio-summary-ngsetPortfoliosToCustomList">setPortfoliosToCustomList(uuid, List)</a><br/>    <a href="#widget-wm-portfolio-summary-ngdeleteCustomList">deleteCustomList(uuid)</a><br/>    <a href="#widget-wm-portfolio-summary-ngcreateCustomList">createCustomList(requestData)</a><br/>    <a href="#widget-wm-portfolio-summary-ngrenameCustomList">renameCustomList(uuid, list)</a><br/>    <a href="#widget-wm-portfolio-summary-ngremovePortfoliosFromList">removePortfoliosFromList(portfolios, uuid)</a><br/>    <a href="#widget-wm-portfolio-summary-ngtogglePortfolioAsFavorite">togglePortfolioAsFavorite(IBAN)</a><br/>    <a href="#widget-wm-portfolio-summary-ngpageSize">pageSize</a><br/>    <a href="#widget-wm-portfolio-summary-ngmaxNavPages">maxNavPages</a><br/>
- **Type Definitions**<br/>    <a href="#Portfolio">Portfolio</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>    <a href="#AssetClass">AssetClass</a><br/>    <a href="#attorney">attorney</a><br/>    <a href="#manager">manager</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## Preference

Widget preferences enum

| Property | Type | Description |
| :-- | :-- | :-- |
| PAGE_SIZE | String | Number of items per page |
| MAX_NAV_PAGES | String | Number of pagination items |
| DEFAULT_PAGE_SIZE | Number | Defines the default pageSize for the direct debits page |
| DEFAULT_MAX_NAV_PAGES | Number | Defines the default maxNavPages for the accounts page |

---

## IntentsKeys

Widget intents to be handled

---

## PortfolioSummaryController

Portfolio summary controller.

| Injector Key |
| :-- |
| *PortfolioSummaryController* |


### <a name="PortfolioSummaryController_getCustomListSelected"></a>*#getCustomListSelected()*

Get current selected custom list

##### Returns

Object - **

### <a name="PortfolioSummaryController_load"></a>*#load(page)*

Handles loading portfolios

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | Number | index of the page to load Load portfolios |

##### Returns

Promise of Array - **

### <a name="PortfolioSummaryController_setCustomListSelected"></a>*#setCustomListSelected(customList)*

Set current selected custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| customList | String | custom list id to set selected |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngviewPortfolioDetails"></a>*viewPortfolioDetails(portfolioId)*

Navigate to portfolio details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

---

### <a name="widget-wm-portfolio-summary-ngonSort"></a>*onSort(orderBy, direction)*

Loads sorted list of portfolios

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-nggetCustomListSelected"></a>*getCustomListSelected()*

Get current selected custom list

##### Returns

Object - **

---

### <a name="widget-wm-portfolio-summary-ngloadPortfolioSummary"></a>*loadPortfolioSummary(page)*

Handles loading porfolio summary

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | Object | index of the page to load |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngloadCustomLists"></a>*loadCustomLists()*

Loads all portfolio custom lists

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngsetPortfolioIdSelected"></a>*setPortfolioIdSelected(portfolioId)*

Set current selected portfolio id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | portfolio id to set selected |

---

### <a name="widget-wm-portfolio-summary-ngsetCustomListSelected"></a>*setCustomListSelected(customList)*

Persist selected custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| customList | Object | Custom list object to persist |

---

### <a name="widget-wm-portfolio-summary-ngsort"></a>*sort(orderBy, direction)*

Loads sorted list of portfolios

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

---

### <a name="widget-wm-portfolio-summary-ngsetPortfoliosToCustomList"></a>*setPortfoliosToCustomList(uuid, List)*

Sends all portfolios that will be added to given custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String | Identifier of custom list |
| List | Array | of portfolios |

##### Returns

Promise of String - *Uuid of custom list*

---

### <a name="widget-wm-portfolio-summary-ngdeleteCustomList"></a>*deleteCustomList(uuid)*

deletes custom list by uuid

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String | Identifier of custom list |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngcreateCustomList"></a>*createCustomList(requestData)*

Create custom list of portfolios.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestData | Object | request body data |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngrenameCustomList"></a>*renameCustomList(uuid, list)*

Rename custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| uuid | String | Identifier of custom list |
| list | Object | list with a name property |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngremovePortfoliosFromList"></a>*removePortfoliosFromList(portfolios, uuid)*

Removes portfolios from custom list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolios | Array of String | list of portfolios ids to remove from custom list |
| uuid | String | Identifier of custom list |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-ngtogglePortfolioAsFavorite"></a>*togglePortfolioAsFavorite(IBAN)*

Toggles portfolio Favorite status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Portfolio`s IBAN |

##### Returns

Promise of Array - **

---
### <a name="widget-wm-portfolio-summary-ngpageSize"></a>*pageSize*

Number of records to return per request

**Type:** *Number*


---
### <a name="widget-wm-portfolio-summary-ngmaxNavPages"></a>*maxNavPages*

Maximum number of navigation pages to display

**Type:** *Number*


---

## initialState

Initial state of porfolios store

| Property | Type | Description |
| :-- | :-- | :-- |
| portfolios | Object | an object of portfolios |
| initialLoading | Boolean | Boolean flag of initial loading |
| pageParams | Object | parameters of the page |
| errors | Object | portfolios errors |

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

Asset class object

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

## Templates

* *template.ng.html*

---
