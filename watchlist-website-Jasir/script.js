console.log("js console");
var data;
var grid = document.querySelector('.grid-container');
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "gameData.json", true);
  xhttp.send();
}
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + game.title + "</div>" +
      "<div>Publisher: " + game.publisher + "</div>" +
      "<div>Release Date: " + game.year + "</div>" +
      "<div>imdbRating: " + game.imdbRating + "</div>";

    const images = (game.Images || []).map(img => "<div><img class='card-img game-image' src='" + img + "' alt='Game Image'></div>").join("");
    textData += images;

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}

// Scroll to Top Button
var topButton = document.getElementById("myBtn");

window.addEventListener('scroll', scrollFunction, { passive: true });

function scrollFunction() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (!topButton) return;
  topButton.classList.toggle('visible', scrolled > 20);
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}