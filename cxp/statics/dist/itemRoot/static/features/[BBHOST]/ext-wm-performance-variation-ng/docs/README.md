# ext-wm-performance-variation-ng


Version: **2.12.2**

Default extension for performance variation widget.

## Imports

* lib-bb-model-errors
* lib-bb-styles
* lib-wm-compose-selectors
* ui-bb-calendar-popup-ng
* ui-bb-chartjs-chart-bar-ng
* ui-bb-dropdown-select-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- performance variation widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-wm-performance-variation-ng</value>
</property>
```

## Table of Contents
- **ext-wm-performance-variation-ng**<br/>    <a href="#ext-wm-performance-variation-ngerrors">errors</a><br/>    <a href="#ext-wm-performance-variation-ngperiods">periods</a><br/>    <a href="#ext-wm-performance-variation-ngformatAmount">formatAmount(value)</a><br/>    <a href="#ext-wm-performance-variation-nggetGranularity">getGranularity()</a><br/>    <a href="#ext-wm-performance-variation-nggetCustomTooltip">getCustomTooltip(state, data)</a><br/>    <a href="#ext-wm-performance-variation-ngchartVariationOptions">chartVariationOptions(state)</a><br/>    <a href="#ext-wm-performance-variation-nggetError">getError()</a><br/>    <a href="#ext-wm-performance-variation-ngisDataAvailable">isDataAvailable()</a><br/>    <a href="#ext-wm-performance-variation-nggetPerformanceVariationSeries">getPerformanceVariationSeries()</a><br/>    <a href="#ext-wm-performance-variation-nggetVariationOptions">getVariationOptions()</a><br/>    <a href="#ext-wm-performance-variation-ngsetActivePeriod">setActivePeriod(index)</a><br/>    <a href="#ext-wm-performance-variation-nggetDatePickerRange">getDatePickerRange()</a><br/>    <a href="#ext-wm-performance-variation-nggetStartDateConfig">getStartDateConfig()</a><br/>    <a href="#ext-wm-performance-variation-nggetEndDateConfig">getEndDateConfig()</a><br/>    <a href="#ext-wm-performance-variation-nggetHoverSeries">getHoverSeries()</a><br/>    <a href="#ext-wm-performance-variation-nggetHoverOptions">getHoverOptions(state)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>

---
### <a name="ext-wm-performance-variation-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---
### <a name="ext-wm-performance-variation-ngperiods"></a>*periods*

Set of available periods for chart

**Type:** *Array*


---

## chartPlugins

Holds options of chart's plugins

---

### <a name="ext-wm-performance-variation-ngformatAmount"></a>*formatAmount(value)*

Shows value as it is or adds two decimal zeroes if needed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Number | Value to format |

##### Returns

Number - *Formatted value*

---

### <a name="ext-wm-performance-variation-nggetGranularity"></a>*getGranularity()*

Retrieves selected granularity from stateContainer

##### Returns

[GRANULARITY_DAILY](#GRANULARITY_DAILY) or [GRANULARITY_WEEKLY](#GRANULARITY_WEEKLY) or [GRANULARITY_MONTHLY](#GRANULARITY_MONTHLY) or [GRANULARITY_QUARTERLY](#GRANULARITY_QUARTERLY) - *selected granularity*

---

### <a name="ext-wm-performance-variation-nggetCustomTooltip"></a>*getCustomTooltip(state, data)*

Sets styling and content for custom tooltip

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | State of widget |
| data | Object | Chartjs model of selected item |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-performance-variation-ngchartVariationOptions"></a>*chartVariationOptions(state)*

Configuration of variation chart

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | State of widget |

##### Returns

Object - *Configuration of variation chart*

---

### <a name="ext-wm-performance-variation-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*

---

### <a name="ext-wm-performance-variation-ngisDataAvailable"></a>*isDataAvailable()*

Tells whether extension retrieved data

##### Returns

Boolean - *Flag that tells whether data is available*

---

### <a name="ext-wm-performance-variation-nggetPerformanceVariationSeries"></a>*getPerformanceVariationSeries()*

Selector which retrieves perfromance data out of store
and converts it into chartjs suitable format

##### Returns

Object - *Series object of performance data for chartjs library*

---

### <a name="ext-wm-performance-variation-nggetVariationOptions"></a>*getVariationOptions()*

Gets options for variation chart

##### Returns

Object - *Variation chart options*

---

### <a name="ext-wm-performance-variation-ngsetActivePeriod"></a>*setActivePeriod(index)*

Sets active period of time by given index of selected period

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of selected period |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-performance-variation-nggetDatePickerRange"></a>*getDatePickerRange()*

Gets range of datepicker

##### Returns

Object - *Date picker range*

---

### <a name="ext-wm-performance-variation-nggetStartDateConfig"></a>*getStartDateConfig()*

Gets start date config object

##### Returns

Object - *Start date config*

---

### <a name="ext-wm-performance-variation-nggetEndDateConfig"></a>*getEndDateConfig()*

Gets end date config object

##### Returns

Object - *End date config*

---

### <a name="ext-wm-performance-variation-nggetHoverSeries"></a>*getHoverSeries()*

Selector which retrieves perfromance data out of store
and converts it into chartjs suitable format

##### Returns

Object - *Series object of performance data for hover area*

---

### <a name="ext-wm-performance-variation-nggetHoverOptions"></a>*getHoverOptions(state)*

Configuration of hover chart area

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | State of widget |

##### Returns

Object - *Configuration of hover chart area*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

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

---
