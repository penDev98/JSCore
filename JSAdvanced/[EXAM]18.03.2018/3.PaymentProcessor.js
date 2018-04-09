class PaymentProcessor {
    constructor(obj) {
        this.types = ["service", "product", "other"];


        if (obj !== undefined) {
            if (obj.hasOwnProperty("types")) {
                this.types = obj.types;
            }

            if (obj.hasOwnProperty("precision")) {
                this.precision = Number(obj.precision);
            }
            this.details = {};
            this.balance = 0;
            this.payments = {};
            this.precision = 2;
            this.ids = 0;
        }
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== 'string' || typeof name !== 'string') {
            throw new Error;
        }
        if (id.length === 0 || name.length === 0) {
            throw new Error;
        }

        if (typeof value !== 'number') {
            throw new Error;
        }
        this.ids++;
        this.balance += value;
        this.payments[id] = {'name': name, 'type': type, 'value': value};
        this.getBalance();
    }

    deletePayment(id) {

        if (this.payments[id] === undefined) {
            throw new Error;
        }


        delete this.payments[id];
        this.ids--;
        this.getBalance();
    }

    get(id) {
        if (this.payments[id] === undefined) {
            throw new Error;
        }
        return `Details about payment ID: ${this.payments.id}\n- Name: ${this.payments[id]['name']}\n- Type: ${this.payments[id]['type']}\n- Value: ${this.payments[id]['value'].toFixed(this.options['precision'])}`
    }

    setOptions(options) {
        if (this.obj !== undefined) {
            this.options['precision'] = Number(this.obj['precision']);
        }
        if (options['precision'] !== undefined) {

            this.options['precision'] = Number(options['precision']);
        }
    }

    toString() {
        return `Summary:\n- Payments: ${this.ids}\n- Balance: ${this.balance.toFixed(2)}`
    }
}


// Initialize processor with default options
const
    generalPayments = new PaymentProcessor();
generalPayments
    .registerPayment(
        '0001'
        ,
        'Microchips'
        ,
        'product'
        ,
        15000
    )
;
generalPayments
    .registerPayment(
        '01A3'
        ,
        'Biopolymer'
        ,
        'product'
        ,
        23000
    )
;
console
    .log(generalPayments

        .toString()
    )
;

// // Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments
    .setOptions({types: ['product', 'material']});

generalPayments
    .registerPayment(
        'E028'
        ,
        'Rare-earth elements'
        ,
        'material'
        ,
        8000
    )
;
console
    .log(generalPayments

        .get(
            'E028'
        ))
;
generalPayments
    .registerPayment(
        'CF15'
        ,
        'Enzymes'
        ,
        'material'
        ,
        55000
    )
;

// // Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// generalPayments.get('E027');

generalPayments
    .deletePayment(
        'E028'
    )
;
console
    .log(generalPayments

        .toString()
    )
;

// Initialize processor with custom types
const
    servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments
    .registerPayment(
        '01'
        ,
        'HR Consultation'
        ,
        'service'
        ,
        3000
    )
;
servicePyaments
    .registerPayment(
        '02'
        ,
        'Discount'
        ,
        'service'
        , -
            1500
    )
;
console
    .log(servicePyaments

        .toString()
    )
;
//
// Initialize processor with custom precision
const
    transactionLog = new PaymentProcessor({precision: 5});
transactionLog
    .registerPayment(
        'b5af2d02-327e-4cbf'
        ,
        'Interest'
        ,
        'other'
        ,
        0.00153
    )
;
console
    .log(transactionLog

        .toString()
    )
;
console
    .log(transactionLog

        .options
        ['precision']
    )
;

//

