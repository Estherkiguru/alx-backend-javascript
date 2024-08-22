const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 for inputs 1.0 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should return 3 for inputs 1.0 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should return 3 for inputs 1.4 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 3 for inputs 1.4 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should return 4 for inputs 1.0 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should return 6 for inputs 2.6 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should return 5 for inputs 2.6 and 2.0', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should return 5 for inputs 2.499999 and 3.499999', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
