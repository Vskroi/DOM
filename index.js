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
const bigDiv = document.getElementById('container')
bigDiv.style.alignContent = 'center'
const containerDiv = document.createElement("div");
containerDiv.style.height = '400px'
containerDiv.style.width = '500px'
containerDiv.style.borderRadius = '20px'
containerDiv.style.background = '#F0F8FF'
containerDiv.style.margin = 'auto'
containerDiv.style.display = 'flex'
containerDiv.style.flexDirection = 'column'
document.getElementById("container").appendChild(containerDiv);
const logIn = document.createElement('h1')
logIn.innerHTML = 'Log in'
logIn.style.paddingTop = '40px '
logIn.style.paddingLeft = '40px '
containerDiv.appendChild(logIn)

const emailInput = document.createElement('input')
emailInput.style.paddingLeft = '40px '
emailInput.style.width = '80% '
emailInput.style.height = '30px'
emailInput.style.marginLeft = 'auto'
emailInput.style.marginRight = 'auto'
emailInput.style.color = 'black'
emailInput.type = 'Email'
emailInput.style.borderRadius = '5px'
emailInput.placeholder = 'email'
containerDiv.appendChild(emailInput)
const email = document.createElement('p')
email.style.paddingTop = '10px '
email.style.paddingLeft = '40px '
email.style.margin = '0px'
containerDiv.appendChild(email)

const passwordInput = document.createElement('input')
passwordInput.style.paddingLeft = '40px'
passwordInput.style.width = '80% '
passwordInput.style.height = '30px'
passwordInput.style.marginLeft = 'auto'
passwordInput.style.marginRight = 'auto'
passwordInput.type = 'password'
passwordInput.style.borderRadius = '5px'
passwordInput.placeholder = 'Password'
passwordInput.style.marginTop = '30px'
containerDiv.appendChild(passwordInput)
const password = document.createElement('p')
password.style.paddingTop = '10px '
password.style.paddingLeft = '40px '
password.style.margin = '0px'
containerDiv.appendChild(password)
//emailInput.addEventListener('keydown',()=>{
//    console.log(emailInput.value)
//    if (emailInput.value.includes('@')){
//        console.log(true)
//    }
//    else{console.log(false)}
//})
const button = document.createElement('button')
button.innerHTML = 'Log in'
button.style.paddingLeft = '40px'
button.style.marginTop = '30px'
button.style.width = '80% '
button.style.height = '50px'
button.style.background = '#6CB4EE'
button.style.borderRadius = '12px'
button.style.borderColor = '#6CB4EE'
button.style.marginLeft = 'auto'
button.style.marginRight = 'auto'
containerDiv.appendChild(button)
button.addEventListener('mouseenter', () =>{
    button.style.background = '#7CB9E8'
})
button.addEventListener('mouseout', () =>{
    button.style.background = '#6CB4EE'
})

button.addEventListener('click',()=>{
    if(emailInput.value.includes('@')){
        emailInput.style.color = 'green'
        email.style.color = 'green'
        email.innerHTML = 'Thanks'
        console.log(true)
    }
    else{
        
        emailInput.style.color = 'red'
        console.log(false)}
})
button.addEventListener('click',()=>{
    if(passwordInput.value.length <= 8){
        passwordInput.style.color = 'green'
        password.style.color = 'green'
        password.innerHTML = 'Thanks'
        console.log(true)
    }
    else{
        
        passwordInput.style.color = 'red'
        console.log(false)}
})

