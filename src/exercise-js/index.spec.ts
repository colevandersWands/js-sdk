const reverse = require('./index.js');

describe('Example test', () => {

  it('Should pass', () => {
    expect(reverse('em tseT')).toBe('Test me');
  });
});
