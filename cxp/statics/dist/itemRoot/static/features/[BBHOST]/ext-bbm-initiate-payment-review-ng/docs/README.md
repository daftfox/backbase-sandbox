# ext-bbm-initiate-payment-review-ng


Version: **3.36.20**

Mobile extension for a payment review step in the Mobile initiate payment widget.

## Imports

* lib-bbm-plugins
* ui-bb-format-amount-ng
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-review-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getPayment">#getPayment()</a><br/>    <a href="#Helpers_Beneficiary">#Beneficiary()</a><br/>    <a href="#Helpers_getBeneficiaryDisplayName">#getBeneficiaryDisplayName()</a><br/>    <a href="#Helpers_getBeneficiaryIdentifier">#getBeneficiaryIdentifier()</a><br/>    <a href="#Helpers_getDebitAccount">#getDebitAccount()</a><br/>    <a href="#Helpers_getDebitAccountCurrency">#getDebitAccountCurrency()</a><br/>    <a href="#Helpers_getDebitAccountDisplayAmount">#getDebitAccountDisplayAmount()</a><br/>    <a href="#Helpers_getDebitAccountDisplayName">#getDebitAccountDisplayName()</a><br/>    <a href="#Helpers_getDebitAccountIdentifier">#getDebitAccountIdentifier()</a><br/>    <a href="#Helpers_getDescription">#getDescription()</a><br/>    <a href="#Helpers_getPaymentAmount">#getPaymentAmount()</a><br/>    <a href="#Helpers_getPaymentCurrency">#getPaymentCurrency()</a><br/>    <a href="#Helpers_getScheduleSummary">#getScheduleSummary()</a><br/>    <a href="#Helpers_showBeneficiaryIdentifier">#showBeneficiaryIdentifier()</a><br/>    <a href="#Helpers_showBeneficiaryName">#showBeneficiaryName()</a><br/>    <a href="#Helpers_showDebitAccount">#showDebitAccount()</a><br/>    <a href="#Helpers_showDescription">#showDescription()</a><br/>    <a href="#Helpers_showSaveContact">#showSaveContact()</a><br/>    <a href="#Helpers_showUrgentPayment">#showUrgentPayment()</a><br/>    <a href="#Helpers_submitPayment">#submitPayment()</a><br/>
- **Intents**<br/>    <a href="#Intents_initiatePayment">#initiatePayment()</a><br/>    <a href="#Intents_showReview">#showReview()</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-form-ng

### <a name="Helpers_getPayment"></a>*#getPayment()*

Returns the payment object.

##### Returns

[Payment](widget-bbm-initiate-payment-ng.html#Payment) - **

### <a name="Helpers_Beneficiary"></a>*#Beneficiary()*

Returns selected beneficiary of the payment.

##### Returns

[AccountView](widget-bbm-initiate-payment-ng.html#AccountView) - **

### <a name="Helpers_getBeneficiaryDisplayName"></a>*#getBeneficiaryDisplayName()*

Returns a string that will be displayed as the name of the beneficiary.

##### Returns

String - **

### <a name="Helpers_getBeneficiaryIdentifier"></a>*#getBeneficiaryIdentifier()*

Returns the beneficiary identifier.

##### Returns

String - **

### <a name="Helpers_getDebitAccount"></a>*#getDebitAccount()*

Returns selected debit account of the payment.

##### Returns

[AccountView](widget-bbm-initiate-payment-ng.html#AccountView) - **

### <a name="Helpers_getDebitAccountCurrency"></a>*#getDebitAccountCurrency()*

Returns the amount of the debit account that should be displayed.

##### Returns

String - **

### <a name="Helpers_getDebitAccountDisplayAmount"></a>*#getDebitAccountDisplayAmount()*

Returns the amount of the debit account that should be displayed.

##### Returns

String - **

### <a name="Helpers_getDebitAccountDisplayName"></a>*#getDebitAccountDisplayName()*

Returns a string that will be displayed as the name of the debit account.

##### Returns

String - **

### <a name="Helpers_getDebitAccountIdentifier"></a>*#getDebitAccountIdentifier()*

Returns the debit account identifier.

##### Returns

String - **

### <a name="Helpers_getDescription"></a>*#getDescription()*

Returns the description of the payment.

##### Returns

String - **

### <a name="Helpers_getPaymentAmount"></a>*#getPaymentAmount()*

Returns the amount of the payment.

##### Returns

String - **

### <a name="Helpers_getPaymentCurrency"></a>*#getPaymentCurrency()*

Returns the currency of the payment.

##### Returns

String - **

### <a name="Helpers_getScheduleSummary"></a>*#getScheduleSummary()*

Returns a summary of the given payment schedule as a string.

##### Returns

String - **

### <a name="Helpers_showBeneficiaryIdentifier"></a>*#showBeneficiaryIdentifier()*

Returns true, if the beneficiary name should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showBeneficiaryName"></a>*#showBeneficiaryName()*

Returns true, if the beneficiary name should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showDebitAccount"></a>*#showDebitAccount()*

Returns true, if the debit account should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showDescription"></a>*#showDescription()*

Returns true, if the payment description should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showSaveContact"></a>*#showSaveContact()*

Returns true, if the save contact message should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_showUrgentPayment"></a>*#showUrgentPayment()*

Returns true, if the urgent payment message should be shown, or false otherwise.

##### Returns

Boolean - **

### <a name="Helpers_submitPayment"></a>*#submitPayment()*

Submits the payment.

##### Returns

Promise - **

---

## Intents


### <a name="Intents_initiatePayment"></a>*#initiatePayment()*

The intent to start a new payment.

### <a name="Intents_showReview"></a>*#showReview()*

Handles the intent to review a payment.
