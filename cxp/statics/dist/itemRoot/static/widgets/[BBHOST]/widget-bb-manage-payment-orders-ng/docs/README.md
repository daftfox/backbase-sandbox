# widget-bb-manage-payment-orders-ng


Version: **1.107.20**

Widget to manage payment orders

## Imports

* lib-bb-event-bus-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **ManagePaymentOrderController**<br/>    <a href="#ManagePaymentOrderController_load">#load(doneFn)</a><br/>    <a href="#ManagePaymentOrderController_onProductChange">#onProductChange(product)</a><br/>    <a href="#ManagePaymentOrderController_edit">#edit(payment)</a><br/>    <a href="#ManagePaymentOrderController_cancel">#cancel(payment)</a><br/>    <a href="#ManagePaymentOrderController_deleteNotification">#deleteNotification(notification)</a><br/>    <a href="#ManagePaymentOrderController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processPaymentOrders">#processPaymentOrders(paymentOrders)</a><br/>    <a href="#Hooks_processRequestParams">#processRequestParams(requestParams)</a><br/>
- **ManagePaymentOrderService**<br/>    <a href="#ManagePaymentOrderService_load">#load(params)</a><br/>    <a href="#ManagePaymentOrderService_loadRate">#loadRate(params)</a><br/>    <a href="#ManagePaymentOrderService_loadProducts">#loadProducts()</a><br/>    <a href="#ManagePaymentOrderService_setupSelectedProduct">#setupSelectedProduct()</a><br/>    <a href="#ManagePaymentOrderService_cancel">#cancel(payment)</a><br/>
- **Type Definitions**<br/>    <a href="#Payments">Payments</a><br/>    <a href="#PaymentOrdersResponse">PaymentOrdersResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>

---

## ManagePaymentOrderController

Controller for managing payment order

### <a name="ManagePaymentOrderController_load"></a>*#load(doneFn)*

Handles loading more payment orders

| Parameter | Type | Description |
| :-- | :-- | :-- |
| doneFn | Function | load more callback |

##### Returns

Promise of Array - **

### <a name="ManagePaymentOrderController_onProductChange"></a>*#onProductChange(product)*

Handles product change: setup selected product in the viewModel and
load payment by selected product.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | selected product |

### <a name="ManagePaymentOrderController_edit"></a>*#edit(payment)*

Handles edit of payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | payment to edit |

### <a name="ManagePaymentOrderController_cancel"></a>*#cancel(payment)*

Handles cancel of payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | payment to cancel |

### <a name="ManagePaymentOrderController_deleteNotification"></a>*#deleteNotification(notification)*

Delete current notification from viewState

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object | current notification |

### <a name="ManagePaymentOrderController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [Payments](#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

## Example

```javascript
<div ng-controller="ManagePaymentOrderController as $ctrl">
  <!-- ... -->
</div>
```

---

## Hooks

Hooks for widget-bb-manage-payment-orders-ng

### <a name="Hooks_processPaymentOrders"></a>*#processPaymentOrders(paymentOrders)*

Hook for processing payment orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrders | Array | Paument orders to process |

##### Returns

Array - *Processed payments orders*

### <a name="Hooks_processRequestParams"></a>*#processRequestParams(requestParams)*

Hook for processing payment orders.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestParams | Array | Request params |

##### Returns

Array - *Processed request params*

---

## ManagePaymentOrderService

The service encapsulates the core functionality of the Payment Orders Widget.
It co-ordinates the communication of data from the `Model` with the communication with the user
by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bb-manage-payment-orderrs-ng:service* |


### <a name="ManagePaymentOrderService_load"></a>*#load(params)*

Fetch payment orders from the model and update the [ViewState](#ViewState) to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request params |

##### Returns

Promise - **

### <a name="ManagePaymentOrderService_loadRate"></a>*#loadRate(params)*

Fetch a exchange rate from the model and update the [ViewState](#ViewState) to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request params |

##### Returns

Promise - **

### <a name="ManagePaymentOrderService_loadProducts"></a>*#loadProducts()*

Fetch products from the model and update the [ViewState](#ViewState) to display them.

##### Returns

Promise - **

### <a name="ManagePaymentOrderService_setupSelectedProduct"></a>*#setupSelectedProduct()*

Fetch selected product id and update `ViewState`.

##### Returns

Promise - **

### <a name="ManagePaymentOrderService_cancel"></a>*#cancel(payment)*

Cancels given payment and update the [ViewState](#ViewState) according to response.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | Payment to cancel |

##### Returns

Promise - **

## Type Definitions


### <a name="Payments"></a>*Payments*

Payments type definition

**Type:** *[Payments](model-bb-payment-orders-ng.html#Payments)*


### <a name="PaymentOrdersResponse"></a>*PaymentOrdersResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| rawData | Array of Object | Loaded transactions array |
| totalCount | Number | Total number of transactions |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |

---

## Templates

* *template.ng.html*

---
