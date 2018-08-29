# ext-bb-places-ng


Version: **2.6.0**

Places widget map extension.

## Imports

* ui-bb-i18n-ng
* ui-bb-maps-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- places widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bb-places-ng</value>
</property>

Usage of ui-bb-maps-ng component in template

<g-map-api preferences="$ctrl.getPlacesPreferences()">
  <g-map places="$ctrl.loadPlaces">
    <div class="form-group has-feedback">
      <g-map-search></g-map-search>
      <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
      <span class="sr-only" data-i18n-key="places.input.search"></span>
    </div>
  </g-map>
</g-map-api>

where
places {object[]} Array of map points to be placed on map
places.latitude {number} Latitude of one point
places.longitude {number} Longitude of one point
preferences {object} Preference object containing api key, zoom level, etc.
```

---
