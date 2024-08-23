import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';


describe("calculateNumber()", () => {
  describe("SUM", () => {
    it(`should return 3 for inputs 1 and 2 for sum`, () => {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
  it(`should return 5 for inputs 1.6 and 2.6 for sum`, () => {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });
  describe("SUBTRACT", () => {
    it(`should return -1 for inputs 1.4, 2.2 subtraction`, () => {
      expect(calculateNumber("SUBTRACT", 1.4, 2.2)).to.equal(-1);
    });
    it(`should return 2 for inputs 4.9 , 2.7 subtraction`, () => {
      expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
    });
    it(`should return 2 for inputs -4.9 , -2.7 subtraction`, () => {
      expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
    });
  });
  describe("DIVIDE", () => {
    it(`should return 2 for input 4, 2 division`, () => {
      expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });
    it(`should return Error for inputs 1.7, 0 division`, () => {
      expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal("Error");
    });
    it(`should return 0.2 for inputs 1.4, 4.6`, () => {
      expect(calculateNumber("DIVIDE", 1.4, 4.6)).to.equal(0.2);
    });
  });
});
