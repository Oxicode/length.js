var standardUnitDependences = {
  pm: 10 ** -12,
  nm: 10 ** -7,
  um: 10 ** -4,
  mm: 0.1,
  cm: 1,
  dm: 10,
  m: 10 ** 2,
  km: 10 ** 5,
  in: 2.54,
  ft: 30.48,
  yd: 91.44,
  mi: 160934.4,
}

// Currently supported units.
var supportedUnits = Object.keys(standardUnitDependences)

export { standardUnitDependences, supportedUnits };
