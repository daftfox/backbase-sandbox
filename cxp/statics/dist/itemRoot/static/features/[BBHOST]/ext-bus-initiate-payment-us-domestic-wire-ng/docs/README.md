# ext-bus-initiate-payment-us-domestic-wire-ng


Version: **2.37.9**


## Imports

* lib-bb-iban
* ui-bb-account-selector-ng
* ui-bb-autocomplete-search-ng
* ui-bb-bank-validations-ng
* ui-bb-button-spinner-ng
* ui-bb-calendar-popup-ng
* ui-bb-char-counter-ng
* ui-bb-confirm-ng
* ui-bb-credit-suggest-ng
* ui-bb-currency-input-ng
* ui-bb-dropdown-select-ng
* ui-bb-empty-state-ng
* ui-bb-expandable-ng
* ui-bb-form-navigate-away-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
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
- **Exports**<br/>    <a href="#intents">intents</a><br/>    <a href="#helpers">helpers</a><br/>    <a href="#events">events</a><br/>
- **Constants**<br/>    <a href="#Constants_WidgetName">#WidgetName</a><br/>    <a href="#Constants_PaymentType">#PaymentType</a><br/>    <a href="#Constants_RecurrenceEnding">#RecurrenceEnding</a><br/>    <a href="#Constants_TransferFrequency">#TransferFrequency</a><br/>    <a href="#Constants_RecurrenceFrequencies">#RecurrenceFrequencies</a><br/>    <a href="#Constants_SingleFrequency">#SingleFrequency</a><br/>    <a href="#Constants_ScheduleRepeatValue">#ScheduleRepeatValue</a><br/>    <a href="#Constants_PaymentReferencePattern">#PaymentReferencePattern</a><br/>    <a href="#Constants_USStates">#USStates</a><br/>    <a href="#Constants_Intent">#Intent</a><br/>
- **ext-bus-initiate-payment-us-domestic-wire-ng**<br/>    <a href="#ext-bus-initiate-payment-us-domestic-wire-ngBENEFICIARY_SELECTOR_MODAL">BENEFICIARY_SELECTOR_MODAL</a><br/>    <a href="#ext-bus-initiate-payment-us-domestic-wire-ngBENEFICIARY_LIST_SIZE">BENEFICIARY_LIST_SIZE</a><br/>
- **Helpers**<br/>    <a href="#Helpers_fromModelToForm">#fromModelToForm(payment)</a><br/>    <a href="#Helpers_getContacts">#getContacts()</a><br/>    <a href="#Helpers_getPayment">#getPayment()</a><br/>    <a href="#Helpers_getCreditAccounts">#getCreditAccounts()</a><br/>    <a href="#Helpers_getSchedule">#getSchedule()</a><br/>    <a href="#Helpers_getBeneficiary">#getBeneficiary()</a><br/>    <a href="#Helpers_getBeneficiaryPostalAddress">#getBeneficiaryPostalAddress()</a><br/>    <a href="#Helpers_getBeneficiaryBank">#getBeneficiaryBank()</a><br/>    <a href="#Helpers_getBeneficiaryCorrespondentBank">#getBeneficiaryCorrespondentBank()</a><br/>    <a href="#Helpers_getDebitAccounts">#getDebitAccounts()</a><br/>    <a href="#Helpers_getReview">#getReview()</a><br/>    <a href="#Helpers_getMinDate">#getMinDate(startDate, transferFrequency)</a><br/>    <a href="#Helpers_getScheduleText">#getScheduleText()</a><br/>    <a href="#Helpers_getFrequencies">#getFrequencies()</a><br/>    <a href="#Helpers_setEndDate">#setEndDate()</a><br/>    <a href="#Helpers_loadContactsByName">#loadContactsByName(name, size )</a><br/>    <a href="#Helpers_selectContact">#selectContact(model)</a><br/>    <a href="#Helpers_selectContactModal">#selectContactModal(model)</a><br/>    <a href="#Helpers_resetContact">#resetContact()</a><br/>    <a href="#Helpers_setDefaultOcurrencesValue">#setDefaultOcurrencesValue()</a><br/>    <a href="#Helpers_getBeneficiaryAddressText">#getBeneficiaryAddressText()</a><br/>    <a href="#Helpers_getBankAddressText">#getBankAddressText()</a><br/>    <a href="#Helpers_isSaveNewContactEnabled">#isSaveNewContactEnabled()</a><br/>    <a href="#Helpers_formToContact">#formToContact(beneficiary)</a><br/>    <a href="#Helpers_formToPayment">#formToPayment(payment)</a><br/>    <a href="#Helpers_canSaveDraft">#canSaveDraft(form)</a><br/>    <a href="#Helpers_getDraftPayment">#getDraftPayment(payment)</a><br/>    <a href="#Helpers_closeEditDraft">#closeEditDraft()</a><br/>    <a href="#Helpers_updateDraft">#updateDraft()</a><br/>    <a href="#Helpers_isAllowedPaymentPrivilege">#isAllowedPaymentPrivilege(privilege)</a><br/>    <a href="#Helpers_getPostActionsOptions">#getPostActionsOptions()</a><br/>    <a href="#Helpers_getNotificationByType">#getNotificationByType(msg)</a><br/>    <a href="#Helpers_removeNotification">#removeNotification(notification, notificationsList)</a><br/>    <a href="#Helpers_paymentTypeOptions">#paymentTypeOptions</a><br/>    <a href="#Helpers_switchPaymentType">#switchPaymentType(paymentType)</a><br/>    <a href="#Helpers_isModal">#isModal(configValue)</a><br/>    <a href="#Helpers_toggleModalSelector">#toggleModalSelector(ext)</a><br/>    <a href="#Helpers_reviewPayment">#reviewPayment($ctrl, form)</a><br/>    <a href="#Helpers_formUntouched">#formUntouched()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_defaultPaymentType">#defaultPaymentType()</a><br/>    <a href="#Hooks_defaultScheduleRepeat">#defaultScheduleRepeat()</a><br/>
- **Intents**<br/>    <a href="#Intents_initiatePayment">#initiatePayment(initialPaymentData)</a><br/>    <a href="#Intents_viewPaymentOrders">#viewPaymentOrders()</a><br/>
- **Type Definitions**<br/>    <a href="#PostActionOption">PostActionOption</a><br/>    <a href="#PaymentTypeOption">PaymentTypeOption</a><br/>

## Exports

### <a name="intents"></a>*intents*


**Type:** *[ExtensionIntents](lib-bb-extension-intents-ng.html#ExtensionIntents)*

### <a name="helpers"></a>*helpers*


**Type:** *[ExtensionHelpers](lib-bb-extension-helpers-ng.html#ExtensionHelpers)*

### <a name="events"></a>*events*


**Type:** *[ExtensionEvents](lib-bb-extension-events-ng.html#ExtensionEvents)*


---

## Constants

### <a name="Constants_WidgetName"></a>*#WidgetName*

Widget name

**Type:** *String*

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

### <a name="Constants_PaymentReferencePattern"></a>*#PaymentReferencePattern*

Pattern for payment reference validation

**Type:** *String*

### <a name="Constants_USStates"></a>*#USStates*

List of United States of America states

**Type:** *Array*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Full state name |
| abbreviation | String | Two character state identifier |

## Example

```javascript
[
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  ...
  {
    name: 'New York',
    abbreviation: 'NY',
  },
]
```
### <a name="Constants_Intent"></a>*#Intent*


**Type:** *Object*


---
### <a name="ext-bus-initiate-payment-us-domestic-wire-ngBENEFICIARY_SELECTOR_MODAL"></a>*BENEFICIARY_SELECTOR_MODAL*

Beneficiary selector modal type

**Type:** *String*


---
### <a name="ext-bus-initiate-payment-us-domestic-wire-ngBENEFICIARY_LIST_SIZE"></a>*BENEFICIARY_LIST_SIZE*

Max number of item that should be visible in beneficiary account seleter listbox

**Type:** *Number*


---

## Helpers


### <a name="Helpers_fromModelToForm"></a>*#fromModelToForm(payment)*

Transforms payment model coming from server to for model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | Payment model from server |

##### Returns

Object - *Transformed payment*

### <a name="Helpers_getContacts"></a>*#getContacts()*

Retrieve payment data from state store

##### Returns

Object - **

### <a name="Helpers_getPayment"></a>*#getPayment()*

Retrieve payment data from state store

##### Returns

Object - **

### <a name="Helpers_getCreditAccounts"></a>*#getCreditAccounts()*

Retrieve credit accounts data from state store

##### Returns

Array - **

### <a name="Helpers_getSchedule"></a>*#getSchedule()*

Retrieve payment schedule data from state store

##### Returns

Object - **

### <a name="Helpers_getBeneficiary"></a>*#getBeneficiary()*

Retrieve payment beneficiary data from state store

##### Returns

Object - **

### <a name="Helpers_getBeneficiaryPostalAddress"></a>*#getBeneficiaryPostalAddress()*

Retrieve beneficiary postalAddress data from state store

##### Returns

Object - **

### <a name="Helpers_getBeneficiaryBank"></a>*#getBeneficiaryBank()*

Retrieve beneficiary bank data from state store

##### Returns

Object - **

### <a name="Helpers_getBeneficiaryCorrespondentBank"></a>*#getBeneficiaryCorrespondentBank()*

Retrieve beneficiary correspondent bank data from state store

##### Returns

Object - **

### <a name="Helpers_getDebitAccounts"></a>*#getDebitAccounts()*

Retrieve debit accounts data from state store

##### Returns

Object - **

### <a name="Helpers_getReview"></a>*#getReview()*

Retrieve review from state store

##### Returns

Object - **

### <a name="Helpers_getMinDate"></a>*#getMinDate(startDate, transferFrequency)*

Get the minimum available date for specific frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| startDate | Date |  |
| transferFrequency | Object |  |

##### Returns

Date - **

### <a name="Helpers_getScheduleText"></a>*#getScheduleText()*

Compiles the scheduling description out of payment object params.
In this process, following translation keys are being used:
form.schedule.starting, for word "Starting"
form.schedule.today, for word "Today"
form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
and name of the transfer frequency set in constants file

##### Returns

String - *Compiled text that can be used as scheduling value in views*

### <a name="Helpers_getFrequencies"></a>*#getFrequencies()*

Returns frequencies for payment depending on occurences number

##### Returns

Array of Object - *Array of transfer frequencies*

### <a name="Helpers_setEndDate"></a>*#setEndDate()*

Updates scheduled end date

### <a name="Helpers_loadContactsByName"></a>*#loadContactsByName(name, size )*

Loads list of contacts filtered by contact name
Group accounts by internal or external type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | Name of the contact |
| size  | Number | Number of returned items |

##### Returns

Promise of Object - **

### <a name="Helpers_selectContact"></a>*#selectContact(model)*

Set beneficiary fields when selecting contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Contact model |

### <a name="Helpers_selectContactModal"></a>*#selectContactModal(model)*

Set beneficiary fields when selecting contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Contact model |

### <a name="Helpers_resetContact"></a>*#resetContact()*

Resets all the beneficiary fields

### <a name="Helpers_setDefaultOcurrencesValue"></a>*#setDefaultOcurrencesValue()*

Sets starting ocurrences number if not defined use default one

### <a name="Helpers_getBeneficiaryAddressText"></a>*#getBeneficiaryAddressText()*

Get human readable beneficiary address text

##### Returns

String - **

### <a name="Helpers_getBankAddressText"></a>*#getBankAddressText()*

Get human readable bank address text

##### Returns

String - **

### <a name="Helpers_isSaveNewContactEnabled"></a>*#isSaveNewContactEnabled()*

Checks if save new contact checkbox should be enabled

##### Returns

Boolean - **

### <a name="Helpers_formToContact"></a>*#formToContact(beneficiary)*

Transforms form fields to contact model to be saved

| Parameter | Type | Description |
| :-- | :-- | :-- |
| beneficiary | Object | The beneficiary fields |

##### Returns

Object - **

### <a name="Helpers_formToPayment"></a>*#formToPayment(payment)*

Transforms form fields to payment model to be saved

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | The payment fields |

##### Returns

Object - **

### <a name="Helpers_canSaveDraft"></a>*#canSaveDraft(form)*

Returns true if at least credit account, beneficiary or any amount
filled in

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Form state |

##### Returns

Boolean - **

### <a name="Helpers_getDraftPayment"></a>*#getDraftPayment(payment)*

Get purified draft payment model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | The payment fields |

##### Returns

Object - **

### <a name="Helpers_closeEditDraft"></a>*#closeEditDraft()*

Close edit draft and navigate to view payment orders intent

### <a name="Helpers_updateDraft"></a>*#updateDraft()*

Updates current draft payment and redirects to view draft payments if succesfully edited

### <a name="Helpers_isAllowedPaymentPrivilege"></a>*#isAllowedPaymentPrivilege(privilege)*

Checks if use is allowed to perform `privilege` on domestic wire payment context

| Parameter | Type | Description |
| :-- | :-- | :-- |
| privilege | String |  |

##### Returns

Boolean - *Wether if user is allowed or not on `privilege`*

### <a name="Helpers_getPostActionsOptions"></a>*#getPostActionsOptions()*

Returns available post submit actions depending on privileges

##### Returns

Array of [PostActionOption](#PostActionOption) - *Allowed post submit actions collection*

### <a name="Helpers_getNotificationByType"></a>*#getNotificationByType(msg)*

Returns notification object depends on its type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| msg | Object | Approval result |

##### Returns

[{message: string](#{message: string), [level: string}](#level: string}) - **

### <a name="Helpers_removeNotification"></a>*#removeNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Array - **
### <a name="Helpers_paymentTypeOptions"></a>*#paymentTypeOptions*

Collection of supported payment types to switch between each other

**Type:** *Array of [PaymentTypeOption](#PaymentTypeOption)*


### <a name="Helpers_switchPaymentType"></a>*#switchPaymentType(paymentType)*

Shows confirmation popup if data in payment has been changed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentType | [PaymentType](model-bb-payment-orders-ng.html#PaymentType) | Payment type identifier |

##### Returns

Boolean - *True if payment has not been changed, false otherwise*

### <a name="Helpers_isModal"></a>*#isModal(configValue)*

Helper to check if we should use modal beneficiary selector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| configValue | String |  |

##### Returns

Boolean - **

### <a name="Helpers_toggleModalSelector"></a>*#toggleModalSelector(ext)*

Toggle modal selector popup visibility (show/hide)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object |  |

### <a name="Helpers_reviewPayment"></a>*#reviewPayment($ctrl, form)*

Called when submitting payment for review, it actually calls a hook that
can be customized with all the validations needed by the specific project.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Payment controller |
| form | Object | Angular form object |

##### Returns

Promise or [HTMLElement](#HTMLElement) - **

### <a name="Helpers_formUntouched"></a>*#formUntouched()*

Checks if form model has been changed

##### Returns

Boolean - *Wheter model has been updated or not*

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

---

## Intents


### <a name="Intents_initiatePayment"></a>*#initiatePayment(initialPaymentData)*

Handles the intent to initiate a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| initialPaymentData | Object | Initial payment |

### <a name="Intents_viewPaymentOrders"></a>*#viewPaymentOrders()*

The intent to view payment orders.

## Type Definitions


### <a name="PostActionOption"></a>*PostActionOption*

Post Action Option type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | Number | Unique id to identify the option |
| key | String | Translation key |
| postAction | [SubmitPostActions](widget-bb-initiate-us-payment-ng.html#SubmitPostActions) | Type of post action |
| selected | Boolean (optional) | Indicates if it is selected or not |
| permission | String | Permission that allows to select the option |

### <a name="PaymentTypeOption"></a>*PaymentTypeOption*

Payment Type Option type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Localized payment type option |
| value | [PaymentType](model-bb-payment-orders-ng.html#PaymentType) | Payment type identifier |

---
