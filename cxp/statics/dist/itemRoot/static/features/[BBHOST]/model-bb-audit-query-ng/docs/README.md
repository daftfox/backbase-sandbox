# model-bb-audit-query-ng


Version: **3.15.0**

Model for widget-bb-audit-query-ng

## Imports

* data-bb-accessgroups-http-ng
* data-bb-audit-http-ng
* data-bb-legalentity-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelAuditQueryModuleKey, { modelAuditQueryKey } from 'model-bb-audit-query-ng';

angular
  .module('ExampleModule', [
    modelAuditQueryModuleKey,
  ])
  .factory('someFactory', [
    modelAuditQueryKey,
    // into
    function someFactory(auditQueryModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **AccessGroupsModel**<br/>    <a href="#AccessGroupsModel_searchServiceAgreements">#searchServiceAgreements(query)</a><br/>
- **AuditQueryModel**<br/>    <a href="#AuditQueryModel_getAuditLogMessages">#getAuditLogMessages(parms)</a><br/>    <a href="#AuditQueryModel_getAuditLogEventCategories">#getAuditLogEventCategories()</a><br/>
- **LegalEntitiesModel**<br/>    <a href="#LegalEntitiesModel_searchLegalEntities">#searchLegalEntities(query)</a><br/>
- **Type Definitions**<br/>    <a href="#QueryParameters">QueryParameters</a><br/>    <a href="#MappedQueryParameters">MappedQueryParameters</a><br/>    <a href="#AuditResponse">AuditResponse</a><br/>    <a href="#EventData">EventData</a><br/>    <a href="#AuditEventCategoryResponse">AuditEventCategoryResponse</a><br/>    <a href="#EventCategory">EventCategory</a><br/>    <a href="#EventCategoryObjectType">EventCategoryObjectType</a><br/>    <a href="#AuditMessage">AuditMessage</a><br/>

---

## AccessGroupsModel

Access Groups model service

### <a name="AccessGroupsModel_searchServiceAgreements"></a>*#searchServiceAgreements(query)*

Get a list of service agreements based on query param

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String |  |

##### Returns

Promise of Object, [ModelError](#ModelError) - **

---

## AuditQueryModel

Audit Query model service

### <a name="AuditQueryModel_getAuditLogMessages"></a>*#getAuditLogMessages(parms)*

Get the response of a list of audit query messages and the header information

| Parameter | Type | Description |
| :-- | :-- | :-- |
| parms | [QueryParameters](#QueryParameters) | raw parameters. |

##### Returns

Promise of [AuditResponse](#AuditResponse), [ModelError](#ModelError) - **

### <a name="AuditQueryModel_getAuditLogEventCategories"></a>*#getAuditLogEventCategories()*

Get the response of a list of event Categories
  with nested types and statuses

##### Returns

Promise of [AuditEventCategoryResponse](#AuditEventCategoryResponse), [ModelError](#ModelError) - **

---

## LegalEntitiesModel

Legal Entities model service

### <a name="LegalEntitiesModel_searchLegalEntities"></a>*#searchLegalEntities(query)*

Get a list of legal entities based on query param

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String |  |

##### Returns

Promise of Object, [ModelError](#ModelError) - **

## Type Definitions


### <a name="QueryParameters"></a>*QueryParameters*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| startDate | String (optional) | in format YYYY-MM-DD |
| endDate | String (optional) | in format YYYY-MM-DD |
| eventCategories | Array of String (optional) | to filter by |
| objectType | String (optional) | to filter by |
| eventAction | String (optional) | to filter by |
| usernames | Array of String (optional) | to filter by |
| userId | String (optional) | to filter by |
| legalEntityIds | Array of String (optional) | to filter by |
| serviceAgreementId | String (optional) | to filter by |

### <a name="MappedQueryParameters"></a>*MappedQueryParameters*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| startDate | String (optional) | in format YYYY-MM-DD |
| endDate | String (optional) | in format YYYY-MM-DD |
| eventCategories | String (optional) | comma separated list to filter by |
| objectType | String (optional) | to filter by |
| eventAction | String (optional) | to filter by |
| usernames | String (optional) | comma separated list to filter by |
| userId | String (optional) | to filter by |
| legalEntityIds | String (optional) | comma separated list to filter by |
| serviceAgreementId | String (optional) | to filter by |

### <a name="AuditResponse"></a>*AuditResponse*

Audit Response type definition - header total count and data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| totalCount | Number |  |
| auditMessages | Array of [AuditMessage](data-bb-audit-query-http-ng.html#AuditMessage) |  |

### <a name="EventData"></a>*EventData*

Event Data type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| key | String | key |
| value | String | value |

### <a name="AuditEventCategoryResponse"></a>*AuditEventCategoryResponse*

Audit Response type definition - header total count and data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| eventCategories | Array of [EventCategory](#EventCategory) |  |

### <a name="EventCategory"></a>*EventCategory*

Audit event category type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| eventCategory | String | name of the event category |
| objectTypes | Array of [EventCategoryObjectType](#EventCategoryObjectType) | object types |

### <a name="EventCategoryObjectType"></a>*EventCategoryObjectType*

Audit event category type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| objectType | String | name of object type |
| eventActions | Array of String | event actions |

### <a name="AuditMessage"></a>*AuditMessage*

Audit Log type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| messageSetId | String | id of the message set |
| eventCategory | String | event category |
| objectType | String | object type |
| eventAction | String | event action |
| username | String | user name |
| userId | String | user id |
| timestamp | String | time stamp |
| eventDescription | String | event description |
| legalEntityId | String | legal entity id |
| serviceAgreementId | String | service agreement id |
| eventData | Array of [EventData](#EventData) | event data collection |

---
