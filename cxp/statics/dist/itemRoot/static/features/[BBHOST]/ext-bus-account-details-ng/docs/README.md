# ext-bus-account-details-ng


Version: **1.12.0**

Extension for account details

## Imports

* lib-bb-styles
* ui-bb-chartjs-chart-line-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-navigate-to-ng
* ui-bb-substitute-error-ng
* ui-bus-format-amount-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-tooltip

---

## Table of Contents
- **ext-bus-account-details-ng**<br/>    <a href="#ext-bus-account-details-nggetProductTypeTemplateId">getProductTypeTemplateId(type)</a><br/>    <a href="#ext-bus-account-details-ngformatBooleanToText">formatBooleanToText(value)</a><br/>    <a href="#ext-bus-account-details-nghasValue">hasValue(value)</a><br/>    <a href="#ext-bus-account-details-nggetFrequencyUnitKey">getFrequencyUnitKey(unit)</a><br/>    <a href="#ext-bus-account-details-ngisEmptyArray">isEmptyArray(value)</a><br/>    <a href="#ext-bus-account-details-nglineChartOptions">lineChartOptions()</a><br/>    <a href="#ext-bus-account-details-ngchartPlugins">chartPlugins</a><br/>    <a href="#ext-bus-account-details-nggetMaxMinLegend">getMaxMinLegend(dataSeries)</a><br/>    <a href="#ext-bus-account-details-nghandleErrors">handleErrors(errors)</a><br/>
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

### <a name="ext-bus-account-details-nggetProductTypeTemplateId"></a>*getProductTypeTemplateId(type)*

Generates account details template URL

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | String | The account type |

##### Returns

String - *Generated template URL*

---

### <a name="ext-bus-account-details-ngformatBooleanToText"></a>*formatBooleanToText(value)*

Transforms a boolean into human readable format

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | The boolean value |

##### Returns

String - *Formatted booelan*

---

### <a name="ext-bus-account-details-nghasValue"></a>*hasValue(value)*

Check if value is defined, not null and not empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-account-details-nggetFrequencyUnitKey"></a>*getFrequencyUnitKey(unit)*

Gets the translation key giving a frequency unit identifier

| Parameter | Type | Description |
| :-- | :-- | :-- |
| unit | String | Short representation of frequency unit. Possbile values are: D - day W - week M - month Y - year |

##### Returns

String - *Translation key label*

---

### <a name="ext-bus-account-details-ngisEmptyArray"></a>*isEmptyArray(value)*

Checks if it is an array and it is empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-account-details-nglineChartOptions"></a>*lineChartOptions()*

Configuration of balance history chart

##### Returns

Object - *Configuration of performance chart*

---
### <a name="ext-bus-account-details-ngchartPlugins"></a>*chartPlugins*

Array of plugins used to transform Chart.js rendering in the extension

**Type:** *Array*


---

### <a name="ext-bus-account-details-nggetMaxMinLegend"></a>*getMaxMinLegend(dataSeries)*

Find max and min for given data series of balance history

| Parameter | Type | Description |
| :-- | :-- | :-- |
| dataSeries | Array | Balance histiry data series |

##### Returns

Object - *with max and min*

---

### <a name="ext-bus-account-details-nghandleErrors"></a>*handleErrors(errors)*

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
