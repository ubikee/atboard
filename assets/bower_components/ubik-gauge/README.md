[![Build Status](https://travis-ci.org/ubikee/ubik-gauge.svg?branch=master)](https://travis-ci.org/ubikee/ubik-gauge)

## &lt;ubik-gauge&gt;

Circular gauge indicator

`<ubik-gauge>` display a simple circular gauge.

### Install

#### With bower
Install the component to your bower.json

    bower install ubik-gauge --save

Import the link into your main page

```html
<link rel="import" href="bower_components/ubik-gauge.html">
```

### Usage

```html
<ubik-gauge value="30" unit="%" treshold="60" colors='["#0F0","#FCC","#EEE", "#F00"]'></ubik-gauge>
```
#### Attributes
<ul>
    <li>value: this is the value the gauge shows from 0 to 100</li>
    <li>treshold: treshold that should fire an alarm when the value exceedes it.</li>
    <li>unit: units name to be displayed next to the value</li>
    <li>semicircle: toggles gauge shape from circle to semicircle</li>
    <li>colors: RGB colors array: [ [value], [treshold], [base], [alarm] ]</li>
</ul>

License
-------
MIT: http://mit-license.org/

Copyright 2016 Ernesto Roldan aka [ubikee](http://ubikee.com)
