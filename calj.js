  //amount of times clicked
let count = 0
let val1 = ""
let val2 = ""
//function runs when any number is clicked
function number(number_value){
    set_number_value(number_value, val1)
    //console.log(number_value)
}
//clears whatever was clicked
//  let final = document.getElementById("ei").innerHTML = val1
//take in number
//if numberString is more than 10 digits long
//add the number to the end of a number string

function set_number_value(number, value){
    if(value.length < 10){
        value = value + number
    }
   //console.log(number)
   document.getElementById("ei").innerHTML = val1
}
function c(){
    window.location("file:///C:/Users/moshe_utzfyrr/OneDrive/Documents/md.html")
}