
function updateImageSrc() {
 const image = document.getElementById('pic');
 const windowWidth = window.innerWidth;

 if (windowWidth >= 630) {
   image.src = 'assets/images/illustration-sign-up-desktop.svg';
 } else {
   image.src = 'assets/images/illustration-sign-up-mobile.svg';
 }
}

// Initial update on page load
updateImageSrc();

// Update image on window resize
window.addEventListener('resize', updateImageSrc);






  // Function to validate the email
  function validateEmail() {
    var email = document.getElementById("email").value;
    var emailInput = document.getElementById("email");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // If email is valid, redirect to another HTML page
        window.location.href = "success.html?email=" + encodeURIComponent(email);
    } else {
        // If email is invalid, show error message
        emailInput.classList.add("error-input"); // Add error class
        document.getElementById("error").innerHTML = "Valid Email Required.";

    }
}

    function updateEmailInputStyle() {
      var emailInput = document.getElementById("email");
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var email = emailInput.value;

      if (emailPattern.test(email)) {
        // If email is valid, change input style to indicate success
        emailInput.classList.remove("error-input"); // Remove error class
        emailInput.classList.add("valid-input"); // Add success class
        document.getElementById("error").innerHTML = "";
      } else {
        // If email is invalid, change input style to indicate error
        emailInput.classList.remove("valid-input"); // Remove success class
        emailInput.classList.add("error-input"); // Add error class
      }
    }

    // Add input event listener to update style while typing
    var emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function() {
      updateEmailInputStyle();
    });





