const length = require('../length');

describe('getUnit()', () => {
  it('Should correctly return centimeter unit type', () => {
    expect(length(1, 'cm').getUnit()).toEqual('cm');
  })
  it('Should correctly return decimeter unit type', () => {
    expect(length(1, 'dm').getUnit()).toEqual('dm');
  })
  it('Should correctly return meter unit type', () => {
    expect(length(1, 'm').getUnit()).toEqual('m');
  })
  it('Should correctly return kilometer unit type', () => {
    expect(length(1, 'km').getUnit()).toEqual('km');
  })
  it('Should correctly return inch unit type', () => {
    expect(length(1, 'in').getUnit()).toEqual('in');
  })
  it('Should correctly return foot unit type', () => {
    expect(length(1, 'ft').getUnit()).toEqual('ft');
  })
  it('Should correctly return yard unit type', () => {
    expect(length(1, 'yd').getUnit()).toEqual('yd');
  })
  it('Should correctly return mile unit type', () => {
    expect(length(1, 'mi').getUnit()).toEqual('mi');
  })
})
