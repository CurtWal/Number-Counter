'use strict'
console.log("working");

// grab the buttons and counter ids
let number = document.getElementById("number");
// grab all the class ids that start with button
let buttons = document.querySelectorAll('.button');

// let the counter start from 0
let count = 0;

//  On button click increase or decrease the number count
buttons.forEach(function (button){
    button.addEventListener("click", function (event){

            // let style equal event.currentTarget so that it can decrease increase reset and change the color of the numbers
        const style = event.currentTarget.classList;
        // if the user clicks decrease the count will go down
        if (style.contains("decrease")){
            // subtract 1 from count
            count--;
            console.log(count);
        }
        // if the user clicks increase the count will go up
        else if (style.contains('increase')){
            // add 1 to count
            count++;
            console.log(count);
        }
//    if the user clicks reset the count will go back to 0
        else{
            // reset count back to 0
            count = 0;
            console.log(count);
        }
        // if the count is greater then 0 it will change color to blue
        if (count > 0){
            number.style.color = "blue";
            console.log(number.style.color);
        }
        // if the count is less than 0 it will change red
        if (count < 0){
            number.style.color = "red";
            console.log(number.style.color);
        }
        // when the count is 0 it will be black
        if (count === 0){
            number.style.color = "black";
            console.log(number.style.color);
        }
        // write the count number to the html doc
        number.textContent = count;
    })
})