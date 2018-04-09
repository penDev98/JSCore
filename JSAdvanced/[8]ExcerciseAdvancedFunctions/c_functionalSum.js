function add(){
    let result = 0;
    return function(param){
        return result += param;
    }
}


console.log(add(1)(6)(-3));