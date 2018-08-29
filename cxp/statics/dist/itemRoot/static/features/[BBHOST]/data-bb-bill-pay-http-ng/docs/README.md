# data-bb-bill-pay-http-ng


Version: **6.2.1**

A data module for accessing the Bill Pay REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import billPayDataModuleKey, {
  billPayDataKey,
} from 'data-bb-bill-pay-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#billPayDataKey">billPayDataKey</a><br/>
- **BillPayData**<br/>    <a href="#BillPayData_getBillPayPayments">#getBillPayPayments(params, headers)</a><br/>    <a href="#BillPayData_postBillPayPaymentsRecord">#postBillPayPaymentsRecord(data, headers)</a><br/>    <a href="#BillPayData_getBillPayAccounts">#getBillPayAccounts(params, headers)</a><br/>    <a href="#BillPayData_getBillPayPayeesSearch">#getBillPayPayeesSearch(params, headers)</a><br/>    <a href="#BillPayData_postBillPayPayeesRecord">#postBillPayPayeesRecord(data, headers)</a><br/>    <a href="#BillPayData_getBillPayPayeesSummary">#getBillPayPayeesSummary(params, headers)</a><br/>    <a href="#BillPayData_getBillPayEnrolment">#getBillPayEnrolment(params, headers)</a><br/>    <a href="#BillPayData_postBillPayEnrolmentRecord">#postBillPayEnrolmentRecord(data, headers)</a><br/>    <a href="#BillPayData_getBillPayPaymentsRecord">#getBillPayPaymentsRecord(id, params, headers)</a><br/>    <a href="#BillPayData_putBillPayPaymentsRecord">#putBillPayPaymentsRecord(id, data, headers)</a><br/>    <a href="#BillPayData_deleteBillPayPaymentsRecord">#deleteBillPayPaymentsRecord(id, params, headers)</a><br/>    <a href="#BillPayData_postBillPayPaymentsRecurringRecord">#postBillPayPaymentsRecurringRecord(data, headers)</a><br/>    <a href="#BillPayData_getBillPayPaymentsRecurringRecord">#getBillPayPaymentsRecurringRecord(id, params, headers)</a><br/>    <a href="#BillPayData_deleteBillPayPaymentsRecurringRecord">#deleteBillPayPaymentsRecurringRecord(id, params, headers)</a><br/>    <a href="#BillPayData_putBillPayPaymentsRecurringRecord">#putBillPayPaymentsRecurringRecord(id, data, headers)</a><br/>    <a href="#BillPayData_getBillPayPayeesRecord">#getBillPayPayeesRecord(id, params, headers)</a><br/>    <a href="#BillPayData_putBillPayPayeesRecord">#putBillPayPayeesRecord(id, data, headers)</a><br/>    <a href="#BillPayData_deleteBillPayPayeesRecord">#deleteBillPayPayeesRecord(id, params, headers)</a><br/>    <a href="#BillPayData_postBillPayPayeesElectronicRecord">#postBillPayPayeesElectronicRecord(data, headers)</a><br/>    <a href="#BillPayData_getBillPayPayeesElectronicRecord">#getBillPayPayeesElectronicRecord(id, params, headers)</a><br/>    <a href="#BillPayData_putBillPayPayeesElectronicRecord">#putBillPayPayeesElectronicRecord(id, data, headers)</a><br/>    <a href="#BillPayData_deleteBillPayPayeesElectronicRecord">#deleteBillPayPayeesElectronicRecord(id, params, headers)</a><br/>    <a href="#BillPayData_schemas">#schemas</a><br/>    <a href="#BillPayData_schemas.postBillPayPaymentsRecord">#schemas.postBillPayPaymentsRecord</a><br/>    <a href="#BillPayData_schemas.postBillPayPayeesRecord">#schemas.postBillPayPayeesRecord</a><br/>    <a href="#BillPayData_schemas.putBillPayPaymentsRecord">#schemas.putBillPayPaymentsRecord</a><br/>    <a href="#BillPayData_schemas.postBillPayPaymentsRecurringRecord">#schemas.postBillPayPaymentsRecurringRecord</a><br/>    <a href="#BillPayData_schemas.putBillPayPaymentsRecurringRecord">#schemas.putBillPayPaymentsRecurringRecord</a><br/>    <a href="#BillPayData_schemas.putBillPayPayeesRecord">#schemas.putBillPayPayeesRecord</a><br/>    <a href="#BillPayData_schemas.postBillPayPayeesElectronicRecord">#schemas.postBillPayPayeesElectronicRecord</a><br/>    <a href="#BillPayData_schemas.putBillPayPayeesElectronicRecord">#schemas.putBillPayPayeesElectronicRecord</a><br/>
- **BillPayDataProvider**<br/>    <a href="#BillPayDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#BillPayDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#BillPayData.AccountsGetResponse">BillPayData.AccountsGetResponse</a><br/>    <a href="#BillPayData.Address">BillPayData.Address</a><br/>    <a href="#BillPayData.BillPayPutPostResponse">BillPayData.BillPayPutPostResponse</a><br/>    <a href="#BillPayData.BillPayResponse">BillPayData.BillPayResponse</a><br/>    <a href="#BillPayData.Enrolment">BillPayData.Enrolment</a><br/>    <a href="#BillPayData.EnrolmentGetResponse">BillPayData.EnrolmentGetResponse</a><br/>    <a href="#BillPayData.OneOffPayment">BillPayData.OneOffPayment</a><br/>    <a href="#BillPayData.Payee">BillPayData.Payee</a><br/>    <a href="#BillPayData.PayeeCreate">BillPayData.PayeeCreate</a><br/>    <a href="#BillPayData.PayeeElectronic">BillPayData.PayeeElectronic</a><br/>    <a href="#BillPayData.PayeeElectronicCreate">BillPayData.PayeeElectronicCreate</a><br/>    <a href="#BillPayData.PayeeElectronicUpdate">BillPayData.PayeeElectronicUpdate</a><br/>    <a href="#BillPayData.PayeeUpdate">BillPayData.PayeeUpdate</a><br/>    <a href="#BillPayData.PayeesElectronicGetResponse">BillPayData.PayeesElectronicGetResponse</a><br/>    <a href="#BillPayData.PayeesElectronicPostRequest">BillPayData.PayeesElectronicPostRequest</a><br/>    <a href="#BillPayData.PayeesElectronicPutRequest">BillPayData.PayeesElectronicPutRequest</a><br/>    <a href="#BillPayData.PayeesGetResponse">BillPayData.PayeesGetResponse</a><br/>    <a href="#BillPayData.PayeesPostRequest">BillPayData.PayeesPostRequest</a><br/>    <a href="#BillPayData.PayeesPutRequest">BillPayData.PayeesPutRequest</a><br/>    <a href="#BillPayData.PayeesSearchGetResponse">BillPayData.PayeesSearchGetResponse</a><br/>    <a href="#BillPayData.PayeesSummaryGetResponse">BillPayData.PayeesSummaryGetResponse</a><br/>    <a href="#BillPayData.PaymentAccount">BillPayData.PaymentAccount</a><br/>    <a href="#BillPayData.PaymentRequest">BillPayData.PaymentRequest</a><br/>    <a href="#BillPayData.PaymentResponse">BillPayData.PaymentResponse</a><br/>    <a href="#BillPayData.PaymentsGetByIdResponse">BillPayData.PaymentsGetByIdResponse</a><br/>    <a href="#BillPayData.PaymentsGetResponse">BillPayData.PaymentsGetResponse</a><br/>    <a href="#BillPayData.PaymentsPostError">BillPayData.PaymentsPostError</a><br/>    <a href="#BillPayData.PaymentsPostRequest">BillPayData.PaymentsPostRequest</a><br/>    <a href="#BillPayData.PaymentsPostResponse">BillPayData.PaymentsPostResponse</a><br/>    <a href="#BillPayData.PaymentsPutRequest">BillPayData.PaymentsPutRequest</a><br/>    <a href="#BillPayData.RecurringPayment">BillPayData.RecurringPayment</a><br/>    <a href="#BillPayData.RecurringPaymentsGetByIdResponse">BillPayData.RecurringPaymentsGetByIdResponse</a><br/>    <a href="#BillPayData.RecurringPaymentsPostRequest">BillPayData.RecurringPaymentsPostRequest</a><br/>    <a href="#BillPayData.RecurringPaymentsPutRequest">BillPayData.RecurringPaymentsPutRequest</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="billPayDataKey"></a>*billPayDataKey*

Angular dependency injection key for the BillPayData service

**Type:** *String*


---

## BillPayData

Public api for data-bb-bill-pay-http-ng service

### <a name="BillPayData_getBillPayPayments"></a>*#getBillPayPayments(params, headers)*

Get payments for the Bill Pay user ordering by payment date descending, supports filtering and pagination.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.status | String | Restrict results by the payment status (supported status filters include PENDING, HISTORICAL or ALL). Eg: PENDING. |
| params.startDate | String (optional) | Restrict results to payments with a date of, or after, 00:00 on this date, UTC. Eg: 2017-06-28. |
| params.endDate | String (optional) | Restrict results to payments with a date of, or before, 23:59 on this date, UTC. Eg: 2017-07-28. |
| params.payeeID | String (optional) | Restrict results to payments for the specified payee ID. Eg: qwerty12345. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.size | Number (optional) | Limit the number of elements on the response. Eg: 80. (defaults to 1000) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PaymentsGetResponse](#BillPayData.PaymentsGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPayments(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_postBillPayPaymentsRecord"></a>*#postBillPayPaymentsRecord(data, headers)*

Create new Bill Pay payments.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BillPayData.PaymentsPostRequest](#BillPayData.PaymentsPostRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PaymentsPostResponse](#BillPayData.PaymentsPostResponse) on success  or rejects with data of [BillPayData.PaymentsPostError](#BillPayData.PaymentsPostError) on error*

## Example

```javascript
billPayData
 .postBillPayPaymentsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayAccounts"></a>*#getBillPayAccounts(params, headers)*

Get all of the accounts for the Bill Pay user registered with the Bill Pay provider.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.AccountsGetResponse](#BillPayData.AccountsGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayAccounts(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPayeesSearch"></a>*#getBillPayPayeesSearch(params, headers)*

Search for payees by name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.name | String | The name of the payee to search for. Eg: Backbase. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PayeesSearchGetResponse](#BillPayData.PayeesSearchGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPayeesSearch(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_postBillPayPayeesRecord"></a>*#postBillPayPayeesRecord(data, headers)*

Create a new payee for the Bill Pay user.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BillPayData.PayeesPostRequest](#BillPayData.PayeesPostRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .postBillPayPayeesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPayeesSummary"></a>*#getBillPayPayeesSummary(params, headers)*

Get all payees with their associated payment services and any next payment scheduled.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PayeesSummaryGetResponse](#BillPayData.PayeesSummaryGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPayeesSummary(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayEnrolment"></a>*#getBillPayEnrolment(params, headers)*

Get the enrolment state for the current user.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.EnrolmentGetResponse](#BillPayData.EnrolmentGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayEnrolment(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_postBillPayEnrolmentRecord"></a>*#postBillPayEnrolmentRecord(data, headers)*

Enrol in Bill Pay, enrolment data is supplied in the integration service.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object (optional) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
billPayData
 .postBillPayEnrolmentRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPaymentsRecord"></a>*#getBillPayPaymentsRecord(id, params, headers)*

Get an existing payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PaymentsGetByIdResponse](#BillPayData.PaymentsGetByIdResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPaymentsRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_putBillPayPaymentsRecord"></a>*#putBillPayPaymentsRecord(id, data, headers)*

Modify a payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [BillPayData.PaymentsPutRequest](#BillPayData.PaymentsPutRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .putBillPayPaymentsRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_deleteBillPayPaymentsRecord"></a>*#deleteBillPayPaymentsRecord(id, params, headers)*

Delete a payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
billPayData
 .deleteBillPayPaymentsRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_postBillPayPaymentsRecurringRecord"></a>*#postBillPayPaymentsRecurringRecord(data, headers)*

Create a new recurring payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BillPayData.RecurringPaymentsPostRequest](#BillPayData.RecurringPaymentsPostRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .postBillPayPaymentsRecurringRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPaymentsRecurringRecord"></a>*#getBillPayPaymentsRecurringRecord(id, params, headers)*

Get a recurring payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.RecurringPaymentsGetByIdResponse](#BillPayData.RecurringPaymentsGetByIdResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPaymentsRecurringRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_deleteBillPayPaymentsRecurringRecord"></a>*#deleteBillPayPaymentsRecurringRecord(id, params, headers)*

Delete a recurring payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
billPayData
 .deleteBillPayPaymentsRecurringRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_putBillPayPaymentsRecurringRecord"></a>*#putBillPayPaymentsRecurringRecord(id, data, headers)*

Modify a recurring payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [BillPayData.RecurringPaymentsPutRequest](#BillPayData.RecurringPaymentsPutRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .putBillPayPaymentsRecurringRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPayeesRecord"></a>*#getBillPayPayeesRecord(id, params, headers)*

Get a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PayeesGetResponse](#BillPayData.PayeesGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPayeesRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_putBillPayPayeesRecord"></a>*#putBillPayPayeesRecord(id, data, headers)*

Modify a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [BillPayData.PayeesPutRequest](#BillPayData.PayeesPutRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .putBillPayPayeesRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_deleteBillPayPayeesRecord"></a>*#deleteBillPayPayeesRecord(id, params, headers)*

Delete a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object | Map of query parameters. |
| params.cancelPendingPayments | String | Indicates whether to cancel any existing pending payments for this payee before deleting it. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
billPayData
 .deleteBillPayPayeesRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_postBillPayPayeesElectronicRecord"></a>*#postBillPayPayeesElectronicRecord(data, headers)*

Create a new payee for the Bill Pay user.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [BillPayData.PayeesElectronicPostRequest](#BillPayData.PayeesElectronicPostRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .postBillPayPayeesElectronicRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_getBillPayPayeesElectronicRecord"></a>*#getBillPayPayeesElectronicRecord(id, params, headers)*

Get a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.PayeesElectronicGetResponse](#BillPayData.PayeesElectronicGetResponse) on success*

## Example

```javascript
billPayData
 .getBillPayPayeesElectronicRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_putBillPayPayeesElectronicRecord"></a>*#putBillPayPayeesElectronicRecord(id, data, headers)*

Modify a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [BillPayData.PayeesElectronicPutRequest](#BillPayData.PayeesElectronicPutRequest) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [BillPayData.BillPayPutPostResponse](#BillPayData.BillPayPutPostResponse) on success*

## Example

```javascript
billPayData
 .putBillPayPayeesElectronicRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="BillPayData_deleteBillPayPayeesElectronicRecord"></a>*#deleteBillPayPayeesElectronicRecord(id, params, headers)*

Delete a payee.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object | Map of query parameters. |
| params.cancelPendingPayments | String | Indicates whether to cancel any existing pending payments for this payee before deleting it. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
billPayData
 .deleteBillPayPayeesElectronicRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="BillPayData_schemas"></a>*#schemas*

Schema data. Keys of the object are names of the POST and PUT methods

Note: The schema is not strictly a JSON schema. It is a whitelisted set of
keys for each object property. The keys that are exposed are meant for validation
purposes.

The full list of *possible* keys for each property is:
type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
properties, items, minItems, maxItems, uniqueItems and required.

See http://json-schema.org/latest/json-schema-validation.html for more details
on the meaning of these keys.

The "required" array from JSON schema is tranformed into a "required" boolean
on each property. This is for ease of use.

**Type:** *Object*

### <a name="BillPayData_schemas.postBillPayPaymentsRecord"></a>*#schemas.postBillPayPaymentsRecord*

An object describing the JSON schema for the postBillPayPaymentsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payments": {
      "type": "array",
      "items": {
        "properties": {
          "payeeID": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "required": true
          },
          "paymentAccount": {
            "type": "object",
            "properties": {
              "accountNumber": {
                "type": "string",
                "minLength": 2,
                "maxLength": 100,
                "required": true
              },
              "routingNumber": {
                "type": "string",
                "minLength": 2,
                "maxLength": 100,
                "required": true
              },
              "accountType": {
                "type": "string",
                "minLength": 2,
                "maxLength": 100,
                "required": true
              }
            },
            "required": true
          },
          "paymentAmount": {
            "type": "number",
            "required": true
          },
          "paymentDate": {
            "type": "string",
            "format": "date",
            "required": true
          },
          "paymentMemo": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255,
            "required": false
          },
          "overnightDeliveryAddress": {
            "type": "object",
            "properties": {
              "address1": {
                "type": "string",
                "minLength": 1,
                "maxLength": 40,
                "required": true
              },
              "address2": {
                "type": "string",
                "minLength": 1,
                "maxLength": 40,
                "required": false
              },
              "city": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32,
                "required": true
              },
              "state": {
                "type": "string",
                "minLength": 2,
                "maxLength": 2,
                "required": true
              },
              "postalCode": {
                "type": "string",
                "minLength": 5,
                "maxLength": 9,
                "required": true
              }
            },
            "required": false
          }
        }
      },
      "minItems": 1,
      "maxItems": 50,
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.postBillPayPayeesRecord"></a>*#schemas.postBillPayPayeesRecord*

An object describing the JSON schema for the postBillPayPayeesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payee": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "nickName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        },
        "phoneNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "address": {
          "type": "object",
          "properties": {
            "address1": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": true
            },
            "address2": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": false
            },
            "city": {
              "type": "string",
              "minLength": 1,
              "maxLength": 32,
              "required": true
            },
            "state": {
              "type": "string",
              "minLength": 2,
              "maxLength": 2,
              "required": true
            },
            "postalCode": {
              "type": "string",
              "minLength": 5,
              "maxLength": 9,
              "required": true
            }
          },
          "required": true
        },
        "accountNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.putBillPayPaymentsRecord"></a>*#schemas.putBillPayPaymentsRecord*

An object describing the JSON schema for the putBillPayPaymentsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payment": {
      "type": "object",
      "properties": {
        "payeeID": {
          "type": "string",
          "minLength": 1,
          "maxLength": 100,
          "required": true
        },
        "paymentAccount": {
          "type": "object",
          "properties": {
            "accountNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "routingNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "accountType": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            }
          },
          "required": true
        },
        "paymentAmount": {
          "type": "number",
          "required": true
        },
        "paymentDate": {
          "type": "string",
          "format": "date",
          "required": true
        },
        "paymentMemo": {
          "type": "string",
          "minLength": 1,
          "maxLength": 255,
          "required": false
        },
        "overnightDeliveryAddress": {
          "type": "object",
          "properties": {
            "address1": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": true
            },
            "address2": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": false
            },
            "city": {
              "type": "string",
              "minLength": 1,
              "maxLength": 32,
              "required": true
            },
            "state": {
              "type": "string",
              "minLength": 2,
              "maxLength": 2,
              "required": true
            },
            "postalCode": {
              "type": "string",
              "minLength": 5,
              "maxLength": 9,
              "required": true
            }
          },
          "required": false
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.postBillPayPaymentsRecurringRecord"></a>*#schemas.postBillPayPaymentsRecurringRecord*

An object describing the JSON schema for the postBillPayPaymentsRecurringRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payment": {
      "type": "object",
      "properties": {
        "payeeID": {
          "type": "string",
          "minLength": 1,
          "maxLength": 100,
          "required": true
        },
        "paymentAccount": {
          "type": "object",
          "properties": {
            "accountNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "routingNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "accountType": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            }
          },
          "required": true
        },
        "paymentAmount": {
          "type": "number",
          "required": true
        },
        "paymentDate": {
          "type": "string",
          "format": "date",
          "required": true
        },
        "numberOfInstances": {
          "type": "integer",
          "minimum": 1,
          "required": false
        },
        "frequency": {
          "type": "string",
          "minLength": 1,
          "maxLength": 20,
          "required": true
        },
        "paymentScheduledAlert": {
          "type": "boolean",
          "required": true
        },
        "paymentSentAlert": {
          "type": "boolean",
          "required": true
        },
        "modelExpirationAlert": {
          "type": "boolean",
          "required": true
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.putBillPayPaymentsRecurringRecord"></a>*#schemas.putBillPayPaymentsRecurringRecord*

An object describing the JSON schema for the putBillPayPaymentsRecurringRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payment": {
      "type": "object",
      "properties": {
        "payeeID": {
          "type": "string",
          "minLength": 1,
          "maxLength": 100,
          "required": true
        },
        "paymentAccount": {
          "type": "object",
          "properties": {
            "accountNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "routingNumber": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            },
            "accountType": {
              "type": "string",
              "minLength": 2,
              "maxLength": 100,
              "required": true
            }
          },
          "required": true
        },
        "paymentAmount": {
          "type": "number",
          "required": true
        },
        "paymentDate": {
          "type": "string",
          "format": "date",
          "required": true
        },
        "numberOfInstances": {
          "type": "integer",
          "minimum": 1,
          "required": false
        },
        "frequency": {
          "type": "string",
          "minLength": 1,
          "maxLength": 20,
          "required": true
        },
        "paymentScheduledAlert": {
          "type": "boolean",
          "required": true
        },
        "paymentSentAlert": {
          "type": "boolean",
          "required": true
        },
        "modelExpirationAlert": {
          "type": "boolean",
          "required": true
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.putBillPayPayeesRecord"></a>*#schemas.putBillPayPayeesRecord*

An object describing the JSON schema for the putBillPayPayeesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payee": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "nickName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        },
        "phoneNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "address": {
          "type": "object",
          "properties": {
            "address1": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": true
            },
            "address2": {
              "type": "string",
              "minLength": 1,
              "maxLength": 40,
              "required": false
            },
            "city": {
              "type": "string",
              "minLength": 1,
              "maxLength": 32,
              "required": true
            },
            "state": {
              "type": "string",
              "minLength": 2,
              "maxLength": 2,
              "required": true
            },
            "postalCode": {
              "type": "string",
              "minLength": 5,
              "maxLength": 9,
              "required": true
            }
          },
          "required": true
        },
        "accountNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        },
        "modifyPendingPayments": {
          "type": "boolean",
          "required": true
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.postBillPayPayeesElectronicRecord"></a>*#schemas.postBillPayPayeesElectronicRecord*

An object describing the JSON schema for the postBillPayPayeesElectronicRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payee": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "nickName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        },
        "merchantID": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "merchantZipCode": {
          "type": "string",
          "minLength": 5,
          "maxLength": 10,
          "required": false
        },
        "accountNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        }
      },
      "required": true
    }
  }
}
```
### <a name="BillPayData_schemas.putBillPayPayeesElectronicRecord"></a>*#schemas.putBillPayPayeesElectronicRecord*

An object describing the JSON schema for the putBillPayPayeesElectronicRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "payee": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "nickName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": false
        },
        "accountNumber": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100,
          "required": true
        },
        "modifyPendingPayments": {
          "type": "boolean",
          "required": true
        }
      },
      "required": true
    }
  }
}
```

---

## BillPayDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-bill-pay-http-ng:billPayDataProvider* |


### <a name="BillPayDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="BillPayDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-bill-pay-http-ng:billPayDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-bill-pay-http-ng:billPayDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="BillPayData.AccountsGetResponse"></a>*BillPayData.AccountsGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accounts | Array (optional) of [Account](#Account) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.Address"></a>*BillPayData.Address*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| address1 | String |  |
| address2 | String (optional) |  |
| city | String |  |
| state | String |  |
| postalCode | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.BillPayPutPostResponse"></a>*BillPayData.BillPayPutPostResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.BillPayResponse"></a>*BillPayData.BillPayResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String (optional) | Any further information |
| warnings | Array of [ErrorItem](#ErrorItem) | Detailed field warnings/errors |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.Enrolment"></a>*BillPayData.Enrolment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| enrolled | Boolean |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.EnrolmentGetResponse"></a>*BillPayData.EnrolmentGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| enrolment | [BillPayData.Enrolment](#BillPayData.Enrolment) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.OneOffPayment"></a>*BillPayData.OneOffPayment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| payeeName | String |  |
| payeeAccountNumber | String (optional) |  |
| payeeNickName | String (optional) |  |
| paymentAmount | Number |  |
| paymentDate | String |  |
| paymentMemo | String (optional) |  |
| paymentAccountNumber | String |  |
| paymentAccountNickName | String (optional) |  |
| recurring | Boolean |  |
| paymentFee | Number (optional) |  |
| status | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.Payee"></a>*BillPayData.Payee*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| name | String |  |
| nickName | String (optional) |  |
| phoneNumber | String |  |
| address | [BillPayData.Address](#BillPayData.Address) |  |
| accountNumber | String (optional) |  |
| overnightDeliveryAddress | [BillPayData.Address](#BillPayData.Address) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeeCreate"></a>*BillPayData.PayeeCreate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| nickName | String (optional) |  |
| phoneNumber | String |  |
| address | [BillPayData.Address](#BillPayData.Address) |  |
| accountNumber | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeeElectronic"></a>*BillPayData.PayeeElectronic*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| name | String |  |
| nickName | String (optional) |  |
| accountNumber | String |  |
| overnightDeliveryAddress | [BillPayData.Address](#BillPayData.Address) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeeElectronicCreate"></a>*BillPayData.PayeeElectronicCreate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| nickName | String (optional) |  |
| merchantID | String |  |
| merchantZipCode | String (optional) |  |
| accountNumber | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeeElectronicUpdate"></a>*BillPayData.PayeeElectronicUpdate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| nickName | String (optional) |  |
| accountNumber | String |  |
| modifyPendingPayments | Boolean |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeeUpdate"></a>*BillPayData.PayeeUpdate*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| nickName | String (optional) |  |
| phoneNumber | String |  |
| address | [BillPayData.Address](#BillPayData.Address) |  |
| accountNumber | String (optional) |  |
| modifyPendingPayments | Boolean |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesElectronicGetResponse"></a>*BillPayData.PayeesElectronicGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeElectronic](#BillPayData.PayeeElectronic) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesElectronicPostRequest"></a>*BillPayData.PayeesElectronicPostRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeElectronicCreate](#BillPayData.PayeeElectronicCreate) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesElectronicPutRequest"></a>*BillPayData.PayeesElectronicPutRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeElectronicUpdate](#BillPayData.PayeeElectronicUpdate) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesGetResponse"></a>*BillPayData.PayeesGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.Payee](#BillPayData.Payee) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesPostRequest"></a>*BillPayData.PayeesPostRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeCreate](#BillPayData.PayeeCreate) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesPutRequest"></a>*BillPayData.PayeesPutRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeUpdate](#BillPayData.PayeeUpdate) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesSearchGetResponse"></a>*BillPayData.PayeesSearchGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payees | Array (optional) of [PayeeSearch](#PayeeSearch) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PayeesSummaryGetResponse"></a>*BillPayData.PayeesSummaryGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payeeSummaries | Array (optional) of [PayeeSummary](#PayeeSummary) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentAccount"></a>*BillPayData.PaymentAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accountNumber | String |  |
| routingNumber | String |  |
| accountType | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentRequest"></a>*BillPayData.PaymentRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payeeID | String |  |
| paymentAccount | [BillPayData.PaymentAccount](#BillPayData.PaymentAccount) |  |
| paymentAmount | Number |  |
| paymentDate | String |  |
| paymentMemo | String (optional) |  |
| overnightDeliveryAddress | [BillPayData.Address](#BillPayData.Address) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentResponse"></a>*BillPayData.PaymentResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| payeeName | String |  |
| payeeAccountNumber | String (optional) |  |
| payeeNickName | String (optional) |  |
| paymentAmount | Number |  |
| paymentDate | String |  |
| paymentMemo | String (optional) |  |
| paymentAccountNumber | String |  |
| paymentAccountNickName | String (optional) |  |
| recurring | Boolean |  |
| paymentFee | Number (optional) |  |
| numberOfInstances | [Integer](#Integer) (optional) |  |
| frequency | String (optional) |  |
| paymentScheduledAlert | Boolean (optional) |  |
| paymentSentAlert | Boolean (optional) |  |
| modelExpirationAlert | Boolean (optional) |  |
| status | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsGetByIdResponse"></a>*BillPayData.PaymentsGetByIdResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payment | [BillPayData.OneOffPayment](#BillPayData.OneOffPayment) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsGetResponse"></a>*BillPayData.PaymentsGetResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payments | Array of [BillPayData.PaymentResponse](#BillPayData.PaymentResponse) |  |
| totalCount | Number | Total count of payments matching the query |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsPostError"></a>*BillPayData.PaymentsPostError*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Any further information |
| errors | Array (optional) of [*](#*) | Detailed error information |
| payments | Array (optional) of [PaymentsError](#PaymentsError) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsPostRequest"></a>*BillPayData.PaymentsPostRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payments | Array of [BillPayData.PaymentRequest](#BillPayData.PaymentRequest) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsPostResponse"></a>*BillPayData.PaymentsPostResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payments | Array of [PaymentsResponse](#PaymentsResponse) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.PaymentsPutRequest"></a>*BillPayData.PaymentsPutRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payment | [BillPayData.PaymentRequest](#BillPayData.PaymentRequest) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.RecurringPayment"></a>*BillPayData.RecurringPayment*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payeeID | String |  |
| paymentAccount | [BillPayData.PaymentAccount](#BillPayData.PaymentAccount) |  |
| paymentAmount | Number |  |
| paymentDate | String |  |
| numberOfInstances | [Integer](#Integer) (optional) |  |
| frequency | String |  |
| paymentScheduledAlert | Boolean |  |
| paymentSentAlert | Boolean |  |
| modelExpirationAlert | Boolean |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.RecurringPaymentsGetByIdResponse"></a>*BillPayData.RecurringPaymentsGetByIdResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payment | [BillPayData.PaymentResponse](#BillPayData.PaymentResponse) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.RecurringPaymentsPostRequest"></a>*BillPayData.RecurringPaymentsPostRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payment | [BillPayData.RecurringPayment](#BillPayData.RecurringPayment) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="BillPayData.RecurringPaymentsPutRequest"></a>*BillPayData.RecurringPaymentsPutRequest*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| payment | [BillPayData.RecurringPayment](#BillPayData.RecurringPayment) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
