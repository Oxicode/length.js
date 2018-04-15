const length = require('../length');

describe('getValue()', () => {
  it('Should correctly return positive value', () => {
    expect(length(1, 'cm').getValue()).toEqual(1);
    expect(length(10, 'cm').getValue()).toEqual(10);
    expect(length(14123, 'cm').getValue()).toEqual(14123);
    expect(length(0.00001, 'cm').getValue()).toEqual(0.00001);
  })

  it('Should correctly return negative value', () => {
    expect(length(-1, 'cm').getValue()).toEqual(-1);
    expect(length(-10, 'cm').getValue()).toEqual(-10);
    expect(length(-14123, 'cm').getValue()).toEqual(-14123);
    expect(length(-0.00001, 'cm').getValue()).toEqual(-0.00001);
  })
})
