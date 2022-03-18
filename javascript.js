

console.log ("töötab")

let items = [{title: "Ese1"}, {title:"ese2"}, {title:"ese3"}];

document.getElementById("lisa").addEventListener("click", ()=> {
    items.push({title: "ese" + (items.length + 1)});
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )

document.getElementsByClassName("header")[0].textContent = "Pealkiri";
let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;


document.getElementById("kustuta").addEventListener("click", ()=> {
    items.splice(0, 1)
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )



document.getElementById("nupp").addEventListener("click", ()=> {
    items.splice(items.length-1, 1)
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )


document.getElementById("muuda").addEventListener("click", ()=> {
    items [0] = { title: "Muudetud Ese"}
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )


document.getElementById("muuda2").addEventListener("click", ()=> {
    items [items.length-1] = "muudetud ese"
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )

document.getElementById("tyhjenda").addEventListener("click", ()=> {
    items = [];
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
} )


