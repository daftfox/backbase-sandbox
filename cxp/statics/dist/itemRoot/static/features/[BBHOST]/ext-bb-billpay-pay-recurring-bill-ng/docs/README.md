# ext-bb-billpay-pay-recurring-bill-ng


Version: **6.12.0**

Extension for widget-bb-billpay-manage-payment-ng

## Imports

* ui-bb-confirm-ng
* ui-bb-currency-input-ng
* ui-bb-dropdown-select-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-number-input-ng
* ui-bb-stepper-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-datepicker
* vendor-bb-uib-datepicker-popup

---

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_paymentFrequencyOptions">#paymentFrequencyOptions</a><br/>    <a href="#Helpers_i18nPaymentFrequencyOption">#i18nPaymentFrequencyOption(option)</a><br/>    <a href="#Helpers_i18nSingularPlural">#i18nSingularPlural(number, str)</a><br/>    <a href="#Helpers_getCurrencyCode">#getCurrencyCode()</a><br/>    <a href="#Helpers_showFinalPaymentDate">#showFinalPaymentDate(newPayment)</a><br/>    <a href="#Helpers_showFinalPaymentDateAndNumInstances">#showFinalPaymentDateAndNumInstances(newPayment)</a><br/>    <a href="#Helpers_getFinalPaymentDateForNumberedInstances">#getFinalPaymentDateForNumberedInstances(newPayment)</a><br/>    <a href="#Helpers_getFinalPaymentDateGivenEndDate">#getFinalPaymentDateGivenEndDate(newPayment)</a><br/>    <a href="#Helpers_initialPageIsLoading">#initialPageIsLoading()</a><br/>    <a href="#Helpers_hasLoadingError">#hasLoadingError(getItems)</a><br/>    <a href="#Helpers_getLoadingErrorKey">#getLoadingErrorKey(type)</a><br/>    <a href="#Helpers_getLoadingErrorClass">#getLoadingErrorClass(getItems)</a><br/>    <a href="#Helpers_datepickerHasError">#datepickerHasError(form, minPaymentDate, limitMaxDate)</a><br/>    <a href="#Helpers_datepickerError">#datepickerError(form, minPaymentDate, limitMaxDate)</a><br/>    <a href="#Helpers_finalDateDatePickerError">#finalDateDatePickerError(form, minPaymentDate, limitMaxDate)</a><br/>    <a href="#Helpers_datepickerErrorClass">#datepickerErrorClass(form, minPaymentDate, limitMaxDate)</a><br/>    <a href="#Helpers_cancelHandler">#cancelHandler()</a><br/>    <a href="#Helpers_allowNextStep">#allowNextStep(newPayment)</a><br/>    <a href="#Helpers_allowPreviousStep">#allowPreviousStep()</a><br/>    <a href="#Helpers_onFinish">#onFinish($ctrl)</a><br/>    <a href="#Helpers_onBeforeStepChange">#onBeforeStepChange($ctrl)</a><br/>    <a href="#Helpers_stepperLabels">#stepperLabels</a><br/>    <a href="#Helpers_alertOptions">#alertOptions</a><br/>    <a href="#Helpers_cancelModalLabels">#cancelModalLabels</a><br/>    <a href="#Helpers_datepickerOptions">#datepickerOptions(defaultOptions, extraOptions)</a><br/>    <a href="#Helpers_disableEndDateInput">#disableEndDateInput(newPayment)</a><br/>    <a href="#Helpers_disableNumInstancesInput">#disableNumInstancesInput(newPayment)</a><br/>    <a href="#Helpers_calculateNumberOfInstances">#calculateNumberOfInstances(newPayment)</a><br/>    <a href="#Helpers_onPaymentDateChange">#onPaymentDateChange(newPayment)</a><br/>    <a href="#Helpers_onPayeeChange">#onPayeeChange($ctrl)</a><br/>    <a href="#Helpers_onAmountChange">#onAmountChange($ctrl)</a><br/>    <a href="#Helpers_getLoadingErrorMessageKey">#getLoadingErrorMessageKey()</a><br/>    <a href="#Helpers_hasError">#hasError(inputName, form)</a><br/>    <a href="#Helpers_hasErrorClass">#hasErrorClass(inputName, form)</a><br/>    <a href="#Helpers_getError">#getError(inputName, form)</a><br/>    <a href="#Helpers_onPaymentAccountChange">#onPaymentAccountChange($ctrl)</a><br/>    <a href="#Helpers_generalErrorMessages">#generalErrorMessages</a><br/>    <a href="#Helpers_unrecoverableErrorMessages">#unrecoverableErrorMessages</a><br/>    <a href="#Helpers_unrecoverablePageErrorExists">#unrecoverablePageErrorExists()</a><br/>    <a href="#Helpers_unrecoverableErrorsExist">#unrecoverableErrorsExist()</a><br/>    <a href="#Helpers_errorsExist">#errorsExist()</a><br/>    <a href="#Helpers_currencyInputLabels">#currencyInputLabels</a><br/>
- **Hooks**<br/>    <a href="#Hooks_transformPayee">#transformPayee(payee)</a><br/>
- **Type Definitions**<br/>    <a href="#CancelHandler">CancelHandler</a><br/>

---

## Helpers

### <a name="Helpers_paymentFrequencyOptions"></a>*#paymentFrequencyOptions*

Different options for payment frequencies

**Type:** *Array*


### <a name="Helpers_i18nPaymentFrequencyOption"></a>*#i18nPaymentFrequencyOption(option)*

Return the i18n string for the given frequency option

| Parameter | Type | Description |
| :-- | :-- | :-- |
| option | String | The option selected for the frequency |

##### Returns

String - *i18n string*

### <a name="Helpers_i18nSingularPlural"></a>*#i18nSingularPlural(number, str)*

Take a number and i18n key. Append '.singular' or '.plural' to the key
 based on the number and filter that with i18n.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | The number to check the value of |
| str | String | The key to append to |

##### Returns

String - *The singular or plural message from messages.json*

### <a name="Helpers_getCurrencyCode"></a>*#getCurrencyCode()*

get the currency code from service

##### Returns

String - **

### <a name="Helpers_showFinalPaymentDate"></a>*#showFinalPaymentDate(newPayment)*

return whether to show the final payment date from the date service

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_showFinalPaymentDateAndNumInstances"></a>*#showFinalPaymentDateAndNumInstances(newPayment)*

return whether to show the final payment date and no. of instances from the
  date service

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_getFinalPaymentDateForNumberedInstances"></a>*#getFinalPaymentDateForNumberedInstances(newPayment)*

get the date of the final recurring payment from date service given that the
  numberOfInstances has been given by the user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Date - **

### <a name="Helpers_getFinalPaymentDateGivenEndDate"></a>*#getFinalPaymentDateGivenEndDate(newPayment)*

get the date of the final recurring payment from date service given that the
  the finalPaymentDate has been given

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Date - **

### <a name="Helpers_initialPageIsLoading"></a>*#initialPageIsLoading()*

Return true if the initial GET requests are running. Want to ensure that the
  template only renders once complete. The loading indicator flashes its child properties
  before hiding them

##### Returns

Boolean - **

### <a name="Helpers_hasLoadingError"></a>*#hasLoadingError(getItems)*

return true if passed in function returns no items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| getItems | Function |  |

##### Returns

Boolean - **

### <a name="Helpers_getLoadingErrorKey"></a>*#getLoadingErrorKey(type)*

return error message key for input type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | String | input type |

##### Returns

String - *error key*

### <a name="Helpers_getLoadingErrorClass"></a>*#getLoadingErrorClass(getItems)*

return error class if hasLoadingError is true

| Parameter | Type | Description |
| :-- | :-- | :-- |
| getItems | Function |  |

##### Returns

[{'was-validated is-invalid':boolean}](#{'was-validated is-invalid':boolean}) - *object with error class indicator*

### <a name="Helpers_datepickerHasError"></a>*#datepickerHasError(form, minPaymentDate, limitMaxDate)*

Check if the datepicker has errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | [DatepickerForm](#DatepickerForm) |  |
| minPaymentDate | Date |  |
| limitMaxDate | Boolean |  |

##### Returns

Boolean - *the datepicker has errors*

### <a name="Helpers_datepickerError"></a>*#datepickerError(form, minPaymentDate, limitMaxDate)*

Returns error string key if there is an error present

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | [DatepickerForm](#DatepickerForm) |  |
| minPaymentDate | Date |  |
| limitMaxDate | Boolean |  |

##### Returns

String - *error key or empty string*

### <a name="Helpers_finalDateDatePickerError"></a>*#finalDateDatePickerError(form, minPaymentDate, limitMaxDate)*

Function check for datepicker errors, and to possibly override the i18n keys
  from the default datepicker errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | [DatepickerForm](#DatepickerForm) |  |
| minPaymentDate | Date |  |
| limitMaxDate | Boolean |  |

##### Returns

String - **

### <a name="Helpers_datepickerErrorClass"></a>*#datepickerErrorClass(form, minPaymentDate, limitMaxDate)*

get datepicker error class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | [DatepickerForm](#DatepickerForm) |  |
| minPaymentDate | Date |  |
| limitMaxDate | Boolean |  |

##### Returns

[{'was-validated is-invalid':boolean}](#{'was-validated is-invalid':boolean}) - *object with error class indicator*

### <a name="Helpers_cancelHandler"></a>*#cancelHandler()*

Handle the cancel operations: initial click and confirmation.
  The confirmation function needs access to the control state of the stepper in order to
  reset it, so that is stored inside this function and updated when onCancel is called from
  the stepper component.

##### Returns

[CancelHandler](#CancelHandler) - **

### <a name="Helpers_allowNextStep"></a>*#allowNextStep(newPayment)*

Decide whether or not to allow the user to click to the next step, check that
  the 1st step is complete and that there are no unrecoverable errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_allowPreviousStep"></a>*#allowPreviousStep()*

Decide whether or not to allow the user to click to the previous step, check
  that there are no unrecoverable errors

##### Returns

Boolean - **

### <a name="Helpers_onFinish"></a>*#onFinish($ctrl)*

Function fired by the stepper when the user completes the steps

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object |  |
| $ctrl.newPayment | Object |  |
| $ctrl.clearPayeeFromStorage | Function |  |

### <a name="Helpers_onBeforeStepChange"></a>*#onBeforeStepChange($ctrl)*

Fired by the stepper before a step change occurs. Keeping track of the value of
  the paymentAmount. When the currency input field is rendered it triggers the change event,
  so we want to know if it has actually changed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object |  |
| $ctrl.newPayment | Object |  |
| $ctrl.newPayment.paymentAmount | Object |  |
| $ctrl.newPayment.paymentAmount.value | String |  |
### <a name="Helpers_stepperLabels"></a>*#stepperLabels*

Internationalised strings for the stepper buttons

**Type:** *Object*

### <a name="Helpers_alertOptions"></a>*#alertOptions*

Internationalised strings and model keys for alert options

**Type:** *Array*

### <a name="Helpers_cancelModalLabels"></a>*#cancelModalLabels*

Internationalised strings for the cancel modal

**Type:** *Object*


### <a name="Helpers_datepickerOptions"></a>*#datepickerOptions(defaultOptions, extraOptions)*

Set the datepicker options from the controller, and add any extra ones

| Parameter | Type | Description |
| :-- | :-- | :-- |
| defaultOptions | Object |  |
| extraOptions | Object |  |

##### Returns

Object - **

### <a name="Helpers_disableEndDateInput"></a>*#disableEndDateInput(newPayment)*

Disable the end date form field if the paymentDate isn't set or the way to
  determine when to stop payments isn't by end date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |
| newPayment.paymentDate | Date |  |
| newPayment.frequencyEnd | String |  |

##### Returns

Boolean - **

### <a name="Helpers_disableNumInstancesInput"></a>*#disableNumInstancesInput(newPayment)*

Disable the number of instances input if the way to determine when to stop
  payments isn't by end number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |
| newPayment.frequencyEnd | String |  |

##### Returns

Boolean - **

### <a name="Helpers_calculateNumberOfInstances"></a>*#calculateNumberOfInstances(newPayment)*

return the number of instances (payments) that will be made
  between two dates with a frequency set, until BUT NOT after the date
  Calls the date service function of the same name.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |
| newPayment.paymentDate | Date | the first payment date |
| newPayment.finalPaymentDate | Date | the date which payments are made up to but not after |
| newPayment.frequency | String | the name of the frequency of payments to be made |

##### Returns

Number - **

### <a name="Helpers_onPaymentDateChange"></a>*#onPaymentDateChange(newPayment)*

On change of payment date, clear any backend error and reset the final payment
  date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

### <a name="Helpers_onPayeeChange"></a>*#onPayeeChange($ctrl)*

On change of payee, clear any backend error and recalculate the first payment
  date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |
| $ctrl.newPayment | Object | newPayment object |
| $ctrl.updatePaymentDateForNewPayee | Function |  |

### <a name="Helpers_onAmountChange"></a>*#onAmountChange($ctrl)*

Clear backend field and page error.
  Special case for the amount field as the change event fires on when it loads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |

### <a name="Helpers_getLoadingErrorMessageKey"></a>*#getLoadingErrorMessageKey()*

get any error message

##### Returns

String - *message from error*

### <a name="Helpers_hasError"></a>*#hasError(inputName, form)*

Check if the field has form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| form | Object | angular form |

##### Returns

Boolean - **

### <a name="Helpers_hasErrorClass"></a>*#hasErrorClass(inputName, form)*

return class to indicate if field has error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| form | Object | angular form |

##### Returns

Object - **

### <a name="Helpers_getError"></a>*#getError(inputName, form)*

get form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| form | Object | angular form |

##### Returns

String - **

### <a name="Helpers_onPaymentAccountChange"></a>*#onPaymentAccountChange($ctrl)*

On change of payment account, clear any backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |
| $ctrl.newPayment | Object | newPayment object |
### <a name="Helpers_generalErrorMessages"></a>*#generalErrorMessages*

keys for general error messages for payments, not related to specific fields

**Type:** *Object*

### <a name="Helpers_unrecoverableErrorMessages"></a>*#unrecoverableErrorMessages*

keys for unrecoverable error messages for payments, not related to specific
  fields

**Type:** *Object*


### <a name="Helpers_unrecoverablePageErrorExists"></a>*#unrecoverablePageErrorExists()*

return true if there is a page error and it has unrecoverable
  set to true

##### Returns

Boolean - **

### <a name="Helpers_unrecoverableErrorsExist"></a>*#unrecoverableErrorsExist()*

return true if there are unrecoverable errors in the error map

##### Returns

Boolean - **

### <a name="Helpers_errorsExist"></a>*#errorsExist()*

return true if there are any errors in the error map

##### Returns

Boolean - **
### <a name="Helpers_currencyInputLabels"></a>*#currencyInputLabels*

Internationalised strings for the currency input control

**Type:** *Object*


---

---

## Hooks

extension hooks

### <a name="Hooks_transformPayee"></a>*#transformPayee(payee)*

Perform any transformations required to prepare the PayeeSummary item for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |

##### Returns

Object - *transformed payee*

## Type Definitions


### <a name="CancelHandler"></a>*CancelHandler*

Cancel Handler type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| onCancel | Function | Trigger an action for the user to confirm their decision |
| onConfirmCancel | Function | Process the confirmed cancel |

---
