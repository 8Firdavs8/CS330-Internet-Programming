/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';


/* 
Firdavs Atabaev
CS330: Project1
Professor: Yasinovskyy
*/

var screen;


  

function enterDigit(digit) {
    //screen.innerHTML = digit;
    let currentDigit = (document.querySelector("#result")).textContent;
    //let numToDig = currentDigit.textContent();
    let number = currentDigit.toString() + digit.toString();
    screen.innerHTML = number; 
   
};

function clear_screen() {
    screen.innerHTML = '';
};

function eval_expr() {
    let firstCalc = (document.getElementById("result")).textContent;
    //let firstCalcToNum = firstCalcToNum.Number();
    //console.log(firstCalcToNum);
    let evaluate = eval(firstCalc.toString());
    //let number = number(evaluate);
    screen.innerHTML = evaluate;
   


};

function enterOp(operation) {
    //screen.innerHTML = operation;
    let currentOperand = (document.querySelector("#result")).textContent;
    let operand = currentOperand.toString() + operation.toString();
    screen.innerHTML = operand;
};

window.onload = function () {
    screen = document.querySelector("#result");
    screen.innerHTML = "0";
   
};
