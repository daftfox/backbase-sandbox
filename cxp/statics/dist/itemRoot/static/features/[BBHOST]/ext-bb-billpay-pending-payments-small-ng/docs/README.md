# ext-bb-billpay-pending-payments-ng


Version: **2.11.0**

Default extension for widget-bb-billpay-view-payments-ng

## Imports

* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown
* vendor-bb-uib-tooltip

---

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_template">#template()</a><br/>    <a href="#Helpers_getCurrencyCode">#getCurrencyCode()</a><br/>    <a href="#Helpers_paymentsTableHeader">#paymentsTableHeader</a><br/>    <a href="#Helpers_editPayment">#editPayment(intents, payment)</a><br/>    <a href="#Helpers_deletePayment">#deletePayment($ctrl, payment)</a><br/>    <a href="#Helpers_getLoadingErrorMessageKey">#getLoadingErrorMessageKey(state)</a><br/>    <a href="#Helpers_isEditPaymentDisabled">#isEditPaymentDisabled(payment)</a><br/>    <a href="#Helpers_isDeletePaymentDisabled">#isDeletePaymentDisabled(payment)</a><br/>    <a href="#Helpers_editPaymentTooltip">#editPaymentTooltip(payment)</a><br/>    <a href="#Helpers_deletePaymentTooltip">#deletePaymentTooltip(payment)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_transformPayment">#transformPayment(payment)</a><br/>

---

## Helpers


### <a name="Helpers_template"></a>*#template()*

returns a string of the template matching the current route

##### Returns

String - **

### <a name="Helpers_getCurrencyCode"></a>*#getCurrencyCode()*

get the currency code from service

##### Returns

String - **
### <a name="Helpers_paymentsTableHeader"></a>*#paymentsTableHeader*

list of header label translation keys for payments table

**Type:** *Array of String*


### <a name="Helpers_editPayment"></a>*#editPayment(intents, payment)*

Either fire the intent to edit the single payment or do nothing to a recurring
  payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| intents | Object | Available intents functions |
| payment | Object |  |

### <a name="Helpers_deletePayment"></a>*#deletePayment($ctrl, payment)*

Either fire the intent to edit the single payment or do nothing to a recurring
  payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | [{openDeleteDialog}](#{openDeleteDialog}) |  |
| payment | Object |  |

### <a name="Helpers_getLoadingErrorMessageKey"></a>*#getLoadingErrorMessageKey(state)*

get any error message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | [ViewState](#ViewState) |  |
| state.error | Object |  |

##### Returns

String - *message from error or empty string*

### <a name="Helpers_isEditPaymentDisabled"></a>*#isEditPaymentDisabled(payment)*

Disable editing of payments that are recurring or not pending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| payment.status | String |  |
| payment.recurring | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_isDeletePaymentDisabled"></a>*#isDeletePaymentDisabled(payment)*

Disable deleting of payments that are not pending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| payment.status | String |  |

##### Returns

Boolean - **

### <a name="Helpers_editPaymentTooltip"></a>*#editPaymentTooltip(payment)*

Tooltip key when not allowed to edit a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| payment.recurring | Boolean |  |

##### Returns

String - *- tooltip key*

### <a name="Helpers_deletePaymentTooltip"></a>*#deletePaymentTooltip(payment)*

Tooltip key when not allowed to delete a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| payment.recurring | Boolean |  |

##### Returns

String - *- tooltip key*

---

## Hooks

Hooks for widget-bb-billpay-view-payments-ng

### <a name="Hooks_transformPayment"></a>*#transformPayment(payment)*

Perform any transformations required to prepare the Payment item for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](model-bb-billpay-ng.html#Payment) |  |

##### Returns

Object - *transformed payment*

---
