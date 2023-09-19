"use strict"

let dragElem = document.getElementById("drag-elem");
let dropElem = document.getElementById("drop-elem");
let dragElem2 = document.getElementById("drag-elem2");
let dragElem3 = document.getElementById("drag-elem3");
let dragElem4 = document.getElementById("drag-elem4");
let dragElem5 = document.getElementById("drag-elem5");
let dragElem6 = document.getElementById("drag-elem6");

dragElem.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}

dropElem.ondragover = (e) => {
    e.preventDefault();
}

dropElem.ondrop = (e) => {
    let id = e.dataTransfer.getData("id");

    let elem = document.getElementById(id);

    e.target.append(elem)
}

dragElem2.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}

dragElem3.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}

dragElem4.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}

dragElem5.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}

dragElem6.ondragstart = (e) => {
    let id = e.target.getAttribute("id");
    e.dataTransfer.setData("id", id);
}




