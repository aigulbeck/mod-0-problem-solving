// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// Overall goal is to loop through ALL of the strings in the array and print out 
// ALL of the words in lowe case.
// Easiest solution is to utilize built in method toLowerCase embedded with for loop.

var favoriteFood = ["SamoSa", "bAklavA", "Paella"];
for ( var i = 0; i < favoriteFood.length;  i++) {
   console.log(favoriteFood[i].toLowerCase());
}
