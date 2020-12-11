
/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];

function addTask() {
    let vals = [];
    let rowcolids = ["title", "assignedTo", "priority", "dueDate"];

    for (let cid of rowcolids) {
        vals.push(document.getElementById(cid).value.toLowerCase());
    };

    addRow(vals, document.getElementById("taskList"));
};

function addRow(valueList, parent) {
    let row = document.createElement("tr");
    let td = document.createElement("td");
    let cb = document.createElement("input");
    row.classList.add(document.getElementById("priority").value.toLowerCase());
    cb.type = "checkbox";
    cb.classList.add("checkbox");
    row.appendChild(cb);

    for (let val of valueList) {
        let td = document.createElement("td");
        td.innerHTML = val;
        row.appendChild(td);
    };


    parent.appendChild(row);
};

function removeRow() {
    let myRow = addRow();
    myRow.remove();
    



    // https://stackoverflow.com/questions/26512386/remove-current-row-tr-when-checkbox-is-checked
};
// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(function () {
   
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms);
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          };
  
          form.classList.add('was-validated');
        }, false);
      });
  })();
  
*/

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
    };
};


window.onload = function() {
    populateSelect("assignedTo", team);
    populateSelect("priority", priority);
};



