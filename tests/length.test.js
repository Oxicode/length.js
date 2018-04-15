const length = require('../length');

describe('length()', () => {
  it('Should correctly create object properties', () => {
    var tests = [
      [1, 'cm'],
      [100, 'dm'],
      [0.9, 'yd'],
      [5213, 'm'],
    ]
    for (i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1])).toEqual({ value: tests[i][0], unit: tests[i][1] });
    }
  })

  it('Should throw an error if arguments not passed', () =>{
    expect(function () { length() }).toThrowError();
  })

  it('Should throw an error if only one argument passed', () =>{
    expect(function () { length(12) }).toThrowError();
  })

  it('Should throw an error if value argument is not a number', () =>{
    expect(function () { length('string', 'cm') }).toThrowError();
  })

  it('Should throw an error if value argument is 0', () =>{
    expect(function () { length(0, 'cm') }).toThrowError();
  })

  it('Should throw an error if passed unit type is not supported', () =>{
    expect(function () { length(12, 'unit') }).toThrowError();
  })
})
