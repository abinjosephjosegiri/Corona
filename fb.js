var firebaseConfig = {
    apiKey: "AIzaSyB9xIEkm43EEWZ9lIv9y0KimfOh45PhEM4",
    authDomain: "corona-5f69b.firebaseapp.com",
    databaseURL: "https://corona-5f69b.firebaseio.com",
    projectId: "corona-5f69b",
    storageBucket: "corona-5f69b.appspot.com",
    messagingSenderId: "100212607774",
    appId: "1:100212607774:web:7c19bb826e8b44515e170f",
    measurementId: "G-ZDC97T6T0G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function(){
      var email =$("#email-login").val();
      var password =$("#password-login").val();
      if (email != "" && password != ""){
            var result =firebase.auth().signInWithEmailAndPassword(email,password);
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message :" + errorMessage);
            });
            
      }
      else
      {
          window.alert("Enter Full information");
      }

  });