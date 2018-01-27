// ==UserScript==
// @name       CLAM to STEEM Shapeshift Calculator 
// @author         xerohour (https://github.com/xerohour/)
// @homepage   https://github.com/xerohour/clams_steem
// @require    http://code.jquery.com/jquery-latest.min.js
// @match      https://blocktrades.us/*
// @copyright  2018+, xerohour
// @version    0.1
// @description This project is about making it easier for a user to convert CLAMCOIN into Steem through ShapeShift.io and blocktrades.us This project helps the user decide which altcoin will give you the best return when using Shapeshift and Blocktrades.
// ==/UserScript==


$(document.body).append (
    '<iframe src="https://xerohour.github.io/clams_steem/">'
);

//need help with intergration with blocktrades
//    var x =document.getElementsByName("inputCoinAmount")[0].value;
//    console.log(x);


//var els=document.getElementsByName("inputCoinAmount");
//console.log(els.value);
//for (var i=0;i<els.length;i++) {
//els[i].value = "5";}

