# widget-bb-audit-query-ng


Version: **4.11.0**

Audit query

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-audit-query-ng
* vendor-bb-angular

---

## Table of Contents
- **ViewModel**<br/>    <a href="#ViewModel_init">#init()</a><br/>    <a href="#ViewModel_list">#list</a><br/>
- **AuditFiltersService**<br/>    <a href="#AuditFiltersService_buildCategoriesObject">#buildCategoriesObject(data)</a><br/>    <a href="#AuditFiltersService_getCategoryNames">#getCategoryNames(data)</a><br/>    <a href="#AuditFiltersService_getTypeNames">#getTypeNames(data, categoryName)</a><br/>    <a href="#AuditFiltersService_getStatusNames">#getStatusNames(data, categoryName, eventTypeName)</a><br/>    <a href="#AuditFiltersService_queryForAuditLogEventCategories">#queryForAuditLogEventCategories()</a><br/>
- **AuditQueryService**<br/>    <a href="#AuditQueryService_queryForAuditLogMessages">#queryForAuditLogMessages(state, currentPage)</a><br/>    <a href="#AuditQueryService_queryForAuditLogMessagesDownload">#queryForAuditLogMessagesDownload(state, headerParams)</a><br/>    <a href="#AuditQueryService_users">#users()</a><br/>    <a href="#AuditQueryService_downloadFile">#downloadFile(data, fileName)</a><br/>
- **AuditQueryController**<br/>    <a href="#AuditQueryController_$searchIntentHandler">#$searchIntentHandler(newParms)</a><br/>    <a href="#AuditQueryController_$onInit">#$onInit()</a><br/>
- **Hooks**<br/>    <a href="#Hooks_transformAuditMessage">#transformAuditMessage(auditMessage)</a><br/>    <a href="#Hooks_beforeQueryForAuditLogMessages">#beforeQueryForAuditLogMessages(current)</a><br/>    <a href="#Hooks_afterQueryForAuditLogMessagesSuccess">#afterQueryForAuditLogMessagesSuccess(current, auditMessages)</a><br/>    <a href="#Hooks_beforeQueryForCSV">#beforeQueryForCSV(current)</a><br/>    <a href="#Hooks_afterQueryForCSVSuccess">#afterQueryForCSVSuccess(current)</a><br/>    <a href="#Hooks_beforeGetCategories">#beforeGetCategories(current)</a><br/>    <a href="#Hooks_afterGetCategoriesSuccess">#afterGetCategoriesSuccess(current)</a><br/>    <a href="#Hooks_setState">#setState(current)</a><br/>    <a href="#Hooks_newQuery">#newQuery(current)</a><br/>
- **DownloadCsvService**<br/>    <a href="#DownloadCsvService_getFileNameFromContentDisposition">#getFileNameFromContentDisposition(disposition)</a><br/>
- **FormController**<br/>    <a href="#FormController_controlState">#controlState</a><br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>    <a href="#FormController_submitQuery">#submitQuery()</a><br/>
- **TableController**<br/>    <a href="#TableController_$onInit">#$onInit()</a><br/>    <a href="#TableController_editExistingQuery">#editExistingQuery()</a><br/>    <a href="#TableController_newQuery">#newQuery()</a><br/>    <a href="#TableController_submitQuery">#submitQuery(state, pagerParams)</a><br/>
- **widget-bb-audit-query-ng**<br/>    <a href="#widget-bb-audit-query-nguiError">uiError(modelError)</a><br/>    <a href="#widget-bb-audit-query-ngcreateInitialState">createInitialState()</a><br/>
- **List**<br/>    <a href="#List_beforeQueryForAuditLogMessages">#beforeQueryForAuditLogMessages(currentPage)</a><br/>    <a href="#List_afterQueryForAuditLogMessagesSuccess">#afterQueryForAuditLogMessagesSuccess(obj)</a><br/>    <a href="#List_afterQueryForAuditLogMessagesError">#afterQueryForAuditLogMessagesError(error)</a><br/>    <a href="#List_beforeQueryForCSV">#beforeQueryForCSV()</a><br/>    <a href="#List_afterQueryForCSVSuccess">#afterQueryForCSVSuccess()</a><br/>    <a href="#List_afterQueryForCSVError">#afterQueryForCSVError(error)</a><br/>    <a href="#List_newQuery">#newQuery(clear)</a><br/>    <a href="#List_beforeGetCategories">#beforeGetCategories()</a><br/>    <a href="#List_afterGetCategoriesSuccess">#afterGetCategoriesSuccess(obj)</a><br/>    <a href="#List_afterGetCategoriesError">#afterGetCategoriesError(error)</a><br/>
- **Type Definitions**<br/>    <a href="#ParsedEventCategories">ParsedEventCategories</a><br/>    <a href="#AuditMessage">AuditMessage</a><br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>

## Exports


## ViewModel


### <a name="ViewModel_init"></a>*#init()*

setup initial state
### <a name="ViewModel_list"></a>*#list*

expose list viewmodel

**Type:** *[List](#List)*


---

## AuditFiltersService


### <a name="AuditFiltersService_buildCategoriesObject"></a>*#buildCategoriesObject(data)*

Return a built up JS object of categories for easier traversing
  to display correct values in the filters

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [AuditEventCategoryResponse](data-bb-audit-query-http-ng.html#AuditEventCategoryResponse) | The raw data response of event categories |

##### Returns

[ParsedEventCategories](#ParsedEventCategories) - **

### <a name="AuditFiltersService_getCategoryNames"></a>*#getCategoryNames(data)*

Return an array of category names

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [ParsedEventCategories](#ParsedEventCategories) | the parse response data |

##### Returns

Array of String - **

### <a name="AuditFiltersService_getTypeNames"></a>*#getTypeNames(data, categoryName)*

Return an array of type names for a category

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [ParsedEventCategories](#ParsedEventCategories) | the parse response data |
| categoryName | String | the name of the category to filter on |

##### Returns

Array of String - **

### <a name="AuditFiltersService_getStatusNames"></a>*#getStatusNames(data, categoryName, eventTypeName)*

Return an array of statuses for a category type combination

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [ParsedEventCategories](#ParsedEventCategories) | the parse response data |
| categoryName | String | the name of the category to filter on |
| eventTypeName | String | the name of the event type to filter on |

##### Returns

Array of String - **

### <a name="AuditFiltersService_queryForAuditLogEventCategories"></a>*#queryForAuditLogEventCategories()*

Update the view with a list of event categories

##### Returns

Promise of [void](#void) - **

---

## AuditQueryService


### <a name="AuditQueryService_queryForAuditLogMessages"></a>*#queryForAuditLogMessages(state, currentPage)*

Update the view with an list of items loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current control state |
| currentPage | Number | Current bootstrap page - index starts at 1 |

##### Returns

Promise of [void](#void) - **

### <a name="AuditQueryService_queryForAuditLogMessagesDownload"></a>*#queryForAuditLogMessagesDownload(state, headerParams)*

Update the browser with a file to download

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current control state |
| headerParams | Object | Params sent in the header of the request |

##### Returns

Promise of [void](#void) - **

### <a name="AuditQueryService_users"></a>*#users()*

Get list of users (Currently always empty.)

##### Returns

Array of String - **

### <a name="AuditQueryService_downloadFile"></a>*#downloadFile(data, fileName)*

Download file on the user's machine

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | String | CSV result data |
| fileName | String | name of the file that will be downloaded |

---

## AuditQueryController


### <a name="AuditQueryController_$searchIntentHandler"></a>*#$searchIntentHandler(newParms)*

handler for 'intent.bus.audit.table.search'
- map newParams into state and trigger search

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newParms | Object |  |

##### Returns

[void](#void) - **

### <a name="AuditQueryController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[void](#void) - **

---

## pagerDefaults

Default values for the pager if not set on the widget

---

## csvExportDefaults

Default values for csv export

---

## Hooks


*Extends*: [Hooks](lib-bb-widget-extension-ng.html#Hooks)

### <a name="Hooks_transformAuditMessage"></a>*#transformAuditMessage(auditMessage)*

Perform any transformations required to prepare the AuditMessage item for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| auditMessage | [AuditMessage](model-bb-audit-query-ng.html#AuditMessage) |  |

##### Returns

Object - *transformed AuditMessage*

### <a name="Hooks_beforeQueryForAuditLogMessages"></a>*#beforeQueryForAuditLogMessages(current)*

Amend the view before loading the list of Audit Log Messages

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterQueryForAuditLogMessagesSuccess"></a>*#afterQueryForAuditLogMessagesSuccess(current, auditMessages)*

Amend the view after loading the list of Audit Log Message items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |
| auditMessages | Array of [AuditMessage](#AuditMessage) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforeQueryForCSV"></a>*#beforeQueryForCSV(current)*

Amend the view before downloading the CSV file

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterQueryForCSVSuccess"></a>*#afterQueryForCSVSuccess(current)*

Amend the view after downloading the CSV file

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforeGetCategories"></a>*#beforeGetCategories(current)*

Amend the view before getting the categories list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetCategoriesSuccess"></a>*#afterGetCategoriesSuccess(current)*

Amend the view after getting the categories successfully

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_setState"></a>*#setState(current)*

add any state required by extension

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_newQuery"></a>*#newQuery(current)*

Amend the view before showing a new query

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

---

## DownloadCsvService

The purpose of this module is to provide a method of downloading
a CSV file cross browser with content and a file name

The download file functionality for CSV export

### <a name="DownloadCsvService_getFileNameFromContentDisposition"></a>*#getFileNameFromContentDisposition(disposition)*

Return a freindly name from the disposition header

| Parameter | Type | Description |
| :-- | :-- | :-- |
| disposition | String | disposition string from the request header |

##### Returns

String - *the file name that should be used on the download file*

---

## FormController

### <a name="FormController_controlState"></a>*#controlState*

Local copy of the control state

**Type:** *Object*


### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[void](#void) - **

### <a name="FormController_submitQuery"></a>*#submitQuery()*

Update the state with control values and route to results table

##### Returns

[void](#void) - **

---

## TableController


### <a name="TableController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[void](#void) - **

### <a name="TableController_editExistingQuery"></a>*#editExistingQuery()*

return to query view form with previous settings

### <a name="TableController_newQuery"></a>*#newQuery()*

return to query view form with settings cleared

### <a name="TableController_submitQuery"></a>*#submitQuery(state, pagerParams)*

Submit query for getting current page

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | undefined |  |
| pagerParams | Object | The bootstrap params |
| pagerParams.currentPage | Number | Seelcted page number |

---

## errorMessages

Translation keys for error messages

---

### <a name="widget-bb-audit-query-nguiError"></a>*uiError(modelError)*

Creates an error object for template

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modelError | [ModelError](lib-bb-model-errors.html#ModelError) | Error object |

##### Returns

[{message: string}](#{message: string}) - **

---

### <a name="widget-bb-audit-query-ngcreateInitialState"></a>*createInitialState()*

return initial state object

##### Returns

[ViewState](#ViewState) - **

---

## List


### <a name="List_beforeQueryForAuditLogMessages"></a>*#beforeQueryForAuditLogMessages(currentPage)*

Amend the view to inform the user the query is being loaded

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentPage | Number | the current (bootstrap) page - index starts at 1 |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterQueryForAuditLogMessagesSuccess"></a>*#afterQueryForAuditLogMessagesSuccess(obj)*

Amend the view to display the list of items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| obj | Object |  |
| obj.auditMessages | Array of [AuditMessage](model-bb-audit-query-ng.html#AuditMessage) |  |
| obj.totalCount | Number |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterQueryForAuditLogMessagesError"></a>*#afterQueryForAuditLogMessagesError(error)*

Amend the view to display the error encountered when loading the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_beforeQueryForCSV"></a>*#beforeQueryForCSV()*

Amend the view to inform the user the query is being loaded

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterQueryForCSVSuccess"></a>*#afterQueryForCSVSuccess()*

Amend the view to state after CSV query was successfull

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterQueryForCSVError"></a>*#afterQueryForCSVError(error)*

Amend the view to state after CSV query was unsuccessfull

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_newQuery"></a>*#newQuery(clear)*

Update the view to show the query page

| Parameter | Type | Description |
| :-- | :-- | :-- |
| clear | Boolean | Clear the existing query criteria |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_beforeGetCategories"></a>*#beforeGetCategories()*

Amend the view to display the event categories filters

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterGetCategoriesSuccess"></a>*#afterGetCategoriesSuccess(obj)*

Amend the view to display the filters

| Parameter | Type | Description |
| :-- | :-- | :-- |
| obj | Object |  |
| obj.eventCategories | Array of [AuditMessage](model-bb-audit-query-ng.html#AuditMessage) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="List_afterGetCategoriesError"></a>*#afterGetCategoriesError(error)*

Amend the view to display the error encountered when loading the categories

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

## Type Definitions


### <a name="ParsedEventCategories"></a>*ParsedEventCategories*

Parsed event categories transformed from the original raw data
the object returned is a structured easy to read json set

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| category | Object | category object |
| category.type | Object | category types |
| category.type.status | Array of String | category type statuses |

### <a name="AuditMessage"></a>*AuditMessage*


*Extends*: [AuditMessage](data-bb-audit-query-http-ng.html#AuditMessage)

**Type:** *Object*


### <a name="HelperContext"></a>*HelperContext*


*Extends*: [HelperContext](lib-bb-extension-helpers-ng.html#HelperContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| auditQueryModel | [AuditQueryModel](model-bb-audit-query-ng.html#AuditQueryModel) |  |
| auditQueryService | [AuditQueryService](#AuditQueryService) |  |

### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| auditQueryModel | [AuditQueryModel](model-bb-audit-query-ng.html#AuditQueryModel) |  |
| auditQueryService | [AuditQueryService](#AuditQueryService) |  |

### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


---

## Templates

* *template.ng.html*

---
