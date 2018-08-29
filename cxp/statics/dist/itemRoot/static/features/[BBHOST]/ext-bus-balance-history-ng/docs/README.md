# ext-bus-balance-history-ng


Version: **1.12.0**

Balance history

## Imports

* lib-bb-styles
* ui-bb-calendar-popup-ng
* ui-bb-chartjs-chart-line-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-navigate-to-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-format-amount-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-tooltip

---

## Table of Contents
- **ext-bus-balance-history-ng**<br/>    <a href="#ext-bus-balance-history-ngheaders">headers</a><br/>    <a href="#ext-bus-balance-history-ngisSortableActive">isSortableActive(sortable, $ctrl)</a><br/>    <a href="#ext-bus-balance-history-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-balance-history-ngisEmptyArray">isEmptyArray(value)</a><br/>    <a href="#ext-bus-balance-history-nggetMaxMinLegend">getMaxMinLegend(dataSeries)</a><br/>    <a href="#ext-bus-balance-history-nglineChartOptions">lineChartOptions()</a><br/>    <a href="#ext-bus-balance-history-ngchartPlugins">chartPlugins</a><br/>    <a href="#ext-bus-balance-history-ngapplyBalanceHistoryFilter">applyBalanceHistoryFilter($ctrl, timePeriod)</a><br/>    <a href="#ext-bus-balance-history-ngapplyBalanceHistoryDateFilter">applyBalanceHistoryDateFilter($ctrl, timePeriod)</a><br/>    <a href="#ext-bus-balance-history-nghandleErrors">handleErrors(errors)</a><br/>
- **Type Definitions**<br/>    <a href="#BalanceHistoryChartData">BalanceHistoryChartData</a><br/>    <a href="#DataSets">DataSets</a><br/>    <a href="#DataSetXY">DataSetXY</a><br/>

---

## CHART_DATASET_OPTION

chart data set options constants

---

## CSS_SELECTORS

chart css property value selectors

---

## CHART_OPTIONS

chart options constants

---
### <a name="ext-bus-balance-history-ngheaders"></a>*headers*

Filter buttons configuration

**Type:** *Array*


---

## balanceHistoryParams

Balance History params

---

### <a name="ext-bus-balance-history-ngisSortableActive"></a>*isSortableActive(sortable, $ctrl)*

Checks if the sortable column is the current one, table is sorted by the
active column

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Sortable configuration |
| $ctrl | Object | Current controller |

##### Returns

Boolean - *True if table is sorted by the column, false otherwise*

---

### <a name="ext-bus-balance-history-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-balance-history-ngisEmptyArray"></a>*isEmptyArray(value)*

Checks if it is an array and it is empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-balance-history-nggetMaxMinLegend"></a>*getMaxMinLegend(dataSeries)*

Find max and min for given data series of balance history

| Parameter | Type | Description |
| :-- | :-- | :-- |
| dataSeries | Array | Balance histiry data series |

##### Returns

Object - *with max and min*

---

### <a name="ext-bus-balance-history-nglineChartOptions"></a>*lineChartOptions()*

Configuration of balance history chart

##### Returns

Object - *Configuration of performance chart*

---
### <a name="ext-bus-balance-history-ngchartPlugins"></a>*chartPlugins*

Array of plugins used to transform Chart.js rendering in the extension

**Type:** *Array*


---

### <a name="ext-bus-balance-history-ngapplyBalanceHistoryFilter"></a>*applyBalanceHistoryFilter($ctrl, timePeriod)*

Get Balance history filtered by time period enumerators

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| timePeriod | String | time period enum ('lastDay', 'lastWeek', 'lastMonth', 'lastYear', 'all') |

##### Returns

Promise of [BalanceHistory](model-bb-product-summary-ng.html#BalanceHistory), [ModelError](model-bb-product-summary-ng.html#ModelError) - *Balance history data for given arrengements ids filtered*

---

### <a name="ext-bus-balance-history-ngapplyBalanceHistoryDateFilter"></a>*applyBalanceHistoryDateFilter($ctrl, timePeriod)*

Get Balance history filtered by time period from date picker filter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| timePeriod | String | time period enum ('lastDay', 'lastWeek', 'lastMonth', 'lastYear', 'all') |

##### Returns

Promise of [BalanceHistory](model-bb-product-summary-ng.html#BalanceHistory), [ModelError](model-bb-product-summary-ng.html#ModelError) - *Balance history data for given arrengements ids filtered*

---

### <a name="ext-bus-balance-history-nghandleErrors"></a>*handleErrors(errors)*

Handles one or multiple errors messages, mapping error key with propper message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| errors | Array |  |

##### Returns

String - *message*

---

## Type Definitions


### <a name="BalanceHistoryChartData"></a>*BalanceHistoryChartData*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String | Arrangement Id for mapping balance history |
| label | Array of Number | label data for x-axis |
| datasets | Array of [DataSets](#DataSets) | label data for x-axis |

### <a name="DataSets"></a>*DataSets*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| borderColor | String | Border color for data set |
| backgroundColor | String | Area Fill Background color |
| pointBorderColor | Array of String | Border color for each point |
| pointBackgroundColor | Array of String | Background color for each point |
| pointRadius | Array of String | Radius value for each point |
| pointBorderWidth | String | Point border width |
| pointHitRadius | String | Radius width for point hit |
| lineTension | String | A line tension value on line graphs |
| fill | Boolean | fill the line chart (true/false) |
| data | Array of [DataSetXY](#DataSetXY) | Data that is shown on x/y axis |

### <a name="DataSetXY"></a>*DataSetXY*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| x | String | X-axis value ticks |
| y | String | Y-axis value ticks |

---
