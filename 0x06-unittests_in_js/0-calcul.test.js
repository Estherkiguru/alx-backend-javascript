const assert = require('assert');
const calculateNumber = require('./0-calcul.js');


describe('calculateNumber', () => {
  it('should return 4 for inputs 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 6 for inputs 1 and 4.7', () => {
    assert.strictEqual(calculateNumber(1, 4.7), 6);
  });

  it('should return 5 for inputs 1.9 and 2.8', () => {
    assert.strictEqual(calculateNumber(1.9, 2.8), 5);
  });

  it('should return 4 for inputs 1.2 and 3.0', () => {
    assert.strictEqual(calculateNumber(1.2, 3.0), 4);
  });

  it('should return 4 for inputs 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
