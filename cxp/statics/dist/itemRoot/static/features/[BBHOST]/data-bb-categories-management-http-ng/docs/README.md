# data-bb-categories-management-http-ng


Version: **1.3.2**

A data module for accessing the Categories Management REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import categoriesManagementDataModuleKey, {
  categoriesManagementDataKey,
} from 'data-bb-categories-management-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#categoriesManagementDataKey">categoriesManagementDataKey</a><br/>
- **CategoriesManagementData**<br/>    <a href="#CategoriesManagementData_postCategoriesRecord">#postCategoriesRecord(data, headers)</a><br/>    <a href="#CategoriesManagementData_getCategories">#getCategories(params, headers)</a><br/>    <a href="#CategoriesManagementData_getCategoriesRecord">#getCategoriesRecord(id, params, headers)</a><br/>    <a href="#CategoriesManagementData_deleteCategoriesRecord">#deleteCategoriesRecord(id, params, headers)</a><br/>    <a href="#CategoriesManagementData_putCategoriesRecord">#putCategoriesRecord(id, data, headers)</a><br/>    <a href="#CategoriesManagementData_schemas">#schemas</a><br/>    <a href="#CategoriesManagementData_schemas.postCategoriesRecord">#schemas.postCategoriesRecord</a><br/>    <a href="#CategoriesManagementData_schemas.putCategoriesRecord">#schemas.putCategoriesRecord</a><br/>
- **CategoriesManagementDataProvider**<br/>    <a href="#CategoriesManagementDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#CategoriesManagementDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#CategoriesManagementData.Category-ITEM">CategoriesManagementData.Category-ITEM</a><br/>    <a href="#CategoriesManagementData.Category-LIST">CategoriesManagementData.Category-LIST</a><br/>    <a href="#CategoriesManagementData.Category-NOT-FOUND">CategoriesManagementData.Category-NOT-FOUND</a><br/>    <a href="#CategoriesManagementData.Category-UPDATE">CategoriesManagementData.Category-UPDATE</a><br/>    <a href="#CategoriesManagementData.CategoryITEM">CategoriesManagementData.CategoryITEM</a><br/>    <a href="#CategoriesManagementData.CategoryId">CategoriesManagementData.CategoryId</a><br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="categoriesManagementDataKey"></a>*categoriesManagementDataKey*

Angular dependency injection key for the CategoriesManagementData service

**Type:** *String*


---

## CategoriesManagementData

Public api for data-bb-categories-management-http-ng service

### <a name="CategoriesManagementData_postCategoriesRecord"></a>*#postCategoriesRecord(data, headers)*

Create categories

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | [CategoriesManagementData.Category-ITEM](#CategoriesManagementData.Category-ITEM) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [CategoriesManagementData.CategoryId](#CategoriesManagementData.CategoryId) on success*

## Example

```javascript
categoriesManagementData
 .postCategoriesRecord(data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="CategoriesManagementData_getCategories"></a>*#getCategories(params, headers)*

Retrieve list of categories

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object (optional) | Map of query parameters. |
| params.categoryType | String (optional) | Specific code of the group the category type belongs to this to be mapped to in integration. |
| params.level | String (optional) | category Level. (defaults to PARENTS) |
| params.parentId | String (optional) | Parent Category Id. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [CategoriesManagementData.Category-LIST](#CategoriesManagementData.Category-LIST) on success  or rejects with data of [CategoriesManagementData.Category-NOT-FOUND](#CategoriesManagementData.Category-NOT-FOUND) on error*

## Example

```javascript
categoriesManagementData
 .getCategories(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="CategoriesManagementData_getCategoriesRecord"></a>*#getCategoriesRecord(id, params, headers)*

Get category by Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object (optional) | Map of query parameters. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as [CategoriesManagementData.Category-ITEM](#CategoriesManagementData.Category-ITEM) on success  or rejects with data of [CategoriesManagementData.Category-NOT-FOUND](#CategoriesManagementData.Category-NOT-FOUND) on error*

## Example

```javascript
categoriesManagementData
 .getCategoriesRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="CategoriesManagementData_deleteCategoriesRecord"></a>*#deleteCategoriesRecord(id, params, headers)*

Delete category by Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| params | Object | Map of query parameters. |
| params.categoryId | String | Delete the selected category. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [CategoriesManagementData.Category-NOT-FOUND](#CategoriesManagementData.Category-NOT-FOUND) on error*

## Example

```javascript
categoriesManagementData
 .deleteCategoriesRecord(id, params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

### <a name="CategoriesManagementData_putCategoriesRecord"></a>*#putCategoriesRecord(id, data, headers)*

Update category by an Id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String |  |
| data | [CategoriesManagementData.Category-UPDATE](#CategoriesManagementData.Category-UPDATE) | Data to be sent as the request message data. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - *Resolves data value as void on success or rejects with data of [CategoriesManagementData.Category-NOT-FOUND](#CategoriesManagementData.Category-NOT-FOUND) on error*

## Example

```javascript
categoriesManagementData
 .putCategoriesRecord(id, data, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```
### <a name="CategoriesManagementData_schemas"></a>*#schemas*

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

### <a name="CategoriesManagementData_schemas.postCategoriesRecord"></a>*#schemas.postCategoriesRecord*

An object describing the JSON schema for the postCategoriesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "categoryId": {
      "type": "integer",
      "required": true
    },
    "transactionId": {
      "type": "string",
      "required": false
    },
    "categoryName": {
      "type": "string",
      "required": true
    },
    "iconLocation": {
      "type": "string",
      "required": false
    },
    "categoryType": {
      "type": "string",
      "required": true
    },
    "parentId": {
      "type": "integer",
      "required": false
    },
    "subCategories": {
      "type": "array",
      "items": {
        "properties": {
          "categoryId": {
            "type": "integer",
            "required": true
          },
          "transactionId": {
            "type": "string",
            "required": false
          },
          "categoryName": {
            "type": "string",
            "required": true
          },
          "iconLocation": {
            "type": "string",
            "required": false
          },
          "categoryType": {
            "type": "string",
            "required": true
          },
          "parentId": {
            "type": "integer",
            "required": false
          },
          "subCategories": {
            "type": "array",
            "items": {
              "properties": {}
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
}
```
### <a name="CategoriesManagementData_schemas.putCategoriesRecord"></a>*#schemas.putCategoriesRecord*

An object describing the JSON schema for the putCategoriesRecord method

**Type:** *Object*


## Example

```javascript
{
  "properties": {
    "categoryId": {
      "type": "integer",
      "required": true
    },
    "transactionId": {
      "type": "string",
      "required": false
    },
    "categoryName": {
      "type": "string",
      "required": true
    },
    "iconLocation": {
      "type": "string",
      "required": false
    },
    "categoryType": {
      "type": "string",
      "required": true
    },
    "parentId": {
      "type": "integer",
      "required": false
    },
    "subCategories": {
      "type": "array",
      "items": {
        "properties": {
          "categoryId": {
            "type": "integer",
            "required": true
          },
          "transactionId": {
            "type": "string",
            "required": false
          },
          "categoryName": {
            "type": "string",
            "required": true
          },
          "iconLocation": {
            "type": "string",
            "required": false
          },
          "categoryType": {
            "type": "string",
            "required": true
          },
          "parentId": {
            "type": "integer",
            "required": false
          },
          "subCategories": {
            "type": "array",
            "items": {
              "properties": {}
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
}
```

---

## CategoriesManagementDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-categories-management-http-ng:categoriesManagementDataProvider* |


### <a name="CategoriesManagementDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="CategoriesManagementDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-categories-management-http-ng:categoriesManagementDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-categories-management-http-ng:categoriesManagementDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="CategoriesManagementData.Category-ITEM"></a>*CategoriesManagementData.Category-ITEM*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categoryId | [Integer](#Integer) | Primary Key Internal Category Id |
| transactionId | String (optional) | Internal transaction category, to be used when updating a specific category |
| categoryName | String | backbase specific category names mapped from external category |
| iconLocation | String (optional) |  |
| categoryType | String | Specific code of the group the category type belongs to this to be mapped to in integration |
| parentId | [Integer](#Integer) (optional) | Parent category Id |
| subCategories | Array (optional) of [CategoriesManagementData.CategoryITEM](#CategoriesManagementData.CategoryITEM) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="CategoriesManagementData.Category-LIST"></a>*CategoriesManagementData.Category-LIST*


**Type:** *Array of [CategoriesManagementData.CategoryITEM](#CategoriesManagementData.CategoryITEM)*


### <a name="CategoriesManagementData.Category-NOT-FOUND"></a>*CategoriesManagementData.Category-NOT-FOUND*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Any further information |
| errors | Array (optional) of [ErrorItem](#ErrorItem) | Detailed error information |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="CategoriesManagementData.Category-UPDATE"></a>*CategoriesManagementData.Category-UPDATE*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categoryId | [Integer](#Integer) | Primary Key Internal Category Id |
| transactionId | String (optional) | Internal transaction category, to be used when updating a specific category |
| categoryName | String | backbase specific category names mapped from external category |
| iconLocation | String (optional) |  |
| categoryType | String | Specific code of the group the category type belongs to this to be mapped to in integration |
| parentId | [Integer](#Integer) (optional) | Parent category Id |
| subCategories | Array (optional) of [CategoriesManagementData.CategoryITEM](#CategoriesManagementData.CategoryITEM) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="CategoriesManagementData.CategoryITEM"></a>*CategoriesManagementData.CategoryITEM*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| categoryId | [Integer](#Integer) | Primary Key Internal Category Id |
| transactionId | String (optional) | Internal transaction category, to be used when updating a specific category |
| categoryName | String | backbase specific category names mapped from external category |
| iconLocation | String (optional) |  |
| categoryType | String | Specific code of the group the category type belongs to this to be mapped to in integration |
| parentId | [Integer](#Integer) (optional) | Parent category Id |
| subCategories | Array (optional) of [CategoryItem](#CategoryItem) |  |
| additions | Object (optional) | Container object for custom API extensions |

### <a name="CategoriesManagementData.CategoryId"></a>*CategoriesManagementData.CategoryId*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | [Integer](#Integer) | Internally used unique identification |
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
