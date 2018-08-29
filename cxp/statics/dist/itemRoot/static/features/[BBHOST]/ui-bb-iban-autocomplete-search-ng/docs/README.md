# ui-bb-iban-autocomplete-search-ng


Version: **2.37.9**

IBAN autocomplete search component

## Imports

* lib-bb-bank-codes-ng
* ui-bb-autocomplete-search-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbIbanAutocompleteSearchNgKey from 'ui-bb-iban-autocomplete-search-ng';

export const dependencyKeys = [
  uiBbIbanAutocompleteSearchNgKey,
];

// file: templates/template.ng.html
<ui-bb-iban-autocomplete-search-ng
  searchBoxConfig="{
    labels: {
      title: 'Search',
      placeholder: 'Enter search text...',
      clear: 'Clear text',
      submit: 'Submit search',
    },
    hideButton: true,
    iconClasses: 'fa fa-chevron-down',
  }"
  load-result="(options) => {}"
  on-select="(item, label) => {}"
  label-key="'name'">
</ui-bb-iban-autocomplete-search-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---
