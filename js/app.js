const btn = document.querySelector(".switch-btn");
const container = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    container.pause();
  } else {
    btn.classList.remove("slide");
    container.play();
  }
});


// preloader 

const preLoader = document.querySelector('.preloader')
 window.addEventListener('load', function() {
     preLoader.classList.add('hide-preloader');
 })