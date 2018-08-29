# ext-bus-batch-upload-ng


Version: **2.3.0**

Extension for batch upload.

## Imports

* ui-bb-confirm-ng
* ui-bb-file-size-ng
* ui-bb-i18n-ng
* ui-bb-notification-stripe-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- batch upload widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-batch-upload-ng</value>
</property>
```

## Table of Contents
- **ext-bus-batch-upload-ng**<br/>    <a href="#ext-bus-batch-upload-ngisUploadAvailable">isUploadAvailable(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-ngisContinueEnabled">isContinueEnabled(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-ngisChangeUnavailable">isChangeUnavailable(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-nggetQueueStatus">getQueueStatus(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-nggetUploadedFilesStatus">getUploadedFilesStatus(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-nggetUploadFilesFailedStatus">getUploadFilesFailedStatus(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-nggetContinueButtonLabel">getContinueButtonLabel(ctrl)</a><br/>    <a href="#ext-bus-batch-upload-nguploadOptions">uploadOptions</a><br/>    <a href="#ext-bus-batch-upload-nghandleChangesLinkClick">handleChangesLinkClick(ext, ctrl)</a><br/>

---

### <a name="ext-bus-batch-upload-ngisUploadAvailable"></a>*isUploadAvailable(ctrl)*

Check if batch upload is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-upload-ngisContinueEnabled"></a>*isContinueEnabled(ctrl)*

Check if user can proceed after uploading files

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-upload-ngisChangeUnavailable"></a>*isChangeUnavailable(ctrl)*

Check if user can change the type of batch upload

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

Boolean - **

---

### <a name="ext-bus-batch-upload-nggetQueueStatus"></a>*getQueueStatus(ctrl)*

Helper to get queue status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

String - *Queue status string*

---

### <a name="ext-bus-batch-upload-nggetUploadedFilesStatus"></a>*getUploadedFilesStatus(ctrl)*

Helper to get label for uploaded files

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

String - *Uploaded files status string*

---

### <a name="ext-bus-batch-upload-nggetUploadFilesFailedStatus"></a>*getUploadFilesFailedStatus(ctrl)*

Helper to get label for failed upload files

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

String - *Upload failed files status string*

---

### <a name="ext-bus-batch-upload-nggetContinueButtonLabel"></a>*getContinueButtonLabel(ctrl)*

Helper to get label for continue button

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | object |

##### Returns

String - *Continue button label string*

---
### <a name="ext-bus-batch-upload-nguploadOptions"></a>*uploadOptions*

List of upload options

**Type:** *Array*


---

### <a name="ext-bus-batch-upload-nghandleChangesLinkClick"></a>*handleChangesLinkClick(ext, ctrl)*

Shows selectType page or opens confirmation modal for
files list depending on number of uploaded files.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | Extension scope object |
| ctrl | Object | Widget controller |
