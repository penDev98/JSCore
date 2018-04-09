class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}
//
// try {
//     const hrPack = new PaymentPackage('HR Services');
// } catch(err) {
//     console.log('Error: ' + err.message);
// }



// const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
// try {
//     wrongPack.active = null;
// } catch(err) {
//     console.log('Error: ' + err.message);
// }


let expect = require("chai").expect;

    describe('PaymentPackage', function () {

        it('test', function () {
            const test = new PaymentPackage('imence', 24);
            expect(test.toString()).to.be.equal('Package: imence\n' +
                '- Value (excl. VAT): 24\n' +
                '- Value (VAT 20%): 28.799999999999997');
        });

        it('test', function () {
            try {
                const hrPack = new PaymentPackage('HR Services');
            } catch(err) {
                return err;
            }
            expect(err).to.be.equal('Value must be a non-negative number');
        });

        it('test', function () {
            const packages = [
                new PaymentPackage('HR Services', 1500),
                new PaymentPackage('Consultation', 800),
                new PaymentPackage('Partnership Fee', 7000),
            ];

            expect(packages.join('\n')).to.be.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800\n' +
                'Package: Consultation\n' +
                '- Value (excl. VAT): 800\n' +
                '- Value (VAT 20%): 960\n' +
                'Package: Partnership Fee\n' +
                '- Value (excl. VAT): 7000\n' +
                '- Value (VAT 20%): 8400');
        });

        it('test', function () {
            const wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.active = null;
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Active status must be a boolean');
        });

        it('test', function () {
            const wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.active = null;
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Active status must be a boolean');
        });

        it('has all properties', function () {
            const builder = new PaymentPackage('Transfer Fee', 100);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('name')).to.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('value')).to.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('VAT')).to.equal(true);
            expect(Object.getPrototypeOf(builder).hasOwnProperty('active')).to.equal(true);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.name = 'ime';
            expect(test.toString()).to.be.equal('Package: ime\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120');
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            expect(() => {test.name = '';}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            expect(() => {test.name = [];}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            expect(() => {test.name = {};}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            expect(() => {test.name = true;}).to.throw(Error);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            expect(() => {test.name = 5;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.value = -5;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.value = true;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.value = 'hello';}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.value = [];}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.value = {};}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = -5;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = {};}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = 'bring it';}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = '';}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = [5];}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.VAT = true;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.active = 1;}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.active = '';}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.active = [];}).to.throw(Error);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.active = {};}).to.throw(Error);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);

            expect(() => {test.active = 'hey';}).to.throw(Error);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.name = 'idk';
            expect(test.name).to.be.equal('idk');
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.value = 2;
            expect(test.value).to.be.equal(2);
        });
        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.VAT = 2;
            expect(test.VAT).to.be.equal(2);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.active = false;
            expect(test.active).to.be.equal(false);
        });

        it('test', function () {
            const test = new PaymentPackage('TransferFee', 100);
            test.name = 'hello';
            test.active = false;
            expect(test.toString()).to.be.equal('Package: hello (inactive)\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120');
        });

        it('test', function () {
            const wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.active = 5;
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Active status must be a boolean');
        });
        it('test', function () {
            const wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.name = 5;
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Name must be a non-empty string');
        });

        it('test', function () {
            let wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.value = 'hey';
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Value must be a non-negative number');
        });

        it('test', function () {
            const wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.value = -3;
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Value must be a non-negative number');
        });

        it('test', function () {
            let wrongPack = new PaymentPackage('Transfer Fee', 100);
            try {
                wrongPack.VAT = [];
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('VAT must be a non-negative number');
        });
        it('test', function () {

            expect(() => {const test = new PaymentPackage(3, 100);}).to.throw(Error);
        });

        it('test', function () {
            try {

                let wrongPack = new PaymentPackage('hey', -3);
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Value must be a non-negative number');
        });


        it('test', function () {
            try {

                let wrongPack = new PaymentPackage('hey', -3);
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Value must be a non-negative number');
        });

        it('test', function () {

            try {
                const wrongPack = new PaymentPackage('hey', {});
            } catch(err) {
                return err;
            }

            expect(err).to.be.equal('Value must be a non-negative number');
        });

        it('test', function () {
            let test = new PaymentPackage('hey', 3);
            expect(test.VAT === undefined).to.be.equal(false);
        });
        it('test', function () {
            let test = new PaymentPackage('hey', 3);
            expect(test.name === undefined).to.be.equal(false);
        });
        it('test', function () {
            let test = new PaymentPackage('hey', 3);
            expect(test.active === undefined).to.be.equal(false);
        });
        it('test', function () {
            let test = new PaymentPackage('hey', 3);
            expect(test.value === undefined).to.be.equal(false);
        });
        it('test', function () {
            let test = new PaymentPackage('hey', 3);
            expect(test.toString() === undefined).to.be.equal(false);
        });

        it('test', function () {
            expect(() => {let test = new PaymentPackage('hey', 3, wtf)}).to.throw(Error);
        });
    });


describe('test', function () {
    it('test', function () {
        expect(() => {let test = new PaymentPackage('hey', 3, wtf)}).to.throw(Error);
    });
});
