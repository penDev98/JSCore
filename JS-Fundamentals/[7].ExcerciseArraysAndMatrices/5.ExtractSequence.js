function extractSequence(arr) {
    let arr2 = [];
    let result = [];
        result.push(arr[0]);
   for(let i =0; i<arr.length-1;i++){
       if(arr[i+1] >= arr[i] && arr[i+1] >= result[result.length-1]){
        result.push(arr[i+1])
       }
   }
   for (let i=0; i<result.length; i++){
        console.log(result[i]);
   }
}