# ext-bb-initiate-payment-us-m-2-m-ng


Version: **1.9.20**

Default extension for widget-bb-initiate-payment-us-m2m-ng

## Imports

* ui-bb-account-card-ng
* ui-bb-account-selector-ng
* ui-bb-autocomplete-search-ng
* ui-bb-calendar-popup-ng
* ui-bb-char-counter-ng
* ui-bb-confirm-ng
* ui-bb-currency-input-ng
* ui-bb-expandable-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-switcher-ng
* vendor-bb-angular
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages
* vendor-bb-uib-alert

---

## Table of Contents
- **Constants**<br/>    <a href="#Constants_PaymentType">#PaymentType</a><br/>    <a href="#Constants_RecurrenceEnding">#RecurrenceEnding</a><br/>    <a href="#Constants_TransferFrequency">#TransferFrequency</a><br/>    <a href="#Constants_RecurrenceFrequencies">#RecurrenceFrequencies</a><br/>    <a href="#Constants_SingleFrequency">#SingleFrequency</a><br/>    <a href="#Constants_ScheduleRepeatValue">#ScheduleRepeatValue</a><br/>    <a href="#Constants_AccountTypes">#AccountTypes</a><br/>
- **ext-bb-initiate-payment-us-m-2-m-ng**<br/>    <a href="#ext-bb-initiate-payment-us-m-2-m-ngsetFormPristine">setFormPristine(scope)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_defaultPaymentType">#defaultPaymentType()</a><br/>    <a href="#Hooks_defaultScheduleRepeat">#defaultScheduleRepeat()</a><br/>

---

## Constants

### <a name="Constants_PaymentType"></a>*#PaymentType*

Payment type identifier

**Type:** *String*

### <a name="Constants_RecurrenceEnding"></a>*#RecurrenceEnding*

Widget recurrence ending enum

**Type:** *Object*

### <a name="Constants_TransferFrequency"></a>*#TransferFrequency*

Widget transfer frequencies enum

**Type:** *Object*

### <a name="Constants_RecurrenceFrequencies"></a>*#RecurrenceFrequencies*

Array of recurring frequency objects with the following properties (all mandatory)

**Type:** *Array*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Translation key of the label that will be displayed to the end user |
| value | String | Denotes frequency type of transfer. Possible values: DAILY/WEEKLY/MONTHLY/YEARLY |
| every | Number | Indicates skip interval of transfer. 1 would mean execute every time, 2 - every other time |

## Example

```javascript
{
  name: 'form.schedule.frequency.weekly',
  value: 'WEEKLY',
  every: 1,
},
{
  name: 'form.schedule.frequency.bi.weekly',
  value: 'WEEKLY',
  every: 2,
}
```
### <a name="Constants_SingleFrequency"></a>*#SingleFrequency*

Object representing single payment

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Translation key of the label that will be displayed to the end user |
| value | String | Denotes frequency, holds value 'ONCE' |
### <a name="Constants_ScheduleRepeatValue"></a>*#ScheduleRepeatValue*

Minimum ocurrences value by default

**Type:** *Number*

### <a name="Constants_AccountTypes"></a>*#AccountTypes*

Array of account type objects with the following properties (all mandatory)

**Type:** *Array*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Translation key of the label that will be displayed to the end user |
| value | String | Denotes type of account. Possible values: CHECKING/SAVING |

---

---

---

### <a name="ext-bb-initiate-payment-us-m-2-m-ngsetFormPristine"></a>*setFormPristine(scope)*

Transforms the form into a pristine state after binding all fields


| Parameter | Type | Description |
| :-- | :-- | :-- |
| scope | Object | Current ng scope with form |

---

## Hooks


### <a name="Hooks_defaultPaymentType"></a>*#defaultPaymentType()*

Gets the current extension payment type

##### Returns

String - *Default payment type*

### <a name="Hooks_defaultScheduleRepeat"></a>*#defaultScheduleRepeat()*

Get the default repeat value of minimum ocurrences

##### Returns

Number - *Default schedule repeat default value*
