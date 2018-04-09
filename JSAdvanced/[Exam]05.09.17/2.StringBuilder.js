class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}




let expect = require("chai").expect;
describe('StringBuilder', function () {
    let builder;

    beforeEach(function () {
        builder = new StringBuilder();
    });

    it('has all properties', function () {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.true;
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.equal(true);
    });

    it(' properties', function () {
        let str = new StringBuilder('wtf');
        expect(str.toString()).to.be.equal('wtf');
    });

    it(' properties', function () {
        let str = new StringBuilder();
        expect(str.toString()).to.be.equal('');
    });

    it(' properties', function () {
        let str = new StringBuilder('wtf');
        str.append('af');
        expect(str.toString()).to.be.equal('wtfaf');
        expect(str.toString().length).to.be.equal(5);
    });

    it(' properties', function () {
        let str = new StringBuilder('wtf');
        let brat = 'brat';
        str.append(brat)
        expect(str.toString()).to.be.equal('wtfbrat');
        expect(brat.length).to.be.equal(4);
    });

    it(' properties', function () {
        let str = new StringBuilder('wtf');
        str.prepend('af');
        expect(str.toString()).to.be.equal('afwtf');
        expect(str.toString().length).to.be.equal(5);
    });

    it('insertAt(string, index) ', function () {
        let str = new StringBuilder('wtf');
        str.insertAt('af', 2);
        expect(str.toString()).to.be.equal('wtaff');
        expect(str.toString().length).to.be.equal(5);
    });

    it('remove(startIndex, length)', function () {
        let str = new StringBuilder('wtf');
        str.remove(1, 3);
        expect(str.toString()).to.be.equal('w');
        expect(str.toString().length).to.be.equal(1);
    });

    it('not string', function () {
        let str = new StringBuilder();
        expect(() => {str.append([])}).to.throw(TypeError);
    });

    it('not string', function () {
        let str = new StringBuilder();
        let str2 = 'asaf';
        str.append(str2);
        expect(str.toString()).to.be.equal(str2);
    });
});