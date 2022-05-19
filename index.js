/* This code snippet selects the button and adds an event listener to it.*/
let btn = document.querySelector("button");
btn.onclick = greetUser;

/* Event handler that takes the value of the input and inserts the value 
into the empty paragrph node */
function greetUser (){
    let userName = document.querySelector("input").value;
    document.querySelector("p").innerHTML = `Welcome, ${userName}!`;
}
