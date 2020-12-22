/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';


async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
};

async function get_individual(num, all_numbers) {

    let allNumbers = document.querySelector('#number_info');

    for (let i = num - 1; i <= num + 1; i++) {

        let info = await getData(`http://numbersapi.com/${i}?json`);

        let infoPar = document.createElement("div");
        infoPar.classList.add("row");
        infoPar.style.color = "red";

        let numberColumn = document.createElement("div");
        numberColumn.classList.add("col-3", "number-col");
        numberColumn.innerText = i;
        infoPar.appendChild(numberColumn);
        numberColumn.style.color = "blue";

        let infoColumn = document.createElement("div");
        infoColumn.classList.add("col-9", "info-col");
        infoColumn.innerText = info["text"];
        infoPar.appendChild(infoColumn);

        allNumbers.appendChild(infoPar);
;
    }
    


};

async function get_batch(num, all_numbers) {

    let allNumbers =  document.querySelector('#number_info');

    let checkBox = await getData(`http://numbersapi.com/${num - 1}..${num + 1}?json`);
    
    for (let i = num - 1; i <= num + 1; i++) {
        let infoPar = document.createElement("div");
        infoPar.classList.add("row")

        let numbersColumn = document.createElement("div");
        numbersColumn .classList.add("col-3", "number-col");
        numbersColumn .innerText = i;
        infoPar.appendChild(numbersColumn);

        let infoColumn = document.createElement("div");
        infoColumn.classList.add("col-9", "info-col");
        infoColumn.innerHTML = checkBox[i];
        infoPar.appendChild(infoColumn);

        
        allNumbers.appendChild(infoPar);
    };


};

async function clickedon() {
    clear();
    let num = parseInt(document.querySelector('#number').value);
    let allNumbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        await get_batch(num, allNumbers);
    } else {
        await get_individual(num, allNumbers);
    };
};


function clear() {
    let allNumbers = document.querySelector('#number_info');
    allNumbers.innerHTML = "";
};

