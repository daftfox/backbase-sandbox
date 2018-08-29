# ext-bbm-product-details-view-ng


Version: **3.18.0**

Mobile extension for the product details widget - View.

## Imports

* ui-bb-format-amount-ng
* ui-bb-i18n-ng

---

## Example

```javascript
<!-- product details widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bbm-product-details-view-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_getProductDetails">#getProductDetails()</a><br/>    <a href="#Helpers_hasProductDetails">#hasProductDetails()</a><br/>    <a href="#Helpers_showLoadingState">#showLoadingState()</a><br/>    <a href="#Helpers_showErrorState">#showErrorState()</a><br/>
- **Intents**<br/>    <a href="#Intents_showProductAliasForm">#showProductAliasForm()</a><br/>    <a href="#Intents_showProductDetailsView">#showProductDetailsView()</a><br/>
- **Type Definitions**<br/>    <a href="#ProductDetailsView">ProductDetailsView</a><br/>    <a href="#ProductBalances">ProductBalances</a><br/>    <a href="#AdditionalDetails">AdditionalDetails</a><br/>    <a href="#PrimaryBalance">PrimaryBalance</a><br/>    <a href="#SecondaryBalance">SecondaryBalance</a><br/>    <a href="#TertiaryBalance">TertiaryBalance</a><br/>

---

## Helpers

Helpers for ext-bbm-product-details-view-ng

### <a name="Helpers_getProductDetails"></a>*#getProductDetails()*

Returns product details data.

### <a name="Helpers_hasProductDetails"></a>*#hasProductDetails()*

Checks if product details is loaded.

##### Returns

Boolean - **

### <a name="Helpers_showLoadingState"></a>*#showLoadingState()*

Checks for the loading.

##### Returns

Boolean - **

### <a name="Helpers_showErrorState"></a>*#showErrorState()*

Checks for the error.

##### Returns

Boolean - **

---

## Intents


### <a name="Intents_showProductAliasForm"></a>*#showProductAliasForm()*

The intent to show the product details form.

### <a name="Intents_showProductDetailsView"></a>*#showProductDetailsView()*

Handler of the 'intent.bb.productDetails.view.show' intent.

## Type Definitions


### <a name="ProductDetailsView"></a>*ProductDetailsView*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| id | String | The internal Product Identifier |
| name | String | The product's name, suitable for display to users |
| alias | String | The product's alias, suitable for display to users (fallback to product name) |
| identifier | String (optional) | The identifier of the Product from the user's perspective |
| currency | String (optional) | ISO currency code |
| productBalances | [ProductBalances](#ProductBalances) (optional) | Balances (amounts) for the given product |
| additionalDetails | [AdditionalDetails](#AdditionalDetails) (optional) | Additional details for the given product |

### <a name="ProductBalances"></a>*ProductBalances*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| primary | [PrimaryBalance](#PrimaryBalance) (optional) | The primary balance for the given product |
| secondary | [SecondaryBalance](#SecondaryBalance) (optional) | The secondary balance for the given product |
| tertiary | [TertiaryBalance](#TertiaryBalance) (optional) | The tertiary balance for the given product |

### <a name="AdditionalDetails"></a>*AdditionalDetails*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| accountOpeningDate | String (optional) | The opening date of the product arrangement |
| externalTransferAllowed | Boolean (optional) | Flag to check if transfers to external accounts are allowed |

### <a name="PrimaryBalance"></a>*PrimaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the primary balance |
| value | String | The value (amount) of the primary balance |

### <a name="SecondaryBalance"></a>*SecondaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the secondary balance |
| value | String | The value (amount) of the secondary balance |

### <a name="TertiaryBalance"></a>*TertiaryBalance*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | The label to show for the tertiary balance |
| value | String | The value (amount) of the tertiary balance |

---
