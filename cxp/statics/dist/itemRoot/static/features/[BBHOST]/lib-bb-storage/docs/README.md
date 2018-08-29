# lib-bb-storage


Version: **1.0.23**

Provides a cross-platform interface for temporary storage or data between widget/page instances.
It provides a key-value store that is persisted between Page loads in the browser and between
WebViews on mobile.

## Example

```javascript
import bbStorageFactory from 'lib-bb-storage';
const bbStorage = bbStorageFactory(Promise);

const counterStorage = 'counter';

let counter;

const unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
  // called whenever the value in the storage is set
  counter = newValue;
});

const increment = () =>
  bbStorage.getItem(counterStorage)
    .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
```

## Table of Contents
- **StorageService**<br/>    <a href="#StorageService_setItem">#setItem(key, value)</a><br/>    <a href="#StorageService_getItem">#getItem(key)</a><br/>    <a href="#StorageService_removeItem">#removeItem(key)</a><br/>    <a href="#StorageService_subscribe">#subscribe(key, callback)</a><br/>
- **Type Definitions**<br/>    <a href="#Unsubscribe">Unsubscribe()</a><br/>    <a href="#Subscription">Subscription(newValue)</a><br/>

---

## StorageService

A service that provides a consistent interface allowing setting and getting persistent data
via some underlying (platform specific) storage mechanism


### <a name="StorageService_setItem"></a>*#setItem(key, value)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The key to set |
| value | [any](#any) | The value to store - must be serializable to JSON |

##### Returns

Promise of [void](#void) - **

### <a name="StorageService_getItem"></a>*#getItem(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The key to fetch |

##### Returns

Promise of [any](#any) - *The value stored in the key, if any (null if key holds invalid JSON)*

### <a name="StorageService_removeItem"></a>*#removeItem(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The key to remove |

##### Returns

Promise of [void](#void) - **

### <a name="StorageService_subscribe"></a>*#subscribe(key, callback)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | String | The key to subscribe to |
| callback | [Subscription](#Subscription) | The callback to be called with the new value of the key |

##### Returns

[Unsubscribe](#Unsubscribe) - **

## Type Definitions



### <a name="Unsubscribe"></a>*Unsubscribe()*

Unsubscribe from notifications

##### Returns

[void](#void) - **


### <a name="Subscription"></a>*Subscription(newValue)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| newValue | [any](#any) | The new value attached to the key |

##### Returns

[void](#void) - **

---
