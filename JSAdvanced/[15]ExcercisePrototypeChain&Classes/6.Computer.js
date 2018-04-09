function solve(){
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Employee){
                throw new Error('Cannot instantiate directly');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(weight, color, battery){
            super();
            this.battery = battery;
            this.weight = weight;
            this.color = color;
        }
        get battery(){
            return this._battery;
        }
        set battery(bat){
            if(!(bat instanceof Battery)){
                throw new TypeError('not a valid battery');
            }
            this._battery = battery;
        }
    }
    class Desktop extends Computer{
        constructor(keyboard, monitor){
            super();
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
    }
}