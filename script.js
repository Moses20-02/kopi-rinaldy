// menghilangkan slide
const navbarNav = document.querySelector(".navbar-nav");

document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function (e) {
    navbarNav.classList.toggle("slide");
    e.preventDefault();
  });

//klik dimanapun
const hamburgerMenu = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("slide");
  }
});

// slide search
const searchButton = document.querySelector("nav .extra-nav #search");
const inputSearch = document.querySelector("nav .search-box");

searchButton.onclick = (e) => {
  inputSearch.classList.toggle("search-slide");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !inputSearch.contains(e.target)) {
    inputSearch.classList.remove("search-slide");
  }
});
