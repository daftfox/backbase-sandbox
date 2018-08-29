# lib-bb-event-bus-ng


Version: **1.1.77**

Event bus module, angular wrapper around CXP's gadgets.pubsub.

## Imports

* lib-bb-event-bus
* vendor-bb-angular

---

## Example

```javascript
import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

angular.module('MyModule', [bbEventBusModuleKey])
  .controller('Controller1', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.publish('example.event', { msg: 'Hello' });
    },
  })])
  .controller('Controller2', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.subscribe('example.event', ({ msg }) => {
        console.log(`Controller 1 says ${msg}`);
      });
    },
  })])
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#eventBusKey">eventBusKey</a><br/>
- **EventBusProvider**<br/>    <a href="#EventBusProvider_setWidget">#setWidget(portalWidget)</a><br/>    <a href="#EventBusProvider_$get">#$get()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="eventBusKey"></a>*eventBusKey*

Injector name of [EventBus](#EventBus) instance

**Type:** *String*


---

## EventBusProvider


### <a name="EventBusProvider_setWidget"></a>*#setWidget(portalWidget)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| portalWidget | Object | portal client widget instance (a.k.a __WIDGET__) |

##### Returns

[void](#void) - **

### <a name="EventBusProvider_$get"></a>*#$get()*


##### Returns

[EventBus](#EventBus) - *An [EventBus](#EventBus) service*
