function cookingOperation(input) {
    let num = input[0];

    for(let i=1; i< input.length; i++){
        let operation = input[i];
        operating(operation);
    }
    function operating(operation){
     switch (operation){
         case "chop":
             num = num / 2;
             console.log(num);
             break;
         case "dice":
             num = Math.sqrt(num);
             console.log(num);
             break;
         case "spice":
             num += 1;
             console.log(num);
             break;
         case "bake":
             num = num * 3;
             console.log(num);
             break;
         case "fillet":
             num = num - (num*0.20);
             console.log(num);
             break;
     }
    }
}
