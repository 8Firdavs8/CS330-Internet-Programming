/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';


async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

async function get_individual(num, all_numbers) {

    let allTheNumbers =  document.querySelector('#number_info');

    for (let i = num - 1; i <= num + 1; i++) {

        let info = await getData(`http://numbersapi.com/${i}?json`);

        let infoPar = document.createElement("p");
        infoPar.classList.add("row");

        let numberColumn = document.createElement("p");
        numberColumn.classList.add("col-3", "number-col");
        numberColumn.innerText = i;
        infoPar.appendChild(numberColumn);

        let infoColumn = document.createElement("p");
        infoColumn.classList.add("col-9", "info-col");
        infoColumn.innerText = info["text"];
        infoPar.appendChild(infoColumn);

        allTheNumbers.appendChild(infoPar);

    }
    


}

async function get_batch(num, all_numbers) {

    let allTheNumbers =  document.querySelector('#number_info');

    let checkBox = await getData(`http://numbersapi.com/${num - 1}..${num + 1}?json`);
    
    for (let i = num - 1; i <= num + 1; i++) {
        let infoPar = document.createElement("p");
        infoPar.classList.add("row")

        let numbersColumn = document.createElement("p");
        numbersColumn .classList.add("col-3", "number-col");
        numbersColumn .innerText = i;
        infoPar.appendChild(numbersColumn);

        let infoColumn = document.createElement("p");
        infoColumn.classList.add("col-9", "info-col");
        infoColumn.innerHTML = checkBox[i];
        infoPar.appendChild(infoColumn);

        
        allTheNumbers.appendChild(infoPar);
    }


}

async function clickedon() {
    clear();
    let num = parseInt(document.querySelector('#number').value);
    let allTheNumbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        await get_batch(num, allTheNumbers);
    } else {
        await get_individual(num, allTheNumbers);
    }
}

function clear() {
    let allTheNumbers = document.querySelector('#number_info');
    allTheNumbers.innerHTML = "";
}
