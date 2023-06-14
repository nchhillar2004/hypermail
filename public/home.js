var firebaseConfig = {
    apiKey: "AIzaSyDIjeAhrmdAX3mbFUbs8ZB0ylMcEcxRa4o",
    authDomain: "hypermail-20.firebaseapp.com",
    projectId: "hypermail-20",
    appId: "1:347416692719:web:cca2f71a82a698cfb7181a"
  };
  
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userEmail = user.email;
      document.getElementById('user-email').textContent = 'Logged in as: ' + userEmail;
    }
  });

  document.getElementById('signout-button').addEventListener('click', function() {
    firebase.auth().signOut()
      .then(function() {
        console.log('User signed out successfully');
        // Redirect to login page or any other page after signout
        window.location.href = 'login.html';
      })
      .catch(function(error) {
        console.error('Error signing out:', error);
      });
  });
  