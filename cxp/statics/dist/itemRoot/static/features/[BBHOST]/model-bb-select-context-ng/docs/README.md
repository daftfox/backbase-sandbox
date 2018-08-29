# model-bb-select-context-ng


Version: **1.5.1**

Model for widget-bb-select-context-ng

## Imports

* data-bb-accessgroups-http-ng
* data-bb-cxp-authentication-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelSelectContextModuleKey, { modelSelectContextKey } from 'model-bb-select-context-ng';

angular
  .module('ExampleModule', [
    modelSelectContextModuleKey,
  ])
  .factory('someFactory', [
    modelSelectContextKey,
    // into
    function someFactory(selectContextModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **selectContextModel**<br/>    <a href="#selectContextModel_getServiceAgreements">#getServiceAgreements(params)</a><br/>    <a href="#selectContextModel_getLegalEntities">#getLegalEntities(id, params)</a><br/>    <a href="#selectContextModel_selectUserContext">#selectUserContext(serviceAgreementId, legalEntityId)</a><br/>    <a href="#selectContextModel_logout">#logout()</a><br/>    <a href="#selectContextModel_getProfile">#getProfile()</a><br/>

---

## selectContextModel


### <a name="selectContextModel_getServiceAgreements"></a>*#getServiceAgreements(params)*

Get list of Service Agreements

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Params to send to the request |

##### Returns

Promise of [ServiceAgreements](#ServiceAgreements), [ModelError](#ModelError) - *A Promise*

### <a name="selectContextModel_getLegalEntities"></a>*#getLegalEntities(id, params)*

Get list of available Legal Entities for selected Service Agreement

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | Service Agreement ID |
| params | Object | Search parameters |

##### Returns

Promise of [LegalEntities](#LegalEntities), [ModelError](#ModelError) - *A Promise*

### <a name="selectContextModel_selectUserContext"></a>*#selectUserContext(serviceAgreementId, legalEntityId)*

Request user context with selected Service Agreement and Legal Entity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| serviceAgreementId | String |  |
| legalEntityId | String |  |

##### Returns

Promise - **

### <a name="selectContextModel_logout"></a>*#logout()*

Makes a logout request

##### Returns

Promise - **

### <a name="selectContextModel_getProfile"></a>*#getProfile()*

Retrieves profile information

##### Returns

Promise - **
