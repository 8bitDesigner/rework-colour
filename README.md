# rework-colour

Allows you to write CSS using the Queen's English, like I've wanted to do
for the last 13 years.

## Usage

``` javascript
const rework = require('rework')
const reworkColour = require('rework-colour')

rework('body { colour: blue; }').use(reworkColour).toString()
```
