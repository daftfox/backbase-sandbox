# ext-bb-user-identity-search-ng


Version: **1.0.1**

Default extension for widget-bb-user-identity-search-ng

## Imports

* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* vendor-bb-angular-ng-aria

---

## Table of Contents
- **ext-bb-user-identity-search-ng**<br/>    <a href="#ext-bb-user-identity-search-ngitemsFromModel">itemsFromModel(item)</a><br/>    <a href="#ext-bb-user-identity-search-ngcurrentItems">currentItems()</a><br/>    <a href="#ext-bb-user-identity-search-ngtemplate">template()</a><br/>    <a href="#ext-bb-user-identity-search-ngitems">items()</a><br/>    <a href="#ext-bb-user-identity-search-nghasItems">hasItems()</a><br/>

---

### <a name="ext-bb-user-identity-search-ngitemsFromModel"></a>*itemsFromModel(item)*

Function to process model item in order
to have it suitable for the usage within the actual template

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | from the state container to be transformed |

##### Returns

Object - *item to be used in the extension*

---

### <a name="ext-bb-user-identity-search-ngcurrentItems"></a>*currentItems()*

State selector for current items

##### Returns

Array - *items transformed for the view*

---

### <a name="ext-bb-user-identity-search-ngtemplate"></a>*template()*

Returns a current template

##### Returns

[stirng](#stirng) - *template id*

---

### <a name="ext-bb-user-identity-search-ngitems"></a>*items()*

Returns items to be used in the extension

##### Returns

Array - *item array*

---

### <a name="ext-bb-user-identity-search-nghasItems"></a>*hasItems()*

Returns true if any data is present on the state

##### Returns

Boolean - **
