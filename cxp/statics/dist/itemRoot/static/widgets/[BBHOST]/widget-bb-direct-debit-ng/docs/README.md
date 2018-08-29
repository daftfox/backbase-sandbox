# widget-bb-direct-debit-ng


Version: **1.2.105**

Direct Debits Widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="DirectDebitController as $ctrl">
   <ul>
      <li ng-repeat="item in $ctrl.state.directDebits">{{item.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-bb-direct-debit-ng**<br/>    <a href="#widget-bb-direct-debit-nghasDirectDebits">hasDirectDebits()</a><br/>    <a href="#widget-bb-direct-debit-ngload">load(params, merge)</a><br/>    <a href="#widget-bb-direct-debit-ngloadMore">loadMore(done)</a><br/>    <a href="#widget-bb-direct-debit-ngonSort">onSort(orderBy, direction)</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_processRequestParams">#processRequestParams(defaultParams, params)</a><br/>    <a href="#default-hooks_processDirectDebits">#processDirectDebits(directDebits)</a><br/>    <a href="#default-hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#default-hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>
- **Type Definitions**<br/>    <a href="#ChangedStatus">ChangedStatus</a><br/>    <a href="#Event">Event</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## state

Holds current controller state made by
previous method executions

---

### <a name="widget-bb-direct-debit-nghasDirectDebits"></a>*hasDirectDebits()*

if DirectDebits found returns true else false

##### Returns

Boolean - **

---

### <a name="widget-bb-direct-debit-ngload"></a>*load(params, merge)*

Loads direct debits data, called from $onInit

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request params |
| merge | Function | Function to merge loaded direct debits to the previous ones |

##### Returns

Promise of [DirectDebits](model-bb-payment-ng.html#DirectDebits), [ModelError](model-bb-payment-ng.html#ModelError) - *Promise which is resolved once direct debits are loaded and processed,
or rejected in case of errors*

---

### <a name="widget-bb-direct-debit-ngloadMore"></a>*loadMore(done)*

Loads more direct debits if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [DirectDebits](model-bb-payment-ng.html#DirectDebits), [ModelError](model-bb-payment-ng.html#ModelError) - **

---

---

### <a name="widget-bb-direct-debit-ngonSort"></a>*onSort(orderBy, direction)*

Loads sorted list of direct debits

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

---

## default-hooks

Default hooks for widget-bb-direct-debit-ng

### <a name="default-hooks_processRequestParams"></a>*#processRequestParams(defaultParams, params)*

processRequestParams default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| defaultParams | Object |  |
| params | Object |  |

##### Returns

Object - *processed request parameters*

### <a name="default-hooks_processDirectDebits"></a>*#processDirectDebits(directDebits)*

processDirectDebits default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| directDebits | Array of [objects](#objects) |  |

##### Returns

Array of Object - *directDebits*

### <a name="default-hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String or Null - **

### <a name="default-hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableColumn default hook

##### Returns

String or Null - **

## Type Definitions


### <a name="ChangedStatus"></a>*ChangedStatus*

Changed status enumeration

**Type:** *Object*


### <a name="Event"></a>*Event*

Bus events enumeration

**Type:** *Object*


---

## Templates

* *template.ng.html*

---
