/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

// direct child van de navigatie
var deButton = document.querySelector("nav > button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}


/****************************************/
/*         dark/light mode button       */
/****************************************/

var darkModeButton = document.querySelector("nav ul li:nth-of-type(5) button");
var body = document.querySelector("body");

darkModeButton.addEventListener("click", switchTheme);

function switchTheme() {  
  body.classList.toggle("darkmode");
}
