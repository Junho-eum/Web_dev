window.onload = function() {
    AOS.init();
  };

// JavaScript
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("anim-typewriter");
          observer.unobserve(entry.target);
      }
  });
}, {rootMargin: "0px 0px -200px 0px"}); /* Adjust the rootMargin to change when the animation triggers */

observer.observe(document.querySelector("#animated-text"));
