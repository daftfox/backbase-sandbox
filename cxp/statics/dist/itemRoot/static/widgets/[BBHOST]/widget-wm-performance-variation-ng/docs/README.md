# widget-wm-performance-ng


Version: **1.15.2**

Portfolio performance variation widget

## Imports

* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PortfolioPerformanceVariationController as $ctrl">
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **PortfolioPerformanceVariationController**<br/>    <a href="#PortfolioPerformanceVariationController_loadPerformanceVariationChart">#loadPerformanceVariationChart()</a><br/>    <a href="#PortfolioPerformanceVariationController_setPeriod">#setPeriod(period)</a><br/>    <a href="#PortfolioPerformanceVariationController_setActiveItem">#setActiveItem(index)</a><br/>
- **widget-wm-performance-ng**<br/>    <a href="#widget-wm-performance-ngloadPerformanceChart">loadPerformanceChart()</a><br/>
- **Type Definitions**<br/>    <a href="#data">data</a><br/>    <a href="#period">period</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## PortfolioPerformanceVariationController

Porftolio performance variation controller.

| Injector Key |
| :-- |
| *PortfolioPerformanceVariationController* |


### <a name="PortfolioPerformanceVariationController_loadPerformanceVariationChart"></a>*#loadPerformanceVariationChart()*

Handles loading of portfolio performance variation chart

##### Returns

Promise of Array - **

### <a name="PortfolioPerformanceVariationController_setPeriod"></a>*#setPeriod(period)*

Sets selected period

| Parameter | Type | Description |
| :-- | :-- | :-- |
| period | String | Period to load data for |

### <a name="PortfolioPerformanceVariationController_setActiveItem"></a>*#setActiveItem(index)*

Sets performance active item in context of angular's digest cycle

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of selected item |

---

### <a name="widget-wm-performance-ngloadPerformanceChart"></a>*loadPerformanceChart()*

Handles loading performance data

##### Returns

Promise of Array - **

## Type Definitions


### <a name="data"></a>*data*

Data object used to draw line performance chart

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| dateFrom | Date | date from of period |
| dateTo | Date | date to of period |
| value | Number | point line chart value |

### <a name="period"></a>*period*

Dataset object for period

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| dateFrom | Date | date from of period |
| dateTo | Date | date to of period |

---

## Templates

* *template.ng.html*

---
