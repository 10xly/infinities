var min = require('math-intrinsics/min')
var max = require('math-intrinsics/max')
var noargs = require('noargs-wrapper')

module.exports = {
  positiveInfinity: noargs(min),
  negativeInfinity: noargs(max)
}