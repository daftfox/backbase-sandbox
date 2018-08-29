# ext-wm-positions-AcP-ng


Version: **3.12.2**

Default extension for positions widget.

## Imports

* lib-bb-model-errors
* lib-wm-portfolio-positions-builder-ng
* ui-bb-ellipsis-tooltip-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-wm-portfolio-collapse-expand-all-ng
* ui-wm-portfolio-positions-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion
* vendor-bb-uib-tooltip

---

## Example

```javascript
<!-- positions widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-positions-AcP-ng</value>
</property>
```

## Table of Contents
- **ext-wm-positions-AcP-ng**<br/>    <a href="#ext-wm-positions-AcP-ngerrors">errors</a><br/>    <a href="#ext-wm-positions-AcP-ngprocessPositionsData">processPositionsData()</a><br/>    <a href="#ext-wm-positions-AcP-ngisPositionsAvailable">isPositionsAvailable(positions)</a><br/>    <a href="#ext-wm-positions-AcP-nggetError">getError()</a><br/>

---
### <a name="ext-wm-positions-AcP-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-positions-AcP-ngprocessPositionsData"></a>*processPositionsData()*

Transforming plain positions` data into hierarchy

##### Returns

Object - *positions data hierarchy*

---

### <a name="ext-wm-positions-AcP-ngisPositionsAvailable"></a>*isPositionsAvailable(positions)*

Checks if positions' data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| positions | Object |  |

##### Returns

Boolean - *returns true if positions data is present*

---

### <a name="ext-wm-positions-AcP-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*
