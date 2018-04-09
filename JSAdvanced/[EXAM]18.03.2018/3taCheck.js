class PaymentProcessor {
    constructor(input) {
        this.types = [];
        this.types.push('service');
        this.types.push('product');
        this.types.push('other');
        this.details = new Object();
        this.payments = 0;
        this.balance = 0;
        this.precision = 2;

        if(input !== undefined) {
            if (input['precision'] !== undefined) {
                this.precision = Number(input.precision);
            }
            if (input['types'] !== undefined) {
                this.types = input.types;
            }

        }
    }


    setOptions(options) {
        if (typeof options === "object") {
            if (options.hasOwnProperty("precision")) {
                this.precision = options.precision;
            }
            if (options.hasOwnProperty("types")) {
                this.types = options.types;
            }
        } else {
            throw new Error;
        }
    }

    registerPayment(id, name, type, value) {
        if (id !== "" && this.types.includes(type) && !isNaN(value) && this.details[id] === undefined && name !== "") {
            this.details[id] = {
                name: name,
                type: type,
                value: value
            };

            this.payments++;
            this.balance += value;
        } else {
            throw new Error;
        }
    }

    get(id) {
        if (this.details[id] !== undefined) {
            return `Details about payment ID: ${id}\n`
                + `- Name: ${this.details[id].name}\n`
                + `- Type: ${this.details[id].type}\n`
                + `- Value: ${this.details[id].value.toFixed(this.precision)}\n`;
        }

        throw new Error;
    }


    deletePayment(id) {
        if (this.details[id] !== undefined) {
            this.balance -= this.details[id].value;
            this.payments--;
            delete this.details[id];
        } else {
            throw new Error;
        }
    }


    toString() {

        return `Summary:\n` +
            `- Payments: ${this.payments}\n` +
            `- Balance: ${this.balance.toFixed(this.precision)}`
    }
}


const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());


generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
