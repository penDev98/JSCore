function coneParameters(r, h) {
    let volume = 1/3 * Math.PI * r * r * h;
    let s = Math.sqrt(r * r + h * h);
    let surfaceArea = Math.PI * r * s + Math.PI * r * r;
    console.log(volume);
    console.log(surfaceArea);
}
coneParameters(3, 5);