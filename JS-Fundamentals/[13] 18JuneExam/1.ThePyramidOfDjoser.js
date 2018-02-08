function pyramid(base, iter) {
    let gold = 0;
    if(base % 2 === 0){
        gold = 4
    }
    else gold = 1;
    let stone = 0;
    for (let i = base - 2; i >= 1; i -= 2) {
        stone += (i*i) * iter;
    }
    let marble = 0;
    let lapis = 0;
    let cnt = 0;
    for(let i=base; i>2; i-=2){
        cnt ++;
        if(cnt % 5 === 0){
            lapis += ((i*4)-4) * iter;
        }
        else
            (marble += ((i*4)-4) * iter);
    }
    gold *= iter;
    let heigth = parseInt(Math.ceil(base / 2));
    let finalHeigth = heigth * iter;
    console.log("Stone required: " + Math.ceil(stone));
    console.log("Marble required: " +  Math.ceil(marble));
    console.log("Lapis Lazuli required: " + Math.ceil(lapis));
    console.log("Gold required: " + Math.ceil(gold));
    console.log("Final pyramid height: " + Math.floor(finalHeigth));
}