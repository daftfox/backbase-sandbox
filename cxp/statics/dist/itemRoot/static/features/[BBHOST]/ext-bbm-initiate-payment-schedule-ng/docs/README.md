# ext-bbm-initiate-payment-schedule-ng


Version: **2.89.20**

Mobile extension for the payment schedule view in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bbm-datepicker-ng
* ui-bbm-dropdown-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- File model.xml of widget-bbm-initiate-payment-ng -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-schedule-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getSchedule">#getSchedule()</a><br/>    <a href="#Helpers_getFrequencyOptions">#getFrequencyOptions()</a><br/>    <a href="#Helpers_getMinimumRecurrenceEndDate">#getMinimumRecurrenceEndDate()</a><br/>    <a href="#Helpers_getMinimumExecutionDate">#getMinimumExecutionDate()</a><br/>    <a href="#Helpers_getMinimumStartDate">#getMinimumStartDate()</a><br/>    <a href="#Helpers_getRecurrenceEndingOptions">#getRecurrenceEndingOptions()</a><br/>    <a href="#Helpers_getStartDateLabel">#getStartDateLabel()</a><br/>    <a href="#Helpers_getStartDateTitle">#getStartDateTitle()</a><br/>    <a href="#Helpers_hasPayment">#hasPayment()</a><br/>    <a href="#Helpers_submitSchedule">#submitSchedule()</a><br/>    <a href="#Helpers_onScheduleFormSubmit">#onScheduleFormSubmit()</a><br/>    <a href="#Helpers_isRecurringPaymentAllowed">#isRecurringPaymentAllowed()</a><br/>    <a href="#Helpers_showEndingControl">#showEndingControl()</a><br/>    <a href="#Helpers_showEndDateControl">#showEndDateControl()</a><br/>    <a href="#Helpers_showRepeatControl">#showRepeatControl()</a><br/>    <a href="#Helpers.dateLabels">.dateLabels</a><br/>
- **Intents**<br/>    <a href="#Intents_selectSchedule">#selectSchedule()</a><br/>    <a href="#Intents_showSchedule">#showSchedule(schedule)</a><br/>
- **Type Definitions**<br/>    <a href="#PaymentFrequency">PaymentFrequency</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-schedule-ng

### <a name="Helpers_getSchedule"></a>*#getSchedule()*

Returns the schedule object.

##### Returns

[Schedule](widget-bbm-initiate-payment-ng.html#Schedule) - **

### <a name="Helpers_getFrequencyOptions"></a>*#getFrequencyOptions()*

Returns a list of frequency options.

##### Returns

Array of [PaymentFrequency](#PaymentFrequency) - **

### <a name="Helpers_getMinimumRecurrenceEndDate"></a>*#getMinimumRecurrenceEndDate()*

Returns a minimum allowed date to start a recurring payment.

##### Returns

String - **

### <a name="Helpers_getMinimumExecutionDate"></a>*#getMinimumExecutionDate()*

Returns a minimum allowed date to make a payment.

##### Returns

String - **

### <a name="Helpers_getMinimumStartDate"></a>*#getMinimumStartDate()*

Returns a minimum allowed date to start a recurring payment.

##### Returns

String - **

### <a name="Helpers_getRecurrenceEndingOptions"></a>*#getRecurrenceEndingOptions()*

Returns a list of possible recurring payment endings.

##### Returns

Array of [RecurrenceEnding](#RecurrenceEnding) - **

### <a name="Helpers_getStartDateLabel"></a>*#getStartDateLabel()*

Returns the label of the start date field.

##### Returns

String - **

### <a name="Helpers_getStartDateTitle"></a>*#getStartDateTitle()*

Returns the title of the start date datepicker.

##### Returns

String - **

### <a name="Helpers_hasPayment"></a>*#hasPayment()*

Returns true, if there is already a payment object available. False otherwise.

##### Returns

Boolean - **

### <a name="Helpers_submitSchedule"></a>*#submitSchedule()*

Fulfils the select schedule intent with the given data.

### <a name="Helpers_onScheduleFormSubmit"></a>*#onScheduleFormSubmit()*

Handles submit of the schedule payment form.

##### Returns

String - **

### <a name="Helpers_isRecurringPaymentAllowed"></a>*#isRecurringPaymentAllowed()*

Returns true, if recurring payments are allowed in preferences and false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showEndingControl"></a>*#showEndingControl()*

Returns true, if the ending control should be shown.

##### Returns

Boolean - **

### <a name="Helpers_showEndDateControl"></a>*#showEndDateControl()*

Returns true, if the end date control should be shown.

##### Returns

Boolean - **

### <a name="Helpers_showRepeatControl"></a>*#showRepeatControl()*

Returns true, if the repeat control should be shown.

##### Returns

Boolean - **
### <a name="Helpers.dateLabels"></a>*.dateLabels*

Set of date labels.

**Type:** *Object*


---

## Intents


### <a name="Intents_selectSchedule"></a>*#selectSchedule()*

The intent to select schedule.

### <a name="Intents_showSchedule"></a>*#showSchedule(schedule)*

Handles the intent to show schedule.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | Object |  |

## Type Definitions


### <a name="PaymentFrequency"></a>*PaymentFrequency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Frequency identifier |
| text | String | Frequency as a text to be displayed |

---
