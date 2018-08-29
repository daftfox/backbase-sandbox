# ext-bus-accounts-ng


Version: **2.17.0**

Buisness extension for accounts.

## Imports

* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-loading-overlay-ng
* ui-bb-navigate-to-ng
* ui-bb-substitute-error-ng

---

## Example

```javascript
<!-- widget's model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-accounts-ng</value>
</property>
```

## Table of Contents
- **ext-bus-accounts-ng**<br/>    <a href="#ext-bus-accounts-ngheaders">headers</a><br/>    <a href="#ext-bus-accounts-nggetAccounts">getAccounts($ctrl)</a><br/>

---
### <a name="ext-bus-accounts-ngheaders"></a>*headers*

Table headers configuration

**Type:** *Array*


---

### <a name="ext-bus-accounts-nggetAccounts"></a>*getAccounts($ctrl)*

Gets the accounts collection from controller state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Array - *Accounts collection*

---
