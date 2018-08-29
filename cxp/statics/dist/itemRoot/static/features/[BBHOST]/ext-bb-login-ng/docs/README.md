# ext-bb-login-ng


Version: **2.5.1**

Login extension for login widget.

## Imports

* ui-bb-focus-ng
* ui-bb-i18n-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- login widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-login-ng</value>
</property>
<!--
 Login form can be extended with additional fields by attaching properties to
 extraFormFields object.
-->
<input data-ng-model="$ctrl.extraFormFields.pin"
 name="pin"
 type="password"
/>
```
