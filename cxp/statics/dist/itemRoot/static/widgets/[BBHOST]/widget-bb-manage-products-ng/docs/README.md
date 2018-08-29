# widget-bb-manage-products-ng


Version: **1.21.0**

Manage products

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-product-summary-ng
* vendor-bb-angular

---

## Table of Contents
- **widget-bb-manage-products-ng**<br/>    <a href="#widget-bb-manage-products-ngDEFAULT_DISMISS_TIME">DEFAULT_DISMISS_TIME</a><br/>    <a href="#widget-bb-manage-products-ngUPDATED_PRODUCT_SUCCESS_KEY">UPDATED_PRODUCT_SUCCESS_KEY</a><br/>    <a href="#widget-bb-manage-products-ngUPDATED_PRODUCT_ERROR_KEY">UPDATED_PRODUCT_ERROR_KEY</a><br/>    <a href="#widget-bb-manage-products-ngManageProductsController">ManageProductsController()</a><br/>    <a href="#widget-bb-manage-products-ngprocessKinds">processKinds(productKinds)</a><br/>
- **MessageHandler**<br/>    <a href="#MessageHandler_DataManageProductsErrorMessage">#DataManageProductsErrorMessage</a><br/>    <a href="#MessageHandler_dataManageProductsErrorMessage">#dataManageProductsErrorMessage(modelError)</a><br/>

---

## errorMessages

Error messages keys for connectivity, user, auth and unexpected errors.

---
### <a name="widget-bb-manage-products-ngDEFAULT_DISMISS_TIME"></a>*DEFAULT_DISMISS_TIME*

Default notification dismiss time.

**Type:** *Number*


---
### <a name="widget-bb-manage-products-ngUPDATED_PRODUCT_SUCCESS_KEY"></a>*UPDATED_PRODUCT_SUCCESS_KEY*

Key string for notification success message

**Type:** *String*


---
### <a name="widget-bb-manage-products-ngUPDATED_PRODUCT_ERROR_KEY"></a>*UPDATED_PRODUCT_ERROR_KEY*

Key string for notification error message

**Type:** *String*


---

### <a name="widget-bb-manage-products-ngManageProductsController"></a>*ManageProductsController()*

Manage products widget controller

---

## Hooks

Hooks for widget-bb-manage-products-ng

---

### <a name="widget-bb-manage-products-ngprocessKinds"></a>*processKinds(productKinds)*

Hook for processing productKinds.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| productKinds | Array of [ProductKind](model-bb-product-summary-ng.html#ProductKind) | ProductKinds to process |

##### Returns

Array of [ProductKind](model-bb-product-summary-ng.html#ProductKind) - *Processed  productKinds*

---

## MessageHandler

list of message handlers
### <a name="MessageHandler_DataManageProductsErrorMessage"></a>*#DataManageProductsErrorMessage*

Object for mapping errors used in extension

**Type:** *Object*


### <a name="MessageHandler_dataManageProductsErrorMessage"></a>*#dataManageProductsErrorMessage(modelError)*

Create error message array for update product
Checks if message has one or more then one error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modelError | [ModelError](#ModelError) | response error object |

##### Returns

[MessageArray](#MessageArray) - *message array*

## Templates

* *template.ng.html*

---
