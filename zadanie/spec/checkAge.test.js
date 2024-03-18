// checkAge.test.js

const isAdult = require('../checkAge');

describe('Check Age', () => {
  it('Sprawdza czy osoba o wieku 20 lat jest pełnoletnia', () => {
    expect(isAdult(20)).toBe(true);
  });

  it('Sprawdza czy osoba o wieku 16 lat jest pełnoletnia', () => {
    expect(isAdult(16)).toBe(false);
  });
  
  it('Sprawdza czy osoba o wieku 18 lat jest pełnoletnia', () => {
    expect(isAdult(18)).toBe(true);
  });
});