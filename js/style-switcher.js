// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme Color Change
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Dark Theme Change
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

//Top Button
function toTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    document.querySelector(".top-button").classList.add("hidden");
  } else {
    document.querySelector(".top-button").classList.remove("hidden");
  }
});

//Active aside

window.addEventListener("scroll", () => {
  if (window.scrollY <= 1008) {
    document.querySelector(".aside-home").classList.add("active");
  } else {
    document.querySelector(".aside-home").classList.remove("active");
  }
  if (window.scrollY >= 1009 && window.scrollY <= 2667) {
    document.querySelector(".aside-about").classList.add("active");
  } else {
    document.querySelector(".aside-about").classList.remove("active");
  }
  if (window.scrollY >= 2668 && window.scrollY <= 3676) {
    document.querySelector(".aside-service").classList.add("active");
  } else {
    document.querySelector(".aside-service").classList.remove("active");
  }
  if (window.scrollY >= 3677 && window.scrollY <= 4685) {
    document.querySelector(".aside-portfolio").classList.add("active");
  } else {
    document.querySelector(".aside-portfolio").classList.remove("active");
  }
  if (window.scrollY >= 4686) {
    document.querySelector(".aside-contact").classList.add("active");
  } else {
    document.querySelector(".aside-contact").classList.remove("active");
  }
});
