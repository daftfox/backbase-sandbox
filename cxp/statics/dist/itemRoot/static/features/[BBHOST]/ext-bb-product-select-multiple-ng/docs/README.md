# ext-bb-product-select-multiple-ng


Version: **2.17.0**

Product select multiple extension for product summary widget.

## Imports

* ui-bb-account-selector-ng
* ui-bb-i18n-ng
* vendor-bb-angular-ng-aria

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-product-select-multiple-ng</value>
</property>
```

## Table of Contents
- **Hooks**<br/>    <a href="#Hooks_isSelectMultiple">#isSelectMultiple()</a><br/>    <a href="#Hooks_processKinds">#processKinds(product)</a><br/>    <a href="#Hooks_processProductSelected">#processProductSelected(product)</a><br/>
- **Type Definitions**<br/>    <a href="#ProductKindView">ProductKindView</a><br/>    <a href="#ProductView">ProductView</a><br/>

---

## Hooks

Hooks for widget-bb-product-summary-ng

### <a name="Hooks_isSelectMultiple"></a>*#isSelectMultiple()*

Hook for specifying whether the extension select single or multiple products

##### Returns

[bolean](#bolean) - **

### <a name="Hooks_processKinds"></a>*#processKinds(product)*

Hook for process products

Make flat list

Map to view model

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Array | The source Product from the widget controller |

##### Returns

Array of [ProductView](#ProductView) - **

### <a name="Hooks_processProductSelected"></a>*#processProductSelected(product)*

Hook for processing selected products after selection update
Prepares the fields of the selected products into a form ready for display to the User

| Parameter | Type | Description |
| :-- | :-- | :-- |
| product | Object | Product to process |

##### Returns

Object - **

## Type Definitions


### <a name="ProductKindView"></a>*ProductKindView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The Product Kind identifier |
| name | String | The name of the Kind, suitable for display to users |
| products | Array of [ProductView](#ProductView) | The products of this Kind |

### <a name="ProductView"></a>*ProductView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| amount | String (optional) | The most important associated value to be displayed |
| currency | String (optional) | ISO currency code |

---
