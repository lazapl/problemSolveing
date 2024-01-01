/*Create a function that takes an array of numbers arr, a string str and return an array.

function ascDesNone(arr,str){
    if(str == "Asc"){
        return arr.sort((a,b) => a - b)
    }else if(str == "Des"){
        return arr.sort((a,b)=> b - a)
    }else if(str == "None"){
        return arr.slice()
    }else{
        return 'Invalid input for sorting order'
    }
}

console.log(ascDesNone([4, 3, 2, 1], "Asc" ))
console.log(ascDesNone([7, 8, 11, 66], "Des"))
console.log(ascDesNone([1, 2, 3, 4], "None")) 

output: [ 1, 2, 3, 4 ]
        [ 66, 11, 8, 7 ]
        [ 1, 2, 3, 4 ]

----------------------------------------------------------------------------*/

/*Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr){

    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            newArray.push(arr[i])
        }
        
    }
    return newArray
}
console.log(numbersSum([1, 2, "13", "4", "645"]))
console.log(numbersSum([true, false, "123", "75"]))
console.log(numbersSum([1, 2, 3, 4, 5, true]))

output: [ 1, 2 ]
        []
        [ 1, 2, 3, 4, 5 ]
        
        ----------------------------------------------------------------------------*/

        /*Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
        
function matchLastItem(str){
    let concatenated = ""

    for(let i=0; i<str.length -1; i++){
        concatenated += str[i]
    }

    return concatenated === str[str.length -1]

}


console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))
console.log(matchLastItem([1, 1, 1, "11"]));                  
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

output: true
        false
        true

----------------------------------------------------------------------------*/

/* Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr){
    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray
}



console.log(removeDups([1, 0, 1, 0]))

console.log(removeDups(["The", "big", "cat"]))

console.log(removeDups(["John", "Taylor", "John"]))

output: [ 'The', 'big', 'cat' ]
        [ 'John', 'Taylor' ]

----------------------------------------------------------------------------*/


/*Given an integer array, transform that array into a mirror.

function mirror(arr){

    let array1 = [...arr]
    let array2 = [...arr]
    
   
    array1.sort((a,b)=> a - b)
    array2.sort((a,b)=> b - a)
    
    return array1.concat(array2.slice(1))



   
}

console.log(mirror([0, 2, 4, 6]))

console.log(mirror([1, 2, 3, 4, 5]))

console.log(mirror([3, 5, 6, 7, 8]))

output:   0, 2, 4, 6,
  4, 2, 0
]
[
  1, 2, 3, 4, 5,
  4, 3, 2, 1
]
[
  3, 5, 6, 7, 8,
  7, 6, 5, 3
]

----------------------------------------------------------------------------*/


/*Create a function that returns true if all parameters are truthy, and false otherwise.


function allTruthy(...el){
    for(ez of el){
        if(!ez){
            return false
        }
    }
    return true
}

console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))

output: true
        false
        false

----------------------------------------------------------------------------*/

/*Create a function that takes a number and returns an array with the digits of the number in reverse order.

function reverseArr(str){
    let re = String(str)

    return re.split("").reverse()
}


console.log(reverseArr(1485979))
console.log(reverseArr(623478))
console.log(reverseArr(12345))

    output:
        [ '9', '7', '9', '5', '8', '4', '1' ]
        [ '8', '7', '4', '3', '2', '6' ]
        [ '5', '4', '3', '2', '1' ]


----------------------------------------------------------------------------*/


/*Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
function XO(str){

    let string = str.toLowerCase()

    let Xcount = 0
    let Ocount = 0

    for(let i=0; i<string.length; i++){
        if(string[i] == 'x'){
            Xcount++;
        }else if(string[i] == 'o'){
            Ocount++;
        }

        
    }
    return Xcount == Ocount

}


console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))


output: true
        false
        true    
        true
        false

----------------------------------------------------------------------------*/

/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.


function countBoomerangs(arr){

    let count = 0
    for(let i=0; i<arr.length -2; i++){
        if(arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]){
            count++;
        }

    }
    return count
}



console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))

output: 2
        1
        0
        

----------------------------------------------------------------------------*/

/*Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

function insertWhitespace(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      const previousChar = i > 0 ? s[i - 1] : '';
      if (previousChar.toLowerCase() === previousChar && currentChar.toUpperCase() === currentChar) {
        result += ' '; 
      }
      result += currentChar;
    }
    return result;
  }
  console.log(insertWhitespace("SheWalksToTheBeach"));  
  console.log(insertWhitespace("MarvinTalksTooMuch"));  
  console.log(insertWhitespace("TheGreatestUpsetInHistory"));  


  output: She Walks To The Beach
          Marvin Talks Too Much
          The Greatest Upset In History

----------------------------------------------------------------------------*/