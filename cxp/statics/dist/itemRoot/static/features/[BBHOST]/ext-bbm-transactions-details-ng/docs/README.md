# ext-bbm-transactions-details-ng


Version: **2.0.49**

Transaction details view for the widget-bbm-transactions-ng.

## Imports

* ui-bb-format-amount
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- transactions widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-transactions-details-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getTransaction">#getTransaction()</a><br/>
- **Intents**<br/>    <a href="#Intents_showTransactionDetails">#showTransactionDetails()</a><br/>

---

## Helpers

Helpers for ext-bbm-transactions-details-ng

### <a name="Helpers_getTransaction"></a>*#getTransaction()*

Returns the current `transaction` from the state

##### Returns

Object - *transactions Transaction from the state*

---

## Intents


### <a name="Intents_showTransactionDetails"></a>*#showTransactionDetails()*

Handles the intent to show the transaction details
