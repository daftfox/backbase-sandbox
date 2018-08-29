# widget-wm-portfolio-details-ng


Version: **2.15.2**

Portfolio details widget

## Imports

* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PortfolioDetailsController as $ctrl">
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-wm-portfolio-details-ng**<br/>    <a href="#widget-wm-portfolio-details-ngloadPortfolioDetails">loadPortfolioDetails()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## PortfolioDetailsController

Porftolio details controller.

| Injector Key |
| :-- |
| *PortfolioDetailsController* |


---

### <a name="widget-wm-portfolio-details-ngloadPortfolioDetails"></a>*loadPortfolioDetails()*

Handles loading of portfolio details

##### Returns

Promise of Array - **

---

## initialState

portfolio details store initial state

| Property | Type | Description |
| :-- | :-- | :-- |
| portfolioDetails | Object | an object of portfolio details |
| initialLoading | Boolean | Boolean flag of initial loading |
| errors | Object | portfolios details errors |

## Templates

* *template.ng.html*

---
