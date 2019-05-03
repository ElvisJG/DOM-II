// Your code goes here
let busPicture = document.querySelector('img');
console.log(busPicture);

// 1
busPicture.addEventListener('mouseenter', function(sepiaOn) {
  sepiaOn.target.style.filter = 'sepia(30%)';
});
// 2
busPicture.addEventListener('mouseleave', function(sepiaOff) {
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
