# ui-bb-navigate-to-ng


Version: **2.5.1**

Create navigation link to specified page

## Imports

* lib-bb-intent-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbNavigateToNg from 'ui-bb-navigate-to-ng';

export const dependencyKeys = [
  uiBbNavigateToNg,
];

// file: templates/template.ng.html
<ui-bb-navigate-to-ng
  data-action="'notifications'"
  data-label="'label.allNotifications' | i18n">
</ui-bb-navigate-to-ng>
```

## Table of Contents
- **ui-bb-navigate-to-ng**<br/>    <a href="#ui-bb-navigate-to-nguiBbNavigateController">uiBbNavigateController()</a><br/>    <a href="#ui-bb-navigate-to-ngnavigateTo">navigateTo()</a><br/>

---

## uiBbNavigateToComponent

Navigate To Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| action | String | Intent name to navigate to |
| label | String | The navigation link text |

---

### <a name="ui-bb-navigate-to-nguiBbNavigateController"></a>*uiBbNavigateController()*

Navigate to widget controller

---

### <a name="ui-bb-navigate-to-ngnavigateTo"></a>*navigateTo()*

Navigate to selected widget
