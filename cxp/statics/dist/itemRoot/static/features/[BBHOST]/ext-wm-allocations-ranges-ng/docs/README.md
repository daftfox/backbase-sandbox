# ext-wm-allocations-ranges-ng


Version: **2.12.2**

Ranges chart extension for allocations widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-wm-chartjs-ranges-ng

---

## Example

```javascript
<!-- allocations widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-allocations-ranges-ng</value>
</property>
```

## Table of Contents
- **ext-wm-allocations-ranges-ng**<br/>    <a href="#ext-wm-allocations-ranges-ngerrors">errors</a><br/>    <a href="#ext-wm-allocations-ranges-ngisAllocationsAvailable">isAllocationsAvailable()</a><br/>    <a href="#ext-wm-allocations-ranges-nggetAllocationsRangesData">getAllocationsRangesData()</a><br/>    <a href="#ext-wm-allocations-ranges-nggetCustomTooltip">getCustomTooltip(tooltipModel, tooltipWrap, series)</a><br/>    <a href="#ext-wm-allocations-ranges-nggetAllocationsDotsData">getAllocationsDotsData()</a><br/>    <a href="#ext-wm-allocations-ranges-ngisClass">isClass()</a><br/>
- **Type Definitions**<br/>    <a href="#Allocation">Allocation</a><br/>

---
### <a name="ext-wm-allocations-ranges-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-allocations-ranges-ngisAllocationsAvailable"></a>*isAllocationsAvailable()*

Checks if allocations' data is available

##### Returns

Boolean - *returns true if allocations data is present*

---

### <a name="ext-wm-allocations-ranges-nggetAllocationsRangesData"></a>*getAllocationsRangesData()*

Gets allocations data and transforms it for ranges chart

##### Returns

Array - *Allocations' data transformed for ranges chart*

---

### <a name="ext-wm-allocations-ranges-nggetCustomTooltip"></a>*getCustomTooltip(tooltipModel, tooltipWrap, series)*

Sets styling and content for custom tooltip

| Parameter | Type | Description |
| :-- | :-- | :-- |
| tooltipModel | Object | Chartjs model of selected item |
| tooltipWrap | Object | Tooltip element link |
| series | Array | Array of chart data |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-ranges-nggetAllocationsDotsData"></a>*getAllocationsDotsData()*

Gets allocations data and transforms it for dots chart

##### Returns

Array - *Allocations' data transformed for dots chart*

---

### <a name="ext-wm-allocations-ranges-ngisClass"></a>*isClass()*

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
