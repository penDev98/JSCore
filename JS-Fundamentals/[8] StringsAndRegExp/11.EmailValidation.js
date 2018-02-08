function validation(input) {
    let emailValidation = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    if(emailValidation.test(input)){
        return "Valid";
    }
    else return "Invalid";
}