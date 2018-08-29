# widget-bbm-product-details-ng


Version: **2.17.0**

Mobile product details widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
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
<div ng-controller="ProductDetailsFormController as $ctrl">
 </div>

 <div ng-controller="ProductDetailsViewController as $ctrl">
 </div>
```

## Table of Contents
- **ProductDetailsService**<br/>    <a href="#ProductDetailsService_updateProductAlias">#updateProductAlias(arrangement)</a><br/>    <a href="#ProductDetailsService_setProductAliasForm">#setProductAliasForm()</a><br/>    <a href="#ProductDetailsService_patchProductDetailsDataState">#patchProductDetailsDataState(productDetailsPatch)</a><br/>
- **Events**<br/>    <a href="#bb.event.productDetails.alias.edit.start">bb.event.productDetails.alias.edit.start</a><br/>    <a href="#bb.event.productDetails.alias.edit.done">bb.event.productDetails.alias.edit.done</a><br/>    <a href="#bb.event.productDetails.alias.edit.failed">bb.event.productDetails.alias.edit.failed</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>

---

## ProductDetailsFormController

Mobile Product details form controller.

| Injector Key |
| :-- |
| *ProductDetailsFormController* |


---

## ProductDetailsService

The service encapsulates the core functionality of the Mobile Product Details Widget.
It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-product-details-ng::service* |


### <a name="ProductDetailsService_updateProductAlias"></a>*#updateProductAlias(arrangement)*

Updates a product alias.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| arrangement | [ArrangementsData.ArrangementPatch](model-bb-product-summary-ng.html#ArrangementsData.ArrangementPatch) |  |

##### Returns

Promise - **

### <a name="ProductDetailsService_setProductAliasForm"></a>*#setProductAliasForm()*

Fills up the form with a product alias.

### <a name="ProductDetailsService_patchProductDetailsDataState"></a>*#patchProductDetailsDataState(productDetailsPatch)*

Patches the product details data state.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productDetailsPatch | Object |  |

---

## ProductDetailsViewController

Mobile Product details view controller.

| Injector Key |
| :-- |
| *ProductDetailsViewController* |


---

## Events

### <a name="bb.event.productDetails.alias.edit.start"></a>*bb.event.productDetails.alias.edit.start*

An updated product alias is submitted to the server

### <a name="bb.event.productDetails.alias.edit.done"></a>*bb.event.productDetails.alias.edit.done*

A product alias is updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangement | [ArrangementsData.ArrangementPatch](model-bb-product-summary-ng.html#ArrangementsData.ArrangementPatch) |  |
### <a name="bb.event.productDetails.alias.edit.failed"></a>*bb.event.productDetails.alias.edit.failed*

A product alias fails to be updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |

---

## Type Definitions


### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| productDetails | Object |  |
| productDetails.data | [ProductDetails](model-bb-product-summary-ng.html#ProductDetails) | product details. |
| productDetails.loading | Boolean | Indicates whether the product details is loading at the moment. |
| productDetails.error | Object | The last encountered error. |
| form | Object |  |
| form.data | Object | The form's data |
| from.data.alias | String | a product alias. |

---

## Templates

* *template.ng.html*

---
