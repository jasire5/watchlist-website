console.log("form script started");

// Safe load for form page (works even if script.js isn't loaded first)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var pubInput = document.querySelector("#creator");
var dateInput = document.querySelector("#year");

form.addEventListener("submit", function(e) {
  e.preventDefault();
console.log("Form submitted");
  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    releaseDate: dateInput.value
  };

  data.push(newObj);
  console.log(data);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  //Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
   makeCards();
  }

  form.reset();
});