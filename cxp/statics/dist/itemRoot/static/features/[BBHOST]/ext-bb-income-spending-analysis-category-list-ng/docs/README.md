# ext-bb-income-spending-analysis-category-list-ng


Version: **1.18.4**

Income/spending analysis extension for displaying top metrics

## Imports

* ui-bb-change-period-ng
* ui-bb-empty-state-ng
* ui-bb-format-amount-ng
* ui-bb-i18n-ng
* ui-bb-loading-indicator-ng
* ui-bb-substitute-error-ng
* vendor-bb-angular-ng-aria
* vendor-bb-uib-buttons

---

## Table of Contents
- **ext-bb-income-spending-analysis-category-list-ng**<br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngMS_IN_MIN">MS_IN_MIN</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngcategoryToIconClass">categoryToIconClass(transactionCategory)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngonPeriodStartChange">onPeriodStartChange(ctrl)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngonPeriodEndChange">onPeriodEndChange(ctrl)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngupdatePeriod">updatePeriod(ctrl, monthsRange)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngperiodStartLabelFormatter">periodStartLabelFormatter(date)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngperiodEndLabelFormatter">periodEndLabelFormatter(date)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-nggetSymbol">getSymbol(code)</a><br/>    <a href="#ext-bb-income-spending-analysis-category-list-ngupdateTurnoversData">updateTurnoversData()</a><br/>

---
### <a name="ext-bb-income-spending-analysis-category-list-ngMS_IN_MIN"></a>*MS_IN_MIN*

Amount of milliseconds in a minute

**Type:** *Number*


---

### <a name="ext-bb-income-spending-analysis-category-list-ngcategoryToIconClass"></a>*categoryToIconClass(transactionCategory)*

Converts transaction category name into category CSS icon class sufix

| Parameter | Type | Description |
| :-- | :-- | :-- |
| transactionCategory | String | Transaction category |

##### Returns

String - **

---

### <a name="ext-bb-income-spending-analysis-category-list-ngonPeriodStartChange"></a>*onPeriodStartChange(ctrl)*

Callback on period start date value change. This function ensures
that controller property is also updated

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |

---

### <a name="ext-bb-income-spending-analysis-category-list-ngonPeriodEndChange"></a>*onPeriodEndChange(ctrl)*

Callback on period value change. Calls
controller's onPeriodEndChanged listener

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |

---

### <a name="ext-bb-income-spending-analysis-category-list-ngupdatePeriod"></a>*updatePeriod(ctrl, monthsRange)*

Callback on updating period

| Parameter | Type | Description |
| :-- | :-- | :-- |
| ctrl | [IncomeSpendingAnalysisCategoryController](#IncomeSpendingAnalysisCategoryController) |  |
| monthsRange | [monthsRange](#monthsRange) |  |

---

### <a name="ext-bb-income-spending-analysis-category-list-ngperiodStartLabelFormatter"></a>*periodStartLabelFormatter(date)*

Start period label formatter helper. Returns formatted date.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date |  |

##### Returns

String - *Formatted label*

---

### <a name="ext-bb-income-spending-analysis-category-list-ngperiodEndLabelFormatter"></a>*periodEndLabelFormatter(date)*

End period label formatter helper. In case period is larger than current date
(end date of current month) it returns translation for analysis.label.period.now,
otherwise it returns formatted date

| Parameter | Type | Description |
| :-- | :-- | :-- |
| date | Date |  |

##### Returns

String - *Formatted label*

---

### <a name="ext-bb-income-spending-analysis-category-list-nggetSymbol"></a>*getSymbol(code)*

Converts currecy code into symbol or returns back code if mapping was not successful

| Parameter | Type | Description |
| :-- | :-- | :-- |
| code | String | Currency code |

##### Returns

String - *Symbol or currecy code if symbol for it cannot be found*

---

### <a name="ext-bb-income-spending-analysis-category-list-ngupdateTurnoversData"></a>*updateTurnoversData()*

If set to true, turnovers will be automatically updated on init and period change detection.
Otherwise, controller's updateTurnovers method needs to be called manually

##### Returns

Boolean - **
