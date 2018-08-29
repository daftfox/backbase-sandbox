# widget-wm-valuation-ng


Version: **2.17.2**

Valuation widget.

## Imports

* lib-bb-currency-ng
* lib-bb-extension-helpers-ng
* lib-bb-state-container-ng
* lib-bb-widget-ng
* lib-wm-portfolio-router-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="ValuationController as $ctrl">
   <ul>
      <li ng-repeat="item in $ctrl.state.performance.data">{{item.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-wm-valuation-ng**<br/>    <a href="#widget-wm-valuation-ngVALUATION_ROUTE">VALUATION_ROUTE</a><br/>    <a href="#widget-wm-valuation-ngVARIATION_ROUTE">VARIATION_ROUTE</a><br/>
- **ValuationController**<br/>    <a href="#ValuationController_switchDisplayMode">#switchDisplayMode()</a><br/>    <a href="#ValuationController_loadValuationData">#loadValuationData()</a><br/>    <a href="#ValuationController_setGranularity">#setGranularity(granularity)</a><br/>    <a href="#ValuationController_setPeriod">#setPeriod(period)</a><br/>
- **widget-wm-valuation-ng**<br/>    <a href="#widget-wm-valuation-ng$onInit">$onInit()</a><br/>    <a href="#widget-wm-valuation-ngloadValuationData">loadValuationData()</a><br/>    <a href="#widget-wm-valuation-ngerrors">errors</a><br/>
- **Type Definitions**<br/>    <a href="#PerformanceValuation">PerformanceValuation</a><br/>    <a href="#ChartData">ChartData</a><br/>    <a href="#Money">Money</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---
### <a name="widget-wm-valuation-ngVALUATION_ROUTE"></a>*VALUATION_ROUTE*

Constant for valuation route

**Type:** *String*


---
### <a name="widget-wm-valuation-ngVARIATION_ROUTE"></a>*VARIATION_ROUTE*

Constant for variation route

**Type:** *String*


---

## Preferences

Const for widget properties/preferences

---

## ValuationController

Valuation controller.

| Injector Key |
| :-- |
| *ValuationController* |


### <a name="ValuationController_switchDisplayMode"></a>*#switchDisplayMode()*

Switches asValuation flag

### <a name="ValuationController_loadValuationData"></a>*#loadValuationData()*

Handles loading valuation data

##### Returns

Promise of Array - **

### <a name="ValuationController_setGranularity"></a>*#setGranularity(granularity)*

Sets selected granularity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| granularity | String | Granularity of valuation data to load |

### <a name="ValuationController_setPeriod"></a>*#setPeriod(period)*

Sets selected period

| Parameter | Type | Description |
| :-- | :-- | :-- |
| period | Object | Period to load data for |

---

### <a name="widget-wm-valuation-ng$onInit"></a>*$onInit()*

Init logic of widget. Invokes initialization of view model

---

### <a name="widget-wm-valuation-ngloadValuationData"></a>*loadValuationData()*

Handles loading of valuation data

##### Returns

Promise of Array - **

---
### <a name="widget-wm-valuation-ngerrors"></a>*errors*


**Type:** *[errors](#errors)*


---

## initialState

Initial state of the widget

| Property | Type | Description |
| :-- | :-- | :-- |
| valuation | Object | An object of valuation related data |
| initialLoading | Boolean | Boolean flag of initial loading |
| errors | [errors](#errors) | Errors model |

## Type Definitions


### <a name="PerformanceValuation"></a>*PerformanceValuation*

Portfolio type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| chartData | [ChartData](#ChartData) | Valuation data to be displayed by widget |
| valuePctDataDisplay | Boolean | Flag informing whether variation data can be displayed |
| valueDataDisplay | Boolean | Flag informing whether valuation data can be displayed |

### <a name="ChartData"></a>*ChartData*

ChartData object definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| dateFrom | String | Start date of period value belongs to |
| dateTo | String | End date of period value belongs to |
| value | [Money](#Money) | Money valuation of the portfolio |
| valuePct | Number | Percent of how initial valuation of portfolio changed |

### <a name="Money"></a>*Money*

Money object definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| amount | Number | Amount of money |
| currency | String | Currency code |

---

## Templates

* *template.ng.html*

---
