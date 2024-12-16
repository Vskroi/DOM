// document.getElementsByClassName("game-container")
// document.getElementsByTagName("p")
// document.getElementsByTagName("div")
// document.querySelector(".game-container").innerHTML = "query selector"  // class , id , tag name
//  document.querySelector("#game-container").innerHTML = "query selector"  // class , id , tag name
//  document.querySelector(".game-container").innerHTML = "query selector"  // class , id , tag name
 
// const card = document.createElement('div');
// const title = document.createElement("p");
// title.innerHTML = "Hello world from p tag";
 
// document.getElementById("game-container").appendChild(title);
// appendChild(element) add
 
// document.getElementById("game-container").removeChild(title)
 
// removeChild(element) Remove an
 
// replaceChild
 
// const newTitle = document.createElement("div");
// newTitle.innerHTML = "repleced element";
 
// document.getElementById("game-container").replaceChild(newTitle, title);
// // document.getElementById(id).onclick = function(){code}
 
// const parentDiv = document.getElementById("game-container");
 
// const button = document.createElement("p");
// button.innerHTML = "Click me";
 
// button.style.border = "1px solid red";
// button.style.padding = "5px";
 
// button.classList.add("buttun");
 
// parentDiv.appendChild(button);
 
// button.onclick = function () {
//   alert("clicked the button");
//   console.log("====================================");
//   console.log("clicked the button");
//   console.log("====================================");
// };
//
//     event name
 
// button.onmouseenter;
// button.addEventListener("mouseout", function () {
//   alert("Hello World!");
// });




//=========================================================================================================================================================================================================================================




// DOM Methods
// getElementById("id")
// getElementsByTagName("name")
// getElementsByClassName("className")
// setAttribute(attribute , value) change attribute
// createElement(element) create aa HTML element
// removeChild(element) Remove an
// appendChild(element) add
// replaceChild(new, old) replace
// write(text)
// document.getElementById(id).onclick = function(){code}   add event handlers
// querySelectorAll("
// ")
 
// DOM Property
// innerHTML  change or get content
// attribute  change or get attribute
// style.property change or get style
// onclick=script
 
// DOM Navigate
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
 
// Examples
 
// document.getElementById("p2").style.color = "blue";
// document.getElementById("myBtn").onclick = displayDate;
// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// element.removeEventListener("mousemove", myFunction);
// Most browsers return a NodeList object for the method querySelectorAll().
 
// DOM
// Document
 
// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag

//onst card = document.createElement('div');
//document.getElementById('container').innerHTML = 'hello world'
const container2 = document.getElementById("container");
const newPTag = document.createElement("p");
newPTag.innerHTML = "hello";
document.getElementById("container").appendChild(newPTag);
const newDivTag = document.createElement("div");
newDivTag.innerHTML = "hello div";
document.getElementById("container").appendChild(newDivTag);
newDivTag.style.color = 'green'
newDivTag.style.fontSize = '60px'
newDivTag.addEventListener('mouseenter', () =>{
    newDivTag.style.color = 'red'
})
newDivTag.addEventListener('mouseout', () =>{
    newDivTag.style.color = 'green'
})
newDivTag.addEventListener('click', () =>{
    newDivTag.style.color = 'black'
})

