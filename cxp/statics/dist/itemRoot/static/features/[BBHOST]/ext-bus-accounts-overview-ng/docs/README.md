# ext-bus-accounts-overview-ng


Version: **2.19.0**

Business extension for accounts.

## Imports

* lib-bb-iban
* lib-bb-styles
* ui-bb-chartjs-chart-line-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-highlight-text-ng
* ui-bb-i18n-ng
* ui-bb-inline-status-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* ui-bb-sortable-column-ng
* ui-bb-substitute-error-ng
* ui-bus-format-amount-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-dropdown

---

## Example

```javascript
<!-- widget's model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bus-accounts-overview-ng</value>
</property>
```

## Table of Contents
- **ext-bus-accounts-overview-ng**<br/>    <a href="#ext-bus-accounts-overview-ngcardsSortBy">cardsSortBy</a><br/>    <a href="#ext-bus-accounts-overview-ngtableHeaders">tableHeaders</a><br/>    <a href="#ext-bus-accounts-overview-ngheaders">headers</a><br/>    <a href="#ext-bus-accounts-overview-ngcardsSort">cardsSort</a><br/>    <a href="#ext-bus-accounts-overview-ngisSortableActive">isSortableActive(sortable, $ctrl)</a><br/>    <a href="#ext-bus-accounts-overview-nggetAccountNumber">getAccountNumber(item)</a><br/>    <a href="#ext-bus-accounts-overview-ngisPaginationTypeMatch">isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#ext-bus-accounts-overview-nggetAccounts">getAccounts($ctrl)</a><br/>    <a href="#ext-bus-accounts-overview-ngopenModalWindow">openModalWindow(ext, accounts, selectedProduct)</a><br/>    <a href="#ext-bus-accounts-overview-ngcloseModalWindow">closeModalWindow(ext)</a><br/>    <a href="#ext-bus-accounts-overview-nggetProductTypeTemplateId">getProductTypeTemplateId(type)</a><br/>    <a href="#ext-bus-accounts-overview-ngformatBooleanToText">formatBooleanToText(value)</a><br/>    <a href="#ext-bus-accounts-overview-nghasValue">hasValue(value)</a><br/>    <a href="#ext-bus-accounts-overview-nggetFrequencyUnitKey">getFrequencyUnitKey(unit)</a><br/>    <a href="#ext-bus-accounts-overview-ngisEmptyArray">isEmptyArray(value)</a><br/>    <a href="#ext-bus-accounts-overview-ngchangeTemplateTypeView">changeTemplateTypeView(view)</a><br/>    <a href="#ext-bus-accounts-overview-ngchangeSortCardDirection">changeSortCardDirection(sortBy)</a><br/>    <a href="#ext-bus-accounts-overview-nghandleErrors">handleErrors(errors)</a><br/>    <a href="#ext-bus-accounts-overview-nglineChartOptions">lineChartOptions()</a><br/>
- **Type Definitions**<br/>    <a href="#BalanceHistoryChartData">BalanceHistoryChartData</a><br/>    <a href="#DataSets">DataSets</a><br/>    <a href="#DataSetXY">DataSetXY</a><br/>

---
### <a name="ext-bus-accounts-overview-ngcardsSortBy"></a>*cardsSortBy*

Card sortable configuration

**Type:** *Array*


---
### <a name="ext-bus-accounts-overview-ngtableHeaders"></a>*tableHeaders*

Table headers configuration

**Type:** *Array*


---

## CHART_DATASET_OPTION

chart data set options constants

---

## CSS_SELECTORS

chart css property value selectors

---

## CHART_OPTIONS

chart options constants

---
### <a name="ext-bus-accounts-overview-ngheaders"></a>*headers*

Table headers configuration

**Type:** *Array*


---
### <a name="ext-bus-accounts-overview-ngcardsSort"></a>*cardsSort*

Cards configuration for sorting

**Type:** *Array*


---

### <a name="ext-bus-accounts-overview-ngisSortableActive"></a>*isSortableActive(sortable, $ctrl)*

Checks if the sortable column is the current one, table is sorted by the
active column

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Sortable configuration |
| $ctrl | Object | Current controller |

##### Returns

Boolean - *True if table is sorted by the column, false otherwise*

---

### <a name="ext-bus-accounts-overview-nggetAccountNumber"></a>*getAccountNumber(item)*

Returns the account number with fallbacks

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Account |

##### Returns

String - *Acoount number if any*

---

### <a name="ext-bus-accounts-overview-ngisPaginationTypeMatch"></a>*isPaginationTypeMatch($ctrl, type)*

Checks if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Function | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

---

### <a name="ext-bus-accounts-overview-nggetAccounts"></a>*getAccounts($ctrl)*

Gets the accounts collection from controller state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Current controller |

##### Returns

Array - *Accounts collection*

---

### <a name="ext-bus-accounts-overview-ngopenModalWindow"></a>*openModalWindow(ext, accounts, selectedProduct)*

Opens the modal window with selectedProduct

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |
| accounts | Object | accounts state reference |
| selectedProduct | Object | product to be shown |

---

### <a name="ext-bus-accounts-overview-ngcloseModalWindow"></a>*closeModalWindow(ext)*

Closes the modal window

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |

---

### <a name="ext-bus-accounts-overview-nggetProductTypeTemplateId"></a>*getProductTypeTemplateId(type)*

Generates account details template URL

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | String | The account type |

##### Returns

String - *Generated template URL*

---

### <a name="ext-bus-accounts-overview-ngformatBooleanToText"></a>*formatBooleanToText(value)*

Transforms a boolean into human readable format

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | The boolean value |

##### Returns

String - *Formatted booelan*

---

### <a name="ext-bus-accounts-overview-nghasValue"></a>*hasValue(value)*

Check if value is defined, not null and not empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-accounts-overview-nggetFrequencyUnitKey"></a>*getFrequencyUnitKey(unit)*

Gets the translation key giving a frequency unit identifier

| Parameter | Type | Description |
| :-- | :-- | :-- |
| unit | String | Short representation of frequency unit. Possbile values are: D - day W - week M - month Y - year |

##### Returns

String - *Translation key label*

---

### <a name="ext-bus-accounts-overview-ngisEmptyArray"></a>*isEmptyArray(value)*

Checks if it is an array and it is empty

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | [*](#*) | The value to check |

##### Returns

Boolean - **

---

### <a name="ext-bus-accounts-overview-ngchangeTemplateTypeView"></a>*changeTemplateTypeView(view)*

Change template view type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| view | String | what type of template is, 'card' or 'list' |

---

### <a name="ext-bus-accounts-overview-ngchangeSortCardDirection"></a>*changeSortCardDirection(sortBy)*

Changing sort direction by asc or desc. On second click on same sort type,
the sorting is reversed (ASC/DESC)

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortBy | String | what sortable key/type to be changed direction |

---

### <a name="ext-bus-accounts-overview-nghandleErrors"></a>*handleErrors(errors)*

Handles one or multiple errors messages, mapping error key with propper message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| errors | Array |  |

##### Returns

String - *message*

---

### <a name="ext-bus-accounts-overview-nglineChartOptions"></a>*lineChartOptions()*

Configuration of balance history chart

##### Returns

Object - *Configuration of performance chart*

---

## Type Definitions


### <a name="BalanceHistoryChartData"></a>*BalanceHistoryChartData*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| arrangementId | String | Arrangement Id for mapping balance history |
| label | Array of Number | label data for x-axis |
| datasets | Array of [DataSets](#DataSets) | label data for x-axis |

### <a name="DataSets"></a>*DataSets*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| borderColor | String | Border color for data set |
| backgroundColor | String | Area Fill Background color |
| pointBorderColor | Array of String | Border color for each point |
| pointBackgroundColor | Array of String | Background color for each point |
| pointRadius | Array of String | Radius value for each point |
| pointBorderWidth | String | Point border width |
| pointHitRadius | String | Radius width for point hit |
| lineTension | String | A line tension value on line graphs |
| fill | Boolean | fill the line chart (true/false) |
| data | Array of [DataSetXY](#DataSetXY) | Data that is shown on x/y axis |

### <a name="DataSetXY"></a>*DataSetXY*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| x | String | X-axis value ticks |
| y | String | Y-axis value ticks |

---
