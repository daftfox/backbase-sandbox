# widget-wm-allocations-advanced-ng


Version: **1.15.2**

Allocations widget.

## Imports

* lib-bb-currency-ng
* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-wm-portfolio-router-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="AllocationsController as $ctrl">
   <ul>
      <li ng-repeat="allocation in $ctrl.allocations">{{allocation.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **AllocationsController**<br/>    <a href="#AllocationsController_switchAllocations">#switchAllocations()</a><br/>    <a href="#AllocationsController_load">#load()</a><br/>    <a href="#AllocationsController_loadAssetClasses">#loadAssetClasses()</a><br/>    <a href="#AllocationsController_loadCurrencies">#loadCurrencies()</a><br/>
- **widget-wm-allocations-advanced-ng**<br/>    <a href="#widget-wm-allocations-advanced-ngviewAssetsInPositions">viewAssetsInPositions(item)</a><br/>    <a href="#widget-wm-allocations-advanced-ngloadPortfolioDetails">loadPortfolioDetails()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## IntentsKeys

Widget intents to be handled

---

## AllocationsController

Allocations controller.

| Injector Key |
| :-- |
| *AllocationsController* |


### <a name="AllocationsController_switchAllocations"></a>*#switchAllocations()*

Redirects widget depending on current route

### <a name="AllocationsController_load"></a>*#load()*

Loads allocations currencies data or allocations asset classes
 data depending on current application route

##### Returns

Promise of Array of [Allocation](#Allocation) - **

### <a name="AllocationsController_loadAssetClasses"></a>*#loadAssetClasses()*

Initial state of porfolio details store

##### Returns

Promise of Array - **

### <a name="AllocationsController_loadCurrencies"></a>*#loadCurrencies()*

Handles loading allocations currencies data

##### Returns

Promise of Array - **

---

### <a name="widget-wm-allocations-advanced-ngviewAssetsInPositions"></a>*viewAssetsInPositions(item)*

Navigate to positions with selected asset class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Asset class to open |

---

### <a name="widget-wm-allocations-advanced-ngloadPortfolioDetails"></a>*loadPortfolioDetails()*

Handles loading of portfolio details

##### Returns

Promise of Array - **

---

## initialState

Initial state of widgets store

| Property | Type | Description |
| :-- | :-- | :-- |
| allocations | Object | Allocations data |
| portfolioDetails | Object | an object of portfolio details |
| errors | [errors](#errors) | Errors model |
| initialLoading | Boolean | Boolean flag of initial loading |
| route | Object | Router model |

## Templates

* *template.ng.html*

---
