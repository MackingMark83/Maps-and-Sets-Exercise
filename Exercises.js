//1)Quick Question #1
//What does the following code return?

{1,2,3,4}

//2)Quick Question #2
//What does the following code return?

'ref'

//3Quick Questions #3
//What does the Map m look like after running the following code?



  //0: {Array(3) => true}
 // 1: {Array(3) => false}

//4)hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length


//5)vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }