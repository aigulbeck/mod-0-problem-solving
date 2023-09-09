// Given an array of strings, print only the strings that have exactly 4 characters.
// Overall goal is to go through the array and make the program to count characters.
// Solution is to utilize loop first and make program to count through characters in every string.
// Once the count is done to print out only the ones that are strictly eqaul to 4.


var colors = ["Pink", "Yellow", "Red", "Blue"];
for (i = 0; i < colors.length; i++) {
    if (colors[i].length === 4) {
        console.log(colors[i])
    }
}
