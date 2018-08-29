# ext-bus-manage-payment-drafts-ng


Version: **2.36.20**

Payment drafts overview extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-payment-order-details-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- payment draft widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bus-manage-payment-drafts-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_isSortableActive">#isSortableActive(sortable, $ctrl)</a><br/>    <a href="#Helpers_removeNotification">#removeNotification(payment, list)</a><br/>    <a href="#Helpers_isPaginationTypeMatch">#isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#Helpers_toggleAllDrafts">#toggleAllDrafts(drafts, checkAllState)</a><br/>    <a href="#Helpers_getSelectedDrafts">#getSelectedDrafts(drafts)</a><br/>    <a href="#Helpers_onApplyFilter">#onApplyFilter(drafts)</a><br/>    <a href="#Helpers_deleteDraft">#deleteDraft($ctrl, draftId)</a><br/>    <a href="#Helpers_deleteMultipleDrafts">#deleteMultipleDrafts($ctrl, draftsToDelete)</a><br/>    <a href="#Helpers_isPartiallySelected">#isPartiallySelected(drafts)</a><br/>    <a href="#Helpers_isSelectedAll">#isSelectedAll(drafts)</a><br/>    <a href="#Helpers_showDeleteDialog">#showDeleteDialog($ctrl, ext, draft)</a><br/>    <a href="#Helpers_initiatePayment">#initiatePayment(payment)</a><br/>
- **Intents**<br/>    <a href="#Intents_initiatePayment">#initiatePayment()</a><br/>    <a href="#Intents_initiateUSDomesticWirePayment">#initiateUSDomesticWirePayment()</a><br/>    <a href="#Intents_initiateUSInternationalWirePayment">#initiateUSInternationalWirePayment()</a><br/>

---

## Helpers

Helpers for ext-bus-manage-payment-drafts-ng

### <a name="Helpers_isSortableActive"></a>*#isSortableActive(sortable, $ctrl)*

Checks if sortable is currently active

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | object |
| $ctrl | Object | the ctrl |

### <a name="Helpers_removeNotification"></a>*#removeNotification(payment, list)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object |  |
| list | Array |  |

##### Returns

Null - **

### <a name="Helpers_isPaginationTypeMatch"></a>*#isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

### <a name="Helpers_toggleAllDrafts"></a>*#toggleAllDrafts(drafts, checkAllState)*

The select all action of the checkbox select column

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Array | All drafts |
| checkAllState | String | Current state of select all dropdown |

### <a name="Helpers_getSelectedDrafts"></a>*#getSelectedDrafts(drafts)*

Filters the draft to only the selected ones

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Array | drafts |

### <a name="Helpers_onApplyFilter"></a>*#onApplyFilter(drafts)*

Reloads the draft with applying a filter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Object | ctrl |

### <a name="Helpers_deleteDraft"></a>*#deleteDraft($ctrl, draftId)*

Deletes a draft and removes it from state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | the controller |
| draftId | String | draft to delete |

### <a name="Helpers_deleteMultipleDrafts"></a>*#deleteMultipleDrafts($ctrl, draftsToDelete)*

Deletes multiple draft

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | the controller |
| draftsToDelete | Array | drafts to delete |

### <a name="Helpers_isPartiallySelected"></a>*#isPartiallySelected(drafts)*

Checks if some (but not all) drafts are selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Array | to check for partial selection |

### <a name="Helpers_isSelectedAll"></a>*#isSelectedAll(drafts)*

Checks if all drafts are selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Array | to check for partial selection |

### <a name="Helpers_showDeleteDialog"></a>*#showDeleteDialog($ctrl, ext, draft)*

Show respective popup dialog for deleting draft(s)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object |  |
| ext | Object |  |
| draft | Object or Undefined | to be deleted (if a direct delete), optional |

### <a name="Helpers_initiatePayment"></a>*#initiatePayment(payment)*

Initiate payment depending on the payment type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | Payment to send to the initiate payment intent |

---

---

## Intents


### <a name="Intents_initiatePayment"></a>*#initiatePayment()*

Intent to initiate a payment

### <a name="Intents_initiateUSDomesticWirePayment"></a>*#initiateUSDomesticWirePayment()*

Intent to initiate a us domestic wire payment

### <a name="Intents_initiateUSInternationalWirePayment"></a>*#initiateUSInternationalWirePayment()*

Intent to initiate a us international wire payment
