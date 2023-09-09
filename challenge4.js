// Start with an array of hobbies. Print out only the words that end in "ing".
//  Overall goal to gor through the array of strings using for loop method.
// Make the program to identify ending in every string using built in endWith() method.
// Print out the ones that are true to the statement.

var hobbies = ["cooking", "painting", "music", "driving", "dance"];
for (i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i].endsWith("ing"));
}

//  with code above I was able to print out true/true/false/true/false
// Requirement is to print the string value out.
//  need to add if statement
var hobbies = ["cooking", "painting", "music", "driving", "dance"];
for (i = 0; i < hobbies.length; i++) {
    if (hobbies[i].endsWith("ing"));
    console.log(hobbies[i])
}  

// above code kept returning every single string
// without errors indicating an issue
// I reached out to Cameron who was available online on the weekend and shared my code with logic.
// During slack pairing we've found that I was missing curly braces at the end of the if statemet.
// Awesome learnig  experience!
// Kudos to Cameron Johnson 2310 FE!

var hobbies = ["cooking", "painting", "music", "driving", "dance"];
// defines array of stirngs
for (i = 0; i < hobbies.length; i++) {
// looping through the array
    if (hobbies[i].endsWith("ing")) {
// identifies the ones with matching ending
    console.log(hobbies[i])
// prints out if true
}  
}