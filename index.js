
var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  // effect: coverflow,
  spaceBetween: 10,
  loop: true,
  autoplay:{
    delay: 2000,
  },
 
  // centeredSlides: true,
  // slidesPerView: 'auto',
  // longSwipesMs: 0,
//  loopPreventsSlide:false,
  // longSwipes: true,
  // longSwipesRatio: 0,
  // threshold: 0,
  // slideToClickedSlide:true,
 
  // spaceBetween: 20,

  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
  breakpoints:{
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  }},
  // breakpoints:{
  //   0:{
  //     slidesPerView: 1,
  //   }
  //   520:{
  //     slidesPerView: 2,
  //   }
  //   950:{
  //     slidesPerView: 3,
  //   }
  //   1200:{
  //     slidesPerView: 4,
  //   }
  // }
})


// function reveal() {
//     var reveals = document.getQuerySelectorAll('.reveal');
//     for(var i=0 ;i<reveals.length; i++){
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var windowHeight = window.innerHeight;
//       if (elementTop < windowHeight ) {
//         reveals[i].classList.add("active");
//       } 
//       else{
//         reveals[i].classList.remove("active");
//       }
//       console.log(reveals);
//     }
// }
  
//   window.addEventListener("scroll", reveal);
  
//   // To check the scroll position on page load
//   reveal();


var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay:{
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});