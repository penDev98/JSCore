function tripLength(input) {
    let x1 = input[0], y1 = input[1];
    let x2 = input[2], y2 = input[3];
    let x3 = input[4], y3 = input[5];

    let point1ToPoint2Distance = distance(x1, y1, x2, y2);
    let point2toPoint3Distance = distance(x2, y2, x3, y3);
    let point1ToPoint3Distance = distance(x1, y1, x3, y3);

    if ((point1ToPoint2Distance <= point1ToPoint3Distance) && (point1ToPoint3Distance => point2toPoint3Distance)) {
        let finalDistance = point1ToPoint2Distance + point2toPoint3Distance;
        console.log("1->2->3: " + finalDistance);
    }
    else if ((point1ToPoint2Distance <= point2toPoint3Distance) && (point1ToPoint3Distance < point2toPoint3Distance)) {
        let finalDistance = point1ToPoint3Distance + point1ToPoint2Distance;
        console.log("2->1->3: " + finalDistance);
    }
    else {
        let finalDistance = point2toPoint3Distance + point1ToPoint3Distance;
        console.log("1->3->2: " + finalDistance);
    }

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
}