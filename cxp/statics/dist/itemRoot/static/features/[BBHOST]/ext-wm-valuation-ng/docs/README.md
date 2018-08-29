# ext-wm-valuation-ng


Version: **3.12.2**

Default extension for valuation widget.

## Imports

* lib-bb-model-errors
* lib-bb-styles
* lib-wm-compose-selectors
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
<!-- valuation widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-valuation-ng</value>
</property>
```

## Table of Contents
- **ext-wm-valuation-ng**<br/>    <a href="#ext-wm-valuation-ngerrors">errors</a><br/>    <a href="#ext-wm-valuation-nggetPeriods">getPeriods()</a><br/>    <a href="#ext-wm-valuation-ngGRANULARITY">GRANULARITY</a><br/>    <a href="#ext-wm-valuation-ngvaluationData">valuationData(data)</a><br/>    <a href="#ext-wm-valuation-nggetGranularity">getGranularity()</a><br/>    <a href="#ext-wm-valuation-ngchartVariationOptions">chartVariationOptions()</a><br/>    <a href="#ext-wm-valuation-nggetVariationOptions">getVariationOptions()</a><br/>    <a href="#ext-wm-valuation-nggetError">getError()</a><br/>    <a href="#ext-wm-valuation-ngareBothChartsDisplayed">areBothChartsDisplayed()</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#ValuationChartsData">ValuationChartsData</a><br/>    <a href="#BBSeries">BBSeries</a><br/>    <a href="#Dataset">Dataset</a><br/>

---
### <a name="ext-wm-valuation-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-valuation-nggetPeriods"></a>*getPeriods()*

Generates periods to be displayed in periods select

##### Returns

Array - *Periods to be used in periods select*

---
### <a name="ext-wm-valuation-ngGRANULARITY"></a>*GRANULARITY*

List of granularity options to be used in granularity select

**Type:** *Array*


---

### <a name="ext-wm-valuation-ngvaluationData"></a>*valuationData(data)*

Transforms loaded valuation data into structure applicable for charts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Loaded valuation data |

##### Returns

[ValuationChartsData](#ValuationChartsData) - *Valuation data in format applicable for charts*

---

### <a name="ext-wm-valuation-nggetGranularity"></a>*getGranularity()*

Retrieves selected granularity from stateContainer

##### Returns

[GRANULARITY_DAILY](#GRANULARITY_DAILY) or [GRANULARITY_WEEKLY](#GRANULARITY_WEEKLY) or [GRANULARITY_MONTHLY](#GRANULARITY_MONTHLY) or [GRANULARITY_QUARTERLY](#GRANULARITY_QUARTERLY) - *selected granularity*

---

## chartValuationOptions

Configuration of valuation chart

---

### <a name="ext-wm-valuation-ngchartVariationOptions"></a>*chartVariationOptions()*

Configuration of variation chart

##### Returns

Object - *Configuration of variation chart*

---

### <a name="ext-wm-valuation-nggetVariationOptions"></a>*getVariationOptions()*

Gets options for variation chart

##### Returns

Object - *Variation chart options*

---

### <a name="ext-wm-valuation-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*

---

### <a name="ext-wm-valuation-ngareBothChartsDisplayed"></a>*areBothChartsDisplayed()*

Detects whether both charts (valuation and variation) should be displayed to user

##### Returns

Boolean - **

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="ValuationChartsData"></a>*ValuationChartsData*

Data in format applicable for charts

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | [BBSeries](#BBSeries) | series for charts |
| data | [BBSeries](#BBSeries) | series for charts |

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
