# ext-bb-authorization-ng


Version: **2.0.4**

Payment authorization extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bus-format-amount-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-authorization-ng</value>
</property>
```

## Table of Contents
- **ext-bb-authorization-ng**<br/>    <a href="#ext-bb-authorization-ngisSelected">isSelected(id, selState)</a><br/>    <a href="#ext-bb-authorization-ngisAnySelected">isAnySelected(selState)</a><br/>    <a href="#ext-bb-authorization-nghowManySelected">howManySelected(selState)</a><br/>    <a href="#ext-bb-authorization-ngisSelectedAll">isSelectedAll(payments, selState)</a><br/>    <a href="#ext-bb-authorization-ngisSelectedPart">isSelectedPart(payments, selState)</a><br/>    <a href="#ext-bb-authorization-ngtoggleAllPayments">toggleAllPayments(payments, selState)</a><br/>    <a href="#ext-bb-authorization-ngdeselectPayments">deselectPayments(selState)</a><br/>    <a href="#ext-bb-authorization-ngtoggleSelection">toggleSelection(id, selState)</a><br/>    <a href="#ext-bb-authorization-ngremoveNotification">removeNotification(payment, list)</a><br/>    <a href="#ext-bb-authorization-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bb-authorization-ngprocessPayments">processPayments(payments)</a><br/>    <a href="#ext-bb-authorization-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>

---

### <a name="ext-bb-authorization-ngisSelected"></a>*isSelected(id, selState)*

Helper to know if the payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bb-authorization-ngisAnySelected"></a>*isAnySelected(selState)*

Helper to know if any payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bb-authorization-nghowManySelected"></a>*howManySelected(selState)*

Helper to know how many payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bb-authorization-ngisSelectedAll"></a>*isSelectedAll(payments, selState)*

Helper to know if ALL payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bb-authorization-ngisSelectedPart"></a>*isSelectedPart(payments, selState)*

Helper to know if at least one payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bb-authorization-ngtoggleAllPayments"></a>*toggleAllPayments(payments, selState)*

Helper to select/deselect all payments loaded.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bb-authorization-ngdeselectPayments"></a>*deselectPayments(selState)*

Helper to deselect all payments selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bb-authorization-ngtoggleSelection"></a>*toggleSelection(id, selState)*

Helper to select/deselect single payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bb-authorization-ngremoveNotification"></a>*removeNotification(payment, list)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| list | Array |  |

##### Returns

Null - **

---

### <a name="ext-bb-authorization-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

---

### <a name="ext-bb-authorization-ngprocessPayments"></a>*processPayments(payments)*

Hook for processing payments list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array of Object | List of payments |

##### Returns

Array of Object - *Formatted list of payments.*

---

### <a name="ext-bb-authorization-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*
