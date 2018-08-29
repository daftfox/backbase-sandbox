# undefined


Version: **1.15.2**


## Table of Contents
- **Exports**<br/>    <a href="#mergeStates">mergeStates(currentState, stateChunk)</a><br/>    <a href="#wrapActions">wrapActions(stateContainer, action)</a><br/>    <a href="#wrapActions">wrapActions(stateContainer, viewModel)</a><br/>

## Exports


### <a name="mergeStates"></a>*mergeStates(currentState, stateChunk)*

Merges state chunk into current state returning
             new object (does not modify passed state)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentState | Object |  |
| stateChunk | Object |  |

##### Returns

Object - **

### <a name="wrapActions"></a>*wrapActions(stateContainer, action)*

Wraps action into stateContainer`s createAction
             and merges result of action with current state.
             Does not modify current state, but returns new object.
             Allows to simplify store reducers, taking care
             about merging new and previous states.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| stateContainer | [StateContainer](#StateContainer) | State container |
| action | Object | action to wrap |

##### Returns

Object - *action wrapped with stateContainer`s createAction*

### <a name="wrapActions"></a>*wrapActions(stateContainer, viewModel)*

Loops through methods on view model and wrap them
             into stateContainer`s createAction and merges their result into new state.
             Allows to simplify store reducers, taking care
             about merging new and previous states.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| stateContainer | [StateContainer](#StateContainer) | State container |
| viewModel | Object | Object containing store reducers to wrap |

##### Returns

Object - *viewModel with methods wrapped with stateContainer`s createAction*
