# lib-bb-extension-events-ng


Version: **1.0.44**

Allows extensions to define 'events' (see
[lib-bb-event-bus-ng](lib-bb-event-bus-ng.html#lib-bb-event-bus-ng)) to subscribe to.

Event subscriptions are created from the exported `events` of the extension module.

Events can either be exported as an object, or a function which returns an
[EventHandlers](#EventHandlers) object.

If the `events` is a function it will receive an [EventContext](#EventContext) object.

The object returned should be a map of event name to callback (see example below).

To subscribe to native mobile events, you can use the [withNativeEvents](#withNativeEvents) helper to
create your [EventHandlers](#EventHandlers).

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-intents-ng
* lib-bb-notifications-ng
* lib-bb-state-container-ng
* lib-bb-view-model-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
// My "TODO" widget extension:
export const events = ({ notifications, $filter }) => ({
  // subscribes to 'model-bb-todo.load-list.failed' event
  'model-bb-todo.load-list.failed': () => {
    notifications.notifyAlert($filter('i18n')('notification.load-list.failed'));
  },
});
```

## Table of Contents
- **Exports**<br/>    <a href="#extensionEventsContextKey">extensionEventsContextKey</a><br/>
- **Type Definitions**<br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#withNativeEvents">withNativeEvents(nativeEvents, busEvents)</a><br/>    <a href="#EventHandlers">EventHandlers</a><br/>    <a href="#EventHandlersFactory">EventHandlersFactory(context)</a><br/>    <a href="#ExtensionEvents">ExtensionEvents</a><br/>

## Exports

### <a name="extensionEventsContextKey"></a>*extensionEventsContextKey*

The injector key to be used to provide an alternative context to the extension module's events

**Type:** *String*


## Example

```javascript
// "TODO" Widget index.js

import bbExtensionEventsModuleKey, {
  extensionEventsContextKey,
} from 'lib-bb-extension-events-ng';

import todoModelModuleKey, { modelTodoKey } from 'model-bb-todo-ng';

// Add TODO `model` to the `context` provided to the extension `events` key
export default angular.module(..., [
  ...,
  extensionEventsContextKey,
  todoModelModuleKey,
])
.factory(extensionEventsContextKey, [
  modelTodoKey,
  (model) => ({
    model,
  }),
])
```

## Type Definitions


### <a name="EventContext"></a>*EventContext*

The default context passed to the `events` function of the extension. This context can be
extended by individual widgets, so consult the widget docs for additional context properties.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| $filter | Object | Angular's $filter service. See [https://docs.angularjs.org/api/ng/service/$filter](https://docs.angularjs.org/api/ng/service/$filter) |
| widget | [BBWidget](lib-bb-widget.html#BBWidget) | The widget instance |
| notifications | [Notifications](lib-bb-notifications-ng.html#Notifications) | The notifications service |
| publish | [publish](lib-bb-event-bus-ng.html#publish) | The publish function of the event bus |
| intents | Object | The extension intents object created by [](lib-bb-extension-intents-ng.html#) |
| viewModel | [StateContainer](lib-bb-state-container.html#StateContainer) | View model state container created by [](lib-bb-view-model-ng.html#) (deprecated since Building Blocks 2.6.0) |
| stateContainer | [StateContainer](lib-bb-state-container.html#StateContainer) | Widget state container created by [](lib-bb-state-container-ng.html#) |
| withNativeEvents | [withNativeEvents](#withNativeEvents) | Use this function to include native events in the exported events. See [withNativeEvents](#withNativeEvents) |


### <a name="withNativeEvents"></a>*withNativeEvents(nativeEvents, busEvents)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| nativeEvents | [EventHandlers](#EventHandlers) | The native event handlers |
| busEvents | [EventHandlers](#EventHandlers) | The event-bus event handlers |

##### Returns

[EventHandlers](#EventHandlers) - *The event defintion for the extension, including native events*

## Example

```javascript
// "TODO" Widget index.js
export const events = ({ intents, viewModel, withNativeEvents })
  => withNativeEvents(
      {
        'bb.action.contact.edit': () => {
          intents.editContact({
            id: viewModel.getState().contact.data.id,
          });
        },
      },
      {
        // normal bus events here...
      }
  );
```

### <a name="EventHandlers"></a>*EventHandlers*

Object hash of 'event-name': subscription

**Type:** *Object of [Subscription](lib-bb-event-bus-ng.html#Subscription)*



### <a name="EventHandlersFactory"></a>*EventHandlersFactory(context)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | [EventContext](#EventContext) |  |

##### Returns

[EventHandlers](#EventHandlers) - **

### <a name="ExtensionEvents"></a>*ExtensionEvents*


**Type:** *[EventHandlers](#EventHandlers) or [EventHandlersFactory](#EventHandlersFactory)*


---
