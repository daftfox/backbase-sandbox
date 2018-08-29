# widget-fx-rate-table-ng


Version: **1.18.0**

FX rate table widget.

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
<div ng-controller="FXRateTableController as $ctrl">
   <ul>
      <li data-ng-repeat="item in ext.helpers.currencyPairs()">{{item.pairKey}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **FXRateTableController**<br/>    <a href="#FXRateTableController_load">#load(page)</a><br/>
- **widget-fx-rate-table-ng**<br/>    <a href="#widget-fx-rate-table-ngintervalUpdateRates">intervalUpdateRates</a><br/>    <a href="#widget-fx-rate-table-ngviewCurrencyPairDetails">viewCurrencyPairDetails(currencyPairId)</a><br/>    <a href="#widget-fx-rate-table-ngviewTradeOrder">viewTradeOrder(currencyPairId)</a><br/>    <a href="#widget-fx-rate-table-ngloadCurrencyRates">loadCurrencyRates()</a><br/>    <a href="#widget-fx-rate-table-ngstopRatesUpdate">stopRatesUpdate()</a><br/>    <a href="#widget-fx-rate-table-ngsetPageNumberSelected">setPageNumberSelected(page)</a><br/>    <a href="#widget-fx-rate-table-ngload">load(page, intervalUpdateRates)</a><br/>    <a href="#widget-fx-rate-table-ngsetCurrencyPairIdSelected">setCurrencyPairIdSelected(currencyPairId)</a><br/>    <a href="#widget-fx-rate-table-ngpageSize">pageSize</a><br/>    <a href="#widget-fx-rate-table-ngmaxNavPages">maxNavPages</a><br/>
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
| PAGE_SIZE | String | Number of items per page |
| MAX_NAV_PAGES | String | Number of pagination items |
| DEFAULT_PAGE_SIZE | Number | Defines the default pageSize for the direct debits page |
| DEFAULT_MAX_NAV_PAGES | Number | Defines the default maxNavPages for the accounts page |

---

## IntentsKeys

Widget intents to be handled

---

## FXRateTableController

FX rate table controller.

| Injector Key |
| :-- |
| *FXRateTableController* |


### <a name="FXRateTableController_load"></a>*#load(page)*

Handles loading trading rate table data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | Number | index of the page to load Load rate table data |

##### Returns

Promise of Array - **

---
### <a name="widget-fx-rate-table-ngintervalUpdateRates"></a>*intervalUpdateRates*

Delay of update table rates

**Type:** *Number*


---

### <a name="widget-fx-rate-table-ngviewCurrencyPairDetails"></a>*viewCurrencyPairDetails(currencyPairId)*

Navigate to currency pair details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | ID of currency pair to load |

---

### <a name="widget-fx-rate-table-ngviewTradeOrder"></a>*viewTradeOrder(currencyPairId)*

view trade order modal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | currency pair id |

---

### <a name="widget-fx-rate-table-ngloadCurrencyRates"></a>*loadCurrencyRates()*

Handles loading rates of currency pairs data

##### Returns

Promise of Array - **

---

### <a name="widget-fx-rate-table-ngstopRatesUpdate"></a>*stopRatesUpdate()*

Method for stop rates auto update by interval

---

### <a name="widget-fx-rate-table-ngsetPageNumberSelected"></a>*setPageNumberSelected(page)*

Set current selected page number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | String | number of page to set selected |

---

### <a name="widget-fx-rate-table-ngload"></a>*load(page, intervalUpdateRates)*

Handles loading rate table data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | Object | index of the page to load |
| intervalUpdateRates | Number | interval of rates update |

##### Returns

Promise of Array - **

---

### <a name="widget-fx-rate-table-ngsetCurrencyPairIdSelected"></a>*setCurrencyPairIdSelected(currencyPairId)*

Set current selected currency pair id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | currency pair id to set selected |

---
### <a name="widget-fx-rate-table-ngpageSize"></a>*pageSize*

Number of records to return per request

**Type:** *Number*


---
### <a name="widget-fx-rate-table-ngmaxNavPages"></a>*maxNavPages*

Maximum number of navigation pages to display

**Type:** *Number*


---

## initialState

Initial state of rate table store

| Property | Type | Description |
| :-- | :-- | :-- |
| currencyPairs | Object | An object of currency pairs |
| initialLoading | Boolean | Boolean flag of initial loading |
| pageParams | Object | parameters of the page |
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

---

## Templates

* *template.ng.html*

---
