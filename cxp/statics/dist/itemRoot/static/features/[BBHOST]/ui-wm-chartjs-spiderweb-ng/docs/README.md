# undefined


Version: **2.12.2**


## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **undefined**<br/>    <a href="#isHidden">isHidden(element)</a><br/>    <a href="#resetRadarCanvas">resetRadarCanvas()</a><br/>    <a href="#$postLink">$postLink()</a><br/>    <a href="#$onChanges">$onChanges()</a><br/>
- **Type Definitions**<br/>    <a href="#ChartSpiderwebSeries">ChartSpiderwebSeries</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiWmChartjsChartSpiderwebComponent

Chart.js polar and radar charts combined

| Property | Type | Description |
| :-- | :-- | :-- |
| series | Array of [ChartSpiderwebSeries](#ChartSpiderwebSeries) | Array used to draw Chartjs bar chart |
| radarOptions | Object | Options for radar chart. Default options of chart.js library |
| radarDatasetOptions | Object | Datasets' options for radar chart. Default options of chart.js library's datasets |
| polarOptions | Object | Options for polar chart. Default options of chart.js library |
| polarDatasetOptions | Object | Datasets' options for polar chart. Default options of chart.js library's datasets |

---

### <a name="isHidden"></a>*isHidden(element)*

Checks, whether element is hidden

| Parameter | Type | Description |
| :-- | :-- | :-- |
| element | Object | Element to be checked |

##### Returns

Boolean - *Flag, that tells whether element is hidden*

---

### <a name="resetRadarCanvas"></a>*resetRadarCanvas()*

Removes old radar canvase and creates new one

##### Returns

[void](#void) - **

---

### <a name="$postLink"></a>*$postLink()*

AngularJS Lifecycle hook used to draw chart


##### Returns

[void](#void) - **

---

### <a name="$onChanges"></a>*$onChanges()*

AngularJS Lifecycle hook used to update chart

##### Returns

[void](#void) - **

## Type Definitions


### <a name="ChartSpiderwebSeries"></a>*ChartSpiderwebSeries*

Series item that is used for building charts.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Label of item |
| value | Number | Value of item |
| min | Number | Lower value of optimal area for item |
| max | Number | Higher value of optimal area for item |

---
