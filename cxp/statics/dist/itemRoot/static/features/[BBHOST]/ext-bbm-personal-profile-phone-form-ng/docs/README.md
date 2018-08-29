# ext-bbm-personal-profile-phone-form-ng


Version: **2.17.1**

Mobile extension for a personal profile phone form in the Mobile Personal Profile widget.

## Imports

* ui-bb-i18n-ng
* ui-bbm-switch-ng
* ui-bbm-textfield-ng

---

## Example

```javascript
<!-- Mobile Personal Profile widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-personal-profile-phone-form-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getPhoneFormData">#getPhoneFormData()</a><br/>    <a href="#Helpers_updateUserPhone">#updateUserPhone()</a><br/>    <a href="#Helpers_isFormValid">#isFormValid(form)</a><br/>
- **Intents**<br/>    <a href="#Intents_showPersonalProfileDetails">#showPersonalProfileDetails()</a><br/>    <a href="#Intents_showAddPhoneForm">#showAddPhoneForm()</a><br/>    <a href="#Intents_showEditPhoneForm">#showEditPhoneForm()</a><br/>
- **Events**<br/>    <a href="#bb.event.personalProfile.phone.delete.start">bb.event.personalProfile.phone.delete.start</a><br/>    <a href="#bb.event.personalProfile.phone.delete.done">bb.event.personalProfile.phone.delete.done</a><br/>    <a href="#bb.event.personalProfile.phone.failed">bb.event.personalProfile.phone.failed</a><br/>    <a href="#bb.event.personalProfile.phone.create.start">bb.event.personalProfile.phone.create.start</a><br/>    <a href="#bb.event.personalProfile.phone.create.done">bb.event.personalProfile.phone.create.done</a><br/>    <a href="#bb.event.personalProfile.phone.create.failed">bb.event.personalProfile.phone.create.failed</a><br/>    <a href="#bb.event.personalProfile.phone.edit.start">bb.event.personalProfile.phone.edit.start</a><br/>    <a href="#bb.event.personalProfile.phone.edit.done">bb.event.personalProfile.phone.edit.done</a><br/>    <a href="#bb.event.personalProfile.phone.edit.failed">bb.event.personalProfile.phone.edit.failed</a><br/>

---

## Helpers

Helpers for ext-bbm-personal-profile-phone-form-ng.

### <a name="Helpers_getPhoneFormData"></a>*#getPhoneFormData()*

Retrieves a phone's form data.

##### Returns

[Phone](model-bb-personal-profile-ng.html#Phone) - **

### <a name="Helpers_updateUserPhone"></a>*#updateUserPhone()*

Updates a user phone.

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

### <a name="Intents_showAddPhoneForm"></a>*#showAddPhoneForm()*

Handler of the 'intent.bb.personalProfile.phone.add' intent.

### <a name="Intents_showEditPhoneForm"></a>*#showEditPhoneForm()*

Handler of the 'intent.bb.personalProfile.phone.edit' intent.

---

## Events

### <a name="bb.event.personalProfile.phone.delete.start"></a>*bb.event.personalProfile.phone.delete.start*

A phone number will be deleted on the server

### <a name="bb.event.personalProfile.phone.delete.done"></a>*bb.event.personalProfile.phone.delete.done*

A phone number was deleted on the server

### <a name="bb.event.personalProfile.phone.failed"></a>*bb.event.personalProfile.phone.failed*

A phone number fails to deleted on the server

### <a name="bb.event.personalProfile.phone.create.start"></a>*bb.event.personalProfile.phone.create.start*

A phone number will be created on the server

### <a name="bb.event.personalProfile.phone.create.done"></a>*bb.event.personalProfile.phone.create.done*

A phone number was created on the server

### <a name="bb.event.personalProfile.phone.create.failed"></a>*bb.event.personalProfile.phone.create.failed*

A phone number fails to be created on the server

### <a name="bb.event.personalProfile.phone.edit.start"></a>*bb.event.personalProfile.phone.edit.start*

A phone number will be updated on the server

### <a name="bb.event.personalProfile.phone.edit.done"></a>*bb.event.personalProfile.phone.edit.done*

A phone number was updated on the server

### <a name="bb.event.personalProfile.phone.edit.failed"></a>*bb.event.personalProfile.phone.edit.failed*

A phone number fails to be updated on the server


---
