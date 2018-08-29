# model-bb-payment-orders-ng


Version: **1.120.9**

Model for widget-bb-payment-orders-ng

## Imports

* data-bb-contact-http-ng
* data-bb-payment-orders-http-ng
* data-bb-product-summary-http-ng
* lib-bb-model-errors
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import modelPaymentOrdersModuleKey, { modelPaymentOrdersKey } from 'model-bb-payment-orders-ng';

angular
  .module('ExampleModule', [
    modelPaymentOrdersModuleKey,
  ])
  .factory('someFactory', [
    modelPaymentOrdersKey,
    // into
    function someFactory(paymentOrdersModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **model-bb-payment-orders-ng**<br/>    <a href="#model-bb-payment-orders-ngcreateAccountModel">createAccountModel(kindId)</a><br/>    <a href="#model-bb-payment-orders-nggetExtendedAccountModelFlat">getExtendedAccountModelFlat(accountsRaw)</a><br/>
- **Constants**<br/>    <a href="#Constants_PaymentType">#PaymentType</a><br/>    <a href="#Constants_Context">#Context</a><br/>
- **paymentOrdersModel**<br/>    <a href="#paymentOrdersModel_createPaymentOrder">#createPaymentOrder(paymentOrderParams)</a><br/>    <a href="#paymentOrdersModel_getCurrencies">#getCurrencies()</a><br/>    <a href="#paymentOrdersModel_getContextArrangements">#getContextArrangements(context, params, full)</a><br/>    <a href="#paymentOrdersModel_getAccountsFrom">#getAccountsFrom(params)</a><br/>    <a href="#paymentOrdersModel_getAccountsTo">#getAccountsTo(debitAccountId)</a><br/>    <a href="#paymentOrdersModel_getAccountsToFull">#getAccountsToFull(params)</a><br/>    <a href="#paymentOrdersModel_getExternals">#getExternals()</a><br/>    <a href="#paymentOrdersModel_getContacts">#getContacts(params)</a><br/>    <a href="#paymentOrdersModel_getContactsByName">#getContactsByName()</a><br/>    <a href="#paymentOrdersModel_getRate">#getRate(rateParams)</a><br/>    <a href="#paymentOrdersModel_createContact">#createContact(contact)</a><br/>    <a href="#paymentOrdersModel_getPaymentOrders">#getPaymentOrders(params)</a><br/>    <a href="#paymentOrdersModel_getStandingOrdersPreferences">#getStandingOrdersPreferences()</a><br/>    <a href="#paymentOrdersModel_getStandingOrders">#getStandingOrders(params)</a><br/>    <a href="#paymentOrdersModel_getPaymentDraftsPreferences">#getPaymentDraftsPreferences()</a><br/>    <a href="#paymentOrdersModel_getPaymentDrafts">#getPaymentDrafts(params)</a><br/>    <a href="#paymentOrdersModel_saveDraft">#saveDraft(draftPayment)</a><br/>    <a href="#paymentOrdersModel_deleteDraft">#deleteDraft(draftPaymentId)</a><br/>    <a href="#paymentOrdersModel_editDraft">#editDraft(draftPaymentId, draftPayment)</a><br/>    <a href="#paymentOrdersModel_saveEditPayment">#saveEditPayment(paymentId, paymentData)</a><br/>    <a href="#paymentOrdersModel_authorizePayment">#authorizePayment(paymentId)</a><br/>    <a href="#paymentOrdersModel_rejectPayment">#rejectPayment(paymentId)</a><br/>    <a href="#paymentOrdersModel_cancelPayment">#cancelPayment(paymentId)</a><br/>    <a href="#paymentOrdersModel_requestPaymentCancel">#requestPaymentCancel(paymentId, version)</a><br/>    <a href="#paymentOrdersModel_deletePayment">#deletePayment(paymentId, version)</a><br/>    <a href="#paymentOrdersModel_requestBulkReject">#requestBulkReject(paymentOrderIds)</a><br/>    <a href="#paymentOrdersModel_requestBulkApprove">#requestBulkApprove(paymentOrderIds)</a><br/>
- **model-bb-payment-orders-ng**<br/>    <a href="#model-bb-payment-orders-ngvalidatePayment">validatePayment(payment)</a><br/>
- **Type Definitions**<br/>    <a href="#PaymentType">PaymentType</a><br/>    <a href="#Payments">Payments</a><br/>    <a href="#Payment">Payment</a><br/>    <a href="#ArrangementsRequestParameters">ArrangementsRequestParameters</a><br/>

---

### <a name="model-bb-payment-orders-ngcreateAccountModel"></a>*createAccountModel(kindId)*

Prepare the fields of a account into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kindId | String | Product kind Id |

##### Returns

Function - **

---

### <a name="model-bb-payment-orders-nggetExtendedAccountModelFlat"></a>*getExtendedAccountModelFlat(accountsRaw)*

Prepare the fields of a account into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accountsRaw | Array of Object | flat list of accounts |

##### Returns

Array of Object - **

---

## Constants

### <a name="Constants_PaymentType"></a>*#PaymentType*

Map of payment types

**Type:** *[PaymentType](#PaymentType)*

### <a name="Constants_Context"></a>*#Context*

Available business functions for payments resource

**Type:** *[PaymentType](#PaymentType)*


---

## paymentOrdersModel


### <a name="paymentOrdersModel_createPaymentOrder"></a>*#createPaymentOrder(paymentOrderParams)*

Create new payment order.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrderParams | Object | New payment order data |

##### Returns

Promise of Object - *A Promise with response.*

### <a name="paymentOrdersModel_getCurrencies"></a>*#getCurrencies()*

Get available currencies.

##### Returns

Promise of Array of Object - *A Promise with response.*

### <a name="paymentOrdersModel_getContextArrangements"></a>*#getContextArrangements(context, params, full)*

Load contextualized arrangements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | String | Payment context identifier. Values can be [Constants#Context](model-bb-payment-orders-ng.html#Constants_Context) |
| params | [ArrangementsRequestParameters](#ArrangementsRequestParameters) | Parameters to send in the request |
| full | Boolean | Flag to return full response with desired headers |

##### Returns

Promise of Array of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise fulfilled with collection of arrangements.*

### <a name="paymentOrdersModel_getAccountsFrom"></a>*#getAccountsFrom(params)*

Load accounts available to payment from.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [ArrangementsRequestParameters](#ArrangementsRequestParameters) | Parameters to send in the request |

##### Returns

Promise of Array of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getAccountsTo"></a>*#getAccountsTo(debitAccountId)*

Load accounts available for payment to.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| debitAccountId | String | Filter account list with debitAccountId param |

##### Returns

Promise of Array of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getAccountsToFull"></a>*#getAccountsToFull(params)*

Load accounts available with total count attached

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

##### Returns

Promise of Array of [ProductDetails](model-bb-product-summary-ng.html#ProductDetails), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getExternals"></a>*#getExternals()*

Load external accounts from contact list.

##### Returns

Promise of Array of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with flat accounts list.*

### <a name="paymentOrdersModel_getContacts"></a>*#getContacts(params)*

Load contact list without special formatting

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

##### Returns

Promise of Array of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with flat contacts list.*

### <a name="paymentOrdersModel_getContactsByName"></a>*#getContactsByName()*

Load contacts filtered by name.

##### Returns

Promise of Array of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with accounts list.*

### <a name="paymentOrdersModel_getRate"></a>*#getRate(rateParams)*

Get currencies available for payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| rateParams | Object | Parameters for getRate request |

##### Returns

Number - *Rate number*

### <a name="paymentOrdersModel_createContact"></a>*#createContact(contact)*

Creates a new contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact data |

##### Returns

Promise - *A Promise object for create contact request*

### <a name="paymentOrdersModel_getPaymentOrders"></a>*#getPaymentOrders(params)*

Get payments orders data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_getStandingOrdersPreferences"></a>*#getStandingOrdersPreferences()*

Tries to read the stored standing orders preferences

##### Returns

Object - **

### <a name="paymentOrdersModel_getStandingOrders"></a>*#getStandingOrders(params)*

Get standing orders data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [Payments](#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_getPaymentDraftsPreferences"></a>*#getPaymentDraftsPreferences()*

Tries to read the stored payment drafts preferences

##### Returns

Object - **

### <a name="paymentOrdersModel_getPaymentDrafts"></a>*#getPaymentDrafts(params)*

Get payment drafts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [PaymentDrafts](#PaymentDrafts), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_saveDraft"></a>*#saveDraft(draftPayment)*

Save payment order draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftPayment | Object | to be saved |

##### Returns

Promise of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_deleteDraft"></a>*#deleteDraft(draftPaymentId)*

Delete payment order draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftPaymentId | Object | to be deleted |

##### Returns

Promise of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_editDraft"></a>*#editDraft(draftPaymentId, draftPayment)*

Save changes to payment order draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftPaymentId | String | to be deleted |
| draftPayment | Object |  |

##### Returns

Promise of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_saveEditPayment"></a>*#saveEditPayment(paymentId, paymentData)*

Save changes after editing to payment order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String |  |
| paymentData | Object |  |

##### Returns

Promise of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

### <a name="paymentOrdersModel_authorizePayment"></a>*#authorizePayment(paymentId)*

Authorizes (approves) a payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String |  |

##### Returns

Promise - **

### <a name="paymentOrdersModel_rejectPayment"></a>*#rejectPayment(paymentId)*

Rejects payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String |  |

##### Returns

Promise - **

### <a name="paymentOrdersModel_cancelPayment"></a>*#cancelPayment(paymentId)*

Cancels payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String |  |

##### Returns

Promise - **

### <a name="paymentOrdersModel_requestPaymentCancel"></a>*#requestPaymentCancel(paymentId, version)*

Sends a request to cancel the payment order identified by `paymentId`
and an object that has version property

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Payment identifier |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="paymentOrdersModel_deletePayment"></a>*#deletePayment(paymentId, version)*

Sends a request to delete the payment order identified by `paymentId`

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Payment identifier |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="paymentOrdersModel_requestBulkReject"></a>*#requestBulkReject(paymentOrderIds)*

Sends a request to reject the selected payment orders identified by `paymentId`

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrderIds | Array |  |

##### Returns

Promise - **

### <a name="paymentOrdersModel_requestBulkApprove"></a>*#requestBulkApprove(paymentOrderIds)*

Sends a request to approve the selected payment orders identified by `paymentId`

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrderIds | Array |  |

##### Returns

Promise - **

---

### <a name="model-bb-payment-orders-ngvalidatePayment"></a>*validatePayment(payment)*

Performs backend validation of payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | to be validated |

##### Returns

Promise of Object, [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise*

## Type Definitions


### <a name="PaymentType"></a>*PaymentType*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| SEPA_CT | String | SEPA Credit Transfer payments |
| US_DOMESTIC_WIRE | String | United States Domestic Wire payments |
| US_FOREIGN_WIRE | String | United States International Wire payments |
| INTERNAL | String | Internal Payments between the customers of same financial institution. |

### <a name="Payments"></a>*Payments*

Payments type definition

**Type:** *Array of [Payment](#Payment)*


### <a name="Payment"></a>*Payment*

Payment type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Payment ID |
| status | String | Payment status |
| bankStatus | String | Bank Status |
| reasonCode | String | Reason id |
| reasonText | String | Reason description |
| debtorAccount | Object | Debtor account |
| instructionPriority | String | Instruction priority |
| requestedExecutionDate | String | Requested execution date |
| creditTransferTransactionInformation | Object | Transaction information |
| createdBy | String | User id that created payment |
| createdAt | String | Date when payment was created |

### <a name="ArrangementsRequestParameters"></a>*ArrangementsRequestParameters*

Arrangements request paramaters definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| searchQuery | String | Text to perform search on arrangements |
| debitAccount | Boolean | If enabled retrieve debit accounts |
| creditAccount | Boolean | If enabled retrieve credit accounts |

---
