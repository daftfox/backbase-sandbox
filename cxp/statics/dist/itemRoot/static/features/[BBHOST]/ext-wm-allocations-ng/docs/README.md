# ext-wm-allocations-ng


Version: **2.17.2**

Default extension for allocations widget.

## Imports

* lib-bb-model-errors
* lib-wm-colorset
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- allocations widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-wm-allocations-ng</value>
</property>
```

## Table of Contents
- **ext-wm-allocations-ng**<br/>    <a href="#ext-wm-allocations-ngerrors">errors</a><br/>    <a href="#ext-wm-allocations-ngmapOfOpenItems">mapOfOpenItems</a><br/>    <a href="#ext-wm-allocations-ngisAllocationsAvailable">isAllocationsAvailable(allocations)</a><br/>    <a href="#ext-wm-allocations-nggetHeaderTranslationKey">getHeaderTranslationKey(isClass)</a><br/>    <a href="#ext-wm-allocations-ngallocations">allocations()</a><br/>    <a href="#ext-wm-allocations-ngisClass">isClass()</a><br/>    <a href="#ext-wm-allocations-ngtoggleItem">toggleItem(allocation)</a><br/>    <a href="#ext-wm-allocations-ngclearOpenAllocations">clearOpenAllocations()</a><br/>    <a href="#ext-wm-allocations-ngisOpen">isOpen(allocation)</a><br/>    <a href="#ext-wm-allocations-nggetAllocationColorByIndex">getAllocationColorByIndex(index)</a><br/>
- **Type Definitions**<br/>    <a href="#errorMessageDescriptor">errorMessageDescriptor</a><br/>    <a href="#Allocation">Allocation</a><br/>

---
### <a name="ext-wm-allocations-ngerrors"></a>*errors*

Map of error code to message, title and icon to display to user

**Type:** *Object of [E_AUTH](#E_AUTH) or [E_CONNECTIVITY](#E_CONNECTIVITY) or [E_UNEXPECTED](#E_UNEXPECTED) or [E_USER](#E_USER), [errorMessageDescriptor](#errorMessageDescriptor)*


---
### <a name="ext-wm-allocations-ngmapOfOpenItems"></a>*mapOfOpenItems*

Keeps ids of items that were toggled

**Type:** *Map*


---

### <a name="ext-wm-allocations-ngisAllocationsAvailable"></a>*isAllocationsAvailable(allocations)*

Checks if allocations' data is available

| Parameter | Type | Description |
| :-- | :-- | :-- |
| allocations | Object |  |

##### Returns

Boolean - *returns true if allocations data is present*

---

### <a name="ext-wm-allocations-nggetHeaderTranslationKey"></a>*getHeaderTranslationKey(isClass)*

Returns current table header

| Parameter | Type | Description |
| :-- | :-- | :-- |
| isClass | Boolean |  |

##### Returns

String - *returns i18n label*

---

## getError

Returns error object by error code

---

### <a name="ext-wm-allocations-ngallocations"></a>*allocations()*

Selector for allocations data

##### Returns

Array - *Set of allocations*

---

### <a name="ext-wm-allocations-ngisClass"></a>*isClass()*

Checks if current route is asset-classes

##### Returns

Boolean - *Flage that tells whether current route name is 'asset-classes'*

---

### <a name="ext-wm-allocations-ngtoggleItem"></a>*toggleItem(allocation)*

Toggles open state for given item

| Parameter | Type | Description |
| :-- | :-- | :-- |
| allocation | Object | Selected allocation |

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-ngclearOpenAllocations"></a>*clearOpenAllocations()*

Removes all allocations from map of open allocations

##### Returns

[void](#void) - **

---

### <a name="ext-wm-allocations-ngisOpen"></a>*isOpen(allocation)*

Tells, whether item's open property is truthy

| Parameter | Type | Description |
| :-- | :-- | :-- |
| allocation | Object | Allocation item |

##### Returns

Boolean - *Flag (true|false) that stands for open state of item*

---

### <a name="ext-wm-allocations-nggetAllocationColorByIndex"></a>*getAllocationColorByIndex(index)*

Gets required color for given allocation

| Parameter | Type | Description |
| :-- | :-- | :-- |
| index | Number | Index of allocation |

##### Returns

String - *Color for given allocation*

## Type Definitions


### <a name="errorMessageDescriptor"></a>*errorMessageDescriptor*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| message | String | Localization key of the error message |
| title | String | Localization key of the error message`s title |
| icon | String | CSS class for icon |

### <a name="Allocation"></a>*Allocation*

Allocation type definition

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| undefined | String |  |

---
