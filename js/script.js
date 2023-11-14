// funcitons
const changeOfState = function () {
  navEl.classList.toggle("menu-open");
  btnIcon1El.classList.toggle("icon-inactive");
  btnIcon2El.classList.toggle("icon-inactive");
};

// Sticky navigation

const sectionHeader = document.querySelector(".about-us");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeader);

// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".menu__nav");
const btnIcon1El = document.querySelector(".btn-icon-1");
const btnIcon2El = document.querySelector(".btn-icon-2");
const menuBtnEl = document.querySelectorAll(".menu__button");
const logoBtnEl = document.querySelector(".menu__logo--mobile");

btnNavEl.addEventListener("click", function () {
  changeOfState();
});

menuBtnEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    changeOfState();
  });
});

logoBtnEl.addEventListener("click", function () {
  if (navEl.classList[1] === "menu-open") {
    changeOfState();
  }
});
