/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    
}
console.log('Hello World');

function isPrime(n) {
    if (n >=2){
        for (let i ==2; i < n; n++){
            if (n%i == 0){
                return false
            } 
        }
    } else {
        return false;
    }
}


function printPrimeNumber() {
}

function getNPrimes(n) {
}

function printNPrimes() {
}

window.onload = function() {
    greet();
    printPrimeNumber();
    printNPrimes();
    document.getElementById('nPrimes').innerHTML = isPrime(4);
};
