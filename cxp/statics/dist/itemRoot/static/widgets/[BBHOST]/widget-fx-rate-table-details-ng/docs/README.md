# widget-fx-rate-table-details-ng


Version: **1.15.0**

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
<div ng-controller="FXRateTableDetailsController as $ctrl">
   <ul>
      <li data-ng-repeat="item in ext.helpers.currencyPairs()">{{item.pairKey}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **FXRateTableDetailsController**<br/>    <a href="#FXRateTableDetailsController_load">#load()</a><br/>
- **widget-fx-rate-table-details-ng**<br/>    <a href="#widget-fx-rate-table-details-ngintervalUpdateRates">intervalUpdateRates</a><br/>    <a href="#widget-fx-rate-table-details-ngviewTradeOrder">viewTradeOrder(currencyPairId)</a><br/>    <a href="#widget-fx-rate-table-details-ngloadCurrencyRates">loadCurrencyRates()</a><br/>    <a href="#widget-fx-rate-table-details-ngstopRatesUpdate">stopRatesUpdate()</a><br/>    <a href="#widget-fx-rate-table-details-ngload">load(intervalUpdateRates)</a><br/>    <a href="#widget-fx-rate-table-details-ngsetCurrencyPairIdSelected">setCurrencyPairIdSelected(currencyPairId)</a><br/>
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

## FXRateTableDetailsController

FX rate table details controller.

| Injector Key |
| :-- |
| *FXRateTableDetailsController* |


### <a name="FXRateTableDetailsController_load"></a>*#load()*

Handles loading trading rate table details data

##### Returns

Promise of Array - **

---
### <a name="widget-fx-rate-table-details-ngintervalUpdateRates"></a>*intervalUpdateRates*

Delay of update table rate details

**Type:** *Number*


---

### <a name="widget-fx-rate-table-details-ngviewTradeOrder"></a>*viewTradeOrder(currencyPairId)*

view trade order modal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | currency pair id |

---

### <a name="widget-fx-rate-table-details-ngloadCurrencyRates"></a>*loadCurrencyRates()*

Handles loading rate details data of currency pair

##### Returns

Promise of Array - **

---

### <a name="widget-fx-rate-table-details-ngstopRatesUpdate"></a>*stopRatesUpdate()*

Method for stop rates auto update by interval

---

### <a name="widget-fx-rate-table-details-ngload"></a>*load(intervalUpdateRates)*

Handles loading currency details data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| intervalUpdateRates | Number | interval of currency details update |

##### Returns

Promise of Array - **

---

### <a name="widget-fx-rate-table-details-ngsetCurrencyPairIdSelected"></a>*setCurrencyPairIdSelected(currencyPairId)*

Set current selected currency pair id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | currency pair id to set selected |

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
