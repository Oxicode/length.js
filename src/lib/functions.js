import { length } from './length';
import { validateUnit } from './validate';
import { toStandard, toByUnit } from './standard';

function to(unit) {
  // Check unit correctness.
  validateUnit(unit);

  // Get value in standard unit.
  var standardUnitValue = toStandard(this.value, this.unit);

  // Get value converted to unit passed by user.
  var convertedValue = toByUnit(standardUnitValue, unit);

  return length(convertedValue, unit);
}

function add(value) {
  if (typeof value !== 'number') {
    throw Error('add() argument must be a number!')
  }

  var newValue = this.value + value;

  return length(newValue, this.unit);
}

function getValue() {
  return this.value;
}

function getUnit() {
  return this.unit;
}

function getString() {
  return this.value + this.unit;
}

function toPrecision(digits) {
  var value = digits ? this.value.toFixed(digits) : this.value;
  return length(parseFloat(value), this.unit);
}

export { to, add, getString, getUnit, getValue, toPrecision  }
