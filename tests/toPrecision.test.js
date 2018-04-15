const length = require('../length');

describe('toPrecision()', () => {
  it('Should correctly generate precision with no parameters', () => {
    expect(length(1, 'cm').toPrecision()).toEqual({ value: 1, unit: 'cm' });
    expect(length(10, 'cm').toPrecision()).toEqual({ value: 10, unit: 'cm' });
    expect(length(14123, 'cm').toPrecision()).toEqual({ value: 14123, unit: 'cm' });
    expect(length(0.00001, 'cm').toPrecision()).toEqual({ value: 0.00001, unit: 'cm' });
  })

  it('Should correctly returns negative value', () => {
    expect(length(1, 'cm').toPrecision(1)).toEqual({ value: 1, unit: 'cm' });
    expect(length(1, 'cm').toPrecision(10)).toEqual({ value: 1, unit: 'cm' });
    expect(length(1, 'cm').toPrecision(92)).toEqual({ value: 1, unit: 'cm' });
  })

  it('Should correctly returns negative value', () => {
    expect(length(1.1, 'cm').toPrecision()).toEqual({ value: 1.1, unit: 'cm' });
    expect(length(1.1, 'cm').toPrecision(1)).toEqual({ value: 1.1, unit: 'cm' });
    expect(length(1.1, 'cm').toPrecision(0)).toEqual({ value: 1.1, unit: 'cm' });
  })

  it('Should correctly returns negative value', () => {
    expect(length(1.1231, 'cm').toPrecision(1)).toEqual({ value: 1.1, unit: 'cm' });
    expect(length(1.9242, 'cm').toPrecision(1)).toEqual({ value: 1.9, unit: 'cm' });
    expect(length(1.23, 'cm').toPrecision(1)).toEqual({ value: 1.2, unit: 'cm' });
    expect(length(1.29, 'cm').toPrecision(1)).toEqual({ value: 1.3, unit: 'cm' });
  })
})
