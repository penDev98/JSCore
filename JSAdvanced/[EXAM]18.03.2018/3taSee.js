class PaymentProcessor{
    constructor(data) {
        this.types = [];
        this.types.push('service');
        this.types.push('product');
        this.types.push('other');
        this.precision = 2;
        this.collection = new Object();
        this.totalPayments = 0;
        this.totalSum = 0;
        if(data !== undefined) {
            if (data['types'] !== undefined) {
                this.types = data.types;
            }
            if (data['precision'] !== undefined) {
                this.precision = Number(data.precision);
            }
        }
    }
    registerPayment(id, name, type, num) {
        let isNum = !isNaN(num);
        if(id !== '' && name !== '' && this.types.indexOf(type) > -1 && isNum && this.collection[id] === undefined) {
            this.collection[id] = new Object();
            this.collection[id].name = name;
            this.collection[id].type = type;
            this.collection[id].num = num;
            let totalPayments = this.totalPayments +1;
            this.totalPayments = totalPayments;
            let totalSum = this.totalSum + num;
            this.totalSum = totalSum;
        } else {
            throw error('The data is invalid');
        }
    }
    deletePayment(input) {
        if(this.collection[input] === undefined) {
            throw error('Error');
        } else {
            let totalSum = this.totalSum - this.collection[input].num;
            this.totalSum = totalSum;
            let totalPayments = this.totalPayments - 1;
            this.totalPayments = totalPayments;
            delete this.collection[input];
        }
    }
    toString() {
        return (`Summary:\r\n` + `- Payments: ${this.totalPayments}\r\n` + `- Balance: ${this.totalSum.toFixed(this.precision)}`);
    }
    setOptions(options) {
        let type = typeof options;
        if(type !== 'object') {
            throw error('The data is invalid');
        } else {
            if(options['types'] !== undefined) {
                this.types = options.types;
            }
            if(options['precision'] !== undefined) {
                this.precision = options.precision;
            }
        }
    }
    get(input) {
        if(this.collection[input] === undefined) {
            throw error('Error');
        } else {
            return (`collection about payment ID: ${input}\r\n` + `- Name: ${this.details[input].name}\r\n` + `- Type: ${this.collection[input].type}\r\n` + `- Value: ${this.collection[input].num.toFixed(this.precision)}\r\n`);
        }
    }
}

// Initialize processor with default options
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
