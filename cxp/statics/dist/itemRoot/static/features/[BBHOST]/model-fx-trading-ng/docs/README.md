# model-fx-trading-ng


Version: **1.20.0**

model-fx-trading-ng

## Imports

* data-bb-trading-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* vendor-bb-angular

---

## Example

```javascript
import modeltradingfxModuleKey, { modeltradingfxKey }
from 'model-fx-trading-ng';

angular
  .module('ExampleModule', [
    modeltradingfxModuleKey,
  ])
  .factory('someFactory', [
    modeltradingfxKey,
    // into
    function someFactory(tradingfxModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **tradingFxModel**<br/>    <a href="#tradingFxModel_loadCurrencyPairs">#loadCurrencyPairs(params)</a><br/>    <a href="#tradingFxModel_loadCurrencyPairDetails">#loadCurrencyPairDetails(currencypairId)</a><br/>    <a href="#tradingFxModel_setCurrencyPairIdSelected">#setCurrencyPairIdSelected(currencyPairId)</a><br/>    <a href="#tradingFxModel_setPageNumberSelected">#setPageNumberSelected(page)</a><br/>    <a href="#tradingFxModel_getSelectedCurrencyPairId">#getSelectedCurrencyPairId()</a><br/>    <a href="#tradingFxModel_getPageNumberSelected">#getPageNumberSelected()</a><br/>    <a href="#tradingFxModel_loadCurrencyRates">#loadCurrencyRates(params)</a><br/>
- **Type Definitions**<br/>    <a href="#CurrencyPair">CurrencyPair</a><br/>    <a href="#CurrencyRate">CurrencyRate</a><br/>

---

## tradingFxModel


### <a name="tradingFxModel_loadCurrencyPairs"></a>*#loadCurrencyPairs(params)*

Load trading currency pairs.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [CurrencyPairs](#CurrencyPairs), [ModelError](#ModelError) - *A Promise resolving to object with CurrencyPairs.*

### <a name="tradingFxModel_loadCurrencyPairDetails"></a>*#loadCurrencyPairDetails(currencypairId)*

Load specific currency pair

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencypairId | String | ID of currency pair to load |

##### Returns

Promise of [CurrencyPair](#CurrencyPair), [ModelError](#ModelError) - *A Promise resolving to object with currency pair*

### <a name="tradingFxModel_setCurrencyPairIdSelected"></a>*#setCurrencyPairIdSelected(currencyPairId)*

Set current selected currency pair id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairId | String | currency pair id to set selected |

### <a name="tradingFxModel_setPageNumberSelected"></a>*#setPageNumberSelected(page)*

Set current selected page number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| page | String | number of page to set selected |

### <a name="tradingFxModel_getSelectedCurrencyPairId"></a>*#getSelectedCurrencyPairId()*

Get current selected currency pair id.

##### Returns

Promise of String, [ModelError](#ModelError) - *A Promise with currency pair id.*

### <a name="tradingFxModel_getPageNumberSelected"></a>*#getPageNumberSelected()*

Get selected page number.

##### Returns

Promise of String, [ModelError](#ModelError) - *A Promise with page number.*

### <a name="tradingFxModel_loadCurrencyRates"></a>*#loadCurrencyRates(params)*

Load trading currency rates.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Optional configuration object. |

##### Returns

Promise of [CurrencyRates](#CurrencyRates), [ModelError](#ModelError) - *A Promise resolving to object with CurrencyRates.*

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
