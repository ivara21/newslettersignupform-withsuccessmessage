
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
        // document.getElementById("email").style.backgroundColor = "pink"
        // document.getElementById("email").style.color = "red";
        // document.getElementById("email").style.borderColor = "red";
        
    }
}




