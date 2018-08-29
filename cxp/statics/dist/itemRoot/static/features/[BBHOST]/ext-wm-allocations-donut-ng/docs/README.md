# ext-wm-allocations-donut-ng


Version: **2.12.2**

Donut chart extension for allocations widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* ui-bb-chartjs-chart-donut-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng

---

## Example

```javascript
<!-- allocations widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-allocations-donut-ng</value>
</property>
```

## Table of Contents
- **ext-wm-allocations-donut-ng**<br/>    <a href="#ext-wm-allocations-donut-ngerrors">errors</a><br/>    <a href="#ext-wm-allocations-donut-ngisAllocationsAvailable">isAllocationsAvailable()</a><br/>    <a href="#ext-wm-allocations-donut-ngallocationsComparator">allocationsComparator()</a><br/>    <a href="#ext-wm-allocations-donut-nggetSortedAllocations">getSortedAllocations(allocations)</a><br/>    <a href="#ext-wm-allocations-donut-nggetAllocations">getAllocations()</a><br/>    <a href="#ext-wm-allocations-donut-nggetColors">getColors()</a><br/>    <a href="#ext-wm-allocations-donut-nggetChartDataSeries">getChartDataSeries()</a><br/>    <a href="#ext-wm-allocations-donut-ngisClass">isClass()</a><br/>    <a href="#ext-wm-allocations-donut-nggetDatatset">getDatatset()</a><br/>    <a href="#ext-wm-allocations-donut-nggetSectorsArray">getSectorsArray()</a><br/>    <a href="#ext-wm-allocations-donut-ngisSectorSelected">isSectorSelected(index)</a><br/>    <a href="#ext-wm-allocations-donut-ngcolorSector">colorSector(color, index)</a><br/>    <a href="#ext-wm-allocations-donut-ngcolorSectors">colorSectors()</a><br/>    <a href="#ext-wm-allocations-donut-ngunselectSector">unselectSector()</a><br/>    <a href="#ext-wm-allocations-donut-ngcountNewRadius">countNewRadius(outerRadius)</a><br/>    <a href="#ext-wm-allocations-donut-ngselectSector">selectSector(sector)</a><br/>    <a href="#ext-wm-allocations-donut-ngtryToExpandSector">tryToExpandSector(sector, onSectorChange)</a><br/>    <a href="#ext-wm-allocations-donut-ngonDonutChartSectorHoverAnimation">onDonutChartSectorHoverAnimation(chartInstance, event)</a><br/>    <a href="#ext-wm-allocations-donut-ngchartOptions">chartOptions</a><br/>    <a href="#ext-wm-allocations-donut-ngonMouseLegendEnter">onMouseLegendEnter(index)</a><br/>    <a href="#ext-wm-allocations-donut-ngonMouseLegendLeave">onMouseLegendLeave()</a><br/>    <a href="#ext-wm-allocations-donut-ngregisterScope">registerScope(scope)</a><br/>    <a href="#ext-wm-allocations-donut-ngshowSign">showSign(number)</a><br/>    <a href="#ext-wm-allocations-donut-nggetSelectedItem">getSelectedItem(index)</a><br/>    <a href="#ext-wm-allocations-donut-ngcreateSectionClickHandler">createSectionClickHandler(viewAssetsInPositions, event, item)</a><br/>    <a href="#ext-wm-allocations-donut-ngonDetailsClick">onDetailsClick(viewAssetsInPositions, index)</a><br/>    <a href="#ext-wm-allocations-donut-ngformatAmount">formatAmount(value)</a><br/>
- **Type Definitions**<br/>    <a href="#Allocation">Allocation</a><br/>

---
### <a name="ext-wm-allocations-donut-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-allocations-donut-ngisAllocationsAvailable"></a>*isAllocationsAvailable()*

Checks if allocations' data is available

##### Returns

Boolean - *returns true if allocations data is present*

---

### <a name="ext-wm-allocations-donut-ngallocationsComparator"></a>*allocationsComparator()*

Compares allocations % value

##### Returns

Number - *return positive or negative number*

---

### <a name="ext-wm-allocations-donut-nggetSortedAllocations"></a>*getSortedAllocations(allocations)*

Sorts allocations by comparator

| Parameter | Type | Description |
| :-- | :-- | :-- |
| allocations | Array | Array of allocations |

##### Returns

Array - *Allocations sorted by percentage value*

---

### <a name="ext-wm-allocations-donut-nggetAllocations"></a>*getAllocations()*

Gets allocations data and transforms it for spiderweb chart

##### Returns

Array - *Allocations' data*

---

### <a name="ext-wm-allocations-donut-nggetColors"></a>*getColors()*

Gets colors for chart

##### Returns

Array - *Colors for chart*

---

### <a name="ext-wm-allocations-donut-nggetChartDataSeries"></a>*getChartDataSeries()*

Forms data series for chart

##### Returns

Object - *Data series with allocations' data for chart*

---

### <a name="ext-wm-allocations-donut-ngisClass"></a>*isClass()*

Checks if asset-classes is selected

##### Returns

Boolean - **

---

### <a name="ext-wm-allocations-donut-nggetDatatset"></a>*getDatatset()*

Forms dataset for chart

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-nggetSectorsArray"></a>*getSectorsArray()*

Gets array of all sectors for chart

##### Returns

Array - *Array with sectors for chart*

---

### <a name="ext-wm-allocations-donut-ngisSectorSelected"></a>*isSectorSelected(index)*

Informs whether sector with given index is selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of a given sector |

##### Returns

Boolean - *Flag that informs whether given sector is selected*

---

### <a name="ext-wm-allocations-donut-ngcolorSector"></a>*colorSector(color, index)*

Selects color or inactive color by given index

| Parameter | Type | Description |
| :-- | :-- | :-- |
| color | String | Sector's active color |
| index | Number | Index of sector |

##### Returns

String - *Selected color*

---

### <a name="ext-wm-allocations-donut-ngcolorSectors"></a>*colorSectors()*

Adds background colors for chart's datasets

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngunselectSector"></a>*unselectSector()*

Changes chart's radius as if it is unselected

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngcountNewRadius"></a>*countNewRadius(outerRadius)*

Counts new radius for sector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| outerRadius | Number | Radius for sector |

##### Returns

Number - *New radius value*

---

### <a name="ext-wm-allocations-donut-ngselectSector"></a>*selectSector(sector)*

Visualizes selection of sector on a chart

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sector | Object | Selected sector |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngtryToExpandSector"></a>*tryToExpandSector(sector, onSectorChange)*

Animates chart's sector on select

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sector | Object | Chart's selected sector |
| onSectorChange | Function | Function, fired when sector is changed |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngonDonutChartSectorHoverAnimation"></a>*onDonutChartSectorHoverAnimation(chartInstance, event)*

onClick handler with a visualisation for donut sector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| chartInstance | [*](#*) | the Chart.js object |
| event | [*](#*) | Chart.js click event object with a clicked area |

##### Returns

Object - *name and isSelected flag of the active sector (category)*

---
### <a name="ext-wm-allocations-donut-ngchartOptions"></a>*chartOptions*

Object with chart options that need to be overriden

**Type:** *[ChartjsSettings](#ChartjsSettings)*


---

### <a name="ext-wm-allocations-donut-ngonMouseLegendEnter"></a>*onMouseLegendEnter(index)*

Event, fired when mouse enters chart's legend area

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of hovered legend item |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngonMouseLegendLeave"></a>*onMouseLegendLeave()*

Event, fired when mouse leaves chart's legend area

##### Returns

[void](#void) - **

---

## chartPlugins

Holds options of chart's plugins

---

### <a name="ext-wm-allocations-donut-ngregisterScope"></a>*registerScope(scope)*

Creates closure on parent's scope

| Parameter | Type | Description |
| :-- | :-- | :-- |
| scope | Object | Parent's scope |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngshowSign"></a>*showSign(number)*

Appends + or - sign if number is positive or negative

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | Number inputed |

##### Returns

String - *String with appended sign and number*

---

### <a name="ext-wm-allocations-donut-nggetSelectedItem"></a>*getSelectedItem(index)*

Returns allocation item by it's index

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of selected allocation item |

##### Returns

Object - *Selected allocation item*

---

### <a name="ext-wm-allocations-donut-ngcreateSectionClickHandler"></a>*createSectionClickHandler(viewAssetsInPositions, event, item)*

Creates function which will be fired on chart's section click

| Parameter | Type | Description |
| :-- | :-- | :-- |
| viewAssetsInPositions | Function | Controller's function that has to be called on section click |
| event | Object | Mouse click event |
| item | Object | Chart's clicked item |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngonDetailsClick"></a>*onDetailsClick(viewAssetsInPositions, index)*

Fires given function on click and passes selected allocation to it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| viewAssetsInPositions | Function | Controller's function that has to be called on click |
| index | Number | Index of selected allocation item |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-donut-ngformatAmount"></a>*formatAmount(value)*

Shows value as it is or adds two decimal zeroes if needed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Number | Value to format |

##### Returns

Number - *Formatted value*

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
