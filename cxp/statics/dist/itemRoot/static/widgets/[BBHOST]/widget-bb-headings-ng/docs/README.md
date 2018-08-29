# widget-bb-headings-ng


Version: **1.5.2**

Headings widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-intent-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Table of Contents
- **HeadingsController**<br/>    <a href="#HeadingsController_pageConfig">#pageConfig</a><br/>
- **Type Definitions**<br/>    <a href="#preference">preference</a><br/>

---

## HeadingsController

Headings component
### <a name="HeadingsController_pageConfig"></a>*#pageConfig*

Headings configuration

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| headingType | String | Type of heading (H1 - H6) |
| heading | String | Heading text |
| isTitleAsHeading | Boolean | Should heading match the active menu item |

## Example

```javascript
<div ng-controller="HeadingsController as $ctrl">
  <!-- ... -->
</div>
```

## Type Definitions


### <a name="preference"></a>*preference*

Widget preferences enum

**Type:** *Object*


---

## Templates

* *template.ng.html*

---
