function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

    };
}
alertArray = ["Rocks on the Road", "Balloons in the air", "People on the ground"];
locationArray = ["Florida", "California", "Ohio"]; 
for(let i = 0; i < 3; i++){
    let warning = hazardWarningCreator(alertArray[i]);
    console.log(warning(locationArray[i]));
    console.log(warning(locationArray[i]));
    console.log(warning(locationArray[i]));
}



let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let noNeg = turtleSteps.filter(function(arr){
    if (arr[0]>=0 && arr[1]>=0){
        return arr;
    } 
})

let sums = noNeg.map(function(){arr[0][0] + arr[0][1]});

console.log(sums);