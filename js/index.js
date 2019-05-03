// Your code goes here
let busPicture = document.querySelector('img');
console.log(busPicture);

busPicture.addEventListener('mouseenter', function(fadeOut) {
  fadeOut.target.style.opacity = '0.4';
});

busPicture.addEventListener('mouseleave', function(fadeIn) {
  fadeIn.target.style.opacity = '1';
});
