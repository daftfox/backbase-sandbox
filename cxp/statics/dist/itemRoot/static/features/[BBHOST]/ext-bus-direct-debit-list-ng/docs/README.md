# ext-bus-direct-debit-list-ng


Version: **2.0.4**

Business direct debits extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-payment-order-details-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-direct-debit-list-ng</value>
</property>
```

## Table of Contents
- **ext-bus-direct-debit-list-ng**<br/>    <a href="#ext-bus-direct-debit-list-ngheaders">headers</a><br/>    <a href="#ext-bus-direct-debit-list-ngisSortableActive">isSortableActive(sortable, $ctrl)</a><br/>    <a href="#ext-bus-direct-debit-list-ngisStatusDisplayed">isStatusDisplayed(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetStatusLabel">getStatusLabel(status, type)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetStatusClass">getStatusClass(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nghasAction">hasAction(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetActionLabel">getActionLabel(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetActionIcon">getActionIcon(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetConfirmTitle">getConfirmTitle(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetConfirmBody">getConfirmBody(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetConfirmSubmit">getConfirmSubmit(status)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetFrequencyLabel">getFrequencyLabel(frequency)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetRefundDate">getRefundDate(item)</a><br/>    <a href="#ext-bus-direct-debit-list-ngtoggleDetails">toggleDetails(id, event)</a><br/>    <a href="#ext-bus-direct-debit-list-ngisToggled">isToggled(id)</a><br/>    <a href="#ext-bus-direct-debit-list-ngremoveNotification">removeNotification(notification, notificationsList)</a><br/>    <a href="#ext-bus-direct-debit-list-nggetNotificationClass">getNotificationClass(level)</a><br/>    <a href="#ext-bus-direct-debit-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-direct-debit-list-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bus-direct-debit-list-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>

---
### <a name="ext-bus-direct-debit-list-ngheaders"></a>*headers*

List of table headers

**Type:** *Array*


---

### <a name="ext-bus-direct-debit-list-ngisSortableActive"></a>*isSortableActive(sortable, $ctrl)*

Helper to check if header sortable column is active or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Sortable object |
| $ctrl | Object | Controller object |

##### Returns

Boolean - *True if sortable column is active*

---

### <a name="ext-bus-direct-debit-list-ngisStatusDisplayed"></a>*isStatusDisplayed(status)*

Helper to check if status displayed or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

Boolean - *True if status must be displayed*

---

### <a name="ext-bus-direct-debit-list-nggetStatusLabel"></a>*getStatusLabel(status, type)*

Helper to get status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |
| type | String | of status label (small, large) |

##### Returns

String - *Translation key for status label*

---

### <a name="ext-bus-direct-debit-list-nggetStatusClass"></a>*getStatusClass(status)*

Helper to get status class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Class for status*

---

### <a name="ext-bus-direct-debit-list-nghasAction"></a>*hasAction(status)*

Helper to check if direct debit has action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

Boolean - *True if direct debit has action*

---

### <a name="ext-bus-direct-debit-list-nggetActionLabel"></a>*getActionLabel(status)*

Helper to get action label according status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Translation key for action label*

---

### <a name="ext-bus-direct-debit-list-nggetActionIcon"></a>*getActionIcon(status)*

Helper to get action icon according to status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Translation key for action icon*

---

### <a name="ext-bus-direct-debit-list-nggetConfirmTitle"></a>*getConfirmTitle(status)*

Helper to get confirm title text according status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Translation key for confirm title text*

---

### <a name="ext-bus-direct-debit-list-nggetConfirmBody"></a>*getConfirmBody(status)*

Helper to get confirm body text according status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Translation key for confirm body text*

---

### <a name="ext-bus-direct-debit-list-nggetConfirmSubmit"></a>*getConfirmSubmit(status)*

Helper to get submit confirm label according status

| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Direct debit status |

##### Returns

String - *Translation key for submit confirm label*

---

### <a name="ext-bus-direct-debit-list-nggetFrequencyLabel"></a>*getFrequencyLabel(frequency)*

Helper to get direct debit frequency

| Parameter | Type | Description |
| :-- | :-- | :-- |
| frequency | String | Direct debit frequency |

##### Returns

String - *Translation key for frequency label*

---

### <a name="ext-bus-direct-debit-list-nggetRefundDate"></a>*getRefundDate(item)*

Helper to get refund deadline if available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Direct debit object |

##### Returns

Null or Number - *New timestamp with added days or null if is not applicable*

---

### <a name="ext-bus-direct-debit-list-ngtoggleDetails"></a>*toggleDetails(id, event)*

Show/hide (toggle) direct debit details row

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | row identification |
| event | Object | click object |

---

### <a name="ext-bus-direct-debit-list-ngisToggled"></a>*isToggled(id)*

Helper to check if direct debit is toggled or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | row identification |

##### Returns

Boolean - *True if direct debit is toggled*

---

### <a name="ext-bus-direct-debit-list-ngremoveNotification"></a>*removeNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Null - **

---

### <a name="ext-bus-direct-debit-list-nggetNotificationClass"></a>*getNotificationClass(level)*

Helper to get notification class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | Notification level |

##### Returns

String - **

---

### <a name="ext-bus-direct-debit-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-direct-debit-list-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

---

### <a name="ext-bus-direct-debit-list-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String (optional) - **
