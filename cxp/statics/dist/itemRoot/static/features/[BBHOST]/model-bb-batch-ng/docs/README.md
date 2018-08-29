# model-bb-batch-ng


Version: **1.8.0**

Batches widget model.

## Imports

* data-bb-batches-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelModuleKey, {
  modelBatchKey,
} from 'model-bb-batch-ng';

angular.module('widget-bb-batch-ng', [
  modelModuleKey,
])
.controller('BatchController', [
  modelBatchKey,
  ...,
])
```

## Table of Contents
- **batchModel**<br/>    <a href="#batchModel_uploadBatchFile">#uploadBatchFile(legalEntityId, file)</a><br/>    <a href="#batchModel_getBatches">#getBatches(legalEntityId, requestParams)</a><br/>    <a href="#batchModel_getBatchesAuthorizations">#getBatchesAuthorizations(legalEntityId, requestParams)</a><br/>    <a href="#batchModel_authorizeBatch">#authorizeBatch(legalEntityId, batchId)</a><br/>    <a href="#batchModel_authorizeMultipleBatches">#authorizeMultipleBatches(legalEntityId, batchIds)</a><br/>    <a href="#batchModel_rejectBatch">#rejectBatch(legalEntityId, batchId)</a><br/>    <a href="#batchModel_rejectMultipleBatches">#rejectMultipleBatches(legalEntityId, batchIds)</a><br/>
- **Type Definitions**<br/>    <a href="#BatchesRequestParams">BatchesRequestParams</a><br/>

---

## batchModel


### <a name="batchModel_uploadBatchFile"></a>*#uploadBatchFile(legalEntityId, file)*

Uploads batch file.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file. |
| file | Object | Batch file data |

##### Returns

Promise of Object - *A Promise for batch file upload.*

### <a name="batchModel_getBatches"></a>*#getBatches(legalEntityId, requestParams)*

Gets a list of batches.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| requestParams | [BatchesRequestParams](#BatchesRequestParams) (optional) | Contains each parameter to build the request querystring |

##### Returns

Promise of Array - *A Promise for a collection of batches*

### <a name="batchModel_getBatchesAuthorizations"></a>*#getBatchesAuthorizations(legalEntityId, requestParams)*

Get a list of batches with pending authorization.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| requestParams | [BatchesRequestParams](#BatchesRequestParams) (optional) | Contains each parameter to build the request query string |

##### Returns

Promise of Array - *A Promise for a collection of pending authorization batches*

### <a name="batchModel_authorizeBatch"></a>*#authorizeBatch(legalEntityId, batchId)*

Authorizes a batch of payments.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| batchId | String | Id of the batch |

##### Returns

Promise - **

### <a name="batchModel_authorizeMultipleBatches"></a>*#authorizeMultipleBatches(legalEntityId, batchIds)*

Authorizes multiple batches at once.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| batchIds | Array | Collection of batch ids |

##### Returns

Promise - **

### <a name="batchModel_rejectBatch"></a>*#rejectBatch(legalEntityId, batchId)*

Rejects a batch of payments.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| batchId | String | Id of the batch |

##### Returns

Promise - **

### <a name="batchModel_rejectMultipleBatches"></a>*#rejectMultipleBatches(legalEntityId, batchIds)*

Rejects multiple batches at once.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String | Id of the legal entity for the batch file |
| batchIds | Array | Collection of batch ids |

##### Returns

Promise - **

## Type Definitions


### <a name="BatchesRequestParams"></a>*BatchesRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Key of the column to sort the returned list of batches |
| direction | String | Sort direction `ASC` or `DESC`. By default is `DESC` |

---
