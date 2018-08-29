# widget-fx-navigation-back-ng


Version: **1.5.0**

FX navigation back widget.

## Imports

* lib-bb-intent-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Example

```javascript
<div data-ng-controller="FXNavigationToController as $ctrl">
  <button
    class="btn btn-link ml-2"
    aria-label="{{ back | i18n }}"
    data-role="navigate-back"
    data-ng-click="$ctrl.navigateTo();$event.stopPropagation();"
  >
    <i class="fas fa-chevron-left pr-2"></i>
    <span data-i18n-key="back"></span>
  </button>
</div>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **widget-fx-navigation-back-ng**<br/>    <a href="#widget-fx-navigation-back-ngrouteNavigateTo">routeNavigateTo</a><br/>    <a href="#widget-fx-navigation-back-ngnavigateTo">navigateTo()</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## Preference

Widget preferences enum

| Property | Type | Description |
| :-- | :-- | :-- |
| CURRENCYPAIRS_TABLE | String | Defines route for navigation to currencypairs table |

---

## FXNavigationToController

FX navigation to controller.

| Injector Key |
| :-- |
| *FXNavigationToController* |


---
### <a name="widget-fx-navigation-back-ngrouteNavigateTo"></a>*routeNavigateTo*

Route navigate to

**Type:** *Number*


---

### <a name="widget-fx-navigation-back-ngnavigateTo"></a>*navigateTo()*

Navigate to currency pairs table

## Templates

* *template.ng.html*

---
