/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';
const connectionTypes = ["Chips and Guakamoli", "Lettuce Salad with French topping", "Fried Shrimp", "Fried Onion Rings", "Hot Bread on Garlic Souce"];
const colors = ["New York Style Steak", "Cold Smoked Salmon wrapped in hot bread", "Fried Fish with French Salad", "Dutch Cheese with Mushed potato"];
const drinkType = ["Coca-cola", "Pepsi-Cola", "Mount-Due", "Ice-Tea", "Water"] 

var myLabModel = new ComputerLab(10);
var myLabView = new LabView(myLabModel);

function populateSelect(selectElement, options) {
    for (let opt of options) {
        let anOption = document.createElement("option");
        anOption.setAttribute("value", opt);
        anOption.innerHTML = opt;
        selectElement.appendChild(anOption);
    }

}

function addMouse() {
    if (!document.querySelector("#newMouse").checkValidity()) {
        let warning = document.createElement("p");
        warning.setAttribute("class", "alert alert-warning");
        warning.innerText = "Please select a table number";
        document.getElementById("Validation").appendChild(warning);
        return;
    }

    let buttons = document.querySelector("#mouseButtons").value;
    let connectionType = document.querySelector("#mouseConnection").selectedOptions[0].value;
    let color = document.querySelector("#mouseColor").selectedOptions[0].value;
    let drinkType = document.querySelector("#drinkName").selectedOptions[0].value;
   /* let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("checkbox");
    row.appendChild(cb);
    */

    // Add to the model
    let newMouse = new ComputerMouse(buttons, connectionType, color, drinkType);
    myLabModel.add(newMouse);
}

window.onload = function() {
    populateSelect(document.querySelector("#mouseConnection"), connectionTypes);
    populateSelect(document.querySelector("#mouseColor"), colors);
    populateSelect(document.querySelector("#drinkName"), drinkType);

};
