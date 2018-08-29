# RecurringController


Version: **8.11.0**

Billpay - recurring payment

## Imports

* lib-bb-billpay-errors
* lib-bb-event-bus-ng
* lib-bb-extension-helpers-ng
* lib-bb-intent-ng
* lib-bb-model-errors
* lib-bb-state-container-ng
* lib-bb-storage-ng
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* model-bb-billpay-ng
* vendor-bb-angular

---

## Table of Contents
- **AccountService**<br/>    <a href="#AccountService_accountNameOrNumber">#accountNameOrNumber(account)</a><br/>    <a href="#AccountService_accountNameAndNumber">#accountNameAndNumber(account)</a><br/>
- **DateService**<br/>    <a href="#DateService_isBadFirstPaymentDate">#isBadFirstPaymentDate(date)</a><br/>    <a href="#DateService_isDatepickerValidFormat">#isDatepickerValidFormat(value)</a><br/>    <a href="#DateService_getDateNow">#getDateNow()</a><br/>    <a href="#DateService_getDateTodayPlusAYear">#getDateTodayPlusAYear()</a><br/>    <a href="#DateService_getAsDate">#getAsDate(str)</a><br/>    <a href="#DateService_getServerDate">#getServerDate(rawDate)</a><br/>    <a href="#DateService_areSameDate">#areSameDate(date1, date2)</a><br/>    <a href="#DateService_isDateInPast">#isDateInPast(date)</a><br/>    <a href="#DateService_isDateBefore">#isDateBefore(date, referenceDate)</a><br/>    <a href="#DateService_isWeekend">#isWeekend(date)</a><br/>    <a href="#DateService_isValidDate">#isValidDate(date)</a><br/>    <a href="#DateService_getFirstFreePaymentDate">#getFirstFreePaymentDate(obj)</a><br/>    <a href="#DateService_getEarliestPaymentDate">#getEarliestPaymentDate()</a><br/>    <a href="#DateService_isDateRush">#isDateRush(dateToCheck, paymentServicesObj)</a><br/>    <a href="#DateService_isDateRushNoCutOff">#isDateRushNoCutOff(dateToCheck, paymentServicesObj)</a><br/>    <a href="#DateService_rushIsAvailable">#rushIsAvailable(datetoCheck, paymentServicesObj)</a><br/>    <a href="#DateService_convertDateToServerDayString">#convertDateToServerDayString(the)</a><br/>    <a href="#DateService_isDateSelectable">#isDateSelectable(paymentServicesObj, date)</a><br/>    <a href="#DateService_isDayDisabledRush">#isDayDisabledRush(paymentServicesObj, obj)</a><br/>    <a href="#DateService_showFinalRecurringPaymentDate">#showFinalRecurringPaymentDate(newPayment)</a><br/>    <a href="#DateService_showFinalRecurringPaymentDateAndNumInstances">#showFinalRecurringPaymentDateAndNumInstances(newPayment)</a><br/>    <a href="#DateService_dateDiffInFullMonths">#dateDiffInFullMonths(date1, date2)</a><br/>    <a href="#DateService_dateDiffInFullYears">#dateDiffInFullYears(date1, date2)</a><br/>    <a href="#DateService_getFinalRecurringPaymentDate">#getFinalRecurringPaymentDate(paymentDate, frequency, numberOfInstances)</a><br/>    <a href="#DateService_calculateNumberOfInstances">#calculateNumberOfInstances(newPayment)</a><br/>
- **DatepickerController**<br/>    <a href="#DatepickerController_options">#options</a><br/>    <a href="#DatepickerController_datepickerDateFormat">#datepickerDateFormat</a><br/>    <a href="#DatepickerController_openDatepicker">#openDatepicker(payee)</a><br/>    <a href="#DatepickerController_rushIsAvailable">#rushIsAvailable(payee)</a><br/>    <a href="#DatepickerController_rushHasBeenChosen">#rushHasBeenChosen(payee)</a><br/>    <a href="#DatepickerController_rushDatepickerOptions">#rushDatepickerOptions(payee)</a><br/>    <a href="#DatepickerController_finalPaymentDatepickerOptions">#finalPaymentDatepickerOptions()</a><br/>    <a href="#DatepickerController_firstPaymentDatepickerOptions">#firstPaymentDatepickerOptions()</a><br/>    <a href="#DatepickerController_datepickerError">#datepickerError(payee, form)</a><br/>    <a href="#DatepickerController_datepickerHasError">#datepickerHasError(payee, form)</a><br/>    <a href="#DatepickerController_datepickerErrorClass">#datepickerErrorClass(payee, form)</a><br/>
- **Hooks**<br/>    <a href="#Hooks_setState">#setState(current)</a><br/>    <a href="#Hooks_transformPayee">#transformPayee(payee)</a><br/>    <a href="#Hooks_transformAccount">#transformAccount(account)</a><br/>    <a href="#Hooks_transformPayment">#transformPayment(payment)</a><br/>    <a href="#Hooks_beforeGetPayeesSummary">#beforeGetPayeesSummary(current)</a><br/>    <a href="#Hooks_afterGetPayeesSummarySuccess">#afterGetPayeesSummarySuccess(current)</a><br/>    <a href="#Hooks_afterGetPayeesSummaryError">#afterGetPayeesSummaryError(current)</a><br/>    <a href="#Hooks_beforeGetAccounts">#beforeGetAccounts(current)</a><br/>    <a href="#Hooks_afterGetAccountsSuccess">#afterGetAccountsSuccess(current)</a><br/>    <a href="#Hooks_afterGetAccountsError">#afterGetAccountsError(current)</a><br/>    <a href="#Hooks_beforePostPaymentsRecord">#beforePostPaymentsRecord(current)</a><br/>    <a href="#Hooks_afterPostPaymentsRecordSuccess">#afterPostPaymentsRecordSuccess(current)</a><br/>    <a href="#Hooks_afterPostPaymentsRecordError">#afterPostPaymentsRecordError(current)</a><br/>    <a href="#Hooks_beforePostRecurringPaymentsRecord">#beforePostRecurringPaymentsRecord(current)</a><br/>    <a href="#Hooks_afterPostRecurringPaymentsRecordSuccess">#afterPostRecurringPaymentsRecordSuccess(current)</a><br/>    <a href="#Hooks_afterPostRecurringPaymentsRecordError">#afterPostRecurringPaymentsRecordError(current)</a><br/>    <a href="#Hooks_beforeGetPayment">#beforeGetPayment(current)</a><br/>    <a href="#Hooks_afterGetPaymentSuccess">#afterGetPaymentSuccess(current)</a><br/>    <a href="#Hooks_afterGetPaymentError">#afterGetPaymentError(current)</a><br/>    <a href="#Hooks_beforePutPaymentRecord">#beforePutPaymentRecord(current)</a><br/>    <a href="#Hooks_afterPutPaymentRecordSuccess">#afterPutPaymentRecordSuccess(current)</a><br/>    <a href="#Hooks_afterPutPaymentRecordError">#afterPutPaymentRecordError(current)</a><br/>
- **RecurringController**<br/>    <a href="#RecurringControllerbeforeGetAccounts">beforeGetAccounts()</a><br/>    <a href="#RecurringControllerafterGetAccountsSuccess">afterGetAccountsSuccess(data)</a><br/>    <a href="#RecurringControllerafterGetAccountsError">afterGetAccountsError(error)</a><br/>    <a href="#RecurringControllerbeforeGetPayeesSummary">beforeGetPayeesSummary()</a><br/>    <a href="#RecurringControllerafterGetPayeesSummarySuccess">afterGetPayeesSummarySuccess(data)</a><br/>    <a href="#RecurringControllerafterGetPayeesSummaryError">afterGetPayeesSummaryError(error)</a><br/>    <a href="#RecurringControllerbeforePostPaymentsRecord">beforePostPaymentsRecord()</a><br/>    <a href="#RecurringControllerafterPostPaymentsRecordSuccess">afterPostPaymentsRecordSuccess(data)</a><br/>    <a href="#RecurringControllerafterPostPaymentsRecordError">afterPostPaymentsRecordError(error)</a><br/>    <a href="#RecurringControllerbeforePostRecurringPaymentsRecord">beforePostRecurringPaymentsRecord()</a><br/>    <a href="#RecurringControllerafterPostRecurringPaymentsRecordSuccess">afterPostRecurringPaymentsRecordSuccess()</a><br/>    <a href="#RecurringControllerafterPostRecurringPaymentsRecordError">afterPostRecurringPaymentsRecordError()</a><br/>
- **ExpeditedService**<br/>    <a href="#ExpeditedService_isExpedited">#isExpedited(paymentServicesObj)</a><br/>    <a href="#ExpeditedService_getExpeditedFee">#getExpeditedFee(paymentServicesObj)</a><br/>    <a href="#ExpeditedService_getEarliestPaymentDate">#getEarliestPaymentDate(paymentServicesObj)</a><br/>    <a href="#ExpeditedService_getCutoffTime">#getCutoffTime(paymentServicesObj)</a><br/>    <a href="#ExpeditedService_getPaymentDate">#getPaymentDate(paymentServicesObj)</a><br/>
- **RecurringController**<br/>    <a href="#RecurringControllergetPayment">getPayment(paymentServicesObj)</a><br/>    <a href="#RecurringControllerPayABillController">PayABillController()</a><br/>
- **PaymentService**<br/>    <a href="#PaymentService_summarisePayments">#summarisePayments(payees)</a><br/>    <a href="#PaymentService_getPayment">#getPayment()</a><br/>
- **RecurringController**<br/>    <a href="#RecurringControllerupdatePaymentDateForNewPayee">updatePaymentDateForNewPayee(newPayment)</a><br/>    <a href="#RecurringControllerinitPayee">initPayee($ctrl)</a><br/>    <a href="#RecurringControllerclearPayeeFromStorage">clearPayeeFromStorage()</a><br/>
- **ManagePaymentService**<br/>    <a href="#ManagePaymentService_getPayeesSummary">#getPayeesSummary(newPayeeId)</a><br/>    <a href="#ManagePaymentService_getAccounts">#getAccounts()</a><br/>    <a href="#ManagePaymentService_getCurrencyCode">#getCurrencyCode()</a><br/>    <a href="#ManagePaymentService_postPaymentsRecord">#postPaymentsRecord()</a><br/>    <a href="#ManagePaymentService_postRecurringPaymentsRecord">#postRecurringPaymentsRecord(payment)</a><br/>    <a href="#ManagePaymentService_putPaymentRecord">#putPaymentRecord()</a><br/>
- **ManagePaymentViewModel**<br/>    <a href="#ManagePaymentViewModel_beforeGetPayeesSummary">#beforeGetPayeesSummary()</a><br/>    <a href="#ManagePaymentViewModel_afterGetPayeesSummarySuccess">#afterGetPayeesSummarySuccess(updateData)</a><br/>    <a href="#ManagePaymentViewModel_afterGetPayeesSummaryError">#afterGetPayeesSummaryError(error)</a><br/>    <a href="#ManagePaymentViewModel_beforeGetAccounts">#beforeGetAccounts(current)</a><br/>    <a href="#ManagePaymentViewModel_afterGetAccountsSuccess">#afterGetAccountsSuccess(paymentAccounts)</a><br/>    <a href="#ManagePaymentViewModel_afterGetAccountsError">#afterGetAccountsError(error)</a><br/>    <a href="#ManagePaymentViewModel_beforePostPaymentsRecord">#beforePostPaymentsRecord()</a><br/>    <a href="#ManagePaymentViewModel_afterPostPaymentsRecordSuccess">#afterPostPaymentsRecordSuccess()</a><br/>    <a href="#ManagePaymentViewModel_afterPostPaymentsRecordError">#afterPostPaymentsRecordError(error)</a><br/>    <a href="#ManagePaymentViewModel_beforePostRecurringPaymentsRecord">#beforePostRecurringPaymentsRecord()</a><br/>    <a href="#ManagePaymentViewModel_afterPostRecurringPaymentsRecordSuccess">#afterPostRecurringPaymentsRecordSuccess(newPayment)</a><br/>    <a href="#ManagePaymentViewModel_afterPostRecurringPaymentsRecordError">#afterPostRecurringPaymentsRecordError(error)</a><br/>    <a href="#ManagePaymentViewModel_beforeGetPayment">#beforeGetPayment()</a><br/>    <a href="#ManagePaymentViewModel_afterGetPaymentSuccess">#afterGetPaymentSuccess(payment)</a><br/>    <a href="#ManagePaymentViewModel_afterGetPaymentError">#afterGetPaymentError(error)</a><br/>    <a href="#ManagePaymentViewModel_beforePutPaymentRecord">#beforePutPaymentRecord()</a><br/>    <a href="#ManagePaymentViewModel_afterPutPaymentRecordSuccess">#afterPutPaymentRecordSuccess()</a><br/>    <a href="#ManagePaymentViewModel_afterPutPaymentRecordError">#afterPutPaymentRecordError(error)</a><br/>    <a href="#ManagePaymentViewModel_clearBackendError">#clearBackendError(inputName)</a><br/>
- **RecurringController**<br/>    <a href="#RecurringControlleraddNewPaymentObj">addNewPaymentObj(payee, paymentAccount)</a><br/>
- **Type Definitions**<br/>    <a href="#PayeeSummary">PayeeSummary</a><br/>    <a href="#PaymentAccount">PaymentAccount</a><br/>

---

## AccountService

Encapsulate all account handling functionality

### <a name="AccountService_accountNameOrNumber"></a>*#accountNameOrNumber(account)*

return the account nickname, else a blurred acc number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [PaymentAccount](model-bb-billpay-ng.html#PaymentAccount) |  |

##### Returns

String - **

### <a name="AccountService_accountNameAndNumber"></a>*#accountNameAndNumber(account)*

return the account nickname & blurred acc number, else just a blurred acc number

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [PaymentAccount](model-bb-billpay-ng.html#PaymentAccount) |  |

##### Returns

String - **

---

## DateService

Encapsulate all date handling functionality for billpay.

### <a name="DateService_isBadFirstPaymentDate"></a>*#isBadFirstPaymentDate(date)*

Take a date, and return true if it is not allowed as a first payment date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date |  |

##### Returns

Boolean - **

### <a name="DateService_isDatepickerValidFormat"></a>*#isDatepickerValidFormat(value)*

return a boolean for date validity

| Parameter | Type | Description |
| :-- | :-- | :-- |
| value | String | the date value to validate |

##### Returns

Boolean - *is the date value a valid format*

### <a name="DateService_getDateNow"></a>*#getDateNow()*

return the current date and time.

##### Returns

Date - *the date now*

### <a name="DateService_getDateTodayPlusAYear"></a>*#getDateTodayPlusAYear()*

return the current date plus a year

##### Returns

Date - *the date now plus 1 year*

### <a name="DateService_getAsDate"></a>*#getAsDate(str)*

read the param as a date string

| Parameter | Type | Description |
| :-- | :-- | :-- |
| str | String | string to read |

##### Returns

Date - *the date from the string*

### <a name="DateService_getServerDate"></a>*#getServerDate(rawDate)*

read the param as date string and return Date in current locale

| Parameter | Type | Description |
| :-- | :-- | :-- |
| rawDate | String | string to read must be in format YYYY-MM-DD... |

##### Returns

Date - *the date from the string*

### <a name="DateService_areSameDate"></a>*#areSameDate(date1, date2)*

return true if the two dates are on the same day ignoring time.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date1 | Date | first date |
| date2 | Date | second date |

##### Returns

Boolean - *dates are on same day*

### <a name="DateService_isDateInPast"></a>*#isDateInPast(date)*

Is the passed date in the past

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date | The date being checked |

##### Returns

Boolean - *Is the date in the past*

### <a name="DateService_isDateBefore"></a>*#isDateBefore(date, referenceDate)*

Is the passed date before the reference date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date | The date being checked |
| referenceDate | Date | The date being checked against |

##### Returns

Boolean - *Is the date before the reference date*

### <a name="DateService_isWeekend"></a>*#isWeekend(date)*

return true if the date day is Saturday or Sunday.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date | date to check |

##### Returns

Boolean - *date is weekend*

### <a name="DateService_isValidDate"></a>*#isValidDate(date)*

Decide if the passed date is valid

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date | date to check |

##### Returns

Boolean - *date is valid*

### <a name="DateService_getFirstFreePaymentDate"></a>*#getFirstFreePaymentDate(obj)*

return first free payment date, regular payment or rush if the fee has been
  waived

| Parameter | Type | Description |
| :-- | :-- | :-- |
| obj | Object |  |
| obj.paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |

##### Returns

Date - *first free payment date*

### <a name="DateService_getEarliestPaymentDate"></a>*#getEarliestPaymentDate()*

returns the earliest payment date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| obj.paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) | payment service object |

##### Returns

Date - *earliest payment date*

### <a name="DateService_isDateRush"></a>*#isDateRush(dateToCheck, paymentServicesObj)*

return true if the date is a rush date and before cutoff

| Parameter | Type | Description |
| :-- | :-- | :-- |
| dateToCheck | Date |  |
| paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |

##### Returns

Boolean - *date is a rush date and before cutoff*

### <a name="DateService_isDateRushNoCutOff"></a>*#isDateRushNoCutOff(dateToCheck, paymentServicesObj)*

return true if the date is a rush date, ignoring cutoff

| Parameter | Type | Description |
| :-- | :-- | :-- |
| dateToCheck | Date |  |
| paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |

##### Returns

Boolean - *date is a rush date*

### <a name="DateService_rushIsAvailable"></a>*#rushIsAvailable(datetoCheck, paymentServicesObj)*

return a boolean on whether rush is available for a date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| datetoCheck | Date | the date to validate on |
| paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |

##### Returns

Boolean - *rush is available for date*

### <a name="DateService_convertDateToServerDayString"></a>*#convertDateToServerDayString(the)*

return a date in format YYYY-MM-DD for POSTing to the server

| Parameter | Type | Description |
| :-- | :-- | :-- |
| the | Date | date to format |

##### Returns

String - *formatted date*

### <a name="DateService_isDateSelectable"></a>*#isDateSelectable(paymentServicesObj, date)*

determines if the date can be selected

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |
| date | Date |  |

##### Returns

Boolean - *date is selectable*

### <a name="DateService_isDayDisabledRush"></a>*#isDayDisabledRush(paymentServicesObj, obj)*

a method to run on dates to disable those that cannot be payment dates

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | [PaymentServices](model-bb-billpay-ng.html#PaymentServices) |  |
| obj | Object |  |
| obj.date | Date |  |
| obj.mode | String |  |

##### Returns

Boolean - *is date to be disabled*

### <a name="DateService_showFinalRecurringPaymentDate"></a>*#showFinalRecurringPaymentDate(newPayment)*

show the date if the required fields are filled in

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Boolean - **

### <a name="DateService_showFinalRecurringPaymentDateAndNumInstances"></a>*#showFinalRecurringPaymentDateAndNumInstances(newPayment)*

show the date & number of instances if the required fields are filled in

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

##### Returns

Boolean - **

### <a name="DateService_dateDiffInFullMonths"></a>*#dateDiffInFullMonths(date1, date2)*

the amount of full months difference between dates

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date1 | Date | The start date to check from |
| date2 | Date | The end date to check to |

##### Returns

Number - **

### <a name="DateService_dateDiffInFullYears"></a>*#dateDiffInFullYears(date1, date2)*

the amount of full years difference between dates

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date1 | Date | The start date to check from |
| date2 | Date | The end date to check to |

##### Returns

Number - **

### <a name="DateService_getFinalRecurringPaymentDate"></a>*#getFinalRecurringPaymentDate(paymentDate, frequency, numberOfInstances)*

return the final recurring payment date given a starting date, frequency and
  no. of instances

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentDate | Date |  |
| frequency | String |  |
| numberOfInstances | Number |  |

##### Returns

Date - **

### <a name="DateService_calculateNumberOfInstances"></a>*#calculateNumberOfInstances(newPayment)*

return the number of instances (payments) that will be made
between two dates with a frequency set, until BUT NOT after the date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |
| newPayment.paymentDate | Date | the first payment date |
| newPayment.finalPaymentDate | Date | the date which payments are made up to but not after |
| newPayment.frequency | String | the name of the frequency of payments to be made |

##### Returns

Number - **

---

## DatepickerController

Controller used to isolate form state from view state. Clones view state
in order to mutate it
### <a name="DatepickerController_options"></a>*#options*

options object for datepicker

**Type:** *Object*

### <a name="DatepickerController_datepickerDateFormat"></a>*#datepickerDateFormat*

the datepicker date format

**Type:** *String*


### <a name="DatepickerController_openDatepicker"></a>*#openDatepicker(payee)*

open the datepicker for this holder

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |

### <a name="DatepickerController_rushIsAvailable"></a>*#rushIsAvailable(payee)*

return true if rush is available but not selected for this payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |

##### Returns

Boolean - **

### <a name="DatepickerController_rushHasBeenChosen"></a>*#rushHasBeenChosen(payee)*

return true if rush has been selected for this payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |

##### Returns

Boolean - **

### <a name="DatepickerController_rushDatepickerOptions"></a>*#rushDatepickerOptions(payee)*

Build custom options object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |

##### Returns

Object - **

### <a name="DatepickerController_finalPaymentDatepickerOptions"></a>*#finalPaymentDatepickerOptions()*

Build custom options object for first payment.
  Only need to disable weekends & holidays as minDate covers past dates

##### Returns

Object - **

### <a name="DatepickerController_firstPaymentDatepickerOptions"></a>*#firstPaymentDatepickerOptions()*

Build custom options object for first payment

##### Returns

Object - **

### <a name="DatepickerController_datepickerError"></a>*#datepickerError(payee, form)*

Returns error string key if there is an error present

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| form | [DatepickerForm](#DatepickerForm) |  |

##### Returns

String - *error key or empty string*

### <a name="DatepickerController_datepickerHasError"></a>*#datepickerHasError(payee, form)*

Check if the datepicker has errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| form | [DatepickerForm](#DatepickerForm) |  |

##### Returns

Boolean - *the datepicker has errors*

### <a name="DatepickerController_datepickerErrorClass"></a>*#datepickerErrorClass(payee, form)*

get datepicker error class

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| form | [DatepickerForm](#DatepickerForm) |  |

##### Returns

[{'was-validated is-invalid':boolean}](#{'was-validated is-invalid':boolean}) - *object with error class indicator*

---

## Hooks


*Extends*: [Hooks](lib-bb-widget-extension-ng.html#Hooks)

### <a name="Hooks_setState"></a>*#setState(current)*

add any state required by extension

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_transformPayee"></a>*#transformPayee(payee)*

Make any modifications needed to the loaded payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](#PayeeSummary) | The current state of the payee |

##### Returns

Object - *The transformed payee*

### <a name="Hooks_transformAccount"></a>*#transformAccount(account)*

Make any modifications needed to the loaded account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| account | [PaymentAccount](#PaymentAccount) | The current state of the account |

##### Returns

Object - *The transformed account*

### <a name="Hooks_transformPayment"></a>*#transformPayment(payment)*

Make any modifications needed to the loaded payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | [Payment](#Payment) | The current state of the payment |

##### Returns

Object - *The transformed payment*

### <a name="Hooks_beforeGetPayeesSummary"></a>*#beforeGetPayeesSummary(current)*

Amend the view before loading the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPayeesSummarySuccess"></a>*#afterGetPayeesSummarySuccess(current)*

Amend the view after successfully loading the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPayeesSummaryError"></a>*#afterGetPayeesSummaryError(current)*

Amend the view after unsuccessfully loading the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforeGetAccounts"></a>*#beforeGetAccounts(current)*

Amend the view before loading the list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetAccountsSuccess"></a>*#afterGetAccountsSuccess(current)*

Amend the view after successfully loading the list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetAccountsError"></a>*#afterGetAccountsError(current)*

Amend the view after unsuccessfully loading the list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforePostPaymentsRecord"></a>*#beforePostPaymentsRecord(current)*

Amend the view before posting a new batch of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPostPaymentsRecordSuccess"></a>*#afterPostPaymentsRecordSuccess(current)*

Amend the view after successfully posting a new batch of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPostPaymentsRecordError"></a>*#afterPostPaymentsRecordError(current)*

Amend the view after unsuccessfully posting a new batch of payments

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforePostRecurringPaymentsRecord"></a>*#beforePostRecurringPaymentsRecord(current)*

Amend the view before posting a new recurring payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPostRecurringPaymentsRecordSuccess"></a>*#afterPostRecurringPaymentsRecordSuccess(current)*

Amend the view after successfully posting a new recurring payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPostRecurringPaymentsRecordError"></a>*#afterPostRecurringPaymentsRecordError(current)*

Amend the view after unsuccessfully posting a new recurring payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforeGetPayment"></a>*#beforeGetPayment(current)*

Amend the view before loading the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPaymentSuccess"></a>*#afterGetPaymentSuccess(current)*

Amend the view after successfully loading the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterGetPaymentError"></a>*#afterGetPaymentError(current)*

Amend the view after unsuccessfully loading the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_beforePutPaymentRecord"></a>*#beforePutPaymentRecord(current)*

Amend the view before putting a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPutPaymentRecordSuccess"></a>*#afterPutPaymentRecordSuccess(current)*

Amend the view after successfully putting  a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="Hooks_afterPutPaymentRecordError"></a>*#afterPutPaymentRecordError(current)*

Amend the view after unsuccessfully putting a payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

---

---

### <a name="RecurringControllerbeforeGetAccounts"></a>*beforeGetAccounts()*

Before get accounts event

---

### <a name="RecurringControllerafterGetAccountsSuccess"></a>*afterGetAccountsSuccess(data)*

After get accounts event

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Account data |

---

### <a name="RecurringControllerafterGetAccountsError"></a>*afterGetAccountsError(error)*

After get accounts error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while getting accounts |

---

### <a name="RecurringControllerbeforeGetPayeesSummary"></a>*beforeGetPayeesSummary()*

Before get payees summary event

---

### <a name="RecurringControllerafterGetPayeesSummarySuccess"></a>*afterGetPayeesSummarySuccess(data)*

After get payees summary event

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payee summary data |

---

### <a name="RecurringControllerafterGetPayeesSummaryError"></a>*afterGetPayeesSummaryError(error)*

After get payees summary error event

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error after get payees summary |

---

### <a name="RecurringControllerbeforePostPaymentsRecord"></a>*beforePostPaymentsRecord()*

Before post payments record event

---

### <a name="RecurringControllerafterPostPaymentsRecordSuccess"></a>*afterPostPaymentsRecordSuccess(data)*

Afterpost payments record success event

| Parameter | Type | Description |
| :-- | :-- | :-- |
| data | Object | Payment data |

---

### <a name="RecurringControllerafterPostPaymentsRecordError"></a>*afterPostPaymentsRecordError(error)*

After post payments error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | Object | Error while posting payments |

---

### <a name="RecurringControllerbeforePostRecurringPaymentsRecord"></a>*beforePostRecurringPaymentsRecord()*

Before post recurring payment record event

---

### <a name="RecurringControllerafterPostRecurringPaymentsRecordSuccess"></a>*afterPostRecurringPaymentsRecordSuccess()*

After post recurring payment record success event

---

### <a name="RecurringControllerafterPostRecurringPaymentsRecordError"></a>*afterPostRecurringPaymentsRecordError()*

After post recurring payment record error event

---

---

## ExpeditedService

Encapsulate all expedite functionality

### <a name="ExpeditedService_isExpedited"></a>*#isExpedited(paymentServicesObj)*

return true if payment is expedited

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |

##### Returns

Boolean - **

### <a name="ExpeditedService_getExpeditedFee"></a>*#getExpeditedFee(paymentServicesObj)*

return paymentFee from payment object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |

##### Returns

Number or Undefined - **

### <a name="ExpeditedService_getEarliestPaymentDate"></a>*#getEarliestPaymentDate(paymentServicesObj)*

return earliestPaymentDate from payment object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |

##### Returns

String or Undefined - **

### <a name="ExpeditedService_getCutoffTime"></a>*#getCutoffTime(paymentServicesObj)*

return cutoffTime from payment object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |

##### Returns

String or Undefined - **

### <a name="ExpeditedService_getPaymentDate"></a>*#getPaymentDate(paymentServicesObj)*

return earliest or next payment date  from payment object depending upon cutoff

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |

##### Returns

String or Undefined - **

---

### <a name="RecurringControllergetPayment"></a>*getPayment(paymentServicesObj)*

get payment object

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentServicesObj | Object |  |
| paymentServicesObj.EXPEDITED_PAYMENT | Object |  |
| paymentServicesObj.OVERNIGHT_CHECK | Object |  |

##### Returns

Object or Undefined - **

---

---

### <a name="RecurringControllerPayABillController"></a>*PayABillController()*

Billpay pay a bill widget controller

---

## BillpaySummaryNotification

Creates a new empty hidden notification

---

---

## PaymentService

Encapsulate all payment handling functionality for billpay.

### <a name="PaymentService_summarisePayments"></a>*#summarisePayments(payees)*

Return a summary of payments. Listed & grouped by payment account

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payees | Array of [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) | The list of payees |

##### Returns

Object - *Object containing an object of payments by account, and a list of payments*

### <a name="PaymentService_getPayment"></a>*#getPayment()*

Update the view with a payment loaded from the data source

##### Returns

Promise of [void](#void) - **

---

---

### <a name="RecurringControllerupdatePaymentDateForNewPayee"></a>*updatePaymentDateForNewPayee(newPayment)*

Update the payment date with the nextPaymentDate field from the regular payment
  service on the selected payee. Also stop a date from before then being used.
  Unset the finalPaymentDate

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |

---

### <a name="RecurringControllerinitPayee"></a>*initPayee($ctrl)*

Initialise the payee select. If there is a payee pre-provided then set it into
  newPayment and update the payment date based on that payee

| Parameter | Type | Description |
| :-- | :-- | :-- |
| $ctrl | Object |  |
| $ctrl.newPayment | Object |  |
| $ctrl.getInitialPayee | Function |  |

---

### <a name="RecurringControllerclearPayeeFromStorage"></a>*clearPayeeFromStorage()*

Clear the payeeId from session storage. To be called by the extension when the
  user completes the flow (setting up a payment or cancelling)

---

## ManagePaymentService

The purpose of this module is to provide the main structure of the
Manage Payment widget. Outlining the workflows, connecting the data from the
model to the view via the customizations provided by the extension.

The core functionality of the Manage Payment widget

### <a name="ManagePaymentService_getPayeesSummary"></a>*#getPayeesSummary(newPayeeId)*

Update the view with a list of payees loaded from the data source

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayeeId | String | id of last created payee |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePaymentService_getAccounts"></a>*#getAccounts()*

Update the view with a list of accounts loaded from the data source

##### Returns

Promise of [void](#void) - **

### <a name="ManagePaymentService_getCurrencyCode"></a>*#getCurrencyCode()*

REturn the currency code from widget preferences

##### Returns

String - **

### <a name="ManagePaymentService_postPaymentsRecord"></a>*#postPaymentsRecord()*

Update the view with information about outcome of creating a batch of payments

##### Returns

Promise of [void](#void) - **

### <a name="ManagePaymentService_postRecurringPaymentsRecord"></a>*#postRecurringPaymentsRecord(payment)*

Update the view with info about outcome of creating a recurring of payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Object | The recurring payment to post |

##### Returns

Promise of [void](#void) - **

### <a name="ManagePaymentService_putPaymentRecord"></a>*#putPaymentRecord()*

Update the view with information about outcome of updating a payment

##### Returns

Promise of [void](#void) - **

---

## ManagePaymentViewModel


### <a name="ManagePaymentViewModel_beforeGetPayeesSummary"></a>*#beforeGetPayeesSummary()*

Amend the view to inform the user the list of payees is being loaded

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetPayeesSummarySuccess"></a>*#afterGetPayeesSummarySuccess(updateData)*

Amend the view to display the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| updateData | Object | data used to update viewmodel |
| updateData.payeeSummaries | Array of [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| updateData.newPayeeId | String | id of last created payee |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetPayeesSummaryError"></a>*#afterGetPayeesSummaryError(error)*

Amend the view to display the error encountered when loading the list of payees

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_beforeGetAccounts"></a>*#beforeGetAccounts(current)*

Amend the view to inform the user the list of accounts is being loaded

| Parameter | Type | Description |
| :-- | :-- | :-- |
| current | [ViewState](#ViewState) | The current state of the view model |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetAccountsSuccess"></a>*#afterGetAccountsSuccess(paymentAccounts)*

Amend the view to display the list of accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| paymentAccounts | Array of [PaymentAccount](model-bb-billpay-ng.html#PaymentAccount) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetAccountsError"></a>*#afterGetAccountsError(error)*

Amend the view to display the error encountered when loading the list of
   accounts

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_beforePostPaymentsRecord"></a>*#beforePostPaymentsRecord()*

Amend the view to inform the user the payment is currently being created

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPostPaymentsRecordSuccess"></a>*#afterPostPaymentsRecordSuccess()*

Amend the view to inform the user that the payments have successfully been
 created

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPostPaymentsRecordError"></a>*#afterPostPaymentsRecordError(error)*

Amend the view to display the error encountered when creating the payments
 including any available payments errors

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_beforePostRecurringPaymentsRecord"></a>*#beforePostRecurringPaymentsRecord()*

Amend the view to inform the user the recurring payment is currently being
  created

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPostRecurringPaymentsRecordSuccess"></a>*#afterPostRecurringPaymentsRecordSuccess(newPayment)*

Amend the view to inform the user that the recurring payment has successfully
  been created

| Parameter | Type | Description |
| :-- | :-- | :-- |
| newPayment | Object |  |
| newPayment.id | Object | The new payment id |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPostRecurringPaymentsRecordError"></a>*#afterPostRecurringPaymentsRecordError(error)*

Amend the view to display the error encountered when creating the recurring
  payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_beforeGetPayment"></a>*#beforeGetPayment()*

Amend the view to inform the user the payment is being loaded

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetPaymentSuccess"></a>*#afterGetPaymentSuccess(payment)*

Amend the view to display the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payment | Array of [Payment](model-bb-billpay-ng.html#Payment) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterGetPaymentError"></a>*#afterGetPaymentError(error)*

Amend the view to display the error encountered when loading the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_beforePutPaymentRecord"></a>*#beforePutPaymentRecord()*

Amend the view to inform the user the payment is currently being updated

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPutPaymentRecordSuccess"></a>*#afterPutPaymentRecordSuccess()*

Amend the view to inform the user that the payments have successfully been
 updated

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_afterPutPaymentRecordError"></a>*#afterPutPaymentRecordError(error)*

Amend the view to display the error encountered when updating the payment

| Parameter | Type | Description |
| :-- | :-- | :-- |
| error | [ModelError](lib-bb-model-errors.html#ModelError) |  |

##### Returns

[ViewState](#ViewState) - *The new state of the view model*

### <a name="ManagePaymentViewModel_clearBackendError"></a>*#clearBackendError(inputName)*

Amend the state to clear an input error

| Parameter | Type | Description |
| :-- | :-- | :-- |
| inputName | String | the input to clear error against |

---

### <a name="RecurringControlleraddNewPaymentObj"></a>*addNewPaymentObj(payee, paymentAccount)*

Take a payee and set/reset the newPayment object. Setting the paymentAccount if
 provided

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payee | [PayeeSummary](model-bb-billpay-ng.html#PayeeSummary) |  |
| paymentAccount | [PaymentAccount](model-bb-billpay-ng.html#PaymentAccount) |  |

##### Returns

Object - *transformed payee*

## Type Definitions


### <a name="PayeeSummary"></a>*PayeeSummary*


*Extends*: [PayeeSummary](data-bb-billpay-http-ng.html#PayeeSummary)

**Type:** *Object*


### <a name="PaymentAccount"></a>*PaymentAccount*


*Extends*: [PaymentAccount](data-bb-billpay-http-ng.html#PaymentAccount)

**Type:** *Object*


---

## Templates

* *template.ng.html*

---
