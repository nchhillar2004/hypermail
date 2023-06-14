// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDIjeAhrmdAX3mbFUbs8ZB0ylMcEcxRa4o",
    authDomain: "hypermail-20.firebaseapp.com",
    projectId: "hypermail-20",
    appId: "1:347416692719:web:cca2f71a82a698cfb7181a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
// Signup Form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessageElement = document.getElementById('error-message');

    if (password.length < 8) {
      errorMessageElement.textContent = 'Password should be at least 8 characters long';
      return;
    }

    if (password !== confirmPassword) {
      errorMessageElement.textContent = 'Passwords do not match.';
      console.error('Passwords do not match');
      return;
    }
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Update the user's display name with full name
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: fullName
        }).then(function() {
          console.log('User signed up successfully');
          window.location.href = 'home.html';
        }).catch(function(error) {
          console.error('Error updating display name:', error);
        });
      })
      .catch(function(error) {
        console.error('Error signing up:', error);
      });
  });
  