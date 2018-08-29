# widget-bb-standing-order-ng


Version: **1.6.118**

Shows standing orders list

## Imports

* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* model-bb-payment-ng
* vendor-bb-angular

---

## Table of Contents
- **StandingOrderController**<br/>    <a href="#StandingOrderController_$onInit">#$onInit()</a><br/>
- **widget-bb-standing-order-ng**<br/>    <a href="#widget-bb-standing-order-ngloadMore">loadMore(done)</a><br/>    <a href="#widget-bb-standing-order-ngonSort">onSort(orderBy, direction)</a><br/>    <a href="#widget-bb-standing-order-ngauthorize">authorize(paymentId)</a><br/>    <a href="#widget-bb-standing-order-ngauthorizeMultiple">authorizeMultiple(selectedPayments)</a><br/>    <a href="#widget-bb-standing-order-ngrejectMultiple">rejectMultiple(selectedPayments)</a><br/>    <a href="#widget-bb-standing-order-ngreject">reject(paymentId)</a><br/>    <a href="#widget-bb-standing-order-ngdeleteMultiplePayments">deleteMultiplePayments(selectedPayments)</a><br/>    <a href="#widget-bb-standing-order-ngdeletePayment">deletePayment(paymentId)</a><br/>    <a href="#widget-bb-standing-order-ngprocessStandingOrders">processStandingOrders(payments)</a><br/>    <a href="#widget-bb-standing-order-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#widget-bb-standing-order-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>

---

## StandingOrderController

Shows standing orders list

### <a name="StandingOrderController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [Payments](model-bb-payment-ng.html#Payments), [ModelError](model-bb-payment-ng.html#ModelError) - **

## Example

```javascript
<div ng-controller="StandingOrderController as $ctrl">
  <!-- ... -->
</div>
```

---

### <a name="widget-bb-standing-order-ngloadMore"></a>*loadMore(done)*

Loads more standing orders if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [Payments](model-bb-payment-ng.html#Payments), [ModelError](model-bb-payment-ng.html#ModelError) - *A promise*

---

---

### <a name="widget-bb-standing-order-ngonSort"></a>*onSort(orderBy, direction)*

Loads sorted list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

---

### <a name="widget-bb-standing-order-ngauthorize"></a>*authorize(paymentId)*

Request standing order authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the standing order |

##### Returns

Promise - **

---

### <a name="widget-bb-standing-order-ngauthorizeMultiple"></a>*authorizeMultiple(selectedPayments)*

Request list of standing orders authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedPayments | Array | Collection of payments id |

##### Returns

Promise - **

---

### <a name="widget-bb-standing-order-ngrejectMultiple"></a>*rejectMultiple(selectedPayments)*

Request multiple standing orders rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedPayments | Array | Collection of payments id |

##### Returns

Promise - **

---

### <a name="widget-bb-standing-order-ngreject"></a>*reject(paymentId)*

Request standing order rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the standing order |

##### Returns

Promise - **

---

### <a name="widget-bb-standing-order-ngdeleteMultiplePayments"></a>*deleteMultiplePayments(selectedPayments)*

Request multiple standing orders deletion.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedPayments | Array | Collection of payments id |

##### Returns

Promise - **

---

### <a name="widget-bb-standing-order-ngdeletePayment"></a>*deletePayment(paymentId)*

Request payment deletion.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the standing order |

##### Returns

Promise - **

---

## Hooks

Hooks for widget-bb-standing-order-ng

---

### <a name="widget-bb-standing-order-ngprocessStandingOrders"></a>*processStandingOrders(payments)*

Hook for processing standing orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array | Payments to process |

##### Returns

Array - *Processed payments*

---

### <a name="widget-bb-standing-order-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

---

### <a name="widget-bb-standing-order-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

## Templates

* *template.ng.html*

---
