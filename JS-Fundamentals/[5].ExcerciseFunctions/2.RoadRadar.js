function roadRadar([speed, area]) {
    let speedLimit = 0;
    switch(area){
        case "city":
            speedLimit = 50;
            break;
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "residential":
            speedLimit = 20;
    }
    let overSpeed = 0;
    if (speed > speedLimit){
      overSpeed = speed - speedLimit;
        if (overSpeed <= 20)
            console.log("speeding");
        else if (overSpeed <= 40)
            console.log("excessive speeding");
        else if (overSpeed > 40)
            console.log("reckless driving");
    }
}