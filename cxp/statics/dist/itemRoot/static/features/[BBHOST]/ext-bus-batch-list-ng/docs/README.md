# ext-bus-batch-list-ng


Version: **2.3.0**

Default extension for batch list.

## Imports

* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bus-batch-list-ng**<br/>    <a href="#ext-bus-batch-list-ngisSelected">isSelected(id, selState)</a><br/>    <a href="#ext-bus-batch-list-ngisAnySelected">isAnySelected(selState)</a><br/>    <a href="#ext-bus-batch-list-nghowManySelected">howManySelected(selState)</a><br/>    <a href="#ext-bus-batch-list-ngisSelectedAll">isSelectedAll(batches, selState)</a><br/>    <a href="#ext-bus-batch-list-ngisSelectedPart">isSelectedPart(batches, selState)</a><br/>    <a href="#ext-bus-batch-list-ngtoggleAllBatches">toggleAllBatches(batches, selState)</a><br/>    <a href="#ext-bus-batch-list-ngdeselectBatches">deselectBatches(selState)</a><br/>    <a href="#ext-bus-batch-list-ngtoggleSelection">toggleSelection(id, selState)</a><br/>    <a href="#ext-bus-batch-list-ngcanAuthorize">canAuthorize(batch)</a><br/>    <a href="#ext-bus-batch-list-ngfilterBatches">filterBatches(batches)</a><br/>    <a href="#ext-bus-batch-list-nggetStatusLabel">getStatusLabel(status, type)</a><br/>    <a href="#ext-bus-batch-list-ngremoveNotification">removeNotification(notification, notificationsList)</a><br/>    <a href="#ext-bus-batch-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-batch-list-ngopenRejectConfirmDialog">openRejectConfirmDialog(ext, batchId)</a><br/>    <a href="#ext-bus-batch-list-ngprocessBatches">processBatches(contacts)</a><br/>    <a href="#ext-bus-batch-list-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>

---

### <a name="ext-bus-batch-list-ngisSelected"></a>*isSelected(id, selState)*

Helper to know if the batch is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-ngisAnySelected"></a>*isAnySelected(selState)*

Helper to know if any batch is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-nghowManySelected"></a>*howManySelected(selState)*

Helper to know how many payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-ngisSelectedAll"></a>*isSelectedAll(batches, selState)*

Helper to know if all bacthes are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batches | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-ngisSelectedPart"></a>*isSelectedPart(batches, selState)*

Helper to know if at least one batch is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batches | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-ngtoggleAllBatches"></a>*toggleAllBatches(batches, selState)*

Helper to select/deselect all batches loaded.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batches | Array |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-batch-list-ngdeselectBatches"></a>*deselectBatches(selState)*

Helper to deselect all batches selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-batch-list-ngtoggleSelection"></a>*toggleSelection(id, selState)*

Helper to select/deselect single batch.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| selState | Object |  |

##### Returns

Null - **

---

### <a name="ext-bus-batch-list-ngcanAuthorize"></a>*canAuthorize(batch)*

Helper to check if the batch status envisages
authorization

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batch | Object |  |

---

### <a name="ext-bus-batch-list-ngfilterBatches"></a>*filterBatches(batches)*

Helper to filter out authorized batches

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batches | Array |  |

---

### <a name="ext-bus-batch-list-nggetStatusLabel"></a>*getStatusLabel(status, type)*

Helper to get status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |
| type | String | of status label (small, large) |

##### Returns

String - *Translation key for status label*

---

### <a name="ext-bus-batch-list-ngremoveNotification"></a>*removeNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Null - **

---

### <a name="ext-bus-batch-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-list-ngopenRejectConfirmDialog"></a>*openRejectConfirmDialog(ext, batchId)*

Fixes in context currently selected batchId and opens reject confirmation dialog

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | Extension scope object |
| batchId | String | Id of the batch to reject |

---

### <a name="ext-bus-batch-list-ngprocessBatches"></a>*processBatches(contacts)*

Apply transformations to the batches collection to show in
the template

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array | Array of batches |

##### Returns

Array - *Returns transformed array of batches*

---

### <a name="ext-bus-batch-list-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*
