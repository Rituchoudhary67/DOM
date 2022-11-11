// selectors
// 1.by-tag-name
const collection = document.getElementsByTagName("li");
console.log(collection)
//2.by-class-name
const color = document.getElementsByClassName("red");
console.log(color)
//3.by-id-name
const element = document.getElementById("eleid")
console.log(element)
//4.by-query-selector
const singleelement = document.querySelector("p")
console.log(singleelement)
const information = document.querySelector(".info");
console.log(information)  
//5.by-query-selectorall
const allelemnet = document.querySelectorAll("pre")
console.log(allelemnet)