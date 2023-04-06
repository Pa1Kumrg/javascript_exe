value="hello world this is new learing "
value2=" java script "

// defines the length of the value
console.log("length",value.length)

// includes  will use to find the defined value in the 
result = value.includes("he")

// displays the result True/False
console.log("result" ,result)

//toUpperCase: Converts a string to uppercase letters.
console.log(value.toUpperCase())

//toLowerCase: Converts a string to lowercase letters.
console.log(value.toLowerCase())

//replace: Replaces a specified value with another value in a string.
console.log(value.replace("world","trying to replace one")) //

//substr: Extracts a specified number of characters from a string, starting from a specified index.
console.log("value",value.substr(5,6))

//slice: Extracts a section of a string and returns a new string.
console.log("value 1",value.slice(3,4))

//lastIndexOf: Returns the index of the last occurrence of a specified value in a string.

console.log("value2", value.lastIndexOf(3)) //output// -1
//indexOf: Returns the index of the first occurrence of a specified value in a string.

console.log("value3", value.indexOf("world")) // output//6
//concat: Concatenates two or more strings.

 console.log(value.concat (" ",value2)) //output// hello world this is new learing   java script

 //charAt: Returns the character at a specified index.
 console.log(value.charAt(1)) //output// e

// spread operator

 result= [...value,...value2]
 console.log("result",result)

 console.log("result",result.length)