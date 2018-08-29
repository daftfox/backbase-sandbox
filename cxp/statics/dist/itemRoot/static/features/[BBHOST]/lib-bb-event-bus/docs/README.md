# lib-bb-event-bus


Version: **1.1.77**

Event bus module, wrapper around CXP's gadgets.pubsub.

## Table of Contents
- **EventBus**<br/>    <a href="#EventBus_publish">#publish(topic, payload)</a><br/>    <a href="#EventBus_subscribe">#subscribe(topic, callback)</a><br/>
- **Type Definitions**<br/>    <a href="#Callback">Callback(payload)</a><br/>    <a href="#Subscription">Subscription</a><br/>

---

## EventBus


### <a name="EventBus_publish"></a>*#publish(topic, payload)*

Publish an event to the bus. Any subscribers should be notified

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | String | The name of the event, this value is needed to subscribe |
| payload | [any](#any) | The data payload to provide additional context to the event |

## Example

```javascript
bbEventBus
 .publish('test', {})
```

### <a name="EventBus_subscribe"></a>*#subscribe(topic, callback)*

Subscribe to be notified when an event on the same topic event is `publish`ed.
The callback will trigger an angular digest.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | String |  |
| callback | [Callback](#Callback) | To be called when an event is published on the same topic |

##### Returns

[Subscription](#Subscription) - **

## Example

```javascript
bbEventBus
 .subscribe('test', function(){
   console.log('event')
 })
```

## Type Definitions



### <a name="Callback"></a>*Callback(payload)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| payload | [any](#any) | The data payload that was `publish`ed with the event |

##### Returns

[void](#void) - **

### <a name="Subscription"></a>*Subscription*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| unsubscribe | Function | The function to unsubscribe the subscription |

---
