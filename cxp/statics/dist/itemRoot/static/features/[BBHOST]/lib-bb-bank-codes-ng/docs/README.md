# lib-bb-bank-codes-ng


Version: **1.108.9**

IBAN Bank code input assistance. Default list of supported banks can be configured.

## Imports

* vendor-bb-angular

---

## Example

```javascript
import bbBankCodesModuleKey, { bbBankCodesKey } from 'lib-bb-bank-codes-ng';

General usage:
angular
  .module('ExampleModule', [
    bbBankCodesModuleKey,
  ])
  .config([`${bbBankCodesKey}Provider`,
    (bankCodesProvider) => {
      bankCodesProvider.addBanksToSpec({ UA: [{
        code: 'PBAN',
        name: 'PRIVAT BANK',
      }] });
    }
  ])
  .controller('DemoController', [bbBankCodesKey,
    (lookupBankCodes) => {
      lookupBankCodes(iban);
    }
  ]);
```

## Table of Contents
- **Exports**<br/>    <a href="#bbBankCodesKey">bbBankCodesKey</a><br/>
- **Type Definitions**<br/>    <a href="#BankCode">BankCode</a><br/>

## Exports

### <a name="bbBankCodesKey"></a>*bbBankCodesKey*

Injector name of [BankCodesLibrary](#BankCodesLibrary) instance

**Type:** *String*


---

## Type Definitions


### <a name="BankCode"></a>*BankCode*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| code | String | Bank code |
| name | String | Bank name |
| default | Boolean | Defines if code should be displayed by default |

---
