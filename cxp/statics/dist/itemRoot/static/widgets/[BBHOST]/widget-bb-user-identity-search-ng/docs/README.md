# widget-bb-user-identity-search-ng


Version: **1.5.1**

Search for a user identity

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-user-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-user-identity-search-ng**<br/>    <a href="#widget-bb-user-identity-search-ngbeforeGetUsersIdentities">beforeGetUsersIdentities()</a><br/>    <a href="#widget-bb-user-identity-search-ngafterGetUsersIdentitiesSuccess">afterGetUsersIdentitiesSuccess(data, headers)</a><br/>    <a href="#widget-bb-user-identity-search-ngafterGetUsersIdentitiesError">afterGetUsersIdentitiesError(error)</a><br/>
- **Router**<br/>    <a href="#Router_goto">#goto(name, params)</a><br/>    <a href="#Router_getParams">#getParams()</a><br/>    <a href="#Router_getRoute">#getRoute()</a><br/>    <a href="#Router_subscribe">#subscribe(callback)</a><br/>
- **UserIdentitySearchService**<br/>    <a href="#UserIdentitySearchService_getUsersIdentities">#getUsersIdentities(params)</a><br/>
- **Type Definitions**<br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#ViewState">ViewState</a><br/>

---

## pagerDefaults

Default values for the pager if not set on the widget

---

---

---

### <a name="widget-bb-user-identity-search-ngbeforeGetUsersIdentities"></a>*beforeGetUsersIdentities()*

Before get users identities

---

### <a name="widget-bb-user-identity-search-ngafterGetUsersIdentitiesSuccess"></a>*afterGetUsersIdentitiesSuccess(data, headers)*

After get users identities success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Array | User Data |
| headers | Object | Request headers that contain information such as total count |

---

### <a name="widget-bb-user-identity-search-ngafterGetUsersIdentitiesError"></a>*afterGetUsersIdentitiesError(error)*

After get users identities error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while getting users identities |

---

## Router

The router service of the UserIdentitySearch widget


### <a name="Router_goto"></a>*#goto(name, params)*

Method to navigate to a specific route

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | New route name |
| params | Object | New route parameters object |

### <a name="Router_getParams"></a>*#getParams()*

Method to get current route params from the [ViewState](#ViewState)

##### Returns

Object - *current parameters object*

### <a name="Router_getRoute"></a>*#getRoute()*

Method to get current route name from the state

### <a name="Router_subscribe"></a>*#subscribe(callback)*

Method to subscribe to a route change

| Parameter | Type | Description |
| :-- | :-- | :-- |
| callback | Function | A callback to be subscribed |

##### Returns

Function - *The method to unsubscribe*

---

## UserIdentitySearchService

The service encapsulates the core functionality of the UserIdentitySearch
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

### <a name="UserIdentitySearchService_getUsersIdentities"></a>*#getUsersIdentities(params)*

Update the view with an list of
items

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | A set of params for the request |

##### Returns

Promise of [void](#void) - **

---

## Type Definitions


### <a name="HelperContext"></a>*HelperContext*


*Extends*: [HelperContext](lib-bb-extension-helpers-ng.html#HelperContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [UserIdentitiySearchService](#UserIdentitiySearchService) |  |

### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [UserIdentitySearchService](#UserIdentitySearchService) |  |

### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [UserIdentitySearchService](#UserIdentitySearchService) |  |

### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| items | Array of [any](#any) |  |
| route | Object | Indicates current router state |

---

## Templates

* *template.ng.html*

---
