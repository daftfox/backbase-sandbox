# ext-wm-portfolio-summary-extended-ng


Version: **3.12.2**

Additional extension for portfolio summary widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* lib-wm-pluralize-i18n-key-filter-ng
* ui-bb-chartjs-chart-donut-ng
* ui-bb-confirm-ng
* ui-bb-dropdown-select-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* ui-bb-sortable-column-ng
* vendor-bb-angular-ng-messages
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- portfolio widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-portfolio-summary-extended-ng</value>
</property>
```

## Table of Contents
- **ext-wm-portfolio-summary-extended-ng**<br/>    <a href="#ext-wm-portfolio-summary-extended-ngerrors">errors</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngNAME_INPUT_VALIDATION_PATTERN">NAME_INPUT_VALIDATION_PATTERN</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngsortAlphabetically">sortAlphabetically(list, key)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngPRECISION">PRECISION</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nglocalizeNumber">localizeNumber(number)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetNetCashTotalAmount">getNetCashTotalAmount(inCashTotalAmountIncoming, outCashTotalAmount)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisSortableActive">isSortableActive(sortable, sort)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngshowSign">showSign(number)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngchartOptions">chartOptions</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngDISMISS_MESSAGE_TIME">DISMISS_MESSAGE_TIME</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngnotificationSuccess">notificationSuccess(i18nKeyName)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngnotificationError">notificationError(i18nKeyName)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngnotificationAddFavorites">notificationAddFavorites()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngnotificationRemoveFavorites">notificationRemoveFavorites(i18nKeyName)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngcloseNotification">closeNotification()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetNotifications">getNotifications()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nginitModal">initModal(modalConfig)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetModalData">getModalData()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngcancel">cancel()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngsetSelectedList">setSelectedList(ctrl, selectedList)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngcreateNewList">createNewList($ctrl, list)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngrenameCustomList">renameCustomList(ctrl, list, uuid)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngshowCreateNewListModal">showCreateNewListModal()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngshowEditListModal">showEditListModal()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngplugins">plugins</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisPortfoliosAvailable">isPortfoliosAvailable(portfolios)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngportfolios">portfolios(data)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngsearchPortfolios">searchPortfolios($ctrl)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetError">getError()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetMessageForNoPortfolio">getMessageForNoPortfolio()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngtoggleAll">toggleAll()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisOpen">isOpen(id, index)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngonToggle">onToggle(id)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisChecked">isChecked()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisAllChecked">isAllChecked()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetCustomListDefault">getCustomListDefault()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetCustomListFilterState">getCustomListFilterState()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetCustomLists">getCustomLists()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisNameDuplicate">isNameDuplicate()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetExistingCustomLists">getExistingCustomLists()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngarePortfoliosSelected">arePortfoliosSelected()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetSelectedPortfolios">getSelectedPortfolios()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngselectedPortfoliosAmount">selectedPortfoliosAmount()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngonExistingListSelect">onExistingListSelect($ctrl, Array)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngafterLoadCustomLists">afterLoadCustomLists()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngisCustomListSelected">isCustomListSelected()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngonCustomListDelete">onCustomListDelete()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngonPortfolioFromListDelete">onPortfolioFromListDelete()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngtogglePortfolioAsFavorite">togglePortfolioAsFavorite(toggleFn, IBAN, isFavorite)</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggoToFavorites">goToFavorites()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-nggetNotificationWithLink">getNotificationWithLink()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngshouldDisableAddToCustomListDropdown">shouldDisableAddToCustomListDropdown()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngdefaultSortableColumn">defaultSortableColumn()</a><br/>    <a href="#ext-wm-portfolio-summary-extended-ngdefaultSortableDirection">defaultSortableDirection()</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#Portfolio">Portfolio</a><br/>    <a href="#BBSeriesPortfolio">BBSeriesPortfolio</a><br/>    <a href="#PortfolioDataset">PortfolioDataset</a><br/>    <a href="#Dataset">Dataset</a><br/>    <a href="#AssetClass">AssetClass</a><br/>    <a href="#attorney">attorney</a><br/>    <a href="#manager">manager</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>

## Exports


## Hooks

Hooks for widget-wm-portfolio-summary-extended-ng

---
### <a name="ext-wm-portfolio-summary-extended-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---
### <a name="ext-wm-portfolio-summary-extended-ngNAME_INPUT_VALIDATION_PATTERN"></a>*NAME_INPUT_VALIDATION_PATTERN*

Regular expression for input field

**Type:** *String*


---

## validation

Contains config used to validate input field

---

### <a name="ext-wm-portfolio-summary-extended-ngsortAlphabetically"></a>*sortAlphabetically(list, key)*

Sorts given list of items alphabetically

| Parameter | Type | Description |
| :-- | :-- | :-- |
| list | undefined | Array of items to be sorted |
| key | undefined | Filb. by which list will be sorted |

##### Returns

Array - *Sorted list*

---

## addToExistingListDefaultItem

Holds default custom lists filter state

---
### <a name="ext-wm-portfolio-summary-extended-ngPRECISION"></a>*PRECISION*

Number of decimals to display

**Type:** *Number*


---

### <a name="ext-wm-portfolio-summary-extended-nglocalizeNumber"></a>*localizeNumber(number)*

Transform number to its localized string representation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | number to localize |

##### Returns

String - **

---

### <a name="ext-wm-portfolio-summary-extended-nggetNetCashTotalAmount"></a>*getNetCashTotalAmount(inCashTotalAmountIncoming, outCashTotalAmount)*

Substitutes outCashTotalAmount from inCashTotalAmount value and returns new value of netCashTotalAmount

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inCashTotalAmountIncoming | Number | Cash for the period of time amaunt value |
| outCashTotalAmount | Number | Outgoing cash for the period of time amaunt value |

##### Returns

Number - **

---

### <a name="ext-wm-portfolio-summary-extended-ngisSortableActive"></a>*isSortableActive(sortable, sort)*

Checks if actual sortable key equal to orderBy state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| sortable | Object | Object with sortable props |
| sort | [oblect](#oblect) | Sort state of controller |

##### Returns

Boolean - **

---

### <a name="ext-wm-portfolio-summary-extended-ngshowSign"></a>*showSign(number)*

Appends + or - sign if number is positive or negative

| Parameter | Type | Description |
| :-- | :-- | :-- |
| number | Number | Number inputed |

##### Returns

String - *String with appended sign and number*

---
### <a name="ext-wm-portfolio-summary-extended-ngchartOptions"></a>*chartOptions*

Object with chart options that need to be overriden

**Type:** *[ChartjsSettings](#ChartjsSettings)*


---

## modal

Contains default modal config (if any) used to init the modal window

---
### <a name="ext-wm-portfolio-summary-extended-ngDISMISS_MESSAGE_TIME"></a>*DISMISS_MESSAGE_TIME*

Dismiss message time of notification

**Type:** *Number*


---

## notifications

Contains default notification config (if any) used to init notification popup

---

### <a name="ext-wm-portfolio-summary-extended-ngnotificationSuccess"></a>*notificationSuccess(i18nKeyName)*

Function that invokes a successful notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| i18nKeyName | String | i18n name of notification to display in message |

---

### <a name="ext-wm-portfolio-summary-extended-ngnotificationError"></a>*notificationError(i18nKeyName)*

Function that invokes a error notification

| Parameter | Type | Description |
| :-- | :-- | :-- |
| i18nKeyName | String | i18n name of notification to display in message |

---

### <a name="ext-wm-portfolio-summary-extended-ngnotificationAddFavorites"></a>*notificationAddFavorites()*

Function that invokes a notification when portfolio is added to favorites list

---

### <a name="ext-wm-portfolio-summary-extended-ngnotificationRemoveFavorites"></a>*notificationRemoveFavorites(i18nKeyName)*

Function that invokes a notification when portfolio is removed from favorites list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| i18nKeyName | String | i18n name of notification to display in message |

---

### <a name="ext-wm-portfolio-summary-extended-ngcloseNotification"></a>*closeNotification()*

Function that closes notifications

---

### <a name="ext-wm-portfolio-summary-extended-nggetNotifications"></a>*getNotifications()*

Function that gets notifications configuration object

##### Returns

Object - **

---

### <a name="ext-wm-portfolio-summary-extended-nginitModal"></a>*initModal(modalConfig)*

Get modal widget data

| Parameter | Type | Description |
| :-- | :-- | :-- |
| modalConfig | Object | Config modal object |

---

### <a name="ext-wm-portfolio-summary-extended-nggetModalData"></a>*getModalData()*

Get modal widget data

##### Returns

Object - **

---

### <a name="ext-wm-portfolio-summary-extended-ngcancel"></a>*cancel()*

Cancel / close the modal window

##### Returns

[void](#void) - **

---

### <a name="ext-wm-portfolio-summary-extended-ngsetSelectedList"></a>*setSelectedList(ctrl, selectedList)*

Set selected list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Controller object |
| selectedList | Object | Selected list object |

---

### <a name="ext-wm-portfolio-summary-extended-ngcreateNewList"></a>*createNewList($ctrl, list)*

Create new list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Controller object |
| list | Object | Custom list object |

---

### <a name="ext-wm-portfolio-summary-extended-ngrenameCustomList"></a>*renameCustomList(ctrl, list, uuid)*

Edit custom list name

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | Object | Controller object |
| list | Object | New list name |
| uuid | String | Custom list uuid |

---

### <a name="ext-wm-portfolio-summary-extended-ngshowCreateNewListModal"></a>*showCreateNewListModal()*

Show create new list modal

##### Returns

Object - *Config modal object*

---

### <a name="ext-wm-portfolio-summary-extended-ngshowEditListModal"></a>*showEditListModal()*

Show edit list modal

##### Returns

Object - *Config modal object*

---
### <a name="ext-wm-portfolio-summary-extended-ngplugins"></a>*plugins*

Array with plugins objects for chartjs

**Type:** *Array*


---

### <a name="ext-wm-portfolio-summary-extended-ngisPortfoliosAvailable"></a>*isPortfoliosAvailable(portfolios)*

Checks if portfolios data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| portfolios | Object |  |

##### Returns

Boolean - *returns true if portfolios data is not present*

---

### <a name="ext-wm-portfolio-summary-extended-ngportfolios"></a>*portfolios(data)*

Selector for portfolio data processing

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Array of [Portfolio](#Portfolio) | original data object |

##### Returns

Array of [Portfolio](#Portfolio) - *data processed data object*

---

### <a name="ext-wm-portfolio-summary-extended-ngsearchPortfolios"></a>*searchPortfolios($ctrl)*

Performs search portfolios by query string parameter

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Controller of the widget |

---

### <a name="ext-wm-portfolio-summary-extended-nggetError"></a>*getError()*

Returns error object by error code

---

### <a name="ext-wm-portfolio-summary-extended-nggetMessageForNoPortfolio"></a>*getMessageForNoPortfolio()*

Returns correct generic message for empty-state

##### Returns

Object - *Message object*

---

### <a name="ext-wm-portfolio-summary-extended-ngtoggleAll"></a>*toggleAll()*

Toggles selected state for all portfolios

##### Returns

[void](#void) - **

---

### <a name="ext-wm-portfolio-summary-extended-ngisOpen"></a>*isOpen(id, index)*

Tells, whether item's open property is truthy

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |
| index | Number | Index of portfolio in portfolios collection |

##### Returns

Boolean - *Flag (true|false) that stands for open state of item*

---

### <a name="ext-wm-portfolio-summary-extended-ngonToggle"></a>*onToggle(id)*

Changes open state of item to the opposite

| Parameter | Type | Description |
| :-- | :-- | :-- |
| id | Number |  |

##### Returns

Map - *Map of items*

---

### <a name="ext-wm-portfolio-summary-extended-ngisChecked"></a>*isChecked()*

Checks whether portfolio item is checked

##### Returns

Boolean - *State of portfolio item selection*

---

### <a name="ext-wm-portfolio-summary-extended-ngisAllChecked"></a>*isAllChecked()*

Checks if all portfolios are checked

##### Returns

Boolean - *Returns true if all portfolios are checked*

---

## allPortfoliosCustomListItem

Holds default custom lists filter state

---

### <a name="ext-wm-portfolio-summary-extended-nggetCustomListDefault"></a>*getCustomListDefault()*

Returns default custom list value

##### Returns

Object - *Custom list object*

---

## existingListEmptyItem

Holds default custom lists empty filter state

---

### <a name="ext-wm-portfolio-summary-extended-nggetCustomListFilterState"></a>*getCustomListFilterState()*

Returns correct custom lists filter state

##### Returns

Object - *Filter state*

---

### <a name="ext-wm-portfolio-summary-extended-nggetCustomLists"></a>*getCustomLists()*

Selector for all custom lists

##### Returns

Array - *Custom lists*

---

### <a name="ext-wm-portfolio-summary-extended-ngisNameDuplicate"></a>*isNameDuplicate()*

Checks if string is present in array

##### Returns

Boolean - **

---

### <a name="ext-wm-portfolio-summary-extended-nggetExistingCustomLists"></a>*getExistingCustomLists()*

Selector for all custom lists

##### Returns

Array - *Custom lists*

---

### <a name="ext-wm-portfolio-summary-extended-ngarePortfoliosSelected"></a>*arePortfoliosSelected()*

Tells, whether any portfolio is selected

##### Returns

Boolean - *True in case any portfolio is selected/checked*

---

### <a name="ext-wm-portfolio-summary-extended-nggetSelectedPortfolios"></a>*getSelectedPortfolios()*

Returns ids of selected/checked portfolios

##### Returns

Array of String - *Array of portfolios` ids*

---

### <a name="ext-wm-portfolio-summary-extended-ngselectedPortfoliosAmount"></a>*selectedPortfoliosAmount()*

Returns number of selected portfolios

##### Returns

Number - *Number of selected portfolios*

---

### <a name="ext-wm-portfolio-summary-extended-ngonExistingListSelect"></a>*onExistingListSelect($ctrl, Array)*

Performs actions, needed on selection of existing list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object | Controller of the widget |
| Array | Array of String | of portfolios`s ids to add to custom list |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-portfolio-summary-extended-ngafterLoadCustomLists"></a>*afterLoadCustomLists()*

Performs actions, needed after loading of custom lists

##### Returns

[void](#void) - **

---

### <a name="ext-wm-portfolio-summary-extended-ngisCustomListSelected"></a>*isCustomListSelected()*

Checks if custom list is selected

##### Returns

Boolean - *Returns true if custom list is selected*

---

### <a name="ext-wm-portfolio-summary-extended-ngonCustomListDelete"></a>*onCustomListDelete()*

Deletes a selected custom list

---

### <a name="ext-wm-portfolio-summary-extended-ngonPortfolioFromListDelete"></a>*onPortfolioFromListDelete()*

Deletes a selected custom list

---

### <a name="ext-wm-portfolio-summary-extended-ngtogglePortfolioAsFavorite"></a>*togglePortfolioAsFavorite(toggleFn, IBAN, isFavorite)*

Set/Unset portfolio as favorite. In case error happens, displays notification message.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| toggleFn | Function | Ctrl`s function to toggle portfolio`s Favorite status with |
| IBAN | String | IBAN of Portfolio to change Favorite status of |
| isFavorite | Boolean | Is portfolio already in favorites list or should be added |

---

### <a name="ext-wm-portfolio-summary-extended-nggoToFavorites"></a>*goToFavorites()*

Show list of favorites portfolios after click on link in notification

---

### <a name="ext-wm-portfolio-summary-extended-nggetNotificationWithLink"></a>*getNotificationWithLink()*

Return parameter, that define correct message in notification

---

### <a name="ext-wm-portfolio-summary-extended-ngshouldDisableAddToCustomListDropdown"></a>*shouldDisableAddToCustomListDropdown()*

Flag or state that defines if "Add to Existing List" dropdown should be disabled or enabled

##### Returns

Boolean - *state to disable or enable "Add to Existing List" dropdown*

---

### <a name="ext-wm-portfolio-summary-extended-ngdefaultSortableColumn"></a>*defaultSortableColumn()*

Return the key of the default sort column

##### Returns

String - *Returns column key*

---

### <a name="ext-wm-portfolio-summary-extended-ngdefaultSortableDirection"></a>*defaultSortableDirection()*

Return the sorting direction of the default sort column

##### Returns

String - *Returns sorting direction*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="Portfolio"></a>*Portfolio*

Portfolio type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | International Bank Account Number |
| clientName | String | Client name |
| alias | String | A portfolio name manually set by the client |
| assetClasses | Array of [assetClass](#assetClass) | Asset classes list for portfolio |
| valuation | Object | Total cost of all assets in the portfolio |
| inCashTotal | Object | Incoming cash for the period of time |
| outCashTotal | Object | Outgoing cash for the period of time |
| performanceMTD | Number | Portfolio performance for month |
| performanceMTDpct | Number | Portfolio performance for month in percents |
| performanceYTD | Number | Portfolio performance amount for year |
| performanceYTDpct | Number | Portfolio performance amount for year in percents |
| riskClass | String | Risk of portfolio investement strategy |
| managers | Array of [manager](#manager) | Managers of portfolio |
| attorneys | Array of [attorney](#attorney) | Attorneys of portfolio |
| dataseries | Array of [BBSeriesPortfolio](#BBSeriesPortfolio) | data in format suitable for chart UI components |

### <a name="BBSeriesPortfolio"></a>*BBSeriesPortfolio*

Portfolio specific BBSeries object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array chart slices labels |
| datasets | Array of [PortfolioDataset](#PortfolioDataset) | Array of chart datasets |

### <a name="PortfolioDataset"></a>*PortfolioDataset*

Dataset object for chart data

*Extends*: [Dataset](#Dataset)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| backgroundColor | Array of String | Array which represent rgb colors of chart |

### <a name="Dataset"></a>*Dataset*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points for chart slices |

### <a name="AssetClass"></a>*AssetClass*

Assetclass object

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| name | String | name of asset class |
| valuePct | Number | value that represents percentage of asset |

### <a name="attorney"></a>*attorney*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of a portfolio manager |
| name | String | name of a portfolio manager |

### <a name="manager"></a>*manager*

Dataset object for chart data

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | id of a portfolio manager |
| name | String | name of a portfolio manager |

### <a name="ChartjsSettings"></a>*ChartjsSettings*

Settings object with options available for bar chart.
More info [http://www.chartjs.org/docs/latest/charts/bar.html](http://www.chartjs.org/docs/latest/charts/bar.html)

**Type:** *Object*


---
