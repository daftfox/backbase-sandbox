# ext-bbm-contact-list-ng


Version: **3.7.1**

Mobile extension for a contact list in the Contacts widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng
* ui-bbm-scroll-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-contact-list-ng</value>
</property>
```

## Table of Contents
- **ext-bbm-contact-list-ng**<br/>    <a href="#ext-bbm-contact-list-nggetContactsToDisplay">getContactsToDisplay(contacts)</a><br/>
- **Helpers**<br/>    <a href="#Helpers_getContacts">#getContacts()</a><br/>    <a href="#Helpers_hasContacts">#hasContacts()</a><br/>    <a href="#Helpers_hasSearchContacts">#hasSearchContacts()</a><br/>    <a href="#Helpers_showAvatar">#showAvatar()</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_showEmptyState">#showEmptyState()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>    <a href="#Helpers_showLoadMoreLoading">#showLoadMoreLoading()</a><br/>    <a href="#Helpers_showSearch">#showSearch()</a><br/>    <a href="#Helpers_showSearchErrorState">#showSearchErrorState()</a><br/>    <a href="#Helpers_showSearchEmptyState">#showSearchEmptyState()</a><br/>    <a href="#Helpers_showSearchLoadingState">#showSearchLoadingState()</a><br/>    <a href="#Helpers_showSearchLoadMoreLoading">#showSearchLoadMoreLoading()</a><br/>    <a href="#Helpers_showLoadMore">#showLoadMore()</a><br/>    <a href="#Helpers_showSearchLoadMore">#showSearchLoadMore()</a><br/>    <a href="#Helpers_selectContact">#selectContact(contact)</a><br/>    <a href="#Helpers_loadMore">#loadMore()</a><br/>    <a href="#Helpers_searchMore">#searchMore()</a><br/>
- **Intents**<br/>    <a href="#Intents_createContact">#createContact()</a><br/>    <a href="#Intents_showContactDetails">#showContactDetails()</a><br/>    <a href="#Intents_showContactList">#showContactList()</a><br/>
- **Events**<br/>    <a href="#bb.event.contact.create.done">bb.event.contact.create.done</a><br/>    <a href="#bb.event.contact.update.done">bb.event.contact.update.done</a><br/>    <a href="#bb.event.contact.delete.done">bb.event.contact.delete.done</a><br/>

---

### <a name="ext-bbm-contact-list-nggetContactsToDisplay"></a>*getContactsToDisplay(contacts)*

Processes the list of contacts.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array of Object | The original contacts from the API |

##### Returns

Array of Object - *The list of processed contacts*

---

## Helpers

Helpers for ext-bbm-contacts-list-ng.

### <a name="Helpers_getContacts"></a>*#getContacts()*

Returns the `contacts` from the state

##### Returns

Array - *contacts List of contacts from the state*

### <a name="Helpers_hasContacts"></a>*#hasContacts()*

Returns true if there are `contacts` on the state. Otherwise returns false.

##### Returns

Boolean - **

### <a name="Helpers_hasSearchContacts"></a>*#hasSearchContacts()*

Returns true if there are searched `contacts` on the state. Otherwise returns false.

##### Returns

Boolean - **

### <a name="Helpers_showAvatar"></a>*#showAvatar()*

Returns true if the user is not searching. Otherwise returns false.

##### Returns

Boolean - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for initial loading.

##### Returns

Boolean - **

### <a name="Helpers_showEmptyState"></a>*#showEmptyState()*

Determines if the empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Determines if the error state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showLoadMoreLoading"></a>*#showLoadMoreLoading()*

Checks for the load more's loading state.

##### Returns

Boolean - **

### <a name="Helpers_showSearch"></a>*#showSearch()*

Determines if the search view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchErrorState"></a>*#showSearchErrorState()*

Determines if the search error view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchEmptyState"></a>*#showSearchEmptyState()*

Determines if the search empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadingState"></a>*#showSearchLoadingState()*

Determines if the search empty state view should be shown

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMoreLoading"></a>*#showSearchLoadMoreLoading()*

Checks for the load more's loading state.

##### Returns

Boolean - **

### <a name="Helpers_showLoadMore"></a>*#showLoadMore()*

Checks if the load more message should be visible.

##### Returns

Boolean - **

### <a name="Helpers_showSearchLoadMore"></a>*#showSearchLoadMore()*

Checks if the load more message should be visible.

##### Returns

Boolean - **

### <a name="Helpers_selectContact"></a>*#selectContact(contact)*

Sets the selected contact and fires the intent to show the contact details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | The contact to select |

### <a name="Helpers_loadMore"></a>*#loadMore()*

Loads more contacts

### <a name="Helpers_searchMore"></a>*#searchMore()*

Loads more contacts for the active search query

---

## Intents


### <a name="Intents_createContact"></a>*#createContact()*

The intent to edit the contact

### <a name="Intents_showContactDetails"></a>*#showContactDetails()*

The intent to edit the contact

### <a name="Intents_showContactList"></a>*#showContactList()*

Handles the intent to show the contact list

---

## Events

### <a name="bb.event.contact.create.done"></a>*bb.event.contact.create.done*

A contact was created on the server

### <a name="bb.event.contact.update.done"></a>*bb.event.contact.update.done*

A contact was updated on the server

### <a name="bb.event.contact.delete.done"></a>*bb.event.contact.delete.done*

A contact was deleted on the server


---
