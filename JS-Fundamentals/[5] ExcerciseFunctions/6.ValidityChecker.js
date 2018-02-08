function validityChecker(input) {
    let x1 = input[0], y1 = input[1];
    let x2 = input[2], y2 = input[3];

    isDistanceValid(x1, y1, 0, 0);
    isDistanceValid(x2, y2, 0, 0);

    let distanceBetweenPoints = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    isDistanceValid(x1, y1, x2, y2, distanceBetweenPoints);

    function isDistanceValid(point1, point2, point3, point4, distance) {
        if(distance === undefined) {
            distance = Math.sqrt(Math.pow(point1, 2) + Math.pow(point2, 2));
        }

        if (distance === parseInt(distance)) {
            console.log(`{${point1}, ${point2}} to {${point3}, ${point4}} is valid`);
        }
        else {
            console.log(`{${point1}, ${point2}} to {${point3}, ${point4}} is invalid`);
        }
    }
}