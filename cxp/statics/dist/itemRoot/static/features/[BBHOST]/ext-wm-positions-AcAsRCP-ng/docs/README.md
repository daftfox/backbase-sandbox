# ext-wm-positions-AcAsRCP-ng


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
* ui-bb-scroll-to-view-ng
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
 <value type="string">ext-wm-positions-AcAsRCP-ng</value>
</property>
```

## Table of Contents
- **ext-wm-positions-AcAsRCP-ng**<br/>    <a href="#ext-wm-positions-AcAsRCP-ngerrors">errors</a><br/>    <a href="#ext-wm-positions-AcAsRCP-ngprocessPositionsData">processPositionsData()</a><br/>    <a href="#ext-wm-positions-AcAsRCP-ngisPositionsAvailable">isPositionsAvailable(positions)</a><br/>    <a href="#ext-wm-positions-AcAsRCP-nggetError">getError()</a><br/>

---
### <a name="ext-wm-positions-AcAsRCP-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-positions-AcAsRCP-ngprocessPositionsData"></a>*processPositionsData()*

Transforming plain positions` data into hierarchy

##### Returns

Object - *positions data hierarchy*

---

### <a name="ext-wm-positions-AcAsRCP-ngisPositionsAvailable"></a>*isPositionsAvailable(positions)*

Checks if positions' data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| positions | Object |  |

##### Returns

Boolean - *returns true if positions data is present*

---

### <a name="ext-wm-positions-AcAsRCP-nggetError"></a>*getError()*

Returns error object by error code

##### Returns

[errorMessageDescriptor](#errorMessageDescriptor) - *Descriptor of the error*
