# widget-bb-batch-upload-ng


Version: **1.5.0**

Batch upload.

## Imports

* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-ng
* model-bb-batch-ng
* vendor-bb-angular
* vendor-bb-ng-file-upload

---

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **BatchUploadController**<br/>    <a href="#BatchUploadController_state">#state</a><br/>    <a href="#BatchUploadController_config">#config</a><br/>    <a href="#BatchUploadController_addFiles">#addFiles(files, invalidFiles)</a><br/>    <a href="#BatchUploadController_clearStatus">#clearStatus()</a><br/>    <a href="#BatchUploadController_uploadFile">#uploadFile(file, supressError)</a><br/>    <a href="#BatchUploadController_isUploading">#isUploading()</a><br/>    <a href="#BatchUploadController_uploadFiles">#uploadFiles()</a><br/>    <a href="#BatchUploadController_removeFile">#removeFile(file)</a><br/>    <a href="#BatchUploadController_clearFiles">#clearFiles()</a><br/>    <a href="#BatchUploadController_finishUploadSession">#finishUploadSession()</a><br/>    <a href="#BatchUploadController_showSelectTypePage">#showSelectTypePage()</a><br/>
- **Type Definitions**<br/>    <a href="#Page">Page</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## BatchUploadController

Batch upload controller.

| Injector Key |
| :-- |
| *BatchUploadController* |

### <a name="BatchUploadController_state"></a>*#state*

Controller's state object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| status | Object | Controller's actions status |
| files | Array | An array of queued files |
| uploadedFilesNumber | Number | Number of successfully uploaded files |
| filedUploadFilesNumber | Number | Number of unsuccessfully uploaded files |
### <a name="BatchUploadController_config"></a>*#config*

Configuration of the component that will select files to upload.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| maxFileSize | String | The maximum file size allowed to upload. Represents a human readable string size like `1KB`, `2MB`, `3GB`, `4TB`. |

### <a name="BatchUploadController_addFiles"></a>*#addFiles(files, invalidFiles)*

Adds new files to the queue. Will set error status when invalid files added.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| files | Array | New valid files |
| invalidFiles | Array | Invalid files |

### <a name="BatchUploadController_clearStatus"></a>*#clearStatus()*

Clears controller status

### <a name="BatchUploadController_uploadFile"></a>*#uploadFile(file, supressError)*

Uploads a single file to the server

| Parameter | Type | Description |
| :-- | :-- | :-- |
| file | Object | The file object to upload |
| supressError | Boolean | Error status will not be set if parameter set to true |

##### Returns

Object - *An upload promise*

### <a name="BatchUploadController_isUploading"></a>*#isUploading()*

Indicates is any of the files in the queue are being uploaded at the moment

##### Returns

Boolean - *Returns true if there are active uploads, false otherwise.*

### <a name="BatchUploadController_uploadFiles"></a>*#uploadFiles()*

Process a collection files to be uploaded

##### Returns

Array - *An upload promise*

### <a name="BatchUploadController_removeFile"></a>*#removeFile(file)*

Removes a file from the upload queue.
Mutates the internal files collection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| file | Object | File to be removed |

### <a name="BatchUploadController_clearFiles"></a>*#clearFiles()*

Completely clears files upload queue

### <a name="BatchUploadController_finishUploadSession"></a>*#finishUploadSession()*

Finishes current upload session by clearing upload queue

### <a name="BatchUploadController_showSelectTypePage"></a>*#showSelectTypePage()*

Show select type page

## Type Definitions


### <a name="Page"></a>*Page*

Defines widget page enumeration

**Type:** *Object*


---

## Templates

* *template.ng.html*

---
