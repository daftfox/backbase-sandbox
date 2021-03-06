# ext-bus-notification-center-lite-ng


Version: **2.7.2**

Default extension for notifications center.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-message-ng
* ui-bb-navigate-to-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-angular-sanitize
* vendor-bb-uib-tooltip

---

## Example

```javascript
<!-- widget's model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-notification-center-lite-ng</value>
</property>
```

## Table of Contents
- **ext-bus-notification-center-lite-ng**<br/>    <a href="#ext-bus-notification-center-lite-ngheaders">headers</a><br/>    <a href="#ext-bus-notification-center-lite-ngtoggleDetails">toggleDetails(id, event)</a><br/>    <a href="#ext-bus-notification-center-lite-ngisToggled">isToggled(id)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetLevelIcon">getLevelIcon(level)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetLevelTitle">getLevelTitle(read)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetReadBtnLabel">getReadBtnLabel(read)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetReadBtnIcon">getReadBtnIcon(read)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetDateLabel">getDateLabel(item, format)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetVisibleLinesLength">getVisibleLinesLength(item)</a><br/>    <a href="#ext-bus-notification-center-lite-nggetEmptyMessage">getEmptyMessage(isFilterApplied)</a><br/>
- **Type Definitions**<br/>    <a href="#DateLabelKey">DateLabelKey</a><br/>    <a href="#Level">Level</a><br/>    <a href="#Status">Status</a><br/>    <a href="#LinesLength">LinesLength</a><br/>

---
### <a name="ext-bus-notification-center-lite-ngheaders"></a>*headers*

List of table headers

**Type:** *Array*


---

### <a name="ext-bus-notification-center-lite-ngtoggleDetails"></a>*toggleDetails(id, event)*

Show/hide (toggle) direct debit details row

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | row identification |
| event | Object | click object |

---

### <a name="ext-bus-notification-center-lite-ngisToggled"></a>*isToggled(id)*

Helper to check if direct debit is toggled or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | String | row identification |

##### Returns

Boolean - *True if direct debit is toggled*

---

### <a name="ext-bus-notification-center-lite-nggetLevelIcon"></a>*getLevelIcon(level)*

Helper to get severity level icon

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | severity level |

##### Returns

String - *Severity level icon class*

---

### <a name="ext-bus-notification-center-lite-nggetLevelTitle"></a>*getLevelTitle(read)*

Helper to get severity level title

| Parameter | Type | Description |
| :-- | :-- | :-- |
| read | String | severity level |

##### Returns

String - *Severity level title*

---

### <a name="ext-bus-notification-center-lite-nggetReadBtnLabel"></a>*getReadBtnLabel(read)*

Helper to get read status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| read | String | read status |

##### Returns

String - *Read status label*

---

### <a name="ext-bus-notification-center-lite-nggetReadBtnIcon"></a>*getReadBtnIcon(read)*

Helper to get read status label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| read | String | read status |

##### Returns

String - *Read status label*

---

### <a name="ext-bus-notification-center-lite-nggetDateLabel"></a>*getDateLabel(item, format)*

Helper to get date label

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |
| format | Object (optional) | Date format |

##### Returns

String - *Date label*

---

### <a name="ext-bus-notification-center-lite-nggetVisibleLinesLength"></a>*getVisibleLinesLength(item)*

Helper to get visible lines length

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Notification object |

##### Returns

Number - *Visible lines length*

---

### <a name="ext-bus-notification-center-lite-nggetEmptyMessage"></a>*getEmptyMessage(isFilterApplied)*

Helper to get empty message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| isFilterApplied | Boolean | Filter applied status |

##### Returns

String - *Empty message string*

## Type Definitions


### <a name="DateLabelKey"></a>*DateLabelKey*

Date label enum

**Type:** *Enumeration*


### <a name="Level"></a>*Level*

Level objects enum

**Type:** *Enumeration*


### <a name="Status"></a>*Status*

Read status objects enum

**Type:** *Enumeration*


### <a name="LinesLength"></a>*LinesLength*

Lines length enum

**Type:** *Enumeration*


---
