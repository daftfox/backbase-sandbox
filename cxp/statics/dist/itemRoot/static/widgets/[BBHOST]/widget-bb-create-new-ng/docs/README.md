# widget-bb-create-new-ng


Version: **1.5.2**

Redirect user to "create new" locations of other widgets

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-permissions-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
<div ng-controller="CreateNewController as $ctrl">
 </div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **CreateNewController**<br/>    <a href="#CreateNewController_navigateTo">#navigateTo(action)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_getActionsList">#getActionsList()</a><br/>    <a href="#Hooks_getActionNames">#getActionNames()</a><br/>    <a href="#Hooks_getActionEvents">#getActionEvents()</a><br/>    <a href="#Hooks_getRequestedPrivileges">#getRequestedPrivileges()</a><br/>

## Exports

### <a name="default"></a>*default*

Create New Widget

**Type:** *String*


---

## CreateNewController

Create new widget controller.

| Injector Key |
| :-- |
| *CreateNewController* |


### <a name="CreateNewController_navigateTo"></a>*#navigateTo(action)*

Navigate to selected widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| action | String |  |

##### Returns

Undefined - **

---

## Hooks

Default hooks for widget-bb-create-new-ng

### <a name="Hooks_getActionsList"></a>*#getActionsList()*

Hook for getting the list of allowed redirections

##### Returns

Array - *actions*

### <a name="Hooks_getActionNames"></a>*#getActionNames()*

Returns a list of action names allowed for a user

##### Returns

Array - **

### <a name="Hooks_getActionEvents"></a>*#getActionEvents()*

Returns a list of event names

##### Returns

Array - **

### <a name="Hooks_getRequestedPrivileges"></a>*#getRequestedPrivileges()*

Prepare required privileges into a form ready for template

##### Returns

Array of Object - *Required privileges array*

## Templates

* *template.ng.html*

---
