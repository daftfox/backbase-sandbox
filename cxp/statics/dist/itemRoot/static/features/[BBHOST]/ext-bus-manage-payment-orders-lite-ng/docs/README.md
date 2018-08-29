# ext-bus-manage-payment-orders-lite-ng


Version: **2.36.20**

Payment order overview extension.

## Imports

* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-navigate-to-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment order widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-manage-payment-orders-lite-ng</value>
</property>
```

---

## paymentStatusLookup

Lookup for different payment statues
Each object has the following properties:
icon: the type of icon, primary | warning | success | danger
name: name is used as a key for translation | i18n

---
