showArr = [1,2,3,4,5]
hideArr =[0,9,8,7]

hideArr.push(1)
//push(): This function adds one or more elements to the end of an array.
showArr.push(6) // add function
showArr.push(7)
console.log("new arr",showArr,hideArr)
console.log("length",showArr.length)
console.log("length",hideArr.length) // to find the length

//let fruits = ["apple", "banana", "orange"];
//fruits.push("grape");
//console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

customer1=[1,2,3]

arr1=[12,13,14]
arr2=[15,16,17]
customer2=[5,6,7]
 result = [...customer1,...customer2] // spread operator
 
 result1 =[...arr1,...arr2] // spread operator
console.log("result",result)
 console.log("result1",result1) // output // result1 [ 12, 13, 14, 15, 16, 17 ]

 // pop function is used to remove last element
vegitable = ["tomato","spinach","cucumber"]
 missed = vegitable.pop()

 console.log("vegitable".vegitable)

fruits = ["apple", "banana", "orange"];
lastFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
console.log(lastFruit); // Output: "orange"

students = ["a","b","c","d","e"];
absentstudents =students.pop();
console.log(students);
console.log(absentstudents);

// Shift function removes the first value in the array :::: value.shift() ::::

firststudents = students. shift()
console.log(students)
console.log("firststudents".firststudents) // output// prints the elemenated the array

//3) unshift(): This function adds one or more elements to the beginning of an array.
 newstudents = students.unshift("y","z")
 console.log(students) // output // [ 'y', 'z', 'b', 'c', 'd' ]

 //4) concat(): This function combines two or more arrays into a new array.

 allmixed = fruits.concat(vegitable)
 console.log("allmixed",allmixed) // output//  [ 'apple', 'banana', 'tomato', 'spinach' ]

 // same we can do with spread operator
 mixed =[...fruits,...vegitable]
 console.log("mixed with spread operator",mixed) // output// mixed with spread operator [ 'apple', 'banana', 'tomato', 'spinach' ]


 //5) slice(): This function returns a portion of an array as a new array.

 changeofbasket = fruits.slice(0)
 console.log("changeof basket",changeofbasket)//output//changeof basket [ 'apple', 'banana' ]


 //6) splice(): This function adds or removes elements from an array.

 replacingfruits =fruits.splice(1,1,"guava","pumpkin")
 console.log("replacingfruits",replacingfruits)