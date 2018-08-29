# ext-bbm-initiate-payment-select-account-ng


Version: **2.36.20**

Mobile extension for the payment select account page in the Mobile initiate payment widget.
Renders either a list of debit accounts, or a list of credit accounts and contacts.

## Imports

* ui-bb-avatar-ng
* ui-bb-format-amount-ng

---

## Example

```javascript
<!-- File model.xml of widget-bbm-initiate-payment-ng -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bbm-initiate-payment-select-account-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getAccountDisplayName">#getAccountDisplayName(account)</a><br/>    <a href="#Helpers_getDebitAccounts">#getDebitAccounts()</a><br/>    <a href="#Helpers_selectAccount">#selectAccount(account)</a><br/>
- **Intents**<br/>    <a href="#Intents_selectDebitAccount">#selectDebitAccount()</a><br/>    <a href="#Intents_showDebitAccounts">#showDebitAccounts()</a><br/>

---

## Helpers

Helpers for ext-bbm-initiate-payment-select-account-ng

### <a name="Helpers_getAccountDisplayName"></a>*#getAccountDisplayName(account)*

Returns a string that will be displayed as a name of the given payment.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [AccountView](widget-bbm-initiate-payment-ng.html#AccountView) | Account to display |

##### Returns

String - **

### <a name="Helpers_getDebitAccounts"></a>*#getDebitAccounts()*

Returns the list of debit accounts.

##### Returns

[AccountView](widget-bbm-initiate-payment-ng.html#AccountView) - **

### <a name="Helpers_selectAccount"></a>*#selectAccount(account)*

Selects the given debit account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [AccountView](widget-bbm-initiate-payment-ng.html#AccountView) |  |

---

## Intents


### <a name="Intents_selectDebitAccount"></a>*#selectDebitAccount()*

The intent to select a debit account.

### <a name="Intents_showDebitAccounts"></a>*#showDebitAccounts()*

Handles the intent to show a list of debit accounts.
