# ui-bb-focus-ng


Version: **2.5.1**

Directive to focus HTML elements on condition.

## Imports

* vendor-bb-angular

---

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-focus-ng**<br/>    <a href="#ui-bb-focus-nguiBbFocus">uiBbFocus()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

### <a name="ui-bb-focus-nguiBbFocus"></a>*uiBbFocus()*

Directive which focuses element it applied to, when provided expression evaluates to true.

## Example

```javascript
<form name="form">
  <input type="text" name="fullName" ui-bb-focus-ng="form.fullName.$invalid">
</form>
```
