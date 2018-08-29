# ext-fx-rate-table-ng


Version: **1.18.0**

Additional extension for fx rate rable widget.

## Imports

* lib-bb-model-errors
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng

---

## Example

```javascript
<!-- fx rate table widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-fx-rate-table-ng</value>
</property>
```

## Table of Contents
- **ext-fx-rate-table-ng**<br/>    <a href="#ext-fx-rate-table-ngerrors">errors</a><br/>    <a href="#ext-fx-rate-table-ngcurrencyPairs">currencyPairs()</a><br/>    <a href="#ext-fx-rate-table-ngisCurrencyPairsAvailable">isCurrencyPairsAvailable(currencyPairs)</a><br/>    <a href="#ext-fx-rate-table-nggetError">getError()</a><br/>    <a href="#ext-fx-rate-table-ngshowSign">showSign(number, decimals)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>

## Exports


## Hooks

Hooks for widget-fx-rate-table-ng

---
### <a name="ext-fx-rate-table-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-fx-rate-table-ngcurrencyPairs"></a>*currencyPairs()*

Selector for currency pairs data processing

##### Returns

Object - *currency pairs with rates data object*

---

### <a name="ext-fx-rate-table-ngisCurrencyPairsAvailable"></a>*isCurrencyPairsAvailable(currencyPairs)*

Checks if currency pairs data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPairs | Object |  |

##### Returns

Boolean - *returns true if currency pairs data is not present*

---

### <a name="ext-fx-rate-table-nggetError"></a>*getError()*

Returns error object by error code

---

### <a name="ext-fx-rate-table-ngshowSign"></a>*showSign(number, decimals)*

Appends + or - sign if number is positive or negative

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | Number inputed |
| decimals | Number | Number of decimals |

##### Returns

String - *String with appended sign and number*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

---
