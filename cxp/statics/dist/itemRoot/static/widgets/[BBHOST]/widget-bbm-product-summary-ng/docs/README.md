# widget-bbm-product-summary-ng


Version: **1.17.0**

Product summary.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="ProductSummaryController as $ctrl">
   <ul>
      <li ng-repeat="product in ext.helpers.productKinds">{{product.id}}</li>
   </ul>
 </div>
```

## Table of Contents
- **ProductSummaryController**<br/>    <a href="#ProductSummaryController_$onInit">#$onInit()</a><br/>
- **ProductSummaryService**<br/>    <a href="#ProductSummaryService_loadProducts">#loadProducts(forceLoad)</a><br/>
- **Events**<br/>    <a href="#cxp.item.loaded">cxp.item.loaded</a><br/>    <a href="#bb.item.loaded">bb.item.loaded</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#ProductsResponse">ProductsResponse</a><br/>

---

## ProductSummaryController

ProductSummary widget controller

| Injector Key |
| :-- |
| *ProductSummaryController* |


### <a name="ProductSummaryController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically during the angular cycle.

---

## ProductSummaryService

The service encapsulates the core functionality of the Mobile Product summary
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-product-summary-ng:service* |


### <a name="ProductSummaryService_loadProducts"></a>*#loadProducts(forceLoad)*

Fetch products
update the [ViewState](#ViewState) to display them.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| forceLoad | Boolean |  |

##### Returns

Promise - **

---

## Events

### <a name="cxp.item.loaded"></a>*cxp.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |
### <a name="bb.item.loaded"></a>*bb.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |

---

## Type Definitions


### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| productKinds | Object |  |
| productKinds.loading | Boolean | Indicates wether products are loading at the moment. |
| productKinds.data | Array of [ProductKind](#ProductKind) | The collection of the productKinds. |
| productKinds.error | Object | The last encountered error. |

### <a name="ProductsResponse"></a>*ProductsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| productKinds | Array of Object | Loaded products array |
| total | Number | Total number of products |

---

## Templates

* *template.ng.html*

---
