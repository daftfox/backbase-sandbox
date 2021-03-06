# ext-bb-transactions-ng


Version: **2.34.0**

Default extension for transactions widget.

## Imports

* ui-bb-date-label-filter-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-substitute-error-ng
* ui-bb-transaction-search-filter-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-alert

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-transactions-ng</value>
</property>
```

## Table of Contents
- **ext-bb-transactions-ng**<br/>    <a href="#ext-bb-transactions-ngcategoryClassPrefix">categoryClassPrefix</a><br/>    <a href="#ext-bb-transactions-nguncategorizedIconClass">uncategorizedIconClass</a><br/>    <a href="#ext-bb-transactions-nggetCategoryIconClass">getCategoryIconClass(transactionCategory, withPrefix)</a><br/>    <a href="#ext-bb-transactions-ngtransactionTypes">transactionTypes</a><br/>    <a href="#ext-bb-transactions-nggetSignedAmount">getSignedAmount(transaction)</a><br/>    <a href="#ext-bb-transactions-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bb-transactions-ngshowNoTransactions">showNoTransactions($ctrl)</a><br/>    <a href="#ext-bb-transactions-ngshowNoResults">showNoResults($ctrl)</a><br/>    <a href="#ext-bb-transactions-ngdateLabel">dateLabel(label)</a><br/>    <a href="#ext-bb-transactions-ngbillingStatusLabel">billingStatusLabel(label)</a><br/>    <a href="#ext-bb-transactions-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-bb-transactions-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>    <a href="#ext-bb-transactions-ngdefaultPaginationType">defaultPaginationType(pagination)</a><br/>    <a href="#ext-bb-transactions-ngprocessTransactions">processTransactions(transactions)</a><br/>    <a href="#ext-bb-transactions-ngprocessExportRequestParams">processExportRequestParams(params, state)</a><br/>    <a href="#ext-bb-transactions-ngsetChangeTransCategoryIntent">setChangeTransCategoryIntent()</a><br/>    <a href="#ext-bb-transactions-ngprocessCategories">processCategories(categories)</a><br/>    <a href="#ext-bb-transactions-ngprocessTransactionsEnumValues">processTransactionsEnumValues(transactionsEnumValues)</a><br/>

## Exports


## Hooks

Hooks for widget-bb-transactions-ng

---
### <a name="ext-bb-transactions-ngcategoryClassPrefix"></a>*categoryClassPrefix*

Category icon CSS class prefix

**Type:** *String*


---
### <a name="ext-bb-transactions-nguncategorizedIconClass"></a>*uncategorizedIconClass*

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

### <a name="ext-bb-transactions-nggetCategoryIconClass"></a>*getCategoryIconClass(transactionCategory, withPrefix)*

Converts transaction category name into category CSS icon class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |
| withPrefix | Boolean (optional) | Include class prefix |

##### Returns

String - **

---
### <a name="ext-bb-transactions-ngtransactionTypes"></a>*transactionTypes*

Transaction types constant

**Type:** *[Types](#Types)*


---

### <a name="ext-bb-transactions-nggetSignedAmount"></a>*getSignedAmount(transaction)*

Based on credit/debit indicator, put right sign on the transaction amount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transaction | Object | Transaction object |

##### Returns

Number - *Signed amount*

---

### <a name="ext-bb-transactions-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-ngshowNoTransactions"></a>*showNoTransactions($ctrl)*

Checks if conditions are met to show the no transactions icon and message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-ngshowNoResults"></a>*showNoResults($ctrl)*

Checks if conditions are met to show the no result icon and message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |

##### Returns

Boolean - **

---

### <a name="ext-bb-transactions-ngdateLabel"></a>*dateLabel(label)*

Returns either label like now, today or yesterday or the actual date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | date |

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngbillingStatusLabel"></a>*billingStatusLabel(label)*

Returns label for billing status like pending or unbilled

| Parameter | Type | Description |
| :-- | :-- | :-- |
| label | String | enum billing |

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

defaultSortableColumn default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

defaultSortableDirection default hook

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngdefaultPaginationType"></a>*defaultPaginationType(pagination)*

defaultPaginationType default hook for setting load-more or pagination as default

| Parameter | Type | Description |
| :-- | :-- | :-- |
| pagination | String | type |

##### Returns

String (optional) - **

---

### <a name="ext-bb-transactions-ngprocessTransactions"></a>*processTransactions(transactions)*

Hook for process transactions

Add debitCreditSign property to transaction

Add customType field to transaction

Sort transactions collection based on valueDate (descending)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactions | Array of Object | The source transactions from the widget controller |

##### Returns

Object - *Processed transaction array*

---

### <a name="ext-bb-transactions-ngprocessExportRequestParams"></a>*processExportRequestParams(params, state)*

Hook for transactions query params processing/extending.

Set the from/size params to export all transactions up until the current page (i.e., in case of
load-more, all transactions visible on the screen).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | [ExportRequestParams](#ExportRequestParams) | Params to process |
| state | [ViewState](#ViewState) | Widget state |

##### Returns

[ExportRequestParams](#ExportRequestParams) - *Processed params*

---

### <a name="ext-bb-transactions-ngsetChangeTransCategoryIntent"></a>*setChangeTransCategoryIntent()*

Default hook for setting the intent to trigger the change transaction
category widget

##### Returns

String - **

---

### <a name="ext-bb-transactions-ngprocessCategories"></a>*processCategories(categories)*

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

### <a name="ext-bb-transactions-ngprocessTransactionsEnumValues"></a>*processTransactionsEnumValues(transactionsEnumValues)*

Hook for processing transactions enum values

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionsEnumValues | Array of Object | The source transactions enum values from the widget controller |

##### Returns

Object - *Processed transactions enum values array*
