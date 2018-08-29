# ext-bb-transactions-extended-ng


Version: **2.33.1**

Extended extension for transactions widget.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-paginator-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bb-transaction-search-filter-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-transactions-extended-ng</value>
</property>
```

## Table of Contents
- **ext-bb-transactions-extended-ng**<br/>    <a href="#ext-bb-transactions-extended-ngcategoryClassPrefix">categoryClassPrefix</a><br/>    <a href="#ext-bb-transactions-extended-nguncategorizedIconClass">uncategorizedIconClass</a><br/>    <a href="#ext-bb-transactions-extended-nggetCategoryIconClass">getCategoryIconClass(transactionCategory, withPrefix)</a><br/>    <a href="#ext-bb-transactions-extended-ngtransactionTypes">transactionTypes</a><br/>    <a href="#ext-bb-transactions-extended-nggetSignedAmount">getSignedAmount(transaction)</a><br/>    <a href="#ext-bb-transactions-extended-ngisSortableActive">isSortableActive(sortable, sort)</a><br/>    <a href="#ext-bb-transactions-extended-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bb-transactions-extended-ngshowNoTransactions">showNoTransactions($ctrl)</a><br/>    <a href="#ext-bb-transactions-extended-ngshowNoResults">showNoResults($ctrl)</a><br/>    <a href="#ext-bb-transactions-extended-ngdateLabel">dateLabel(label)</a><br/>    <a href="#ext-bb-transactions-extended-nggetTransactionGridClassName">getTransactionGridClassName(transaction)</a><br/>    <a href="#ext-bb-transactions-extended-ngbillingStatusLabel">billingStatusLabel(label)</a><br/>    <a href="#ext-bb-transactions-extended-ngprocessTransactions">processTransactions(transactions)</a><br/>    <a href="#ext-bb-transactions-extended-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bb-transactions-extended-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>    <a href="#ext-bb-transactions-extended-ngprocessCategories">processCategories(categories)</a><br/>    <a href="#ext-bb-transactions-extended-ngprocessTransactionsEnumValues">processTransactionsEnumValues(transactionsEnumValues)</a><br/>

## Exports


## Hooks

Hooks for widget-bb-transactions-ng

---
### <a name="ext-bb-transactions-extended-ngcategoryClassPrefix"></a>*categoryClassPrefix*

Category icon CSS class prefix

**Type:** *String*


---
### <a name="ext-bb-transactions-extended-nguncategorizedIconClass"></a>*uncategorizedIconClass*

Uncategorized CSS icon class

**Type:** *String*


---

## Types

Widget custom type preferences

---

## TimePeriod

Date labels enum

---

## BillingStatus

Billing status labels enum

---

### <a name="ext-bb-transactions-extended-nggetCategoryIconClass"></a>*getCategoryIconClass(transactionCategory, withPrefix)*

Converts transaction category name into category CSS icon class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |
| withPrefix | Boolean (optional) | Include class prefix |

##### Returns

String - **

---

## headers

Table headers

---
### <a name="ext-bb-transactions-extended-ngtransactionTypes"></a>*transactionTypes*

Transaction types constant

**Type:** *[Types](#Types)*


---

### <a name="ext-bb-transactions-extended-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

---

### <a name="ext-bb-transactions-extended-ngisSortableActive"></a>*isSortableActive(sortable, sort)*

Checks sortable header matches current sort state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Sortable header item |
| sort | Object | Sort state object of the controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-extended-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-extended-ngshowNoTransactions"></a>*showNoTransactions($ctrl)*

Checks if conditions are met to show the no transactions icon and message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-extended-ngshowNoResults"></a>*showNoResults($ctrl)*

Checks if conditions are met to show the no result icon and message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-extended-ngdateLabel"></a>*dateLabel(label)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | date |

##### Returns

String - **

---

### <a name="ext-bb-transactions-extended-nggetTransactionGridClassName"></a>*getTransactionGridClassName(transaction)*

Return class name by checking the type of billing status and transaction type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

String - *class name*

---

### <a name="ext-bb-transactions-extended-ngbillingStatusLabel"></a>*billingStatusLabel(label)*

Returns label for billing status like pending or unbilled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | enum billing |

##### Returns

String - **

---

### <a name="ext-bb-transactions-extended-ngprocessTransactions"></a>*processTransactions(transactions)*

Hook for process transactions

Add debitCreditSign property to transaction

Add customType field to transaction

Sort transactions collection based on valueDate (descending)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The source transactions from the widget controller |

##### Returns

Object - *transactions grouped by date and transactions array*

---

### <a name="ext-bb-transactions-extended-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String or Null - *Returns column key*

---

### <a name="ext-bb-transactions-extended-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

Return the sorting direction of the default sort column

##### Returns

String or Null - *Returns sorting direction*

---

### <a name="ext-bb-transactions-extended-ngprocessCategories"></a>*processCategories(categories)*

Hook for processing categories

Add category icon class 'categoryIconClass' property to categories.

If at least one category has subcategories, add 'subCategories' property to all that are missing
it.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| categories | Array of Object | The source categories from the widget controller |

##### Returns

Object - *Processed categories array*

---

### <a name="ext-bb-transactions-extended-ngprocessTransactionsEnumValues"></a>*processTransactionsEnumValues(transactionsEnumValues)*

Hook for processing transactions enum values

Add labelKey and role to transactionsEnumValues.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionsEnumValues | Array of Object | The source transaction enum values from the widget controller |

##### Returns

Object - *Processed transactions enum values array*
