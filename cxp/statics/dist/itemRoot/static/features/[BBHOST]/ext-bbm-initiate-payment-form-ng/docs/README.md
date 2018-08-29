# ext-bbm-initiate-payment-form-ng


Version: **3.37.9**

Mobile extension for the payment form in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-amount-field-ng
* ui-bbm-beneficiary-select-ng
* ui-bbm-switch-ng
* ui-bbm-textfield-ng
* vendor-bb-angular-ng-messages

---

## Example

```javascript
<!-- File model.xml of widget-bbm-initiate-payment-ng -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getPayment">#getPayment()</a><br/>    <a href="#Helpers_getAllBeneficiaries">#getAllBeneficiaries()</a><br/>    <a href="#Helpers_getDebitAccount">#getDebitAccount()</a><br/>    <a href="#Helpers_getDebitAccountCurrency">#getDebitAccountCurrency()</a><br/>    <a href="#Helpers_getDebitAccountIdentifier">#getDebitAccountIdentifier()</a><br/>    <a href="#Helpers_getDebitAccountDisplayAmount">#getDebitAccountDisplayAmount()</a><br/>    <a href="#Helpers_getDebitAccountDisplayName">#getDebitAccountDisplayName()</a><br/>    <a href="#Helpers_hasDebitAccount">#hasDebitAccount()</a><br/>    <a href="#Helpers_showSaveContact">#showSaveContact(form)</a><br/>    <a href="#Helpers_getScheduleSummary">#getScheduleSummary(schedule)</a><br/>    <a href="#Helpers_isCreateBeneficiaryAllowed">#isCreateBeneficiaryAllowed()</a><br/>    <a href="#Helpers_showUrgentToggle">#showUrgentToggle()</a><br/>    <a href="#Helpers_onUrgentPaymentInfoClick">#onUrgentPaymentInfoClick()</a><br/>    <a href="#Helpers_isPaymentFormValid">#isPaymentFormValid(form)</a><br/>    <a href="#Helpers_submitPayment">#submitPayment()</a><br/>    <a href="#Helpers_onPaymentFormSubmit">#onPaymentFormSubmit(form)</a><br/>    <a href="#Helpers_selectBeneficiary">#selectBeneficiary()</a><br/>    <a href="#Helpers_selectDebitAccount">#selectDebitAccount()</a><br/>    <a href="#Helpers_selectSchedule">#selectSchedule()</a><br/>
- **Intents**<br/>    <a href="#Intents_initiatePayment">#initiatePayment(debitAccount)</a><br/>    <a href="#Intents_selectSchedule">#selectSchedule(schedule)</a><br/>    <a href="#Intents_showBeneficiaries">#showBeneficiaries()</a><br/>    <a href="#Intents_showDebitAccounts">#showDebitAccounts()</a><br/>    <a href="#Intents_showReview">#showReview()</a><br/>    <a href="#Intents_showSchedule">#showSchedule()</a><br/>
- **Type Definitions**<br/>    <a href="#AccountView">AccountView</a><br/>    <a href="#Beneficiaries">Beneficiaries</a><br/>    <a href="#ContactsGroup">ContactsGroup</a><br/>    <a href="#InitiatePaymentIntentParameters">InitiatePaymentIntentParameters</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-form-ng

### <a name="Helpers_getPayment"></a>*#getPayment()*

Returns the payment object.

##### Returns

[Payment](widget-bbm-initiate-payment-ng.html#Payment) - **

### <a name="Helpers_getAllBeneficiaries"></a>*#getAllBeneficiaries()*

Returns the list of all beneficiaries including accounts and contacts.

##### Returns

Array of [AccountView](widget-bbm-initiate-payment-ng.html#AccountView) - **

### <a name="Helpers_getDebitAccount"></a>*#getDebitAccount()*

Returns selected debit account of the payment.

##### Returns

[AccountView](widget-bbm-initiate-payment-ng.html#AccountView) - **

### <a name="Helpers_getDebitAccountCurrency"></a>*#getDebitAccountCurrency()*

Returns the currency of the selected debit account.

##### Returns

String - **

### <a name="Helpers_getDebitAccountIdentifier"></a>*#getDebitAccountIdentifier()*

Returns the identifier of the selected debit account.

##### Returns

String - **

### <a name="Helpers_getDebitAccountDisplayAmount"></a>*#getDebitAccountDisplayAmount()*

Returns a string that will be displayed as an amount of the selected debit account.

##### Returns

String - **

### <a name="Helpers_getDebitAccountDisplayName"></a>*#getDebitAccountDisplayName()*

Returns a string that will be displayed as a name of the selected debit account.

##### Returns

String - **

### <a name="Helpers_hasDebitAccount"></a>*#hasDebitAccount()*

Checks if there is a selected debit account

##### Returns

Boolean - **

### <a name="Helpers_showSaveContact"></a>*#showSaveContact(form)*

Returns true if the "Save contact" checkbox should be displayed, and false otherwise.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | [FormController](#FormController) | Instance of the Form controller |

##### Returns

Boolean - **

### <a name="Helpers_getScheduleSummary"></a>*#getScheduleSummary(schedule)*

Returns a summary of the given payment schedule as a string.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | [Schedule](#Schedule) |  |

##### Returns

String - **

### <a name="Helpers_isCreateBeneficiaryAllowed"></a>*#isCreateBeneficiaryAllowed()*

Checks for the payment whether it is allowed to create a new beneficiary
instead of selecting an existing one from the list of beneficiaries.
Returns true, if a user can create a beneficiary, otherwise false.

##### Returns

Boolean - **

### <a name="Helpers_showUrgentToggle"></a>*#showUrgentToggle()*

Checks if urgent payment is available for the current transaction.

##### Returns

Boolean - **

### <a name="Helpers_onUrgentPaymentInfoClick"></a>*#onUrgentPaymentInfoClick()*

Shows information about urgent payment.

### <a name="Helpers_isPaymentFormValid"></a>*#isPaymentFormValid(form)*

Checks whether the form is valid. Returns true, if the form is valid, false otherwise.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Instance of the form |

##### Returns

Boolean - **

### <a name="Helpers_submitPayment"></a>*#submitPayment()*

Depending on the preference either navigates the user to the review page
or makes the payment.

##### Returns

Promise - *Promise that resolves once the operation is complete.*

### <a name="Helpers_onPaymentFormSubmit"></a>*#onPaymentFormSubmit(form)*

Handles the payment form submit.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Angular form instance |

### <a name="Helpers_selectBeneficiary"></a>*#selectBeneficiary()*

Initiates the process of selecting of the beneficiary by calling
the "intent.rbm.paymentOrder.beneficiaries.show" intent.
Before calling the intent it ensures, that beneficiaries are loaded.

### <a name="Helpers_selectDebitAccount"></a>*#selectDebitAccount()*

Initiates the process of selecting of the debit account by calling
the "intent.rbm.paymentOrder.debitAccounts.show" intent.
Before calling the intent it ensures, that debit accounts are loaded.

### <a name="Helpers_selectSchedule"></a>*#selectSchedule()*

Initiates the process of selecting a schedule by calling
the "intent.rbm.paymentOrder.schedule.show" intent.

---

## Intents


### <a name="Intents_initiatePayment"></a>*#initiatePayment(debitAccount)*

Handles the intent to select a debit account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccount | Object |  |

### <a name="Intents_selectSchedule"></a>*#selectSchedule(schedule)*

Handles the intent to select schedule

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schedule | Object |  |

### <a name="Intents_showBeneficiaries"></a>*#showBeneficiaries()*

The intent to show the list of beneficiaries.

### <a name="Intents_showDebitAccounts"></a>*#showDebitAccounts()*

The intent to show the list of debit accounts.

### <a name="Intents_showReview"></a>*#showReview()*

The intent to show payment review.

### <a name="Intents_showSchedule"></a>*#showSchedule()*

The intent to show schedule

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

### <a name="Beneficiaries"></a>*Beneficiaries*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| all | Array of [AccountView](#AccountView) | The list of all beneficiaries. |
| creditAccounts | Array of [AccountView](#AccountView) | The list of credit accounts. |
| contacts | Array of [ContactsGroup](#ContactsGroup) | The list of contacts groups. |

### <a name="ContactsGroup"></a>*ContactsGroup*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| char | String | The first character of a contact name |
| contacts | Array of [AccountView](#AccountView) | The list of contacts |

### <a name="InitiatePaymentIntentParameters"></a>*InitiatePaymentIntentParameters*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| debitAccount | [Product?](model-bb-product-summary-ng.html#Product?) | An optional debit account for a new payment. |

---
