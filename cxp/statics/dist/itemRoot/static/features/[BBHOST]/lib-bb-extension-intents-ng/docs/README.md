# lib-bb-extension-intents-ng


Version: **1.0.44**

Allows extensions to define 'intents' (see
[lib-bb-intent-ng](lib-bb-intent-ng.html#lib-bb-intent-ng)). Also allows a
function to be called when the widget is initialised (and no intent has been requested).

Intents are created from the exported `intents` of the extension module.

Intents can either be exported as an object, or a function which returns an object.

If the `intents` is a function it will receive an [IntentContext](#IntentContext) object.

As well as registering the intents, the intents will be added to the extension's scope
as `intents.<intentName>`.

## Imports

* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-view-model-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
// My "TODO" widget extension:
export const intents = ({
  createRequest,
  handleResponse,
  handleRequest,
  stateContainer,
}) => ({
  // Define a simple incoming intent.
  viewList: handleRequest('todo.list', stateContainer.createAction(state => ({
    ...state,
    page: 'list',
  }))),

  // Define an intent to be handled in an external widget (and not return)
  userProfile: createRequest('user.profile.view'),

  // Use handleResponse helper to define an intent that will route somewhere else to handle
  // it, and once handled will call the helper with the payload response.
  selectPriority: handleResponse('priority.select', stateContainer.createAction(
    (state, { priority }) => ({
      ...state,
      page: 'form',
      todo: {
        priority,
      },
    })
  )),
});

// My "TODO" Widget template:
<button ng-click="intents.viewList()">List</button>
<button ng-click="intents.userProfile(state.profileId);">View Profile</button>
```

## Table of Contents
- **Exports**<br/>    <a href="#extensionIntentsKey">extensionIntentsKey</a><br/>    <a href="#extensionIntentsContextKey">extensionIntentsContextKey</a><br/>
- **Type Definitions**<br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#ResponseHelper">ResponseHelper(intent, handler)</a><br/>    <a href="#RequestHandlerHelper">RequestHandlerHelper(intent, handler)</a><br/>    <a href="#RequestHelper">RequestHelper(intent)</a><br/>    <a href="#IntentDefinition">IntentDefinition</a><br/>    <a href="#IntentDefinitions">IntentDefinitions</a><br/>    <a href="#IntentDefinitionsFactory">IntentDefinitionsFactory(context)</a><br/>    <a href="#ExtensionIntents">ExtensionIntents</a><br/>

## Exports

### <a name="extensionIntentsKey"></a>*extensionIntentsKey*

The injector key to be used to access the extension intents

**Type:** *String*

### <a name="extensionIntentsContextKey"></a>*extensionIntentsContextKey*

The injector key to be used to provide an alternative context to the extension module's intents

**Type:** *String*


## Example

```javascript
// "TODO" Widget index.js

import bbExtensionIntentsModuleKey, {
  extensionIntentsContextKey,
} from 'lib-bb-extension-intents-ng';

import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';

// Add TODO `model` to the `context` provided to the extension `intents` key
export default angular.module(..., [
  ...,
  extensionIntentsContextKey,
  todoModelModuleKey,
])
.factory(extensionIntentsContextKey, [
  modelTodoKey,
  (model) => ({
    model,
  }),
])
```

## Type Definitions


### <a name="IntentContext"></a>*IntentContext*

The default context passed to the `intents` function of the extension. This context can be
extended by individual widgets, so consult the widget docs for additional context properties.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| widget | [BBWidget](lib-bb-widget.html#BBWidget) | The widget instance |
| viewModel | [StateContainer](lib-bb-state-container.html#StateContainer) | View model state container (deprecated since Building Blocks 2.6.0) |
| stateContainer | [StateContainer](lib-bb-state-container.html#StateContainer) | Widget's state container |
| handleResponse | [ResponseHelper](#ResponseHelper) | Helper function to create intent request/response |
| handleRequest | [RequestHandlerHelper](#RequestHandlerHelper) | Helper function to create intent request handlers |
| createRequest | [RequestHelper](#RequestHelper) | Helper function to create an intent request |


### <a name="ResponseHelper"></a>*ResponseHelper(intent, handler)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| intent | String | The string identifying the user intent |
| handler | Function | The handler that will be called when the intent response is resolved |

##### Returns

[IntentDefinition](#IntentDefinition) - **


### <a name="RequestHandlerHelper"></a>*RequestHandlerHelper(intent, handler)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| intent | String | The string identifying the user intent |
| handler | Function | The handler that will be called when the intent is triggered |

##### Returns

[IntentDefinition](#IntentDefinition) - **


### <a name="RequestHelper"></a>*RequestHelper(intent)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| intent | String | The string identifying the intent to fire |

##### Returns

[IntentDefinition](#IntentDefinition) - **

### <a name="IntentDefinition"></a>*IntentDefinition*


**Type:** *Object*


### <a name="IntentDefinitions"></a>*IntentDefinitions*

Intents that can be fired and/or handled by the extension.

**Type:** *Object of [IntentDefinition](#IntentDefinition)*



### <a name="IntentDefinitionsFactory"></a>*IntentDefinitionsFactory(context)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | [IntentContext](#IntentContext) |  |

##### Returns

[IntentDefinitions](#IntentDefinitions) - **

### <a name="ExtensionIntents"></a>*ExtensionIntents*

The keys from the definitions will be made available as functions on the view scope as `intents`.

**Type:** *[IntentDefinitions](#IntentDefinitions) or [IntentDefinitionsFactory](#IntentDefinitionsFactory)*


---
