class Rat{
    constructor(name){
    this.name = name;
    this.rats = [];
    }
    unite(otherRats){
        if(otherRats instanceof Rat) {
            this.rats.push(otherRats);
        }
        return;
    }

    toString(){
        let str = this.name;
        for (let rat of this.rats) {
          str += `\n##${rat}`
        }
        return str;
    }
    getRats(){
        return this.rats;
    }
}