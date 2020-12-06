/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

var urlParams = new URLSearchParams(window.location.search);

function greet() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let greetElement = document.querySelector('h1');
    if (urlParams.get("name") > ""){
        greetElement.innerHTML = 'Hello' + " " + urlParams.get("name");
       
    }  
    else{
        greetElement.innerHTML = 'Hello student';
    }

}

function isPrime(n) {
    if (n == 2){
        return true;     
    }else if (n%2 ===0) {
        return false;
    } else {
        return true;
    } 
}

function printPrimeNumber() {
    
    const queryNumber = window.location.search;
    const urlParams = new URLSearchParams(queryNumber);
    let printElement = document.querySelector("p");
    let n = urlParams.get("n");
    
    if (isPrime(n) == true){
        printElement.innerHTML = n + " is a prime number";
    }else {
        printElement.innerHTML = n + " is not a prime number";
    } 
}

function getNPrimes(n) {

   const primeList = [];
   let i = 2;
   while(primeList.length < n){
      if(isPrime(i)){
         primeList.push(i);
      };
      i = i === 2 ? i+1 : i+2;
   };
   return primeList;
}


function printNPrimes() {
    const queryNumber = window.location.search;
    const urlParams = new URLSearchParams(queryNumber);
    let primeElement = document.querySelector("table");
    //primeElement.innerHTML = urlParams.get("n");

    let n = urlParams.get("n");
    let y = [getNPrimes(n)];
    
    for (let i = 0; i<y.length; i++){
        primeElement.innerHTML = y[i];
       
    }
}


window.onload = function() {
    this.greet();
    this.printPrimeNumber();
    this.printNPrimes();
};

