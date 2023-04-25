
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

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  // console.log(document.documentElement.scrollTop);
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}