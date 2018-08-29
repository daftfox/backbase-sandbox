# ext-bus-contact-authorizations-list-ng


Version: **3.6.1**

Business banking extension for a contact approvals list in a contact approvals widget.
Shows list of contact approvals which not yet authorized or rejected.

## Imports

* ui-bb-confirm-ng
* ui-bb-country-ng
* ui-bb-focus-ng
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages

---

## Table of Contents
- **ext-bus-contact-authorizations-list-ng**<br/>    <a href="#ext-bus-contact-authorizations-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-contact-authorizations-list-ngfilterNotification">filterNotification(notification, notificationsList)</a><br/>    <a href="#ext-bus-contact-authorizations-list-ngprocessApprovals">processApprovals(approvals)</a><br/>    <a href="#ext-bus-contact-authorizations-list-nggetSelectedContact">getSelectedContact(contacts, contact)</a><br/>

---

### <a name="ext-bus-contact-authorizations-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-contact-authorizations-list-ngfilterNotification"></a>*filterNotification(notification, notificationsList)*

Helper to filter out notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Null - **

---

### <a name="ext-bus-contact-authorizations-list-ngprocessApprovals"></a>*processApprovals(approvals)*

processApprovals default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| approvals | Array of Object | Raw approvals collection |

##### Returns

Array of Object - *Processed approvals*

---

### <a name="ext-bus-contact-authorizations-list-nggetSelectedContact"></a>*getSelectedContact(contacts, contact)*

Selects the contact from contacts by id
Or returns null if nothing is found

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array | Array of contacts |
| contact | Object | Contact object |

##### Returns

Object or Null - *Returns found contact or null*
