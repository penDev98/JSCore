function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require("chai").expect;

describe("sum(arr)", function() {
    it("should return undefined for [g]", function () {
        expect(rgbToHexColor(['g'])).to.be.undefined;
    });

    it("should return undefined for [1]", function () {
        expect(rgbToHexColor([1])).to.be.undefined;
    });

    it("should return undefined for [-250]", function () {
        expect(rgbToHexColor([-250])).to.be.undefined;
    });

    it("should return #FF9EAA for 255, 158, 170", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it("should return undefined for 255, 256, 170", function () {
        expect(rgbToHexColor(255, 256, 170)).to.be.undefined;
    });

    it("should return undefined for 255, 254, 257", function () {
        expect(rgbToHexColor(255, 254, 257)).to.be.undefined;
    });

    it("should return undefined for 255, 255, -1", function () {
        expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
    });

    it("should return undefined for -20, 4, 170", function () {
        expect(rgbToHexColor(-20, 4, 170)).to.be.undefined;
    });

    it("should return undefined for 1", function () {
        expect(rgbToHexColor(1)).to.be.undefined;
    });

    it("should return undefined for -255", function () {
        expect(rgbToHexColor(-255)).to.be.undefined;
    });

    it("should return undefined for 1, 25.5, 46.8", function () {
        expect(rgbToHexColor(1, 25.5, 45.8)).to.be.undefined;
    });

    it("should return undefined for what", function () {
        expect(rgbToHexColor('what')).to.be.undefined;
    });

    it("should return undefined for 2412", function () {
        expect(rgbToHexColor(2412)).to.be.undefined;
    });

    it("should return #0000FF for 0,0,255", function () {
        expect(rgbToHexColor(0,0,255)).to.be.equal('#0000FF');
    });
});