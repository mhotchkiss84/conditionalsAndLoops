// var likesToTravel = true;

// // Checking if likesToTravel is equal to true
// if (likesToTravel === true) {
//     console.log("Bon voyage");
// } else {
//     console.log("Enjoy your couch.");
// }

// // Testing not true with !=
// if (likesToTravel !== true){
//     console.log("Enjoy your couch");
// } else {
//     console.log("Bon voyage")
// }


// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// var favoriteFood = "pepperoni rolls";
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.
// if(favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls"){
//     console.log("Congratulations! you have excellent taste!");
// } else{
//     console.log("Clearly you have not tried fried pickles or pepperoni roles");
// }


// Check your math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
if(1 + 1 > 5){
    console.log("True fact");
} else {
    console.log("Lies");
}
// Is the product of 4 and 5 less than our equal to 20?
if(4 + 5 <= 20){
    console.log("True Fact");
} else{
    console.log("Lies");
}
// Is the difference between 6 and 2 greater than or equal to 0?
if(6 - 2 >= 0){
    console.log("True Fact");
} else{
    console.log("Lies");
}

// Dog People vs. Cat People
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
var likesDogs = true;
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console
if(likesDogs === true){
    console.log("You're a dog person!");
} else{
    console.log("You're a cat person!");
}

// Generation Gaps
// Declare a variable called birthYear and set it equal to your birth year.
var birthYear = 2000;
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
if(birthYear >= 1966 && birthYear <= 1976){
    console.log("You were born in during Generation X");
} else if (birthYear >= 1977 && birthYear <=1994){
    console.log("You were boen during Generation Y");
} else if (birthYear >= 1995 && birthYear <= 2012){
    console.log("You were born during Generation Z");
}
// Try changing the value of birthYear and see what happens.

// Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
var aPerson = {name: "Mike Hotchkiss", prefLanguage: "English"};
// Write a conditional that checks for the following:
// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.
if(aPerson.prefLanguage === "English"){
    console.log(`Hello, ${aPerson.name}`);
} else if(aPerson.prefLanguage === "Spanish"){
    console.log(`Hola, ${aPerson.name}`);
} else if(aPerson.prefLanguage === "French"){
    console.log(`Bonjour, ${aPerson.name}`);
}

// Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
var time = "7:00 PM";
// A variable called isHungry that stores a boolean representing whether or not you're hungry
var isHungry = true;
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
if (time === "7:30 AM" && isHungry === true){
    console.log("Time for breakfast");
} else if (time === "12:00 PM" && isHungry === true){
    console.log("Time for lunch!");
} else if (time === "7:00 PM" || time === "8:00 PM"){
    if (isHungry === true){
    console.log("Time for dinner");
    }
} 
// Try changing the values of your variables. You should get different results every time you change them