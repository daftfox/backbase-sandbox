# widget-bus-manage-payment-orders-ng


Version: **1.108.20**

Widget to manage payment orders

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-permissions-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **ManagePaymentOrderController**<br/>    <a href="#ManagePaymentOrderController_load">#load(merge, params)</a><br/>    <a href="#ManagePaymentOrderController_loadMore">#loadMore(done)</a><br/>    <a href="#ManagePaymentOrderController_changePage">#changePage()</a><br/>    <a href="#ManagePaymentOrderController_onSort">#onSort(orderBy, direction)</a><br/>    <a href="#ManagePaymentOrderController_onSearchSubmit">#onSearchSubmit()</a><br/>    <a href="#ManagePaymentOrderController_onSearchClear">#onSearchClear()</a><br/>    <a href="#ManagePaymentOrderController_getAccountsFrom">#getAccountsFrom(params)</a><br/>    <a href="#ManagePaymentOrderController_selectAccountFrom">#selectAccountFrom(identifier, name)</a><br/>    <a href="#ManagePaymentOrderController_onApplyFilter">#onApplyFilter()</a><br/>    <a href="#ManagePaymentOrderController_authorize">#authorize(paymentId)</a><br/>    <a href="#ManagePaymentOrderController_reject">#reject(paymentId)</a><br/>    <a href="#ManagePaymentOrderController_cancelPayment">#cancelPayment(paymentId, version)</a><br/>    <a href="#ManagePaymentOrderController_deletePayment">#deletePayment(paymentId, version)</a><br/>    <a href="#ManagePaymentOrderController_approveBulk">#approveBulk()</a><br/>    <a href="#ManagePaymentOrderController_rejectBulk">#rejectBulk()</a><br/>    <a href="#ManagePaymentOrderController_$onInit">#$onInit()</a><br/>    <a href="#ManagePaymentOrderController_privileges">#privileges</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processPaymentOrders">#processPaymentOrders(payments)</a><br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>

---

## Preference

Widget preferences enum

---

## Action

Payment actions enum

---

## ManagePaymentOrderController

Controller for managing payment order

### <a name="ManagePaymentOrderController_load"></a>*#load(merge, params)*

Load payment orders

| Parameter | Type | Description |
| :-- | :-- | :-- |
| merge | Function | Replaces existing payments with new payments |
| params | Object | Request parameters |

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="ManagePaymentOrderController_loadMore"></a>*#loadMore(done)*

Loads more payments if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="ManagePaymentOrderController_changePage"></a>*#changePage()*

Change page of displayed payments.

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A Promise with loaded payments*

### <a name="ManagePaymentOrderController_onSort"></a>*#onSort(orderBy, direction)*

Loads sorted list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

### <a name="ManagePaymentOrderController_onSearchSubmit"></a>*#onSearchSubmit()*

Enables searching mode and loads payment orders based on search query

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="ManagePaymentOrderController_onSearchClear"></a>*#onSearchClear()*

Disables searching mode and resets payment orders

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="ManagePaymentOrderController_getAccountsFrom"></a>*#getAccountsFrom(params)*

Load accounts available to payment from.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | undefined |  |

##### Returns

Promise of Object - *A Promise that returns a flat accounts list.*

### <a name="ManagePaymentOrderController_selectAccountFrom"></a>*#selectAccountFrom(identifier, name)*

Assign selected fromAccount identifier to the filter form.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| identifier | [String?](#String?) | Account identifier IBAN/BBAN |
| name | [String?](#String?) | Account name |

### <a name="ManagePaymentOrderController_onApplyFilter"></a>*#onApplyFilter()*

Call filter method.

### <a name="ManagePaymentOrderController_authorize"></a>*#authorize(paymentId)*

Requests payment authorization (approval).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_reject"></a>*#reject(paymentId)*

Requests payment rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_cancelPayment"></a>*#cancelPayment(paymentId, version)*

Requests payment cancel.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_deletePayment"></a>*#deletePayment(paymentId, version)*

Requests payment delete.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_approveBulk"></a>*#approveBulk()*

Request approving the selected payments.

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_rejectBulk"></a>*#rejectBulk()*

Request rejecting the selected payments.

##### Returns

Promise - **

### <a name="ManagePaymentOrderController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*
### <a name="ManagePaymentOrderController_privileges"></a>*#privileges*

Container to store retrieved privileges state

**Type:** *Object*


## Example

```javascript
<div ng-controller="ManagePaymentOrderController as $ctrl">
  <!-- ... -->
</div>
```

---

## Hooks

Hooks for widget-bus-manage-payment-orders-ng

### <a name="Hooks_processPaymentOrders"></a>*#processPaymentOrders(payments)*

Hook for processing payment orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array | Payments to process |

##### Returns

Array - *Processed payments*

### <a name="Hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

### <a name="Hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

## Templates

* *template.ng.html*

---
