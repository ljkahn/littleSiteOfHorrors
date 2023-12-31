// Function to show the password modal using Bootstrap modal methods
$(document).ready(function() {
function showPasswordModal() {
    $('#passwordModal').modal('show');
  }
  
  // Handle form submission (when the user clicks a "Register" button)
  document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting initially
    
    const password = document.getElementById('floatingPassword').value; // Get the password input value
    
    if (password.length < 6) {
      showPasswordModal();
    } else {
        window.location.href='/profile';
    }
    

  });
});