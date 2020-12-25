// Slider

$(document).ready(function () {

  $('#addressSlider').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 6000,
  });

  $(".owl-prev").html('<i class="icon"><img src="img/nav-left.svg" /></i>');
  $(".owl-next").html('<i class="icon"><img src="img/nav-right.svg" /></i>');

});


// svg convert

const convertImages = (query, callback) => {
  const images = document.querySelectorAll(query);

  images.forEach(image => {
    fetch(image.src)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (image.id) svg.id = image.id;
        if (image.className) svg.classList = image.classList;

        image.parentNode.replaceChild(svg, image);
      })
      .then(callback)
      .catch(error => console.error(error))
  });
}

convertImages('img');

// Sticky Header

$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();

  if (scroll >= 250) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

// Mobile Menu

function navToggle() {
  var element = document.getElementById("navbarNav");
  element.classList.toggle("show");

  var element = document.getElementById("navbarToggle");
  element.classList.toggle("show");
}

// Header & Footer Link

$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});