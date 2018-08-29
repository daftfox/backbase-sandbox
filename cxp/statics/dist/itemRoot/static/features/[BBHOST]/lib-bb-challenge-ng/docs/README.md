# lib-bb-challenge


Version: **2.1.13**

Library to provide a support for the MFA to a widget.
When the library is included in a data-module  it intercepts HTTP 401
unauthorized/challenge responses from the server and calls the specified widget.


Please note, the library has following limitations:
- It can only work with one request at a time.
- It can only work if the intent is handled on the same page.
On web, that could be a modal. On mobile if it navigates away,
the original page would need to be "retained".

The library relies on a challenge definition in a RAML specification. E.g. if it looks like this:

```
 challengable:
   headers:
     X-MFA:
       description: Challenge payload response
       required: false
       example: sms challenge="123456789"
   responses:
     401:
       description: Unauthorized
       headers:
         WWW-Authenticate:
           description: Comma separated challenges
           required: false
           example: sms challenge="", pki challenge="Z8nlwZe0daUNWCWIbfJe3iIgauh"
       body:
         application/json:
           type: Unauthorized-Error
```

The flow will be:
* Initial request sent by a widget (e.g. new payment, which should have step up authentication);
* Service responds with `401` status and `WWW-Authenticate` header,
it will require a specific challenge type, e.g. `"sms challenge"`;
* Library triggers intent and passes the information to the mediator-widget.
I.e. intent payload will be `{'sms challenge': ''}`
* Then the mediator-widget will send the intent response: `{'sms challenge':'123456789'}`
* This will be result in a second request to the backend,
which will contain a header: `X-MFA: sms challenge="123456789"`

## Imports

* lib-bb-intent-ng
* vendor-bb-angular

---

## Example

```javascript
The best place to inject library is the data module of capability that requires MFA
// index.js

// Import lib-bb-challenge-ng
import bbChallengeModuleKey, {
  bbChallengeKey,
} from 'lib-bb-challenge-ng';

// Inject it in your data module
export default angular
  .module(moduleKey, [
    cXPAuthenticationDataModuleKey,
    ...
    bbChallengeModuleKey,
  ])
  .provider(cXPAuthenticationDataKey, [() => {
    ...
    return {
      $get: [
        bbChallengeKey,
        // Into
        cXPAuthenticationData,
      ],
    }
  }])
  .config(['$httpProvider', ($httpProvider) => {
    // Configure $http service to use challenge interceptor
    $httpProvider.interceptors.push(bbChallengeKey);
  }])
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>    <a href="#bbChallengeKey">bbChallengeKey</a><br/>
- **BbChallengeProvider**<br/>    <a href="#BbChallengeProvider_setChallengeToIntent">#setChallengeToIntent(routes)</a><br/>    <a href="#BbChallengeProvider_$get">#$get()</a><br/>
- **lib-bb-challenge**<br/>    <a href="#lib-bb-challengeinterceptor">interceptor</a><br/>
- **Type Definitions**<br/>    <a href="#Interceptor">Interceptor</a><br/>    <a href="#ResponseError">ResponseError(_response)</a><br/>

## Exports

### <a name="default"></a>*default*

Angular module name

**Type:** *String*

### <a name="bbChallengeKey"></a>*bbChallengeKey*

The dependency injection key for the BbChallenge Service

**Type:** *String*


---

## challengeToIntentConf

Challenge type to intent key map
It can be customized in config-bb-providers

## Example

```javascript
export default [
  ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
      challenges.setChallengeToIntent({sms: 'some.intent'});
  }],
];
```

---

## BbChallengeProvider

A provider that allows configuration
of the challenge type/intent key map.

| Injector Key |
| :-- |
| *lib-bb-challenge-ng:challengeProvider* |


### <a name="BbChallengeProvider_setChallengeToIntent"></a>*#setChallengeToIntent(routes)*

The setter for setChallengeToIntent mapping
which can be customized in config-bb-providers

| Parameter | Type | Description |
| :-- | :-- | :-- |
| routes | Object of String | A map of challenge types to intent keys |

### <a name="BbChallengeProvider_$get"></a>*#$get()*

$get method of the provider for instantiation

##### Returns

[Interceptor](#Interceptor) - *Challenge service*

## Example

```javascript
// General usage:
angular.module(...)
  .config([
    `${bbChallengeKey}Provider`,
    (challengeProvider) => {
      challengeProvider.setChallengeToIntent(...);
    }
  ]);

export default [
  ['lib-bb-challenge-ng:challengeProvider', (challenges) => {
      challenges.setChallengeToIntent({sms: 'some.intent'});
  }],
];
```

---
### <a name="lib-bb-challengeinterceptor"></a>*interceptor*

The object to handle interception of challengable responses.
for more details

**Type:** *[Interceptor](#Interceptor)*


## Type Definitions


### <a name="Interceptor"></a>*Interceptor*

The object to handle interception. Please
see [angularjs interceptiors docs](https://docs.angularjs.org/api/ng/service/$http#interceptors)
for more details on other types of interceptors.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| responseError | [ResponseError](#ResponseError) |  |


### <a name="ResponseError"></a>*ResponseError(_response)*

The interceptor gets called when a previous
interceptor threw an error or resolved with a rejection.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| _response | Object | interceptors get called with http response object |

##### Returns

Promise - *Returns the response object as a promise*

---
