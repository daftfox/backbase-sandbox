# ext-bb-messages-controls-ng


Version: **2.4.7**

Message center default extension.

## Imports

* ui-bb-confirm-ng
* ui-bb-draft-edit-ng
* ui-bb-i18n-ng
* ui-bb-modal-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- messages widget model.xml -->
<property name="extension" viewHint="text-input,admin">
 <value type="string">ext-bb-messages-controls-ng</value>
</property>
```

## Table of Contents
- **Helpers**<br/>    <a href="#Helpers_openModalWindow">#openModalWindow(ext)</a><br/>    <a href="#Helpers_closeModalWindow">#closeModalWindow(ext)</a><br/>    <a href="#Helpers_setConfirmationState">#setConfirmationState(ext, isEmpty)</a><br/>

---

## Helpers


### <a name="Helpers_openModalWindow"></a>*#openModalWindow(ext)*

Opens the modal window

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |

### <a name="Helpers_closeModalWindow"></a>*#closeModalWindow(ext)*

Close the modal window

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |

### <a name="Helpers_setConfirmationState"></a>*#setConfirmationState(ext, isEmpty)*

Set confirmation popup state

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ext | Object | extension reference |
| isEmpty | Boolean | true/false value from message form |
