# ext-bus-transaction-list-lite-ng


Version: **2.33.1**

Business Banking: transaction table view.

## Imports

* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-navigate-to-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-transaction-list-lite-ng</value>
</property>
```

## Table of Contents
- **ext-bus-transaction-list-lite-ng**<br/>    <a href="#ext-bus-transaction-list-lite-ngheaders">headers</a><br/>    <a href="#ext-bus-transaction-list-lite-ngisProductSelected">isProductSelected($ctrl)</a><br/>    <a href="#ext-bus-transaction-list-lite-nggetEmptyMessage">getEmptyMessage($ctrl)</a><br/>    <a href="#ext-bus-transaction-list-lite-ngisDefaultProductFirst">isDefaultProductFirst()</a><br/>
- **Type Definitions**<br/>    <a href="#Header">Header</a><br/>

---
### <a name="ext-bus-transaction-list-lite-ngheaders"></a>*headers*

Configuration for table headers

**Type:** *Array of [Header](#Header)*


---

### <a name="ext-bus-transaction-list-lite-ngisProductSelected"></a>*isProductSelected($ctrl)*

Returns boolean true if product is selected, false - otherwise

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-lite-nggetEmptyMessage"></a>*getEmptyMessage($ctrl)*

Get the correct transalated empty message when product is selected or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

String - **

---

### <a name="ext-bus-transaction-list-lite-ngisDefaultProductFirst"></a>*isDefaultProductFirst()*

True if should return first product if selected product is not set.

##### Returns

Boolean - **

## Type Definitions


### <a name="Header"></a>*Header*

Header configuration object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Translation key |
| class | String | CSS class name |
| isHidden | Function | Check if header is hidden |
| sortable | [Sortable](#Sortable) | Sortable configuration |

---
