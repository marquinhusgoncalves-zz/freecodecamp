//Inverter uma String
function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString("Passa a String"));

//Fatorar um número 
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
console.log(factorialize(5));

//Verificar se uma string é igual de traz para frente
function palindrome(str) {
    // Convert to lower case and replace everything what's not a letter or a number.
    var x = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    //convert string to array, turn it around and put it back together an match it against filtered string:
    return x.split('').reverse().join('') === x;
}
palindrome("eye");

//Verificar a maior palavra em uma frase
function findLongestWord(str) {
  var array = str.split(" ");
  var num = 0;
  for (var i in array) {
    if (array[i].length > num) {
      num = array[i].length;
    }
  }
  return num;
findLongestWord("Google do a barrel roll");

//Deixar a primeira letra de cada palvra em uma frase em maiúscula
function titleCase(str) {
  var strArr = str.toLowerCase().split(' ');
  var capArr = [];
  for (var i = 0; i < strArr.length; i++) {
    capArr[i] = strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase());
  }
  var titleStr = capArr.join(' ');
  return titleStr;
}
titleCase("I'm a little tea pot");

//Maior número de cada array em uma lista de array
function largestOfFour(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(Math.max.apply(Math, arr[i]));
  }
  return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Comparar algo com a última parte de um array
function end(str, target) {
  var endingPart = str.substr(-(target.length)); 
  return target === endingPart;
}

//repete a str o número de X que foi passado
function repeat(str, num) {
  if (num >= 0) {
  return str.repeat(num);
} else {
    str = "";
  return str;
  }
}
repeat("abc", -2);

//função que divide uma matriz e torna em matriz bidimensional
function chunk(arr, size) {
    var result = [];
    while (arr.length > size) {
        result.push(arr.splice(0, size));
    }
    if (arr.length)
        result.push(arr);
    return result;
 }
chunk(["a", "b", "c", "d"], 2);

//Mutations
function mutation(arr){
   // for convenience, let's break those strings out of the array
   var firstWord = arr[0];
   var secondWord = arr[1];
   // convert strings to lower case for comparison
   firstWord = firstWord.toLowerCase();
   secondWord = secondWord.toLowerCase();
  // loop over each letter in second word
   for(var i = 0; i < secondWord.length; i++){
      // test if that letter is in first word
      if(firstWord.lastIndexOf(secondWord[i]) < 0){
         return false; // if not, test over
      }
         // if letter is in second word, do nothing, keep looping
   }
   return true; // if you made it here 
               // then all letters must be present in first word
}
mutation(["hello", "hey"]);

//Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var arrBool = Boolean(arr[i]);
    if (arrBool === true) {
      newArray.push(arr[i]);
      //return newArray;
    }
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9]);

//Seek and Destroy
function destroyer(arr, val1, val2, val3) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] !== val1 && arr[i] !== val2 && arr[i] !== val3) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);























