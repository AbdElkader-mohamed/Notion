$(document).ready(function() {
  // open nav mobile
  $(".nav-toggle").click(function() {
    $(".header__wrapper__list--slice").toggleClass("active")
  })
  // open the modal 
  $("#not-subscripted").click(function() {
    $(".subscripted-modal").addClass("active");
  });

  // close the modal 
  $(".close-btn , .subscripted-modal").click(function(e) {
    if (e.target.classList.contains("subscripted-modal")) $(".subscripted-modal").removeClass("active");
  });
  $(".close-btn").click(() => $(".subscripted-modal").removeClass("active"));

  // active modals
  $(".read-more").click( function () { $(`#${$(this).data("target")}`).addClass("active")});
  $(".close-modal").click( function () { $(this).parents(".main-modal").removeClass("active") });
  $(".main-modal").click( function (e) {
    if(e.target.classList.contains("main-modal")) {
      $(e.target).removeClass("active");
    }
  });

  // handel open video
  $('.play-btn').click(function(){
    $(this).prev().remove();
    $(this).remove();
    document.querySelector(".working__wrapper__video video").play();
  });

  // handel caret btn click 
  $(".add-to-cart").click(function(){
    let counter = $(this).next(".counter").find(".value").text();
    if(counter == 0) $(this).next(".counter").find(".value").text("1");
    $(this).addClass("d-none");
    $(this).next(".counter").addClass("d-flex");
  });
  $(".increment").click(function(){
    let counter = $(this).next(".value").text();
    counter++
    $(this).next(".value").text(counter);
  })
  $(".decrement").click(function(){
    let counter = $(this).prev(".value").text();
    if(counter > 0) {
      counter--;
    }
    if(counter <= 0) {
      $(this).parent().prev().removeClass("d-none");
      if(document.querySelector(".add-to-cart")) {
        $(this).parent().removeClass("d-flex");
      }
      if(document.querySelector(".shopping-cart")) {
        $(this).parents(".row-item").remove();
      }
    }
    $(this).prev(".value").text(counter);
  })

  // handel pagination buttons
  $(".bullet").click(function(){
    $(".bullet").removeClass("active");
    $(this).addClass("active");
  });
  $(".chevron-right").click(function(){
    let target = $(".bullet.active");
    target.parent().next().find(".bullet").addClass("active");
    target.removeClass("active");
  })
  $(".chevron-left").click(function(){
    let target = $(".bullet.active");
    target.parent().prev().find(".bullet").addClass("active");
    target.removeClass("active");
  })

  // handel filtering collapse
  $('.filter-dropdown').click(function(){
    $(this).next(".collapse-filter").slideToggle("2000");
    $(this).find("i").toggleClass("rotate");
  })

  // handel append elements in service page (class >> (services-appendFrom)) {{responsive mode}}
  if(window.innerWidth <= 575) {
    $(".services-appendFrom").each(function(){
      $(this).insertAfter($(`.${$(this).data("append")}`))
      // $(this).insertBefore($(`.${$(this).data("append")}`))
    })
  }
  // handel append elements in product page (class >> (product__wrapper__product__info__price)) {{responsive mode}}
  if(document.querySelector(".product")) {
    if(window.innerWidth <= 991) {
        $(".product__wrapper__product__info__price").insertAfter($(".project__wrapper__header"))
    }
  }

  // handel dropdown menu in projects page {{responsive mode}} 
  $('.arrow-dropdown').click(function(){
    $(this).toggleClass('show');
    $(this).parents(".projects__wrapper__header").siblings(".projects__wrapper__dropdown").slideToggle("slow")
  })


  // handel svg width in {{responsive mode}} 
  if(window.innerWidth <= 991) {
    $("footer .main-border").attr("viewBox", "0 0 992 6");
  }
  
})


