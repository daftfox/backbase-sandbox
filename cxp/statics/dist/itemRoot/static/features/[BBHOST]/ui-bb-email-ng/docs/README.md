# ui-bb-email-ng


Version: **1.8.1**

Email input custom validation directive.

## Imports

* lib-bb-email
* vendor-bb-angular

---

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## uiBbEmail

Custom form validation for email input field

## Example

```javascript
<form name="form">
  <label for="emailInputId">Email</label>
  <input type="text"
    id="emailInputId"
    name="emailInput"
    data-ng-model="email"
    ui-bb-email-ng />
    <span data-ng-if="form.emailInput.$error.uiBbEmail">
    Please input a valid Email
  </span>
</form>
```
