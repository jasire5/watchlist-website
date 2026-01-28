let form = document.getElementById("work");
let title = document.querySelector("fname")
let creator = document.querySelector("creator")
let year = document.querySelector("year")
let submitButton = document.querySelector("submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let creatorName = userName.value;
  console.log(creatorName);
  let titleName = titleTitle.value;
  console.log(titleName);
    let yearDate = dateYear.value;
  console.log(yearDate);

});