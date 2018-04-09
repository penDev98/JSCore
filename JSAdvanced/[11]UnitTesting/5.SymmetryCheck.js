function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require("chai").expect;

describe("sum(arr)", function() {
    it("should return True for [1, 2, 2, 1]", function() {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it("should return False for [1, 2, 3, 2]", function() {
        expect(isSymmetric([1, 2, 3, 2])).to.be.false;
    });

    it("should return True for [1, 1]", function() {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it("should return False for [1, 2, 3]", function() {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it("should return True for [1]", function() {
        expect(isSymmetric([1])).to.be.true;
    });

    it("should return False for 1", function() {
        expect(isSymmetric(1)).to.be.false;
    });

    it("should return False for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function() {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.true;
    });

});
