# ui-bb-dropdown-select-ng


Version: **2.5.1**

UI dropdown select component

## Imports

* vendor-bb-angular
* vendor-bb-uib-dropdown

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbDropdownSelectKey from 'ui-bb-dropdown-select-ng';

export const dependencyKeys = [
  uiBbDropdownSelectKey,
];

// file: templates/template.ng.html
<ui-bb-dropdown-select-ng
  ng-model="item"
  selected-as="$option.name">
  <ui-bb-dropdown-option-ng
    option="item"
    data-arrow-navigation="true"
    ng-repeat="item in items"
    class="list-group-item-text">
      {{:: $option.name }}
  </ui-bb-dropdown-option-ng>
</ui-bb-dropdown-select-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **uiBbDropdownSelectDirective**<br/>    <a href="#uiBbDropdownSelectDirective_select">#select(option, soft)</a><br/>    <a href="#uiBbDropdownSelectDirective_onBlur">#onBlur(event)</a><br/>    <a href="#uiBbDropdownSelectDirective_clickHandler">#clickHandler(event)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbDropdownOption


---

## uiBbDropdownSelectDirective


| Property | Type | Description |
| :-- | :-- | :-- |
| isOpen | Boolean | Defines whether or not the dropdown is open |
| multiple | Boolean (optional) | True if multiple selection is enabled (false by default) |
| ngDisabled | Boolean | Defines whether or not the dropdown is disabled |
| ngModel | Object | Dropdown model |
| placeholder | String (optional) | Placeholder text |
| ngChange | Function | Callback function triggered when dropdown item is selected |
| selectedAs | Function | Allows to customize selected value |
| labels | Object | Object with labels that will be attached to dropdown's scope |
| menuClass | String (optional) | Extra class(es) to place on the menu element |

### <a name="uiBbDropdownSelectDirective_select"></a>*#select(option, soft)*

Selects given option

| Parameter | Type | Description |
| :-- | :-- | :-- |
| option | Object | Selected option |
| soft | Boolean | True if select method should only set the option to the model without calling callback and closing dropdown |

### <a name="uiBbDropdownSelectDirective_onBlur"></a>*#onBlur(event)*

Close menu if next focused element is outside of container

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object |  |

### <a name="uiBbDropdownSelectDirective_clickHandler"></a>*#clickHandler(event)*

Handles clicks on the items in the list

| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | Object |  |

---

## uiBbDropdownSelectedDirective

