const global = {
  currentPage: window.location.pathname.replace("/FlixMovieAppProject", ""),
};

//Higlight active link
function highlightActiveLink() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      (link.getAttribute("href").indexOf(".") === 0
        ? link.getAttribute("href").replace(".", "")
        : link.getAttribute("href")) === global.currentPage
    ) {
      link.classList.add("active");
    }
  });
}

//Init App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
