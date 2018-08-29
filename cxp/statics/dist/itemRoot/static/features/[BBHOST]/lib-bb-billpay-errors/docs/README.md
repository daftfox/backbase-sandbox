# undefined


Version: **2.12.0**


## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_formInputHasError">#formInputHasError(inputName, form, forceValidate)</a><br/>    <a href="#Helpers_hasError">#hasError(inputName, errorMap, form, $filter, forceValidate)</a><br/>    <a href="#Helpers_hasErrorClass">#hasErrorClass(inputName, errorMap, form, $filter, forceValidate)</a><br/>    <a href="#Helpers_getError">#getError(inputName, errorMap, form, $filter, forceValidate)</a><br/>    <a href="#Helpers_clearBackendError">#clearBackendError(inputName, errorMap, clearFn)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_getErrorMap">#getErrorMap(errors)</a><br/>    <a href="#Hooks_transformErrorMap">#transformErrorMap(modelError)</a><br/>    <a href="#Hooks_clearBackendError">#clearBackendError(inputName, state)</a><br/>    <a href="#Hooks_addPaymentErrors">#addPaymentErrors(current, error)</a><br/>

---

## Helpers

Helpers for displaying errors

### <a name="Helpers_formInputHasError"></a>*#formInputHasError(inputName, form, forceValidate)*

check if field has error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | name of field |
| form | Object (optional) | angular form |
| forceValidate | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_hasError"></a>*#hasError(inputName, errorMap, form, $filter, forceValidate)*

Check if the field has form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| errorMap | Object |  |
| form | Object (optional) | angular form |
| $filter | Function |  |
| forceValidate | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_hasErrorClass"></a>*#hasErrorClass(inputName, errorMap, form, $filter, forceValidate)*

return class to indicate if field has error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| errorMap | Object |  |
| form | Object (optional) | angular form |
| $filter | Function |  |
| forceValidate | Boolean |  |

##### Returns

Object - **

### <a name="Helpers_getError"></a>*#getError(inputName, errorMap, form, $filter, forceValidate)*

get form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| errorMap | Object |  |
| form | Object (optional) | angular form |
| $filter | Function |  |
| forceValidate | Boolean |  |

##### Returns

String - **

### <a name="Helpers_clearBackendError"></a>*#clearBackendError(inputName, errorMap, clearFn)*

clear backend field and page error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| errorMap | Object |  |
| clearFn | Function |  |

---

## Hooks

Hooks for mapping errors

### <a name="Hooks_getErrorMap"></a>*#getErrorMap(errors)*

convert backend errors into a map keyed by field name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| errors | Array of [{key : string}](#{key : string}) |  |

##### Returns

Object of String, [{key : string}](#{key : string}) - **

### <a name="Hooks_transformErrorMap"></a>*#transformErrorMap(modelError)*

map backend errors into error object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modelError | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[{message : string](#{message : string), [errors : Array](#errors : Array) of [&lt;Object&gt;}](#&lt;Object&gt;}) - *mapped error*

### <a name="Hooks_clearBackendError"></a>*#clearBackendError(inputName, state)*

clear an error from the map of backend errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String |  |
| state | Object |  |
| state.errorMap | Object |  |

##### Returns

Object - **

### <a name="Hooks_addPaymentErrors"></a>*#addPaymentErrors(current, error)*

Add any backend errors onto matching payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | Object |  |
| current.paymentsSummary.payments | Array of [module.model-bb-billpay-ng.Payment](#module.model-bb-billpay-ng.Payment) |  |
| error | Object |  |

##### Returns

Array of [module.model-bb-billpay-ng.Payment](#module.model-bb-billpay-ng.Payment) - *Array of transformed payments*
