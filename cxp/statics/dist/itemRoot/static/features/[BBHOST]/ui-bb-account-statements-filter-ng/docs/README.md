# ui-bb-account-statements-filter-ng


Version: **2.4.0**

UI account statements filter component

## Imports

* ui-bb-account-statements-category-filter-ng
* ui-bb-calendar-popup-ng
* ui-bb-track-form-changes-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbAccountStatementsFilterKey from 'ui-bb-account-statements-filter-ng';

export const dependencyKeys = [
  uiBbAccountStatementsFilterKey,
];

// file: templates/template.ng.html
<ui-bb-account-statements-filter-ng on-filter="$ctrl.filter()">
</ui-bb-account-statement-filter-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbAccountStatementsFilterController**<br/>    <a href="#uiBbAccountStatementsFilterController_state">#state</a><br/>    <a href="#uiBbAccountStatementsFilterController_toggleFilter">#toggleFilter()</a><br/>    <a href="#uiBbAccountStatementsFilterController_onApplyFilter">#onApplyFilter()</a><br/>    <a href="#uiBbAccountStatementsFilterController_onClearFilter">#onClearFilter()</a><br/>    <a href="#uiBbAccountStatementsFilterController_isFormValid">#isFormValid()</a><br/>
- **Type Definitions**<br/>    <a href="#ButtonLabels">ButtonLabels</a><br/>    <a href="#FieldLabels">FieldLabels</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbAccountStatementsFilter


| Property | Type | Description |
| :-- | :-- | :-- |
| onFilter | Function | Function to be called once the filter is applied |
| onClear | Function | Function to be called once the filter is cleared |
| buttonLabels | [ButtonLabels](#ButtonLabels) | Object with translated button labels |
| fieldLabels | [FieldLabels](#FieldLabels) | Object with translated field labels |
| datepickerConfig | Object | Object with config for datePicker |

---

## uiBbAccountStatementsFilterController

Account Statements filter controller

| Injector Key |
| :-- |
| *uiBbAccountStatementsFilterController* |

### <a name="uiBbAccountStatementsFilterController_state"></a>*#state*

Filter state object.

**Type:** *Object*


### <a name="uiBbAccountStatementsFilterController_toggleFilter"></a>*#toggleFilter()*

Toggle filter component.

##### Returns

Boolean - *A status of filter component*

### <a name="uiBbAccountStatementsFilterController_onApplyFilter"></a>*#onApplyFilter()*

Call filter method.

### <a name="uiBbAccountStatementsFilterController_onClearFilter"></a>*#onClearFilter()*

Reset filter parameters.

### <a name="uiBbAccountStatementsFilterController_isFormValid"></a>*#isFormValid()*

Check if form state is pristine or invalid.

## Type Definitions


### <a name="ButtonLabels"></a>*ButtonLabels*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| main | String | Label for main filter button |
| apply | String | Label for button that applies filter |
| closePanel | String | Label for button that closes filter card |
| clearAll | String | Label for button that clears filter |

### <a name="FieldLabels"></a>*FieldLabels*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| dateRange | String | Datepicker label |

---
