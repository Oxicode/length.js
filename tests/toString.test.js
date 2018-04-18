const length = require('../length');

describe('getString()', () => {
  it('Should correctly return string when using toString directly', () => {
    expect(length(1, 'cm').toString()).toEqual('1cm');
    expect(length(0.092, 'dm').toString()).toEqual('0.092dm');
    expect(length(30, 'mi').toString()).toEqual('30mi');
  })

  it('Should correctly return string when using toString indirectly', () => {
    expect('' + length(1, 'cm')).toEqual('1cm');
    expect('' + length(0.092, 'dm')).toEqual('0.092dm');
    expect('' + length(30, 'mi')).toEqual('30mi');
  })
})
