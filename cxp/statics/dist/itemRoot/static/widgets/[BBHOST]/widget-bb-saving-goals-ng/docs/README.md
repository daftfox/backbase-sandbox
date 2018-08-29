# widget-bb-saving-goals-ng


Version: **1.5.0**

Saving Goals

## Imports

* lib-bb-currency-ng
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-saving-goals-ng
* vendor-bb-angular

---

## Table of Contents
- **FormController**<br/>    <a href="#FormController_$onInit">#$onInit()</a><br/>    <a href="#FormController_$onDestroy">#$onDestroy()</a><br/>    <a href="#FormController_save">#save(value, thenReload)</a><br/>
- **ListController**<br/>    <a href="#ListController_$onInit">#$onInit()</a><br/>    <a href="#ListController_$onDestroy">#$onDestroy()</a><br/>    <a href="#ListController_create">#create()</a><br/>    <a href="#ListController_edit">#edit(goalId)</a><br/>    <a href="#ListController_deleteGoal">#deleteGoal(savingGoal, thenReload)</a><br/>
- **SavingGoalsService**<br/>    <a href="#SavingGoalsService_startList">#startList()</a><br/>    <a href="#SavingGoalsService_list">#list(requestParams)</a><br/>    <a href="#SavingGoalsService_startCreate">#startCreate()</a><br/>    <a href="#SavingGoalsService_startEdit">#startEdit(goalId)</a><br/>    <a href="#SavingGoalsService_create">#create(item)</a><br/>    <a href="#SavingGoalsService_edit">#edit(item)</a><br/>    <a href="#SavingGoalsService_deleteGoal">#deleteGoal(item)</a><br/>
- **Type Definitions**<br/>    <a href="#SavingGoalItem">SavingGoalItem</a><br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#ViewState">ViewState</a><br/>

---

## notificationLevels

enum with levels for ui notifications

---

## errorMessages

enum with standart model error message keys

---

## successMessages

enum with success messages keys

---

## Message

Widget messages enum

---

## FormController

Saving goals widget form controller

| Injector Key |
| :-- |
| *FormController* |


### <a name="FormController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise - *Promise which is resolved once contoller is initialized,
or rejected in case of errors*

### <a name="FormController_$onDestroy"></a>*#$onDestroy()*

AngularJS Lifecycle hook used to destroy the controller

### <a name="FormController_save"></a>*#save(value, thenReload)*

Controller method to handle new/edited item save
and to initiate state change via routing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Object | Object to be saved as a saving goal |
| thenReload | Boolean (optional) | Flag which defines if saving goals values should be reloaded from the server after create/update operation |

---

## ListController

Saving goals widget list controller

| Injector Key |
| :-- |
| *ListController* |


### <a name="ListController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise - *Promise which is resolved once contoller is initialized,
  or rejected in case of errors*

### <a name="ListController_$onDestroy"></a>*#$onDestroy()*

AngularJS Lifecycle hook used to destroy the controller

### <a name="ListController_create"></a>*#create()*

Internal navigation for getting to create form from the list of items

### <a name="ListController_edit"></a>*#edit(goalId)*

Internal navigation for getting to edit form from the list of items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| goalId | String | identifier of a saving goal to be changed |

### <a name="ListController_deleteGoal"></a>*#deleteGoal(savingGoal, thenReload)*

Controller method to handle deleting of an item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| savingGoal | Object | Object to be removed |
| thenReload | Boolean (optional) | Flag which defines if list should be reloaded from the server after delete operation (default true) |

---

## SavingGoalsService

The core functionality of the Saving goals widget

The purpose of this module is to provide the main structure of the
widget. Outlining the workflows, connecting the data from the
model to the view via the customizations provided by the extension.


### <a name="SavingGoalsService_startList"></a>*#startList()*

Prepare the view for listing the items

### <a name="SavingGoalsService_list"></a>*#list(requestParams)*

Update the view with an list of items loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestParams | Object | paremeters of the SavingGoalsModel.GET request to be passed to the model |

##### Returns

Promise - **

### <a name="SavingGoalsService_startCreate"></a>*#startCreate()*

Prepare the view for creating a new saving goal item

### <a name="SavingGoalsService_startEdit"></a>*#startEdit(goalId)*

Prepare the view for editing a saving goal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| goalId | String | saving goal item id to be modified |

### <a name="SavingGoalsService_create"></a>*#create(item)*

Creates a new saving goal item and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [SavingGoalItem](model-bb-saving-goals-ng.html#SavingGoalItem) | set of data for a new saving goal to be created |

##### Returns

Promise - **

### <a name="SavingGoalsService_edit"></a>*#edit(item)*

Updates saving goal item and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [SavingGoalItem](model-bb-saving-goals-ng.html#SavingGoalItem) | saving goal item to be modified |

##### Returns

Promise - **

### <a name="SavingGoalsService_deleteGoal"></a>*#deleteGoal(item)*

Removes saving goal and triggers view update after it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | [SavingGoalItem](model-bb-saving-goals-ng.html#SavingGoalItem) | saving goal item to be deleted |

##### Returns

Promise - **

## Type Definitions


### <a name="SavingGoalItem"></a>*SavingGoalItem*


*Extends*: [SavingGoalItem](model-bb-saving-goals-ng.html#SavingGoalItem)

**Type:** *Object*


### <a name="HelperContext"></a>*HelperContext*


*Extends*: [HelperContext](lib-bb-extension-helpers-ng.html#HelperContext)

**Type:** *Object*


### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| SavingGoalsService | [SavingGoalsService](#SavingGoalsService) |  |

### <a name="ViewState"></a>*ViewState*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| isLoading | Boolean |  |
| savingGoals | Array of [SavingGoalItem](#SavingGoalItem) |  |
| route | Object |  |
| form | Object |  |
| notifications | Array of Object |  |

---

## Templates

* *template.ng.html*

---
