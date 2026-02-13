console.log("form script started");

// Safe load for form page (works even if script.js isn't loaded first)

  data = JSON.parse(localStorage.getItem("filmData"));
  console.log("data loaded from local storage",data);


var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var pubInput = document.querySelector("#creator");
var dateInput = document.querySelector("#year");

form.addEventListener("submit",function(e){
  e.preventDefault();
  
  
  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    year: dateInput.value
  };

  data.push(newObj);
  console.log("Form submitted", data);
  localStorage.setItem("filmData", JSON.stringify(data));
  console.log("new data saved to local storage");


  form.reset();
});