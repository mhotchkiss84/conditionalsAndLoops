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

// Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
var grade = 90;
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.
if (grade <= 69){
    console.log("You got an F");
} else if (grade >= 70 && grade <= 76){
    console.log("You got a D");
} else if (grade >= 77 && grade <= 84){
    console.log("You got a C");
} else if (grade >= 84 && grade <= 92){
    console.log("You got a B");
} else if (grade >= 93 && grade <= 100){
    console.log("You got an A");
}

// Loops while bored 

var i = 1;
while(i < 20){
    console.log("Hello, world!");
    i++;
}

var moviesArray = ["Pulp Fiction", "Snatch", "Midway"];
var i = 0 ;

while(i < moviesArray.length){
    console.log(moviesArray[i]);
    i++;
}

// Lightning Exercise
// Psychotic Bird
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.

var i = 0;

while(i != 100){
    console.log("TWEET TWEET");
    i++;
}
// Bird For Loop
for(var i = 0; i != 100; i++){
    console.log("TWEET TWEET");
}

// In your JavaScript, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
var favoriteFoods = ["Pizza", "Tacos", "Steak", "Potatoes", "Pasta"];
// Loop through the array and print each food item to the console.
for(var i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i], "is at position", i);
}


// Student Names
// In your JavaScript file, copy and paste the following array:
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];
// Use a for loop to print each student's name to the console.
for(var i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}

// Interests
// In your JavaScript file, create an array of 5 of your interests.
var myInterests = ["Hockey", "Cats", "Computers", "Coding", "Cartoons"];
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
for(var i = 0; i < myInterests.length; i++){
    if(myInterests[i] === "Hockey"){
        console.log("I love ", myInterests[i])
    } else {
    console.log("One of my interests is ", myInterests[i],);
    }
}
// Favorite Interest
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.

// Harry Potter Titles
// Copy and paste the following array into your JavaScript file:
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// Use a for loop to output the complete titles to the console.