# ext-wm-portfolio-summary-dashboard-ng


Version: **2.12.2**

Default extension for portfolio summary dashboard widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* ui-bb-chartjs-chart-donut-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-focus-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ui-tree
* vendor-bb-uib-popover
* vendor-bb-uib-tooltip

---

## Example

```javascript
<!-- portfolio widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-portfolio-summary-dashboard-ng</value>
</property>
```

## Table of Contents
- **ext-wm-portfolio-summary-dashboard-ng**<br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngerrors">errors</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngPRECISION">PRECISION</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngDISMISS_MESSAGE_TIME">DISMISS_MESSAGE_TIME</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngshowNotification">showNotification(i18nKeyName)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngnotificationError">notificationError(i18nKeyName)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nggetNotifications">getNotifications()</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngcloseNotification">closeNotification()</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nggetNetCashTotalAmount">getNetCashTotalAmount(inCashTotalAmountIncoming, outCashTotalAmount)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nglocalizeNumber">localizeNumber(number)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngshowSign">showSign(number)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngchartOptions">chartOptions</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngplugins">plugins</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngisPortfoliosAvailable">isPortfoliosAvailable(portfolios)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nggetLegendRowClass">getLegendRowClass($index)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngportfolios">portfolios(data)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngshowChangeNameInput">showChangeNameInput(portfolioSelected, item)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngchangeAlias">changeAlias($ctrl, item)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngshowInput">showInput(item)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nggetError">getError()</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngisOpen">isOpen(id, index)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-ngonToggle">onToggle(id)</a><br/>    <a href="#ext-wm-portfolio-summary-dashboard-nggetDragAndDropOptions">getDragAndDropOptions($ctrl)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#Portfolio">Portfolio</a><br/>    <a href="#BBSeriesPortfolio">BBSeriesPortfolio</a><br/>    <a href="#PortfolioDataset">PortfolioDataset</a><br/>    <a href="#Dataset">Dataset</a><br/>    <a href="#AssetClass">AssetClass</a><br/>    <a href="#attorney">attorney</a><br/>    <a href="#manager">manager</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>

## Exports


## Hooks

Hooks for widget-wm-portfolio-summary-ng

---
### <a name="ext-wm-portfolio-summary-dashboard-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---
### <a name="ext-wm-portfolio-summary-dashboard-ngPRECISION"></a>*PRECISION*

Number of decimals to display

**Type:** *Number*


---
### <a name="ext-wm-portfolio-summary-dashboard-ngDISMISS_MESSAGE_TIME"></a>*DISMISS_MESSAGE_TIME*

Dismiss message time of notification

**Type:** *Number*


---

## notifications

Contains default notification config (if any) used to init notification popup

---

### <a name="ext-wm-portfolio-summary-dashboard-ngshowNotification"></a>*showNotification(i18nKeyName)*

Function that displays notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| i18nKeyName | String | i18n name of notification to display in message |

---

### <a name="ext-wm-portfolio-summary-dashboard-ngnotificationError"></a>*notificationError(i18nKeyName)*

Function that invokes a error notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| i18nKeyName | String | i18n name of notification to display in message |

---

### <a name="ext-wm-portfolio-summary-dashboard-nggetNotifications"></a>*getNotifications()*

Function that gets notifications configuration object

##### Returns

Object - **

---

### <a name="ext-wm-portfolio-summary-dashboard-ngcloseNotification"></a>*closeNotification()*

Function that closes notifications

---

### <a name="ext-wm-portfolio-summary-dashboard-nggetNetCashTotalAmount"></a>*getNetCashTotalAmount(inCashTotalAmountIncoming, outCashTotalAmount)*

Substitutes outCashTotalAmount from inCashTotalAmount value and returns new value of netCashTotalAmount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inCashTotalAmountIncoming | Number | Cash for the period of time amaunt value |
| outCashTotalAmount | Number | Outgoing cash for the period of time amaunt value |

##### Returns

Number - **

---

### <a name="ext-wm-portfolio-summary-dashboard-nglocalizeNumber"></a>*localizeNumber(number)*

Transform number to its localized string representation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | number to localize |

##### Returns

String - **

---

### <a name="ext-wm-portfolio-summary-dashboard-ngshowSign"></a>*showSign(number)*

Appends + or - sign if number is positive or negative

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | Number inputed |

##### Returns

String - *String with appended sign and number*

---
### <a name="ext-wm-portfolio-summary-dashboard-ngchartOptions"></a>*chartOptions*

Object with chart options that need to be overriden

**Type:** *[ChartjsSettings](#ChartjsSettings)*


---
### <a name="ext-wm-portfolio-summary-dashboard-ngplugins"></a>*plugins*

Array with plugins objects for chartjs

**Type:** *Array*


---

### <a name="ext-wm-portfolio-summary-dashboard-ngisPortfoliosAvailable"></a>*isPortfoliosAvailable(portfolios)*

Checks if portfolios data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolios | Object |  |

##### Returns

Boolean - *returns true if portfolios data is not present*

---

### <a name="ext-wm-portfolio-summary-dashboard-nggetLegendRowClass"></a>*getLegendRowClass($index)*

Returns correct class for element

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $index | Number |  |

##### Returns

String - *returns class name*

---

### <a name="ext-wm-portfolio-summary-dashboard-ngportfolios"></a>*portfolios(data)*

Selector for portfolio data processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Array of [Portfolio](#Portfolio) | original data object |

##### Returns

Array of [Portfolio](#Portfolio) - *data processed data object*

---

### <a name="ext-wm-portfolio-summary-dashboard-ngshowChangeNameInput"></a>*showChangeNameInput(portfolioSelected, item)*

Checking if the condition is met to display the editable input
for changing the name or alias.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioSelected | Object | The selected portfolio. |
| item | Object | The portfolio that needs to be checked. |

##### Returns

Boolean - *true if condition is met or false otherwise*

---

### <a name="ext-wm-portfolio-summary-dashboard-ngchangeAlias"></a>*changeAlias($ctrl, item)*

Checking the alias name and update it if it is needed.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Controller of the widget |
| item | Object | The portfolio that needs to be checked and updated. |

---

### <a name="ext-wm-portfolio-summary-dashboard-ngshowInput"></a>*showInput(item)*

Displays input field if icon was clicked.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | The selected portfolio. |

---

### <a name="ext-wm-portfolio-summary-dashboard-nggetError"></a>*getError()*

Returns error object by error code

---

### <a name="ext-wm-portfolio-summary-dashboard-ngisOpen"></a>*isOpen(id, index)*

Tells, whether item's open property is truthy

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |
| index | Number | Index of portfolio in portfolios collection |

##### Returns

Boolean - *Flag (true|false) that stands for open state of item*

---

### <a name="ext-wm-portfolio-summary-dashboard-ngonToggle"></a>*onToggle(id)*

Changes open state of item to the opposite

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |

##### Returns

Map - *Map of items*

---

### <a name="ext-wm-portfolio-summary-dashboard-nggetDragAndDropOptions"></a>*getDragAndDropOptions($ctrl)*

Returns drag and drop options.
Specify `dropped` callback saving new order of portfolios

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Controller of the widget |

##### Returns

Object - *Options of drag and drop library*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

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
| dataseries | Array of [BBSeriesPortfolio](#BBSeriesPortfolio) | data in format suitable for chart UI components |

### <a name="BBSeriesPortfolio"></a>*BBSeriesPortfolio*

Portfolio specific BBSeries object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array chart slices labels |
| datasets | Array of [PortfolioDataset](#PortfolioDataset) | Array of chart datasets |

### <a name="PortfolioDataset"></a>*PortfolioDataset*

Dataset object for chart data

*Extends*: [Dataset](#Dataset)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| backgroundColor | Array of String | Array which represent rgb colors of chart |

### <a name="Dataset"></a>*Dataset*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points for chart slices |

### <a name="AssetClass"></a>*AssetClass*

Assetclass object

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

### <a name="ChartjsSettings"></a>*ChartjsSettings*

Settings object with options available for bar chart.
More info [http://www.chartjs.org/docs/latest/charts/bar.html](http://www.chartjs.org/docs/latest/charts/bar.html)

**Type:** *Object*


---
