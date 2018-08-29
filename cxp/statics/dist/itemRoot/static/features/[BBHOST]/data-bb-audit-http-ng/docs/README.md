# data-bb-audit-http-ng


Version: **2.1.0**

A data module for accessing the Audit REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import auditDataModuleKey, {
  auditDataKey,
} from 'data-bb-audit-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#auditDataKey">auditDataKey</a><br/>
- **AuditData**<br/>    <a href="#AuditData_postAuditMessagesRecord">#postAuditMessagesRecord(data, headers)</a><br/>    <a href="#AuditData_getAuditLogMessages">#getAuditLogMessages(params, headers)</a><br/>    <a href="#AuditData_getAuditLogEventCategories">#getAuditLogEventCategories(params, headers)</a><br/>    <a href="#AuditData_schemas">#schemas</a><br/>    <a href="#AuditData_schemas.postAuditMessagesRecord">#schemas.postAuditMessagesRecord</a><br/>
- **AuditDataProvider**<br/>    <a href="#AuditDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#AuditDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#AuditData.AuditLogGetResponseBody">AuditData.AuditLogGetResponseBody</a><br/>    <a href="#AuditData.AuditMessagesPostRequestBody">AuditData.AuditMessagesPostRequestBody</a><br/>    <a href="#AuditData.AuditMessagesPostResponseBody">AuditData.AuditMessagesPostResponseBody</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="auditDataKey"></a>*auditDataKey*

Angular dependency injection key for the AuditData service

**Type:** *String*


---

## AuditData

Public api for data-bb-audit-http-ng service

### <a name="AuditData_postAuditMessagesRecord"></a>*#postAuditMessagesRecord(data, headers)*

Create new audit log entry that contains one or more audit messages. Single string values that are longer than the
specified limits will be truncated.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [AuditData.AuditMessagesPostRequestBody](#AuditData.AuditMessagesPostRequestBody) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [AuditData.AuditMessagesPostResponseBody](#AuditData.AuditMessagesPostResponseBody) on success*

## Example

```javascript
auditData
 .postAuditMessagesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="AuditData_getAuditLogMessages"></a>*#getAuditLogMessages(params, headers)*

Get audit log messages in the system. Supports filtering and pagination of retrieved audit messages based on the provided filter and pagination parameters.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.startDate | String (optional) | Restrict results to audit logs with a timestamp of, or after, 00:00 on this date, UTC. Eg: 2017-06-28. |
| params.endDate | String (optional) | Restrict results to audit logs with a timestamp of, or before, 23:59 on this date, UTC. Eg: 2017-07-28. |
| params.eventCategories | String (optional) | Restrict results to audit logs with an event category matching any of the supplied event categories, comma separated list. Eg: Authentication,Payments. |
| params.objectType | String (optional) | Restrict results to audit logs with an event object type matching the supplied object type. Eg: Login. |
| params.eventAction | String (optional) | Restrict results to audit logs with an event action matching the supplied value. Eg: Success. |
| params.usernames | String (optional) | Restrict results to audit logs with a username matching any of the supplied usernames, comma separated list. Eg: User1,User2. |
| params.userId | String (optional) | Restrict results to audit logs with a user ID matching the supplied value. Eg: f8501d76-a86b-442a-a4da-43119ce5ecd4. |
| params.legalEntityIds | String (optional) | Restrict results to audit logs with a legalEntityId matching any of the supplied legalEntityIds, comma separated list. Eg: 04d6b7b6-bc28-4fbe-8aec-58f954348da2,87418545-59db-42e4-b671-e5cf8c341ed0. |
| params.serviceAgreementId | String (optional) | Restrict results to audit logs with a service agreement ID matching the supplied value. Eg: 87418545-59db-42e4-b671-e5cf8c341ed0. |
| params.from | Number (optional) | Page Number. Skip over pages of elements by specifying a start value for the query. Eg: 20. (defaults to 0) |
| params.size | Number (optional) | Limit the number of elements on the response. Eg: 80. (defaults to 25) |
| params.orderBy | String (optional) | Order by field: "eventCategory", "objectType", "eventAction", "username", "userId", "timestamp", "eventDescription", "legalEntityId", "serviceAgreementId", "messageSetId", "eventData.value". |
| params.direction | String (optional) | Direction. (defaults to DESC) |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [AuditData.AuditLogGetResponseBody](#AuditData.AuditLogGetResponseBody) on success*

## Example

```javascript
auditData
 .getAuditLogMessages(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="AuditData_getAuditLogEventCategories"></a>*#getAuditLogEventCategories(params, headers)*

Gets the distinct event categories, object types, and event actions.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
auditData
 .getAuditLogEventCategories(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="AuditData_schemas"></a>*#schemas*

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

### <a name="AuditData_schemas.postAuditMessagesRecord"></a>*#schemas.postAuditMessagesRecord*

An object describing the JSON schema for the postAuditMessagesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "auditMessages": {
      "type": "array",
      "items": {
        "properties": {
          "eventCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 35,
            "required": true
          },
          "objectType": {
            "type": "string",
            "minLength": 1,
            "maxLength": 35,
            "required": true
          },
          "eventAction": {
            "type": "string",
            "minLength": 1,
            "maxLength": 35,
            "required": true
          },
          "username": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "required": true
          },
          "userId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 36,
            "required": true
          },
          "timestamp": {
            "type": "string",
            "format": "date-time",
            "required": true
          },
          "eventDescription": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255,
            "required": true
          },
          "legalEntityId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 36,
            "required": false
          },
          "serviceAgreementId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 36,
            "required": false
          },
          "messageSetId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "required": false
          },
          "eventData": {
            "type": "array",
            "items": {
              "properties": {
                "key": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 255,
                  "required": true
                },
                "value": {
                  "type": "string",
                  "maxLength": 255,
                  "required": false
                }
              }
            },
            "maxItems": 50,
            "required": false
          }
        }
      },
      "minItems": 1,
      "maxItems": 50,
      "required": true
    }
  }
}
```

---

## AuditDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-audit-http-ng:auditDataProvider* |


### <a name="AuditDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="AuditDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-audit-http-ng:auditDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-audit-http-ng:auditDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="AuditData.AuditLogGetResponseBody"></a>*AuditData.AuditLogGetResponseBody*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| auditMessages | Array (optional) of [AuditMessage](#AuditMessage) |  |
| totalCount | Number (optional) | Total count of audit messages matching the query |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AuditData.AuditMessagesPostRequestBody"></a>*AuditData.AuditMessagesPostRequestBody*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| auditMessages | Array of [AuditMessage](#AuditMessage) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="AuditData.AuditMessagesPostResponseBody"></a>*AuditData.AuditMessagesPostResponseBody*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String (optional) | Any further information |
| warnings | Array of [ErrorItem](#ErrorItem) | Detailed field warnings/errors |
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
