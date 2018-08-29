# ui-bb-list-ng


Version: **2.5.1**


## Imports

* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbListKey from 'ui-bb-list-ng';

// ...

export const dependencyKeys = [
  uiBbListKey,
];

// file: templates/template.ng.html
<ui-bb-list-ng on-scroll-to-end="$ctrl.searchMore()">
  <div ng-repeat="group in $ctrl.searchTransactions track by $index">
    <div class="table-view-divider">
      <h4 data-role="transactions-group-date" ng-bind="group.date | date"></h4>
    </div>
  </div>
</ui-bb-list-ng>

<ui-bb-list-ng class="pre-scrollable" on-scrolled-to-bottom="$ctrl.loadMore()">
  <div class="list-group-item" data-ng-repeat="contact in $ctrl.contacts.data">
    <div>{{ contact.name }}</div>
  </div>
</ui-bb-list-ng>
```

## Table of Contents
- **ui-bb-list-ng**<br/>    <a href="#ui-bb-list-ngonScroll">onScroll(event)</a><br/>

---

## uiBbListComponent

List Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| onScrollToEnd | Function | callback function to invoke when the threshold of the list has been reached. |
| onScrolledToBottom | Function | callback function to invoke when the list bottom has been reached. |

---

### <a name="ui-bb-list-ngonScroll"></a>*onScroll(event)*

Calculates if the threshold has been reached and calls the callback
function accordingly.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| event | [event](#event) |  |
