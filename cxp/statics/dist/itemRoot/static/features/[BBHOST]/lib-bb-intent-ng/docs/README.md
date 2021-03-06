# lib-bb-intent-ng


Version: **1.1.43**

Provides API for inter and intra widget navigation.

## Imports

* lib-bb-event-bus-ng
* lib-bb-storage-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
import angular from 'vendor-bb-angular';
import intentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

angular.module('example-module', [intentModuleKey])
  .controller('MyController', [bbIntentKey, MyController]);

// MyController

export default (bbIntents) => {
  const someIntent = bbIntents.create('do.something');

  const doSomething = () => {
    someIntent({ pass: 'something' });
  };

  const $onInit = () => {
    bbIntents.handle('handle.some.intent', (passedData) => {
      // code for intent handling
    });
  };
};
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#bbIntentKey">bbIntentKey</a><br/>
- **BbIntent**<br/>    <a href="#BbIntent_persist">#persist(getStateToPersist, restorePersistedState)</a><br/>    <a href="#BbIntent_handle">#handle(name, requestHandler)</a><br/>    <a href="#BbIntent_create">#create(name, responseHandler)</a><br/>    <a href="#BbIntent_init">#init(notHandled)</a><br/>
- **BbIntentProvider**<br/>    <a href="#BbIntentProvider_setRoutes">#setRoutes(routes)</a><br/>    <a href="#BbIntentProvider_setNavigationAdapter">#setNavigationAdapter(adapter)</a><br/>    <a href="#BbIntentProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#RequestIntent">RequestIntent(parameters)</a><br/>    <a href="#GetState">GetState()</a><br/>    <a href="#RestoreState">RestoreState(state)</a><br/>    <a href="#NavigationAdapter">NavigationAdapter</a><br/>    <a href="#NavigationAdapter_CurrentLocator">NavigationAdapter#CurrentLocator()</a><br/>    <a href="#NavigationAdapter_ShouldNavigate">NavigationAdapter#ShouldNavigate(route)</a><br/>    <a href="#NavigationAdapter_Navigate">NavigationAdapter#Navigate(route)</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="bbIntentKey"></a>*bbIntentKey*

The dependency injection key for the BbIntent Service

**Type:** *String*


---

## BbIntent


### <a name="BbIntent_persist"></a>*#persist(getStateToPersist, restorePersistedState)*

Add a persist/restore handler

Used to retain additional information along with the intent that
is not part of the intent, but is only used by the current widget
to restore its own internal state.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| getStateToPersist | [GetState](#GetState) | A function that provides the state to persist |
| restorePersistedState | [RestoreState](#RestoreState) | A function to restore the persisted state |

##### Returns

[void](#void) - **

### <a name="BbIntent_handle"></a>*#handle(name, requestHandler)*

Set an intent handler for the given intent name.

The handler is registered so that (when initialized) the bbIntent instance can handle the
intent request from another widget.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | The name of the intent |
| requestHandler | Function | Callback to handle the intent |

##### Returns

[void](#void) - **

### <a name="BbIntent_create"></a>*#create(name, responseHandler)*

Create an intent that can later be triggered (as a request).

The (optional) handler is registered so that (when initialized) the bbIntent instance can
handle the response to the request.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | The name of the intent, used to determine the target widget &amp; handlers |
| responseHandler | Function (optional) | A callback to return the result of the handled intent |

##### Returns

[RequestIntent](#RequestIntent) - *A function to trigger the intent*

### <a name="BbIntent_init"></a>*#init(notHandled)*

Handle intents (requests or responses) from storage or (future) events.

Like the cxp.ready event, this method should only be called *once per widget*, after
all then intent handlers have been registered.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| notHandled | Function (optional) | Callback for when the intent (if there is one) is not handled by this widget |

##### Returns

Promise of [void](#void) - **

---

## BbIntentProvider

A provider that allows configuration of the intent routes and adapter.


| Injector Key |
| :-- |
| *lib-bb-intent-ng:intentProvider* |


### <a name="BbIntentProvider_setRoutes"></a>*#setRoutes(routes)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| routes | Object of String | A map of intent keys to routes |

### <a name="BbIntentProvider_setNavigationAdapter"></a>*#setNavigationAdapter(adapter)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| adapter | [NavigationAdapter](#NavigationAdapter) | A navigation adapter |

### <a name="BbIntentProvider_$get"></a>*#$get()*


##### Returns

[BbIntent](#BbIntent) - *Intent service*

## Example

```javascript
// General usage:
angular.module(...)
  .config([
    `${bbIntentKey}Provider`,
    (intentProvider) => {
      intentProvider.setRoutes(...);
    }
  ]);

// Using {@link config-bb-providers-ng.config-bb-providers-ng}:
export default [
  ['lib-bb-intent-ng:intentProvider', (intents) => {
    intents.setRoutes({
      'something.do': '/gateway/api/sudoku/other',
      'something.ask': '/gateway/api/sudoku/other',
    });
  }],
];
```

## Type Definitions



### <a name="RequestIntent"></a>*RequestIntent(parameters)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| parameters | Object | The parameters to be sent along with the intent request |

##### Returns

Promise of [void](#void) - **


### <a name="GetState"></a>*GetState()*

The function to call to get the state

##### Returns

Object - *state*


### <a name="RestoreState"></a>*RestoreState(state)*

The function to call when restoring the state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |

##### Returns

[void](#void) - **

### <a name="NavigationAdapter"></a>*NavigationAdapter*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| current | [CurrentLocator](#CurrentLocator) | Returns current route |
| shouldNavigate | [ShouldNavigate](#ShouldNavigate) | Returns true if current route is not valid |
| navigate | [Navigate](#Navigate) | Navigates to desired route |


### <a name="NavigationAdapter_CurrentLocator"></a>*NavigationAdapter#CurrentLocator()*


##### Returns

String - *Current route*


### <a name="NavigationAdapter_ShouldNavigate"></a>*NavigationAdapter#ShouldNavigate(route)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| route | String | Current route |

##### Returns

Boolean - *False if current route is valid*


### <a name="NavigationAdapter_Navigate"></a>*NavigationAdapter#Navigate(route)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| route | String | Route to navigate to |

##### Returns

[void](#void) - **

---
