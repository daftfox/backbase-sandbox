# ext-bb-user-identity-details-ng


Version: **1.1.1**

Default extension for widget-bb-user-identity-details-ng

## Imports

* ui-bb-dropdown-select-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bb-user-identity-details-ng**<br/>    <a href="#ext-bb-user-identity-details-ngitemsFromModel">itemsFromModel(item)</a><br/>    <a href="#ext-bb-user-identity-details-ngtemplate">template()</a><br/>    <a href="#ext-bb-user-identity-details-ngauditLogIntentDefaultParams">auditLogIntentDefaultParams(userIdentity)</a><br/>    <a href="#ext-bb-user-identity-details-ngauditLogIntentPaymentsParams">auditLogIntentPaymentsParams(userIdentity)</a><br/>

---

### <a name="ext-bb-user-identity-details-ngitemsFromModel"></a>*itemsFromModel(item)*

Function to process model item in order
to have it suitable for the usage within the actual template

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | from the state container to be transformed |

##### Returns

Object - *item to be used in the extension*

---

### <a name="ext-bb-user-identity-details-ngtemplate"></a>*template()*

Returns a current template

##### Returns

String - *template id*

---

### <a name="ext-bb-user-identity-details-ngauditLogIntentDefaultParams"></a>*auditLogIntentDefaultParams(userIdentity)*

Returns intent configuration to send to the audit widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userIdentity | Object | The current user identity |
| userIdentity.externalId | String | The username of the current user identity |

##### Returns

Object - *Intent configuration*

---

### <a name="ext-bb-user-identity-details-ngauditLogIntentPaymentsParams"></a>*auditLogIntentPaymentsParams(userIdentity)*

Returns intent configuration to send to the audit widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| userIdentity | Object | The current user identity |
| userIdentity.externalId | String | The username of the current user identity |

##### Returns

Object - *Intent configuration*
