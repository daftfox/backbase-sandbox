# widget-bb-initiate-us-payment-ng


Version: **1.45.20**

Initiate US payment widget

## Imports

* lib-bb-event-bus-ng
* lib-bb-extension-intents-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-permissions-ng
* lib-bb-state-container-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-payment-orders-ng
* vendor-bb-angular

---

## Table of Contents
- **USPaymentController**<br/>    <a href="#USPaymentController_$onInit">#$onInit()</a><br/>    <a href="#USPaymentController_loadUsDomesticWireDebitAccounts">#loadUsDomesticWireDebitAccounts(query)</a><br/>    <a href="#USPaymentController_loadDebitAccounts">#loadDebitAccounts(query)</a><br/>    <a href="#USPaymentController_selectDebitAccount">#selectDebitAccount(account)</a><br/>    <a href="#USPaymentController_clearPayment">#clearPayment()</a><br/>    <a href="#USPaymentController_reviewPayment">#reviewPayment()</a><br/>    <a href="#USPaymentController_discardPayment">#discardPayment()</a><br/>    <a href="#USPaymentController_cancelPayment">#cancelPayment()</a><br/>    <a href="#USPaymentController_editPayment">#editPayment()</a><br/>    <a href="#USPaymentController_makePayment">#makePayment(param, postAction)</a><br/>    <a href="#USPaymentController_saveDraft">#saveDraft(payment)</a><br/>    <a href="#USPaymentController_selectPaymentType">#selectPaymentType(paymentType)</a><br/>    <a href="#USPaymentController_modalSelectorLoadMore">#modalSelectorLoadMore(params)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_processCurrencies">#processCurrencies(currencies)</a><br/>    <a href="#Hooks_processDebitAccounts">#processDebitAccounts(currencies)</a><br/>    <a href="#Hooks_processCreditAccounts">#processCreditAccounts(creditAccounts)</a><br/>    <a href="#Hooks_processContacts">#processContacts(contacts)</a><br/>    <a href="#Hooks_defaultCurrency">#defaultCurrency()</a><br/>    <a href="#Hooks_defaultCountry">#defaultCountry()</a><br/>    <a href="#Hooks_defaultPaymentType">#defaultPaymentType()</a><br/>    <a href="#Hooks_defaultScheduleRepeat">#defaultScheduleRepeat()</a><br/>    <a href="#Hooks_processPrivileges">#processPrivileges(privileges)</a><br/>    <a href="#Hooks_processRate">#processRate(rate)</a><br/>
- **PostActions**<br/>    <a href="#PostActions_run">#run(type)</a><br/>    <a href="#PostActions_type">#type</a><br/>
- **Service**<br/>    <a href="#Service_getBeneficiaryAccounts">#getBeneficiaryAccounts(params)</a><br/>    <a href="#Service_getBeneficiaryContacts">#getBeneficiaryContacts(params)</a><br/>    <a href="#Service_updateAmount">#updateAmount(values)</a><br/>    <a href="#Service_updateToAmount">#updateToAmount(values)</a><br/>    <a href="#Service_updateToAmountByCurrency">#updateToAmountByCurrency(values)</a><br/>    <a href="#Service_updateFromEditChanged">#updateFromEditChanged(value)</a><br/>
- **Type Definitions**<br/>    <a href="#SubmitPostActions">SubmitPostActions</a><br/>    <a href="#Resource">Resource</a><br/>    <a href="#Privilege">Privilege</a><br/>    <a href="#MakePaymentArgument">MakePaymentArgument</a><br/>    <a href="#PrivilegesConstants">PrivilegesConstants</a><br/>    <a href="#PrivilegesConfiguration">PrivilegesConfiguration</a><br/>    <a href="#Amount">Amount</a><br/>

---

## BENEFICIARY_LOAD_TYPES

Map of beneficiary loading types

---

## Event

Widget events

---

## USPaymentController

Controller used by initiate us payments extensions
- ext-bus-initiate-payment-us-domestic-wire-ng

| Injector Key |
| :-- |
| *USPaymentController* |


### <a name="USPaymentController_$onInit"></a>*#$onInit()*

AngularJS Lifecycle hook used to initialize the controller.
Initializes payment form.

### <a name="USPaymentController_loadUsDomesticWireDebitAccounts"></a>*#loadUsDomesticWireDebitAccounts(query)*


#### Deprecated: Since 1.12.0
This method is deprecated and will removed in next major update.
Use loadDebitAccounts instead.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String | Text to search for in arrangements |

##### Returns

Promise - *To be fulfilled with arrangements collection*

### <a name="USPaymentController_loadDebitAccounts"></a>*#loadDebitAccounts(query)*

Loads arrangements according to `query` search, if not provided it returns entire
allowed arrangements collection. Result is cached by `query` key, next time same `query` is
requested it will return cached collection

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | String | Text to search for in arrangements |

##### Returns

Promise - *To be fulfilled with arrangements collection*

### <a name="USPaymentController_selectDebitAccount"></a>*#selectDebitAccount(account)*

Save selected account to be used as debtor in the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | Object | Account to be selected |

### <a name="USPaymentController_clearPayment"></a>*#clearPayment()*

Resets payment form fields

### <a name="USPaymentController_reviewPayment"></a>*#reviewPayment()*

Move to review step

### <a name="USPaymentController_discardPayment"></a>*#discardPayment()*

Discard current payment and move to create payment form

### <a name="USPaymentController_cancelPayment"></a>*#cancelPayment()*

Cancel payment form with current entered payment filled,
hide widget and publish cancelation event

### <a name="USPaymentController_editPayment"></a>*#editPayment()*

Move to payment form with current entered payment filled

### <a name="USPaymentController_makePayment"></a>*#makePayment(param, postAction)*

Creates new payment, save the beneficiary if provided and executes post submit actions
after payment has been created succesfully

| Parameter | Type | Description |
| :-- | :-- | :-- |
| param | [MakePaymentArgument](#MakePaymentArgument) | Object containing baneficiary and payment |
| postAction | [PostActions](#PostActions) | Type of post action to be executed |

### <a name="USPaymentController_saveDraft"></a>*#saveDraft(payment)*

Saves current payment as draft and resets payment form

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | Payment to save as draft |

### <a name="USPaymentController_selectPaymentType"></a>*#selectPaymentType(paymentType)*

Triggers the selected payment type global event in case there are many
[](widget-bb-initiate-us-payment-ng.html#) in the same page.
It will hide current extension and show selected payment type extension.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentType | [PaymentType](model-bb-payment-orders-ng.html#PaymentType) | Payment type identifier |

### <a name="USPaymentController_modalSelectorLoadMore"></a>*#modalSelectorLoadMore(params)*

Dispatches "load more" request from beneficiary selector

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object |  |

---

## Hooks

Hooks for widget-bb-initiate-us-payment-ng

### <a name="Hooks_processCurrencies"></a>*#processCurrencies(currencies)*

Processes currencies array returned from the service

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencies | Array of Object | Initial currencies |

##### Returns

Array of Object - *Processed currencies*

### <a name="Hooks_processDebitAccounts"></a>*#processDebitAccounts(currencies)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| currencies | Array of Object | Initial debit accounts |

##### Returns

Array of Object - *Processed debit accounts*

### <a name="Hooks_processCreditAccounts"></a>*#processCreditAccounts(creditAccounts)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| creditAccounts | Array of Object |  |

##### Returns

Array of Object - *Processed creditAccounts*

### <a name="Hooks_processContacts"></a>*#processContacts(contacts)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| contacts | Array of Object | Initial contacts |

##### Returns

Array of Object - *Processed contacts*

### <a name="Hooks_defaultCurrency"></a>*#defaultCurrency()*


##### Returns

String - *Default currency*

### <a name="Hooks_defaultCountry"></a>*#defaultCountry()*

Set beneficiary postal address country by default

##### Returns

String - *Returns the country code, which should either be the empty string or
                  an uppercase ISO 3166 2-letter code*

### <a name="Hooks_defaultPaymentType"></a>*#defaultPaymentType()*


##### Returns

String - *Default payment type*

### <a name="Hooks_defaultScheduleRepeat"></a>*#defaultScheduleRepeat()*

Get the default repeat value of minimum ocurrences

##### Returns

Number - *Default schedule repeat default value*

### <a name="Hooks_processPrivileges"></a>*#processPrivileges(privileges)*

Allows to modify any property of the configured privileges

| Parameter | Type | Description |
| :-- | :-- | :-- |
| privileges | [PrivilegesConfiguration](#PrivilegesConfiguration) | Base collection of privileges |

##### Returns

Array of [Privilege](#Privilege) - *Processed collection of privileges*

## Example

```javascript
// Privilege collection
[
 {
    resource: 'Payments',
    function: 'US Domestic Wire',
    privileges: ['create', 'approve'],
  },
  {
    resource: 'Contacts',
    function: 'Contacts',
    privileges: ['view'],
  },
]
```

### <a name="Hooks_processRate"></a>*#processRate(rate)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| rate | Number | Currency exchange rate |

##### Returns

Number - *Processed rate*

---

## PostActions

Actions to be executed after submit a payment

### <a name="PostActions_run"></a>*#run(type)*

It executes the callback configured for the `type` argument

| Parameter | Type | Description |
| :-- | :-- | :-- |
| type | [SubmitPostActions](#SubmitPostActions) | Key to access post action callback |
### <a name="PostActions_type"></a>*#type*

Constant keys for post actions

**Type:** *[SubmitPostActions](#SubmitPostActions)*


---

## Service


### <a name="Service_getBeneficiaryAccounts"></a>*#getBeneficiaryAccounts(params)*

Get credit accounts available based on params provided

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters and callback |

##### Returns

Promise of Object - *A Promise with flat accounts list and total number of items*

### <a name="Service_getBeneficiaryContacts"></a>*#getBeneficiaryContacts(params)*

Get contacts available based on params provided

| Parameter | Type | Description |
| :-- | :-- | :-- |
| params | Object | Request parameters and callback function |

##### Returns

Promise of Object - *A Promise with flat contacts list with total items number*

### <a name="Service_updateAmount"></a>*#updateAmount(values)*

After to amount has been manually changed, update from amount automatically.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| values | [Amount](#Amount) | Calculated from amount based on to amount |

### <a name="Service_updateToAmount"></a>*#updateToAmount(values)*

After from amount has been manually changed, update to amount automatically.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| values | [Amount](#Amount) | Calculated to amount based on from amount |

### <a name="Service_updateToAmountByCurrency"></a>*#updateToAmountByCurrency(values)*

After to currency has been manually changed, update to amount automatically.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| values | [Amount](#Amount) | Calculated to amount based on from amount |

### <a name="Service_updateFromEditChanged"></a>*#updateFromEditChanged(value)*

Update from edit changed value,to know if any changed after set up edited payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | Boolean | true/false |

## Type Definitions


### <a name="SubmitPostActions"></a>*SubmitPostActions*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| NONE | String | Default empty action |
| CREATE | String | Go to create new payment |
| APPROVE | String | If allowed approve created payment |

### <a name="Resource"></a>*Resource*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| PAYMENTS | String | Identifier for payments resource |
| CONTACTS | String | Identifier for contacts resource |

### <a name="Privilege"></a>*Privilege*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| resource | String | Name of the resource |
| function | String | Business function name |
| privileges | Array of String | Collection of privileges to check (read, create, view, execute, approve) |

### <a name="MakePaymentArgument"></a>*MakePaymentArgument*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| contact | Object | Beneficiary data to be created |
| payment | Object | Payment data to be created |

### <a name="PrivilegesConstants"></a>*PrivilegesConstants*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| resource | [Resource](#Resource) | Resource map |
| function | [PaymentContext](model-bb-payment-orders-ng.html#PaymentContext) | Function map |

### <a name="PrivilegesConfiguration"></a>*PrivilegesConfiguration*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| configuration | Array of [Privilege](#Privilege) | Base collection of privileges |
| constants | [PrivilegesConstants](#PrivilegesConstants) | Allowed values for every privilege |

### <a name="Amount"></a>*Amount*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| value | Number | Amount numerical value |
| currency | String | ISO 4217 currency code |

---

## Templates

* *template.ng.html*

---
