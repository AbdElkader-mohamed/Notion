$(document).ready(function() {

  // handel slider tranding projects
  if(window.innerWidth >= 992){
    var TrandingSlider = new Swiper(".tranding-slider", {
      effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 1,
      depth: 100,
      modifier: 2.5,
    },
    navigation: {
      enabled: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      575: {
        slidesPerView: "auto",
      }
    },
  });

  

  }else {
    $(".tranding-slider").removeClass("swiper");
    $(".swiper-wrapper").removeClass("swiper-wrapper");
    $(".tranding-slide").removeClass("swiper-slide");
    $(".tranding-slider-control").hide();

    // let arrOfItems = [$(".tranding-slider > div")[0],$(".important-projects__wrapper__cards")[0]];

    // arrOfItems.forEach(function(slider){
    //   let mouseDown = false;
    //   let startX, scrollLeft;
      
      
    //   const startDragging = (e) => {
    //     mouseDown = true;
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    //   }
      
    //   const stopDragging = (e) => {
    //     mouseDown = false;
    //   }
      
    //   const move = (e) => {
    //     e.preventDefault();
    //     if(!mouseDown) { return; }
    //     const x = e.pageX - slider.offsetLeft;
    //     const scroll = x - startX;
    //     slider.scrollLeft = scrollLeft - scroll;
    //   }
      
    //   // Add the event listeners
    //   slider.addEventListener('mousemove', move, false);
    //   slider.addEventListener('mousedown', startDragging, false);
    //   slider.addEventListener('mouseup', stopDragging, false);
    //   slider.addEventListener('mouseleave', stopDragging, false);
    // })

  }
  



})
