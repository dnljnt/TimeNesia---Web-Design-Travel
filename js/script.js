/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const blurHeader = () => {
  const navbar = document.getElementById("navbar");
  this.scrollY >= 50
    ? navbar.classList.add("scroll-navbar")
    : navbar.classList.remove("scroll-navbar");
};
window.addEventListener("scroll", blurHeader);

const scrollUp = () => {
  const btnScrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? btnScrollUp.classList.add("show-scroll")
    : btnScrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== FILTERING ===============*/
const destinationPackages = document.querySelector(".destination-packages");
const mixer = mixitup(destinationPackages, {
  animation: {
    duration: 500,
    effects: "fade scale(0.5)",
    easing: "ease-in-out",
  },
});
