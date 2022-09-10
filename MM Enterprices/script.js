$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

let section = document.querySelector(".container");
let counters = document.querySelectorAll(".counter");
let speed = 500;
let isDone = false;
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}

function initCounter() {
  const myElement = document.getElementById("our-journey");
  console.log('done')

  if (!elementInViewport(myElement) && isDone) return;
  counters.forEach((counter) => {
    const updateCount = (e) => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
      isDone = true;
      window.removeEventListener('scroll', counterTimeout)
    };
    updateCount();
  });
}

const counterTimeout = () => setTimeout(initCounter, 1000);

window.addEventListener("scroll", counterTimeout);
// window.removeEventListener('scroll'.isDone)

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
}) 