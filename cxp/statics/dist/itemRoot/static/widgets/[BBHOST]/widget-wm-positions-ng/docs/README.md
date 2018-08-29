# widget-wm-positions-ng


Version: **2.16.2**

Positions widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-wm-portfolio-view-model-helper
* model-wm-portfolio-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PositionsController as $ctrl">
   <ul>
      <li ng-repeat="position in $ctrl.positions">{{position.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-wm-positions-ng**<br/>    <a href="#widget-wm-positions-ngviewTransactions">viewTransactions(portfolioId, positionId, position)</a><br/>    <a href="#widget-wm-positions-ng$onInit">$onInit()</a><br/>    <a href="#widget-wm-positions-ngonFinishScroll">onFinishScroll()</a><br/>
- **Type Definitions**<br/>    <a href="#position">position</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## Intent

Widget intents to be handled

| Property | Type | Description |
| :-- | :-- | :-- |
| TRANSACTION_LIST | String | Used when clicking on the transaction icon to move to the transaction list |

---

## Event

Widget events to be handled

| Property | Type | Description |
| :-- | :-- | :-- |
| TRANSACTION_LIST | String | Used when clicking on the transaction icon to move to the transaction list |

---

## PositionsController

Positions controller.

| Injector Key |
| :-- |
| *PositionsController* |


---

### <a name="widget-wm-positions-ngviewTransactions"></a>*viewTransactions(portfolioId, positionId, position)*

Navigate to transactions list page

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolioId | String | ID of portfolio to load |
| positionId | String | ID of positions to load |
| position | String | instrument name of positions to load |

##### Fires Events:

> view.transactions


---

### <a name="widget-wm-positions-ng$onInit"></a>*$onInit()*

Init logic of widget. Invokes initialization of view model

---

### <a name="widget-wm-positions-ngonFinishScroll"></a>*onFinishScroll()*

Callback function. Invokes when scroll to view finishing

---

## initialState

Initial state of widgets store

| Property | Type | Description |
| :-- | :-- | :-- |
| positions | Object | an object of positions |
| initialLoading | Boolean | Boolean flag of initial loading |
| errors | [errors](#errors) | Errors model |

## Type Definitions


### <a name="position"></a>*position*

Portfolio type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Id of the position. |
| accountId | [srting](#srting) | Identifier of an Account. |
| assetClassId | String | Identifier of an Asset Class. |
| regionId | [srting](#srting) | Identifier of a Region. |
| countryId | String | Identifier of a Country. |
| instrumentName | String | Official name of the instrument. |
| instrumentCurrency | String | Currency in which the instrument is traded. |
| instrumentCode | String | Code of the instrument used by the Bank. |
| quantity | Number | Total quantity of units in the Position. |
| price | Object | Price of one unit of the position in the instrument currency. |
| exchangeRate | Number | The current market exchange rate between client reference currency and instrument currency. |
| valuation | Object | Total cost/valuation of all assets/constituents. |
| accruedInterest | Object | Accrued Interest in the Client's currency. |
| costPrice | Object | The price in the currency of instrument used in the last transaciton. |
| costExchangeRate | Number | The exchange rate used in last transaction. |
| unrealizedPL | Object | The total amount of all potentially unrealized cash for all constituents of the given Asset Class. |
| unrealizedPLPct | Number | In percents the amount of unrealised PL. |
| assetClassPct | Number | In percents. The amount of the given position. |
| portfolioPct | Number | The amount of the current asset class. |

---

## Templates

* *template.ng.html*

---
