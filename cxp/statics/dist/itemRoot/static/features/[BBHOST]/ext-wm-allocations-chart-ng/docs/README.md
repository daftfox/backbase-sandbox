# ext-wm-allocations-chart-ng


Version: **2.12.2**

Spiderweb chart extension for allocations widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* lib-wm-compose-selectors
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-wm-chartjs-spiderweb-ng

---

## Example

```javascript
<!-- allocations widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-allocations-chart-ng</value>
</property>
```

## Table of Contents
- **ext-wm-allocations-chart-ng**<br/>    <a href="#ext-wm-allocations-chart-ngerrors">errors</a><br/>    <a href="#ext-wm-allocations-chart-nggetCustomTooltip">getCustomTooltip(tooltipModel, tooltipWrap, series)</a><br/>    <a href="#ext-wm-allocations-chart-nggetRadarDatasetOptions">getRadarDatasetOptions()</a><br/>    <a href="#ext-wm-allocations-chart-ngisAllocationsAvailable">isAllocationsAvailable()</a><br/>    <a href="#ext-wm-allocations-chart-ngallocationsComparator">allocationsComparator()</a><br/>    <a href="#ext-wm-allocations-chart-nggetAllocations">getAllocations()</a><br/>    <a href="#ext-wm-allocations-chart-nggetRadarOptions">getRadarOptions()</a><br/>    <a href="#ext-wm-allocations-chart-ngisClass">isClass()</a><br/>
- **Type Definitions**<br/>    <a href="#Allocation">Allocation</a><br/>

---
### <a name="ext-wm-allocations-chart-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-allocations-chart-nggetCustomTooltip"></a>*getCustomTooltip(tooltipModel, tooltipWrap, series)*

Sets styling and content for custom tooltip

| Parameter | Type | Description |
| :-- | :-- | :-- |
| tooltipModel | Object | Chartjs model of selected item |
| tooltipWrap | Object | Tooltip element link |
| series | Array | Array of chart data |

##### Returns

[void](#void) - **

---

## radarOptions

Describes predefined options for radar chart

---

### <a name="ext-wm-allocations-chart-nggetRadarDatasetOptions"></a>*getRadarDatasetOptions()*

Gets predefined options for radar chart dataset

##### Returns

Object - *Radar dataset options*

---

### <a name="ext-wm-allocations-chart-ngisAllocationsAvailable"></a>*isAllocationsAvailable()*

Checks if allocations' data is available

##### Returns

Boolean - *returns true if allocations data is present*

---

### <a name="ext-wm-allocations-chart-ngallocationsComparator"></a>*allocationsComparator()*

Compares allocations % value

##### Returns

Number - *return positive or negative number*

---

### <a name="ext-wm-allocations-chart-nggetAllocations"></a>*getAllocations()*

Gets allocations data and transforms it for spiderweb chart

##### Returns

Array - *Allocations' data*

---

### <a name="ext-wm-allocations-chart-nggetRadarOptions"></a>*getRadarOptions()*

Gets predefined options for radar chart

##### Returns

Object - *Radar options*

---

### <a name="ext-wm-allocations-chart-ngisClass"></a>*isClass()*

Checks if asset-classes is selected

##### Returns

Boolean - **

---

## getError

Returns error object by error code

## Type Definitions


### <a name="Allocation"></a>*Allocation*

Allocation type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| undefined | String |  |

---
