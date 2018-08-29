# ext-wm-portfolio-details-ng


Version: **2.15.2**

Portfolio details, shows client name and portfolio valuation

## Imports

* lib-bb-model-errors
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- portfolio widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-portfolio-details-ng</value>
</property>
```

## Table of Contents
- **ext-wm-portfolio-details-ng**<br/>    <a href="#ext-wm-portfolio-details-ngerrors">errors</a><br/>    <a href="#ext-wm-portfolio-details-nggetError">getError()</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#Portfolio">Portfolio</a><br/>

## Exports


## Hooks

Hooks for ext-wm-portfolio-details-ng

---
### <a name="ext-wm-portfolio-details-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---

### <a name="ext-wm-portfolio-details-nggetError"></a>*getError()*

Returns error object by error code

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="Portfolio"></a>*Portfolio*

Portfolio type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | International Bank Account Number |
| clientName | String | Client name |
| valuation | Object | Total cost of all assets in the portfolio |

---
