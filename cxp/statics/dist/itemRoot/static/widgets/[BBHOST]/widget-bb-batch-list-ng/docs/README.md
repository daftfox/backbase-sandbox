# widget-bb-batch-list-ng


Version: **1.8.0**

Batch list

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-batch-ng
* vendor-bb-angular

---

## Table of Contents
- **BatchListController**<br/>    <a href="#BatchListController_state">#state</a><br/>    <a href="#BatchListController_changePage">#changePage()</a><br/>    <a href="#BatchListController_loadMore">#loadMore(done)</a><br/>    <a href="#BatchListController_onSort">#onSort(orderBy, direction)</a><br/>    <a href="#BatchListController_$onInit">#$onInit()</a><br/>
- **widget-bb-batch-list-ng**<br/>    <a href="#widget-bb-batch-list-ngauthorize">authorize(batchId)</a><br/>    <a href="#widget-bb-batch-list-ngauthorizeMultiple">authorizeMultiple(selectedBatches)</a><br/>    <a href="#widget-bb-batch-list-ngreject">reject(batchId)</a><br/>    <a href="#widget-bb-batch-list-ngrejectMultiple">rejectMultiple(selectedBatches)</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_processBatches">#processBatches(batches)</a><br/>    <a href="#default-hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>

---

## Preference

Widget preferences enum

| Property | Type | Description |
| :-- | :-- | :-- |
| PAGE_SIZE | String | Number of items per page |
| MAX_NAV_PAGES | Number | Number of pagination items |
| PAGINATION_TYPE | String | Type of pagination (paginator, load-more) |
| SHOW_PENDING_AUTHORIZATIONS | Boolean | Show only pending authorization batches |

---

## Event

Widget events names

---

## BatchListController

Batch list controller

| Injector Key |
| :-- |
| *BatchListController* |

### <a name="BatchListController_state"></a>*#state*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| batches | Object |  |
| batches.items | Array | List of batches |
| batches.orderBy | String | Column key currently sorted |
| batches.direction | String | Sorting direction, `ASC` or `DESC` |
| batches.loading | Boolean | Indicates if it is loading batches |
| batches.error | Object | Store error while retrieving batches |

### <a name="BatchListController_changePage"></a>*#changePage()*

Change page of displayed batches.

##### Returns

Promise of [Batches](model-bb-batch-ng.html#Batches), [ModelError](model-bb-batch-ng.html#ModelError) - *A Promise with loaded batches*

### <a name="BatchListController_loadMore"></a>*#loadMore(done)*

Loads next page of items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to call when finished loading |

##### Returns

Promise - **

### <a name="BatchListController_onSort"></a>*#onSort(orderBy, direction)*

Loads sorted list of batches

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

### <a name="BatchListController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


---

### <a name="widget-bb-batch-list-ngauthorize"></a>*authorize(batchId)*

Request batch authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batchId | String | Id of the batch |

##### Returns

Promise - **

---

### <a name="widget-bb-batch-list-ngauthorizeMultiple"></a>*authorizeMultiple(selectedBatches)*

Request list of batches authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedBatches | Array | Collection of batches id |

##### Returns

Promise - **

---

### <a name="widget-bb-batch-list-ngreject"></a>*reject(batchId)*

Request batch rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batchId | String | Id of the batch |

##### Returns

Promise - **

---

### <a name="widget-bb-batch-list-ngrejectMultiple"></a>*rejectMultiple(selectedBatches)*

Request multiple bacthes rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selectedBatches | Array | Collection of batches id |

##### Returns

Promise - **

---

## default-hooks

Default hooks for widget-bb-batch-list-ng

### <a name="default-hooks_processBatches"></a>*#processBatches(batches)*

processBatches default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| batches | Object | Collection of batches |

##### Returns

Object - *batches*

### <a name="default-hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

## Templates

* *template.ng.html*

---
