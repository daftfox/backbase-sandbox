# ext-bus-manage-payment-orders-ng


Version: **3.36.20**

Payment order overview extension.

## Imports

* lib-bb-iban
* ui-bb-autocomplete-search-ng
* ui-bb-calendar-popup-ng
* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-filter-form-actions-ng
* ui-bb-highlight-text-ng
* ui-bb-i18n-ng
* ui-bb-indeterminate-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-format-amount-ng
* ui-bus-payment-order-details-ng
* vendor-bb-angular
* vendor-bb-angular-ng-aria
* vendor-bb-uib-alert
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-manage-payment-orders-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_action">#action</a><br/>    <a href="#Helpers_hasValue">#hasValue(value)</a><br/>    <a href="#Helpers_openModalWindow">#openModalWindow(ext, selectedPayment)</a><br/>    <a href="#Helpers_closeModalWindow">#closeModalWindow(ext)</a><br/>    <a href="#Helpers_isPaginationTypeMatch">#isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#Helpers_getSearchQuery">#getSearchQuery($ctrl)</a><br/>    <a href="#Helpers_searchLabelsTranslations">#searchLabelsTranslations()</a><br/>    <a href="#Helpers_thereAreMatches">#thereAreMatches($ctrl)</a><br/>    <a href="#Helpers_getEmptyIcon">#getEmptyIcon($ctrl)</a><br/>    <a href="#Helpers_getEmptyTitle">#getEmptyTitle($ctrl)</a><br/>    <a href="#Helpers_getEmptyDescription">#getEmptyDescription($ctrl)</a><br/>    <a href="#Helpers_toggleFilter">#toggleFilter()</a><br/>    <a href="#Helpers_canPerformAction">#canPerformAction(payment, actionName)</a><br/>    <a href="#Helpers_authorize">#authorize($ctrl, payment, e)</a><br/>    <a href="#Helpers_rejectInit">#rejectInit(payment, e, ext)</a><br/>    <a href="#Helpers_removeNotification">#removeNotification(notification, notificationsList)</a><br/>    <a href="#Helpers_formatAccountNumber">#formatAccountNumber(str, symbol, groupLen)</a><br/>    <a href="#Helpers_getAccountNumber">#getAccountNumber(accountIdentification)</a><br/>    <a href="#Helpers_isSelected">#isSelected(payment, selState)</a><br/>    <a href="#Helpers_isAnySelected">#isAnySelected(selState)</a><br/>    <a href="#Helpers_howManySelected">#howManySelected(selState)</a><br/>    <a href="#Helpers_isSelectedAll">#isSelectedAll(payments, selState)</a><br/>    <a href="#Helpers_isSelectedPart">#isSelectedPart(payments, selState)</a><br/>    <a href="#Helpers_toggleAllPayments">#toggleAllPayments(payments, selState)</a><br/>    <a href="#Helpers_deselectPayments">#deselectPayments(selState)</a><br/>    <a href="#Helpers_toggleSelection">#toggleSelection(payment, selState, $event)</a><br/>    <a href="#Helpers_confirmPaymentCancel">#confirmPaymentCancel(payment, event, ext)</a><br/>    <a href="#Helpers_confirmPaymentDelete">#confirmPaymentDelete(payment, event, ext)</a><br/>    <a href="#Helpers_getAddressText">#getAddressText(postalAddress)</a><br/>    <a href="#Helpers_getIntermediaryBankType">#getIntermediaryBankType(intermediaryBank)</a><br/>    <a href="#Helpers_paymentStatusFiltersLookup">#paymentStatusFiltersLookup()</a><br/>    <a href="#Helpers_getStatusIcon">#getStatusIcon()</a><br/>    <a href="#Helpers_getStatusLabelKey">#getStatusLabelKey(status, enble/disable)</a><br/>    <a href="#Helpers_canPerformActionForBulk">#canPerformActionForBulk(state, actionName)</a><br/>    <a href="#Helpers_confirmActionOnBulk">#confirmActionOnBulk(ext, actionName)</a><br/>    <a href="#Helpers_showBulkActionDetails">#showBulkActionDetails(ext, payload)</a><br/>    <a href="#Helpers_dismissBulkActionWarning">#dismissBulkActionWarning($ctrl)</a><br/>    <a href="#Helpers_printModalWindow">#printModalWindow(contentElQuery)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>    <a href="#Hooks_processPaymentOrders">#processPaymentOrders(paymentOrders)</a><br/>

---

## Preferences

Preferences enum

---

## Action

Account number schema

---

## PaymentTypeId

Map of payment types to configure payment details template

---

## paymentStatusLookup

Lookup for different payment statues
Each object has the following properties:
icon: the type of icon, primary | warning | success | danger
name: name is used as a key for translation | i18n
isFilter: boolean | flag, indicates which status can be used as a filter

---

## Helpers

### <a name="Helpers_action"></a>*#action*

Populate Actions's constant

**Type:** *Object*


### <a name="Helpers_hasValue"></a>*#hasValue(value)*

Check if value is defined, not null and not empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

### <a name="Helpers_openModalWindow"></a>*#openModalWindow(ext, selectedPayment)*

Opens the modal window with selected Payment Order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |
| selectedPayment | Object | Payment Order to be shown |

### <a name="Helpers_closeModalWindow"></a>*#closeModalWindow(ext)*

Toggle row details visibility

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |

### <a name="Helpers_isPaginationTypeMatch"></a>*#isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

### <a name="Helpers_getSearchQuery"></a>*#getSearchQuery($ctrl)*

If search enabled returns current search query, otherwise false

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

String or Boolean - **

### <a name="Helpers_searchLabelsTranslations"></a>*#searchLabelsTranslations()*

Returns object with translated labels necessary for search box component

##### Returns

Object - **

### <a name="Helpers_thereAreMatches"></a>*#thereAreMatches($ctrl)*

Checks if there has been any match result when searching

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_getEmptyIcon"></a>*#getEmptyIcon($ctrl)*

Returns correct icon to be used when empty results

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_getEmptyTitle"></a>*#getEmptyTitle($ctrl)*

Returns translated title to be used when empty results

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_getEmptyDescription"></a>*#getEmptyDescription($ctrl)*

Returns translated description to be used when empty results

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_toggleFilter"></a>*#toggleFilter()*

Toggle filter component.

##### Returns

Boolean - *A status of filter component*

### <a name="Helpers_canPerformAction"></a>*#canPerformAction(payment, actionName)*

Checks if the current user able to perform target action per `payment`

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | The object payment to check |
| actionName | String | target action name |

##### Returns

Boolean - *Flag indicating if able to perform the target action*

### <a name="Helpers_authorize"></a>*#authorize($ctrl, payment, e)*

Initiate payment order authorize procedure

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |
| payment | Object | payment object |
| e | Object | DOM click event |

### <a name="Helpers_rejectInit"></a>*#rejectInit(payment, e, ext)*

Open rejection popup

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | object |
| e | Object | DOM click event |
| ext | Object | extension |

### <a name="Helpers_removeNotification"></a>*#removeNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Array - **

### <a name="Helpers_formatAccountNumber"></a>*#formatAccountNumber(str, symbol, groupLen)*


#### Deprecated: [A new function introduced (getAccountNumber)]
Splits the string up with spaces by groups of 4.
"IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"

| Parameter | Type | Description |
| :-- | :-- | :-- |
| str | String | Account number |
| symbol | String | Separator symbol |
| groupLen | Number | Number of digits to group by |

##### Returns

String - *Formatted account number*

### <a name="Helpers_getAccountNumber"></a>*#getAccountNumber(accountIdentification)*

It accepts the identification Object for creditor or debtor account.
Map the (schemeName) to the expected format using (formatBySchema) Object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accountIdentification | Object | Creditor or Debtor identification Object that includes the schemaName and the identification (account number) |

##### Returns

String - *account number formated or not based on the schema*

### <a name="Helpers_isSelected"></a>*#isSelected(payment, selState)*

Helper to know if the payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| selState | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_isAnySelected"></a>*#isAnySelected(selState)*

Helper to know if any payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_howManySelected"></a>*#howManySelected(selState)*

Helper to know how many payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_isSelectedAll"></a>*#isSelectedAll(payments, selState)*

Helper to know if ALL payments are selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_isSelectedPart"></a>*#isSelectedPart(payments, selState)*

Helper to know if at least one payment is selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_toggleAllPayments"></a>*#toggleAllPayments(payments, selState)*

Helper to select/deselect all payments loaded.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payments | Array |  |
| selState | Object |  |

##### Returns

Null - **

### <a name="Helpers_deselectPayments"></a>*#deselectPayments(selState)*

Helper to deselect all payments selected.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selState | Object |  |

##### Returns

Null - **

### <a name="Helpers_toggleSelection"></a>*#toggleSelection(payment, selState, $event)*

Helper to select/deselect single payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| selState | Object |  |
| $event | Object | DOM click event |

##### Returns

Null - **

### <a name="Helpers_confirmPaymentCancel"></a>*#confirmPaymentCancel(payment, event, ext)*

Open confirmation modal for cancel payment
populate target paymentId & version

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | object |
| event | Object | DOM click event |
| ext | Object | extension |

### <a name="Helpers_confirmPaymentDelete"></a>*#confirmPaymentDelete(payment, event, ext)*

Open confirmation modal for delete payment
populate target paymentId

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | object |
| event | Object | DOM click event |
| ext | Object | extension |

### <a name="Helpers_getAddressText"></a>*#getAddressText(postalAddress)*

Helper to format address data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| postalAddress | Object |  |

##### Returns

String - **

### <a name="Helpers_getIntermediaryBankType"></a>*#getIntermediaryBankType(intermediaryBank)*

Helper to get bank type based on provided code

| Parameter | Type | Description |
| :-- | :-- | :-- |
| intermediaryBank | Object |  |

##### Returns

String - **

### <a name="Helpers_paymentStatusFiltersLookup"></a>*#paymentStatusFiltersLookup()*

Return list of status filters.
Filter paymentStatusLookup and reture all statuses that can be used as filters

### <a name="Helpers_getStatusIcon"></a>*#getStatusIcon()*

return the icon name/class from the matching payment status lookup object
It returns 'secondary' by default

### <a name="Helpers_getStatusLabelKey"></a>*#getStatusLabelKey(status, enble/disable)*

Find the matching object in paymentStatusLookup by the status key (ex: 'APPROVED'),
Extract the name attribute
Generate the correct key for translation message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | property on payment object |
| enble/disable | Boolean | translation key postfix ('.short') |

##### Returns

String - *Translation key for status label*

### <a name="Helpers_canPerformActionForBulk"></a>*#canPerformActionForBulk(state, actionName)*

Check if can perform an action "approve or reject" on the selected payment orders

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object |  |
| actionName | String |  |

##### Returns

Boolean - **

### <a name="Helpers_confirmActionOnBulk"></a>*#confirmActionOnBulk(ext, actionName)*

Open the confirmation modal window based on action "approve or reject"

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension |
| actionName | String |  |

### <a name="Helpers_showBulkActionDetails"></a>*#showBulkActionDetails(ext, payload)*

Show a modal window that contain bulk action warning details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object |  |
| payload | Object |  |

### <a name="Helpers_dismissBulkActionWarning"></a>*#dismissBulkActionWarning($ctrl)*

Dismiss the warning alert for bulk action by updating the state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object |  |

### <a name="Helpers_printModalWindow"></a>*#printModalWindow(contentElQuery)*

Initiates printing dialog to print modal content and adds a
fallback for Safari browsers (it fails to print popup content with
default window.print() method).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contentElQuery | String | DOM query to printable content |

---

## Hooks


### <a name="Hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

### <a name="Hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

### <a name="Hooks_processPaymentOrders"></a>*#processPaymentOrders(paymentOrders)*

Adds transactionInformation field to every payment order

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentOrders | Array | Collection of payment orders |

##### Returns

Array - **
