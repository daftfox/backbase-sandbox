# widget-bb-standing-payment-orders-ng


Version: **1.107.20**

Shows standing orders list

## Imports

* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-permissions-ng
* lib-bb-widget-extension-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **StandingOrdersController**<br/>    <a href="#StandingOrdersController_loadMore">#loadMore(done)</a><br/>    <a href="#StandingOrdersController_changePage">#changePage()</a><br/>    <a href="#StandingOrdersController_onSort">#onSort(orderBy, direction)</a><br/>    <a href="#StandingOrdersController_onSearchSubmit">#onSearchSubmit()</a><br/>    <a href="#StandingOrdersController_onSearchClear">#onSearchClear()</a><br/>    <a href="#StandingOrdersController_getAccountsFrom">#getAccountsFrom(params)</a><br/>    <a href="#StandingOrdersController_selectAccountFrom">#selectAccountFrom(identifier, name)</a><br/>    <a href="#StandingOrdersController_onApplyFilter">#onApplyFilter()</a><br/>    <a href="#StandingOrdersController_authorize">#authorize(paymentId)</a><br/>    <a href="#StandingOrdersController_reject">#reject(paymentId)</a><br/>    <a href="#StandingOrdersController_cancel">#cancel(paymentId, version)</a><br/>    <a href="#StandingOrdersController_deletePayment">#deletePayment(paymentId, version)</a><br/>    <a href="#StandingOrdersController_approveBulk">#approveBulk()</a><br/>    <a href="#StandingOrdersController_$onInit">#$onInit()</a><br/>    <a href="#StandingOrdersController_privileges">#privileges</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processStandingOrders">#processStandingOrders(payments)</a><br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>    <a href="#Hooks_truncateParams">#truncateParams()</a><br/>

---

## Action

Payment actions enum

---

## StandingOrdersController

Shows standing orders list

### <a name="StandingOrdersController_loadMore"></a>*#loadMore(done)*

Loads more standing orders if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [Payments](model-bb-payment-ng.html#Payments), [ModelError](model-bb-payment-ng.html#ModelError) - *A promise*

### <a name="StandingOrdersController_changePage"></a>*#changePage()*

Change page of displayed accounts.

##### Returns

Promise of [Accounts](model-bb-product-summary-ng.html#Accounts), [ModelError](model-bb-product-summary-ng.html#ModelError) - *A Promise with loaded accounts*

### <a name="StandingOrdersController_onSort"></a>*#onSort(orderBy, direction)*

Loads sorted list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

### <a name="StandingOrdersController_onSearchSubmit"></a>*#onSearchSubmit()*

Enables searching mode and loads payment orders based on search query

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="StandingOrdersController_onSearchClear"></a>*#onSearchClear()*

Disables searching mode and resets payment orders

##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](lib-bb-model-errors.html#ModelError) - *A promise*

### <a name="StandingOrdersController_getAccountsFrom"></a>*#getAccountsFrom(params)*

Load accounts available to payment from.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | undefined |  |

##### Returns

Promise of Object - *A Promise that returns a flat accounts list.*

### <a name="StandingOrdersController_selectAccountFrom"></a>*#selectAccountFrom(identifier, name)*

Assign selected fromAccount identifier to the filter form.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| identifier | [String?](#String?) | Account identifier IBAN/BBAN |
| name | [String?](#String?) | Account name |

### <a name="StandingOrdersController_onApplyFilter"></a>*#onApplyFilter()*

Call filter method.

### <a name="StandingOrdersController_authorize"></a>*#authorize(paymentId)*

Requests payment authorization (approval).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

### <a name="StandingOrdersController_reject"></a>*#reject(paymentId)*

Requests payment rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

### <a name="StandingOrdersController_cancel"></a>*#cancel(paymentId, version)*

request payment cancel

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="StandingOrdersController_deletePayment"></a>*#deletePayment(paymentId, version)*

Requests payment delete.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |
| version | Number | property on payment Object |

##### Returns

Promise - **

### <a name="StandingOrdersController_approveBulk"></a>*#approveBulk()*

Request rejecting the selected payments.

##### Returns

Promise - **

### <a name="StandingOrdersController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [Payments](model-bb-payment-orders-ng.html#Payments), [ModelError](model-bb-payment-orders-ng.html#ModelError) - **
### <a name="StandingOrdersController_privileges"></a>*#privileges*

Container to store retrieved privileges state

**Type:** *Object*


## Example

```javascript
<div ng-controller="StandingOrdersController as $ctrl">
  <!-- ... -->
</div>
```

---

## Hooks

Hooks for widget-bb-standing-payment-orders-ng

### <a name="Hooks_processStandingOrders"></a>*#processStandingOrders(payments)*

Hook for processing standing orders.

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

### <a name="Hooks_truncateParams"></a>*#truncateParams()*

truncateParams default hook

##### Returns

Object - **

## Templates

* *template.ng.html*

---
