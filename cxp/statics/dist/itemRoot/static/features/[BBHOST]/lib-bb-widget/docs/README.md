# lib-bb-widget


Version: **1.0.73**

Provides access to the details of the instance of the widget in the
portal, such as its ID and preferences.

## Example

```javascript
// file: index.js
import bbWidget from 'lib-bb-widget';

const widget = bbWidget(widgetInstance);
widget.getPreference('foo');
```

## Table of Contents
- **Widget**<br/>    <a href="#Widget_getPreference">#getPreference(name)</a><br/>    <a href="#Widget_getStringPreference">#getStringPreference(name)</a><br/>    <a href="#Widget_getLongPreference">#getLongPreference(name)</a><br/>    <a href="#Widget_getDoublePreference">#getDoublePreference(name)</a><br/>    <a href="#Widget_getBooleanPreference">#getBooleanPreference(name)</a><br/>    <a href="#Widget_getStringArrayPreference">#getStringArrayPreference(name)</a><br/>    <a href="#Widget_getNullPreference">#getNullPreference(name)</a><br/>    <a href="#Widget_getRawPreference">#getRawPreference(name)</a><br/>    <a href="#Widget_setPreference">#setPreference(name, value)</a><br/>    <a href="#Widget_savePreference">#savePreference(name, value)</a><br/>    <a href="#Widget_getId">#getId()</a><br/>    <a href="#Widget_onUpdate">#onUpdate(callback)</a><br/>    <a href="#Widget_render">#render()</a><br/>
- **Type Definitions**<br/>    <a href="#UpdateCallback">UpdateCallback(name, value)</a><br/>    <a href="#UpdateUnsubscribe">UpdateUnsubscribe()</a><br/>

---

## Widget

A service that provides access to the instance of the widget in the portal.


### <a name="Widget_getPreference"></a>*#getPreference(name)*


#### Deprecated: 0.2.3
Gets a preference from widget configuration (model.xml) and attempts to return it as a string

*DEPRECATED*
`getPreference` is deprecated in favor of the type specific `get<Type>Preference` methods.
This makes the use of the preferences in the context of a widget more reliable, as they are
parsed/coerced into the expected type in a reliable and consistent way, instead of ad-hoc
whenever a preference is used.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

String (optional) - *The parsed value of the preference*

### <a name="Widget_getStringPreference"></a>*#getStringPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a string


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

String (optional) - *The parsed value of the preference*

### <a name="Widget_getLongPreference"></a>*#getLongPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a integer
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Number (optional) - *The parsed value of the preference*

### <a name="Widget_getDoublePreference"></a>*#getDoublePreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a decimal
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Number (optional) - *The parsed value of the preference*

### <a name="Widget_getBooleanPreference"></a>*#getBooleanPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a boolean.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Boolean (optional) - *The parsed value of the preference*

### <a name="Widget_getStringArrayPreference"></a>*#getStringArrayPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an array
of strings, split on commas.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Array (optional) of String - *The parsed value of the preference*

### <a name="Widget_getNullPreference"></a>*#getNullPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an null.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

Null (optional) - *The parsed value of the preference*

### <a name="Widget_getRawPreference"></a>*#getRawPreference(name)*

Gets a preference from widget as returned by portal client. This method is provided
as a "escape hatch" when none of the types methods work, but should generally be
avoided in common use due to its reliance on the underlying portal client implementation.

*N.B.* The return type is dependant on the underlying portal client implementation, and may
change across portal client versions.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |

##### Returns

[any](#any) - *The value of the preference directly from the portal client*

### <a name="Widget_setPreference"></a>*#setPreference(name, value)*


#### Deprecated: 1.1.0
Sets a given value for a given preference

*DEPRECATED*
`setPreference` is deprecated in favor of `savePreference` which also persists the value to
the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| value | String |  |

##### Returns

Object or String - *preference*

### <a name="Widget_savePreference"></a>*#savePreference(name, value)*

Sets a given value for a given preference and persists it to the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String |  |
| value | String |  |

##### Returns

Promise of [void](#void) - **

### <a name="Widget_getId"></a>*#getId()*

Returns the widget's instance ID

##### Returns

String - **

### <a name="Widget_onUpdate"></a>*#onUpdate(callback)*

Registers a callback to run whenever a widget preference is modified

| Parameter | Type | Description |
| :-- | :-- | :-- |
| callback | [UpdateCallback](#UpdateCallback) | Function to run when preference is modified |

##### Returns

[UpdateUnsubscribe](#UpdateUnsubscribe) - *Function to call to unsubscribe UpdateCallback
from listening to preference modified events*

### <a name="Widget_render"></a>*#render()*

Rerenders the widget

##### Returns

Promise of [void](#void) - **

## Type Definitions



### <a name="UpdateCallback"></a>*UpdateCallback(name, value)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | String | name of the property |
| value | String | value of the property |

##### Returns

[void](#void) - **


### <a name="UpdateUnsubscribe"></a>*UpdateUnsubscribe()*


##### Returns

[void](#void) - **

---
