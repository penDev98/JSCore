function solve(arr, command){
    switch(command){
        case 'asc':
            return arr.sort((a,b) => a - b);
            break;
        case 'desc':
            return arr.sort((a,b) => b - a);
            break;
    }
}