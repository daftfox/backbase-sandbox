# ext-bbm-notification-center-details-ng


Version: **2.7.2**

Mobile extension for a notiication center details.

## Imports

* lib-bbm-plugins
* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bb-list-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-notification-details-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getNotifications">#getNotifications()</a><br/>    <a href="#Helpers_getLevelIcon">#getLevelIcon(level)</a><br/>    <a href="#Helpers_getDateLabel">#getDateLabel(notification)</a><br/>
- **Intents**<br/>    <a href="#Intents_showNotificationDetails">#showNotificationDetails()</a><br/>
- **Events**<br/>    <a href="#bb.action.notification.list.show">bb.action.notification.list.show</a><br/>    <a href="#bb.event.notification.delete.start">bb.event.notification.delete.start</a><br/>    <a href="#bb.event.notification.delete.done">bb.event.notification.delete.done</a><br/>    <a href="#bb.event.notification.delete.failed">bb.event.notification.delete.failed</a><br/>

---

## Helpers

Helpers for ext-bbm-notification-center-details-ng

### <a name="Helpers_getNotifications"></a>*#getNotifications()*

Returns the `notifications` from the state

##### Returns

Array - *notifications List of notifications from the state*

### <a name="Helpers_getLevelIcon"></a>*#getLevelIcon(level)*

Returns CSS class for icon according to the given level.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | String | Notification level |

##### Returns

String - **

### <a name="Helpers_getDateLabel"></a>*#getDateLabel(notification)*

Returns a date label for the given notification.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Notification item |

##### Returns

String - **

---

## Intents


### <a name="Intents_showNotificationDetails"></a>*#showNotificationDetails()*

Handles the intent to show the notification details

---

## Events

### <a name="bb.action.notification.list.show"></a>*bb.action.notification.list.show*

An event to navigate to the notifications list.

### <a name="bb.event.notification.delete.start"></a>*bb.event.notification.delete.start*

A notification is submitted for deletion from the server

### <a name="bb.event.notification.delete.done"></a>*bb.event.notification.delete.done*

A notification is deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| notification | [NotificationsData.NotificationItem](data-bb-notifications-http-ng.html#NotificationsData.NotificationItem) | Notification item |
### <a name="bb.event.notification.delete.failed"></a>*bb.event.notification.delete.failed*

A notification fails to be deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) | Model error |

---
