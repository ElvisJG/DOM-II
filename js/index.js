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
});
// 4
funBusH1.addEventListener('dblclick', event => {
  funBusH1.innerHTML = 'Fun Bus';
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

let buttons = document.getElementsByClassName('.btn');
console.log(buttons);

// 8
