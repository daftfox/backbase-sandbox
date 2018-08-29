# ext-bb-billpay-edit-payment-ng


Version: **8.12.0**

extension for widget-bb-billpay-manage-payment-ng

## Imports

* ui-bb-confirm-ng
* ui-bb-currency-input-ng
* ui-bb-dropdown-select-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-number-input-ng
* ui-bb-stepper-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-datepicker
* vendor-bb-uib-datepicker-popup

---

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getCurrencyCode">#getCurrencyCode()</a><br/>    <a href="#Helpers_rushFee">#rushFee(payee)</a><br/>    <a href="#Helpers_totalPaymentAmount">#totalPaymentAmount(payee)</a><br/>    <a href="#Helpers_stepperLabels">#stepperLabels</a><br/>    <a href="#Helpers_accountNameAndNumber">#accountNameAndNumber(account)</a><br/>    <a href="#Helpers_allowNextStep">#allowNextStep(ctrl, state)</a><br/>    <a href="#Helpers_allowPreviousStep">#allowPreviousStep(state)</a><br/>    <a href="#Helpers_onFinish">#onFinish($ctrl)</a><br/>    <a href="#Helpers_reviewTitle">#reviewTitle(payee)</a><br/>    <a href="#Helpers_navigateForCancel">#navigateForCancel(returnToPreviousScreen)</a><br/>    <a href="#Helpers_isLoading">#isLoading(state)</a><br/>    <a href="#Helpers_paymentSelected">#paymentSelected(state)</a><br/>    <a href="#Helpers_getLoadingErrorMessageKey">#getLoadingErrorMessageKey(state)</a><br/>    <a href="#Helpers_hasLoadingError">#hasLoadingError(state)</a><br/>    <a href="#Helpers_getLoadingErrorKey">#getLoadingErrorKey(type)</a><br/>    <a href="#Helpers_getLoadingErrorClass">#getLoadingErrorClass(state)</a><br/>    <a href="#Helpers_formInputHasError">#formInputHasError(inputName, state, form)</a><br/>    <a href="#Helpers_hasError">#hasError(inputName, state, form)</a><br/>    <a href="#Helpers_hasErrorClass">#hasErrorClass(inputName, state, form)</a><br/>    <a href="#Helpers_getError">#getError(inputName, state, form)</a><br/>    <a href="#Helpers_clearBackendError">#clearBackendError($ctrl, inputName, state)</a><br/>    <a href="#Helpers_clearBackendErrorAccountField">#clearBackendErrorAccountField($ctrl, inputName, state)</a><br/>    <a href="#Helpers_clearBackendErrorAmountField">#clearBackendErrorAmountField($ctrl, inputName, state)</a><br/>    <a href="#Helpers_generalErrorMessages">#generalErrorMessages</a><br/>    <a href="#Helpers_unrecoverableErrorMessages">#unrecoverableErrorMessages</a><br/>    <a href="#Helpers_unrecoverablePageErrorExists">#unrecoverablePageErrorExists(state)</a><br/>    <a href="#Helpers_unrecoverableErrorsExist">#unrecoverableErrorsExist(state)</a><br/>    <a href="#Helpers_errorsExist">#errorsExist(state)</a><br/>    <a href="#Helpers_showRushNoticeForPayee">#showRushNoticeForPayee(payee)</a><br/>    <a href="#Helpers_showRushNoticeForPayment">#showRushNoticeForPayment(payee)</a><br/>    <a href="#Helpers_currencyInputLabels">#currencyInputLabels</a><br/>
- **ext-bb-billpay-edit-payment-ng**<br/>    <a href="#ext-bb-billpay-edit-payment-ngopenCancelConfirmationModal">openCancelConfirmationModal(holder)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_setState">#setState(current)</a><br/>

---

## Helpers


### <a name="Helpers_getCurrencyCode"></a>*#getCurrencyCode()*

get the currency code from service

##### Returns

String - **

### <a name="Helpers_rushFee"></a>*#rushFee(payee)*

return paymentFee from payment object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| payee.paymentServicesObj | Object |  |

##### Returns

Number or Undefined - **

### <a name="Helpers_totalPaymentAmount"></a>*#totalPaymentAmount(payee)*

return the total payment amount, with rush included if selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| payee.newPayment | Object |  |
| payee.paymentServicesObj | Object |  |

##### Returns

Number - **
### <a name="Helpers_stepperLabels"></a>*#stepperLabels*

Internationalised strings for the stepper buttons

**Type:** *Object*


### <a name="Helpers_accountNameAndNumber"></a>*#accountNameAndNumber(account)*

return the account nickname & blurred acc number, else just a blurred acc number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [PaymentAccount](model-bb-billpay-ng.html#PaymentAccount) |  |

##### Returns

String - **

### <a name="Helpers_allowNextStep"></a>*#allowNextStep(ctrl, state)*

allow move to next step if control data valid

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [EditPaymentController](widget-bb-billpay-manage-payment-ng.html#EditPaymentController) |  |
| ctrl.payee | Object | payee control data |
| state | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_allowPreviousStep"></a>*#allowPreviousStep(state)*

allow move to previous step if no unrecoverable errors exist

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_onFinish"></a>*#onFinish($ctrl)*

save changes and call intent if successful

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | The control state |
| $ctrl.returnToPreviousScreen | Function | The function to call to navigate |
| $ctrl.payee | Object |  |
| $ctrl.payee.newPayment | Object | data to save |

##### Returns

Promise of [void](#void) - **

### <a name="Helpers_reviewTitle"></a>*#reviewTitle(payee)*

Return the title i18ned string with the account the payment is coming from

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| payee.newPayment | Object |  |

##### Returns

String - **

### <a name="Helpers_navigateForCancel"></a>*#navigateForCancel(returnToPreviousScreen)*

Navigate back to the previous screen with a 'cancelled' status payload

| Parameter | Type | Description |
| :-- | :-- | :-- |
| returnToPreviousScreen | Function |  |

##### Returns

[void](#void) - **

### <a name="Helpers_isLoading"></a>*#isLoading(state)*

Return true if any of the endpoints are loading

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.isLoadingAccounts | Boolean |  |
| state.isLoadingPayees | Boolean |  |
| state.isLoadingPayment | Boolean |  |
| state.isPuttingPayment | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_paymentSelected"></a>*#paymentSelected(state)*

Return true if the widget has been initialised with an id

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.isLoadingPayment | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_getLoadingErrorMessageKey"></a>*#getLoadingErrorMessageKey(state)*

get any error message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.error | Object |  |
| state.isLoadingPayees | Boolean |  |
| state.payees | Array of [any](#any) |  |

##### Returns

String - *message from error*

### <a name="Helpers_hasLoadingError"></a>*#hasLoadingError(state)*

return true if no accounts and accounts are loaded

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.accounts | Array of [any](#any) |  |
| state.isLoadingAccounts | Boolean |  |

##### Returns

Boolean - **

### <a name="Helpers_getLoadingErrorKey"></a>*#getLoadingErrorKey(type)*

return error message key for input type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | String | input type |

##### Returns

String - *error key*

### <a name="Helpers_getLoadingErrorClass"></a>*#getLoadingErrorClass(state)*

return error class if hasLoadingError is true

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |

##### Returns

[{'has-error':boolean}](#{'has-error':boolean}) - *object with error class indicator*

### <a name="Helpers_formInputHasError"></a>*#formInputHasError(inputName, state, form)*

Check if the input is invalid

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | The name of the form input |
| state | Object |  |
| form | Object | Form that is being submitted |

##### Returns

Boolean - **

### <a name="Helpers_hasError"></a>*#hasError(inputName, state, form)*

Check if the field has form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| state | Object | current view state |
| form | Object | angular form |

##### Returns

Boolean - **

### <a name="Helpers_hasErrorClass"></a>*#hasErrorClass(inputName, state, form)*

return class to indicate if field has error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| state | Object | current view state |
| form | Object | angular form |

##### Returns

Object - **

### <a name="Helpers_getError"></a>*#getError(inputName, state, form)*

get form or backend error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | field name |
| state | Object | current view state |
| form | Object | angular form |

##### Returns

String - **

### <a name="Helpers_clearBackendError"></a>*#clearBackendError($ctrl, inputName, state)*

clear backend field and page error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |
| inputName | String | field name |
| state | Object | current view state |
| state.errorMap | Object |  |

### <a name="Helpers_clearBackendErrorAccountField"></a>*#clearBackendErrorAccountField($ctrl, inputName, state)*

Clear backend field and page error.
  Special case for the account field as the change event fires on when it loads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |
| inputName | String | field name |
| state | Object | current view state |
| state.errorMap | Object |  |

### <a name="Helpers_clearBackendErrorAmountField"></a>*#clearBackendErrorAmountField($ctrl, inputName, state)*

Clear backend field and page error.
  Special case for the amount field as the change event fires on when it loads

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Control state |
| inputName | String | field name |
| state | Object | current view state |
| state.errorMap | Object |  |
### <a name="Helpers_generalErrorMessages"></a>*#generalErrorMessages*

keys for general error messages for payments, not related to specific fields

**Type:** *Object*

### <a name="Helpers_unrecoverableErrorMessages"></a>*#unrecoverableErrorMessages*

keys for unrecoverable error messages for payments, not related to specific
  fields

**Type:** *Object*


### <a name="Helpers_unrecoverablePageErrorExists"></a>*#unrecoverablePageErrorExists(state)*

return true if there is a page error and it has unrecoverable
  set to true

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.errorMap | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_unrecoverableErrorsExist"></a>*#unrecoverableErrorsExist(state)*

return true if there are unrecoverable errors in the error map

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.errorMap | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_errorsExist"></a>*#errorsExist(state)*

return true if there are any errors in the error map

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| state.errorMap | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_showRushNoticeForPayee"></a>*#showRushNoticeForPayee(payee)*

Decide whether to show the rush notices for this payee (regardless of whether it
  is in use or not). Decide whether or not to show waived fees based on the widget preference

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| payee.paymentServicesObj | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_showRushNoticeForPayment"></a>*#showRushNoticeForPayment(payee)*

Decide to show the rush notice on the payment based on whether it has been used.
  If it has (and has a fee of 0) then decide based on whether the widget preferences are set
  to show it

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | Object |  |
| payee.newPayment | Object |  |
| payee.newPayment.paymentDate | Date |  |
| payee.paymentServicesObj | Object |  |

##### Returns

Boolean - **
### <a name="Helpers_currencyInputLabels"></a>*#currencyInputLabels*

Internationalised strings for the currency input control

**Type:** *Object*


---

### <a name="ext-bb-billpay-edit-payment-ngopenCancelConfirmationModal"></a>*openCancelConfirmationModal(holder)*

Change the control state to show the cancel modal

| Parameter | Type | Description |
| :-- | :-- | :-- |
| holder | [{cancelConfirm}](#{cancelConfirm}) |  |

---

## Hooks

Hooks for widget-bb-billpay-manage-payment-ng

### <a name="Hooks_setState"></a>*#setState(current)*

add any state required by extension

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*
