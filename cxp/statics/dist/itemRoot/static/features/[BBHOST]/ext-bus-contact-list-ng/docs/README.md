# ext-bus-contact-list-ng


Version: **3.6.1**

Business banking extension for a contacts list in a contact widget.

## Imports

* lib-bb-iban
* ui-bb-avatar-ng
* ui-bb-confirm-ng
* ui-bb-country-ng
* ui-bb-email-ng
* ui-bb-empty-state-ng
* ui-bb-focus-ng
* ui-bb-form-navigate-away-ng
* ui-bb-highlight-text-ng
* ui-bb-i18n-ng
* ui-bb-iban-ng
* ui-bb-inline-status-ng
* ui-bb-is-permitted-ng
* ui-bb-load-more-ng
* ui-bb-loading-overlay-ng
* ui-bb-modal-ng
* ui-bb-notification-stripe-ng
* ui-bb-paginator-ng
* ui-bb-search-box-ng
* ui-bb-substitute-error-ng
* ui-bb-track-form-changes-ng
* vendor-bb-angular
* vendor-bb-angular-ng-aria
* vendor-bb-angular-ng-messages
* vendor-bb-uib-accordion

---

## Example

```javascript
<!-- payment widget model.xml -->
<property name="extension" viewHint="text-input,admin">
  <value type="string">ext-bus-contact-list-ng</value>
</property>
```

## Table of Contents
- **Constants**<br/>    <a href="#Constants_countries">#countries</a><br/>
- **Helpers**<br/>    <a href="#Helpers_isPaginationTypeMatch">#isPaginationTypeMatch($ctrl, type)</a><br/>    <a href="#Helpers_isSearching">#isSearching($ctrl)</a><br/>    <a href="#Helpers_isLoading">#isLoading($ctrl)</a><br/>    <a href="#Helpers_getSupportedCountries">#getSupportedCountries()</a><br/>    <a href="#Helpers_openAccountForm">#openAccountForm($ctrl, ext, accountIndex)</a><br/>    <a href="#Helpers_submitAccountForm">#submitAccountForm(account, accountIndex, form)</a><br/>    <a href="#Helpers_deleteContactAccount">#deleteContactAccount($ctrl, accountIndex)</a><br/>    <a href="#Helpers_dismissAccount">#dismissAccount()</a><br/>    <a href="#Helpers_isCreating">#isCreating($ctrl)</a><br/>    <a href="#Helpers_getEmptyIconClasses">#getEmptyIconClasses($ctrl)</a><br/>    <a href="#Helpers_getEmptyTitle">#getEmptyTitle($ctrl)</a><br/>    <a href="#Helpers_getEmptyDescription">#getEmptyDescription($ctrl)</a><br/>    <a href="#Helpers_isContactListEmpty">#isContactListEmpty($ctrl)</a><br/>    <a href="#Helpers_formatIBAN">#formatIBAN(IBAN)</a><br/>    <a href="#Helpers_isInvalid">#isInvalid(form, controlName)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_deleteContact">#deleteContact(contact, confirm)</a><br/>    <a href="#Hooks_processContacts">#processContacts(contacts)</a><br/>    <a href="#Hooks_processSearchContacts">#processSearchContacts(contacts)</a><br/>    <a href="#Hooks_getSelectedContact">#getSelectedContact(contacts, contact)</a><br/>    <a href="#Hooks_selectPrevContact">#selectPrevContact(contacts, index, contact)</a><br/>    <a href="#Hooks_returnContactIfExists">#returnContactIfExists(contactGroups, contact)</a><br/>    <a href="#Hooks_processContactBeforeSave">#processContactBeforeSave(contact)</a><br/>

---

## Constants

Constants for ext-bus-contact-list-ng
### <a name="Constants_countries"></a>*#countries*

Supported account countries list

**Type:** *Array of String*


---

## Helpers

Helpers for ext-bus-contact-list-ng

### <a name="Helpers_isPaginationTypeMatch"></a>*#isPaginationTypeMatch($ctrl, type)*

Checkes if actual pagination type matches the one, defined in properties

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |
| type | String | Description of pagination type (pagination, load-more) |

##### Returns

Boolean - **

### <a name="Helpers_isSearching"></a>*#isSearching($ctrl)*

Check if the search action is in progress

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

Boolean - *Flag indicating search status*

### <a name="Helpers_isLoading"></a>*#isLoading($ctrl)*

Check if the loading action is in progress

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

Boolean - *Flag indicating loading status*

### <a name="Helpers_getSupportedCountries"></a>*#getSupportedCountries()*

Get listed of countries

##### Returns

Array - *countries List of countries*

### <a name="Helpers_openAccountForm"></a>*#openAccountForm($ctrl, ext, accountIndex)*

Add new or edit existing account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |
| ext | undefined |  |
| accountIndex | undefined |  |

### <a name="Helpers_submitAccountForm"></a>*#submitAccountForm(account, accountIndex, form)*

Save or update existing account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | account data |
| accountIndex | Number | account index |
| form | Object | account form |

### <a name="Helpers_deleteContactAccount"></a>*#deleteContactAccount($ctrl, accountIndex)*

Delete selected account by its index

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |
| accountIndex | Number | index of account to delete |

### <a name="Helpers_dismissAccount"></a>*#dismissAccount()*

Dismiss creating new account

### <a name="Helpers_isCreating"></a>*#isCreating($ctrl)*

Check if create contact form is being used

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_getEmptyIconClasses"></a>*#getEmptyIconClasses($ctrl)*

Returns the empty state icon classes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

String - **

### <a name="Helpers_getEmptyTitle"></a>*#getEmptyTitle($ctrl)*

Returns the empty state translated title

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

String - **

### <a name="Helpers_getEmptyDescription"></a>*#getEmptyDescription($ctrl)*

Returns the empty state translated description

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

String - **

### <a name="Helpers_isContactListEmpty"></a>*#isContactListEmpty($ctrl)*

Checks if there is any account loaded in the list, regardless if it is searching or not

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object of [ContactController](widget-bb-contact-ng.html#ContactController) | Current controller |

##### Returns

Boolean - **

### <a name="Helpers_formatIBAN"></a>*#formatIBAN(IBAN)*

Convert an IBAN to human format adding a space every 4 characters.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| IBAN | String | IBAN account number |

##### Returns

String - *Human readable IBAN account number*

### <a name="Helpers_isInvalid"></a>*#isInvalid(form, controlName)*

Checks control with ```controlName``` validity within the ```form```

| Parameter | Type | Description |
| :-- | :-- | :-- |
| form | Object | Angular form where control is placed in |
| controlName | String | Name that identifies control in ```form``` |

##### Returns

Boolean - *Flag indicating control validity*

---

## Hooks

Hooks for ext-bus-contact-list-ng

### <a name="Hooks_deleteContact"></a>*#deleteContact(contact, confirm)*

Delete contact action handler

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact object |
| confirm | Function | Called to confirm delete action |

### <a name="Hooks_processContacts"></a>*#processContacts(contacts)*

Extension hook for pre-processing contacts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array |  |

##### Returns

Array - *contacts Array of contacts*

### <a name="Hooks_processSearchContacts"></a>*#processSearchContacts(contacts)*

Extension hook for pre-processing search contacts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array |  |

##### Returns

Array - *contacts Array of contacts*

### <a name="Hooks_getSelectedContact"></a>*#getSelectedContact(contacts, contact)*

Selects the contact from contacts by id
Or returns null if nothing is found

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array | Array of contacts |
| contact | Object | Contact object |

##### Returns

Object or Null - *Returns found contact or null*

### <a name="Hooks_selectPrevContact"></a>*#selectPrevContact(contacts, index, contact)*

Returns previous (or the first) contact based
on the currently selected item id or item index (deprecated).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | [*](#*) | Processed contacts |
| index | Number | Currently selected contact index (deprecated) |
| contact | Object | Currently selected contact |

##### Returns

Object - *Previous or the first contact from the contacts*

### <a name="Hooks_returnContactIfExists"></a>*#returnContactIfExists(contactGroups, contact)*

Returns contact if it exists in contacts group, otherwise returns false result

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contactGroups | undefined | Array of contacts |
| contact | undefined | Contact object |

##### Returns

[*](#*) - *Specifies if contact exists in the array*

### <a name="Hooks_processContactBeforeSave"></a>*#processContactBeforeSave(contact)*

Returns a new contact object with IBAN and BBAN fields in electronic format (without spaces)
for each account.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Contact object to be created/updated |

##### Returns

Object - *Processed Contact object*
