//HAMBURGER MENU FUNCTION
function showHamburgerLinks() {
    var links = document.getElementById("hamburger-links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }