# ext-bus-transaction-list-ng


Version: **2.33.1**

Business Banking: transaction table view.

## Imports

* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bb-transaction-search-filter-ng
* ui-bus-format-amount-ng
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-transaction-list-ng</value>
</property>
```

## Table of Contents
- **ext-bus-transaction-list-ng**<br/>    <a href="#ext-bus-transaction-list-ngsupportedExportFormats">supportedExportFormats</a><br/>    <a href="#ext-bus-transaction-list-ngheaders">headers</a><br/>    <a href="#ext-bus-transaction-list-ngisSortableActive">isSortableActive(sortable, sort)</a><br/>    <a href="#ext-bus-transaction-list-ngopenModalWindow">openModalWindow(ext, selectedTransaction)</a><br/>    <a href="#ext-bus-transaction-list-ngcloseModalWindow">closeModalWindow(ext)</a><br/>    <a href="#ext-bus-transaction-list-nghasValue">hasValue(value)</a><br/>    <a href="#ext-bus-transaction-list-ngisSepaDD">isSepaDD(type)</a><br/>    <a href="#ext-bus-transaction-list-ngexportFormats">exportFormats()</a><br/>    <a href="#ext-bus-transaction-list-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-transaction-list-ngisProductSelected">isProductSelected($ctrl)</a><br/>    <a href="#ext-bus-transaction-list-nggetEmptyMessage">getEmptyMessage($ctrl)</a><br/>    <a href="#ext-bus-transaction-list-ngisTransactionsAvailable">isTransactionsAvailable()</a><br/>    <a href="#ext-bus-transaction-list-ngisLoading">isLoading()</a><br/>    <a href="#ext-bus-transaction-list-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bus-transaction-list-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>    <a href="#ext-bus-transaction-list-ngisDefaultProductFirst">isDefaultProductFirst()</a><br/>
- **Type Definitions**<br/>    <a href="#Header">Header</a><br/>    <a href="#Sortable">Sortable</a><br/>

---
### <a name="ext-bus-transaction-list-ngsupportedExportFormats"></a>*supportedExportFormats*


**Type:** *Array*


---
### <a name="ext-bus-transaction-list-ngheaders"></a>*headers*

Configuration for table headers

**Type:** *Array of [Header](#Header)*


---

### <a name="ext-bus-transaction-list-ngisSortableActive"></a>*isSortableActive(sortable, sort)*

Checks if sortable object is the active one

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Sortable object to check |
| sort | Object | Current sort status |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-ngopenModalWindow"></a>*openModalWindow(ext, selectedTransaction)*

Opens the modal window with selectedTransaction

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |
| selectedTransaction | Object | transaction to be shown |

---

### <a name="ext-bus-transaction-list-ngcloseModalWindow"></a>*closeModalWindow(ext)*

Toggle row details visibility

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |

---

### <a name="ext-bus-transaction-list-nghasValue"></a>*hasValue(value)*

Check if value is defined, not null and not empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-ngisSepaDD"></a>*isSepaDD(type)*

Check if transaction type is SEPA DD

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | String | Transaction type to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-ngexportFormats"></a>*exportFormats()*

List of supported document export formats

##### Returns

Array - **

---

### <a name="ext-bus-transaction-list-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-ngisProductSelected"></a>*isProductSelected($ctrl)*

Returns boolean true if product is selected, false - otherwise

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bus-transaction-list-nggetEmptyMessage"></a>*getEmptyMessage($ctrl)*

Get the correct translated empty message when product is selected or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

String - **

---

### <a name="ext-bus-transaction-list-ngisTransactionsAvailable"></a>*isTransactionsAvailable()*

Checks if transactions data is available

##### Returns

Boolean - *returns true if transactions data is not present*

---

### <a name="ext-bus-transaction-list-ngisLoading"></a>*isLoading()*

Checks if transactions are in a loading state

##### Returns

Boolean - *returns true if transactions data is loading*

---

### <a name="ext-bus-transaction-list-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

---

### <a name="ext-bus-transaction-list-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

Return the sorting direction of the default sort column

##### Returns

String or Null - *Returns sorting direction*

---

### <a name="ext-bus-transaction-list-ngisDefaultProductFirst"></a>*isDefaultProductFirst()*

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

### <a name="Sortable"></a>*Sortable*

Sortable configuration object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| key | String | Defined sort key in the model |
| direction | String | Current sort direction (ASC, DESC) |

---
