console.log("Hello there");

function paint(the_color){
    let header = document.querySelector('h1');
    header.setAttribute("style", `color:${the_color}`);
}