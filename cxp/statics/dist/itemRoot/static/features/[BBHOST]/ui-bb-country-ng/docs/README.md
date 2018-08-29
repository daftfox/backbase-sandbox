# ui-bb-country-ng


Version: **1.6.1**

Filter to translate two-chars country code to human readable and translated string

## Imports

* ui-bb-i18n-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCountryNgKey from 'ui-bb-country-ng';

export const dependencyKeys = [
  uiBbCountryNgKey,
];

// file: assets/messages.json
{
  "en-US": {
    "country.cn": "China",
    "country.nl": "Netherlands"
  },
  "nl-NL": {
    "country.cn": "China",
    "country.nl": "Nederland"
  }
}

// file: templates/template.ng.html
<p>{{ 'CN' | country }}</p>
<p>{{ 'uk' | country }}</p>
<p>{{ item.countryCode | country }}</p>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-country-ng**<br/>    <a href="#ui-bb-country-ngcountryFilter">countryFilter(key)</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

### <a name="ui-bb-country-ngcountryFilter"></a>*countryFilter(key)*

Translates country ISO code (two chars) into human readable, translated string.
Since country name will be internationalised, translations for the countries
should be present in messages.json file in a format "country.[COUNTRY_CODE_LOWER_CASED]".
See example for details.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The country code |

##### Returns

String - *The translated country name.
                  If no translation is available, the empty string.*

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbCountryNgKey from 'ui-bb-country-ng';

export const dependencyKeys = [
  uiBbCountryNgKey,
];

// file: assets/messages.json
{
  "en-US": {
    "country.cn": "China",
    "country.nl": "Netherlands"
  },
  "nl-NL": {
    "country.cn": "China",
    "country.nl": "Nederland"
  }
}

// file: templates/template.ng.html
<p>{{ 'CN' | country }}</p>
<p>{{ 'uk' | country }}</p>
<p>{{ item.countryCode | country }}</p>
```
