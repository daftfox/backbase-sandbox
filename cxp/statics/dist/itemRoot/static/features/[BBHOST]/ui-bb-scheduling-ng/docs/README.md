# ui-bb-scheduling-ng


Version: **1.34.9**

Schedule selector UI component

## Imports

* ui-bb-calendar-popup-ng
* vendor-bb-angular

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbScheduleKey from 'ui-bb-scheduling-ng';

export const dependencyKeys = [
  uiBbScheduleKey,
];

// file: templates/template.ng.html
<ui-bb-scheduling-ng
  data-config="{
    labels: {
      title: 'Schedule',
      execution: 'Execution',
      starting: 'Starting',
      today: 'Today',
      on: 'On',
      until: 'until',
      repeat: 'times',
      ending: 'Ending',
      never: 'Never',
      after: 'After',
      occurrences: 'occurrences',
      frequency: 'Frequency',
      once: 'Once',
      daily: 'Daily',
      weekly: 'Weekly',
      monthly: 'Monthly',
      quarterly: 'Quarterly',
      annually: 'Annually'
    },
    recurring: true
  }"
  data-payment="$ctrl.payment"
  data-schedule="$ctrl.schedule"
  data-indicate-schedule="false"
></ui-bb-scheduling-ng>
```

---

## component


| Property | Type | Description |
| :-- | :-- | :-- |
| config | Object | Scheduling component messages keys |
| payment | Object | Payment data object |
| schedule | Object | Payment schedule data object |
| indicateSchedule | Boolean (optional) | True if should display selected schedule, but hide controls (false by default) |

---

---
