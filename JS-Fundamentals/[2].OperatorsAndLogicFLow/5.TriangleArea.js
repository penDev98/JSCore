function triangleArea(a, b ,c) {
    let p = (a + b + c) / 2;
    let Area = Math.sqrt((p *(p - a)) * (p - b) * (p - c));
    console.log(Area)
}