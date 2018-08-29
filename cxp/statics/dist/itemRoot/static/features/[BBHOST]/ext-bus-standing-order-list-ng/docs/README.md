# ext-bus-standing-order-list-ng


Version: **1.3.140**

Standing order overview extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-payment-order-details-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-standing-order-list-ng</value>
</property>
```

## Table of Contents
- **ext-bus-standing-order-list-ng**<br/>    <a href="#ext-bus-standing-order-list-nggetStatusLabel">getStatusLabel(status, type)</a><br/>    <a href="#ext-bus-standing-order-list-ngcanAuthorize">canAuthorize(payment)</a><br/>    <a href="#ext-bus-standing-order-list-ngcanDelete">canDelete(payment)</a><br/>    <a href="#ext-bus-standing-order-list-ngfilterPayments">filterPayments(payments)</a><br/>    <a href="#ext-bus-standing-order-list-ngfilterPaymentsDeleteByIds">filterPaymentsDeleteByIds(payments)</a><br/>    <a href="#ext-bus-standing-order-list-ngisSelected">isSelected(id, selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngisAnySelected">isAnySelected(selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngisAnySelectedDelete">isAnySelectedDelete(selState)</a><br/>    <a href="#ext-bus-standing-order-list-nghowManySelected">howManySelected(selState)</a><br/>    <a href="#ext-bus-standing-order-list-nghowManySelectedDelete">howManySelectedDelete(selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngisSelectedAll">isSelectedAll(payments, selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngisSelectedPart">isSelectedPart(payments, selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngtoggleAllPayments">toggleAllPayments(payments, selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngdeselectPayments">deselectPayments(selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngtoggleSelection">toggleSelection(id, selState)</a><br/>    <a href="#ext-bus-standing-order-list-ngtoggleDetails">toggleDetails(toggler, id, event)</a><br/>    <a href="#ext-bus-standing-order-list-ngremoveNotification">removeNotification(payment, list)</a><br/>    <a href="#ext-bus-standing-order-list-ngdisabledDelete">disabledDelete(payment)</a><br/>    <a href="#ext-bus-standing-order-list-ngdetailsTemplate">detailsTemplate</a><br/>    <a href="#ext-bus-standing-order-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-standing-order-list-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bus-standing-order-list-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>

---

### <a name="ext-bus-standing-order-list-nggetStatusLabel"></a>*getStatusLabel(status, type)*

Helper to get status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |
| type | String | of status label (small, large) |

##### Returns

String - *Translation key for status label*

---

### <a name="ext-bus-standing-order-list-ngcanAuthorize"></a>*canAuthorize(payment)*

Helper to check if the payment status envisages
authorization

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |

---

### <a name="ext-bus-standing-order-list-ngcanDelete"></a>*canDelete(payment)*

Helper to check if the payment status envisages
deletion

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |

---

### <a name="ext-bus-standing-order-list-ngfilterPayments"></a>*filterPayments(payments)*

Helper to filter out authorized payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |

---

### <a name="ext-bus-standing-order-list-ngfilterPaymentsDeleteByIds"></a>*filterPaymentsDeleteByIds(payments)*

Helper to filter out payments that can be deleted

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |

---

### <a name="ext-bus-standing-order-list-ngisSelected"></a>*isSelected(id, selState)*

Helper to know if the payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngisAnySelected"></a>*isAnySelected(selState)*

Helper to know if any payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngisAnySelectedDelete"></a>*isAnySelectedDelete(selState)*

Helper to know if selected payments could be deleted.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-nghowManySelected"></a>*howManySelected(selState)*

Helper to know how many payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-nghowManySelectedDelete"></a>*howManySelectedDelete(selState)*

Helper to know how many payments are selected
which could be deleted.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngisSelectedAll"></a>*isSelectedAll(payments, selState)*

Helper to know if ALL payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngisSelectedPart"></a>*isSelectedPart(payments, selState)*

Helper to know if at least one payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngtoggleAllPayments"></a>*toggleAllPayments(payments, selState)*

Helper to select/deselect all payments loaded.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-standing-order-list-ngdeselectPayments"></a>*deselectPayments(selState)*

Helper to deselect all payments selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-standing-order-list-ngtoggleSelection"></a>*toggleSelection(id, selState)*

Helper to select/deselect single payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-standing-order-list-ngtoggleDetails"></a>*toggleDetails(toggler, id, event)*

Show/hide (toggle) payment details row

| Parameter | Type | Description |
| :-- | :-- | :-- |
| toggler | String or Null |  |
| id | String | row identification |
| event | Object | click object |

---

### <a name="ext-bus-standing-order-list-ngremoveNotification"></a>*removeNotification(payment, list)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| list | Array |  |

##### Returns

Null - **

---

### <a name="ext-bus-standing-order-list-ngdisabledDelete"></a>*disabledDelete(payment)*

Helper to know if delete action is disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |

##### Returns

Boolean - **

---
### <a name="ext-bus-standing-order-list-ngdetailsTemplate"></a>*detailsTemplate*

Custom template to be used to show order details

**Type:** *String*


---

### <a name="ext-bus-standing-order-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-standing-order-list-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

---

### <a name="ext-bus-standing-order-list-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **
