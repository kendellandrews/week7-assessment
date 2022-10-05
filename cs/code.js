// Question 1
const array = [1, 4, 11, 2, 37, 0]
let addsToZero = false

for(let i = 0; i < array.length; i++){
  for(let j = i + 1; j< array.length; j++){
    if(array[i] + array[j] === 0){
      addsToZero = true
      break
    }
  }
}

console.log(addsToZero)

// O(n) 

// Question 2

const hasUniqueChars = (word) => {
    let unique = true
    let characters = []
  
    for(let i = 0; i < word.length; i++){
      if(characters.includes(word[i])){
        unique = false
        break
      } else {
        characters.push(word[i])
      }
    }
  
    return unique
  }
  
  console.log(hasUniqueChars('Monnday'))

  // O(n)

  // Question 3
  function pangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  //O(1)

  // Question 4
  function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

  // O(n)