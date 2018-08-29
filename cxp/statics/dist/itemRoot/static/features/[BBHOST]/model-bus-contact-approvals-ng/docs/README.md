# model-bus-contact-approvals-ng


Version: **1.13.1**

Contact Approvals widget model.

## Imports

* data-bb-contact-http-ng
* lib-bb-model-errors
* vendor-bb-angular

---

## Example

```javascript
import modelContactApprovalsModuleKey,
 { modelContactApprovalsKey } from 'model-bus-contact-approvals-ng';
```

## Table of Contents
- **contactApprovalsModel**<br/>    <a href="#contactApprovalsModel_getApprovals">#getApprovals(params)</a><br/>    <a href="#contactApprovalsModel_getUserApprovals">#getUserApprovals(params)</a><br/>    <a href="#contactApprovalsModel_authorizeContact">#authorizeContact(requestId)</a><br/>    <a href="#contactApprovalsModel_rejectContact">#rejectContact(requestId)</a><br/>

---

## contactApprovalsModel

Model factory for widget-bus-contact-approvals-ng

### <a name="contactApprovalsModel_getApprovals"></a>*#getApprovals(params)*

Gets the list of contact approval requests

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Parameters to be passed. |

##### Returns

Promise of Object - *A Promise with array of contact approval requests.*

### <a name="contactApprovalsModel_getUserApprovals"></a>*#getUserApprovals(params)*

Gets the list of contact approval requests created by current user

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Paramaters to be passed. |

##### Returns

Promise of Object - *A Promise with array of contact approval requests.*

### <a name="contactApprovalsModel_authorizeContact"></a>*#authorizeContact(requestId)*

Authorizes a contact approval request.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestId | String | ID of the contact request to authorize. |

##### Returns

Promise - **

### <a name="contactApprovalsModel_rejectContact"></a>*#rejectContact(requestId)*

Rejects a contact approval request.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| requestId | String | ID of the contact request to reject. |

##### Returns

Promise - **
