# ext-bus-account-statements-ng


Version: **3.2.0**

Account statemetns extension.

## Imports

* ui-bb-account-selector-ng
* ui-bb-account-statements-filter-ng
* ui-bb-checkbox-indeterminate-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-format-amount-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- account statement widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-account-statements-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_formatsMap">#formatsMap</a><br/>    <a href="#Helpers_isSortableActive">#isSortableActive(sortable, $ctrl)</a><br/>    <a href="#Helpers_removeNotification">#removeNotification(notification, notificationsList)</a><br/>    <a href="#Helpers_labels">#labels</a><br/>    <a href="#Helpers_searchBox">#searchBox</a><br/>    <a href="#Helpers_onAccountSelect">#onAccountSelect(ctrl, account)</a><br/>    <a href="#Helpers_toggleFiltering">#toggleFiltering(ctrl, isActive)</a><br/>    <a href="#Helpers_getDocumentLink">#getDocumentLink(ctrl, document)</a><br/>    <a href="#Helpers_blockIfDisabled">#blockIfDisabled($event, isDisabled)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processAccountStatements">#processAccountStatements(accounts)</a><br/>    <a href="#Hooks_processAccounts">#processAccounts(accounts)</a><br/>    <a href="#Hooks_processSelectedAccount">#processSelectedAccount(account)</a><br/>    <a href="#Hooks_defaultSortableColumn">#defaultSortableColumn()</a><br/>    <a href="#Hooks_defaultSortableDirection">#defaultSortableDirection()</a><br/>
- **Type Definitions**<br/>    <a href="#ProcessedAccount">ProcessedAccount</a><br/>

---

## Helpers

Helpers for ext-bus-account-statements-ng
### <a name="Helpers_formatsMap"></a>*#formatsMap*

As per the structure of statements it has some supported content types
and we need to map them to a readable names

**Type:** *Object*


### <a name="Helpers_isSortableActive"></a>*#isSortableActive(sortable, $ctrl)*

Helper to check whether sort is applied

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object |  |
| $ctrl | Object |  |

##### Returns

Boolean - **

### <a name="Helpers_removeNotification"></a>*#removeNotification(notification, notificationsList)*

Helper to remove notification from the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| notification | Object |  |
| notificationsList | Array |  |

##### Returns

Null - **
### <a name="Helpers_labels"></a>*#labels*

Contains translated string for account selector component

**Type:** *[Labels](ui-bb-search-box-ng.html#Labels)*

### <a name="Helpers_searchBox"></a>*#searchBox*

Contains configuration object for search box in account selector component

**Type:** *[SearchBox](#SearchBox)*


### <a name="Helpers_onAccountSelect"></a>*#onAccountSelect(ctrl, account)*

Helper to account select action

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Account statements controller |
| account | Object | Selected account |

##### Returns

Null - **

### <a name="Helpers_toggleFiltering"></a>*#toggleFiltering(ctrl, isActive)*

Helper to change the isFiltering variable (used to change empty messages)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Account statements controller |
| isActive | Boolean | is filtering or not |

### <a name="Helpers_getDocumentLink"></a>*#getDocumentLink(ctrl, document)*

Helper to get the statement URL depending on where the document is stored
(externally or via DBS)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Account statements controller |
| document | Object | the statement document |

##### Returns

String - **

### <a name="Helpers_blockIfDisabled"></a>*#blockIfDisabled($event, isDisabled)*

Helper to block the anchor to navigate if the link is disabled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $event | [Event](#Event) | Click event object |
| isDisabled | Boolean | Flag from the statement object |

##### Returns

Boolean - **

---

## Hooks

Hooks for ext-bus-product-select-ng

### <a name="Hooks_processAccountStatements"></a>*#processAccountStatements(accounts)*

Prepare the Account statements into a form ready for display to the User
eliminating the invalid url document

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of [accountStatements](#accountStatements) | The source account statements from the API |

##### Returns

Array of [accountStatements](#accountStatements) - *Processed account statements after processing*

### <a name="Hooks_processAccounts"></a>*#processAccounts(accounts)*

Prepare the fields of a Accounts into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| accounts | Array of Object | The source accounts from the API |

##### Returns

Array of [ProcessedAccount](#ProcessedAccount) - *Processed accounts*

### <a name="Hooks_processSelectedAccount"></a>*#processSelectedAccount(account)*

Prepare the fields of a Account into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | The source account from the API |

##### Returns

[ProcessedAccount](#ProcessedAccount) - *Processed account*

### <a name="Hooks_defaultSortableColumn"></a>*#defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

### <a name="Hooks_defaultSortableDirection"></a>*#defaultSortableDirection()*

Return the key of the default sort direction

##### Returns

String (optional) - **

## Type Definitions


### <a name="ProcessedAccount"></a>*ProcessedAccount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | Account ID |
| name | String | Account name |
| identifier | String | Account identifier |
| amount | String | Account amount |
| currency | String | Account amount currency |

---
