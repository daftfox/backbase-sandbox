# ui-bb-notifications-filter-ng


Version: **4.2.0**

UI notifications filter component

## Imports

* ui-bb-calendar-popup-ng
* ui-bb-dropdown-select-ng
* ui-bb-filter-form-actions-ng
* ui-bb-track-form-changes-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbNotificationsFilterKey from 'ui-bb-notifications-filter-ng';

export const dependencyKeys = [
  uiBbNotificationsFilterKey,
];

// file: templates/template.ng.html
<ui-bb-notifications-filter-ng on-filter="$ctrl.filter()"
header-labels="{
 date: 'Date', searchInText: 'Search', searchInType: 'Search in type', level: 'Levels'
}"
level-labels="{ info: 'Info', alert: 'Alert', warning: 'Warning', success: 'Success' }"
status-labels="{ read: 'Read', unread: 'Unread', all: 'All' }"
button-labels="{
 main: 'Filter',
 apply: 'Apply',
 reset: 'Reset',
 clearFromDate: 'Clear "from" date"',
 clearToDate: 'Clear "to" date"',
}"
on-clear-filter="$ctrl.clearFilter">
</ui-bb-notifications-filter-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbNotificationsFilterController**<br/>    <a href="#uiBbNotificationsFilterController_filterParams">#filterParams</a><br/>    <a href="#uiBbNotificationsFilterController_levels">#levels</a><br/>    <a href="#uiBbNotificationsFilterController_statuses">#statuses</a><br/>    <a href="#uiBbNotificationsFilterController_datePickerParams">#datePickerParams</a><br/>    <a href="#uiBbNotificationsFilterController_getParams">#getParams()</a><br/>    <a href="#uiBbNotificationsFilterController_clearCheckedMapper">#clearCheckedMapper(item)</a><br/>    <a href="#uiBbNotificationsFilterController_onApplyFilter">#onApplyFilter()</a><br/>    <a href="#uiBbNotificationsFilterController_onClearFilter">#onClearFilter(form)</a><br/>    <a href="#uiBbNotificationsFilterController_toggleFilter">#toggleFilter()</a><br/>    <a href="#uiBbNotificationsFilterController_isFilterPristine">#isFilterPristine(form)</a><br/>    <a href="#uiBbNotificationsFilterController_isAllLevelSelected">#isAllLevelSelected(level)</a><br/>    <a href="#uiBbNotificationsFilterController_setDefaultSeverityLevel">#setDefaultSeverityLevel()</a><br/>    <a href="#uiBbNotificationsFilterController_checkSelectedLevels">#checkSelectedLevels()</a><br/>    <a href="#uiBbNotificationsFilterController_setSelectedOptions">#setSelectedOptions()</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbNotificationsFilterComponent


---

## uiBbNotificationsFilterController

Notifications filter controller

| Injector Key |
| :-- |
| *uiBbNotificationsFilterController* |

### <a name="uiBbNotificationsFilterController_filterParams"></a>*#filterParams*

`filterParams` parameters object.

**Type:** *Object*

### <a name="uiBbNotificationsFilterController_levels"></a>*#levels*

Array of `Severity levels` parameters objects.

**Type:** *Array*

### <a name="uiBbNotificationsFilterController_statuses"></a>*#statuses*

Array of `Statuses` parameters objects.

**Type:** *Array*

### <a name="uiBbNotificationsFilterController_datePickerParams"></a>*#datePickerParams*

Date picker parameters object.

**Type:** *Object*


### <a name="uiBbNotificationsFilterController_getParams"></a>*#getParams()*

Get all filter params.

##### Returns

Object - *Filter params*

### <a name="uiBbNotificationsFilterController_clearCheckedMapper"></a>*#clearCheckedMapper(item)*

Uncheck checkbox input.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object | Checkbox input object |

##### Returns

Object - *Processed checkbox input object*

### <a name="uiBbNotificationsFilterController_onApplyFilter"></a>*#onApplyFilter()*

Call filter method.

##### Returns

Promise or Null - *A Promise that returns from filter method or null if method isn't set*

### <a name="uiBbNotificationsFilterController_onClearFilter"></a>*#onClearFilter(form)*

Reset filter parameters.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Angular form object |

### <a name="uiBbNotificationsFilterController_toggleFilter"></a>*#toggleFilter()*

Toggle filter component.

##### Returns

Boolean - *A status of filter component*

### <a name="uiBbNotificationsFilterController_isFilterPristine"></a>*#isFilterPristine(form)*

Check if filter is pristine or not.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Angular form object |

##### Returns

Boolean - *True if filter is pristine*

### <a name="uiBbNotificationsFilterController_isAllLevelSelected"></a>*#isAllLevelSelected(level)*

Check if severity level selected is all or not.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| level | Object | severity level option |

##### Returns

Boolean - *True if severity level is all*

### <a name="uiBbNotificationsFilterController_setDefaultSeverityLevel"></a>*#setDefaultSeverityLevel()*

set default severity level.

##### Returns

Object - *Filter params with updated levels*

### <a name="uiBbNotificationsFilterController_checkSelectedLevels"></a>*#checkSelectedLevels()*

Update selected levels if 'all' option  was/wasn't s applied

##### Returns

Object - *Filter params with updated levels*

### <a name="uiBbNotificationsFilterController_setSelectedOptions"></a>*#setSelectedOptions()*

Convert selected options to string for view as selected fields

##### Returns

String - *String of selected severity levels*
