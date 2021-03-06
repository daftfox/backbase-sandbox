# ui-bb-avatar-ng


Version: **2.5.1**

UI component for creating contact's avatar.
It can display initials based on a name or image.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbAvatarKey from 'ui-bb-avatar-ng';

export const dependencyKeys = [
  uiBbAvatarKey,
];

// file: templates/template.ng.html
<ui-bb-avatar-ng
  name="name"
  image="imageAvatar">
</ui-bb-avatar-ng>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbAvatarComponent


| Property | Type | Description |
| :-- | :-- | :-- |
| image | String | Image url |
| name | String | Name of the contact |
