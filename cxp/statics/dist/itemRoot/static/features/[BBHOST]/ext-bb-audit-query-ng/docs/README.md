# ext-bb-audit-query-ng


Version: **5.11.0**

Default extension for widget-bb-audit-query-ng

## Imports

* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-paginator-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular
* vendor-bb-angular-ng-aria
* vendor-bb-uib-datepicker
* vendor-bb-uib-datepicker-popup
* vendor-bb-uib-dropdown
* vendor-bb-uib-tooltip

---

## Table of Contents
- **Exports**<br/>    <a href="#helpers">helpers</a><br/>    <a href="#events">events</a><br/>
- **ext-bb-audit-query-ng**<br/>    <a href="#ext-bb-audit-query-ngclearAllControls">clearAllControls(controlState)</a><br/>
- **Helpers**<br/>    <a href="#Helpers_openStartDatepicker">#openStartDatepicker(controlState)</a><br/>    <a href="#Helpers_openEndDatepicker">#openEndDatepicker(controlState)</a><br/>    <a href="#Helpers_clearAll">#clearAll(controlState)</a><br/>    <a href="#Helpers_clearModelValues">#clearModelValues(values)</a><br/>    <a href="#Helpers_isAnyControlSet">#isAnyControlSet(controlState)</a><br/>    <a href="#Helpers_exportToCsv">#exportToCsv(controlState)</a><br/>    <a href="#Helpers_categories">#categories(state, controlState)</a><br/>    <a href="#Helpers_status">#status(state, controlState)</a><br/>    <a href="#Helpers_users">#users()</a><br/>    <a href="#Helpers_serviceAgreements">#serviceAgreements(viewState)</a><br/>    <a href="#Helpers_legalEntities">#legalEntities(viewState)</a><br/>    <a href="#Helpers_auditMessageTableHeader">#auditMessageTableHeader</a><br/>    <a href="#Helpers_auditMessageTableRow">#auditMessageTableRow(auditLog)</a><br/>    <a href="#Helpers_isTypeDisabled">#isTypeDisabled(controlState)</a><br/>    <a href="#Helpers_isStatusDisabled">#isStatusDisabled(controlState)</a><br/>    <a href="#Helpers_isLegalEntityDisabled">#isLegalEntityDisabled(controlState)</a><br/>    <a href="#Helpers_serviceAgreementChanged">#serviceAgreementChanged(controlState)</a><br/>    <a href="#Helpers_isExportToCsvDisabled">#isExportToCsvDisabled(viewState)</a><br/>    <a href="#Helpers_csvExportState">#csvExportState()</a><br/>    <a href="#Helpers_template">#template()</a><br/>    <a href="#Helpers_auditDetail">#auditDetail(message)</a><br/>    <a href="#Helpers_toggleAuditDetailModal">#toggleAuditDetailModal(state, message, index)</a><br/>    <a href="#Helpers_setNextAuditDetail">#setNextAuditDetail(state)</a><br/>    <a href="#Helpers_setPreviousAuditDetail">#setPreviousAuditDetail(state)</a><br/>    <a href="#Helpers_isDisabledPreviousAuditDetail">#isDisabledPreviousAuditDetail(state)</a><br/>    <a href="#Helpers_isDisabledNextAuditDetail">#isDisabledNextAuditDetail(state)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_transformAuditMessage">#transformAuditMessage(auditMessage)</a><br/>    <a href="#Hooks_setState">#setState(current)</a><br/>    <a href="#Hooks_newQuery">#newQuery(current, clear)</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#AuditMessage">AuditMessage</a><br/>

## Exports

### <a name="helpers"></a>*helpers*


**Type:** *[ExtensionHelpers](lib-bb-extension-helpers-ng.html#ExtensionHelpers)*

### <a name="events"></a>*events*


**Type:** *[ExtensionEvents](lib-bb-extension-events-ng.html#ExtensionEvents)*


---

## Events


---

### <a name="ext-bb-audit-query-ngclearAllControls"></a>*clearAllControls(controlState)*

clear all models in the controlState

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the controls |

##### Returns

[ViewState](#ViewState) - *The updated control state*

---

## Helpers


### <a name="Helpers_openStartDatepicker"></a>*#openStartDatepicker(controlState)*

update controller state to trigger opening the start-date datepicker

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

[void](#void) - **

### <a name="Helpers_openEndDatepicker"></a>*#openEndDatepicker(controlState)*

update controller state to trigger opening the end-date datepicker

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

[void](#void) - **

### <a name="Helpers_clearAll"></a>*#clearAll(controlState)*

update controller state to clear all models

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

[void](#void) - **

### <a name="Helpers_clearModelValues"></a>*#clearModelValues(values)*

clear the values in the models

| Parameter | Type | Description |
| :-- | :-- | :-- |
| values | Array of Object | the values whose models to clear |

##### Returns

[void](#void) - **

### <a name="Helpers_isAnyControlSet"></a>*#isAnyControlSet(controlState)*

return true if any control has a state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Boolean - **

### <a name="Helpers_exportToCsv"></a>*#exportToCsv(controlState)*

query for audit messages and download the CSV format file

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

[void](#void) - **

### <a name="Helpers_categories"></a>*#categories(state, controlState)*

get types

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [StateContainer](lib-bb-state-container-ng.html#StateContainer) |  |
| state.eventCategories | [ParsedEventCategories](model-bb-audit-filters-service-ng.html#ParsedEventCategories) |  |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Array of String - *types*

### <a name="Helpers_status"></a>*#status(state, controlState)*

get status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [StateContainer](lib-bb-state-container-ng.html#StateContainer) |  |
| state.eventCategories | [ParsedEventCategories](model-bb-audit-filters-service-ng.html#ParsedEventCategories) |  |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Array of String - *status*

### <a name="Helpers_users"></a>*#users()*

get users

##### Returns

Array of [{name](#{name), [value}](#value}) - *users*

### <a name="Helpers_serviceAgreements"></a>*#serviceAgreements(viewState)*

get serviceAgreements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| viewState | [ViewState](#ViewState) | the current view state |
| viewState.serviceAgreements | Array | list of service agreements |

##### Returns

Array of [{name](#{name), [value}](#value}) - *serviceAgreements*

### <a name="Helpers_legalEntities"></a>*#legalEntities(viewState)*

get legalEntities

| Parameter | Type | Description |
| :-- | :-- | :-- |
| viewState | [ViewState](#ViewState) | the current view state |
| viewState.serviceAgreements | Array | list of service agreements |

##### Returns

Array of [{name](#{name), [value}](#value}) - *legalEntities*
### <a name="Helpers_auditMessageTableHeader"></a>*#auditMessageTableHeader*

list of header label translation keys for audit log table

**Type:** *Array of String*


### <a name="Helpers_auditMessageTableRow"></a>*#auditMessageTableRow(auditLog)*

get list of message values for audit log table

| Parameter | Type | Description |
| :-- | :-- | :-- |
| auditLog | Object | The audit log message for the current row in the table |

##### Returns

Array of String - **

### <a name="Helpers_isTypeDisabled"></a>*#isTypeDisabled(controlState)*

return true if type dropdown should be disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Boolean - **

### <a name="Helpers_isStatusDisabled"></a>*#isStatusDisabled(controlState)*

return true if status dropdown should be disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Boolean - **

### <a name="Helpers_isLegalEntityDisabled"></a>*#isLegalEntityDisabled(controlState)*

return true if legal entity dropdown should be disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Boolean - **

### <a name="Helpers_serviceAgreementChanged"></a>*#serviceAgreementChanged(controlState)*

clear dependent legal entity dropdown when service agreement changes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| controlState | [ViewState](#ViewState) | The current cloned state of the view model |

##### Returns

Boolean - **

### <a name="Helpers_isExportToCsvDisabled"></a>*#isExportToCsvDisabled(viewState)*

return whether the export to csv is disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| viewState | [ViewState](#ViewState) | the current view state |
| viewState.totalCount | Number | total amount of audit results |
| viewState.csvMaxSize | Number | max exportable CSV size |

##### Returns

Boolean - **

### <a name="Helpers_csvExportState"></a>*#csvExportState()*

returns i18n string depending on export to csv loading state

##### Returns

String - **

### <a name="Helpers_template"></a>*#template()*

returns a string of the template matching the current route

##### Returns

String - **

### <a name="Helpers_auditDetail"></a>*#auditDetail(message)*

get labels and values for event details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | Object | The audit log message for the current row in the table |

##### Returns

Array of Object - **

### <a name="Helpers_toggleAuditDetailModal"></a>*#toggleAuditDetailModal(state, message, index)*

toggle state of event details modal.
 Update state with current message and current index

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current state of the view model |
| message | Object | The audit log message for the current row in the table |
| index | Number | The index of the current message |

### <a name="Helpers_setNextAuditDetail"></a>*#setNextAuditDetail(state)*

set the next message details (if any) into state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current state of the view model |

### <a name="Helpers_setPreviousAuditDetail"></a>*#setPreviousAuditDetail(state)*

set the previous message details (if any) into state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current state of the view model |

### <a name="Helpers_isDisabledPreviousAuditDetail"></a>*#isDisabledPreviousAuditDetail(state)*

return true if no previous message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current state of the view model |

### <a name="Helpers_isDisabledNextAuditDetail"></a>*#isDisabledNextAuditDetail(state)*

return true if no next message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) | The current state of the view model |

---

## Hooks


### <a name="Hooks_transformAuditMessage"></a>*#transformAuditMessage(auditMessage)*

Perform any transformations required to prepare the AuditMessage item for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| auditMessage | [AuditMessage](model-bb-audit-query-ng.html#AuditMessage) |  |

##### Returns

Object - *transformed message*

### <a name="Hooks_setState"></a>*#setState(current)*

add any state required by extension

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_newQuery"></a>*#newQuery(current, clear)*

extension specific changes to state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |
| clear | Boolean | Option to clear the form values to initial state |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

## Type Definitions


### <a name="ViewState"></a>*ViewState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| auditMessages | Array of [AuditMessage](#AuditMessage) |  |
| auditMessageError | String (optional) | The most recent error from fetching a list of audit msgs |
| isLoading | [bool](#bool) |  |

### <a name="AuditMessage"></a>*AuditMessage*


**Type:** *Object*


---
