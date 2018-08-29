# ui-bb-paginator-ng


Version: **2.5.1**

Pagination directive

## Imports

* vendor-bb-angular
* vendor-bb-uib-pagination

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbPaginatorNg from 'ui-bb-paginator-ng';

export const dependencyKeys = [
  uiBbPaginatorNg,
];

// file: templates/template.ng.html
<ui-bb-paginator-ng
  class="bb-pagination"
  data-first-text="First"
  data-last-text="Last"
  data-previous-text="Previous"
  data-next-text="Next"
  data-total-items="100"
  data-items-per-page="10"
  data-max-nav-pages="5"
  data-change-page="changePage(params)">
</ui-bb-paginator-ng>
```

## Table of Contents
- **ui-bb-paginator-ng**<br/>    <a href="#ui-bb-paginator-ngUiBbPaginatorController">UiBbPaginatorController()</a><br/>

---

### <a name="ui-bb-paginator-ngUiBbPaginatorController"></a>*UiBbPaginatorController()*

Paginator directive's controller
