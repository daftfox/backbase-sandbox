# ui-bb-filter-form-actions-ng


Version: **2.5.1**

Filter form actions component

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbFilterFormActionsKey from 'ui-bb-filter-form-actions-ng';

export const dependencyKeys = [
  uiBbFilterFormActionsKey,
];

// file: templates/template.ng.html
<ui-bb-filter-form-actions-ng
  data-filter-params="$ctrl.filterParams"
  data-search-filter-form="searchFilterForm"
  data-on-close="(ext) => {}"
  data-on-filter="(form) => {}"
  data-on-clear="() => {}"
  data-button-labels="{
    apply: 'Apply',
    closePanel: 'Close panel,
    clearAll: 'Clear all'
  }">
</ui-bb-filter-form-actions-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbFilterFormActionsController**<br/>    <a href="#uiBbFilterFormActionsController_onClearFilter">#onClearFilter()</a><br/>    <a href="#uiBbFilterFormActionsController_$onInit">#$onInit()</a><br/>    <a href="#uiBbFilterFormActionsController_isFormValid">#isFormValid()</a><br/>
- **Type Definitions**<br/>    <a href="#Labels">Labels</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbFilterFormActionsComponent


| Property | Type | Description |
| :-- | :-- | :-- |
| filterParams | Object | Filter form parameters |
| buttonLabels | [Labels](#Labels) | Texts used in component |
| searchFilterForm | Object | Filter form object |
| onFilter | Function | Function that calls on submitting the filter form |
| onClose | Function | Function that calls on closing the filter form |
| onClear | Function | Function that calls on clearing the filter form |

---

## uiBbFilterFormActionsController

Filter form controller

| Injector Key |
| :-- |
| *uiBbFilterFormActionsController* |


### <a name="uiBbFilterFormActionsController_onClearFilter"></a>*#onClearFilter()*

Reset filter parameters.

### <a name="uiBbFilterFormActionsController_$onInit"></a>*#$onInit()*

Angular $onInit lifecycle hook

### <a name="uiBbFilterFormActionsController_isFormValid"></a>*#isFormValid()*

Check if form state is pristine or invalid.

---

## immutableFilter

Filter parameters in reset state

## Type Definitions


### <a name="Labels"></a>*Labels*

Labels type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| apply | String | Accessibility label for apply button |
| closePanel | String | Accesibility label for the close button |
| clearAll | String | Accesibility label for clear button |

---
