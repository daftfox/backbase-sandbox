# ext-bb-action-recipes-ng


Version: **2.9.1**

Action Recipes default extension.

## Imports

* ui-bb-account-selector-ng
* ui-bb-confirm-ng
* ui-bb-currency-input-ng
* ui-bb-dropdown-select-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-substitute-error-ng
* ui-bb-switcher-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- messages widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bb-action-recipes-ng</value>
</property>
```

## Table of Contents
- **ext-bb-action-recipes-ng**<br/>    <a href="#ext-bb-action-recipes-ngisValid">isValid()</a><br/>
- **CreditTransactionFilter**<br/>    <a href="#CreditTransactionFilter_changeAccount">#changeAccount(account)</a><br/>
- **filterHelpers**<br/>    <a href="#filterHelpers_findFilter">#findFilter(trigger)</a><br/>    <a href="#filterHelpers_isTriggerFilterEmpty">#isTriggerFilterEmpty(trigger)</a><br/>    <a href="#filterHelpers_isTriggerSelectorsEmpty">#isTriggerSelectorsEmpty(trigger)</a><br/>    <a href="#filterHelpers_isTriggerEmpty">#isTriggerEmpty(trigger)</a><br/>
- **AccountLowBalanceFilter**<br/>    <a href="#AccountLowBalanceFilter_changeAccount">#changeAccount(account)</a><br/>

---

### <a name="ext-bb-action-recipes-ngisValid"></a>*isValid()*

Validate Recipe data.

##### Returns

Boolean - *true if recipe passes the validation*

---

## CreditTransactionFilter


### <a name="CreditTransactionFilter_changeAccount"></a>*#changeAccount(account)*

Handles change of selected account. Changes the currency of this filter to
the currency of the selected account. Retains the old inputted amount value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | the newly selected account |

---

## filterHelpers


### <a name="filterHelpers_findFilter"></a>*#findFilter(trigger)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| trigger | Object | trigger to check |

##### Returns

Object - **

### <a name="filterHelpers_isTriggerFilterEmpty"></a>*#isTriggerFilterEmpty(trigger)*

Checks empty state the given trigger's filter.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| trigger | Object | trigger to check |

##### Returns

Boolean - *True if trigger's filter is empty*

### <a name="filterHelpers_isTriggerSelectorsEmpty"></a>*#isTriggerSelectorsEmpty(trigger)*

Checks empty state the given trigger's selectors.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| trigger | Object | trigger to check |

##### Returns

Boolean - *True if trigger's selectors is empty*

### <a name="filterHelpers_isTriggerEmpty"></a>*#isTriggerEmpty(trigger)*

Checks empty state the given trigger (looks on trigger's filter and its selectors).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| trigger | Object | trigger to check |

##### Returns

Boolean - *True if trigger's filter and its selectors are empty*

---

## AccountLowBalanceFilter


### <a name="AccountLowBalanceFilter_changeAccount"></a>*#changeAccount(account)*

Handles change of selected account. Changes the currency of this filter to
the currency of the selected account. Retains the old inputted amount value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | the newly selected account |
