# ext-bbm-contact-details-ng


Version: **3.6.1**

Mobile extension for a contact details view in the Contacts widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-contact-details-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getSelectedContact">#getSelectedContact()</a><br/>    <a href="#Helpers_showAvatar">#showAvatar()</a><br/>
- **Intents**<br/>    <a href="#Intents_editContact">#editContact()</a><br/>    <a href="#Intents_showContactDetails">#showContactDetails(contact)</a><br/>
- **Events**<br/>    <a href="#bb.event.contact.create.done">bb.event.contact.create.done</a><br/>    <a href="#bb.event.contact.update.done">bb.event.contact.update.done</a><br/>

---

## Helpers

Helpers for ext-bbm-contact-details-ng.

### <a name="Helpers_getSelectedContact"></a>*#getSelectedContact()*

Returns the selected `contact` from the state

##### Returns

Object - *contact The current selected contact from the state*

### <a name="Helpers_showAvatar"></a>*#showAvatar()*

Returns true if the preference is set to show an avatar. Otherwise returns false.

##### Returns

Boolean - **

---

## Intents


### <a name="Intents_editContact"></a>*#editContact()*

The intent to edit the contact

### <a name="Intents_showContactDetails"></a>*#showContactDetails(contact)*

Handles the intent to show the contact details

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | The contact to show. |

---

## Events

### <a name="bb.event.contact.create.done"></a>*bb.event.contact.create.done*

A contact has been created on the server

### <a name="bb.event.contact.update.done"></a>*bb.event.contact.update.done*

A contact has been updated on the server


---
