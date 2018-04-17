import { standardUnitDependences } from './units';

// Converts value to standard unit - centimeter.
function toStandard(value, unit) {
  if (standardUnitDependences[unit] !== undefined) {
    return value * standardUnitDependences[unit]
  }
  return undefined
}

// Converts standard unit value to unit passed by user.
function toByUnit(value, standardUnit) {
  if (standardUnitDependences[standardUnit] !== undefined) {
    return value * (1 / standardUnitDependences[standardUnit])
  }
  return undefined
}

export { toByUnit, toStandard };
