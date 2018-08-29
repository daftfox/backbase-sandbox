# widget-bbm-initiate-payment-ng


Version: **2.89.20**

Mobile Initiate Payment widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Example

```javascript
<!-- Initiate Payment Form Extension -->
 <div ng-controller="FormController as $ctrl">
   <form name="initiate-payment-form">
     <input
       type="text"
       name="description"
       value="$ctrl.state.payment.data.description"/>
   </form>
 </div>
```

## Table of Contents
- **FormController**<br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processInitialPaymentState">#processInitialPaymentState(payment)</a><br/>    <a href="#Hooks_processPaymentPayload">#processPaymentPayload(paymentPayload)</a><br/>
- **InitiatePaymentService**<br/>    <a href="#InitiatePaymentService_getPreferences">#getPreferences()</a><br/>    <a href="#InitiatePaymentService_canSaveContact">#canSaveContact()</a><br/>    <a href="#InitiatePaymentService_isUrgentPaymentAllowed">#isUrgentPaymentAllowed(payment)</a><br/>    <a href="#InitiatePaymentService_makePayment">#makePayment()</a><br/>    <a href="#InitiatePaymentService_makePaymentWithAuthorization">#makePaymentWithAuthorization()</a><br/>    <a href="#InitiatePaymentService_saveContactIfNeeded">#saveContactIfNeeded()</a><br/>    <a href="#InitiatePaymentService_prepareBeneficiaries">#prepareBeneficiaries()</a><br/>    <a href="#InitiatePaymentService_prepareDebitAccounts">#prepareDebitAccounts()</a><br/>    <a href="#InitiatePaymentService_setBeneficiary">#setBeneficiary(beneficiary)</a><br/>    <a href="#InitiatePaymentService_setDebitAccount">#setDebitAccount(account)</a><br/>    <a href="#InitiatePaymentService_setPayment">#setPayment(payment)</a><br/>    <a href="#InitiatePaymentService_setSaveContact">#setSaveContact(saveContactValue)</a><br/>    <a href="#InitiatePaymentService_setSchedule">#setSchedule(schedule)</a><br/>    <a href="#InitiatePaymentService_setUrgentPayment">#setUrgentPayment(urgent)</a><br/>    <a href="#InitiatePaymentService_updateBeneficiaries">#updateBeneficiaries()</a><br/>    <a href="#InitiatePaymentService_initPaymentForm">#initPaymentForm()</a><br/>    <a href="#InitiatePaymentService_resetPayment">#resetPayment()</a><br/>    <a href="#InitiatePaymentService_startNewPayment">#startNewPayment(initialPaymentData)</a><br/>
- **widget-bbm-initiate-payment-ng**<br/>    <a href="#widget-bbm-initiate-payment-nguiError">uiError(error)</a><br/>    <a href="#widget-bbm-initiate-payment-ngsetSaveContact">setSaveContact(saveContact)</a><br/>    <a href="#widget-bbm-initiate-payment-ngsetSchedule">setSchedule(schedule)</a><br/>
- **Type Definitions**<br/>    <a href="#AccountView">AccountView</a><br/>    <a href="#ContactIdentification">ContactIdentification</a><br/>    <a href="#CreditAccountIdentification">CreditAccountIdentification</a><br/>    <a href="#DebitAccountIdentification">DebitAccountIdentification</a><br/>    <a href="#PaymentPayload">PaymentPayload</a><br/>    <a href="#SchedulePayload">SchedulePayload</a><br/>    <a href="#ContactAccount">ContactAccount</a><br/>    <a href="#ContactCreatePayload">ContactCreatePayload</a><br/>    <a href="#PaymentView">PaymentView</a><br/>    <a href="#Currency">Currency</a><br/>    <a href="#CurrenciesState">CurrenciesState</a><br/>    <a href="#BeneficiariesState">BeneficiariesState</a><br/>    <a href="#DebitAccountsState">DebitAccountsState</a><br/>    <a href="#PaymentState">PaymentState</a><br/>    <a href="#Payment">Payment</a><br/>    <a href="#Schedule">Schedule</a><br/>    <a href="#Beneficiary">Beneficiary</a><br/>    <a href="#Amount">Amount</a><br/>

---

## Preference

Widget preferences enum

---

## FormController

Initiate payment widget form controller.
Loads debit accounts and beneficiaries on start.
Provides API to make a payment.

| Injector Key |
| :-- |
| *FormController* |


### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.
Initializes payment form.

---

## Hooks

Hooks for widget-bbm-initiate-payment-ng.

### <a name="Hooks_processInitialPaymentState"></a>*#processInitialPaymentState(payment)*

Processes the initial payment object.

The widget uses this hook on start when the initial payment object is created.
Also the widget uses this when it resets the payment and starts another one.

Use it to add custom properties to the payment object.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment state, that is supposed to be processed |

##### Returns

[Payment](#Payment) - **

### <a name="Hooks_processPaymentPayload"></a>*#processPaymentPayload(paymentPayload)*

Processes the payload of a the payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentPayload | [PaymentPayload](#PaymentPayload) | Payment payload, that is supposed to be processed |

##### Returns

[Payment](#Payment) - **

---

## InitiatePaymentService

The service encapsulates the core functionality of the Initiate Payment Widget.

| Injector Key |
| :-- |
| *widget-bbm-initiate-payment-ng:service* |


### <a name="InitiatePaymentService_getPreferences"></a>*#getPreferences()*

Returns widget preferences.

##### Returns

Object - **

### <a name="InitiatePaymentService_canSaveContact"></a>*#canSaveContact()*

Checks whether the beneficiary can be saved to the address book as a new contact.

##### Returns

Boolean - **

### <a name="InitiatePaymentService_isUrgentPaymentAllowed"></a>*#isUrgentPaymentAllowed(payment)*

Checks if an urgent payment is allowed.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) |  |

##### Returns

Boolean - **

### <a name="InitiatePaymentService_makePayment"></a>*#makePayment()*

Makes a payment using the current state to get a payload for the request.

##### Returns

Promise - **

##### Fires Events:

> "bb.event.payment.done"

> "bb.event.payment.failed"

> "bb.event.payment.started"


### <a name="InitiatePaymentService_makePaymentWithAuthorization"></a>*#makePaymentWithAuthorization()*

Checks whether the payment should be authorized via pin code and
calls the pin code screen if needed.

##### Returns

Promise - **

### <a name="InitiatePaymentService_saveContactIfNeeded"></a>*#saveContactIfNeeded()*

Saves the selected beneficiary to the address book if needed.

### <a name="InitiatePaymentService_prepareBeneficiaries"></a>*#prepareBeneficiaries()*

Prepares the list of beneficiaries.

##### Returns

Promise - **

##### Fires Events:

> "bb.event.payment.selectAccount.load.start"

> "bb.event.payment.selectAccount.load.done"

> "bb.event.payment.selectAccount.failed"


### <a name="InitiatePaymentService_prepareDebitAccounts"></a>*#prepareDebitAccounts()*

Prepares the list of debit accounts.

##### Returns

Promise - **

##### Fires Events:

> "bb.event.payment.selectAccount.load.start"

> "bb.event.payment.selectAccount.load.done"

> "bb.event.payment.selectAccount.failed"


### <a name="InitiatePaymentService_setBeneficiary"></a>*#setBeneficiary(beneficiary)*

Handles the intent to change the selected beneficiary.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| beneficiary | [AccountView](#AccountView) |  |

### <a name="InitiatePaymentService_setDebitAccount"></a>*#setDebitAccount(account)*

Handles the intent to change the selected debit account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [AccountView](#AccountView) |  |

### <a name="InitiatePaymentService_setPayment"></a>*#setPayment(payment)*

Updates the payment state with the given payment object.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |

### <a name="InitiatePaymentService_setSaveContact"></a>*#setSaveContact(saveContactValue)*

Updates state of the "Save contact" flag.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| saveContactValue | Boolean |  |

### <a name="InitiatePaymentService_setSchedule"></a>*#setSchedule(schedule)*

Updates state of the payment schedule.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | Object |  |

### <a name="InitiatePaymentService_setUrgentPayment"></a>*#setUrgentPayment(urgent)*

Updates state of the "urgent" flag.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| urgent | Boolean |  |

### <a name="InitiatePaymentService_updateBeneficiaries"></a>*#updateBeneficiaries()*

Reloads beneficiaries.

##### Returns

Promise - **

### <a name="InitiatePaymentService_initPaymentForm"></a>*#initPaymentForm()*

Initializes the form.

##### Returns

Promise of Array - **

### <a name="InitiatePaymentService_resetPayment"></a>*#resetPayment()*

Resets the payment form.

### <a name="InitiatePaymentService_startNewPayment"></a>*#startNewPayment(initialPaymentData)*

Starts a new payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| initialPaymentData | Object |  |

---

### <a name="widget-bbm-initiate-payment-nguiError"></a>*uiError(error)*

Converts the given error to a UI error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Error |  |

##### Returns

Object - **

---

---

### <a name="widget-bbm-initiate-payment-ngsetSaveContact"></a>*setSaveContact(saveContact)*

Updates saveContact flag with the given value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| saveContact | Boolean |  |

---

### <a name="widget-bbm-initiate-payment-ngsetSchedule"></a>*setSchedule(schedule)*

Updates the schedule with the given value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | Object |  |

## Type Definitions


### <a name="AccountView"></a>*AccountView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal account identifier |
| name | String | The account's name, suitable for display to users |
| identifier | String (optional) | The identifier of the account from the user's perspective |
| amount | String (optional) | The most important associated value to be displayed |
| currency | String (optional) | Account currency |
| external | Boolean (optional) | Whether the account is external |

### <a name="ContactIdentification"></a>*ContactIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| counterpartyName | String | Counterparty name. Only required when 'scheme' is set to IBAN/BBAN. |
| identification | String | Identification of the product. Different schemes are supported: IBAN, BBAN, ID |
| scheme | String | The name of the scheme. For contacts is always "IBAN". |

### <a name="CreditAccountIdentification"></a>*CreditAccountIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| identification | String | Credit account ID |
| scheme | String | The name of the scheme. For credit accounts is always "ID". |

### <a name="DebitAccountIdentification"></a>*DebitAccountIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| identification | String | Debit account ID |
| scheme | String | The name of the scheme. For debit accounts is always "ID". |

### <a name="PaymentPayload"></a>*PaymentPayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccountIdentification | [DebitAccountIdentification](#DebitAccountIdentification) | Identification of the payment debit account |
| creditAccountIdentification | [CreditAccountIdentification](#CreditAccountIdentification) | Identification of the payment credit account |
| amount | Number | The amount of the payment |
| currency | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| description | String | The description for the payment. |
| paymentMode | String | Denotes whether payment will be single or will be recurring. Possible values are "SINGLE" and "RECURRING" |

### <a name="SchedulePayload"></a>*SchedulePayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| transferFrequency | String | Denotes how frequently the transfer should be made |
| on | Number | Denotes day on which transfer should be executed. For weekly it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month. For yearly it will be 1..12 indicating month of the year |
| startDate | String | When to start executing the schedule. First transfer will be executed on first calculated date by schedule after this date |
| repeat | Number | Number of transfer to be executed. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled |
| every | Number | Indicates skip interval of transfer. 1 would mean execute every time, 2 - every other time |
| endDate | String (optional) | When to stop transfers. Transfers will not be executed after this date. Only one of endDate and repeat is possible. If neither repeat nor endDate is provided transfer will be executed until canceled |

### <a name="ContactAccount"></a>*ContactAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | Contact's IBAN |

### <a name="ContactCreatePayload"></a>*ContactCreatePayload*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Contact's name |
| accounts | Array of [ContactAccount](#ContactAccount) | List of contact's accounts |

### <a name="PaymentView"></a>*PaymentView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| allowedCurrencies | Array of [Currency](#Currency) | List of allowed currencies |
| contacts | Array | List of contacts |
| currencies | [CurrenciesState](#CurrenciesState) | List of currencies |
| beneficiaries | [BeneficiariesState](#BeneficiariesState) | State of the beneficiaries |
| debitAccounts | [DebitAccountsState](#DebitAccountsState) | State of the debit accounts |
| payment | [PaymentState](#PaymentState) | State of the payment |

### <a name="Currency"></a>*Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Currency name, suitable for display to users |

### <a name="CurrenciesState"></a>*CurrenciesState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if the request to retrieve currencies failed |
| loading | Boolean | Indicates whether the list of currencies is being loading |
| data | Array of [Currency](#Currency) | List of currencies |

### <a name="BeneficiariesState"></a>*BeneficiariesState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if beneficiaries request failed |
| loading | Boolean | Indicates whether beneficiaries are being loading |
| data | Array of [AccountView](#AccountView) | List of beneficiaries |

### <a name="DebitAccountsState"></a>*DebitAccountsState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if accounts request failed |
| loading | Boolean | Indicates whether debit accounts are being loading |
| data | Array of [AccountView](#AccountView) | List of accounts |

### <a name="PaymentState"></a>*PaymentState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| error | Error | Error if payment request failed |
| loading | Boolean | Indicates whether a payment request is being sending |
| data | [Payment](#Payment) | Payment data |

### <a name="Payment"></a>*Payment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccount | [AccountView](#AccountView) | Selected debit account |
| beneficiary | [Beneficiary](#Beneficiary) | Selected beneficiary |
| amount | [Amount](#Amount) | Amount and currency of the payment |
| description | String | Description of the payment |
| saveContact | Boolean | Whether the beneficiary should be saved to address book |
| schedule | [Schedule](#Schedule) | Schedule for recurring transfer |

### <a name="Schedule"></a>*Schedule*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| transferFrequency | String | How frequently the transfer should be made |
| startDate | Date | When to start executing the schedule |
| endDate | Date (optional) | When to stop transfers |

### <a name="Beneficiary"></a>*Beneficiary*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Beneficiary name |
| identifier | String | Beneficiary identifier |

### <a name="Amount"></a>*Amount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| currency | String | Currency code |
| value | Number | Amount value |

---

## Templates

* *template.ng.html*

---
