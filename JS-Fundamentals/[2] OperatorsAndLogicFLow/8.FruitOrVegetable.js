function fruitOrVegetable(fruit) {
    fruit = fruit.toLowerCase();
    switch(fruit){
        case "banana":
            return "fruit";
            break;
        case "apple":
            return "fruit";
            break;
        case "kiwi":
            return "fruit";
            break;
        case "cherry":
            return "fruit";
            break;
        case "lemon":
            return "fruit";
            break;
        case "grapes":
            return "fruit";
            break;
        case "peach":
            return "fruit";
            break;
        case "tomato":
            return "vegetable";
            break;
        case "cucumber":
            return "vegetable";
            break;
        case "pepper":
            return "vegetable";
            break;
        case "onion":
            return "vegetable";
            break;
        case "garlic":
            return "vegetable";
            break;
        case "parsley":
            return "vegetable";
            break;
        default:
            return "unknown";
            break;
    }

}