//portfolio
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
})

//contact
document.getElementById("liveAlertBtn").addEventListener("click", function (event) {
  // get values
  var first = document.getElementById("first-name").value;
  var last = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;

//alert contact
//trigger
const alertTrigger = (first== "" || last== "" || email == "")
var alertMessage = document.getElementById("liveAlertPlaceholder");
if (alertTrigger) {
  alertMessage.textContent = "Please fill all the fields.";
  alertMessage.style.display = "block";
  alertMessage.classList.remove("alert-success"); // Remove success class if present
  alertMessage.classList.add("alert-danger"); // Add danger class for red color
}else{
  var alertMessage = document.getElementById("liveAlertPlaceholder");
  alertMessage.textContent = "Sent!";
  alertMessage.style.display = "block";
  alertMessage.classList.remove("alert-danger"); // Remove danger class if present
  alertMessage.classList.add("alert-success"); // Add success class for green color
}
});
//book now
document.getElementById("btn-book-now").addEventListener("click", function (event) {
  // get values
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var location = document.getElementById("location").value;
  var service = document.getElementById("service").value;
  var photographer = document.getElementById("photographer").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

    //set confirmation

    document.getElementById("name-confirm").value = firstname + " " + lastname;
    document.getElementById("email-confirm").value = address;
    document.getElementById("phone-confirm").value = phone;
    document.getElementById("location-confirm").value = location;
    document.getElementById("service-confirm").value = service;
    document.getElementById("photographer-confirm").value = photographer;
    document.getElementById("date-confirm").value = date;
    document.getElementById("time-confirm").value = time;
  // alert contact
  var alertTrigger = firstname === "" || lastname === "" || address === "" || phone === "" || location === "" || service === "" || photographer === "" || date === "" || time === "";
  if (alertTrigger) {
    var alertMessage = document.getElementById("BookNowAlert");
    alertMessage.textContent = "Please fill all the fields.";
    alertMessage.style.display = "block";
  } else {
    document.getElementById("BookNowAlert").style.display = "none";
    // confirmation
    // Get the modal
    var modal = document.getElementById("myModal");

    // When the user clicks the button, open the modal
    modal.style.display = "block";
  }
});

// Close the modal when the user clicks on <span> (x)
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
