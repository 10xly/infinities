/* eslint-disable no-var */

var min = require('math-intrinsics/min')
var max = require('math-intrinsics/max')
var noargs = require('noargs-wrapper')

module.exports = {
  negativeInfinity: noargs(max),
  positiveInfinity: noargs(min),
}