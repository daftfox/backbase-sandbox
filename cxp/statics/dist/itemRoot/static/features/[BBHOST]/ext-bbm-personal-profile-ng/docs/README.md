# ext-bbm-personal-profile-ng


Version: **3.19.1**

Mobile extension for personal profile widget.

## Imports

* ui-bb-avatar-ng
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- personal profile widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-personal-profile-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_hasUser">#hasUser()</a><br/>    <a href="#Helpers_getProcessedUser">#getProcessedUser()</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>    <a href="#Helpers_showAddPhoneForm">#showAddPhoneForm()</a><br/>    <a href="#Helpers_showAddEmailForm">#showAddEmailForm()</a><br/>    <a href="#Helpers_showEditPhoneForm">#showEditPhoneForm(phone, phoneIdx)</a><br/>    <a href="#Helpers_showEditEmailForm">#showEditEmailForm(email, emailIdx)</a><br/>
- **Intents**<br/>    <a href="#Intents_showPersonalProfileDetails">#showPersonalProfileDetails()</a><br/>    <a href="#Intents_showAddEmailForm">#showAddEmailForm()</a><br/>    <a href="#Intents_showAddPhoneForm">#showAddPhoneForm()</a><br/>    <a href="#Intents_showEditEmailForm">#showEditEmailForm()</a><br/>    <a href="#Intents_showEditPhoneForm">#showEditPhoneForm()</a><br/>

---

## Helpers

Helpers for ext-bbm-personal-profile-ng

### <a name="Helpers_hasUser"></a>*#hasUser()*

Checks if the user is loaded.

##### Returns

Boolean - **

### <a name="Helpers_getProcessedUser"></a>*#getProcessedUser()*

Returns a processed user.

##### Returns

Object or Null - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for the loading.

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Checks for the error state.

##### Returns

Boolean - **

### <a name="Helpers_showAddPhoneForm"></a>*#showAddPhoneForm()*

Shows a form to create a new phone.

##### Returns

[void](#void) - **

### <a name="Helpers_showAddEmailForm"></a>*#showAddEmailForm()*

Shows a form to create a new email.

##### Returns

[void](#void) - **

### <a name="Helpers_showEditPhoneForm"></a>*#showEditPhoneForm(phone, phoneIdx)*

Shows a form to edit an existed phone.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| phone | [Phone](model-bb-personal-profile-ng.html#Phone) |  |
| phoneIdx | Number | The position of the phone in the user's phone list. |

##### Returns

[void](#void) - **

### <a name="Helpers_showEditEmailForm"></a>*#showEditEmailForm(email, emailIdx)*

Shows a form to edit an existed email.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| email | [Email](model-bb-personal-profile-ng.html#Email) |  |
| emailIdx | Number | The position of the email in the user's email list. |

##### Returns

[void](#void) - **

---

## Intents


### <a name="Intents_showPersonalProfileDetails"></a>*#showPersonalProfileDetails()*

Handler of the 'intent.bb.personalProfile.details.show' intent.

### <a name="Intents_showAddEmailForm"></a>*#showAddEmailForm()*

The intent to show the form to create an email.

### <a name="Intents_showAddPhoneForm"></a>*#showAddPhoneForm()*

The intent to show the form to create a phone.

### <a name="Intents_showEditEmailForm"></a>*#showEditEmailForm()*

The intent to show the form to edit an email.

### <a name="Intents_showEditPhoneForm"></a>*#showEditPhoneForm()*

The intent to show the form to edit a phone.
