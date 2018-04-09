function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}


let expect = require("chai").expect;

describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 5 for [3, 2]", function() {
        expect(sum([3, 2])).to.be.equal(5);
    });
    it("should return 0 for []", function() {
        expect(sum([])).to.be.equal(0);
    });
});
