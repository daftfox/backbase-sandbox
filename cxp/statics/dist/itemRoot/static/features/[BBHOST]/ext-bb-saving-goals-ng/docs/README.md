# ext-bb-saving-goals-ng


Version: **2.6.0**


## Imports

* ui-bb-currency-input-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-progressbar

---

## Table of Contents
- **Exports**<br/>    <a href="#intents">intents</a><br/>    <a href="#helpers">helpers</a><br/>    <a href="#events">events</a><br/>
- **ext-bb-saving-goals-ng**<br/>    <a href="#ext-bb-saving-goals-nggetNotifications">getNotifications()</a><br/>    <a href="#ext-bb-saving-goals-ngupdateNotifications">updateNotifications(notifications)</a><br/>    <a href="#ext-bb-saving-goals-ngsavingGoalsSchema">savingGoalsSchema()</a><br/>    <a href="#ext-bb-saving-goals-nghandleExtensionError">handleExtensionError(err)</a><br/>    <a href="#ext-bb-saving-goals-ngcreateModelHandlers">createModelHandlers(schema)</a><br/>    <a href="#ext-bb-saving-goals-ngid">id(formObj)</a><br/>    <a href="#ext-bb-saving-goals-nggoalName">goalName(formObj)</a><br/>    <a href="#ext-bb-saving-goals-nggoalAmount">goalAmount(formObj)</a><br/>    <a href="#ext-bb-saving-goals-nginitEditingForm">initEditingForm()</a><br/>    <a href="#ext-bb-saving-goals-ngcancelConfirmation">cancelConfirmation()</a><br/>    <a href="#ext-bb-saving-goals-ngisFormActive">isFormActive(value)</a><br/>    <a href="#ext-bb-saving-goals-nghandleChanging">handleChanging(changeMethod, item)</a><br/>    <a href="#ext-bb-saving-goals-nghandleSaving">handleSaving(saveMethod, formObj)</a><br/>    <a href="#ext-bb-saving-goals-ngstartDelete">startDelete(method, item)</a><br/>    <a href="#ext-bb-saving-goals-nghandleDelete">handleDelete()</a><br/>    <a href="#ext-bb-saving-goals-ngformToModelFields">formToModelFields(form)</a><br/>    <a href="#ext-bb-saving-goals-ngisConfirmationActive">isConfirmationActive(value)</a><br/>    <a href="#ext-bb-saving-goals-ngselectedGoal">selectedGoal()</a><br/>    <a href="#ext-bb-saving-goals-ngisDeleteConfirmationActive">isDeleteConfirmationActive(value)</a><br/>    <a href="#ext-bb-saving-goals-ngisFormDirty">isFormDirty(value)</a><br/>    <a href="#ext-bb-saving-goals-ngnotificationDismissTime">notificationDismissTime()</a><br/>    <a href="#ext-bb-saving-goals-ngshiftNotification">shiftNotification(notification, notificationsList)</a><br/>    <a href="#ext-bb-saving-goals-ngcancelEdit">cancelEdit(force)</a><br/>    <a href="#ext-bb-saving-goals-ngallowSave">allowSave(formObj)</a><br/>    <a href="#ext-bb-saving-goals-nggetSymbol">getSymbol(code)</a><br/>    <a href="#ext-bb-saving-goals-ngsavingGoalsEnabledForKind">savingGoalsEnabledForKind(kind)</a><br/>

## Exports

### <a name="intents"></a>*intents*


**Type:** *[ExtensionIntents](lib-bb-extension-intents-ng.html#ExtensionIntents)*

### <a name="helpers"></a>*helpers*


**Type:** *[ExtensionHelpers](lib-bb-extension-helpers-ng.html#ExtensionHelpers)*

### <a name="events"></a>*events*


**Type:** *[ExtensionEvents](lib-bb-extension-events-ng.html#ExtensionEvents)*


---

## Preferences

Set of extension specific properties constants which contains
pairs of key and default values where key is the property
name and the defaultValue is it's value by default

---

## NOTIFICATION_DISMISS_TIME

notifications timeout in seconds

---

## PRODUCT_KINDS_WITH_SAVING_GOALS

Which product kinds are allowed to have saving goals

---

## ErrorCodes

A set of constants which defines ui error codes
of the extension

---

## Events

Event subscribtions object for the extension

---

## Helpers

Helpers for the extension

---

### <a name="ext-bb-saving-goals-nggetNotifications"></a>*getNotifications()*

Selector for notifications from the widget state

---

### <a name="ext-bb-saving-goals-ngupdateNotifications"></a>*updateNotifications(notifications)*

Function to set notifications in the state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notifications | Object | notifications object |

---

### <a name="ext-bb-saving-goals-ngsavingGoalsSchema"></a>*savingGoalsSchema()*

State selector for saving goals schema

---

### <a name="ext-bb-saving-goals-nghandleExtensionError"></a>*handleExtensionError(err)*

Internal for extension UI errors handler

| Parameter | Type | Description |
| :-- | :-- | :-- |
| err | Error | error code to be transformed to the message |

---

### <a name="ext-bb-saving-goals-ngcreateModelHandlers"></a>*createModelHandlers(schema)*

Method to create a set of handlers for saving function
This method can be used to add extra fields

| Parameter | Type | Description |
| :-- | :-- | :-- |
| schema | Object | savingGoalsSchema to be used for validation if necessary |

##### Returns

Object - *set of handlers for form fields
to be transformed and passed to the model*

---

### <a name="ext-bb-saving-goals-ngid"></a>*id(formObj)*

Handler for id property of the model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

String - *id if it's defined*

---

### <a name="ext-bb-saving-goals-nggoalName"></a>*goalName(formObj)*

Handler for goalName property of the model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

String - *goal name*

---

### <a name="ext-bb-saving-goals-nggoalAmount"></a>*goalAmount(formObj)*

Handler for goal amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Object - *goalAmount object with an amount and currency
if currecy is not defined default one is used.*

---

### <a name="ext-bb-saving-goals-nginitEditingForm"></a>*initEditingForm()*

Sets initial step on form init

---

### <a name="ext-bb-saving-goals-ngcancelConfirmation"></a>*cancelConfirmation()*

Cancels confirmation dialog

---

### <a name="ext-bb-saving-goals-ngisFormActive"></a>*isFormActive(value)*

A setter for isFormActive, which is using router
to close the form

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, being used to define if we shall navigate to list |

##### Returns

Boolean - *true if form is active*

---

### <a name="ext-bb-saving-goals-nghandleChanging"></a>*handleChanging(changeMethod, item)*

Function to initiate create/edit action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| changeMethod | Function | function to be called |
| item | [any](#any) | to be passed to the saving function |

##### Returns

[any](#any) - *changing method result*

---

### <a name="ext-bb-saving-goals-nghandleSaving"></a>*handleSaving(saveMethod, formObj)*

Handler for saving an item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| saveMethod | Function | save method to be called |
| formObj | Object | an item to be transformed and saved |

##### Returns

[any](#any) - *saving method result*

---

### <a name="ext-bb-saving-goals-ngstartDelete"></a>*startDelete(method, item)*

Function that prepares everything for saving goal deletion
and triggers confirmation dialog

| Parameter | Type | Description |
| :-- | :-- | :-- |
| method | Function | function to be called if delete is confirmed |
| item | [any](#any) | to be passed to the delete function |

---

### <a name="ext-bb-saving-goals-nghandleDelete"></a>*handleDelete()*

Function to initiate delete action

##### Returns

[any](#any) - *delete method result*

---

### <a name="ext-bb-saving-goals-ngformToModelFields"></a>*formToModelFields(form)*

A function to process form object before it gets passed to the model.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | item to be transformed |

##### Returns

Object - *modelItem*

---

### <a name="ext-bb-saving-goals-ngisConfirmationActive"></a>*isConfirmationActive(value)*

A setter for the confirmation modal window state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, which will change confirmation modal apperance |

##### Returns

Boolean - *true if confirmation modal is active*

---

### <a name="ext-bb-saving-goals-ngselectedGoal"></a>*selectedGoal()*

A getter of the saving goal item selected to be deleted

##### Returns

Object - **

---

### <a name="ext-bb-saving-goals-ngisDeleteConfirmationActive"></a>*isDeleteConfirmationActive(value)*

A setter for the delete confirmation modal window state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, which will change delete confirmation modal apperance |

##### Returns

Boolean - *true if delete confirmation modal is active*

---

### <a name="ext-bb-saving-goals-ngisFormDirty"></a>*isFormDirty(value)*

A setter for form state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | new value of the state, being used to define if the form data has been changed |

##### Returns

Boolean - *true if form is changed*

---

### <a name="ext-bb-saving-goals-ngnotificationDismissTime"></a>*notificationDismissTime()*

Returns notifications dismissing time preference value

##### Returns

Number - *time to dismiss notification*

---

### <a name="ext-bb-saving-goals-ngshiftNotification"></a>*shiftNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

---

### <a name="ext-bb-saving-goals-ngcancelEdit"></a>*cancelEdit(force)*

Cancels editing form

| Parameter | Type | Description |
| :-- | :-- | :-- |
| force | Boolean (optional) | If set to true, check if there were some changes will be skipped. Default false, which means that, in case there were some changes, another dialog with cancel confirmation will appear |

---

### <a name="ext-bb-saving-goals-ngallowSave"></a>*allowSave(formObj)*

Checks if the form is ready (valid) for save

| Parameter | Type | Description |
| :-- | :-- | :-- |
| formObj | Object | form state object |

##### Returns

Boolean - **

---

### <a name="ext-bb-saving-goals-nggetSymbol"></a>*getSymbol(code)*

Converts currency code into currency symbol

| Parameter | Type | Description |
| :-- | :-- | :-- |
| code | String |  |

##### Returns

String - **

---

### <a name="ext-bb-saving-goals-ngsavingGoalsEnabledForKind"></a>*savingGoalsEnabledForKind(kind)*

Checks if saving goals are enabled for a specific product kind

| Parameter | Type | Description |
| :-- | :-- | :-- |
| kind | String |  |

##### Returns

Boolean - **
