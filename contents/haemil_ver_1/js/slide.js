(function () {

  //* SLIDE
  var imageSlideIndex = 1;

  var imageSlideTimer = function () {
    plusImageSlides(1);
  }
  var imageTimer = setInterval(imageSlideTimer, 3000);

  var plusImageSlides = function (n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex += n);
  }
  var currentImageSlide = function (n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex = n);
  }


  var showImageSlides = function (n) {
    var slides = document.getElementsByClassName('image_slide');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) { imageSlideIndex = 1 }
    if (n < 1) { imageSlideIndex = slides.length }

    for (var i = 0; i < slides.length; i++) {
      // slides[i].setAttribute('class', 'none');
      // slides[i].style.display = 'none';
      slides[i].classList.add('none');

    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    // slides[imageSlideIndex - 1].setAttribute('class', 'show');
    // slides[imageSlideIndex - 1].style.display = 'block';
    slides[imageSlideIndex - 1].classList.remove('none');
    dots[imageSlideIndex - 1].className += ' active';
  }


  function init() {
    showImageSlides(imageSlideIndex);

    document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1));
    document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1));

    document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
    document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
    document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
  }

  init();

})()