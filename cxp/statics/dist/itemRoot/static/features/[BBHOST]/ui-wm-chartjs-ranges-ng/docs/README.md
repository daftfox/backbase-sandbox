# undefined


Version: **2.12.2**


## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **undefined**<br/>    <a href="#$postLink">$postLink()</a><br/>    <a href="#$onChanges">$onChanges(state)</a><br/>
- **Type Definitions**<br/>    <a href="#ChartRangesSeries">ChartRangesSeries</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiWmChartjsChartRangesComponent

Chart.js polar and radar charts combined

| Property | Type | Description |
| :-- | :-- | :-- |
| rangesData | Object | Data representing ranges on a chart |
| dotsData | Object | Data representing dots on a chart |

---

### <a name="$postLink"></a>*$postLink()*

AngularJS Lifecycle hook used to draw chart


##### Returns

[void](#void) - **

---

### <a name="$onChanges"></a>*$onChanges(state)*

AngularJS Lifecycle hook used to update chart

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Changed params |

##### Returns

[void](#void) - **

## Type Definitions


### <a name="ChartRangesSeries"></a>*ChartRangesSeries*

Series item that is used for building charts.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Label of item |
| value | Number | Value of item |
| min | Number | Lower value of optimal area for item |
| max | Number | Higher value of optimal area for item |

---
