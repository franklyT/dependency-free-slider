/* Vars */

var carousel = {options: {}, slides: {}, controls: {}, touch: {}};

carousel.slides.activeSlide = document.getElementsByClassName('template');
carousel.slides.activeSlideIndicators = document.getElementsByClassName('carousel-indicators')[0].children;
carousel.slides.autoSlideIntervalContainer = null;

carousel.controls.leftControl = document.getElementById("leftControl");
carousel.controls.rightControl = document.getElementById("rightControl");

carousel.touch.touchStartLocation = null;
carousel.touch.touchXDown = null;

/* Options */

/* # stars printed, default '5', set to '0' to disable */
carousel.options.starCount = 5;
/* seconds between auto slides, default '10', set '0' to disable */
carousel.options.autoSlide = 10;
/* allow touch slide, default 'true' */
carousel.options.touchSlide = true;
/* motion blur, default 'true' */
carousel.options.motionBlur = true;

/* Modules */

/* Blur */
document.addEventListener("DOMContentLoaded", () => {
if (carousel.options.motionBlur) Array.from(carousel.slides.activeSlide).forEach((element) => {element.classList.add('blur')});
});
                                                               
/* Carousel Modules */
const trueModulo = (n, m) => {
	return ((m % n) + n) % n;
};

const indexActiveSlide = () => {
  for(let iterator = 0; iterator < carousel.slides.activeSlide.length; iterator++){
     if(carousel.slides.activeSlide[iterator].classList
        .contains('show')){
            return iterator;
  };};};

const slideTimerCall = () => {
  if (carousel.options.autoSlide > 0){
    carousel.slides.autoSlideIntervalContainer = setInterval(() => {
      document.getElementById("rightControl").click();
    }, (carousel.options.autoSlide*1000));
  };};

/* Touch Modules */
const handleTouchStart = (event) =>{
  carousel.touch.touchStartLocation  = event.target;
  const touchStart = touchSnap(event)[0];   
  carousel.touch.touchXDown  = touchStart.clientX;                                   
};

const touchSnap = (event) => {
  return event.touches ||            
         event.originalEvent.touches;
};                                                     

const handleTouchMove = (event) => {
     if (!carousel.touch.touchXDown  || !carousel.options.touchSlide) {
        return;
    };
    const touchXUp = event.touches[0].clientX;                     
    const touchXDiff = carousel.touch.touchXDown - touchXUp;
    if (Math.abs(touchXDiff !== 0)) {
      carousel.touch.touchStartLocation.click();
    }
carousel.touch.touchXDown = null;
carousel.touch.touchStartLocation = null;
}

/* Init */
slideTimerCall();

/* DOM */

/* Touch Detection */
document.addEventListener('touchstart', handleTouchStart, true);   
document.addEventListener('touchmove', handleTouchMove, true);

/* Left Control */
carousel.controls.leftControl.addEventListener("click", () => { 

carousel.controls.rightControl.style.pointerEvents = 'none'; carousel.controls.leftControl.style.pointerEvents = 'none';

const cSlideActivate = trueModulo((carousel.slides.activeSlide).length, indexActiveSlide() - 1);
const cSlideDeactivate = (indexActiveSlide()) % (carousel.slides.activeSlide).length;
  
  /* We're restarting the auto slide interval here for UX */
clearTimeout(carousel.slides.autoSlideIntervalContainer); slideTimerCall();
  
carousel.slides.activeSlideIndicators[cSlideDeactivate].classList.remove("active");
carousel.slides.activeSlideIndicators[cSlideActivate].classList.add("active");


carousel.slides.activeSlide[cSlideActivate].classList.add('right'); 
carousel.slides.activeSlide[cSlideActivate].classList.remove('left'); 

carousel.slides.activeSlide[cSlideActivate].classList.add('show'); 
carousel.slides.activeSlide[cSlideActivate].classList.remove('hide'); 

carousel.slides.activeSlide[cSlideDeactivate].classList.add('left'); 
carousel.slides.activeSlide[cSlideDeactivate].classList.remove('right'); 

setTimeout(() => {
  carousel.slides.activeSlide[cSlideActivate].classList.remove('left'); 
  carousel.slides.activeSlide[cSlideActivate].classList.remove('right'); 

  carousel.slides.activeSlide[cSlideDeactivate].classList.remove('left'); 
  carousel.slides.activeSlide[cSlideDeactivate].classList.remove('right'); 

  carousel.slides.activeSlide[cSlideDeactivate].classList.add('hide'); 
  carousel.slides.activeSlide[cSlideDeactivate].classList.remove('show'); 
  
  carousel.controls.leftControl.style.pointerEvents = 'auto'
  carousel.controls.rightControl.style.pointerEvents = 'auto'
}, 1000);

  });

/* Right Control */
carousel.controls.rightControl.addEventListener("click", ()=> { 
    
carousel.controls.rightControl.style.pointerEvents = 'none'
carousel.controls.leftControl.style.pointerEvents = 'none'

const cSlideActivate = trueModulo((carousel.slides.activeSlide).length, indexActiveSlide() + 1);
const cSlideDeactivate = (indexActiveSlide()) % (carousel.slides.activeSlide).length;

/* We're restarting the auto slide interval here for UX */
clearTimeout(carousel.slides.autoSlideIntervalContainer); slideTimerCall();
  
carousel.slides.activeSlideIndicators[cSlideDeactivate].classList.remove("active");
carousel.slides.activeSlideIndicators[cSlideActivate].classList.add("active");

carousel.slides.activeSlide[cSlideActivate].classList.add('left'); 
carousel.slides.activeSlide[cSlideActivate].classList.remove('right'); 

carousel.slides.activeSlide[cSlideActivate].classList.add('show'); 
carousel.slides.activeSlide[cSlideActivate].classList.remove('hide'); 

carousel.slides.activeSlide[cSlideDeactivate].classList.add('right'); 
carousel.slides.activeSlide[cSlideDeactivate].classList.remove('left'); 

setTimeout(()=> {
carousel.slides.activeSlide[cSlideActivate].classList.remove('left'); 
carousel.slides.activeSlide[cSlideDeactivate].classList.remove('left'); 
carousel.slides.activeSlide[cSlideDeactivate].classList.add('hide'); 
carousel.slides.activeSlide[cSlideDeactivate].classList.remove('show'); 
carousel.controls.leftControl.style.pointerEvents = 'auto'
carousel.controls.rightControl.style.pointerEvents = 'auto'
}, 1000);
});

/* Five star markup */
document.addEventListener("DOMContentLoaded", ()=> {

for (let i of Array(carousel.options.starCount)){
Array.from(document.getElementById("Testimonials").getElementsByTagName("ul")).map(x => {
x.innerHTML +=  
/* This SVG is available for use under the SIL Open Font License 1.1, Creative Commons Attribution 4.0, and MIT License. Please refer to https://fontawesome.com/license for more information. */
"<li class=list-inline-item></li><i><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' width='18px' height='18px' viewBox='0 0 576 512'><path stroke='black' fill='currentColor' stroke-opacity='0.8' stroke-width='75px' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'> </path></svg></i>"
});
}
});
