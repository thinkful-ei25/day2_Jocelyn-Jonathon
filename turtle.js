let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let noNeg = turtleSteps.filter(function(arr){
    if (arr[0]>=0 && arr[1]>=0){
        return arr;
    } 
})

let addition = noNeg.map(function(array){
    return array[0] + array[1];
})

console.log(addition);