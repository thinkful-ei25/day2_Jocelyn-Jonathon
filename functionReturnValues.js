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

