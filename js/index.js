// Your code goes here
let busPicture = document.querySelector('img');
console.log(busPicture);

// 1
busPicture.addEventListener('mouseenter', sepiaOn => {
  sepiaOn.target.style.filter = 'sepia(30%)';
});
// 2
busPicture.addEventListener('mouseleave', sepiaOff => {
  sepiaOff.target.style.filter = 'sepia(0%)';
});

let funBusH1 = document.querySelector('h1');
console.log(funBusH1);
// 3
funBusH1.addEventListener('click', event => {
  funBusH1.innerHTML = 'Yikes';
  event.stopPropagation();
});
// 4
funBusH1.addEventListener('dblclick', event => {
  funBusH1.innerHTML = 'Fun Bus';
  event.stopPropagation();
});

let boat = document.querySelector('.boat');
console.log(boat);
let destinationHeader = document.querySelector('.content-destination h2');
console.log(destinationHeader);

// 5
boat.addEventListener('dragstart', event => {
  destinationHeader.innerHTML = 'PUT IT BACK! 😌';
});
// 6
boat.addEventListener('dragleave', event => {
  destinationHeader.innerHTML = 'Where are you taking this 🧐';
});
// 7
boat.addEventListener('dragend', event => {
  destinationHeader.innerHTML = 'Pick Your Destination';
});

let button1 = document.getElementsByClassName('btn').item(0);
let button2 = document.getElementsByClassName('btn').item(1);
let button3 = document.getElementsByClassName('btn').item(2);
console.log(button1);
console.log(button2);
console.log(button3);

// 8
button1.addEventListener('mouseover', event => {
  button1.innerHTML = 'Hi 👋🏽';
});
button2.addEventListener('mouseover', event => {
  button2.innerHTML = 'There 👉🏽';
});
button3.addEventListener('mouseover', event => {
  button3.innerHTML = 'Cowboy 🤠';
});

// 9
let content = document.querySelector('.content-section');
console.log(content);

content.addEventListener('wheel', event => {
  content.style.backgroundColor = '#FFEBCD';
});

// 10
let onLoadAlert = alert('Sign up for ours Newsletter!');

window.addEventListener('load', event => {
  onLoadAlert;
});

// Prevent Default

let navThing = document.querySelectorAll('.nav-link');
console.log(navThing);

for (let i = 0; i < navThing.length; i++) {
  navThing[i].addEventListener('click', event => {
    event.preventDefault();
  });
}
