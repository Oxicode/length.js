var length = require('../length');

describe('add()', () => {
  it('Should correctly add positive value', () => {
    expect(length(10, 'cm').add(20)).toEqual({ value: 30, unit: 'cm' });
    expect(length(10, 'cm').add(0.0001)).toEqual({ value: 10.0001, unit: 'cm' });
    expect(length(10, 'cm').add(6782563)).toEqual({ value: 6782573, unit: 'cm' });
    expect(length(10, 'cm').add(1)).toEqual({ value: 11, unit: 'cm' });
  })

  it('Should correctly add negative value', () => {
    expect(length(10, 'cm').add(-1)).toEqual({ value: 9, unit: 'cm' });
    expect(length(10, 'cm').add(-0)).toEqual({ value: 10, unit: 'cm' });
    expect(length(10, 'cm').add(-0.0001)).toEqual({ value: 9.9999, unit: 'cm' });
    expect(length(10, 'cm').add(-923432)).toEqual({ value: -923422, unit: 'cm' });
  })

  it('Should throw error when argument is not passed', () => {
    expect(function () { length(10, 'cm').add() }).toThrowError();;
  })

  it('Should throw error when argument is not a number', () => {
    expect(function () { length(10, 'cm').add('string') }).toThrowError();
    expect(function () { length(10, 'cm').add({ key: 'value' }) }).toThrowError();
    expect(function () { length(10, 'cm').add([1, 2, 3, 4, 5]) }).toThrowError();
    expect(function () { length(10, 'cm').add(function () { }) }).toThrowError();
  })

  it('Should correctly add zero', () => {
    expect(length(10, 'cm').add(0)).toEqual({ value: 10, unit: 'cm' });
  })

  it('Should correctly value in other unit', () => {
    expect(length(10, 'cm').add(1, 'm')).toEqual({ value: 110, unit: 'cm' });
    expect(length(9, 'dm').add(2, 'in')).toEqual({ value: 9.508, unit: 'dm' });
    expect(length(10, 'cm').add(0, 'yd')).toEqual({ value: 10, unit: 'cm' });
  })
})
