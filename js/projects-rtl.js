
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dotsEach:true,
    rtl:true,
    responsive:{
      0:{
          items:2
      },
      767:{
        items:3
      }
    }
  })
for (let i = 0; i <= $('.projects').length; i++) {  
  $(`.project${i} .owl-dots`).insertBefore(`.project${i} .owl-nav .owl-next`);
}
$(`.owl-nav .owl-prev span`).html(`<i class="bi bi-arrow-right-short"></i>`)
$(` .owl-nav .owl-next span`).html(`<i class="bi bi-arrow-left-short"></i>`)

})