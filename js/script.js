function goBack() {
    window.history.go(-1);
}

// setting current date on profile screen
var todaysDate = new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'});
document.getElementById('currentDate').innerHTML = todaysDate;
