const rework = require('rework')
const assert = require('assert')
const reworkColour = require('../index.js')
const fs = require('fs')

function read (filename) {
  return fs.readFileSync(`./test/fixtures/${filename}`, 'utf8').trim()
}

function parse (input) {
  return rework(input).use(reworkColour).toString().trim()
}

describe('rework-color', function () {
  it('should rewrite `colour` properties to `color', function () {
    assert.equal(parse('body { colour: blue }'), read('color.css'))
  })

  it('should leave `color` properties alone', function () {
    assert.equal(parse('body { color: blue }'), read('color.css'))
  })
})
