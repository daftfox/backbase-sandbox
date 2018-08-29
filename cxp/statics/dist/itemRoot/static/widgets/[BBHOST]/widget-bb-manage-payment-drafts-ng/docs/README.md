# widget-bb-manage-payment-drafs-ng


Version: **1.109.20**

Widget for the payment order drafts functionalities

## Imports

* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-widget-extension-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **PaymentDraftController**<br/>    <a href="#PaymentDraftController_loadMore">#loadMore(done)</a><br/>    <a href="#PaymentDraftController_changePage">#changePage()</a><br/>    <a href="#PaymentDraftController_$onInit">#$onInit()</a><br/>
- **widget-bb-manage-payment-drafs-ng**<br/>    <a href="#widget-bb-manage-payment-drafs-ngonSort">onSort(orderBy, direction)</a><br/>    <a href="#widget-bb-manage-payment-drafs-ngdeleteDraft">deleteDraft(draftPaymentId)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processPaymentDrafts">#processPaymentDrafts(drafts)</a><br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>    <a href="#Hooks_truncateParams">#truncateParams()</a><br/>

---

## PaymentDraftController

Shows paymant drafts list

### <a name="PaymentDraftController_loadMore"></a>*#loadMore(done)*

Loads more payment drafts if they are available.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| done | Function | Callback to stop loading |

##### Returns

Promise of [PaymentDrafts](model-bb-payment-ng.html#PaymentDrafts), [ModelError](model-bb-payment-ng.html#ModelError) - *A promise*

### <a name="PaymentDraftController_changePage"></a>*#changePage()*

Change page of payment drafts.

##### Returns

Promise of [PaymentDrafts](model-bb-payment-ng.html#PaymentDrafts), [ModelError](model-bb-payment-ng.html#ModelError) - *A Promise with loaded accounts*

### <a name="PaymentDraftController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller


##### Returns

Promise of [PaymentDrafts](model-bb-payment-ng.html#PaymentDrafts), [ModelError](model-bb-payment-ng.html#ModelError) - **

## Example

```javascript
<div ng-controller="PaymentDraftController as $ctrl">
  <!-- ... -->
</div>
```

---

### <a name="widget-bb-manage-payment-drafs-ngonSort"></a>*onSort(orderBy, direction)*

Loads sorted list of payment drafts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| orderBy | String | Column key to sort |
| direction | String | Sort direction |

---

### <a name="widget-bb-manage-payment-drafs-ngdeleteDraft"></a>*deleteDraft(draftPaymentId)*

Save draft payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| draftPaymentId | String |  |

##### Returns

Promise - **

---

## Hooks

Hooks for widget-bb-mangage-payment-drafts-ng

### <a name="Hooks_processPaymentDrafts"></a>*#processPaymentDrafts(drafts)*

Hook for processing payment drafts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| drafts | Array | drafts to process |

##### Returns

Array - *Processed drafts*

### <a name="Hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String (optional) - **

### <a name="Hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **

### <a name="Hooks_truncateParams"></a>*#truncateParams()*

truncateParams default hook

##### Returns

Object - **

## Templates

* *template.ng.html*

---
