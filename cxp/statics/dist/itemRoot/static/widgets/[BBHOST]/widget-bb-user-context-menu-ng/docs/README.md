# widget-bb-user-context-menu-ng


Version: **2.6.2**

User Context Menu widget

## Imports

* lib-bb-intent-ng
* lib-bb-storage-ng
* lib-bb-user-data-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-login-ng
* model-bb-select-context-ng
* vendor-bb-angular

---

## Table of Contents
- **UserContextMenuController**<br/>    <a href="#UserContextMenuController_logout">#logout()</a><br/>    <a href="#UserContextMenuController_resetServiceAgreements">#resetServiceAgreements(resetLegalEntity)</a><br/>    <a href="#UserContextMenuController_changeUserContext">#changeUserContext(serviceAgreementId, legalEntityId)</a><br/>    <a href="#UserContextMenuController_getLegalEntities">#getLegalEntities(id, options)</a><br/>    <a href="#UserContextMenuController_selectServiceAgreement">#selectServiceAgreement(model)</a><br/>    <a href="#UserContextMenuController_getServiceAgreements">#getServiceAgreements(options)</a><br/>    <a href="#UserContextMenuController_togglePopover">#togglePopover()</a><br/>    <a href="#UserContextMenuController_$onInit">#$onInit()</a><br/>    <a href="#UserContextMenuController_currentUser">#currentUser</a><br/>    <a href="#UserContextMenuController_loggedUser">#loggedUser()</a><br/>    <a href="#UserContextMenuController_userDataUrl">#userDataUrl</a><br/>    <a href="#UserContextMenuController_selectLegalEntity">#selectLegalEntity()</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_processProfileData">#processProfileData(user)</a><br/>    <a href="#default-hooks_setCookie">#setCookie(name, value, days)</a><br/>    <a href="#default-hooks_getCookie">#getCookie(name)</a><br/>
- **ViewModel**<br/>    <a href="#ViewModel_appendServiceAgreements">#appendServiceAgreements(raw)</a><br/>    <a href="#ViewModel_getServiceAgreements">#getServiceAgreements()</a><br/>    <a href="#ViewModel_resetServiceAgreements">#resetServiceAgreements(resetLegalEntity)</a><br/>    <a href="#ViewModel_appendLegalEntities">#appendLegalEntities(raw)</a><br/>    <a href="#ViewModel_getLegalEntities">#getLegalEntities()</a><br/>    <a href="#ViewModel_resetLegalEntities">#resetLegalEntities()</a><br/>
- **Type Definitions**<br/>    <a href="#User">User</a><br/>    <a href="#Portal">Portal</a><br/>

---

## BbStorageKeys

bbStorage keys enum.

---

## UserContextMenuController

User Context Menu widget

### <a name="UserContextMenuController_logout"></a>*#logout()*

Logout function

##### Returns

Promise - **

### <a name="UserContextMenuController_resetServiceAgreements"></a>*#resetServiceAgreements(resetLegalEntity)*

Clear selected Service Agreement and Legal Entities list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| resetLegalEntity | Boolean (optional) | Is selected Legal Entity should be reset |

##### Returns

Promise - **

### <a name="UserContextMenuController_changeUserContext"></a>*#changeUserContext(serviceAgreementId, legalEntityId)*

Change User Context by specifying new combination of
User Agreement and Legal Entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| serviceAgreementId | String |  |
| legalEntityId | String |  |

##### Returns

Promise - **

### <a name="UserContextMenuController_getLegalEntities"></a>*#getLegalEntities(id, options)*

Request available Legal Entities

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Service Agreement ID |
| options | Object | Params to send to the request |

##### Returns

Promise - **

### <a name="UserContextMenuController_selectServiceAgreement"></a>*#selectServiceAgreement(model)*

Select Service Agreement and request available Legal Entities

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Service Agreement item |

##### Returns

Promise - **

### <a name="UserContextMenuController_getServiceAgreements"></a>*#getServiceAgreements(options)*

Request available Service Agreements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object | Params to send to the request |

##### Returns

Promise - **

### <a name="UserContextMenuController_togglePopover"></a>*#togglePopover()*

Show change User Context form

##### Returns

Promise - **

### <a name="UserContextMenuController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

Promise of [void](#void) - **
### <a name="UserContextMenuController_currentUser"></a>*#currentUser*

Currently logged in user's data object

**Type:** *[User](#User)*


### <a name="UserContextMenuController_loggedUser"></a>*#loggedUser()*

Retrieves logged in user id
Returns empty string if user is not found (deprecated)

##### Returns

String - **
### <a name="UserContextMenuController_userDataUrl"></a>*#userDataUrl*

URL that leads to the page with additional user data

**Type:** *String*


### <a name="UserContextMenuController_selectLegalEntity"></a>*#selectLegalEntity()*

Select Legal Entity

##### Returns

Promise - **

---

---

## default-hooks

Default hooks for widget-bb-user-context-menu-ng

### <a name="default-hooks_processProfileData"></a>*#processProfileData(user)*

Processes user data retrieved from user profile endpoint

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [User](#User) | User data |

##### Returns

[User](#User) - *Processed data*

### <a name="default-hooks_setCookie"></a>*#setCookie(name, value, days)*

Save cookie

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | Cookie name |
| value | [*](#*) | Cookie value |
| days | Number | Cookie TTL (days) |

### <a name="default-hooks_getCookie"></a>*#getCookie(name)*

Read cookies

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | Cookie name |

##### Returns

[*](#*) - **

---

## ViewModel

View model for widget-bb-user-context-menu-ng

### <a name="ViewModel_appendServiceAgreements"></a>*#appendServiceAgreements(raw)*

Append new results to the existing ones

| Parameter | Type | Description |
| :-- | :-- | :-- |
| raw | Array | Array of new Service Agreements |

### <a name="ViewModel_getServiceAgreements"></a>*#getServiceAgreements()*

Get result list and state

##### Returns

Object - **

### <a name="ViewModel_resetServiceAgreements"></a>*#resetServiceAgreements(resetLegalEntity)*

Clear Service Agreements array and reset state to initial

| Parameter | Type | Description |
| :-- | :-- | :-- |
| resetLegalEntity | Boolean (optional) | Is selected Legal Entity should be reset |

### <a name="ViewModel_appendLegalEntities"></a>*#appendLegalEntities(raw)*

Append new results to the existing ones

| Parameter | Type | Description |
| :-- | :-- | :-- |
| raw | Array | Array of new Legal Entities |

### <a name="ViewModel_getLegalEntities"></a>*#getLegalEntities()*

Get result list and state

##### Returns

Object - **

### <a name="ViewModel_resetLegalEntities"></a>*#resetLegalEntities()*

Clear Legal Entities array and reset state to initial

## Type Definitions


### <a name="User"></a>*User*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Name that should be displayed on page |
| username | String (optional) | Internal user identifier |

### <a name="Portal"></a>*Portal*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| loggedInUserId | String | Internally used unique identification of the user |

---

## Templates

* *template.ng.html*

---
