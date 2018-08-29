# ext-bus-contact-request-list-ng


Version: **3.6.1**

Business banking extension for a contacts list in a contact widget.
Shows list of contacts created by logged user that needs authorization.

## Imports

* ui-bb-avatar-ng
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

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-contact-request-list-ng</value>
</property>
```

## Table of Contents
- **ext-bus-contact-request-list-ng**<br/>    <a href="#ext-bus-contact-request-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-contact-request-list-ngfilterNotification">filterNotification(notification, notificationsList)</a><br/>    <a href="#ext-bus-contact-request-list-ngprocessApprovals">processApprovals(approvals)</a><br/>    <a href="#ext-bus-contact-request-list-nggetSelectedContact">getSelectedContact(contacts, contact)</a><br/>    <a href="#ext-bus-contact-request-list-nggetLoadMethodType">getLoadMethodType(LoadMethod)</a><br/>

---

### <a name="ext-bus-contact-request-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-contact-request-list-ngfilterNotification"></a>*filterNotification(notification, notificationsList)*

Helper to filter out notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Null - **

---

### <a name="ext-bus-contact-request-list-ngprocessApprovals"></a>*processApprovals(approvals)*

processApprovals default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| approvals | Array of Object | Raw approvals collection |

##### Returns

Array of Object - *Processed approvals*

---

### <a name="ext-bus-contact-request-list-nggetSelectedContact"></a>*getSelectedContact(contacts, contact)*

Selects the contact from contacts by id
Or returns null if nothing is found

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array | Array of contacts |
| contact | Object | Contact object |

##### Returns

Object or Null - *Returns found contact or null*

---

### <a name="ext-bus-contact-request-list-nggetLoadMethodType"></a>*getLoadMethodType(LoadMethod)*

Returns load method type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| LoadMethod | Object | Predefined enumeration of available load methods |

##### Returns

String - *Load method type*
