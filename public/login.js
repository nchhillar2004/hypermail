// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDIjeAhrmdAX3mbFUbs8ZB0ylMcEcxRa4o",
    authDomain: "hypermail-20.firebaseapp.com",
    projectId: "hypermail-20",
    appId: "1:347416692719:web:cca2f71a82a698cfb7181a"
  };
  
  firebase.initializeApp(firebaseConfig);
  

// Login Form
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        console.log('User logged in successfully');
        window.location.href = 'home.html';
      })
      .catch(function(error) {
        alert("Wrong Password.");
        console.error('Error logging in:', error);
      });
  });