/*
To complete this drill, you need to implement 2 functions, max 
and min. Both functions should take a single argument: an array 
of numbers called numbers. max(numbers) should return the largest number 
in the array, while min(numbers) should return the smallest.
*/


function max(numbers){
    i = 1;
    max = numbers[0];
    while(i < numbers.length){
        if(max < numbers[i]){
            max = numbers[i];
        }
        i++;
    }
    return max;
}

function min(numbers){
    i = 1;
    min = numbers[0];
    while(i < numbers.length){
        if(min > numbers[i]){
            min = numbers[i];
        }
        i++;
    }
    return min;
}

numbers = [1, 5, 8, 10, 20];
console.log(max(numbers));
console.log(min(numbers));