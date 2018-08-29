# widget-wm-performance-ng


Version: **2.16.2**

Portfolio performance widget

## Imports

* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PortfolioPerformanceController as $ctrl">
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **PortfolioPerformanceController**<br/>    <a href="#PortfolioPerformanceController_loadPerformanceChart">#loadPerformanceChart()</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_transformPerformanceData">#transformPerformanceData(data)</a><br/>
- **Type Definitions**<br/>    <a href="#data">data</a><br/>    <a href="#period">period</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## PortfolioPerformanceController

Porftolio performance controller.

| Injector Key |
| :-- |
| *PortfolioPerformanceController* |


### <a name="PortfolioPerformanceController_loadPerformanceChart"></a>*#loadPerformanceChart()*

Handles loading performance data

##### Returns

Promise of Array - **

---

## default-hooks

Default hooks for widget-wm-performance-ng

### <a name="default-hooks_transformPerformanceData"></a>*#transformPerformanceData(data)*

Default hook for performance data transformation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | original data object |

##### Returns

Object - *processed data object*

---

## initialState

Initial state of widgets store

| Property | Type | Description |
| :-- | :-- | :-- |
| portfolioPerformance | Object | performance initial state object |
| initialLoading | Boolean | Boolean flag of initial loading |

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
