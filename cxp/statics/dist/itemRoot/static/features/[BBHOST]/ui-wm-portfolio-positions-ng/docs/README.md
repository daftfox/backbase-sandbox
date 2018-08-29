# ext-portfolio-positions-module


Version: **2.11.2**

Module containing components and directives used by positions widget.

## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbPortfolioPositionsKey from 'ui-wm-portfolio-positions-ng';

export const dependencyKeys = [
  uiBbPortfolioPositionsKey,
];
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*


---

## AssetClassRow

Positions Asset Class row component.

| Injector Key |
| :-- |
| *uiWmPositionsAssetClassRow* |


## Example

```javascript
<ui-wm-positions-asset-class-row
     data-asset-class="item"
     data-labels="{
                accruedInterest: ('positions.accruedInterest' | i18n)
                valuation: ('positions.valuation' | i18n)
                unrealizedPL: ('positions.unrealizedPL' | i18n)
                portfolio: ('positions.portfolio' | i18n)
                parent: ('positions.parent' | i18n)
              }">
</ui-wm-positions-asset-class-row>
```

---

## PortfolioRow

Positions Portfolio row component.

| Injector Key |
| :-- |
| *uiWmPositionsPortfolioRow* |


## Example

```javascript
<ui-wm-positions-portfolio-row
  data-portfolio="item">
</ui-wm-positions-portfolio-row>
```

---

## PortfolioPositionsTableDirective

Positions table directive.

| Injector Key |
| :-- |
| *uiWmPositionsPositionsTable* |


## Example

```javascript
<table
   class="table
   table-vertical-align
   table-cells-fixed-height
   table-fixed-first-column
   table-fixed-last-column
   table-fixed-columns
   table-cells-sm
   panel-no-offset
   portfolio-stripe-table">
  <tbody data-ui-wm-positions-positions-table="" <!-- directive is used here -->
            data-ng-repeat="country in region.countries"
            data-positions="country.positions"
            data-country-name="country.name"
            data-labels="{
                   quantity: ('positions.quantity' | i18n),
                   price: ('positions.price' | i18n),
                   exchangeRate: ('positions.exchangeRate' | i18n),
                   valuation: ('positions.valuation' | i18n),
                   accruedInterest: ('positions.accruedInterest' | i18n),
                   costPrice: ('positions.costPrice' | i18n),
                   costExchangeRate: ('positions.costExchangeRate' | i18n),
                   unrealizedPL: ('positions.unrealizedPL' | i18n),
                   unrealizedPlLocal: ('positions.unrealizedPlLocal' | i18n),
                   assetClass: ('positions.assetClass' | i18n),
                   portfolio: ('positions.portfolio' | i18n),
                   parent: ('positions.parent' | i18n)
               }"
            >
       </tbody>
</table>
```

---

## RegionRow

Positions region row component.

| Injector Key |
| :-- |
| *uiWmPositionsRegionRow* |


## Example

```javascript
<ui-wm-positions-region-row
   data-region="item"
   data-labels="{
     accruedInterest: ('accruedInterest' | i18n)
        valuation: ('valuation' | i18n)
        unrealizedPL: ('unrealizedPL' | i18n)
        portfolio: ('portfolio' | i18n)
        parent: ('parent' | i18n)
   }">
 </ui-wm-positions-region-row>
```
