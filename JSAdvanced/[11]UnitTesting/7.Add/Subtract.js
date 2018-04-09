function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let calc = createCalculator();
calc.add(20);
console.log(calc.get()/3.15);
let expect = require("chai").expect;

describe("createCalculator()", function() {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it("should return 0 after {}", function() {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it("should return undefined after {}", function() {
        let value = calc.add();
        expect(value).to.be.equal(undefined);
    });

    it("should return -20 after {subtract 20}", function() {
        calc.subtract(20); let value = calc.get();
        expect(value).to.be.equal(-20);
    });

    it("should return 0 after {value edit}", function() {
        calc.get().value = 3; let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it("should return -3.15 after {subtract 3.15}", function() {
        calc.subtract(3.15); let value = calc.get();
        expect(value).to.be.equal(-3.15);
    });

    it("should return 16.85 after {subtract 3.15, add 20}", function() {
        calc.subtract(3.15), calc.add(20); let value = calc.get();
        expect(value).to.be.equal(16.85);
    });

    it("should return 0 after {subtract 5, add 10}", function() {
        calc.subtract(5), calc.add(10); let value = calc.get()-5;
        expect(value).to.be.equal(0);
    });

});




