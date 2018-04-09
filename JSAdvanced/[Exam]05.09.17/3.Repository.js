class Repository {
    constructor(props){
        this.props = props;
        this.data = new Map;
        this.counter = 0;
        this._count = 0;
    }
    add(entity){
        this.data.set(this.counter, entity);
        this.counter++;
    }
    get(id){
        return this.data.get(id);
    }
    update(id, entity){
        this.data.set(id, entity);
    }
    del(id){
        if(id < 0 || id > this.counter){
            throw new Error('invalid id');
        }
        this.data.delete(id);
    }
    get count(){
        return this._count = this.counter - 1;
    }
}

let wtf = new Repository();
wtf.add(25);
wtf.add(1);
console.log(wtf.get(1));

wtf.add(2);
wtf.del(1);
console.log(wtf.get(1));