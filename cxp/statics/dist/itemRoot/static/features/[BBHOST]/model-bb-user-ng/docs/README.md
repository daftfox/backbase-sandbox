# model-bb-user-ng


Version: **1.9.1**

Model for widget-bb-user-ng

## Imports

* data-bb-legalentity-http-ng
* data-bb-user-http-ng
* vendor-bb-angular

---

## Example

```javascript
import modelUserModuleKey, { modelUserKey } from 'model-bb-user-ng';

angular
  .module('ExampleModule', [
    modelUserModuleKey,
  ])
  .factory('someFactory', [
    modelUserKey,
    // into
    function someFactory(userModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **legalEntitiesModel**<br/>    <a href="#legalEntitiesModel_getLegalEntitiesRecord">#getLegalEntitiesRecord(id, params)</a><br/>
- **userModel**<br/>    <a href="#userModel_postUsersIdentitiesRecord">#postUsersIdentitiesRecord()</a><br/>    <a href="#userModel_getUsersIdentities">#getUsersIdentities(params)</a><br/>    <a href="#userModel_getUsersIdentitiesRecord">#getUsersIdentitiesRecord(id, params)</a><br/>

---

## legalEntitiesModel


### <a name="legalEntitiesModel_getLegalEntitiesRecord"></a>*#getLegalEntitiesRecord(id, params)*

Get legal entity record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object |  |

##### Returns

Promise of Object - *A Promise*

---

## userModel


### <a name="userModel_postUsersIdentitiesRecord"></a>*#postUsersIdentitiesRecord()*

Post users identities record

##### Returns

Promise of Object - *A Promise*

### <a name="userModel_getUsersIdentities"></a>*#getUsersIdentities(params)*

Returns a list of users paged and filtered if passed

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Any parameters for the API call |

##### Returns

Promise of Array of Object, [ModelError](lib-bb-model-errors.html#ModelError) - **

### <a name="userModel_getUsersIdentitiesRecord"></a>*#getUsersIdentitiesRecord(id, params)*

Returns user identity record

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | User identity Id |
| params | Object | Any parameters for the API call |

##### Returns

Promise of [UserIdentitiesGetResponse](data-bb-user-http-ng.html#UserIdentitiesGetResponse), [ModelError](lib-bb-model-errors.html#ModelError) - **
