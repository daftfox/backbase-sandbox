# ui-bb-select-items-modal-ng


Version: **2.5.1**

This component is a modal window that shows list of items
and upon selection it invokes a callback that is provided to
it with the selected items.
The modal window has a checkbox that can select all provided
items, search, and Cancel and Add buttons.
The listing of the items is provided by the extension

## Imports

* ui-bb-empty-state-ng
* ui-bb-list-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-search-box-ng
* vendor-bb-angular

---

## Example

```javascript
// in the extension
import uiBbSelectItemsModalNg from 'ui-bb-select-items-modal-ng';

export const dependencyKeys = [
  uiBbSelectItemsModalNg,
];

// in template file
<button data-on-click="isSelectItemsModalOpen = true"></button>

<ui-bb-select-items-modal-ng
  data-is-open="isSelectItemsModalOpen"
  data-on-submit="$ctrl.submit(items)"
  data-item-id-selector="$ctrl.itemIdSelector(item)"
  data-is-loading="false"
  data-is-search-enabled="true"
  data-on-search="$ctrl.search(query)"
  data-on-load-more="$ctrl.loadMore()"
  data-prevent-load-more="false"
  data-labels="{
    cancel: 'Cancel',
    addItemsBaseTitle: 'Select',
    header: {
      title: 'Select items',
    },
    search: {
      title: ('Search' | i18n),
      placeholder: ('Search' | i18n),
      clear: ('Clear text' | i18n),
    },
    emptyState: {
      title: ('emptyState.title' | i18n),
      subtitle: ('emptyState.subtitle' | i18n),
    },
    searchEmptyState: {
      title: ('searchEmptyState.title' | i18n),
      subtitle: ('searchEmptyState.subtitle' | i18n),
    }
  }"
  data-items="[1, 2, 3]"
  data-columns="[
    { label: ('column.label' | i18n), class: '', template: #ext-bb/items-list.ng.html' },
  ]">
</ui-bb-select-items-modal-ng>
```

## Table of Contents
- **ui-bb-select-items-modal-ng**<br/>    <a href="#ui-bb-select-items-modal-nguiBbSelectItemsModalController">uiBbSelectItemsModalController()</a><br/>    <a href="#ui-bb-select-items-modal-ngclose">close()</a><br/>    <a href="#ui-bb-select-items-modal-ngsubmit">submit()</a><br/>    <a href="#ui-bb-select-items-modal-nggetItemId">getItemId(item)</a><br/>    <a href="#ui-bb-select-items-modal-ngtoggleSelectAll">toggleSelectAll()</a><br/>

---

## uiBbSelectItemsModalComponent

Component that allows selecting items in a modal

| Property | Type | Description |
| :-- | :-- | :-- |
| isOpen | Boolean | Modal open state |
| labels | [Labels](#Labels) | Labels |
| columns | Array of [Column](#Column) | Column definitions |
| items | Array of Object | List of items |
| isLoading | Boolean | Loading flag |
| isSearchEnabled | Boolean | Search enabled flag |
| preventLoadMore | Boolean | Prevents calling `onLoadMore` (usually when there are no more items) |
| itemIdSelector | Function | Callback function used to get the items id |
| onSubmit | Function | Callback function to invoke when finished selecting items |
| onSearch | Function | Callback function to invoke when search query is changed |
| onLoadMore | Function | Callback function to invoke when end of list is reached |

---

## Labels

Labels for the component

| Property | Type | Description |
| :-- | :-- | :-- |
| cancel | String | Cancel text |
| addItems | String | Add items tooltip |
| addItemsBaseTitle | String | Add items button text |
| header | Object | Header related labels |
| header.title | String | Header title |
| search | Object | Search related labels |
| search.title | String | Accessibility label for component |
| search.placeholder | String | Placeholder label for the search input |
| search.clear | String | Accesibility label for clear button |
| emptyState | Object | Empty state related labels |
| emptyState.title | String | Title for empty state |
| emptyState.subtitle | String | Subtitle for empty state |
| searchEmptyState | Object | Empty state related labels when searching |
| searchEmptyState.title | String | Title for empty state when searching |
| searchEmptyState.subtitle | String | Subtitle for empty state when searching |

---

## Column

Column definition

| Property | Type | Description |
| :-- | :-- | :-- |
| label | String | Label for the column |
| class | String | Class to add to the column items |
| template | String | Angular template |

---

### <a name="ui-bb-select-items-modal-nguiBbSelectItemsModalController"></a>*uiBbSelectItemsModalController()*


---

## state

State object of the controller

---

### <a name="ui-bb-select-items-modal-ngclose"></a>*close()*

Closes select items modal dialog and resets state

---

### <a name="ui-bb-select-items-modal-ngsubmit"></a>*submit()*

Submits selected items and closes dialog

---

### <a name="ui-bb-select-items-modal-nggetItemId"></a>*getItemId(item)*

Returns the id used for the item, if itemIdSelector is not
defined it uses 'id' as default value.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| item | Object |  |

##### Returns

String - *items id*

---

### <a name="ui-bb-select-items-modal-ngtoggleSelectAll"></a>*toggleSelectAll()*

Toggles selected all state
