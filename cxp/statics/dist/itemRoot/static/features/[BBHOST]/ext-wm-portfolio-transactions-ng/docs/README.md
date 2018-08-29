# ext-wm-portfolio-transactions-ng


Version: **3.12.2**

Default extension for portfolio transactions widget.

## Imports

* lib-bb-model-errors
* ui-bb-calendar-popup-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-load-more-ng
* ui-bb-loading-indicator-ng
* ui-wm-portfolio-transactions-filter-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- portfolio widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-portfolio-transactions-ng</value>
</property>
```

## Table of Contents
- **ext-wm-portfolio-transactions-ng**<br/>    <a href="#ext-wm-portfolio-transactions-ngerrors">errors</a><br/>    <a href="#ext-wm-portfolio-transactions-ngfilterTimePeriodConfig">filterTimePeriodConfig</a><br/>    <a href="#ext-wm-portfolio-transactions-ngnumberFilter">numberFilter()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngPRECISION">PRECISION</a><br/>    <a href="#ext-wm-portfolio-transactions-ngshowSign">showSign(number)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisUndefined">isUndefined(any)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngtransactionsFilterFn">transactionsFilterFn(positionType)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisPositionTypeSelected">isPositionTypeSelected(positionType)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisAllSelected">isAllSelected</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisSecuritySelected">isSecuritySelected</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisCashSelected">isCashSelected</a><br/>    <a href="#ext-wm-portfolio-transactions-ngallColumnsDefaultConfig">allColumnsDefaultConfig</a><br/>    <a href="#ext-wm-portfolio-transactions-ngcolumnsConfigByPositionType">columnsConfigByPositionType</a><br/>    <a href="#ext-wm-portfolio-transactions-nggetError">getError()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngtransactions">transactions()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisFilterApplied">isFilterApplied</a><br/>    <a href="#ext-wm-portfolio-transactions-ngmapOfOpenItems">mapOfOpenItems</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisOpen">isOpen(id)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngonToggle">onToggle(item)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngfilterOpenState">filterOpenState</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisFilterOpen">isFilterOpen()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngtoggleFilter">toggleFilter(state)</a><br/>    <a href="#ext-wm-portfolio-transactions-ngcloseFilter">closeFilter()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisTransactionCategoryShown">isTransactionCategoryShown()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisAssetClassShown">isAssetClassShown()</a><br/>    <a href="#ext-wm-portfolio-transactions-ngisAccountShown">isAccountShown()</a><br/>    <a href="#ext-wm-portfolio-transactions-nggetStatusBackground">getStatusBackground(status)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#POSITION_TYPES">POSITION_TYPES</a><br/>    <a href="#PortfolioTransaction">PortfolioTransaction</a><br/>

## Exports


## Hooks

Hooks for widget-wm-portfolio-transactions-ng

---
### <a name="ext-wm-portfolio-transactions-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

## statusBackgrounds

Relations between statuses and background color classes for these statuses

---
### <a name="ext-wm-portfolio-transactions-ngfilterTimePeriodConfig"></a>*filterTimePeriodConfig*

Ui-bb-calendar config to be used in transactions` filter`s 'Time period' date-range picker

**Type:** *[UiBbCalendarConfig](#UiBbCalendarConfig)*


---

### <a name="ext-wm-portfolio-transactions-ngnumberFilter"></a>*numberFilter()*

Memorized filter by number

---
### <a name="ext-wm-portfolio-transactions-ngPRECISION"></a>*PRECISION*

Number of decimals to display

**Type:** *Number*


---

### <a name="ext-wm-portfolio-transactions-ngshowSign"></a>*showSign(number)*

Appends + or - sign if number is positive or negative

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | Number inputed |

##### Returns

String - *String with appended sign and number*

---

### <a name="ext-wm-portfolio-transactions-ngisUndefined"></a>*isUndefined(any)*

Checks whether value is undefined

| Parameter | Type | Description |
| :-- | :-- | :-- |
| any | [value](#value) |  |

##### Returns

Boolean - **

---

### <a name="ext-wm-portfolio-transactions-ngtransactionsFilterFn"></a>*transactionsFilterFn(positionType)*

Returns a function that filters transactions by position type

| Parameter | Type | Description |
| :-- | :-- | :-- |
| positionType | [POSITION_TYPES](#POSITION_TYPES) |  |

##### Returns

Function - **

---

### <a name="ext-wm-portfolio-transactions-ngisPositionTypeSelected"></a>*isPositionTypeSelected(positionType)*

Returns boolean which tells wether given position type is currently selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| positionType | String | Transactions' position type |

##### Returns

Boolean - *Is given type selected*

---
### <a name="ext-wm-portfolio-transactions-ngisAllSelected"></a>*isAllSelected*

Tells, whether all types of transactions have to be shown

**Type:** *Boolean*


---
### <a name="ext-wm-portfolio-transactions-ngisSecuritySelected"></a>*isSecuritySelected*

Tells, whether security type of transactions has to be shown

**Type:** *Boolean*


---
### <a name="ext-wm-portfolio-transactions-ngisCashSelected"></a>*isCashSelected*

Tells, whether cash type of transactions has to be shown

**Type:** *Boolean*


---
### <a name="ext-wm-portfolio-transactions-ngallColumnsDefaultConfig"></a>*allColumnsDefaultConfig*

Default config for columns.
Specifies whether specific columns is visible by default,
and what width it has.

**Type:** *Object of String, Object*


---
### <a name="ext-wm-portfolio-transactions-ngcolumnsConfigByPositionType"></a>*columnsConfigByPositionType*

Config for changing table`s view based on selected position type.
Config contains info whether specific column should be visible
if specific position type is selected,
and how width of visible column should change if some other columns are hidden.

**Type:** *Object of [POSITION_TYPES](#POSITION_TYPES), Object*


---

### <a name="ext-wm-portfolio-transactions-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*

---

### <a name="ext-wm-portfolio-transactions-ngtransactions"></a>*transactions()*

Selector for transactions' data

##### Returns

Array - *Transactions list*

---
### <a name="ext-wm-portfolio-transactions-ngisFilterApplied"></a>*isFilterApplied*

Tells, whether filter options are applied

**Type:** *Boolean*


---
### <a name="ext-wm-portfolio-transactions-ngmapOfOpenItems"></a>*mapOfOpenItems*

Keeps ids of items that were toggled

**Type:** *Map*


---

### <a name="ext-wm-portfolio-transactions-ngisOpen"></a>*isOpen(id)*

Tells, whether item's open property is truthy

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |

##### Returns

Boolean - *Flag (true|false) that stands for open state of item*

---

### <a name="ext-wm-portfolio-transactions-ngonToggle"></a>*onToggle(item)*

Changes open state of item to the opposite

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Transaction object |

##### Returns

Map - *Map of items*

---
### <a name="ext-wm-portfolio-transactions-ngfilterOpenState"></a>*filterOpenState*

Displays current state of filter (open|closed)

**Type:** *Boolean*


---

### <a name="ext-wm-portfolio-transactions-ngisFilterOpen"></a>*isFilterOpen()*


##### Returns

[{filterOpenState: boolean}](#{filterOpenState: boolean}) - *Current state of filter*

---

### <a name="ext-wm-portfolio-transactions-ngtoggleFilter"></a>*toggleFilter(state)*

Toggles filter open state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | Current state of widget |

---

### <a name="ext-wm-portfolio-transactions-ngcloseFilter"></a>*closeFilter()*

Sets filter open state to false

---

### <a name="ext-wm-portfolio-transactions-ngisTransactionCategoryShown"></a>*isTransactionCategoryShown()*

Tells, whether filter transaction category label must be shown

##### Returns

Boolean - *Flag (true|false) that stands for display state of filter label*

---

### <a name="ext-wm-portfolio-transactions-ngisAssetClassShown"></a>*isAssetClassShown()*

Tells, whether filter asset class label must be shown

##### Returns

Boolean - *Flag (true|false) that stands for display state of filter label*

---

### <a name="ext-wm-portfolio-transactions-ngisAccountShown"></a>*isAccountShown()*

Tells, whether filter account label must be shown

##### Returns

Boolean - *Flag (true|false) that stands for display state of filter label*

---

### <a name="ext-wm-portfolio-transactions-nggetStatusBackground"></a>*getStatusBackground(status)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| status | String | Status name |

##### Returns

String - *Class name with background color*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="POSITION_TYPES"></a>*POSITION_TYPES*

Map of constants for positions types

**Type:** *Enumeration*


### <a name="PortfolioTransaction"></a>*PortfolioTransaction*

Portfolio type definition

**Type:** *Object*


---
