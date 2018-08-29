# undefined


Version: **2.4.0**


## Table of Contents    <a href="#checkboxTemplate">checkboxTemplate</a><br/>    <a href="#radioTemplate">radioTemplate</a><br/>    <a href="#dropdownSelectTemplate">dropdownSelectTemplate</a><br/>    <a href="#getTemplate">getTemplate(multi, length)</a><br/>

---
### <a name="checkboxTemplate"></a>*checkboxTemplate*

Template used when the widget preference sets to multiple category selection

**Type:** *String*


---
### <a name="radioTemplate"></a>*radioTemplate*

Template used when the widget pref. is not setted to use multiple selections
and the amount of options are less or equal than 3

**Type:** *String*


---
### <a name="dropdownSelectTemplate"></a>*dropdownSelectTemplate*

Template used when the widget pref. is not setted to use multiple selections
and the amount of options are more than 3

**Type:** *String*


---

### <a name="getTemplate"></a>*getTemplate(multi, length)*

Function that defines what template is going to be used

| Parameter | Type | Description |
| :-- | :-- | :-- |
| multi | String | widget preference that defines if it will be multiple or not |
| length | Number | length of the options |

##### Returns

String - *template to be used*

---

## uiBbAccountStatementCategoryFilterNg


| Property | Type | Description |
| :-- | :-- | :-- |
| ng-model | Object | Category model |
| ng-change | Function | Callback function triggered when account is selected |
| options | Array | List of options to show |
