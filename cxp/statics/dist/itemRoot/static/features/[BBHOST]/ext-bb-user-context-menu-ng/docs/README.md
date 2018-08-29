# ext-bb-user-context-menu-ng


Version: **2.4.2**

Default extension for User Context Menu widget.

## Imports

* ui-bb-autocomplete-search-ng
* ui-bb-avatar-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-i18n-ng
* ui-bb-modal-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-popover

---

## Example

```javascript
<!-- User Context Menu widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-user-context-menu-ng</value>
</property>
```

## Table of Contents
- **ext-bb-user-context-menu-ng**<br/>    <a href="#ext-bb-user-context-menu-ngisContextSelected">isContextSelected(state)</a><br/>
- **Type Definitions**<br/>    <a href="#User">User</a><br/>    <a href="#Portal">Portal</a><br/>

---

---

### <a name="ext-bb-user-context-menu-ngisContextSelected"></a>*isContextSelected(state)*

Checks if all necessary properties are defined for selecting a context

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state |

##### Returns

Boolean - **

---

## Type Definitions


### <a name="User"></a>*User*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | Name that should be displayed on page |
| username | String (optional) | Internal user identifier |

### <a name="Portal"></a>*Portal*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| loggedInUserId | String | Internally used unique identification of the user |

---
