const length = require('../length');

describe('getString()', () => {
  it('Should correctly return string with centimeter unit type', () => {
    expect(length(1, 'cm').getString()).toEqual('1cm');
    expect(length(0.092, 'dm').getString()).toEqual('0.092dm');
    expect(length(30, 'mi').getString()).toEqual('30mi');
  })
})
