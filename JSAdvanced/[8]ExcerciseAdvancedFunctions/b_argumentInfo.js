function result(arguments){
    for (let obj of arguments) {
        console.log(obj);
    }
}

result('cat', 42, function () { console.log('Hello world!'); });