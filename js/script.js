function goBack() {
    window.history.go(-1);
}

function getName() {
  return localStorage.getItem("userName");
}

function updateHTML() {
  var uName = getName();
  document.getElementById("greeting").innerHTML = "Hello, " + uName;
  // document.getElementById("storedName").innerHTML = name;
}

function myFunction() {
  // Gets input value
  var uName = document.getElementById("userInput").value;

  // Saves data to retrieve later
  localStorage.setItem("userName", uName);

  // Updates HTML
  updateHTML();
}


// setting current date on profile screen
  var todaysDate = new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'});
  document.getElementById('currentDate').innerHTML = todaysDate;
