# widget-bbm-notification-ng


Version: **2.7.2**

Mobile notifications widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-notifications-ng
* vendor-bb-angular

---

## Table of Contents
- **NotificationsListController**<br/>    <a href="#NotificationsListController_$onInit">#$onInit()</a><br/>
- **defaultHooks**<br/>    <a href="#defaultHooks_processRequestParams">#processRequestParams(params)</a><br/>    <a href="#defaultHooks_processReloadRequestParams">#processReloadRequestParams(params)</a><br/>
- **widget-bbm-notification-ng**<br/>    <a href="#widget-bbm-notification-ngEvents">Events()</a><br/>
- **NotificationService**<br/>    <a href="#NotificationService_loadMoreNotifications">#loadMoreNotifications()</a><br/>    <a href="#NotificationService_setSelectedNotification">#setSelectedNotification(notification)</a><br/>    <a href="#NotificationService_setNotifictations">#setNotifictations()</a><br/>    <a href="#NotificationService_deleteNotification">#deleteNotification(notificationId)</a><br/>    <a href="#NotificationService_setNotificationReadStatus">#setNotificationReadStatus(notificationId, readStatus)</a><br/>    <a href="#NotificationService_toggleNotificationReadStatus">#toggleNotificationReadStatus(notification)</a><br/>
- **Events**<br/>    <a href="#cxp.item.loaded">cxp.item.loaded</a><br/>    <a href="#bb.item.loaded">bb.item.loaded</a><br/>    <a href="#bb.event.notification.read.change">bb.event.notification.read.change</a><br/>    <a href="#bb.event.notification.delete.start">bb.event.notification.delete.start</a><br/>    <a href="#bb.event.notification.delete.done">bb.event.notification.delete.done</a><br/>    <a href="#bb.event.notification.delete.failed">bb.event.notification.delete.failed</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#RequestParams">RequestParams</a><br/>    <a href="#NotificationsResponse">NotificationsResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>

---

## NotificationsDetailsController

Notifications widget details controller

| Injector Key |
| :-- |
| *NotificationsDetailsController* |


---

## NotificationsListController

Notifications widget list controller

| Injector Key |
| :-- |
| *NotificationsListController* |


### <a name="NotificationsListController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically during the angular cycle.

---

## defaultHooks

Hooks for widget-bbm-notification-center-ng.

### <a name="defaultHooks_processRequestParams"></a>*#processRequestParams(params)*

Default hook for notifications query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processReloadRequestParams"></a>*#processReloadRequestParams(params)*

Default hook for notifications reloading query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

---

### <a name="widget-bbm-notification-ngEvents"></a>*Events()*

Events for widget-bbm-notification-center-ng.

---

## NotificationService

The service encapsulates the core functionality of the Notifications
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-notifications-ng:service* |


### <a name="NotificationService_loadMoreNotifications"></a>*#loadMoreNotifications()*

Loads more `notifications` for the currently selected product.

### <a name="NotificationService_setSelectedNotification"></a>*#setSelectedNotification(notification)*

Sets the selected notification and updates the [ViewState](#ViewState) to display it.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object | Notification to select |

### <a name="NotificationService_setNotifictations"></a>*#setNotifictations()*

Sets the notifications and updates the [ViewState](#ViewState) to display them.

### <a name="NotificationService_deleteNotification"></a>*#deleteNotification(notificationId)*

Deletes the notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationId | Object | Id of the notification to delete |

### <a name="NotificationService_setNotificationReadStatus"></a>*#setNotificationReadStatus(notificationId, readStatus)*

Updates the read status of a notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notificationId | Object | Id of the notification to update |
| readStatus | Boolean | new read status for the notification |

### <a name="NotificationService_toggleNotificationReadStatus"></a>*#toggleNotificationReadStatus(notification)*

Toggles the read status of a notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object | Notification to toggle the read status for |

---

## Events

### <a name="cxp.item.loaded"></a>*cxp.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |
### <a name="bb.item.loaded"></a>*bb.item.loaded*

The widget is bootstrapped (data may not be loaded).

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The widget ID |
### <a name="bb.event.notification.read.change"></a>*bb.event.notification.read.change*

The read status of a notification has been changed

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| read | Boolean | The read status of the notification |
### <a name="bb.event.notification.delete.start"></a>*bb.event.notification.delete.start*

A notification is submitted for deletion from the server

### <a name="bb.event.notification.delete.done"></a>*bb.event.notification.delete.done*

A notification is deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| notification | [Contact](model-bb-notifications-ng.html#Contact) |  |
### <a name="bb.event.notification.delete.failed"></a>*bb.event.notification.delete.failed*

A notification fails to be deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |

---

## Type Definitions


### <a name="ViewState"></a>*ViewState*

The current state of the [ViewModel][](lib-bb-view-model-ng.html#).

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notification.data | Object | Current notification object |
| notification.error | Object | The last encountered error |
| notification.error.message | String | Error message |
| notification.loading | Boolean | Indicates if the notification is being loaded |
| notifications | Object |  |
| notifications.data | Array of Object | Collection of notifications |
| notifications.error | Object | The last encountered error |
| notifications.error.message | String | Error message |
| notifications.loading | Boolean | Indicates if notifications are loading at the moment |
| notifications.requestParams | [RequestParams](#RequestParams) | A set of request params for loading notifications |
| notifications.totalCount | Number | Total number of notifications |

### <a name="RequestParams"></a>*RequestParams*

A set of request params that defines how to load the requested data.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | The current page (0 indexed), null from the start |
| pageSize | Number | The number of notifications in the page |

### <a name="NotificationsResponse"></a>*NotificationsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Object | Loaded notifications array |
| totalCount | Number | Total number of notifications |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| productId | String | Product ID of notifications to load |

---

## Templates

* *template.ng.html*

---
