# ext-bbm-product-details-form-ng


Version: **2.17.0**

Mobile extension for the product details form in the Mobile Product Details widget.

## Imports

* ui-bb-i18n-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- Mobile Product Details Widget widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-product-details-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getProductDetails">#getProductDetails()</a><br/>    <a href="#Helpers_getFormData">#getFormData()</a><br/>    <a href="#Helpers_isFormValid">#isFormValid(form)</a><br/>    <a href="#Helpers_updateProductAlias">#updateProductAlias()</a><br/>
- **Intents**<br/>    <a href="#Intents_showProductDetailsView">#showProductDetailsView()</a><br/>    <a href="#Intents_showProductAliasForm">#showProductAliasForm()</a><br/>

---

## Helpers

Helpers for ext-bbm-product-details-form-ng

### <a name="Helpers_getProductDetails"></a>*#getProductDetails()*

Returns product details data.

##### Returns

Object - **

### <a name="Helpers_getFormData"></a>*#getFormData()*

Retrieves form data.

##### Returns

Object - **

### <a name="Helpers_isFormValid"></a>*#isFormValid(form)*

Helper to get the form validation status.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object |  |

##### Returns

Boolean - *validation status.*

### <a name="Helpers_updateProductAlias"></a>*#updateProductAlias()*

Helper to update a product alias.

##### Returns

Promise - **

---

## Intents


### <a name="Intents_showProductDetailsView"></a>*#showProductDetailsView()*

The intent to show the product details view.

### <a name="Intents_showProductAliasForm"></a>*#showProductAliasForm()*

Handler of the 'intent.bb.productDetails.alias.edit' intent.
