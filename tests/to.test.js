const length = require('../length');

const standatdUnitDependences = {
  dm: 10,
  m: 100,
  km: 100000,
  in: 2.54,
  ft: 30.48,
  yd: 91.44,
  mi: 160934.4,
}

describe('Should correctly converts units', () => {
  it('Should throw error if arguments not passed', () => {
    expect(function () { length(1, 'cm').to() }).toThrowError();
  })

  it('Should throw error if passed unit type is not supported', () => {
    expect(function () { length(1, 'cm').to('unit') }).toThrowError();
  })

  it('Should correctly convert to centimeters', () => {
    expect(length(1, 'cm').to('cm')).toEqual({ value: 1, unit: 'cm' });
  })

  it('Should correctly convert to decimeters', () => {
    const value = 1;
    expect(length(value, 'cm').to('dm')).toEqual({ value: value * (1 / standatdUnitDependences.dm), unit: 'dm' });
  })

  it('Should correctly convert to meters', () => {
    const value = 1;
    expect(length(value, 'cm').to('m')).toEqual({ value: value * (1 / standatdUnitDependences.m), unit: 'm' });
  })

  it('Should correctly convert to kilometers', () => {
    const value = 1;
    expect(length(value, 'cm').to('km')).toEqual({ value: value * (1 / standatdUnitDependences.km), unit: 'km' });
  })

  it('Should correctly convert to inches', () => {
    const value = 1;
    expect(length(value, 'cm').to('in')).toEqual({ value: value * (1 / standatdUnitDependences.in), unit: 'in' });
  })

  it('Should correctly convert to foots', () => {
    const value = 1;
    expect(length(value, 'cm').to('ft')).toEqual({ value: value * (1 / standatdUnitDependences.ft), unit: 'ft' });
  })

  it('Should correctly convert to yards', () => {
    const value = 1;
    expect(length(value, 'cm').to('yd')).toEqual({ value: value * (1 / standatdUnitDependences.yd), unit: 'yd' });
  })

  it('Should correctly convert to miles', () => {
    const value = 1;
    expect(length(value, 'cm').to('mi')).toEqual({ value: value * (1 / standatdUnitDependences.mi), unit: 'mi' });
  })

  it('Should correctly convert meters to kilometers', () => {
    const value = 1000
    expect(length(value, 'm').to('km')).toEqual({ value: 1, unit: 'km' })
  })

  it('Should correctly convert nanometers to centimeters', () => {
    const value = 1;
    expect(length(value, 'nm').to('cm')).toEqual({ value: 10 ** -7, unit: 'cm'})
  })

  it('Should correctly convert  micrometers to centimeters', () => {
    const value = 1
    expect(length(value, 'mc').to('cm')).toEqual({ value: 10 ** -4, unit: 'cm' })
  })

  it('Should correctly convert picometers to centimeters', () => {
    const value = 1
    expect(length(value, 'pm').to('cm')).toEqual({ value: 10 ** -12, unit: 'cm' })
  })

  it('Should correctly convert picometers to yards', () => {
    const value = 100000000
    var result = length(value, 'pm').to('yd')
    expect(parseFloat(result.value.toFixed(13))).toEqual(0.0000010936133)
    expect(result.unit).toEqual('yd')
  })
})
