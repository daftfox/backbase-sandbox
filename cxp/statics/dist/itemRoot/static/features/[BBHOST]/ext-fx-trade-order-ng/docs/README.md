# ext-fx-rate-table-details-ng


Version: **1.3.0**

Additional extension for fx rate rable details widget.

## Imports

* lib-bb-model-errors
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-fx-account-selector-ng

---

## Example

```javascript
<!-- fx rate table details widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-fx-rate-table-details-ng</value>
</property>
```

## Table of Contents
- **ext-fx-rate-table-details-ng**<br/>    <a href="#ext-fx-rate-table-details-ngerrors">errors</a><br/>    <a href="#ext-fx-rate-table-details-ngcurrencyPair">currencyPair()</a><br/>    <a href="#ext-fx-rate-table-details-ngaccountsPayingFrom">accountsPayingFrom()</a><br/>    <a href="#ext-fx-rate-table-details-ngaccountsPayingTo">accountsPayingTo()</a><br/>    <a href="#ext-fx-rate-table-details-ngisCurrencyPairAvailable">isCurrencyPairAvailable(currencyPair)</a><br/>    <a href="#ext-fx-rate-table-details-nggetError">getError()</a><br/>    <a href="#ext-fx-rate-table-details-ngshowSign">showSign(number, decimals)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>

## Exports


## Hooks

Hooks for widget-fx-rate-table-details-ng

---
### <a name="ext-fx-rate-table-details-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-fx-rate-table-details-ngcurrencyPair"></a>*currencyPair()*

Selector for currency pair data processing

##### Returns

Object - *currency pair with rates data object*

---

### <a name="ext-fx-rate-table-details-ngaccountsPayingFrom"></a>*accountsPayingFrom()*

Selector for accounts paying from data processing

##### Returns

Array - *accounts paying from with account data*

---

### <a name="ext-fx-rate-table-details-ngaccountsPayingTo"></a>*accountsPayingTo()*

Selector for accounts paying to data processing

##### Returns

Array - *accounts paying to with account data*

---

### <a name="ext-fx-rate-table-details-ngisCurrencyPairAvailable"></a>*isCurrencyPairAvailable(currencyPair)*

Checks if currency pair data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencyPair | Object |  |

##### Returns

Boolean - *returns true if currency pair data is not present*

---

### <a name="ext-fx-rate-table-details-nggetError"></a>*getError()*

Returns error object by error code

---

### <a name="ext-fx-rate-table-details-ngshowSign"></a>*showSign(number, decimals)*

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
