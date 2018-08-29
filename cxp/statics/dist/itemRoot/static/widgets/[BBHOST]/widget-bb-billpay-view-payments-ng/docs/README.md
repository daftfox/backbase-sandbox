# widget-bb-billpay-view-payments-ng


Version: **6.11.0**

Billpay view payments

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-billpay-ng
* vendor-bb-angular

---

## Table of Contents
- **ViewModel**<br/>    <a href="#ViewModel_init">#init()</a><br/>    <a href="#ViewModel_list">#list</a><br/>    <a href="#ViewModel_remove">#remove</a><br/>
- **Hooks**<br/>    <a href="#Hooks_setState">#setState(current)</a><br/>    <a href="#Hooks_transformPayment">#transformPayment(payment)</a><br/>    <a href="#Hooks_beforeGetPayments">#beforeGetPayments(current)</a><br/>    <a href="#Hooks_afterGetPaymentsSuccess">#afterGetPaymentsSuccess(current)</a><br/>    <a href="#Hooks_afterGetPaymentsError">#afterGetPaymentsError(current)</a><br/>    <a href="#Hooks_beforeRemovePayment">#beforeRemovePayment()</a><br/>    <a href="#Hooks_afterRemovePaymentSuccess">#afterRemovePaymentSuccess()</a><br/>    <a href="#Hooks_afterRemovePaymentError">#afterRemovePaymentError(error)</a><br/>
- **Router**<br/>    <a href="#Router_goto">#goto(name, params)</a><br/>    <a href="#Router_getParams">#getParams()</a><br/>    <a href="#Router_getRoute">#getRoute()</a><br/>    <a href="#Router_subscribe">#subscribe(callback)</a><br/>
- **BillpayViewPaymentsService**<br/>    <a href="#BillpayViewPaymentsService_getPayments">#getPayments()</a><br/>    <a href="#BillpayViewPaymentsService_deletePayment">#deletePayment(id, recurring)</a><br/>    <a href="#BillpayViewPaymentsService_getCurrencyCode">#getCurrencyCode()</a><br/>
- **List**<br/>    <a href="#List_beforeGetPayments">#beforeGetPayments()</a><br/>    <a href="#List_afterGetPaymentsSuccess">#afterGetPaymentsSuccess(payments)</a><br/>    <a href="#List_afterGetPaymentsError">#afterGetPaymentsError(error)</a><br/>
- **Remove**<br/>    <a href="#Remove_beforeRemovePayment">#beforeRemovePayment()</a><br/>    <a href="#Remove_afterRemovePaymentSuccess">#afterRemovePaymentSuccess(id, recurring)</a><br/>    <a href="#Remove_afterRemovePaymentError">#afterRemovePaymentError(error)</a><br/>
- **Type Definitions**<br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#ViewState">ViewState</a><br/>

## Exports


## ViewModel


### <a name="ViewModel_init"></a>*#init()*

Initialize the container with the initial state if
it isn't already initialized (i.e. the current state is `undefined`)

##### Returns

[ViewState](#ViewState) - *The new state of the widget*
### <a name="ViewModel_list"></a>*#list*

expose list viewmodel

**Type:** *Object*

### <a name="ViewModel_remove"></a>*#remove*

expose remove viewmodel

**Type:** *Object*


---

---

## Hooks


*Extends*: [Hooks](lib-bb-widget-extension-ng.html#Hooks)

### <a name="Hooks_setState"></a>*#setState(current)*

add any state required by extension

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_transformPayment"></a>*#transformPayment(payment)*

Make any modifications needed to the loaded payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | The current state of the payment |

##### Returns

Object - *The transformed payment*

### <a name="Hooks_beforeGetPayments"></a>*#beforeGetPayments(current)*

Amend the view before loading the list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPaymentsSuccess"></a>*#afterGetPaymentsSuccess(current)*

Amend the view after successfully loading the list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPaymentsError"></a>*#afterGetPaymentsError(current)*

Amend the view after unsuccessfully loading the list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforeRemovePayment"></a>*#beforeRemovePayment()*

Amend the view to inform the user the payment is being removed

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterRemovePaymentSuccess"></a>*#afterRemovePaymentSuccess()*

Amend the view to display the list of payments

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterRemovePaymentError"></a>*#afterRemovePaymentError(error)*

Amend the view to display the error encountered when removing the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

---

---

## Router

The router service of the BillpayViewPayments widget


### <a name="Router_goto"></a>*#goto(name, params)*

Method to navigate to a specific route

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | New route name |
| params | Object | New route parameters object |

### <a name="Router_getParams"></a>*#getParams()*

Method to get current route params from the [ViewState](#ViewState)

##### Returns

Object - *current parameters object*

### <a name="Router_getRoute"></a>*#getRoute()*

Method to get current route name from the state

### <a name="Router_subscribe"></a>*#subscribe(callback)*

Method to subscribe to a route change

| Parameter | Type | Description |
| :-- | :-- | :-- |
| callback | Function | A callback to be subscribed |

##### Returns

Function - *The method to unsubscribe*

---

## BillpayViewPaymentsService

The service encapsulates the core functionality of the BillpayViewPayments
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

### <a name="BillpayViewPaymentsService_getPayments"></a>*#getPayments()*

Update the view with a list of payments loaded from the data source

##### Returns

Promise of [void](#void) - **

### <a name="BillpayViewPaymentsService_deletePayment"></a>*#deletePayment(id, recurring)*

Delete a payment and update the view with remaining payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | undefined | payment ID |
| recurring | undefined | is the payment a recurring payment |

##### Returns

Promise of [void](#void) - **

### <a name="BillpayViewPaymentsService_getCurrencyCode"></a>*#getCurrencyCode()*

Return the currency code from widget preferences

##### Returns

String - **

---

## List


### <a name="List_beforeGetPayments"></a>*#beforeGetPayments()*

Amend the view to inform the user the list of payees is being loaded

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterGetPaymentsSuccess"></a>*#afterGetPaymentsSuccess(payments)*

Amend the view to display the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array of [Payment](model-bb-billpay-ng.html#Payment) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterGetPaymentsError"></a>*#afterGetPaymentsError(error)*

Amend the view to display the error encountered when loading the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

---

## Remove


### <a name="Remove_beforeRemovePayment"></a>*#beforeRemovePayment()*

Amend the view to inform the user the payment is being removed

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Remove_afterRemovePaymentSuccess"></a>*#afterRemovePaymentSuccess(id, recurring)*

Amend the view to display the list of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | undefined | payment ID |
| recurring | undefined | is the payment a recurring payment |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Remove_afterRemovePaymentError"></a>*#afterRemovePaymentError(error)*

Amend the view to display the error encountered when removing the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

## Type Definitions


### <a name="HelperContext"></a>*HelperContext*


*Extends*: [HelperContext](lib-bb-extension-helpers-ng.html#HelperContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [BillpayViewPaymentsService](#BillpayViewPaymentsService) |  |

### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [BillpayViewPaymentsService](#BillpayViewPaymentsService) |  |

### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [BillpayViewPaymentsService](#BillpayViewPaymentsService) |  |

### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| items | Array of [any](#any) |  |
| route | Object | Indicates current router state |

---

## Templates

* *template.ng.html*

---
