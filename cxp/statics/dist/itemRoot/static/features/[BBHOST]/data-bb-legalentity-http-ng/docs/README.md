# data-bb-legalentity-http-ng


Version: **1.4.1**

A data module for accessing the LegalEntity REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import legalEntityDataModuleKey, {
  legalEntityDataKey,
} from 'data-bb-legalentity-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#legalEntityDataKey">legalEntityDataKey</a><br/>
- **LegalEntityData**<br/>    <a href="#LegalEntityData_getLegalentities">#getLegalentities(params, headers)</a><br/>    <a href="#LegalEntityData_postLegalentitiesRecord">#postLegalentitiesRecord(data, headers)</a><br/>    <a href="#LegalEntityData_putLegalentitiesRecord">#putLegalentitiesRecord(data, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesRecord">#getLegalentitiesRecord(legalEntityId, params, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesMe">#getLegalentitiesMe(params, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesSubEntities">#getLegalentitiesSubEntities(params, headers)</a><br/>    <a href="#LegalEntityData_postLegalentitiesExternalRecord">#postLegalentitiesExternalRecord(data, headers)</a><br/>    <a href="#LegalEntityData_postLegalentitiesBulkExternalIdsRecord">#postLegalentitiesBulkExternalIdsRecord(data, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesServiceagreementsMaster">#getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesExternalRecord">#getLegalentitiesExternalRecord(externalId, params, headers)</a><br/>    <a href="#LegalEntityData_putLegalentitiesExternalRecord">#putLegalentitiesExternalRecord(externalId, data, headers)</a><br/>    <a href="#LegalEntityData_getLegalentitiesExternalServiceagreementsMaster">#getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers)</a><br/>    <a href="#LegalEntityData_schemas">#schemas</a><br/>    <a href="#LegalEntityData_schemas.postLegalentitiesRecord">#schemas.postLegalentitiesRecord</a><br/>    <a href="#LegalEntityData_schemas.putLegalentitiesRecord">#schemas.putLegalentitiesRecord</a><br/>    <a href="#LegalEntityData_schemas.postLegalentitiesExternalRecord">#schemas.postLegalentitiesExternalRecord</a><br/>    <a href="#LegalEntityData_schemas.postLegalentitiesBulkExternalIdsRecord">#schemas.postLegalentitiesBulkExternalIdsRecord</a><br/>    <a href="#LegalEntityData_schemas.putLegalentitiesExternalRecord">#schemas.putLegalentitiesExternalRecord</a><br/>
- **LegalEntityDataProvider**<br/>    <a href="#LegalEntityDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#LegalEntityDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#LegalEntityData.GetLegalEntities">LegalEntityData.GetLegalEntities</a><br/>    <a href="#LegalEntityData.GetLegalEntitiesBase">LegalEntityData.GetLegalEntitiesBase</a><br/>    <a href="#LegalEntityData.GetServiceAgreement">LegalEntityData.GetServiceAgreement</a><br/>    <a href="#LegalEntityData.LegalEntitiesBatchPut">LegalEntityData.LegalEntitiesBatchPut</a><br/>    <a href="#LegalEntityData.LegalEntityCreateItem">LegalEntityData.LegalEntityCreateItem</a><br/>    <a href="#LegalEntityData.LegalEntityIds">LegalEntityData.LegalEntityIds</a><br/>    <a href="#LegalEntityData.LegalEntityItem">LegalEntityData.LegalEntityItem</a><br/>    <a href="#LegalEntityData.LegalEntityItemBase">LegalEntityData.LegalEntityItemBase</a><br/>    <a href="#LegalEntityData.LegalEntityItemId">LegalEntityData.LegalEntityItemId</a><br/>    <a href="#LegalEntityData.LegalEntityUpdateItem">LegalEntityData.LegalEntityUpdateItem</a><br/>    <a href="#LegalEntityData.LegalentityCreateItem">LegalEntityData.LegalentityCreateItem</a><br/>    <a href="#LegalEntityData.LegalentityItemPut">LegalEntityData.LegalentityItemPut</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="legalEntityDataKey"></a>*legalEntityDataKey*

Angular dependency injection key for the LegalEntityData service

**Type:** *String*


---

## LegalEntityData

Public api for data-bb-legalentity-http-ng service

### <a name="LegalEntityData_getLegalentities"></a>*#getLegalentities(params, headers)*

Retrieve list of all legalentities.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.parentEntityId | String (optional) | Id of the Legal Entity's parent. Eg: 12. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetLegalEntities](#LegalEntityData.GetLegalEntities) on success*

## Example

```javascript
legalEntityData
 .getLegalentities(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_postLegalentitiesRecord"></a>*#postLegalentitiesRecord(data, headers)*

# Creates new legal entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [LegalEntityData.LegalEntityCreateItem](#LegalEntityData.LegalEntityCreateItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.LegalEntityItemId](#LegalEntityData.LegalEntityItemId) on success*

## Example

```javascript
legalEntityData
 .postLegalentitiesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_putLegalentitiesRecord"></a>*#putLegalentitiesRecord(data, headers)*

# Legal Entity Batch Put

Update batch of legal entities.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [LegalEntityData.LegalEntitiesBatchPut](#LegalEntityData.LegalEntitiesBatchPut) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
legalEntityData
 .putLegalentitiesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesRecord"></a>*#getLegalentitiesRecord(legalEntityId, params, headers)*

Retrieve a single Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.LegalEntityItem](#LegalEntityData.LegalEntityItem) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesRecord(legalEntityId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesMe"></a>*#getLegalentitiesMe(params, headers)*

Retrieve the Legal Entity for the current User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.LegalEntityItem](#LegalEntityData.LegalEntityItem) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesMe(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesSubEntities"></a>*#getLegalentitiesSubEntities(params, headers)*

Retrieve a list of all children of the given Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.cursor | String (optional) | Record UUID. As an alternative for specifying 'from' this allows to point to the record to start the selection from. Eg: 76d5be8b-e80d-4842-8ce6-ea67519e8f74. (defaults to "") |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.size | Number (optional) | Limit the number of elements on the response. When used in combination with cursor, the value is allowed to be a negative number to indicate requesting records upwards from the starting point indicated by the cursor. Eg: 80. (defaults to 10) |
| params.query | String (optional) | The search term used to search. Eg: backb. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetLegalEntitiesBase](#LegalEntityData.GetLegalEntitiesBase) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesSubEntities(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_postLegalentitiesExternalRecord"></a>*#postLegalentitiesExternalRecord(data, headers)*

# Legal Entities list

Initial call to retrieve a Legal Entities from the backbase platform with the given Legal Entity external ids.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [LegalEntityData.LegalEntityIds](#LegalEntityData.LegalEntityIds) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetLegalEntitiesBase](#LegalEntityData.GetLegalEntitiesBase) on success*

## Example

```javascript
legalEntityData
 .postLegalentitiesExternalRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_postLegalentitiesBulkExternalIdsRecord"></a>*#postLegalentitiesBulkExternalIdsRecord(data, headers)*

# Legal Entities list

Initial call to retrieve a Legal Entities from the backbase platform with the given Legal Entity external ids.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [LegalEntityData.LegalEntityIds](#LegalEntityData.LegalEntityIds) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetLegalEntitiesBase](#LegalEntityData.GetLegalEntitiesBase) on success*

## Example

```javascript
legalEntityData
 .postLegalentitiesBulkExternalIdsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesServiceagreementsMaster"></a>*#getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers)*

Retrieve the master service agreement for a Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| legalEntityId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetServiceAgreement](#LegalEntityData.GetServiceAgreement) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesServiceagreementsMaster(legalEntityId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesExternalRecord"></a>*#getLegalentitiesExternalRecord(externalId, params, headers)*

# Legal Entities list

Initial call to retrieve a Legal Entity from the backbase platform with the given Legal Entity external reference.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.LegalEntityItemBase](#LegalEntityData.LegalEntityItemBase) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesExternalRecord(externalId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_putLegalentitiesExternalRecord"></a>*#putLegalentitiesExternalRecord(externalId, data, headers)*

# Update legal entity.
Updates the type of the Legal Entity by it's external ID.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| data | [LegalEntityData.LegalEntityUpdateItem](#LegalEntityData.LegalEntityUpdateItem) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
legalEntityData
 .putLegalentitiesExternalRecord(externalId, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="LegalEntityData_getLegalentitiesExternalServiceagreementsMaster"></a>*#getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers)*

Retrieve the master service agreement for a external Legal Entity.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| externalId | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [LegalEntityData.GetServiceAgreement](#LegalEntityData.GetServiceAgreement) on success*

## Example

```javascript
legalEntityData
 .getLegalentitiesExternalServiceagreementsMaster(externalId, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="LegalEntityData_schemas"></a>*#schemas*

Schema data. Keys of the object are names of the POST and PUT methods

Note: The schema is not strictly a JSON schema. It is a whitelisted set of
keys for each object property. The keys that are exposed are meant for validation
purposes.

The full list of *possible* keys for each property is:
type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
properties, items, minItems, maxItems, uniqueItems and required.

See http://json-schema.org/latest/json-schema-validation.html for more details
on the meaning of these keys.

The "required" array from JSON schema is tranformed into a "required" boolean
on each property. This is for ease of use.

**Type:** *Object*

### <a name="LegalEntityData_schemas.postLegalentitiesRecord"></a>*#schemas.postLegalentitiesRecord*

An object describing the JSON schema for the postLegalentitiesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "externalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "required": true
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "pattern": "^\\S(.*(\\S))?$",
      "required": true
    },
    "parentExternalId": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "required": false
    },
    "type": {
      "type": "string",
      "enum": [
        "CUSTOMER",
        "BANK"
      ],
      "required": true
    }
  }
}
```
### <a name="LegalEntityData_schemas.putLegalentitiesRecord"></a>*#schemas.putLegalentitiesRecord*

An object describing the JSON schema for the putLegalentitiesRecord method

**Type:** *Object*


## Example

```javascript
{
  "type": "array",
  "items": {
    "properties": {
      "legalEntity": {
        "type": "object",
        "properties": {
          "externalId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "required": true
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "pattern": "^\\S(.*(\\S))?$",
            "required": true
          },
          "parentExternalId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "required": false
          },
          "type": {
            "type": "string",
            "enum": [
              "CUSTOMER",
              "BANK"
            ],
            "required": true
          }
        },
        "required": true
      },
      "externalId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 64,
        "required": true
      }
    }
  }
}
```
### <a name="LegalEntityData_schemas.postLegalentitiesExternalRecord"></a>*#schemas.postLegalentitiesExternalRecord*

An object describing the JSON schema for the postLegalentitiesExternalRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "ids": {
      "type": "array",
      "items": {
        "properties": {}
      },
      "minItems": 1,
      "uniqueItems": true,
      "required": true
    }
  }
}
```
### <a name="LegalEntityData_schemas.postLegalentitiesBulkExternalIdsRecord"></a>*#schemas.postLegalentitiesBulkExternalIdsRecord*

An object describing the JSON schema for the postLegalentitiesBulkExternalIdsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "ids": {
      "type": "array",
      "items": {
        "properties": {}
      },
      "minItems": 1,
      "uniqueItems": true,
      "required": true
    }
  }
}
```
### <a name="LegalEntityData_schemas.putLegalentitiesExternalRecord"></a>*#schemas.putLegalentitiesExternalRecord*

An object describing the JSON schema for the putLegalentitiesExternalRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "CUSTOMER",
        "BANK"
      ],
      "required": true
    }
  }
}
```

---

## LegalEntityDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-legalentity-http-ng:legalEntityDataProvider* |


### <a name="LegalEntityDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="LegalEntityDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-legalentity-http-ng:legalEntityDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-legalentity-http-ng:legalEntityDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="LegalEntityData.GetLegalEntities"></a>*LegalEntityData.GetLegalEntities*


**Type:** *Array of [LegalEntityData.LegalEntityItem](#LegalEntityData.LegalEntityItem)*


### <a name="LegalEntityData.GetLegalEntitiesBase"></a>*LegalEntityData.GetLegalEntitiesBase*


**Type:** *Array of Object*


### <a name="LegalEntityData.GetServiceAgreement"></a>*LegalEntityData.GetServiceAgreement*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| externalId | String (optional) | External ID of Service Agreement |
| name | String |  |
| description | String |  |
| creatorLegalEntity | String (optional) |  |
| isMaster | Boolean (optional) |  |
| status | String (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalEntitiesBatchPut"></a>*LegalEntityData.LegalEntitiesBatchPut*


**Type:** *Array of [LegalEntityData.LegalentityItemPut](#LegalEntityData.LegalentityItemPut)*


### <a name="LegalEntityData.LegalEntityCreateItem"></a>*LegalEntityData.LegalEntityCreateItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String | External Id of the legal entity |
| name | String | Legal Entity name |
| parentExternalId | String (optional) | External Id of the parent Legal Entity |
| type | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalEntityIds"></a>*LegalEntityData.LegalEntityIds*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| ids | Array of String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalEntityItem"></a>*LegalEntityData.LegalEntityItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| parentId | String (optional) |  |
| isParent | Boolean (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalEntityItemBase"></a>*LegalEntityData.LegalEntityItemBase*


**Type:** *Object*


### <a name="LegalEntityData.LegalEntityItemId"></a>*LegalEntityData.LegalEntityItemId*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalEntityUpdateItem"></a>*LegalEntityData.LegalEntityUpdateItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| type | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalentityCreateItem"></a>*LegalEntityData.LegalentityCreateItem*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| externalId | String | External Id of the legal entity |
| name | String | Legal Entity name |
| parentExternalId | String (optional) | External Id of the parent Legal Entity |
| type | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="LegalEntityData.LegalentityItemPut"></a>*LegalEntityData.LegalentityItemPut*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| legalEntity | [LegalEntityData.LegalentityCreateItem](#LegalEntityData.LegalentityCreateItem) |  |
| externalId | String |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
