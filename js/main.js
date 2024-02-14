/* Name: Gurjot Singh 
   Student Number: 200555982
   Lab-2*/

/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    // Loop through the three range inputs and for each one, add an onchange event listener
    sliders[i].onchange = function () {
        // If an input range slider is moved, grab its id attribute value
        var whichSlider = this.getAttribute("id");
        // Also, grab the numerical value that it is set to
        var sliderValue = this.value;
        // Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
        var newRgb = changeRgb(whichSlider, sliderValue);
        // Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
        var newCSS = writeCSS(newRgb);
        // Directly change the background-color of the page using the new CSS rgb value
        pageBg.style.backgroundColor = newCSS;
       
       
        // Check if all sliders are at maximum value (255) and if so, change text color to black
        // This is an extra thing done so as to see the text when all the sliders are fully slid
        if (newRgb[0] == 255 && newRgb[1] == 255 && newRgb[2] == 255) {
            pageBg.style.color = "black";
        } else {
            // Reset text color to default (usually black)
            pageBg.style.color = "";
        }
    };
}

/* Functions */

// Write a function called changeRgb that accepts two parameters, channel and value
function changeRgb(channel, value) {
    // Build a switch based on the value of the channel parameter (red, green, or blue)
    switch (channel) {
        case "red":
            // Inside each case, update the appropriate global rgb array element (0, 1, or 2)
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    // Return the updated rgb array back to the event handler
    return rgb;
}

// Write a new function called writeCSS that accepts one parameter, the updated rgb array
function writeCSS(newRgb) {
    /* Declare a new local variable called newColor that will contain the new string that will be used to update the CSS 
    background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb(' */
    var newColor = 'rgb(';

    //Create a while loop that iterates through the array passed into this function, called newRgb
    var i = 0;
    while (i < newRgb.length) {
        // For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ',';
        }
        i++;
    }
    // Finish off the newColor string by adding the closing ')'
    newColor += ')';
    // Return the string newColor back to the event handler
    return newColor;
}

//Enjoy the application in your browser!
//Cheers :)