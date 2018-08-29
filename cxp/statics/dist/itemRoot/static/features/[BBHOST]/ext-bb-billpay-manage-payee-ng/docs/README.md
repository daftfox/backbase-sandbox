# ext-bb-billpay-manage-payee-ng


Version: **9.11.0**

Default extension for widget-bb-billpay-manage-payee-ng

## Imports

* ui-bb-autocomplete-search-ng
* ui-bb-confirm-ng
* ui-bb-dropdown-select-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-phone-mask-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **Hooks**<br/>    <a href="#Hooks_afterPayeeSelected">#afterPayeeSelected(current)</a><br/>    <a href="#Hooks_transformPayee">#transformPayee(data)</a><br/>    <a href="#Hooks_transformPendingPayments">#transformPendingPayments(pendingPayments)</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>

---

---

## Hooks

Hooks for widget-bb-billpay-manage-payee-ng

### <a name="Hooks_afterPayeeSelected"></a>*#afterPayeeSelected(current)*

Hook for processing the state after selecting a payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_transformPayee"></a>*#transformPayee(data)*

Perform any transformations required to prepare the payee data for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Response data from creating payee |
| data.payee | Object | payee data |

##### Returns

Object - *transformed payee data*

### <a name="Hooks_transformPendingPayments"></a>*#transformPendingPayments(pendingPayments)*

Perform any transformations required to prepare the
  pending payments data for display

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pendingPayments | Array | Response data from creating payee |

##### Returns

Object - *transformed pending payments data*

## Type Definitions


### <a name="ViewState"></a>*ViewState*


**Type:** *Object*


---
