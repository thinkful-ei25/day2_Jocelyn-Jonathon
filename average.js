/*var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});*/

function average(arr){
    holder = 0;
    arr.forEach(function(element){
        holder += element;
    });
    return holder/arr.length;
}

arr = [2,2,2,2];

console.log(average(arr));