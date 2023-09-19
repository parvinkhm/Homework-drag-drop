"use strict"

// let rightIcon = document.querySelector(".slider-area .slider .icons i:nth-child(2)");

// let leftIcon = document.querySelector(".slider-area .slider .icons i:nth-child(1)");



// function rightSlider() {
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.nextElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.nextElementSibling.classList.add("active-slider");
//     } else {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider");
//     }
// }

// rightIcon.addEventListener("click", rightSlider)
// leftIcon.addEventListener("click", leftSilder)

// function leftSilder() {
//     let activeSlider = document.querySelector(".active-slider");
//     if (activeSlider.previousElementSibling != null) {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.previousElementSibling.classList.add("active-slider");
//     } else {
//         activeSlider.classList.remove("active-slider");
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider")
//     }
// }

// setInterval(() => {
//     rightSlider();
// }, 1000);

// setTimeout(() => {
//     console.log("Hello world");
// }, 3000);

// let a = document.querySelector("a");

// let fileInput = document.querySelector("input");

// a.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(e.target.innerText);
// })


// fileInput.addEventListener("change", function(e){
//     console.log(e);
// })

// let dragElem = document.getElementById("drag-elem");
// let dropElem = document.getElementById("drop-elem");

// dragElem.ondragstart = () => {
//     console.log("drag start");
// }

// dragElem.obdrag = () =>{
//     console.log("dragging");
// }

// dragElem.ondragen = () =>{
//    console.log("drang eng");     
// }

let dragElem = document.getElementById("drag-elem");
let dropElem = document.getElementById("drop-elem");

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


