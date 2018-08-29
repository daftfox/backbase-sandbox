# BillpayManageController


Version: **9.11.0**

Billpay - manage payee controller

## Imports

* lib-bb-billpay-errors
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-billpay-ng
* vendor-bb-angular

---

## Table of Contents
- **ViewModel**<br/>    <a href="#ViewModel_init">#init()</a><br/>    <a href="#ViewModel_create">#create</a><br/>    <a href="#ViewModel_update">#update</a><br/>    <a href="#ViewModel_get">#get</a><br/>    <a href="#ViewModel_manage">#manage</a><br/>    <a href="#ViewModel_remove">#remove</a><br/>    <a href="#ViewModel_clearBackendError">#clearBackendError(inputName)</a><br/>    <a href="#ViewModel_clearErrorMap">#clearErrorMap()</a><br/>
- **BillpayManageController**<br/>    <a href="#BillpayManageControllerbeforeCreatePayee">beforeCreatePayee()</a><br/>    <a href="#BillpayManageControllerafterCreatePayeeSuccess">afterCreatePayeeSuccess(data)</a><br/>    <a href="#BillpayManageControllerafterCreatePayeeError">afterCreatePayeeError(error)</a><br/>    <a href="#BillpayManageControllerbeforeUpdatePayee">beforeUpdatePayee()</a><br/>    <a href="#BillpayManageControllerafterUpdatePayeeSuccess">afterUpdatePayeeSuccess(data)</a><br/>    <a href="#BillpayManageControllerafterUpdatePayeeError">afterUpdatePayeeError(error)</a><br/>    <a href="#BillpayManageControllerbeforeSearchPayees">beforeSearchPayees()</a><br/>    <a href="#BillpayManageControllerafterSearchPayeesSuccess">afterSearchPayeesSuccess(payees)</a><br/>    <a href="#BillpayManageControllerafterSearchPayeesError">afterSearchPayeesError(error)</a><br/>
- **Router**<br/>    <a href="#Router_goto">#goto(name, params)</a><br/>    <a href="#Router_getParams">#getParams()</a><br/>    <a href="#Router_getRoute">#getRoute()</a><br/>    <a href="#Router_subscribe">#subscribe(callback)</a><br/>
- **ManagePayeeService**<br/>    <a href="#ManagePayeeService_postPayeesRecord">#postPayeesRecord(data)</a><br/>    <a href="#ManagePayeeService_putPayeesRecord">#putPayeesRecord(id, data)</a><br/>    <a href="#ManagePayeeService_searchPayees">#searchPayees(name)</a><br/>    <a href="#ManagePayeeService_getPayeeRecord">#getPayeeRecord(id)</a><br/>    <a href="#ManagePayeeService_getPendingPayments">#getPendingPayments(params)</a><br/>    <a href="#ManagePayeeService_getCurrencyCode">#getCurrencyCode()</a><br/>    <a href="#ManagePayeeService_removePayeeRecord">#removePayeeRecord(id, params)</a><br/>    <a href="#ManagePayeeService_postPayeesElectronicRecord">#postPayeesElectronicRecord(data)</a><br/>    <a href="#ManagePayeeService_getPayeesElectronicRecord">#getPayeesElectronicRecord(id)</a><br/>    <a href="#ManagePayeeService_putPayeesElectronicRecord">#putPayeesElectronicRecord(id, data)</a><br/>    <a href="#ManagePayeeService_removePayeeElectronicRecord">#removePayeeElectronicRecord(id, params)</a><br/>    <a href="#ManagePayeeService_viewBillpaySummaryIntent">#viewBillpaySummaryIntent()</a><br/>
- **Create**<br/>    <a href="#Create_afterPayeeElectronicSelected">#afterPayeeElectronicSelected(payee)</a><br/>    <a href="#Create_beforeCreatePayee">#beforeCreatePayee()</a><br/>    <a href="#Create_afterCreatePayeeSuccess">#afterCreatePayeeSuccess(data)</a><br/>    <a href="#Create_afterCreatePayeeError">#afterCreatePayeeError(error)</a><br/>
- **Get**<br/>    <a href="#Get_beforeGetPayeeRecord">#beforeGetPayeeRecord()</a><br/>    <a href="#Get_afterGetPayeeRecordSuccess">#afterGetPayeeRecordSuccess(payee)</a><br/>    <a href="#Get_afterGetPayeeRecordError">#afterGetPayeeRecordError(error)</a><br/>    <a href="#Get_beforeGetPendingPayments">#beforeGetPendingPayments()</a><br/>    <a href="#Get_afterGetPendingPaymentsSuccess">#afterGetPendingPaymentsSuccess(payments)</a><br/>    <a href="#Get_afterGetPendingPaymentsError">#afterGetPendingPaymentsError(error)</a><br/>
- **Remove**<br/>    <a href="#Remove_beforeRemovePayeeRecord">#beforeRemovePayeeRecord()</a><br/>    <a href="#Remove_afterRemovePayeeRecordSuccess">#afterRemovePayeeRecordSuccess()</a><br/>    <a href="#Remove_afterRemovePayeeRecordError">#afterRemovePayeeRecordError(error)</a><br/>
- **Update**<br/>    <a href="#Update_beforeUpdatePayee">#beforeUpdatePayee()</a><br/>    <a href="#Update_afterUpdatePayeeSuccess">#afterUpdatePayeeSuccess(data)</a><br/>    <a href="#Update_afterUpdatePayeeError">#afterUpdatePayeeError(error)</a><br/>
- **Type Definitions**<br/>    <a href="#Payee">Payee</a><br/>    <a href="#ViewState">ViewState</a><br/>

## Exports


## ViewModel


### <a name="ViewModel_init"></a>*#init()*

Initialize the container with the initial state if
it isn't already initialized (i.e. the current state is `undefined`)

##### Returns

[ViewState](#ViewState) - *The new state of the widget*
### <a name="ViewModel_create"></a>*#create*

expose create viewmodel

**Type:** *Object*

### <a name="ViewModel_update"></a>*#update*

expose update viewmodel

**Type:** *Object*

### <a name="ViewModel_get"></a>*#get*

expose get viewmodel

**Type:** *Object*

### <a name="ViewModel_manage"></a>*#manage*

expose manage viewmodel

**Type:** *Object*

### <a name="ViewModel_remove"></a>*#remove*

expose remove viewmodel

**Type:** *Object*


### <a name="ViewModel_clearBackendError"></a>*#clearBackendError(inputName)*

Amend the state to clear an input error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | the input to clear error against |

### <a name="ViewModel_clearErrorMap"></a>*#clearErrorMap()*

Amend the state to clear an input error

---

---

---

---

---

---

---

### <a name="BillpayManageControllerbeforeCreatePayee"></a>*beforeCreatePayee()*

Before create payee record

---

### <a name="BillpayManageControllerafterCreatePayeeSuccess"></a>*afterCreatePayeeSuccess(data)*

After create payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payee data |

---

### <a name="BillpayManageControllerafterCreatePayeeError"></a>*afterCreatePayeeError(error)*

After create payee error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while creating a payee |

---

### <a name="BillpayManageControllerbeforeUpdatePayee"></a>*beforeUpdatePayee()*

Before update payee record

---

### <a name="BillpayManageControllerafterUpdatePayeeSuccess"></a>*afterUpdatePayeeSuccess(data)*

After update payee record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payee data |

---

### <a name="BillpayManageControllerafterUpdatePayeeError"></a>*afterUpdatePayeeError(error)*

After update payee error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while updating a payee |

---

### <a name="BillpayManageControllerbeforeSearchPayees"></a>*beforeSearchPayees()*

Before searching payees

---

### <a name="BillpayManageControllerafterSearchPayeesSuccess"></a>*afterSearchPayeesSuccess(payees)*

After successful payees search

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payees | Array of Object | List of payees |

---

### <a name="BillpayManageControllerafterSearchPayeesError"></a>*afterSearchPayeesError(error)*

After search payees error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while searching payees |

---

---

## Router

The router service of the BillpayManagePayee widget


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

## ManagePayeeService

The purpose of this module is to provide the main structure of the
Add a Payee widget. Outlining the workflows, connecting the data from the
model to the view via the customizations provided by the extension.

The core functionality of the Manage Payee widget

### <a name="ManagePayeeService_postPayeesRecord"></a>*#postPayeesRecord(data)*

Create new payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [Payee](#Payee) | Payee data |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_putPayeesRecord"></a>*#putPayeesRecord(id, data)*

Update payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Payee id to put |
| data | [Payee](#Payee) | Payee data |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_searchPayees"></a>*#searchPayees(name)*

Search for payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | The name that will be searched |

##### Returns

Promise of Object - **

### <a name="ManagePayeeService_getPayeeRecord"></a>*#getPayeeRecord(id)*

Update the view with the payee loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Payee ID |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_getPendingPayments"></a>*#getPendingPayments(params)*

Update the view with the pending payments for this payee
  payments with PENDING status only, not IN_PROGRESS

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | params for request |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_getCurrencyCode"></a>*#getCurrencyCode()*

Return the currency code from widget preferences

##### Returns

String - **

### <a name="ManagePayeeService_removePayeeRecord"></a>*#removePayeeRecord(id, params)*

Update the view for a payee deletion

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Payee Id |
| params | Object | params for delete request |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_postPayeesElectronicRecord"></a>*#postPayeesElectronicRecord(data)*

Create new electronic payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [ElectronicPayeePost](model-bb-billpay-ng.html#ElectronicPayeePost) | Electronic payee data |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_getPayeesElectronicRecord"></a>*#getPayeesElectronicRecord(id)*

Update the view with the electronic payee loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Electronic payee ID |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_putPayeesElectronicRecord"></a>*#putPayeesElectronicRecord(id, data)*

Update an electronic payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Electronic payee ID to put |
| data | [ElectronicPayeePut](model-bb-billpay-ng.html#ElectronicPayeePut) | Electronic payee data |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_removePayeeElectronicRecord"></a>*#removePayeeElectronicRecord(id, params)*

Update the view for an electronic payee deletion

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Electronic payee ID |
| params | Object | params for delete request |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePayeeService_viewBillpaySummaryIntent"></a>*#viewBillpaySummaryIntent()*

Intent for viewing bill pay summary

---

## Create


### <a name="Create_afterPayeeElectronicSelected"></a>*#afterPayeeElectronicSelected(payee)*

Amend the state to include the selected payee data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | Object | the selected payee data |

### <a name="Create_beforeCreatePayee"></a>*#beforeCreatePayee()*

Change the indication that the payee is being created

### <a name="Create_afterCreatePayeeSuccess"></a>*#afterCreatePayeeSuccess(data)*

Update the `ViewState` after creating a payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payee data |

### <a name="Create_afterCreatePayeeError"></a>*#afterCreatePayeeError(error)*

Amend the view to show the error encountered when creating a payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Create payee record error |

---

## Get


### <a name="Get_beforeGetPayeeRecord"></a>*#beforeGetPayeeRecord()*

Change the indication that the payee is being retrieved

### <a name="Get_afterGetPayeeRecordSuccess"></a>*#afterGetPayeeRecordSuccess(payee)*

Amend the state to show the retrieved payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [BillPayData.PayeeGetResponse](data-bb-bill-pay-http-ng.html#BillPayData.PayeeGetResponse) | Retrieved payee |

### <a name="Get_afterGetPayeeRecordError"></a>*#afterGetPayeeRecordError(error)*

Amend the state to include the error encountered when retrieving payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Get payee error |

### <a name="Get_beforeGetPendingPayments"></a>*#beforeGetPendingPayments()*

Amend the state to indicate that the payments are being fetched

### <a name="Get_afterGetPendingPaymentsSuccess"></a>*#afterGetPendingPaymentsSuccess(payments)*

Amend the state to include a list of pending payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Object | The pending payments retrieved |

### <a name="Get_afterGetPendingPaymentsError"></a>*#afterGetPendingPaymentsError(error)*

Amend the state to include the error encountered when
  retrieving pending payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Get pending payments error |

---

## Manage


---

---

## Remove


### <a name="Remove_beforeRemovePayeeRecord"></a>*#beforeRemovePayeeRecord()*

Amend the state before a payee is removed

### <a name="Remove_afterRemovePayeeRecordSuccess"></a>*#afterRemovePayeeRecordSuccess()*

Amend the state after a payee is removed successfully

### <a name="Remove_afterRemovePayeeRecordError"></a>*#afterRemovePayeeRecordError(error)*

Amend the state to include the error encountered when
  removing payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Remove payee error |

---

## Update


### <a name="Update_beforeUpdatePayee"></a>*#beforeUpdatePayee()*

Change the indication that the payee is being updated

### <a name="Update_afterUpdatePayeeSuccess"></a>*#afterUpdatePayeeSuccess(data)*

Update the `ViewState` after updating a payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payee data |

### <a name="Update_afterUpdatePayeeError"></a>*#afterUpdatePayeeError(error)*

Amend the view to show the error encountered when updating a payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Update payee record error |

## Type Definitions


### <a name="Payee"></a>*Payee*

Payee type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
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

### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| route | Object | Indicates current router state |

---

## Templates

* *template.ng.html*

---
