const carouselEl = $('#carouselEl');

const carouselItem = $('<div>');
carouselItem.addClass('carousel-item');

const carouselImg = $('<img>');
const anime = require('animejs');

const homepageCarouselPoster= () => {
  

  $.ajax({
    url: '/',
    method: 'GET'
  })
  .then((response)=> {
    const posters = response.posters;
    posters.forEach((poster) => {
    carouselImg.attr("src", poster.poster_url);
    carouselEl.append(carouselItem);
    carouselItem.append(carouselImg);
  });
  })
  .catch((error)=> {
    console.log(error);
  });
};

homepageCarouselPoster();

// const button = $("#runaway-btn");

// const animateMove = (element, prop, pixels) =>
//   anime({
//     targets: element,
//     [prop]: `${pixels}px`,
//     easing: "easeOutCirc"
//   });

// ["mouseover", "click"].forEach(function (el) {
//   button.addEventListener(el, function (event) {
//     const top = getRandomNumber(window.innerHeight - this.offsetHeight);
//     const left = getRandomNumber(window.innerWidth - this.offsetWidth);

//     animateMove(this, "left", left).play();
//     animateMove(this, "top", top).play();
//   });
// });

// const getRandomNumber = (num) => {
//   return Math.floor(Math.random() * (num + 1));
// };

// animateMove();




//1. Create element
//2. Do something - change attr. src to poster_url from get ajax - use math. random 
//3.append to carouselItem to carouselEl 
//append img to carousel item