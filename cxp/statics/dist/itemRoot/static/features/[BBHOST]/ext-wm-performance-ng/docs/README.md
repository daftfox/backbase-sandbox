# ext-wm-performance-ng


Version: **3.12.2**

Portfolio performance, shows porftfolio performance indicators
in form of line chart

## Imports

* lib-bb-model-errors
* lib-bb-styles
* lib-wm-compose-selectors
* ui-bb-chartjs-chart-line-ng
* ui-bb-dropdown-select-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- portfolio widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-performance-ng</value>
</property>
```

## Table of Contents
- **ext-wm-performance-ng**<br/>    <a href="#ext-wm-performance-ngerrors">errors</a><br/>    <a href="#ext-wm-performance-nggetPeriods">getPeriods()</a><br/>    <a href="#ext-wm-performance-ngchartPerformanceOptions">chartPerformanceOptions()</a><br/>    <a href="#ext-wm-performance-nggetChartPerformanceOptions">getChartPerformanceOptions()</a><br/>    <a href="#ext-wm-performance-ngperformanceData">performanceData()</a><br/>    <a href="#ext-wm-performance-nggetError">getError()</a><br/>    <a href="#ext-wm-performance-ngchangeDropdownSide">changeDropdownSide()</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#Performance">Performance</a><br/>

---
### <a name="ext-wm-performance-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-performance-nggetPeriods"></a>*getPeriods()*

Generates periods to be displayed in periods select

##### Returns

Array - *Periods to be used in periods select*

---

### <a name="ext-wm-performance-ngchartPerformanceOptions"></a>*chartPerformanceOptions()*

Configuration of performance chart

##### Returns

Object - *Configuration of performance chart*

---

### <a name="ext-wm-performance-nggetChartPerformanceOptions"></a>*getChartPerformanceOptions()*

Selector for performance chart options

##### Returns

Object - *Performance chart options*

---

### <a name="ext-wm-performance-ngperformanceData"></a>*performanceData()*

Selector for performance data transformation into data applicable for chart

---

### <a name="ext-wm-performance-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*

---

### <a name="ext-wm-performance-ngchangeDropdownSide"></a>*changeDropdownSide()*

Align dropdown to the right side instead of default left side

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="Performance"></a>*Performance*

Performance type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| undefined | String |  |

---
