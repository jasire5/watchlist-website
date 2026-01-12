console.log("js console");

let data;
let grid = document.querySelector('.grid-container');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       console.log(data);  
    }
    data.ForEach(function(game) {
        let container = document.createElement('div');
        container.classList.add("container");

        let textData = 
        "div class='game-title'>" + game.title + "</div>" +
        "<span>" +
        "publisher: " + game.publisher + "<br>" +
        "release date: " + game.releaseDate + "<br>" +
        "genre: " + game.genre + "<br>" +
        "imdb rating: " + game.imdbRating + "<br>" +
        "</span>";

        container.innerHTML = textData;
        
        if (game.imgSrc) {
            container.style.backgroundImage = "url('" + game.imgSrc + "')";
        }
        grid.appendChild(container);
    });
};
xhttp.open("GET", "games.json", true);
xhttp.send();