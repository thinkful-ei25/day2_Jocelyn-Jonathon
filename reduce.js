sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
array = sentence.split(" ");

word = " ";
const answer = array.reduce(function(acc, word){
     if(word.length === 3){
         return (acc + " ");

     }
     return (acc + word.slice(-1).toUpperCase());
}, '');

console.log(answer);