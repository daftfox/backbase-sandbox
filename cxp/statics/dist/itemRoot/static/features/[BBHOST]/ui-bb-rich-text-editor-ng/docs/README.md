# ui-bb-rich-text-editor-ng


Version: **2.4.7**

UI component for enriched text editor

## Imports

* vendor-bb-angular
* vendor-bb-pell

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbRichTextEditorKey from 'ui-bb-rich-text-editor-ng';

export const dependencyKeys = [
  uiBbRichTextEditorKey,
];

// file: templates/template.ng.html
<ui-bb-rich-text-editor-ng
  class="form-control"
  data-ng-model="$ctrl.text">
</ui-bb-rich-text-editor-ng>
```
