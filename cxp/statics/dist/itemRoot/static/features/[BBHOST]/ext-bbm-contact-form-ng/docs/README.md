# ext-bbm-contact-form-ng


Version: **3.6.1**

Mobile extension for a contact form in the Contacts widget.

## Imports

* lib-bbm-plugins
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bbm-textfield-ng
* vendor-bb-angular-ng-messages

---

## Example

```javascript
<!-- Contact widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-contact-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getSelectedContact">#getSelectedContact()</a><br/>    <a href="#Helpers_saveContact">#saveContact(contactForm)</a><br/>
- **Intents**<br/>    <a href="#Intents_createContact">#createContact()</a><br/>    <a href="#Intents_editContact">#editContact(contact)</a><br/>
- **Events**<br/>    <a href="#bb.event.contact.create.start">bb.event.contact.create.start</a><br/>    <a href="#bb.event.contact.create.done">bb.event.contact.create.done</a><br/>    <a href="#bb.event.contact.create.failed">bb.event.contact.create.failed</a><br/>    <a href="#bb.event.contact.update.start">bb.event.contact.update.start</a><br/>    <a href="#bb.event.contact.update.done">bb.event.contact.update.done</a><br/>    <a href="#bb.event.contact.update.failed">bb.event.contact.update.failed</a><br/>    <a href="#bb.event.contact.delete.start">bb.event.contact.delete.start</a><br/>    <a href="#bb.event.contact.delete.done">bb.event.contact.delete.done</a><br/>    <a href="#bb.event.contact.delete.failed">bb.event.contact.delete.failed</a><br/>    <a href="#bb.action.contact.list.show">bb.action.contact.list.show</a><br/>    <a href="#bb.action.contact.details.show">bb.action.contact.details.show</a><br/>

---

## Helpers

Helpers for ext-bbm-contact-form-ng.

### <a name="Helpers_getSelectedContact"></a>*#getSelectedContact()*

Returns the selected `contact` from the state

##### Returns

Object - *contact The current selected contact from the state*

### <a name="Helpers_saveContact"></a>*#saveContact(contactForm)*

Saves the edited contact and reset the form state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contactForm | Object | The angular contact form object |

---

## Intents


### <a name="Intents_createContact"></a>*#createContact()*

Handles the intent to create a new contact

### <a name="Intents_editContact"></a>*#editContact(contact)*

Handles the intent to edit a contact

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | The contact to edit |

---

## Events

### <a name="bb.event.contact.create.start"></a>*bb.event.contact.create.start*

A contact will be created on the server

### <a name="bb.event.contact.create.done"></a>*bb.event.contact.create.done*

A contact has been created on the server

### <a name="bb.event.contact.create.failed"></a>*bb.event.contact.create.failed*

A contact fails to be created on the server

### <a name="bb.event.contact.update.start"></a>*bb.event.contact.update.start*

A contact will be updated on the server

### <a name="bb.event.contact.update.done"></a>*bb.event.contact.update.done*

A contact has been updated on the server

### <a name="bb.event.contact.update.failed"></a>*bb.event.contact.update.failed*

A contact fails to be updated on the server

### <a name="bb.event.contact.delete.start"></a>*bb.event.contact.delete.start*

A contact will be deleted on the server

### <a name="bb.event.contact.delete.done"></a>*bb.event.contact.delete.done*

A contact has been deleted on the server

### <a name="bb.event.contact.delete.failed"></a>*bb.event.contact.delete.failed*

A contact fails to be deleted on the server

### <a name="bb.action.contact.list.show"></a>*bb.action.contact.list.show*

An event to navigate to the contact list

### <a name="bb.action.contact.details.show"></a>*bb.action.contact.details.show*

An event to navigate to the contact details


---
