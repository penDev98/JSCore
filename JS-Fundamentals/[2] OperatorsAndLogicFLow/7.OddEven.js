function oddOrEven(n) {
    n = Math.abs(n);
    if (n % 2 === 0)
    return "even";
    else if (n % 2 === 1)
        return "odd";
    else return "invalid";
}