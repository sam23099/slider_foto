let images = [{
  url: "images/sochi_themese.png",
  city: "sochi",
  cityArea: "105 m2",
}, {
  url: "images/rostov_on_don_admiral.png",
  city: "admiral",
  cityArea: "81 m2",
}, {
  url: "images/rostov_on_don_patriotic.png",
  city: "rostov",
  cityArea: "93 m2",
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    cityArease: true,
    dots: true,
    autoplay: false,
  };
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderCity = document.querySelector(".town");
  let cityAreas = document.querySelector(".town_area");
  let hrefs = document.querySelectorAll(".hotels");


  
  initImages();
  initArrows();
  
  
  if (options.dots) {
    initDots();
  }
  
  if (options.cities) {
    initCity();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }

  if (options.cityArease) {
    initCityArea();
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.cities) {changeCity(num);}
    if (options.cityArease) changeCityArea(num);
  }
  
  

  
  function initCity() {
    let titleDiv = `<div class="slider__images-title">${images[0].city}</div>`;
    sliderCity.innerHTML += cropTitle(titleDiv, 50);
  }
 

  function changeCity(num) {
    if (!images[num].city) return;
    let sliderTitle = sliderCity.querySelector(".slider__images-title");
    sliderTitle.innerText = cropTitle(images[num].city, 50);
  }

  
  function cropTitle(city, size) {
    if (city.length <= size) {
      return city;
    } else {
      return city.substr(0, size) + "...";
   }
  }

  //city area
  function initCityArea() {
  let cityAreaDiv = `<div class="slider__images-title">${images[0].cityArea}</div>`;
  cityAreas.innerHTML += cropTitle(cityAreaDiv, 50);
  }
  


  function changeCityArea(num) {
    if (!images[num].cityArea) return;
    let sliderTitleArea = cityAreas.querySelector(".slider__images-title");
    sliderTitleArea.innerText =  cropTitle(images[num].cityArea, 50);
  }
  


  
  function cropTitle(cityArea, size) {
    if (cityArea.length <= size) {
      return cityArea;
    } else {
      return cityArea.substr(0, size) + "...";
   }
  }


  
  hotels.addEventListener('click', function(){
    hotels.forEach(hotel  => {
      if(hotel[0]){
        curNumber === 0;
      }else if(hotel[1]){
        curNumber === 1;
      }else if(hotel[2]){
        curNumber === 2;
      }
    })
  });




  
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  cities: true,
  cityArease: true,
  autoplay: true,
  autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});