document.addEventListener("DOMContentLoaded", function() {
  // Get the email parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');

  if (email) {
    // If email parameter exists, display it in the success page
    document.getElementById("userEmail").textContent = email;
  } else {
    // Handle case where email parameter is not provided
    document.getElementById("userEmail").textContent = "Email not found";
  }
});

function backToForm() {
  // Clear the input field
  var emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.value = "";
  }
  window.location.href = "index.html";
}


