const carouselEl = $('#carouselEl');

const carouselItem = $('<div>');
carouselItem.addClass('carousel-item');

const carouselImg = $('<img>');

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







//1. Create element
//2. Do something - change attr. src to poster_url from get ajax - use math. random 
//3.append to carouselItem to carouselEl 
//append img to carousel item