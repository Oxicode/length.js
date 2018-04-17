import { supportedUnits } from './units';

/**
 * Function used during new Length object creation.
 * It checks if parameters passed by user are valid.
 */
function validate(value, unit) {
  if (!value || !unit) {
    throw Error('You have to pass value and unit type!')
  } else if (typeof value !== 'number') {
    throw Error('Value must be a number!')
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error('Unsupported unit type! Supported units list:\n' + supportedUnits)
  }
}

// Simpler version of validate() function - checks only unit type correctness.
function validateUnit(unit) {
  if (!unit) {
    throw Error('You have to pass unit type!')
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error('Unsupported unit type! Supported units list:\n' + supportedUnits)
  }
}

export { validate, validateUnit };
