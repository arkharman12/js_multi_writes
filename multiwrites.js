/**********
TITLE: Multi-Writes
AUTHOR: Harmanjot Singh (HS)
PURPOSE: To explore three different ways to send output using JavaScript
ORIGINALLY CREATED ON: 19 Jan 2019
LAST MODIFIED ON: 19 Jan 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var strMessageOne = ".textContent: Arrr, me major be Computer Science!"; //storing my message in a variable
    var elOutput = document.getElementById("textContentOutput"); //grabbing the HTML id element
    elOutput.textContent = strMessageOne; //replacing the old id element with my new message
				
}); 

$(document).ready(function(){
    var strMessageTwo = ".innerHTML: Yo-ho-ho! I was born and raised in <strong>India</strong>."; //storing my message in a variable
    var elOutput = document.getElementById("innerHtmlOutput"); //grabbing the HTML id element
    elOutput.innerHTML = strMessageTwo; //replacing the old id element with my new message
				
}); 

