# ui-bb-bank-validations-ng


Version: **1.46.9**

Set of bank fields custom validations

## Imports

* vendor-bb-angular

---

---

## uiBbBankValidateRtnAbaNg

Custom form validation for routing transit number (ABA).
The following condition must hold: 3(d1+d4+d7) + 7(d2+d5+d8) + (d3+d6+d9) mod10 = 0
Consider 111000025 (which is a valid routing number of Bank of America in Virginia).
Applying the formula, we get: 3(1+0+0) + 7(1+0+2) + (1+0+5) mod 10=0

## Example

```javascript
<form name="form">
  <label for="rtn">Routing Transit Number (ABA)</label>
  <input type="text" id="rtn" name="rtn" data-ng-model="rtn" ui-bb-bank-validate-rtn-aba-ng />
  <span data-ng-if="form.rtn.$error.customRtn">
    Please input a valid Routing Transit Number
  </span>
</form>
```
