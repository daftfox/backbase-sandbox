# widget-fx-trade-order-ng


Version: **1.3.0**

FX rate table details widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* lib-fx-trading-view-model-helper
* model-fx-trading-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="FXTradeOrderController as $ctrl">
   <ul>
      <li data-ng-repeat="item in ext.helpers.currencyPairs()">{{item.pairKey}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **FXTradeOrderController**<br/>    <a href="#FXTradeOrderController_load">#load()</a><br/>    <a href="#FXTradeOrderController_show">#show()</a><br/>    <a href="#FXTradeOrderController_cancel">#cancel()</a><br/>
- **widget-fx-trade-order-ng**<br/>    <a href="#widget-fx-trade-order-ngintervalUpdateRates">intervalUpdateRates</a><br/>    <a href="#widget-fx-trade-order-ngloadCurrencyRates">loadCurrencyRates()</a><br/>    <a href="#widget-fx-trade-order-ngstopRatesUpdate">stopRatesUpdate()</a><br/>    <a href="#widget-fx-trade-order-ngload">load(intervalUpdateRates)</a><br/>
- **Type Definitions**<br/>    <a href="#CurrencyPair">CurrencyPair</a><br/>    <a href="#CurrencyRate">CurrencyRate</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## Preference

Widget preferences enum

| Property | Type | Description |
| :-- | :-- | :-- |
| INTERVAL_UPDATE_RATES | String | Defines interval of update table rate details in seconds |

---

## FXTradeOrderController

FX trade order controller.

| Injector Key |
| :-- |
| *FXTradeOrderController* |


### <a name="FXTradeOrderController_load"></a>*#load()*

Handles loading trading trade order data

##### Returns

Promise of Array - **

### <a name="FXTradeOrderController_show"></a>*#show()*

Show trade order modal

##### Returns

Promise of [void](#void) - **

### <a name="FXTradeOrderController_cancel"></a>*#cancel()*

Cancel trade order modal

##### Returns

Promise of [void](#void) - **

---
### <a name="widget-fx-trade-order-ngintervalUpdateRates"></a>*intervalUpdateRates*

Delay of update rate details data

**Type:** *Number*


---

### <a name="widget-fx-trade-order-ngloadCurrencyRates"></a>*loadCurrencyRates()*

Handles loading rate details data of currency pair

##### Returns

Promise of Array - **

---

### <a name="widget-fx-trade-order-ngstopRatesUpdate"></a>*stopRatesUpdate()*

Method for stop rates auto update by interval

---

### <a name="widget-fx-trade-order-ngload"></a>*load(intervalUpdateRates)*

Handles loading currency details data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| intervalUpdateRates | Number | interval of currency details update |

##### Returns

Promise of Array - **

---

## initialState

Initial state of rate table store

| Property | Type | Description |
| :-- | :-- | :-- |
| currencyPairs | Object | An object of currency pairs |
| initialLoading | Boolean | Boolean flag of initial loading |
| errors | Object | currency pairs errors |

## Type Definitions


### <a name="CurrencyPair"></a>*CurrencyPair*

CurrencyPair type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| pairKey | String | Currency pair id |

### <a name="CurrencyRate"></a>*CurrencyRate*

CurrencyRate type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| pairKey | String | Currency pair id |
| price | Number | Last executed price for the currency pair |
| change | Number | Today's price change |
| changePct | Number | Today's price change in percent |
| bid | Number | Bid price available for the currency pair |
| ask | Number | Ask price available for the currency pair |
| ytdReturn | Number | Percentage of currency pair price change |
| wkRangeFrom | Number | A range from of price change for 52 recent weeks |
| wkRangeTo | Number | A range to of price change for 52 recent weeks |
| dayRangeFrom | Number | Today's range to of price change |
| dayRangeTo | Number | Today's range to of price change |

---

## Templates

* *template.ng.html*

---
