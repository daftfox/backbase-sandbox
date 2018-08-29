# ext-bbm-personal-profile-email-form-ng


Version: **2.17.1**

Mobile extension for a personal profile email form in the Mobile Personal Profile widget.

## Imports

* ui-bb-i18n-ng
* ui-bbm-switch-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- Mobile Personal Profile widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-personal-profile-email-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getEmailForm">#getEmailForm()</a><br/>    <a href="#Helpers_updateUserEmail">#updateUserEmail()</a><br/>    <a href="#Helpers_isFormValid">#isFormValid(form)</a><br/>
- **Intents**<br/>    <a href="#Intents_showPersonalProfileDetails">#showPersonalProfileDetails()</a><br/>    <a href="#Intents_showAddEmailForm">#showAddEmailForm()</a><br/>    <a href="#Intents_showEditEmailForm">#showEditEmailForm()</a><br/>
- **Events**<br/>    <a href="#bb.event.personalProfile.email.delete.start">bb.event.personalProfile.email.delete.start</a><br/>    <a href="#bb.event.personalProfile.email.delete.done">bb.event.personalProfile.email.delete.done</a><br/>    <a href="#bb.event.personalProfile.email.delete.failed">bb.event.personalProfile.email.delete.failed</a><br/>    <a href="#bb.event.personalProfile.email.create.start">bb.event.personalProfile.email.create.start</a><br/>    <a href="#bb.event.personalProfile.email.create.done">bb.event.personalProfile.email.create.done</a><br/>    <a href="#bb.event.personalProfile.email.create.failed">bb.event.personalProfile.email.create.failed</a><br/>    <a href="#bb.event.personalProfile.email.edit.start">bb.event.personalProfile.email.edit.start</a><br/>    <a href="#bb.event.personalProfile.email.edit.done">bb.event.personalProfile.email.edit.done</a><br/>    <a href="#bb.event.personalProfile.email.edit.failed">bb.event.personalProfile.email.edit.failed</a><br/>

---

## Helpers

Helpers for ext-bbm-personal-profile-email-form-ng.

### <a name="Helpers_getEmailForm"></a>*#getEmailForm()*

Retrieves an email's form data.

##### Returns

[Email](model-bb-personal-profile-ng.html#Email) - **

### <a name="Helpers_updateUserEmail"></a>*#updateUserEmail()*

Updates a user email.

##### Returns

Promise - **

### <a name="Helpers_isFormValid"></a>*#isFormValid(form)*

Checks the form validation status.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object |  |

##### Returns

Boolean - **

---

## Intents


### <a name="Intents_showPersonalProfileDetails"></a>*#showPersonalProfileDetails()*

The intent to show the personal profile details.

### <a name="Intents_showAddEmailForm"></a>*#showAddEmailForm()*

Handler of the 'intent.bb.personalProfile.email.add' intent.

### <a name="Intents_showEditEmailForm"></a>*#showEditEmailForm()*

Handler of the 'intent.bb.personalProfile.email.edit' intent.

---

## Events

### <a name="bb.event.personalProfile.email.delete.start"></a>*bb.event.personalProfile.email.delete.start*

An e-mail address will be deleted on the server

### <a name="bb.event.personalProfile.email.delete.done"></a>*bb.event.personalProfile.email.delete.done*

An e-mail address was deleted on the server

### <a name="bb.event.personalProfile.email.delete.failed"></a>*bb.event.personalProfile.email.delete.failed*

An e-mail address fails to be deleted on the server

### <a name="bb.event.personalProfile.email.create.start"></a>*bb.event.personalProfile.email.create.start*

An e-mail address will be created on the server

### <a name="bb.event.personalProfile.email.create.done"></a>*bb.event.personalProfile.email.create.done*

An e-mail address was created on the server

### <a name="bb.event.personalProfile.email.create.failed"></a>*bb.event.personalProfile.email.create.failed*

An e-mail address fails to be created on the server

### <a name="bb.event.personalProfile.email.edit.start"></a>*bb.event.personalProfile.email.edit.start*

An e-mail address will be updated on the server

### <a name="bb.event.personalProfile.email.edit.done"></a>*bb.event.personalProfile.email.edit.done*

An e-mail address was updated on the server

### <a name="bb.event.personalProfile.email.edit.failed"></a>*bb.event.personalProfile.email.edit.failed*

An e-mail address fails to be updated on the server


---
