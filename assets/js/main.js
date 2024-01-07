console.log('hi');


// ------------------ SLIDER -------------------------

const slides = document.querySelectorAll('.swiper-slide');
const puginationElems = document.querySelectorAll('.swiper-pagination__el');

console.log('slides', slides);
console.log('puginationElems', puginationElems);

function delClass( arr, nameClass ) {
  
}

puginationElems.forEach((el) => {
  el.addEventListener('click', (e) => {

    puginationElems.forEach((el) => {
      el.classList.remove('swiper-pagination__el--active');
    });

    e.target.classList.add('swiper-pagination__el--active');

    slides.forEach((slide) => { 
      slide.classList.remove('swiper-slide--active');
    });

    let activeSlide =  slides[e.target];

    // activeSlide.classList.add('swiper-slide--active');
    console.log(activeSlide);

  })
});