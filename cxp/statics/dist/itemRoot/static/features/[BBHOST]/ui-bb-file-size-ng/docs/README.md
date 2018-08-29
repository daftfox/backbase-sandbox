# undefined


Version: **1.5.0**


## Table of Contents    <a href="#fileSize">fileSize(size)</a><br/>

---

### <a name="fileSize"></a>*fileSize(size)*

The filter will take a number representing bytes and will return a human
readable formatted string representing the file size.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| size | Number | The number of bytes. |

##### Returns

String - *The formatted file size.*

## Example

```javascript
<span id="file-size">
  {{ $ctrl.files[0].size | fileSize }}
</span>
```
