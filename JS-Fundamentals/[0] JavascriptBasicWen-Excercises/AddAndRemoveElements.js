function ManipulateArray(input) {
    let arr = [];
  for(let i = 0; i < input.length; i++)
  {
      let line = input[i].split(' ');
      if (line[0] === "add")
      {
          arr.push(line[1]);
      }
      else if(line[0] === "remove")
      {
          arr.splice(Number(line[1]), 1)
      }
  }
    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}
console.log(ManipulateArray(["add 3",
    "add 5",
    "remove 2",
    "remove 0",
    "add 7"]));