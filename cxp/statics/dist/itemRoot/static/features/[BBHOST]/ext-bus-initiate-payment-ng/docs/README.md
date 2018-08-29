# ext-bus-initiate-payment-ng


Version: **3.36.20**

Business extension for widget-bb-initiate-payment-ng

## Imports

* ui-bb-account-card-ng
* ui-bb-account-selector-ng
* ui-bb-button-spinner-ng
* ui-bb-calendar-popup-ng
* ui-bb-char-counter-ng
* ui-bb-confirm-ng
* ui-bb-credit-suggest-ng
* ui-bb-currency-input-ng
* ui-bb-empty-state-ng
* ui-bb-expandable-ng
* ui-bb-form-navigate-away-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
* ui-bb-number-input-ng
* ui-bb-parent-responsiveness-ng
* ui-bb-submit-dropup-ng
* ui-bb-substitute-error-ng
* ui-bb-switcher-ng
* ui-bus-beneficiary-select-modal-ng
* ui-bus-format-amount-ng
* vendor-bb-angular
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages
* vendor-bb-angular-sanitize
* vendor-bb-uib-alert
* vendor-bb-uib-popover

---

## Table of Contents
- **ext-bus-initiate-payment-ng**<br/>    <a href="#ext-bus-initiate-payment-ngtransferFrequencies">transferFrequencies</a><br/>    <a href="#ext-bus-initiate-payment-ngpaymentReferencePattern">paymentReferencePattern</a><br/>    <a href="#ext-bus-initiate-payment-ngsubmitButtonTypes">submitButtonTypes(privileges)</a><br/>    <a href="#ext-bus-initiate-payment-ngIBAN_MAX_LENGTH">IBAN_MAX_LENGTH</a><br/>    <a href="#ext-bus-initiate-payment-ngINIT_VALIDATION_STATE">INIT_VALIDATION_STATE</a><br/>    <a href="#ext-bus-initiate-payment-ngBENEFICIARY_SELECTOR_MODAL">BENEFICIARY_SELECTOR_MODAL</a><br/>    <a href="#ext-bus-initiate-payment-ngDEFAULT_CURRENCY">DEFAULT_CURRENCY</a><br/>    <a href="#ext-bus-initiate-payment-nghideAfterPaymentMessage">hideAfterPaymentMessage()</a><br/>    <a href="#ext-bus-initiate-payment-nghideDraftMessage">hideDraftMessage()</a><br/>    <a href="#ext-bus-initiate-payment-nghideValidationMessage">hideValidationMessage(validation, item)</a><br/>    <a href="#ext-bus-initiate-payment-nghideAllMessages">hideAllMessages($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngshowCrossCurrencyMessage">showCrossCurrencyMessage($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngcanSelectUrgentPayment">canSelectUrgentPayment($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngresetPayment">resetPayment($ctrl, scope)</a><br/>    <a href="#ext-bus-initiate-payment-ngmakePayment">makePayment($ctrl, scope)</a><br/>    <a href="#ext-bus-initiate-payment-ngonAccountChange">onAccountChange($ctrl, selectedAccount)</a><br/>    <a href="#ext-bus-initiate-payment-ngtoggleCreditSuggestGroup">toggleCreditSuggestGroup(event, model, ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngreviewPayment">reviewPayment($ctrl, scope, form)</a><br/>    <a href="#ext-bus-initiate-payment-nggetAccounts">getAccounts(accounts)</a><br/>    <a href="#ext-bus-initiate-payment-nggetScheduleText">getScheduleText($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-nggetFrequencies">getFrequencies($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-nggetMinDate">getMinDate(startDate, transferFrequency)</a><br/>    <a href="#ext-bus-initiate-payment-nginitPayment">initPayment($ctrl, form)</a><br/>    <a href="#ext-bus-initiate-payment-ngcanSaveDraft">canSaveDraft($ctrl, formErrors)</a><br/>    <a href="#ext-bus-initiate-payment-ngsaveDraft">saveDraft($ctrl, form)</a><br/>    <a href="#ext-bus-initiate-payment-ngeditDraft">editDraft($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngisDraftSaving">isDraftSaving()</a><br/>    <a href="#ext-bus-initiate-payment-ngisDraftSaveError">isDraftSaveError()</a><br/>    <a href="#ext-bus-initiate-payment-ngisDraftSaveSuccess">isDraftSaveSuccess()</a><br/>    <a href="#ext-bus-initiate-payment-ngformUntouched">formUntouched($ctrl)</a><br/>    <a href="#ext-bus-initiate-payment-ngisAfterPaymentSuccess">isAfterPaymentSuccess()</a><br/>    <a href="#ext-bus-initiate-payment-ngselectPaymentSubmitType">selectPaymentSubmitType(type, $ctrl, scope)</a><br/>    <a href="#ext-bus-initiate-payment-ngcloseEditDraft">closeEditDraft($ctrl, ext, callback)</a><br/>    <a href="#ext-bus-initiate-payment-nggetMessagePrefix">getMessagePrefix(error)</a><br/>

---
### <a name="ext-bus-initiate-payment-ngtransferFrequencies"></a>*transferFrequencies*

Array of recurring frequency objects with the following properties (all mandatory)

**Type:** *Array*


| Property | Type | Description |
| :-- | :-- | :-- |
| object.name | String | Translation key of the label that will be displayed to the end user |
| object.value | String | Denotes frequency type of transfer. Possible values: DAILY/WEEKLY/MONTHLY/YEARLY |
| object.every | Number | Indicates skip interval of transfer. 1 would mean execute every time, 2 - every other time |

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

---
### <a name="ext-bus-initiate-payment-ngpaymentReferencePattern"></a>*paymentReferencePattern*

Pattern for payment reference validation

**Type:** *String*


---

### <a name="ext-bus-initiate-payment-ngsubmitButtonTypes"></a>*submitButtonTypes(privileges)*

Returns submit button types allowed by user permissions, or
all types if there are no any permissions provided

| Parameter | Type | Description |
| :-- | :-- | :-- |
| privileges | Object | allowed |

##### Returns

Array - **

---
### <a name="ext-bus-initiate-payment-ngIBAN_MAX_LENGTH"></a>*IBAN_MAX_LENGTH*

Maximum IBAN length

**Type:** *Number*


---
### <a name="ext-bus-initiate-payment-ngINIT_VALIDATION_STATE"></a>*INIT_VALIDATION_STATE*

Initial state before backend validation (payment is valid)

**Type:** *[{valid: boolean](#{valid: boolean), [messages: Array}](#messages: Array})*


---
### <a name="ext-bus-initiate-payment-ngBENEFICIARY_SELECTOR_MODAL"></a>*BENEFICIARY_SELECTOR_MODAL*

Beneficiary selector modal type

**Type:** *String*


---
### <a name="ext-bus-initiate-payment-ngDEFAULT_CURRENCY"></a>*DEFAULT_CURRENCY*

Default currency code

**Type:** *String*


---

### <a name="ext-bus-initiate-payment-nghideAfterPaymentMessage"></a>*hideAfterPaymentMessage()*

Clear payment submit result variable to hide respective message

##### Returns

Undefined - **

---

### <a name="ext-bus-initiate-payment-nghideDraftMessage"></a>*hideDraftMessage()*

Clear draft result variables to hide respective messages

##### Returns

Undefined - **

---

### <a name="ext-bus-initiate-payment-nghideValidationMessage"></a>*hideValidationMessage(validation, item)*

Remove validation error item from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| validation | Object | wrapper |
| item | Object |  |

---

### <a name="ext-bus-initiate-payment-nghideAllMessages"></a>*hideAllMessages($ctrl)*

Hide all messages

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | controller |

---

### <a name="ext-bus-initiate-payment-ngshowCrossCurrencyMessage"></a>*showCrossCurrencyMessage($ctrl)*

Returns cross-currency messages if they should be shown

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Object - *Cross currency messages*

---

### <a name="ext-bus-initiate-payment-ngcanSelectUrgentPayment"></a>*canSelectUrgentPayment($ctrl)*

Checks if layout should show 'Urgent payment' switcher

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Boolean - *True if urget payment switchet should be shown, false otherwise*

---

### <a name="ext-bus-initiate-payment-ngresetPayment"></a>*resetPayment($ctrl, scope)*

Resets payment order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |
| scope | Object | Template scope |

##### Returns

Promise of [any](#any) - **

---

### <a name="ext-bus-initiate-payment-ngmakePayment"></a>*makePayment($ctrl, scope)*

Makes new payment request and changes step on success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| scope | Object | Parent ng scope |

##### Returns

Object - *Payment request Promise*

---

### <a name="ext-bus-initiate-payment-ngonAccountChange"></a>*onAccountChange($ctrl, selectedAccount)*

Handler for Account From change action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| selectedAccount | Object |  |

##### Returns

Object - *A Promise object*

---

### <a name="ext-bus-initiate-payment-ngtoggleCreditSuggestGroup"></a>*toggleCreditSuggestGroup(event, model, ctrl)*

Toggle group in credit-suggest component

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object | Event object |
| model | Object |  |
| ctrl | Object | Widget's controller |

---

### <a name="ext-bus-initiate-payment-ngreviewPayment"></a>*reviewPayment($ctrl, scope, form)*

Called when submitting payment for review, it actually calls a hook that
can be customized with all the validations needed by the specific project.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| scope | Object | Parent ng scope |
| form | Object | Angular form object |

##### Returns

Promise or [HTMLElement](#HTMLElement) - **

---

### <a name="ext-bus-initiate-payment-nggetAccounts"></a>*getAccounts(accounts)*

Transforms provided accounts to custom structure. External contacts account list will be
flattened to be molded to same structure as internal accounts
(identifier=IBAN/BBAN, name=contactperson).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object |  |

##### Returns

Array of Object - *View accounts*

---

### <a name="ext-bus-initiate-payment-nggetScheduleText"></a>*getScheduleText($ctrl)*

Compiles the scheduling description out of payment object params.

In this process, following translation keys are being used:

form.schedule.starting, for word "Starting"

form.schedule.today, for word "Today"

form.schedule.on, for word "On" (used before date to form "on 01.01.2017")

form.schedule.until, for word "until" (used before date to form "until 01.01.2017")

form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")

and name of the transfer frequency set in constants file

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

String - *Compiled text that can be used as scheduling value in views*

---

### <a name="ext-bus-initiate-payment-nggetFrequencies"></a>*getFrequencies($ctrl)*

Returns frequencies for payment depending on occurences number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Array of Object - *Array of transfer frequencies*

---

### <a name="ext-bus-initiate-payment-nggetMinDate"></a>*getMinDate(startDate, transferFrequency)*

Get the minimum available date for specific frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| startDate | Date |  |
| transferFrequency | Object |  |

##### Returns

Date - **

---

### <a name="ext-bus-initiate-payment-nginitPayment"></a>*initPayment($ctrl, form)*

Initiate payment form initialization and clear possible
error validation results

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | undefined | Widget controller |
| form | undefined | to be cleared |

---

### <a name="ext-bus-initiate-payment-ngcanSaveDraft"></a>*canSaveDraft($ctrl, formErrors)*

Returns true if at least credit account, beneficiary or any amount
filled in

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |
| formErrors | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-initiate-payment-ngsaveDraft"></a>*saveDraft($ctrl, form)*

Initiate draft payment save

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |
| form | Object | to be cleared |

---

### <a name="ext-bus-initiate-payment-ngeditDraft"></a>*editDraft($ctrl)*

Initiate draft payment edit save

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

---

### <a name="ext-bus-initiate-payment-ngisDraftSaving"></a>*isDraftSaving()*

Returns true if draft payment is being saved and false otherwise

##### Returns

Boolean - **

---

### <a name="ext-bus-initiate-payment-ngisDraftSaveError"></a>*isDraftSaveError()*

Returns null if draft payment is saved successfully
and error object otherwise

##### Returns

Object or Null - **

---

### <a name="ext-bus-initiate-payment-ngisDraftSaveSuccess"></a>*isDraftSaveSuccess()*

Returns null if draft payment is saved with error
and response object otherwise

##### Returns

Object or Null - **

---

### <a name="ext-bus-initiate-payment-ngformUntouched"></a>*formUntouched($ctrl)*

Returns true if the form fields are in initial values and false otherwise

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Widget controller |

##### Returns

Boolean - **

---

### <a name="ext-bus-initiate-payment-ngisAfterPaymentSuccess"></a>*isAfterPaymentSuccess()*

Returns null if payment is submitted with error
and true otherwise

##### Returns

Boolean or Null - **

---

### <a name="ext-bus-initiate-payment-ngselectPaymentSubmitType"></a>*selectPaymentSubmitType(type, $ctrl, scope)*

Makes payment and applies after action (create new payment,
approve submitted payment, etc.)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | Object | submit button |
| $ctrl | Object | Widget controller |
| scope | Object |  |

##### Returns

Promise - **

---

### <a name="ext-bus-initiate-payment-ngcloseEditDraft"></a>*closeEditDraft($ctrl, ext, callback)*

Decides if to show the "save changes" confirmation popup or to
run a callback instead

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | controller |
| ext | Object | extension |
| callback | Function | function |

---

### <a name="ext-bus-initiate-payment-nggetMessagePrefix"></a>*getMessagePrefix(error)*

Returns rejected value or "problematic" field name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object |  |

##### Returns

String - **

---

---
