# widget-bbm-contact-ng


Version: **1.12.1**

Mobile contact widget.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-contact-ng
* vendor-bb-angular

---

## Table of Contents
- **ContactListController**<br/>    <a href="#ContactListController_$onInit">#$onInit()</a><br/>
- **defaultHooks**<br/>    <a href="#defaultHooks_processRequestParams">#processRequestParams(params)</a><br/>    <a href="#defaultHooks_processReloadRequestParams">#processReloadRequestParams(params)</a><br/>    <a href="#defaultHooks_processSearchRequestParams">#processSearchRequestParams(params)</a><br/>    <a href="#defaultHooks_processNewContactObject">#processNewContactObject(contact)</a><br/>    <a href="#defaultHooks_processContactBeforeSave">#processContactBeforeSave(contact)</a><br/>
- **ContactService**<br/>    <a href="#ContactService_loadMoreContacts">#loadMoreContacts()</a><br/>    <a href="#ContactService_searchMoreContacts">#searchMoreContacts()</a><br/>    <a href="#ContactService_setContacts">#setContacts()</a><br/>    <a href="#ContactService_setInitialContact">#setInitialContact()</a><br/>    <a href="#ContactService_setSelectedContact">#setSelectedContact(contact)</a><br/>    <a href="#ContactService_setSearchQuery">#setSearchQuery()</a><br/>    <a href="#ContactService_createContact">#createContact()</a><br/>    <a href="#ContactService_updateContact">#updateContact()</a><br/>    <a href="#ContactService_saveContact">#saveContact()</a><br/>    <a href="#ContactService_deleteContact">#deleteContact()</a><br/>    <a href="#ContactService_cancelSearch">#cancelSearch()</a><br/>
- **Events**<br/>    <a href="#cxp.item.loaded">cxp.item.loaded</a><br/>    <a href="#bb.item.loaded">bb.item.loaded</a><br/>    <a href="#bb.event.contact.create.start">bb.event.contact.create.start</a><br/>    <a href="#bb.event.contact.create.done">bb.event.contact.create.done</a><br/>    <a href="#bb.event.contact.create.failed">bb.event.contact.create.failed</a><br/>    <a href="#bb.event.contact.edit.start">bb.event.contact.edit.start</a><br/>    <a href="#bb.event.contact.edit.done">bb.event.contact.edit.done</a><br/>    <a href="#bb.event.contact.edit.failed">bb.event.contact.edit.failed</a><br/>    <a href="#bb.event.contact.delete.start">bb.event.contact.delete.start</a><br/>    <a href="#bb.event.contact.delete.done">bb.event.contact.delete.done</a><br/>    <a href="#bb.event.contact.delete.failed">bb.event.contact.delete.failed</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>    <a href="#RequestParams">RequestParams</a><br/>    <a href="#ContactsResponse">ContactsResponse</a><br/>    <a href="#LoadRequestParams">LoadRequestParams</a><br/>    <a href="#ContactSearchResponse">ContactSearchResponse</a><br/>    <a href="#SearchRequestParams">SearchRequestParams</a><br/>

---

## ContactListController

Mobile contact widget controller

| Injector Key |
| :-- |
| *ContactListController* |


### <a name="ContactListController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically during the angular cycle.

---

## defaultHooks

Default hooks for widget-bbm-contact-ng

### <a name="defaultHooks_processRequestParams"></a>*#processRequestParams(params)*

Default hook for contact loading query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processReloadRequestParams"></a>*#processReloadRequestParams(params)*

Default hook for contact reloading query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processSearchRequestParams"></a>*#processSearchRequestParams(params)*

Default hook for contact search query params processing/extending

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | to process |
| params.from | Number (optional) | The page to list from |
| params.query | String (optional) | The search term used to search for contact |
| params.size | Number (optional) | The number of results per page |

##### Returns

Object - *Processed params*

### <a name="defaultHooks_processNewContactObject"></a>*#processNewContactObject(contact)*

processNewContactObject default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | New Contact object |

##### Returns

Object - *Processed new Contact object*

### <a name="defaultHooks_processContactBeforeSave"></a>*#processContactBeforeSave(contact)*

processContactBeforeSave default hook

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact object to be created/updated |

##### Returns

Object - *Processed Contact object*

---

## ContactService

The service encapsulates the core functionality of the Contact
Widget. It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-contact-ng:service* |


### <a name="ContactService_loadMoreContacts"></a>*#loadMoreContacts()*

Loads more `contacts` for the currently selected product.

### <a name="ContactService_searchMoreContacts"></a>*#searchMoreContacts()*

Loads more `contacts` for the currently selected product.

### <a name="ContactService_setContacts"></a>*#setContacts()*

Sets the selected contact and updates the [ViewState](#ViewState) to display it.

### <a name="ContactService_setInitialContact"></a>*#setInitialContact()*

Sets the initial contact and updates the [ViewState](#ViewState) to display it.

### <a name="ContactService_setSelectedContact"></a>*#setSelectedContact(contact)*

Sets the selected contact and updates the [ViewState](#ViewState) to display it.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact to select |

### <a name="ContactService_setSearchQuery"></a>*#setSearchQuery()*

Cancels the search and resets the search on the [ViewState](#ViewState).

### <a name="ContactService_createContact"></a>*#createContact()*

Creates the new contact

### <a name="ContactService_updateContact"></a>*#updateContact()*

Updates the contact

### <a name="ContactService_saveContact"></a>*#saveContact()*

Determines if the contact should be created or updated and saves the contact

### <a name="ContactService_deleteContact"></a>*#deleteContact()*

Deletes the contact

### <a name="ContactService_cancelSearch"></a>*#cancelSearch()*

Cancels the search and resets the search on the [ViewState](#ViewState).

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
### <a name="bb.event.contact.create.start"></a>*bb.event.contact.create.start*

A newly created contact is submitted to the server

### <a name="bb.event.contact.create.done"></a>*bb.event.contact.create.done*

A new contact is created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| contact | [Contact](model-bb-contact-ng.html#Contact) |  |
### <a name="bb.event.contact.create.failed"></a>*bb.event.contact.create.failed*

A new contact fails to be created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.contact.edit.start"></a>*bb.event.contact.edit.start*

A contact is submitted for update to the server

### <a name="bb.event.contact.edit.done"></a>*bb.event.contact.edit.done*

A contact is updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| contact | [Contact](model-bb-contact-ng.html#Contact) |  |
### <a name="bb.event.contact.edit.failed"></a>*bb.event.contact.edit.failed*

A contact fails to be updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.contact.delete.start"></a>*bb.event.contact.delete.start*

A contact is submitted for deletion from the server

### <a name="bb.event.contact.delete.done"></a>*bb.event.contact.delete.done*

A contact is deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| contact | [Contact](model-bb-contact-ng.html#Contact) |  |
### <a name="bb.event.contact.delete.failed"></a>*bb.event.contact.delete.failed*

A contact fails to be deleted on the server

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
| contact | Object |  |
| contact.data | Object | Current contact object |
| contact.error | Object | The last encountered error |
| contact.error.message | String | Error message |
| contact.loading | Boolean | Indicates if the contact is being loaded |
| contacts | Object |  |
| contacts.data | Array of Object | Collection of contacts |
| contacts.error | Object | The last encountered error |
| contacts.error.message | String | Error message |
| contacts.loading | Boolean | Indicates if contacts are loading at the moment |
| contacts.requestParams | [RequestParams](#RequestParams) | A set of request params for loading contacts |
| contacts.totalCount | Number | Total number of contacts |
| searching | Boolean | Indicates if contacts search is active at the moment |
| search | Object |  |
| search.data | Array of Object | Collection of searched contacts |
| search.error | Object | The last encountered error |
| search.error.message | String | Error message |
| search.loading | Boolean | Indicates if search contacts are loading at the moment |
| search.requestParams | [RequestParams](#RequestParams) | A set of request params for searching contacts |
| search.totalCount | Number | Total number of search results |

### <a name="RequestParams"></a>*RequestParams*

A set of request params that defines how to load the requested data.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | The current page (0 indexed), null from the start |
| size | Number | The number of contacts in the page |
| query | String (optional) | Query search parameter |

### <a name="ContactsResponse"></a>*ContactsResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Object | Loaded contacts array |
| totalCount | Number | Total number of contacts |
| requestParams | [LoadRequestParams](#LoadRequestParams) | Request parameters object |

### <a name="LoadRequestParams"></a>*LoadRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |

### <a name="ContactSearchResponse"></a>*ContactSearchResponse*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Object | Search contacts array |
| totalCount | Number | Total number of found contacts |
| requestParams | [SearchRequestParams](#SearchRequestParams) | Request parameters object |

### <a name="SearchRequestParams"></a>*SearchRequestParams*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| from | Number | Page number to load |
| size | Number | Page size to load |
| query | String (optional) | Query search parameter |

---

## Templates

* *template.ng.html*

---
