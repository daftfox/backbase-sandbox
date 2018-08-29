# widget-bb-user-identity-details-ng


Version: **1.1.1**

User identity details

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-user-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-user-identity-details-ng**<br/>    <a href="#widget-bb-user-identity-details-ngbeforeGetUsersIdentitiesRecord">beforeGetUsersIdentitiesRecord()</a><br/>    <a href="#widget-bb-user-identity-details-ngafterGetUsersIdentitiesRecordSuccess">afterGetUsersIdentitiesRecordSuccess(userIdentityRecord)</a><br/>    <a href="#widget-bb-user-identity-details-ngafterGetUsersIdentitiesRecordError">afterGetUsersIdentitiesRecordError(error)</a><br/>    <a href="#widget-bb-user-identity-details-ngbeforeGetUserIdentityLegalEntity">beforeGetUserIdentityLegalEntity()</a><br/>    <a href="#widget-bb-user-identity-details-ngafterGetUserIdentityLegalEntitySuccess">afterGetUserIdentityLegalEntitySuccess(legalEntity)</a><br/>    <a href="#widget-bb-user-identity-details-ngafterGetUserIdentityLegalEntityError">afterGetUserIdentityLegalEntityError(error)</a><br/>
- **Router**<br/>    <a href="#Router_goto">#goto(name, params)</a><br/>    <a href="#Router_getParams">#getParams()</a><br/>    <a href="#Router_getRoute">#getRoute()</a><br/>    <a href="#Router_subscribe">#subscribe(callback)</a><br/>
- **UserIdentityDetailsService**<br/>    <a href="#UserIdentityDetailsService_getUsersIdentitiesRecord">#getUsersIdentitiesRecord(id, params)</a><br/>    <a href="#UserIdentityDetailsService_getLegalEntitiesRecord">#getLegalEntitiesRecord(id, params)</a><br/>
- **Type Definitions**<br/>    <a href="#HelperContext">HelperContext</a><br/>    <a href="#IntentContext">IntentContext</a><br/>    <a href="#EventContext">EventContext</a><br/>    <a href="#ViewState">ViewState</a><br/>

---

---

### <a name="widget-bb-user-identity-details-ngbeforeGetUsersIdentitiesRecord"></a>*beforeGetUsersIdentitiesRecord()*

Before get users identities record

---

### <a name="widget-bb-user-identity-details-ngafterGetUsersIdentitiesRecordSuccess"></a>*afterGetUsersIdentitiesRecordSuccess(userIdentityRecord)*

After get users identities record success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userIdentityRecord | Object | The user identity record |

---

### <a name="widget-bb-user-identity-details-ngafterGetUsersIdentitiesRecordError"></a>*afterGetUsersIdentitiesRecordError(error)*

After get users identities record error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while getting users identities record |

---

### <a name="widget-bb-user-identity-details-ngbeforeGetUserIdentityLegalEntity"></a>*beforeGetUserIdentityLegalEntity()*

Before get users identities record

---

### <a name="widget-bb-user-identity-details-ngafterGetUserIdentityLegalEntitySuccess"></a>*afterGetUserIdentityLegalEntitySuccess(legalEntity)*

After get users identities legal entity success

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntity | Object | Legal Entity details object |

---

### <a name="widget-bb-user-identity-details-ngafterGetUserIdentityLegalEntityError"></a>*afterGetUserIdentityLegalEntityError(error)*

After get users identities legal entity error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while getting users identities legal entity record |

---

## Router

The router service of the UserIdentityDetails widget


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

## UserIdentityDetailsService

The service encapsulates the core functionality of the UserIdentityDetails
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

### <a name="UserIdentityDetailsService_getUsersIdentitiesRecord"></a>*#getUsersIdentitiesRecord(id, params)*

Update the view with a user identity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | User identity ID |
| params | Object | A set of params for the request |

##### Returns

Promise of [void](#void) - **

### <a name="UserIdentityDetailsService_getLegalEntitiesRecord"></a>*#getLegalEntitiesRecord(id, params)*

Update the view with the user's legal entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Legal entity ID |
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
| service | [UserIdentityDetailsService](#UserIdentityDetailsService) |  |

### <a name="IntentContext"></a>*IntentContext*


*Extends*: [IntentContext](lib-bb-extension-intents-ng.html#IntentContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [UserIdentityDetailsService](#UserIdentityDetailsService) |  |

### <a name="EventContext"></a>*EventContext*


*Extends*: [EventContext](lib-bb-extension-events-ng.html#EventContext)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| service | [UserIdentityDetailsService](#UserIdentityDetailsService) |  |

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
