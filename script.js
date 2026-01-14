console.log("js console");
var data;
var grid = document.querySelector('.grid-container');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       console.log(data);  
    
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
        if (film.imdbRating)
        grid.appendChild(card); 
    }); 
}
};
xhttp.open("GET", "Film.JSON", true);
xhttp.send();