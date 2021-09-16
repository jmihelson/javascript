// kui tavalised sulud () on mingi sõna järgi, siis see tähendab funktsiooni
// ülejäänud juhud on tehete jaoks

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




// viimane indeks on =
//-------- items.splice (items.lenght-1)
// ------- items [0] = "muudetud ese"

//muud viimane ese: HTMLi nupp
// tee copy-paste funktsioonist
//------ items [items.lenght-1] = "viimane ese"

//muud viimane ese: HTMLi nupp - tyhjenda
// tee copy-paste funktsioonist
//------ items [items.lenght-1] = "viimane ese"

// kui liidetakse string ja number, on tüübiks string
// kui liidetakse "raud" plus "tee" = raudtee
// kui liidetakse 3 plus t = 10
// kui liidetakse "32" plus 77 = "3277"

// liideti "ese" plus 3 = "ese3"
// liideti "ese3" plus 1 = "ese31"