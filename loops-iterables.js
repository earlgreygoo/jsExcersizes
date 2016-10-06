/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
var sumOfArray = function(arrayinput) {
	var total = 0;
    
	for (var i = 0; i < arrayinput.length; i += 1) {
        
		total = total + arrayinput[i];
	}
    return total;
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.



var maxOfArray = function(inputArray) {
    var largestNumber = 0;
    
    for (var i = 0; i < inputArray.length; i += 1) {
        if (isNaN(inputArray[i])) {
            return inputArray[i]
            }
        if (largestNumber < inputArray[i]) {
            largestNumber = inputArray[i];
            }
        }
    return largestNumber;
            
    }
            


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(inputLetter) {
    var vowels = ["A","E","I","O","U","a","e","i","o","u"]
    
     
    for (var i = 0; i < vowels.length; i++) {
        if (vowels[i] === inputLetter) {
            return true
        }
        
    }
    for (var i = 0; i < vowels.length; i++) {
        if (vowels[i] !== inputLetter) {
            return false 
        }
    }
    
    
         
    
    
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 var reverse = function(inputString) {
    
    var inputarray = inputString.split("")
    var inputreversed = inputarray.reverse()
    var final = inputreversed.join("")
    return final
}



console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */
var fizzbuzz = function(inputnumber) {
    var outputstring = ""
    for (var i= 1; i <= inputnumber; i ++) {
        
        if(i % 3 !== 0 && i % 5 !== 0) {
           outputstring += "."
           }
        else if (i % 3 === 0 && i % 5 !== 0) {
            outputstring += "fizz"
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            outputstring += "buzz"
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            outputstring += "fizzbuzz"
        }
    }
    return outputstring
}
           
           


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

    
var findLongestWord = function(inputstring) {
    inputstring = inputstring.replace("'","")
    var inputarray = inputstring.split(" " )
    var output = ""
    for (var i = 0; i < inputarray.length; i ++) {
        if(output.length < inputarray[i].length) {
            
            output = inputarray[i];
        }
    }
    return output
}



console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

    var GCD = function(num1,num2) {
    var num1arr = []
    var num2arr = []
    var simnums = []
    
    
    for(var i = 0; i <= num1; i ++) {
        if(num1 % i === 0 ) {
            num1arr.push(i);
        }
    }
    for(var i = 0; i <= num2; i ++) {
        if(num2 % i === 0 ) {
            num2arr.push(i);
        }
    }
    
    for (var i = 0; i < num1arr.length ; i++) {
        for (var ia = 0; ia < num2arr.length ; ia++) {
            if (num1arr[i] === num2arr[ia]) {
                simnums.push(num1arr[i]) 
            }
        }
        
    }
    return simnums[simnums.length-1]
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
