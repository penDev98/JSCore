function personAndTeacherClasses() {

    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }
    return { Person, Teacher, Student };
}

function extendPrototype(Class) {
    Class.prototype.species = 'Human';
    Class.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

let Person = personAndTeacherClasses().Person;
extendPrototype(Person);

let maria = new Person("Maria", "maria@gmail.com").toSpeciesString();
console.log(maria);