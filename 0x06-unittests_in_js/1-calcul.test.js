const assert = require("assert");
const calculateNumber = require('./1-calcul');
describe("calculateNumber()", () => {
    it(`should return 3 for inputs 1 and 2 for sum`, () => {
      assert.strictEqual(calculateNumber("SUM", 1, 2), 3);
    });
    it(`should return -1 for inputs 1.4, 2.2 subtraction`, () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 2.2), -1);
    });
    it(`should return 2 for inputs 4.9 , 2.7 subtraction`, () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 4.9, 2.7), 2);
    });
    it(`should return 2 for input 4, 2 division`, () => {
      assert.strictEqual(calculateNumber("DIVIDE", 4, 2), 2);
    });
    it(`should return Error for inputs 1.7, 0 division`, () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.7, 0), "Error");
    });
    it(`should return 0.2 for inputs 1.4, 4.6`, () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.6), 0.2);
    });
});
