# model-bb-login-ng


Version: **3.6.1**

Model for login and user menu widgets

## Imports

* data-bb-cxp-authentication-http-ng
* vendor-bb-angular

---

## Example

```javascript
import modelLoginModuleKey, { modelLoginKey } from 'model-bb-login-ng';

angular
  .module('ExampleModule', [
    modelLoginModuleKey,
  ])
  .factory('someFactory', [
    modelLoginKey,
    // into
    function someFactory(loginModel) {
      // ...
    },
  ]);
```

## Table of Contents
- **loginModel**<br/>    <a href="#loginModel_login">#login(username, password, customParams)</a><br/>    <a href="#loginModel_logout">#logout()</a><br/>

---

## loginModel

Model for widget-bb-login-ng, widget-bb-user-menu-ng and widget-bb-user-context-menu-ng

### <a name="loginModel_login"></a>*#login(username, password, customParams)*

Makes a login request

| Parameter | Type | Description |
| :-- | :-- | :-- |
| username | String |  |
| password | String |  |
| customParams | Object | Key/value pairs of additional params passed to the data module |

##### Returns

Promise - **

### <a name="loginModel_logout"></a>*#logout()*

Makes a logout request

##### Returns

Promise - **
