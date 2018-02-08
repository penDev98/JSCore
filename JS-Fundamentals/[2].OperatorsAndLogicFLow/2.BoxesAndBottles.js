function howManyBoxes(bottles, boxSize) {
    let intNum = parseInt(bottles/boxSize);
    let boxes = 0;
    if(boxSize >= bottles)
    {
        boxes = 1;
    }
    else if(bottles / boxSize > intNum)
    {
        boxes = intNum + 1;
    }
    else
    {
        boxes = bottles / boxSize;
    }
    console.log(boxes);
}