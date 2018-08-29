# data-bb-places-http-ng


Version: **1.2.0**

A data module for accessing the Places REST API.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import placesDataModuleKey, {
  placesDataKey,
} from 'data-bb-places-http-ng';
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#placesDataKey">placesDataKey</a><br/>
- **PlacesData**<br/>    <a href="#PlacesData_getPlaces">#getPlaces(params, headers)</a><br/>
- **PlacesDataProvider**<br/>    <a href="#PlacesDataProvider_setBaseUri">#setBaseUri(baseUri)</a><br/>    <a href="#PlacesDataProvider_$get">#$get()</a><br/>
- **Type Definitions**<br/>    <a href="#Response">Response</a><br/>

## Exports

### <a name="default"></a>*default*

Angular dependency injection module key

**Type:** *String*

### <a name="placesDataKey"></a>*placesDataKey*

Angular dependency injection key for the PlacesData service

**Type:** *String*


---

## PlacesData

Public api for data-bb-places-http-ng service

### <a name="PlacesData_getPlaces"></a>*#getPlaces(params, headers)*

Retrieve list of all places.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Map of query parameters. |
| params.latitude | Number | Latitude for current location. Should be used with longitude and radius params to return places available in specified radius. Eg: 40.71558. |
| params.longitude | Number | Longitude for current location. Should be used with latitude and radius params to return places available in specified radius. Eg: 39.91558. |
| params.radius | Number | Search radius (distance in KM). Eg: 2.232. |
| headers | Object (optional) | Map of custom header attributes. |

##### Returns

Promise of [Response](#Response) - **

## Example

```javascript
placesData
 .getPlaces(params, headers)
 .then(function(result){
   console.log('headers', result.headers)
   console.log('data', result.data);
 });
```

---

## PlacesDataProvider

Data service that can be configured with custom base URI.

| Injector Key |
| :-- |
| *data-bb-places-http-ng:placesDataProvider* |


### <a name="PlacesDataProvider_setBaseUri"></a>*#setBaseUri(baseUri)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| baseUri | String | Base URI which will be the prefix for all HTTP requests |

### <a name="PlacesDataProvider_$get"></a>*#$get()*


##### Returns

Object - *An instance of the service*

## Example

```javascript
// Configuring in an angular app:
angular.module(...)
  .config(['data-bb-places-http-ng:placesDataProvider',
    (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
      });

// Configuring With config-bb-providers-ng:
export default [
  ['data-bb-places-http-ng:placesDataProvider', (dataProvider) => {
      dataProvider.setBaseUri('http://my-service.com/');
  }]
];
```

## Type Definitions


### <a name="Response"></a>*Response*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Object | See method descriptions for possible return types |
| headers | Function | Getter headers function |
| status | Number | HTTP status code of the response. |
| statusText | String | HTTP status text of the response. |

---
