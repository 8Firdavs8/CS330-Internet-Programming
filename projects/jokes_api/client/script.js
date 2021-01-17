/* jshint esversion: 8 */
'use strict';

/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict'

const BASE_URL = "http://localhost:5000/api/v1/jokes"

async function requestData(typeOfData) {
    return fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(json => printData(json[typeOfData]))
    .catch(error => console.log(error))
}
async function requestSpecificData(typeOfData) {
    let number = document.getElementById("number").value
    return fetch(`${BASE_URL}/${number}`)
    .then(response => response.json())
    .then(json => printData(json[typeOfData]))
    .catch(error => console.log(error))
    
}

function printData(data) {
    
    let responseDiv = document.querySelector("#response");
    responseDiv.innerHTML = data;
}



