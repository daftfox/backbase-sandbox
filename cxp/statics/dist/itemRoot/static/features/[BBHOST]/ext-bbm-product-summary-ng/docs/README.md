# ext-bbm-product-summary-ng


Version: **2.0.36**

Mobile extension for the product summary widget.

NOTE: Starting from version 2.0.0 this extension (ext-bbm-product-summary-ng)
is only compatible with widget-bbm-product-summary-ng (mobile widget).
Please use version 1.x.x if you are using widget-bb-product-summary-ng.

## Imports

* ui-bb-i18n-ng
* ui-bbm-product-kind-table-view-ng

---

## Example

```javascript
<!-- product summary widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-product-summary-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_selectProduct">#selectProduct(processedProduct)</a><br/>    <a href="#Helpers_productKinds">#productKinds()</a><br/>    <a href="#Helpers_hasProducts">#hasProducts()</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>
- **Intents**<br/>    <a href="#Intents_showTransactions">#showTransactions()</a><br/>    <a href="#Intents_showProductSummary">#showProductSummary()</a><br/>
- **ext-bbm-product-summary-ng**<br/>    <a href="#ext-bbm-product-summary-ngproductNameAsc">productNameAsc(productA, productB)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKindView">ProductKindView</a><br/>    <a href="#ProductView">ProductView</a><br/>

---

## Helpers

Helpers for ext-bbm-product-summary-ng.

### <a name="Helpers_selectProduct"></a>*#selectProduct(processedProduct)*

Sets the alternate workflow when a user selects a Product from the overview.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| processedProduct | Object |  |

### <a name="Helpers_productKinds"></a>*#productKinds()*

The list of the processed product kinds.

##### Returns

Array of Object - **

### <a name="Helpers_hasProducts"></a>*#hasProducts()*

Checks whether the list is empty.

##### Returns

Boolean - *false if product list is empty.*

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for the loading state.

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState()*

Checks if there are no products.

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Checks for the error state.

##### Returns

Boolean - **

---

## Intents


### <a name="Intents_showTransactions"></a>*#showTransactions()*

The intent to show the transactions.

### <a name="Intents_showProductSummary"></a>*#showProductSummary()*

Handler of the 'intent.bb.product.summary.show' intent.

---

### <a name="ext-bbm-product-summary-ngproductNameAsc"></a>*productNameAsc(productA, productB)*

Sort products alphabetically by name, ascending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productA | Object |  |
| productB | Object |  |

##### Returns

[('-1'](#('-1') or ['0'](#'0') or ['1')](#'1')) - *result*

## Type Definitions


### <a name="ProductKindView"></a>*ProductKindView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The Product Kind identifier |
| name | String | The name of the Kind, suitable for display to users |
| products | Array of [ProductView](#ProductView) | The products of this Kind |

### <a name="ProductView"></a>*ProductView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| primaryValue | String (optional) | The most important associated value to be displayed |
| secondaryValue | String (optional) | A secondary associated value to be displayed |
| secondaryLabel | String (optional) | A label to describe the secondary value |
| tertiaryValue | String (optional) | A tertiary associated value to be displayed |
| tertiaryLabel | String (optional) | A label to describe the tertiary value |
| currency | String (optional) | ISO currency code |

---
