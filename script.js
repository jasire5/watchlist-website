console.log("js console");
var data;
var grid = document.querySelector('.grid-container');

if (localStorage.getItem("filmData")) {
  data = JSON.parse(localStorage.getItem("filmData"));
  console.log("data taken from browser");
  makeCards();
} else {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       console.log(data);
       localStorage.setItem("filmData", JSON.stringify(data));
       data = JSON.parse(localStorage.getItem("filmData"));
    makeCards();
}
};
xhttp.open("GET", "film.JSON", true);
xhttp.send();
}


var topButton = document.getElementById("myBtn");

window.addEventListener('scroll', scrollFunction, { passive: true });

function makeCards(){
  data.forEach(function(film) {
          let card = document.createElement('div');
          card.classList.add("card");

          let textData = 
          "<div class='title'>" + film.title + "</div>" +
          "<span>" +
          "publisher: " + film.publisher + "<br>" +
          "year: " + film.year + "<br>" +
          "genre: " + film.genre + "<br>" +
          "imdb rating: " + film.imdbRating + "<br>" +
          "</span>";

          card.innerHTML = textData;
          
          if (film.Images && film.Images.length > 0) {
              card.style.backgroundImage = "url('" + film.Images[0] + "')";
          }
          if (grid){
            grid.appendChild(card); 
          }
          
      }); 
}


function scrollFunction() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  topButton.classList.toggle('visible', scrolled > 20);
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
