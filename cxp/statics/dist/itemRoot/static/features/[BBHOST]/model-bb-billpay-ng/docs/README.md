# model-bb-billpay-ng


Version: **0.23.0**

Model for widget-bb-billpay-ng

## Imports

* data-bb-bill-pay-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelBillpayModuleKey, { modelBillpayKey } from 'model-bb-billpay-ng';

angular
  .module('ExampleModule', [
    modelBillpayModuleKey,
  ])
  .factory('someFactory', [
    modelBillpayKey,
    // into
    function someFactory(billpayModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **BillpayModel**<br/>    <a href="#BillpayModel_getPayeesSummary">#getPayeesSummary(params)</a><br/>    <a href="#BillpayModel_getAccounts">#getAccounts(params)</a><br/>    <a href="#BillpayModel_getPayments">#getPayments(params)</a><br/>    <a href="#BillpayModel_getPayment">#getPayment(id, params)</a><br/>    <a href="#BillpayModel_postPayeesRecord">#postPayeesRecord(params)</a><br/>    <a href="#BillpayModel_putPayeesRecord">#putPayeesRecord(id, params)</a><br/>    <a href="#BillpayModel_getPayeeRecord">#getPayeeRecord(id, params)</a><br/>    <a href="#BillpayModel_postPaymentsRecord">#postPaymentsRecord(params)</a><br/>    <a href="#BillpayModel_putPaymentRecord">#putPaymentRecord(id, params)</a><br/>    <a href="#BillpayModel_postRecurringPaymentsRecord">#postRecurringPaymentsRecord(params)</a><br/>    <a href="#BillpayModel_deletePaymentRecord">#deletePaymentRecord(id, params)</a><br/>    <a href="#BillpayModel_deleteRecurringPaymentRecord">#deleteRecurringPaymentRecord(id, params)</a><br/>    <a href="#BillpayModel_searchPayees">#searchPayees(params)</a><br/>    <a href="#BillpayModel_deletePayeesRecord">#deletePayeesRecord(id, params)</a><br/>    <a href="#BillpayModel_postPayeesElectronicRecord">#postPayeesElectronicRecord(params)</a><br/>    <a href="#BillpayModel_getPayeesElectronicRecord">#getPayeesElectronicRecord(id, params)</a><br/>    <a href="#BillpayModel_putPayeesElectronicRecord">#putPayeesElectronicRecord(id, params)</a><br/>    <a href="#BillpayModel_deletePayeesElectronicRecord">#deletePayeesElectronicRecord(id, params)</a><br/>
- **Type Definitions**<br/>    <a href="#PaymentAccount">PaymentAccount</a><br/>    <a href="#PaymentServices">PaymentServices</a><br/>    <a href="#PayeeSummary">PayeeSummary</a><br/>    <a href="#Payee">Payee</a><br/>    <a href="#Error">Error</a><br/>    <a href="#Payment">Payment</a><br/>    <a href="#PayeePostResponse">PayeePostResponse</a><br/>    <a href="#PayeePutResponse">PayeePutResponse</a><br/>    <a href="#ElectronicPayee">ElectronicPayee</a><br/>    <a href="#ElectronicPayeePost">ElectronicPayeePost</a><br/>    <a href="#ElectronicPayeePut">ElectronicPayeePut</a><br/>

---

## BillpayModel

Billpay model service

### <a name="BillpayModel_getPayeesSummary"></a>*#getPayeesSummary(params)*

Returns a list of payees that payments may be made to

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of [PayeeSummary](data-bb-billpay-http-ng.html#PayeeSummary), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_getAccounts"></a>*#getAccounts(params)*

Returns a list of accounts that payments may be made from

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of [PaymentAccount](data-bb-billpay-http-ng.html#PaymentAccount), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_getPayments"></a>*#getPayments(params)*

Returns a list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of [Payment](data-bb-billpay-http-ng.html#Payment), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_getPayment"></a>*#getPayment(id, params)*

Returns a payment by id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payment id to get |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of [BillPayData.Payment](data-bb-bill-pay-http-ng.html#BillPayData.Payment), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_postPayeesRecord"></a>*#postPayeesRecord(params)*

Creates new payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [Payee](#Payee) | Any parameters for the API call |

##### Returns

Promise of [PayeePostResponse](data-bb-billpay-http-ng.html#PayeePostResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_putPayeesRecord"></a>*#putPayeesRecord(id, params)*

Updates a payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to put |
| params | [Payee](#Payee) | Any parameters for the API call |

##### Returns

Promise of [PayeePutResponse](data-bb-billpay-http-ng.html#PayeePutResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_getPayeeRecord"></a>*#getPayeeRecord(id, params)*

Returns a payee by id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to get |
| params | [Payee](#Payee) | Any parameters for the API call |

##### Returns

Promise of [PayeeGetResponse](data-bb-billpay-http-ng.html#PayeeGetResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_postPaymentsRecord"></a>*#postPaymentsRecord(params)*

Creates a new batch of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_putPaymentRecord"></a>*#putPaymentRecord(id, params)*

Updates a payment record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payment id to put |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_postRecurringPaymentsRecord"></a>*#postRecurringPaymentsRecord(params)*

Creates a new recurring payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [BillPayData.PutPostResponse](data-bb-bill-pay-http-ng.html#BillPayData.PutPostResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_deletePaymentRecord"></a>*#deletePaymentRecord(id, params)*

Deletes a payment record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payment id to delete |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_deleteRecurringPaymentRecord"></a>*#deleteRecurringPaymentRecord(id, params)*

Deletes a payment record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payment id to delete |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_searchPayees"></a>*#searchPayees(params)*

Returns a list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of [BillPayData.PayeeSearch](data-bb-bill-pay-http-ng.html#BillPayData.PayeeSearch), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_deletePayeesRecord"></a>*#deletePayeesRecord(id, params)*

Deletes a payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to delete |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_postPayeesElectronicRecord"></a>*#postPayeesElectronicRecord(params)*

Creates new electronic payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [ElectronicPayeePost](#ElectronicPayeePost) | Any parameters for the API call |

##### Returns

Promise of [BillPayPutPostResponse](data-bb-billpay-http-ng.html#BillPayPutPostResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_getPayeesElectronicRecord"></a>*#getPayeesElectronicRecord(id, params)*

Returns a payee by id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to get |
| params | [ElectronicPayee](#ElectronicPayee) | Any parameters for the API call |

##### Returns

Promise of [PayeesElectronicGetResponse](data-bb-billpay-http-ng.html#PayeesElectronicGetResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_putPayeesElectronicRecord"></a>*#putPayeesElectronicRecord(id, params)*

Updates a payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to put |
| params | [Payee](#Payee) | Any parameters for the API call |

##### Returns

Promise of [BillPayPutPostResponse](data-bb-billpay-http-ng.html#BillPayPutPostResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="BillpayModel_deletePayeesElectronicRecord"></a>*#deletePayeesElectronicRecord(id, params)*

Deletes a payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | payee id to delete |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [void](#void), [ModelError](lib-bb-model-errors.html#ModelError) - **

## Type Definitions


### <a name="PaymentAccount"></a>*PaymentAccount*

Payment Account type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accountNumber | String | Account number |
| accountNickName | String | Account nickname |
| balance | Number | Account balance |

### <a name="PaymentServices"></a>*PaymentServices*

Payment services object type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| cutoffTime | String | The time after which this payment service cannot be used |
| earliestPaymentDate | String | The date that the payment will be made (providing it is made before the cutoff time) |
| nextPaymentDate | String | The day after the earliest payment date |
| paymentServiceType | String | The service type (examples include EXPEDITED_PAYMENT &amp; REGULAR_PAYMENT) |
| deliveryDays | Number | The number of days for a delivery |
| paymentFee | Number | The fee for using this service (applies to expedited) |

### <a name="PayeeSummary"></a>*PayeeSummary*

Payee Summary type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | ID of the payee |
| name | String | Name of the payee |
| nickName | String | Nickname of the payee |
| nextPayment | Object | Information on the next payment |
| nextPayment.paymentAmount | Number | Next payment amount |
| nextPayment.paymentDate | String | Next payment date |
| nextPayment.recurring | Boolean | Whether or not the next payment is a recurring one |
| paymentServices | Array of [PaymentServices](#PaymentServices) | Optional array of possible payment services |
| ebill | Object | Information about the ebill capabilities of the payee |
| ebill.capable | Boolean | Whether this payee is capable of sing ebills |
| ebill.enabled | Boolean | Whether ebills are enabled on this payee |
| ebill.latestBill | Object | The latest ebill |
| ebill.latestBill.paymentAmount | Number | The amount of the latest ebill |
| ebill.latestBill.paymentDate | String | The payment date of the latest ebill |
| ebill.latestBill.url | String | The URL of the latest ebill |

### <a name="Payee"></a>*Payee*

Payee type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| name | String | Payee name |
| nickName | String | Payee nickname |
| phoneNumber | String | Payee phone number |
| address | Object | Payee complete address |
| address.address1 | String | Payee address1 |
| address.address2 | String | Payee address2 |
| address.city | String | Payee city |
| address.state | String | Payee state |
| address.postalCode | String | Payee postal code |
| accountNumber | String | Payee nickname |
| category | String | Payee nickname |

### <a name="Error"></a>*Error*

Error type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String |  |
| key | String |  |
| context | Object |  |

### <a name="Payment"></a>*Payment*

Payment type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| paymentMemo | String |  |
| paymentAccount | Object |  |
| payeeID | String |  |
| paymentAmount | [float](#float) |  |
| paymentDate | String |  |
| errors | Array of Error |  |

### <a name="PayeePostResponse"></a>*PayeePostResponse*

Payee post response type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of the newly created payee |

### <a name="PayeePutResponse"></a>*PayeePutResponse*

Payee post response type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of the updated payee |

### <a name="ElectronicPayee"></a>*ElectronicPayee*

Electronic Payee post data type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Electronic payee name |
| name | String | Electronic payee name |
| nickName | String | Electronic payee nickname |
| accountNumber | String | Electronic payee account number |

### <a name="ElectronicPayeePost"></a>*ElectronicPayeePost*

Electronic Payee post data type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Electronic payee name |
| merchantID | String | Merchant ID |
| accountNumber | String | Electronic payee account number |
| zipCode | String | Electronic payee zip code |
| nickName | String | Electronic payee nickname |

### <a name="ElectronicPayeePut"></a>*ElectronicPayeePut*

Electronic Payee type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Electronic payee name |
| accountNumber | String | Electronic payee account number |
| modifyPendingPayments | String | Electronic payee nickname |
| nickName | String | Electronic payee nickname |

---
