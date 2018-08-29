# ui-bb-chartjs-chart-line-ng


Version: **2.5.1**


## Imports

* vendor-bb-angular
* vendor-bb-chartjs

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbChartjsChartLine from 'ui-bb-chartjs-chart-line-ng';

export const dependencyKeys = [
  uiBbChartjsChartLine,
];

// file: templates/template.ng.html
<ui-bb-chartjs-chart-line-ng class="col-xs-12"
  data-series="$ctrl.series"
  data-title="$ctrl.title"
  data-legend="ext.helpers.customizeLegend"
  data-tooltip="ext.helpers.customizeTooltip"
  data-plugins="ext.helpers.chartPlugins"
  data-options="ext.helpers.chartOptions"
  data-x-formatter="ext.helpers.formatX"
  data-y-formatter="ext.helpers.formatY"
/>
```

## Table of Contents
- **Exports**<br/>    <a href="#default">default</a><br/>
- **ui-bb-chartjs-chart-line-ng**<br/>    <a href="#ui-bb-chartjs-chart-line-nguiBbChartjsChartLineController">uiBbChartjsChartLineController()</a><br/>    <a href="#ui-bb-chartjs-chart-line-ng$onInit">$onInit()</a><br/>    <a href="#ui-bb-chartjs-chart-line-ng$onChanges">$onChanges()</a><br/>
- **Type Definitions**<br/>    <a href="#ChartjsLineSeries">ChartjsLineSeries</a><br/>    <a href="#ChartjsLineDataset">ChartjsLineDataset</a><br/>    <a href="#ChartjsLegend">ChartjsLegend</a><br/>    <a href="#ChartjsPlugin">ChartjsPlugin</a><br/>    <a href="#ChartjsSettings">ChartjsSettings</a><br/>

## Exports

### <a name="default"></a>*default*

The angular module name

**Type:** *String*


---

## uiBbChartjsChartLineComponent

Chart.js line chart component object

| Property | Type | Description |
| :-- | :-- | :-- |
| title | String | Title of the chart |
| series | [ChartjsLineSeries](#ChartjsLineSeries) | Object used to draw Chartjs line chart |
| tooltip | Function | Method for drawing custom tooltip. If this property is not used, default tooltip will be rendered. Otherwise, this method will be provided with: &lt;div&gt;tooltip: Chart.js tooltip object&lt;/div&gt; &lt;div&gt;element: tooltip DOM element&lt;/div&gt; &lt;div&gt;data: series used to draw chart&lt;/div&gt; &lt;div&gt;chart: Chart.js chart object&lt;/div&gt; Custom method needs at least to fill in internal HTML of custom tooltip by injecting the content into element provided &lt;div&gt;Example:&lt;/div&gt; customTooltip: (tooltip, element, data, chart) =&gt; Object.assign(element, { innerHTML: '&amp;lt;div&amp;gt;Custom content&amp;lt;/div&amp;gt;' }), |
| legend | [ChartjsLegend](#ChartjsLegend) | Object used to define chart's legend behavior and look |
| plugins | Array of [ChartjsPlugin](#ChartjsPlugin) | Array of plugins that will be registered upon chart rendering |
| xFormatter | Function | Callback that receives all x axes ticks and series data. It should return array of formatted ticks |
| yFormatter | Function | Callback that receives all y axes ticks and series data. It should return array of formatted ticks |
| options | [ChartjsSettings](#ChartjsSettings) | Object that overrides any property of Chart.js default settings object |

---

### <a name="ui-bb-chartjs-chart-line-nguiBbChartjsChartLineController"></a>*uiBbChartjsChartLineController()*

Chart.js line chart controller

---

### <a name="ui-bb-chartjs-chart-line-ng$onInit"></a>*$onInit()*

AngularJS Lifecycle hook used to draw chart


##### Returns

[void](#void) - **

---

### <a name="ui-bb-chartjs-chart-line-ng$onChanges"></a>*$onChanges()*

AngularJS Lifecycle hook used to update chart


##### Returns

[void](#void) - **

## Type Definitions


### <a name="ChartjsLineSeries"></a>*ChartjsLineSeries*

Series object used to draw Chartjs line chart. Compatible with BBSeries generated
by model modules.

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| labels | Array of String | Array of x axis labels |
| datasets | Array of [ChartjsLineDataset](#ChartjsLineDataset) | Array of datasets |

### <a name="ChartjsLineDataset"></a>*ChartjsLineDataset*

Dataset object for line chart as defined by Chart.js library.
Compatible with BBDataset object used in BBSeries.
It is required for it to contain data as array of values.
More info about additional (optional) properties can be found at
[http://www.chartjs.org/docs/latest/charts/line.html#dataset-properties](http://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)

**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| data | Array of Number | Array of data points to be drawn for each label |

### <a name="ChartjsLegend"></a>*ChartjsLegend*

Legend object as defined in Chart.js library.
More info
[http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options](http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options)

**Type:** *Object*


### <a name="ChartjsPlugin"></a>*ChartjsPlugin*

Plugin object as defined in Chart.js library. It should define at least one hook from
[http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api](http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api)

**Type:** *Object*


### <a name="ChartjsSettings"></a>*ChartjsSettings*

Settings object with options available for line chart.
More info [http://www.chartjs.org/docs/latest/charts/line.html](http://www.chartjs.org/docs/latest/charts/line.html)

**Type:** *Object*


---
