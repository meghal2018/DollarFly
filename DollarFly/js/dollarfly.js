
const config = {
    apiKey: "AIzaSyAD8_8-A7C9OlIviUCq2cyfTLIfoIn9bEY",
    authDomain: "dollarflyhosting.firebaseapp.com",
    databaseURL: "https://dollarflyhosting.firebaseio.com",
    projectId: "dollarflyhosting",
    storageBucket: "dollarflyhosting.appspot.com",
    messagingSenderId: "971910887722"
  };
  firebase.initializeApp(config);

  //get elements
  // var txtEmail = document.getElementById('email').value;
  // var txtPassword = document.getElementById('password').value;
  // var btnLogIn = document.getElementById('logInBtn');
  //
  // btnLogIn.addEventListener('click', handleSignIn, false);
  //
  // var handleSignIn = function() {
  //   var auth = firebase.auth();
  //   var promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
  //   //   promise.catch( e => console.log(e.message));
  // };
  //add login event
  // btnLogIn.addEventListener('click', e => {
  //   //Get email and password
  //   var email = txtEmail.value;
  //   var password = txtPassword.value;
  //   var auth = firebase.auth();
  //
  //   //Sign In
  //
  //   var promise = auth.signInWithEmailAndPassword(email, password);
  //   promise.catch( e => console.log(e.message));
  //
  //
  // });
