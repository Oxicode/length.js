// This object stores information about dependences between units and centimeter.
var standardUnitDependences = {
  pm: Math.pow(10, -12),
  nm: Math.pow(10, -9),
  um: Math.pow(10, -6),
  mm: Math.pow(10, -3),
  cm: Math.pow(10, -2),
  dm: Math.pow(10, -1),
  m: 1,
  km: Math.pow(10, 3),
  in: 39.370078740157,
  ft: 3.2808398950131,
  yd: 1.0936132983377,
  mi: 0.00062137119223733,
  au: 149597870691,
  ly: 9460730472580800,
};

// Array of currently supported units.
var supportedUnits = Object.keys(standardUnitDependences);

export {
  standardUnitDependences,
  supportedUnits
};