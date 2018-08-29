# model-bb-payment-ng


Version: **1.8.118**

Payment widget model.

## Imports

* data-bb-contact-http-ng
* data-bb-payments-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelPaymentModuleKey, {
  modelPaymentKey,
} from 'model-bb-payment-ng';

angular.module('widget-bb-payment-ng', [
  modelPaymentModuleKey,
])
.controller('PaymentController', [
  modelPaymentKey,
  ...,
])
```

## Table of Contents
- **paymentModel**<br/>    <a href="#paymentModel_getAccountsFrom">#getAccountsFrom()</a><br/>    <a href="#paymentModel_getAccountsTo">#getAccountsTo(debitAccountId)</a><br/>    <a href="#paymentModel_getExternals">#getExternals()</a><br/>    <a href="#paymentModel_createContact">#createContact(contact)</a><br/>    <a href="#paymentModel_makePayment">#makePayment(paymentParams)</a><br/>    <a href="#paymentModel_getPayments">#getPayments(params)</a><br/>    <a href="#paymentModel_getStandingOrders">#getStandingOrders(params)</a><br/>    <a href="#paymentModel_storeAccounts">#storeAccounts(accounts)</a><br/>    <a href="#paymentModel_getAccounts">#getAccounts()</a><br/>    <a href="#paymentModel_getPayment">#getPayment()</a><br/>    <a href="#paymentModel_storePayment">#storePayment(payment)</a><br/>    <a href="#paymentModel_getPaymentPreferences">#getPaymentPreferences()</a><br/>    <a href="#paymentModel_getPaymentSchedule">#getPaymentSchedule(payment, endingType)</a><br/>    <a href="#paymentModel_newPayment">#newPayment()</a><br/>    <a href="#paymentModel_getCurrencies">#getCurrencies()</a><br/>    <a href="#paymentModel_getRate">#getRate()</a><br/>    <a href="#paymentModel_getPaymentsAuthorizations">#getPaymentsAuthorizations(params)</a><br/>    <a href="#paymentModel_authorizePayment">#authorizePayment()</a><br/>    <a href="#paymentModel_authorizeMultiplePayments">#authorizeMultiplePayments()</a><br/>    <a href="#paymentModel_rejectPayment">#rejectPayment()</a><br/>    <a href="#paymentModel_rejectMultiplePayments">#rejectMultiplePayments()</a><br/>    <a href="#paymentModel_deletePayment">#deletePayment(paymentId)</a><br/>    <a href="#paymentModel_deleteMultiplePayments">#deleteMultiplePayments()</a><br/>    <a href="#paymentModel_getDirectDebits">#getDirectDebits(params)</a><br/>    <a href="#paymentModel_refundDirectDebit">#refundDirectDebit(directDebitId, params)</a><br/>    <a href="#paymentModel_refuseDirectDebit">#refuseDirectDebit(directDebitId, params)</a><br/>
- **Type Definitions**<br/>    <a href="#AccountView">AccountView</a><br/>    <a href="#Currency">Currency</a><br/>    <a href="#Rate">Rate</a><br/>    <a href="#AccountIdentification">AccountIdentification</a><br/>    <a href="#Schedule">Schedule</a><br/>    <a href="#Payments">Payments</a><br/>    <a href="#Payment">Payment</a><br/>    <a href="#DirectDebits">DirectDebits</a><br/>    <a href="#DirectDebit">DirectDebit</a><br/>

---

## description

Payment description condition values

---

## singleTransfer

Single transfer frequency object

---

## paymentModes

Available payment modes

---

## endingTypes

Available payment ending types

---

## externalType

Identifier and name for external account product kind

---

## paymentModel

Payment widget and Authorization widget model service.

### <a name="paymentModel_getAccountsFrom"></a>*#getAccountsFrom()*

Load accounts available to payment from.

##### Returns

Promise of Array of [AccountView](#AccountView) - *A Promise with flat accounts list.*

### <a name="paymentModel_getAccountsTo"></a>*#getAccountsTo(debitAccountId)*

Load accounts available for payment to.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccountId | String | Filter account list with debitAccountId param |

##### Returns

Promise of Array of [AccountView](#AccountView) - *A Promise with flat accounts list.*

### <a name="paymentModel_getExternals"></a>*#getExternals()*

Load external accounts from contact list.

##### Returns

Promise of Array of [AccountView](#AccountView) - *A Promise with flat accounts list.*

### <a name="paymentModel_createContact"></a>*#createContact(contact)*

Creates a new contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

##### Returns

Promise - **

### <a name="paymentModel_makePayment"></a>*#makePayment(paymentParams)*

Send payment to endpoint.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentParams | Object | Payment params to send |

##### Returns

Promise of Object - *A Promise with response.*

### <a name="paymentModel_getPayments"></a>*#getPayments(params)*

Get payments data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](#ModelError) - *A Promise*

### <a name="paymentModel_getStandingOrders"></a>*#getStandingOrders(params)*

Get standing orders data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](#ModelError) - *A Promise*

### <a name="paymentModel_storeAccounts"></a>*#storeAccounts(accounts)*

Stores a given list of accounts as current in sync preferences (mobile)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [AccountView](#AccountView) | Accounts data |

### <a name="paymentModel_getAccounts"></a>*#getAccounts()*

Tries to read the current accounts from sync preferences (mobile)

##### Returns

Array of [AccountView](#AccountView) - *Accounts data*

### <a name="paymentModel_getPayment"></a>*#getPayment()*

Tries to read the stored payment from sync preferences (mobile)

##### Returns

[Payment](#Payment) - *Payment data*

### <a name="paymentModel_storePayment"></a>*#storePayment(payment)*

Stores a given payment as current in sync preferences (mobile)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | Payment data |

### <a name="paymentModel_getPaymentPreferences"></a>*#getPaymentPreferences()*

Tries to read the stored payment from sync preferences (mobile)

##### Returns

[Payment](#Payment) - *Payment data*

### <a name="paymentModel_getPaymentSchedule"></a>*#getPaymentSchedule(payment, endingType)*

Compiles "schedule" object according to the schema

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) |  |
| endingType | String |  |

##### Returns

Object - *schedule object*

### <a name="paymentModel_newPayment"></a>*#newPayment()*

Create new payment model with default values

##### Returns

[Payment](#Payment) - **

### <a name="paymentModel_getCurrencies"></a>*#getCurrencies()*

Get currencies available for payment.

##### Returns

Array of [Currency](#Currency) - **

### <a name="paymentModel_getRate"></a>*#getRate()*

Get currencies available for payment.

##### Returns

[Rate](#Rate) - *rate*

### <a name="paymentModel_getPaymentsAuthorizations"></a>*#getPaymentsAuthorizations(params)*

Retrieve list of only payments, which can be authorized or rejected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters for the query string |

##### Returns

Promise of Array - *A Promise with an array of payment authorisations.*

### <a name="paymentModel_authorizePayment"></a>*#authorizePayment()*

Authorizes a payment.

##### Returns

Promise - **

### <a name="paymentModel_authorizeMultiplePayments"></a>*#authorizeMultiplePayments()*

Authorizes multiple payments at once.

##### Returns

Promise - **

### <a name="paymentModel_rejectPayment"></a>*#rejectPayment()*

Authorizes a payment.

##### Returns

Promise - **

### <a name="paymentModel_rejectMultiplePayments"></a>*#rejectMultiplePayments()*

Rejects multiple payments at once.

##### Returns

Promise - **

### <a name="paymentModel_deletePayment"></a>*#deletePayment(paymentId)*

Delete a single payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

### <a name="paymentModel_deleteMultiplePayments"></a>*#deleteMultiplePayments()*

Deletes multiple payments at once.

##### Returns

Promise - **

### <a name="paymentModel_getDirectDebits"></a>*#getDirectDebits(params)*

Get direct debits data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [DirectDebits](#DirectDebits), [ModelError](#ModelError) - *A Promise*

### <a name="paymentModel_refundDirectDebit"></a>*#refundDirectDebit(directDebitId, params)*

Refund direct debit.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| directDebitId | String | Direct Debit ID |
| params | Object | Params to send to the request |

##### Returns

Promise of [DirectDebits](#DirectDebits), [ModelError](#ModelError) - *A Promise*

### <a name="paymentModel_refuseDirectDebit"></a>*#refuseDirectDebit(directDebitId, params)*

Refuse direct debit.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| directDebitId | String | Direct Debit ID |
| params | Object | Params to send to the request |

##### Returns

Promise of [DirectDebits](#DirectDebits), [ModelError](#ModelError) - *A Promise*

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

### <a name="Currency"></a>*Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal identifier |
| name | String | Currency name, suitable for display to users |

### <a name="Rate"></a>*Rate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| rate | Number |  |

### <a name="AccountIdentification"></a>*AccountIdentification*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| scheme | String | Identification of the product |
| counterpartyName | String (optional) | Name of the counterparty |
| identification | String | Unique identification of the product |

### <a name="Schedule"></a>*Schedule*

Schedule for recurring transfer. Mandatory if paymentMode is RECURRING

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| nonWorkingDayExecutionStrategy | String |  |
| transferFrequency | String | Denotes frequency type of transfer |
| on | Number | Denotes day on which transfer should be executed |
| repeat | Number | Number of transfer to be executed |
| every | Number | Indicates skip interval of transfer |
| startDate | Date | When to start executing the schedule |
| endDate | Date | When to stop transfers |

### <a name="Payments"></a>*Payments*

Payments type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [Payment](#Payment) | Array of Payment orders |
| totalCount | Number | Number of items in the collection |

### <a name="Payment"></a>*Payment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| status | String | Authorization status of the payment |
| debitAccountIdentification | [AccountIdentification](#AccountIdentification) (optional) | Data of the payment source account |
| creditAccountIdentification | [AccountIdentification](#AccountIdentification) (optional) | Data of the payment target account |
| amount | Number | Amount of the payment |
| currency | String | Currency of the payment |
| date | String | Execution date of the payment |
| description | String | Description of the payment |
| paymentMode | String | Mode of the payment |
| schedule | [Schedule](#Schedule) | Schedule for recurring transfer |
| urgent | Boolean (optional) | Flag if it is an urgent payment |

### <a name="DirectDebits"></a>*DirectDebits*

Direct Debits type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of [DirectDebit](#DirectDebit) | Direct Debits orders |
| totalCount | Number | Number of items in the collection |

### <a name="DirectDebit"></a>*DirectDebit*

Direct Debit type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Direct Debit ID |
| status | String | Direct Debit status |
| refundDayCount | Number (optional) |  |
| creditorReference | String | Creditor ID |
| mandateReference | String | Mandate ID |
| debitAccountIdentification | [AccountIdentification](#AccountIdentification) | Data of the payment debit account |
| creditAccountIdentification | [AccountIdentification](#AccountIdentification) | Data of the payment credit account |
| amount | Number | Amount of the payment |
| currency | String | Currency of the payment |
| date | String | Execution date of the payment |
| description | String | Description of the payment |
| paymentMode | String | Mode of the payment |
| schedule | [Schedule](#Schedule) | Schedule for recurring transfer |

---
