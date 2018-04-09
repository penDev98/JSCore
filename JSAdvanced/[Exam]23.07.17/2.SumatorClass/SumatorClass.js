class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}


let list = new Sumator();
console.log(`list = [${list}]`);
list.add(2);
list.add(3);
console.log(list.sumNums());


let expect = require("chai").expect;
describe('Sumator', function () {
    let myList;

    beforeEach(function () {
        myList = new Sumator();
    });

    it('has all properties', function () {
        expect(console.log(myList)).to.be.equal(undefined);
    });

    it('has all properties', function () {
        let list = new Sumator; list.add(2);
        expect(console.log(list.data)).to.be.equal();
    });

    it('has all properties', function () {
        expect(Object.getPrototypeOf(myList).hasOwnProperty('add')).to.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('sumNums')).to.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('removeByFilter')).to.equal(true);
        expect(Object.getPrototypeOf(myList).hasOwnProperty('toString')).to.equal(true);
    });

    it('has all properties', function () {
        let list = new Sumator(); list.add(2); list.add(3);
        expect(list.sumNums()).to.be.equal(5);
    });

    it('has all properties', function () {
        let list = new Sumator(); list.add(2); list.add(3); list.add(5); list.add('hey');
        list.removeByFilter(x => x % 2 === 0);
        expect(list.sumNums()).to.be.equal(8);
    });

    it('has all properties', function () {
        let list = new Sumator(); list.add(2); list.add(3); list.add(5); list.add('hey'); list.add([1, 2, 3]);
        list.removeByFilter(x => x % 2 === 0);
        expect(list.toString()).to.be.equal('3, 5, hey, 1,2,3');
    });

    it('has all properties', function () {
        let list = new Sumator();
        expect(list.sumNums()).to.be.equal(0);
    });

    it('has all properties', function () {
        let list = new Sumator();
        expect(list.toString()).to.be.equal('(empty)');
    });
});
