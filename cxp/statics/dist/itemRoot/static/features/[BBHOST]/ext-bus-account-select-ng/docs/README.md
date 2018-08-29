# ext-bus-account-select-ng


Version: **2.17.0**

Product select extension for accounts overview widget.

## Imports

* ui-bb-account-selector-ng
* ui-bb-i18n-ng
* ui-bb-loading-overlay-ng
* ui-bus-format-amount-ng

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-account-select-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_labels">#labels</a><br/>    <a href="#Helpers_searchBox">#searchBox</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processAccounts">#processAccounts(accounts)</a><br/>    <a href="#Hooks_processSelectedAccount">#processSelectedAccount(account)</a><br/>
- **Type Definitions**<br/>    <a href="#SearchBox">SearchBox</a><br/>    <a href="#ProcessedAccount">ProcessedAccount</a><br/>

---

## Helpers

Helpers for ext-bus-product-select-ng
### <a name="Helpers_labels"></a>*#labels*

Contains translated string for account selector component

**Type:** *[Labels](ui-bb-search-box-ng.html#Labels)*

### <a name="Helpers_searchBox"></a>*#searchBox*

Contains configuration object for search box in account selector component

**Type:** *[SearchBox](#SearchBox)*


---

## Hooks

Hooks for ext-bus-product-select-ng

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

## Type Definitions


### <a name="SearchBox"></a>*SearchBox*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| minLength | Number (optional) | Determines minimum length of query string to apply search |
| config | [Config](ui-bb-search-box-ng.html#Config) (optional) | Search box config object |

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
