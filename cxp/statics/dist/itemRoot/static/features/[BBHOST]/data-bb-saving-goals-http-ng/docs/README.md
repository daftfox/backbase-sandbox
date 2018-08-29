# data-bb-saving-goals-http-ng


Version: **1.1.4**

A data module for accessing the Saving Goals REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import savingGoalsDataModuleKey, {
  savingGoalsDataKey,
} from 'data-bb-saving-goals-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#savingGoalsDataKey">savingGoalsDataKey</a><br/>
- **SavingGoalsData**<br/>    <a href="#SavingGoalsData_postSavinggoalsRecord">#postSavinggoalsRecord(data, headers)</a><br/>    <a href="#SavingGoalsData_getSavinggoals">#getSavinggoals(params, headers)</a><br/>    <a href="#SavingGoalsData_getSavinggoalsRecord">#getSavinggoalsRecord(id, params, headers)</a><br/>    <a href="#SavingGoalsData_deleteSavinggoalsRecord">#deleteSavinggoalsRecord(id, params, headers)</a><br/>    <a href="#SavingGoalsData_putSavinggoalsRecord">#putSavinggoalsRecord(id, data, headers)</a><br/>    <a href="#SavingGoalsData_schemas">#schemas</a><br/>    <a href="#SavingGoalsData_schemas.postSavinggoalsRecord">#schemas.postSavinggoalsRecord</a><br/>    <a href="#SavingGoalsData_schemas.putSavinggoalsRecord">#schemas.putSavinggoalsRecord</a><br/>
- **SavingGoalsDataProvider**<br/>    <a href="#SavingGoalsDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#SavingGoalsDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#SavingGoalsData.Currency">SavingGoalsData.Currency</a><br/>    <a href="#SavingGoalsData.Goal-GET">SavingGoalsData.Goal-GET</a><br/>    <a href="#SavingGoalsData.Goal-LIST">SavingGoalsData.Goal-LIST</a><br/>    <a href="#SavingGoalsData.Goal-NOT-FOUND">SavingGoalsData.Goal-NOT-FOUND</a><br/>    <a href="#SavingGoalsData.Goal-POST">SavingGoalsData.Goal-POST</a><br/>    <a href="#SavingGoalsData.Goal-UPDATE">SavingGoalsData.Goal-UPDATE</a><br/>    <a href="#SavingGoalsData.GoalGET">SavingGoalsData.GoalGET</a><br/>    <a href="#SavingGoalsData.GoalId">SavingGoalsData.GoalId</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="savingGoalsDataKey"></a>*savingGoalsDataKey*

Angular dependency injection key for the SavingGoalsData service

**Type:** *String*


---

## SavingGoalsData

Public api for data-bb-saving-goals-http-ng service

### <a name="SavingGoalsData_postSavinggoalsRecord"></a>*#postSavinggoalsRecord(data, headers)*

Create saving goals

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [SavingGoalsData.Goal-POST](#SavingGoalsData.Goal-POST) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [SavingGoalsData.GoalId](#SavingGoalsData.GoalId) on success*

## Example

```javascript
savingGoalsData
 .postSavinggoalsRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="SavingGoalsData_getSavinggoals"></a>*#getSavinggoals(params, headers)*

Retrieve list of saving goals

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.arrangementId | String | Reference to the arrangement to which the saving goals belong. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [SavingGoalsData.Goal-LIST](#SavingGoalsData.Goal-LIST) on success*

## Example

```javascript
savingGoalsData
 .getSavinggoals(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="SavingGoalsData_getSavinggoalsRecord"></a>*#getSavinggoalsRecord(id, params, headers)*

Get Saving Goal by id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [SavingGoalsData.Goal-GET](#SavingGoalsData.Goal-GET) on success  or rejects with data of [SavingGoalsData.Goal-NOT-FOUND](#SavingGoalsData.Goal-NOT-FOUND) on error*

## Example

```javascript
savingGoalsData
 .getSavinggoalsRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="SavingGoalsData_deleteSavinggoalsRecord"></a>*#deleteSavinggoalsRecord(id, params, headers)*

Delete the saving goal by Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [SavingGoalsData.Goal-NOT-FOUND](#SavingGoalsData.Goal-NOT-FOUND) on error*

## Example

```javascript
savingGoalsData
 .deleteSavinggoalsRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="SavingGoalsData_putSavinggoalsRecord"></a>*#putSavinggoalsRecord(id, data, headers)*

Update saving goal by an Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [SavingGoalsData.Goal-UPDATE](#SavingGoalsData.Goal-UPDATE) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [SavingGoalsData.Goal-NOT-FOUND](#SavingGoalsData.Goal-NOT-FOUND) on error*

## Example

```javascript
savingGoalsData
 .putSavinggoalsRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="SavingGoalsData_schemas"></a>*#schemas*

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

### <a name="SavingGoalsData_schemas.postSavinggoalsRecord"></a>*#schemas.postSavinggoalsRecord*

An object describing the JSON schema for the postSavinggoalsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "goalName": {
      "type": "string",
      "required": true
    },
    "goalAmount": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": true
    },
    "arrangementId": {
      "type": "string",
      "required": true
    }
  }
}
```
### <a name="SavingGoalsData_schemas.putSavinggoalsRecord"></a>*#schemas.putSavinggoalsRecord*

An object describing the JSON schema for the putSavinggoalsRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "goalName": {
      "type": "string",
      "maxLength": 50,
      "required": true
    },
    "goalAmount": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "required": true
        },
        "currencyCode": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "required": true
        }
      },
      "required": true
    }
  }
}
```

---

## SavingGoalsDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-saving-goals-http-ng:savingGoalsDataProvider* |


### <a name="SavingGoalsDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="SavingGoalsDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-saving-goals-http-ng:savingGoalsDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-saving-goals-http-ng:savingGoalsDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="SavingGoalsData.Currency"></a>*SavingGoalsData.Currency*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| amount | String | The amount in the specified currency |
| currencyCode | String | The alpha-3 code (complying with ISO 4217) of the currency that qualifies the amount |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.Goal-GET"></a>*SavingGoalsData.Goal-GET*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Saving goal unique Id |
| goalName | String | This is the specific saving goal name chosen by the user |
| goalAmount | [SavingGoalsData.Currency](#SavingGoalsData.Currency) |  |
| arrangementId | String (optional) | Arrangement id linked to the saving goal |
| progressPercentage | Number (optional) |  |
| amountProgress | [SavingGoalsData.Currency](#SavingGoalsData.Currency) (optional) |  |
| amountRemaining | [SavingGoalsData.Currency](#SavingGoalsData.Currency) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.Goal-LIST"></a>*SavingGoalsData.Goal-LIST*


**Type:** *Array of [SavingGoalsData.GoalGET](#SavingGoalsData.GoalGET)*


### <a name="SavingGoalsData.Goal-NOT-FOUND"></a>*SavingGoalsData.Goal-NOT-FOUND*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Any further information |
| errors | Array (optional) of [ErrorItem](#ErrorItem) | Detailed error information |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.Goal-POST"></a>*SavingGoalsData.Goal-POST*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| goalName | String | This is the specific saving goal name chosen by the user |
| goalAmount | [SavingGoalsData.Currency](#SavingGoalsData.Currency) |  |
| arrangementId | String | Arrangement id linked to the saving goal |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.Goal-UPDATE"></a>*SavingGoalsData.Goal-UPDATE*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| goalName | String | This is the specific saving goal name chosen by the user |
| goalAmount | [SavingGoalsData.Currency](#SavingGoalsData.Currency) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.GoalGET"></a>*SavingGoalsData.GoalGET*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Saving goal unique Id |
| goalName | String | This is the specific saving goal name chosen by the user |
| goalAmount | [SavingGoalsData.Currency](#SavingGoalsData.Currency) |  |
| arrangementId | String (optional) | Arrangement id linked to the saving goal |
| progressPercentage | Number (optional) |  |
| amountProgress | [SavingGoalsData.Currency](#SavingGoalsData.Currency) (optional) |  |
| amountRemaining | [SavingGoalsData.Currency](#SavingGoalsData.Currency) (optional) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="SavingGoalsData.GoalId"></a>*SavingGoalsData.GoalId*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Internally used unique identification |
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
