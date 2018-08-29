# widget-bb-authorization-ng


Version: **1.2.106**

Widget to authorize or reject payment orders

## Imports

* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* model-bb-payment-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="AuthorizationController as $ctrl">
   <table>
     <thead>
       <tr>
         <th i18n-key="header.status"></th>
         <th i18n-key="header.from"></th>
         <th i18n-key="header.to"></th>
         <th i18n-key="header.currency"></th>
         <th i18n-key="header.amount"></th>
       </tr>
     </thead>
     <tbody>
       <tr ng-repeat="payment in $ctrl.state.authorizations.data track by payment.id">
         <td i18n-key="{{ ::payment.statusLabel }}"></td>
         <td ng-bind="::payment.debitAccountIdentification.identification"></td>
         <td ng-bind="::payment.creditAccountIdentification.identification"></td>
         <td ng-bind="::payment.currency"></td>
         <td ng-bind="::payment.amount | currency: ''"></td>
       </tr>
     </tbody>
   </table>
 </div>
```

## Table of Contents
- **AuthorizationController**<br/>    <a href="#AuthorizationController_changePage">#changePage()</a><br/>
- **widget-bb-authorization-ng**<br/>    <a href="#widget-bb-authorization-ngloadMore">loadMore(done)</a><br/>    <a href="#widget-bb-authorization-ngonSort">onSort(orderBy, direction)</a><br/>    <a href="#widget-bb-authorization-ng$onInit">$onInit()</a><br/>    <a href="#widget-bb-authorization-ngauthorize">authorize(paymentId)</a><br/>    <a href="#widget-bb-authorization-ngauthorizeMultiple">authorizeMultiple(selectedPayments)</a><br/>    <a href="#widget-bb-authorization-ngreject">reject(paymentId)</a><br/>    <a href="#widget-bb-authorization-ngrejectMultiple">rejectMultiple(selectedPayments)</a><br/>    <a href="#widget-bb-authorization-ngprocessPayments">processPayments(payments)</a><br/>    <a href="#widget-bb-authorization-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>

---

## AuthorizationController

Widget to authorize or reject payment orders

### <a name="AuthorizationController_changePage"></a>*#changePage()*

Change page of displayed payment orders.

##### Returns

Promise of [Payments](model-bb-payment-ng.html#Payments), [ModelError](model-bb-payment-ng.html#ModelError) - *A Promise with loaded payment orders*

## Example

```javascript
<div ng-controller="AuthorizationController as $ctrl">
  <!-- ... -->
</div>
```

---

### <a name="widget-bb-authorization-ngloadMore"></a>*loadMore(done)*

Loads more payments if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [void](#void) - **

---

### <a name="widget-bb-authorization-ngonSort"></a>*onSort(orderBy, direction)*

Loads sorted list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

---

### <a name="widget-bb-authorization-ng$onInit"></a>*$onInit()*

Initialise the controller loading payment orders to authorize.

##### Returns

Promise of Array - **

---

### <a name="widget-bb-authorization-ngauthorize"></a>*authorize(paymentId)*

Request payment authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

---

### <a name="widget-bb-authorization-ngauthorizeMultiple"></a>*authorizeMultiple(selectedPayments)*

Request list of payments authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedPayments | Array | Collection of payments id |

##### Returns

Promise - **

---

### <a name="widget-bb-authorization-ngreject"></a>*reject(paymentId)*

Request payment rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentId | String | Id of the payment |

##### Returns

Promise - **

---

### <a name="widget-bb-authorization-ngrejectMultiple"></a>*rejectMultiple(selectedPayments)*

Request multiple payments rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedPayments | Array | Collection of payments id |

##### Returns

Promise - **

---

## Hooks

Hooks for widget-bb-authorization-ng

---

### <a name="widget-bb-authorization-ngprocessPayments"></a>*processPayments(payments)*

Hook for processing payments.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array | Payments to process |

##### Returns

Array - *Processed payments*

---

### <a name="widget-bb-authorization-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

## Templates

* *template.ng.html*

---
