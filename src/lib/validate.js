import { supportedUnits } from './units';

// Function checks if value and unit are valid.
function validate(value, unit) {
  if (typeof value === 'undefined' || typeof unit === 'undefined') {
    throw Error('You have to pass value and unit type!');
  } else if (typeof value !== 'number') {
    throw Error('Value must be a number!');
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error('Unsupported unit type! Supported types:\n' + supportedUnits + '.');
  }
};


// Simpler version of validate() function - checks only unit correctness.
function validateUnit(unit) {
  if (typeof unit === 'undefined') {
    throw Error('You have to pass unit type!');
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error('Unsupported unit type! Supported types:\n' + supportedUnits + '.');
  }
};


// Simpler version of validate() function - checks only value correctness.
function validateValue(value) {
  if (typeof value === 'undefined') {
    throw Error('You have to pass value!');
  } else if (typeof value !== 'number') {
    throw Error('Value must be a number!');
  }
};

export { validate, validateUnit, validateValue };
