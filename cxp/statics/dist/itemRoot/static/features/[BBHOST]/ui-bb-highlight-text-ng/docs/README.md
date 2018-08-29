# ui-bb-highlight-text-ng


Version: **2.5.1**

Directive to highlight a text within a text node

## Imports

* vendor-bb-angular

---

## Table of Contents
- **ui-bb-highlight-text-ng**<br/>    <a href="#ui-bb-highlight-text-nguiBbHighlightTextNg">uiBbHighlightTextNg()</a><br/>

---

### <a name="ui-bb-highlight-text-nguiBbHighlightTextNg"></a>*uiBbHighlightTextNg()*

It accepts an expression, if evaluates to a string it will highlight that in the
content of the node. If the expression is not a text it will keep untouched content of the node.

## Example

```javascript
<div data-ui-bb-highlight-text-ng="searchTerm">
  {{ text }}
</div>
```
