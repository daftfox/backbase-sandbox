# widget-bbm-personal-profile-ng


Version: **2.17.1**

Personal profile.

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-state-container-ng
* lib-bb-widget-ng
* model-bb-personal-profile-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="PersonalProfileController as $ctrl">
   <ul>
      <li>{{ ext.helpers.getProcessedUser().firstName }}</li>
   </ul>
 </div>
```

## Table of Contents
- **PersonalProfileController**<br/>    <a href="#PersonalProfileController_$onInit">#$onInit()</a><br/>
- **PersonalProfileService**<br/>    <a href="#PersonalProfileService_loadUser">#loadUser()</a><br/>    <a href="#PersonalProfileService_updateUserEmail">#updateUserEmail()</a><br/>    <a href="#PersonalProfileService_updateUserPhone">#updateUserPhone()</a><br/>    <a href="#PersonalProfileService_deleteUserPhone">#deleteUserPhone()</a><br/>    <a href="#PersonalProfileService_deleteUserEmail">#deleteUserEmail()</a><br/>    <a href="#PersonalProfileService_selectEmail">#selectEmail(index)</a><br/>    <a href="#PersonalProfileService_selectPhone">#selectPhone(index)</a><br/>    <a href="#PersonalProfileService_resetSelectedPhoneIfNeeded">#resetSelectedPhoneIfNeeded()</a><br/>    <a href="#PersonalProfileService_resetSelectedEmailIfNeeded">#resetSelectedEmailIfNeeded()</a><br/>    <a href="#PersonalProfileService_setPhoneForm">#setPhoneForm(phone)</a><br/>    <a href="#PersonalProfileService_setEmailForm">#setEmailForm(email)</a><br/>
- **Events**<br/>    <a href="#cxp.item.loaded">cxp.item.loaded</a><br/>    <a href="#bb.item.loaded">bb.item.loaded</a><br/>    <a href="#bb.event.personalProfile.email.create.start">bb.event.personalProfile.email.create.start</a><br/>    <a href="#bb.event.personalProfile.email.create.done">bb.event.personalProfile.email.create.done</a><br/>    <a href="#bb.event.personalProfile.email.create.failed">bb.event.personalProfile.email.create.failed</a><br/>    <a href="#bb.event.personalProfile.phone.create.start">bb.event.personalProfile.phone.create.start</a><br/>    <a href="#bb.event.personalProfile.phone.create.done">bb.event.personalProfile.phone.create.done</a><br/>    <a href="#bb.event.personalProfile.phone.create.failed">bb.event.personalProfile.phone.create.failed</a><br/>    <a href="#bb.event.personalProfile.email.edit.start">bb.event.personalProfile.email.edit.start</a><br/>    <a href="#bb.event.personalProfile.email.edit.done">bb.event.personalProfile.email.edit.done</a><br/>    <a href="#bb.event.personalProfile.email.edit.failed">bb.event.personalProfile.email.edit.failed</a><br/>    <a href="#bb.event.personalProfile.phone.edit.start">bb.event.personalProfile.phone.edit.start</a><br/>    <a href="#bb.event.personalProfile.phone.edit.done">bb.event.personalProfile.phone.edit.done</a><br/>    <a href="#bb.event.personalProfile.phone.edit.failed">bb.event.personalProfile.phone.edit.failed</a><br/>    <a href="#bb.event.personalProfile.email.delete.start">bb.event.personalProfile.email.delete.start</a><br/>    <a href="#bb.event.personalProfile.email.delete.done">bb.event.personalProfile.email.delete.done</a><br/>    <a href="#bb.event.personalProfile.email.delete.failed">bb.event.personalProfile.email.delete.failed</a><br/>    <a href="#bb.event.personalProfile.phone.delete.start">bb.event.personalProfile.phone.delete.start</a><br/>    <a href="#bb.event.personalProfile.phone.delete.done">bb.event.personalProfile.phone.delete.done</a><br/>    <a href="#bb.event.personalProfile.phone.delete.failed">bb.event.personalProfile.phone.delete.failed</a><br/>
- **Type Definitions**<br/>    <a href="#ViewState">ViewState</a><br/>

---

## PersonalProfileController

Mobile Personal profile widget controller

| Injector Key |
| :-- |
| *PersonalProfileController* |


### <a name="PersonalProfileController_$onInit"></a>*#$onInit()*

Widget initialization logic - called automatically during the angular cycle.

---

## PersonalProfileFormController

Mobile Personal profile widget form controller

| Injector Key |
| :-- |
| *PersonalProfileFormController* |


---

## PersonalProfileService

The service encapsulates the core functionality of the Mobile Personal profile Widget.
It co-ordinates the communication of data from the `Model`
with the communication with the user by updating the [ViewState](#ViewState).

Asynchronous methods update the [ViewState](#ViewState) in 3 potential
stages; "before", "success", and "error", to allow the view to
provide feedback to the user.

| Injector Key |
| :-- |
| *widget-bbm-personal-profile-ng:service* |


### <a name="PersonalProfileService_loadUser"></a>*#loadUser()*

Fetches the user and
updates the [ViewState](#ViewState) to display it.

##### Returns

Promise - **

### <a name="PersonalProfileService_updateUserEmail"></a>*#updateUserEmail()*

Update's a user's email.

##### Returns

Promise - **

### <a name="PersonalProfileService_updateUserPhone"></a>*#updateUserPhone()*

Updates a user's phone.

##### Returns

Promise - **

### <a name="PersonalProfileService_deleteUserPhone"></a>*#deleteUserPhone()*

Deletes a user's phone.

##### Returns

Promise - **

### <a name="PersonalProfileService_deleteUserEmail"></a>*#deleteUserEmail()*

Deletes a user's email.

##### Returns

Promise - **

### <a name="PersonalProfileService_selectEmail"></a>*#selectEmail(index)*

Selects an email by its position in the list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | The position of the email. |

### <a name="PersonalProfileService_selectPhone"></a>*#selectPhone(index)*

Selects a phone by its position in the list.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | The position of the phone. |

### <a name="PersonalProfileService_resetSelectedPhoneIfNeeded"></a>*#resetSelectedPhoneIfNeeded()*

Resets the selected phone if exists.

### <a name="PersonalProfileService_resetSelectedEmailIfNeeded"></a>*#resetSelectedEmailIfNeeded()*

Resets the selected email if exists.

### <a name="PersonalProfileService_setPhoneForm"></a>*#setPhoneForm(phone)*

Fills up the form with the selected phone.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| phone | [Phone](model-bb-personal-profile-ng.html#Phone) |  |

### <a name="PersonalProfileService_setEmailForm"></a>*#setEmailForm(email)*

Fills up the form with the selected email.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| email | [Email](model-bb-personal-profile-ng.html#Email) |  |

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
### <a name="bb.event.personalProfile.email.create.start"></a>*bb.event.personalProfile.email.create.start*

A newly created email is submitted to the server

### <a name="bb.event.personalProfile.email.create.done"></a>*bb.event.personalProfile.email.create.done*

A new email is created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.email.create.failed"></a>*bb.event.personalProfile.email.create.failed*

A new email fails to be created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.personalProfile.phone.create.start"></a>*bb.event.personalProfile.phone.create.start*

A newly created phone is submitted to the server

### <a name="bb.event.personalProfile.phone.create.done"></a>*bb.event.personalProfile.phone.create.done*

A new phone is created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.phone.create.failed"></a>*bb.event.personalProfile.phone.create.failed*

A new phone fails to be created on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.personalProfile.email.edit.start"></a>*bb.event.personalProfile.email.edit.start*

An email is submitted for update to the server

### <a name="bb.event.personalProfile.email.edit.done"></a>*bb.event.personalProfile.email.edit.done*

An email is updated on the server


##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.email.edit.failed"></a>*bb.event.personalProfile.email.edit.failed*

An email fails to be updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.personalProfile.phone.edit.start"></a>*bb.event.personalProfile.phone.edit.start*

A phone is submitted for update to the server

### <a name="bb.event.personalProfile.phone.edit.done"></a>*bb.event.personalProfile.phone.edit.done*

A phone is updated on the server


##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.phone.edit.failed"></a>*bb.event.personalProfile.phone.edit.failed*

A phone fails to be updated on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.personalProfile.email.delete.start"></a>*bb.event.personalProfile.email.delete.start*

An email is submitted for deletion from the server

### <a name="bb.event.personalProfile.email.delete.done"></a>*bb.event.personalProfile.email.delete.done*

An email is deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.email.delete.failed"></a>*bb.event.personalProfile.email.delete.failed*

An email fails to be deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-ng.html#ModelError) |  |
### <a name="bb.event.personalProfile.phone.delete.start"></a>*bb.event.personalProfile.phone.delete.start*

A phone is submitted for deletion from the server

### <a name="bb.event.personalProfile.phone.delete.done"></a>*bb.event.personalProfile.phone.delete.done*

A phone is deleted on the server

##### Payload


| Property | Type | Description |
| :-- | :-- | :-- |
| user | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) |  |
### <a name="bb.event.personalProfile.phone.delete.failed"></a>*bb.event.personalProfile.phone.delete.failed*

A phone fails to be deleted on the server

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
| user | Object |  |
| user.data | [UserProfile](model-bb-personal-profile-ng.html#UserProfile) | The user's personal profile data. |
| user.loading | Boolean | Indicates whether a user data is loading at the moment. |
| user.error | Object | The last encountered error. |
| form | Object |  |
| data | Object | The form's data |
| data.phone | [Phone](model-bb-personal-profile-ng.html#Phone) | The user's phone data. |
| data.email | [Email](model-bb-personal-profile-ng.html#Email) | The user's email data. |
| selectedPhone | Object |  |
| index | Number | The index of the selected phone. |
| selectedEmail | Object |  |
| index | Number | The index of the selected email. |

---

## Templates

* *template.ng.html*

---
