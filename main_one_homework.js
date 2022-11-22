//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



function findWords(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])){
            console.log("Matched dog_name")
        } else {
            console.log("No matches")
        }       
    }
}
(findWords(dog_string, dog_names))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let stuff = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index")
        }
    }
    return arr
}
console.log(replaceEvens(stuff))




//Codewars Rehab
// Problem Name: Multiply
/* Python solution:
def multiply(a, b):
    return (a * b)
*/
// JavaScript Solution:
function multiply(a, b){
    let product = a * b
    console.log(product)
}
multiply(4, 7)



// Problem Name: Even or Odd
/* Python solution:
def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"
*/
// JavaScript Solution:
function evenOrOdd(num){
    if (num % 2 == 0){
        console.log("Even")
    } else{
        console.log("Odd")
    }
}
evenOrOdd(7)
evenOrOdd(10)



//Problem Name: Return the day
/*Python Solution:
def whatday(num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"
*/
// JavaScript Solution:
function whatDay(num){
    if (num == "1"){
        return("Sunday")
    } else if (num == "2"){
        return("Monday")
    } else if (num == "3"){
        return("Tuesday")
    } else if (num == "4"){
        return("Wednesday")
    } else if (num == "5"){
        return("Thursday")
    } else if (num == "6"){
        return("Friday")
    } else if (num == "7"){
        return("Saturday")
    } else{
        return("Wrong, please enter a number between 1 and 7")
    }
}
console.log(whatDay(4))
console.log(whatDay(7))
console.log(whatDay(8))

