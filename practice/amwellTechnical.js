const fetch = require("node-fetch");    // If using node: 'npm i node-fetch --save'
fetch("https://www.iwillfearnoevil.com/screen/string.txt")
.then((response) => response.text())
.then((response) => {
    
    const responseArray = response.split("\n");   // Get data into an array
    const result = responseArray.filter((value, index) => 
      parseInt(value) == value                    // Remove the Non-Integers
      && responseArray.indexOf(value) === index)  // Remove Duplicates
      .sort((a, b) => a - b)                      // Order the array from least to greatest
      .splice(0, 3);                              // Return the 3 lowest integers

    console.log(result);
});
