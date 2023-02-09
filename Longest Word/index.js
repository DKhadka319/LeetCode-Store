function LongestWord(sen) { 
//here sen.match help to compare the string 
// /\w+/g =this is use to compare a-z and 0-9
var word= sen.match(/\w+/g);

var longest =word[0];

for(var i =0; i<word.length; i++){
  //.length attributes help to cacilate the length of respect words
  if (word[i].length > longest.length){
    longest=word[i];
  }
}

  // code goes here  
  return longest; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
