# ext-bbm-notification-center-list-ng


Version: **2.7.2**

Mobile extension for a notiication center list.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-notification-list-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getLevelIcon">#getLevelIcon(level)</a><br/>    <a href="#Helpers_getDateLabel">#getDateLabel(notification)</a><br/>    <a href="#Helpers_hasNotifications">#hasNotifications()</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_showLoadMoreLoading">#showLoadMoreLoading()</a><br/>    <a href="#Helpers_showLoadMore">#showLoadMore()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState()</a><br/>    <a href="#Helpers_loadMoreNotifications">#loadMoreNotifications()</a><br/>
- **Intents**<br/>    <a href="#Intents_showNotificationDetails">#showNotificationDetails()</a><br/>
- **Events**<br/>    <a href="#bb.event.notification.delete.done">bb.event.notification.delete.done</a><br/>    <a href="#bb.event.notification.read.change">bb.event.notification.read.change</a><br/>

---

## Helpers

Helpers for ext-bbm-notification-center-list-ng

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

### <a name="Helpers_hasNotifications"></a>*#hasNotifications()*

Checks if there are notifications.

##### Returns

Boolean - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for the loading state.

##### Returns

Boolean - **

### <a name="Helpers_showLoadMoreLoading"></a>*#showLoadMoreLoading()*

Checks for the load more's loading state.

##### Returns

Boolean - **

### <a name="Helpers_showLoadMore"></a>*#showLoadMore()*

Checks for the load more states.

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Checks for the error state.

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState()*

Checks for the empty state.

##### Returns

Boolean - **

### <a name="Helpers_loadMoreNotifications"></a>*#loadMoreNotifications()*

Loads more notifications

---

## Intents


### <a name="Intents_showNotificationDetails"></a>*#showNotificationDetails()*

The intent to show the notification details

---

## Events

### <a name="bb.event.notification.delete.done"></a>*bb.event.notification.delete.done*

A notification was successfully deleted.

### <a name="bb.event.notification.read.change"></a>*bb.event.notification.read.change*

The read status of a notification was changed.


---
