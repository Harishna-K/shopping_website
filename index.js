document.addEventListener("DOMContentLoaded", function () {
  var sidenav = document.querySelector(".side-navbar");

  window.showNavbar = function () {
    sidenav.style.left = "0";
  };

  window.closeNavbar = function () {
    sidenav.style.left = "-60%";
  };
});
