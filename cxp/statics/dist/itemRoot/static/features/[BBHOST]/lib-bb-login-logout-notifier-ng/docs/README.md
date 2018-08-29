# lib-bb-login-logout-notifier


Version: **1.5.1**

Provides a cross-browser interface for tabs logout using localStorage
It provides a flag 'IsLoggedIn' that is persisted in localStorage between Pages with 'true'
when the user is logged in and should be removed when the user logs out.
If there's no localStorage it fallsback to normal behavior (one tab logs out and
others needs a refresh)

## Imports

* lib-bb-event-bus-ng
* vendor-bb-angular

---

## Example

```javascript
import bbLoginLogoutNotifierModuleKey,
 { bbLoginLogoutNotifierServiceKey } from 'lib-bb-login-logout-notifier-ng';

angular
  .module('ExampleModule', [
    bbLoginLogoutNotifierModuleKey,
  ])
  .controller('MyController', [
    bbLoginLogoutNotifierServiceKey,
    // into //
    (loginLogoutNotifier) => {
      const $ctrl = this;
      let unsubscribe = () => {};

      const counterStorage = 'counter';

      $ctrl.$onInit = () => {
        unsubscribe = loginLogoutNotifier.subscribeToUserLogout(() => {
          // Refresh page to respond to the logout
          window.location.assign(logoutRedirectUrl);
         });
      };

      $ctrl.$onDestroy = () => {
        unsubscribe();
      };

      const logout = () => {
         model.logout()
          .then(() => {
             // Update localStorage flag to be logged out
             loginLogoutNotifier.setUserLoggedOut();
             window.location.assign(logoutRedirectUrl);
            });
        };
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#userDataServiceKey">userDataServiceKey</a><br/>
- **lib-bb-login-logout-notifier**<br/>    <a href="#lib-bb-login-logout-notifierisLocalStorageAvailable">isLocalStorageAvailable()</a><br/>    <a href="#lib-bb-login-logout-notifiersetUserLoggedIn">setUserLoggedIn()</a><br/>    <a href="#lib-bb-login-logout-notifiersetUserLoggedOut">setUserLoggedOut()</a><br/>    <a href="#lib-bb-login-logout-notifiersubscribeToUserLogout">subscribeToUserLogout()</a><br/>    <a href="#lib-bb-login-logout-notifierinit">init()</a><br/>    <a href="#lib-bb-login-logout-notifierNOTIFICATION_LOGOUT_EVENT">NOTIFICATION_LOGOUT_EVENT</a><br/>    <a href="#lib-bb-login-logout-notifierLOCAL_STORAGE_KEY">LOCAL_STORAGE_KEY</a><br/>

## Exports

### <a name="userDataServiceKey"></a>*userDataServiceKey*

User data service name

**Type:** *String*


---

### <a name="lib-bb-login-logout-notifierisLocalStorageAvailable"></a>*isLocalStorageAvailable()*

Checks if local storage is available on current browser

##### Returns

Boolean - **

---

### <a name="lib-bb-login-logout-notifiersetUserLoggedIn"></a>*setUserLoggedIn()*

The property IsLoggedIn should be set true
if tuser log in

---

### <a name="lib-bb-login-logout-notifiersetUserLoggedOut"></a>*setUserLoggedOut()*

The property IsLoggedIn should be set false
if tuser log out

---

### <a name="lib-bb-login-logout-notifiersubscribeToUserLogout"></a>*subscribeToUserLogout()*

listen for Logout event to execute whatever widgets
needs after logout (Ex: refresh pages to logout from all pages)

##### Returns

Function - *unsubscribe from the logout event*

---

### <a name="lib-bb-login-logout-notifierinit"></a>*init()*

Binds 'storage' change event

---
### <a name="lib-bb-login-logout-notifierNOTIFICATION_LOGOUT_EVENT"></a>*NOTIFICATION_LOGOUT_EVENT*

event name that should be triggered once user logout

**Type:** *String*


---
### <a name="lib-bb-login-logout-notifierLOCAL_STORAGE_KEY"></a>*LOCAL_STORAGE_KEY*

The flag name which will be true when user are logged in

**Type:** *String*

