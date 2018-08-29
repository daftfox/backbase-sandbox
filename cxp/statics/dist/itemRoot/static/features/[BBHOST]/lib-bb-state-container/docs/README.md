# lib-bb-state-container


Version: **1.0.44**

Holds a state tree in memory.

By convention, the top-level state is an object or some other key-value collection like a Map,
but technically it can be any type. Still, you should do your best to keep the state
serializable. Don't put anything inside it that you can't easily turn into JSON.

## Table of Contents
- **Exports**<br/>    <a href="#default">default(initialState)</a><br/>
- **Type Definitions**<br/>    <a href="#StateContainer">StateContainer</a><br/>    <a href="#StateContainer_ActionCreator">StateContainer#ActionCreator(reducer)</a><br/>    <a href="#Reducer">Reducer(oldState, payload)</a><br/>    <a href="#ActionDispatcher">ActionDispatcher(payload)</a><br/>    <a href="#StateContainer_SelectorCreator">StateContainer#SelectorCreator(selector)</a><br/>    <a href="#Selector">Selector(state)</a><br/>    <a href="#StateContainer_Subscribe">StateContainer#Subscribe(subscriber)</a><br/>    <a href="#StateContainer_Subscriber">StateContainer#Subscriber(state)</a><br/>    <a href="#StateContainer_GetState">StateContainer#GetState()</a><br/>    <a href="#StateContainer_SetState">StateContainer#SetState(newState)</a><br/>

## Exports


### <a name="default"></a>*default(initialState)*

State container factory method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| initialState | Object (optional) | The initial value to set the state to |

##### Returns

[StateContainer](#StateContainer) - **

## Type Definitions


### <a name="StateContainer"></a>*StateContainer*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| createAction | [StateContainer#ActionCreator](#StateContainer_ActionCreator) | Helper function to create an action to accept the payload and modify the state. When the state is modified, all subscribers will be notified. |
| createSelector | [StateContainer#SelectorCreator](#StateContainer_SelectorCreator) | Creates a function that can compute derived data from the state. |
| subscribe | [StateContainer#Subscribe](#StateContainer_Subscribe) | Subscribes to state changes |
| getState | [StateContainer#GetState](#StateContainer_GetState) | Get the current state |
| setState | [StateContainer#SetState](#StateContainer_SetState) | Replace the state object |


### <a name="StateContainer_ActionCreator"></a>*StateContainer#ActionCreator(reducer)*

Helper function to create a new callback that accepts a payload and modifies the
state. When the state is modified, all subscribers will be notified.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| reducer | [Reducer](#Reducer) | Function to accept the old state and a payload, and return a new state |

##### Returns

[ActionDispatcher](#ActionDispatcher) - *A function that when called, dispatches the action to the associated
reducer function with the given payload and saves the new state. All subscribers to the state
will be notified of the state.*

## Example

```javascript
import createStateContainer from 'lib-bb-state-container';
const myState = createStateContainer({ count: 1});
myState.subscribe(state => { console.log(state.count) });
const add = myState.createAction((oldState, n) => ({ count: oldState.count + n }));
add(2); // logs 3
add(7); // logs 10
```


### <a name="Reducer"></a>*Reducer(oldState, payload)*

Custom callback which accepts a payload and the current (old) state, and should
return the new state based on the payload.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| oldState | Object | The current (old) state |
| payload | [*](#*) | Optional payload that can be sent with the [ActionDispatcher](#ActionDispatcher) |

##### Returns

Object - *The new state*


### <a name="ActionDispatcher"></a>*ActionDispatcher(payload)*

A function that when called, dispatches the action to the associated reducer
function with the given payload and saves the new state. All subscribers to the state will be
notified of the state
change.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payload | [*](#*) | An optional payload that can be sent to the reducer |

##### Returns

[void](#void) - **


### <a name="StateContainer_SelectorCreator"></a>*StateContainer#SelectorCreator(selector)*

Create a function that takes the current state and returns computed derived data.

Selectors are memoized, so the computation is only recalculated when the state changes. This
means state must remain immutable for selectors to work properly.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selector | [Selector](#Selector) | Function to accept the state and compute derived data |

##### Returns

Function - *A function that will call the selector with the current state (memoized)*

## Example

```javascript
import createStateContainer from 'lib-bb-state-container';
const myState = createStateContainer({ items: [1, 2, 3] });
const sum = myState.createSelector(state => state.items.reduce((acc, a) => acc + a, 0));
sum(); // 6
```


### <a name="Selector"></a>*Selector(state)*

A custom function that takes the current state and computes and returns some
derived data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | The current state |

##### Returns

[*](#*) - *Computed data*


### <a name="StateContainer_Subscribe"></a>*StateContainer#Subscribe(subscriber)*

Subscribes to state changes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| subscriber | [StateContainer#Subscriber](#StateContainer_Subscriber) | Callback function to call when state changes |

##### Returns

Function - *Unsubscribe function*


### <a name="StateContainer_Subscriber"></a>*StateContainer#Subscriber(state)*

Callback function to call when state changes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | The current state |

##### Returns

[void](#void) - **


### <a name="StateContainer_GetState"></a>*StateContainer#GetState()*


##### Returns

Object - *The current state*


### <a name="StateContainer_SetState"></a>*StateContainer#SetState(newState)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| newState | Object | The state to set to |

##### Returns

[void](#void) - **

---
