# ui-bb-is-permitted-ng


Version: **2.5.1**

This module contains UI directive to show/hide element it applied to
depending on user permissions. Directive behaves much as same as Angular's ng-if
directive (and it actually contains it's original code), so element will be hidden
or shown depending user permissions.
To download and check user permissions directive use lib-bb-permissions-ng library.

## Imports

* lib-bb-permissions-ng
* vendor-bb-angular

---

## Example

```javascript
// Add module dependency in the extension's index.js
import uiBbIsPermittedNg from 'ui-bb-is-permitted-ng';

export const dependencyKeys = [
  uiBbIsPermittedNg,
];

// Add directive attribute to html elements in the extensions's template.html
<button class="btn"
  data-ng-click="$ctrl.createContact()"
  data-bb-is-permitted-ng="'Contacts.Contacts.create'">
  Create new Contact
</button>
```

---

## bbIsPermittedNgDirective

