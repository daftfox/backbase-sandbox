# ext-bb-manage-payment-orders-ng


Version: **3.37.9**

Payment order overview extension.

## Imports

* ui-bb-account-selector-ng
* ui-bb-confirm-ng
* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-manage-payment-orders-ng</value>
</property>
```

## Table of Contents
- **ext-bb-manage-payment-orders-ng**<br/>    <a href="#ext-bb-manage-payment-orders-ngdateFormat">dateFormat</a><br/>    <a href="#ext-bb-manage-payment-orders-ngdateLabel">dateLabel(date)</a><br/>    <a href="#ext-bb-manage-payment-orders-nggetPaymentModeLabel">getPaymentModeLabel(mode)</a><br/>    <a href="#ext-bb-manage-payment-orders-nggetFrequencyLabel">getFrequencyLabel(frequency)</a><br/>    <a href="#ext-bb-manage-payment-orders-nggetRateLabel">getRateLabel(rate)</a><br/>    <a href="#ext-bb-manage-payment-orders-ngshowExchangeRate">showExchangeRate(instructedAmount, rate)</a><br/>

---
### <a name="ext-bb-manage-payment-orders-ngdateFormat"></a>*dateFormat*

Date Format

**Type:** *String*


---

## TimePeriod

Date labels enum

---

## PaymentMode

Payment mode enum

---

## Frequency

Frequency enum

---

## Event

Event names

---

### <a name="ext-bb-manage-payment-orders-ngdateLabel"></a>*dateLabel(date)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | String | date |

##### Returns

String - **

---

### <a name="ext-bb-manage-payment-orders-nggetPaymentModeLabel"></a>*getPaymentModeLabel(mode)*

Gets translated string of payment mode

| Parameter | Type | Description |
| :-- | :-- | :-- |
| mode | String | payment mode |

##### Returns

String - **

---

### <a name="ext-bb-manage-payment-orders-nggetFrequencyLabel"></a>*getFrequencyLabel(frequency)*

Gets translated strings of payment frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| frequency | String | frequency |

##### Returns

String - **

---

### <a name="ext-bb-manage-payment-orders-nggetRateLabel"></a>*getRateLabel(rate)*

Gets strings of exchange rate

| Parameter | Type | Description |
| :-- | :-- | :-- |
| rate | Object | rate state |

##### Returns

String - **

---

### <a name="ext-bb-manage-payment-orders-ngshowExchangeRate"></a>*showExchangeRate(instructedAmount, rate)*

Determines whether or not exchange rate should be shown
if account currency and payment currency the same

| Parameter | Type | Description |
| :-- | :-- | :-- |
| instructedAmount | Object | Information about payment instructed amount |
| rate | Object | rate state |

##### Returns

String - **
