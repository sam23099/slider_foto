const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll(".slider__dots");
const hrefs = document.querySelectorAll(".hotels");


let currentIndex = 0;
const totalSlides = slide.length;
let dot;


function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSliderPosition() ;
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; 
  }
  updateSliderPosition() ;
});





 
let dotToggle = () => {

     dots.forEach(dot => {dot.addEventListener('click', (e) => { 
     
             dots.forEach(dot => {
                 dot.classList.remove('active');          
             });

             e.currentTarget.classList.add('active'); 
             if (dots[0] == e.currentTarget) {
              currentIndex = 0;
             } else if (dots[1] == e.currentTarget) {
              currentIndex = 1;
             } else if (dots[2] == e.currentTarget) {
              currentIndex = 2;
             }

             updateSliderPosition() ;
             
         }); 
     });

 }

 dotToggle();


 let autoSlideInteval = setInterval(() => {
 if (currentIndex < totalSlides - 1){
  currentIndex++;
 }else{
  currentIndex = 0
 } updateSliderPosition();
 },3000)



 let hrefSlide = () => {

  hrefs.forEach(href => {href.addEventListener('click', (e) => { 
  
          hrefs.forEach(href => {
              href.classList.remove('active');          
          });

          e.currentTarget.classList.add('active'); 
          if (hrefs[0] == e.currentTarget) {
           currentIndex = 2;
          } else if (hrefs[1] == e.currentTarget) {
           currentIndex = 0;
          } else if (hrefs[2] == e.currentTarget) {
           currentIndex = 1;
          }

          updateSliderPosition() ;
          
      }); 
  });

}

hrefSlide();