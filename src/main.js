// Show-Hide Mobile Nav
const headerBtn = document.getElementById("header__bars");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

// State
let isMobileNavOpen = false;

let showHideNav = (bodyOverflow, navDisplay, mobileNavState) => {
  document.body.style.overflowY = bodyOverflow;
  mobileNav.style.display = navDisplay;
  isMobileNavOpen = mobileNavState;
};

headerBtn.addEventListener("click", () => {
  if (!isMobileNavOpen) {
    showHideNav("hidden", "flex", true);
  } else if (isMobileNavOpen) {
    showHideNav("auto", "none", false);
  }
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showHideNav("auto", "none", false);
  });
});

// if window expends
window.addEventListener("resize", () => {
  if (document.body.clientWidth >= 768) {
    showHideNav("auto", "none", false);
  }
});

// Light-Dark Mode
const themeToggle = document.querySelectorAll("#theme-toggle");

themeToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      window.localStorage.setItem("theme", "light");
    } else {
      window.localStorage.removeItem("theme");
    }
  });
});

// if window load
window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("theme") === "light") {
    document.body.classList.toggle("light-mode");
  }
});
