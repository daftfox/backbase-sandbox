# widget-wm-portfolio-summary-dashboard-ng


Version: **1.16.2**

Portfolio summary dashboard widget.

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
- **widget-wm-portfolio-summary-dashboard-ng**<br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngMAX_SIZE_OF_PORTFOLIOS_COLLECTION">MAX_SIZE_OF_PORTFOLIOS_COLLECTION</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngUSER_ORDER">USER_ORDER</a><br/>
- **PortfolioSummaryController**<br/>    <a href="#PortfolioSummaryController_load">#load()</a><br/>
- **widget-wm-portfolio-summary-dashboard-ng**<br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngviewPortfolioDetails">viewPortfolioDetails(portfolioId)</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngupdatePortfolio">updatePortfolio(portfolio)</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngsaveOrder">saveOrder(order)</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngsavePortfoliosOrder">savePortfoliosOrder(order)</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngsavePortfolioAlias">savePortfolioAlias(IBAN, aliasName)</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngloadPortfolioSummary">loadPortfolioSummary()</a><br/>    <a href="#widget-wm-portfolio-summary-dashboard-ngsetPortfolioIdSelected">setPortfolioIdSelected(portfolioId)</a><br/>
- **Type Definitions**<br/>    <a href="#Portfolio">Portfolio</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>    <a href="#AssetClass">AssetClass</a><br/>    <a href="#attorney">attorney</a><br/>    <a href="#manager">manager</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## IntentsKeys

Widget intents to be handled

---
### <a name="widget-wm-portfolio-summary-dashboard-ngMAX_SIZE_OF_PORTFOLIOS_COLLECTION"></a>*MAX_SIZE_OF_PORTFOLIOS_COLLECTION*

Maximum size of client`s portfolios collection.
This value appears because of size default value 10 in BB traits.
This is because current widget uses end point requiring size param for pagination,
but not having pagination itself.

**Type:** *Number*


---
### <a name="widget-wm-portfolio-summary-dashboard-ngUSER_ORDER"></a>*USER_ORDER*

Key for portfolios order specified by user

**Type:** *String*


---

## PortfolioSummaryController

Portfolio summary controller.

| Injector Key |
| :-- |
| *PortfolioSummaryController* |


### <a name="PortfolioSummaryController_load"></a>*#load()*

Handles loading portfolios

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-dashboard-ngviewPortfolioDetails"></a>*viewPortfolioDetails(portfolioId)*

Navigate to portfolio details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |

---

### <a name="widget-wm-portfolio-summary-dashboard-ngupdatePortfolio"></a>*updatePortfolio(portfolio)*

Saves portfolio with new alias.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolio | Object | Selected portfolio |

---

### <a name="widget-wm-portfolio-summary-dashboard-ngsaveOrder"></a>*saveOrder(order)*

Saves portfolios order.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| order | Array of String | Array of portfolios IBANs |

##### Returns

Promise of Array of String - *Promise resolving to array of portfolios IBAN*

---

### <a name="widget-wm-portfolio-summary-dashboard-ngsavePortfoliosOrder"></a>*savePortfoliosOrder(order)*

Handles saving of portfolios order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| order | Array of String | Array of portfolios IBANs |

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-dashboard-ngsavePortfolioAlias"></a>*savePortfolioAlias(IBAN, aliasName)*

Handles saving of portfolio with new alias

| Parameter | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Portfolio IBAN |
| aliasName | String | New alias name |

---

### <a name="widget-wm-portfolio-summary-dashboard-ngloadPortfolioSummary"></a>*loadPortfolioSummary()*

Handles loading porfolio summary

##### Returns

Promise of Array - **

---

### <a name="widget-wm-portfolio-summary-dashboard-ngsetPortfolioIdSelected"></a>*setPortfolioIdSelected(portfolioId)*

Set current selected portfolio id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | portfolio id to set selected |

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
