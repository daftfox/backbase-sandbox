# undefined


Version: **1.5.9**


---

## uiBbButtonSpinnerNg

Adds spinner to position defined in configuration and disables button with
respective message (applicable to button-like elements)

| Property | Type | Description |
| :-- | :-- | :-- |
| spinnerLoading | Boolean | True value to trigger spinner state and False -- to stop |
| spinnerPosition | String (optional) | If 'left' add spinner to the left, other options are 'right' and 'inside' |
| spinnerPlaceholder | String (optional) | Placeholder to be placed instead of existing one |
| spinnerClasses | String (optional) | Css classes to be added to spinner element |

## Example

```javascript
<form name="form">
  <button type="submit"
          ui-bb-add-spinner-ng
          spinner-model="isSubmitting"
          spinner-position="left"
          spinner-placeholder="Submitting">Submit</button>
</form>
```
