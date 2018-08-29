# widget-bb-select-context-ng


Version: **1.7.2**

Select context widget

## Imports

* lib-bb-user-data-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-select-context-ng
* vendor-bb-angular

---

## Table of Contents
- **SelectContextController**<br/>    <a href="#SelectContextController_resetServiceAgreements">#resetServiceAgreements(resetLegalEntity)</a><br/>    <a href="#SelectContextController_selectUserContext">#selectUserContext(serviceAgreementId, legalEntityId)</a><br/>    <a href="#SelectContextController_getLegalEntities">#getLegalEntities(id, options)</a><br/>    <a href="#SelectContextController_selectServiceAgreement">#selectServiceAgreement(model, autoSelect)</a><br/>    <a href="#SelectContextController_selectLegalEntity">#selectLegalEntity(model)</a><br/>    <a href="#SelectContextController_getServiceAgreements">#getServiceAgreements(options)</a><br/>    <a href="#SelectContextController_logout">#logout()</a><br/>    <a href="#SelectContextController_$onInit">#$onInit()</a><br/>
- **default-hooks**<br/>    <a href="#default-hooks_setCookie">#setCookie(name)</a><br/>    <a href="#default-hooks_processPortalObject">#processPortalObject(portal)</a><br/>    <a href="#default-hooks_processProfileData">#processProfileData(user)</a><br/>
- **ViewModel**<br/>    <a href="#ViewModel_appendServiceAgreements">#appendServiceAgreements(raw)</a><br/>    <a href="#ViewModel_getServiceAgreements">#getServiceAgreements()</a><br/>    <a href="#ViewModel_resetServiceAgreements">#resetServiceAgreements(resetLegalEntity)</a><br/>    <a href="#ViewModel_appendLegalEntities">#appendLegalEntities(raw)</a><br/>    <a href="#ViewModel_getLegalEntities">#getLegalEntities()</a><br/>    <a href="#ViewModel_resetLegalEntities">#resetLegalEntities()</a><br/>

---

## SelectContextController

Select Context widget

### <a name="SelectContextController_resetServiceAgreements"></a>*#resetServiceAgreements(resetLegalEntity)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| resetLegalEntity | Boolean (optional) | Is selected Legal Entity should be reset |

### <a name="SelectContextController_selectUserContext"></a>*#selectUserContext(serviceAgreementId, legalEntityId)*

Select user context by Service Agreemenet and Legal Entity IDs combination

| Parameter | Type | Description |
| :-- | :-- | :-- |
| serviceAgreementId | String |  |
| legalEntityId | String |  |

##### Returns

Promise - **

### <a name="SelectContextController_getLegalEntities"></a>*#getLegalEntities(id, options)*

Request Legal Entities list by Service Agreement ID and searched name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Service Agreement ID |
| options | Object | Params to send to the request |

##### Returns

Promise of [ServiceAgreements](#ServiceAgreements), [ModelError](#ModelError) - *A Promise*

### <a name="SelectContextController_selectServiceAgreement"></a>*#selectServiceAgreement(model, autoSelect)*

Define Service Agreement ID and request Legal Entities list for it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Service Agreement item |
| autoSelect | Boolean | Select user context automatically |

### <a name="SelectContextController_selectLegalEntity"></a>*#selectLegalEntity(model)*

Define Legal Entity ID

| Parameter | Type | Description |
| :-- | :-- | :-- |
| model | Object | Legal Entity item |

### <a name="SelectContextController_getServiceAgreements"></a>*#getServiceAgreements(options)*

Request Service Agreements list by searched name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object | Params to send to the request |

##### Returns

Promise of [ServiceAgreements](#ServiceAgreements), [ModelError](#ModelError) - *A Promise*

### <a name="SelectContextController_logout"></a>*#logout()*

Log user out and redirect to the login page

### <a name="SelectContextController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller

##### Returns

[*](#*) - **

---

## default-hooks

Default hooks for widget-bb-select-context-ng

### <a name="default-hooks_setCookie"></a>*#setCookie(name)*

Read context preferences from cookies

| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | Cookie name |

##### Returns

[*](#*) - **

### <a name="default-hooks_processPortalObject"></a>*#processPortalObject(portal)*

Processes object retrieved from portal global object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portal | [Portal](#Portal) | portal data |

##### Returns

[User](#User) - *Processed data*

### <a name="default-hooks_processProfileData"></a>*#processProfileData(user)*

Processes user data retrieved from user profile endpoint

| Parameter | Type | Description |
| :-- | :-- | :-- |
| user | [User](#User) | User data |

##### Returns

[User](#User) - *Processed data*

---

## ViewModel

View model for widget-bb-select-context-ng

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

## Templates

* *template.ng.html*

---
