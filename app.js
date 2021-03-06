// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log( user.email ,  'is user logged in ' );
      var mylogin=document.getElementById("loginandregister");
      mylogin.classList.remove("active");
      document.title="Home";
      console.log(mylogin.classList);
      var myhome=document.getElementById("home");
      myhome.classList.add("active");
    } else {
      console.log('user logged out');
      var mylogin=document.getElementById("loginandregister");
      mylogin.classList.add("active");
      var myhome=document.getElementById("home");
      myhome.classList.remove("active");
      document.title="Log In or Sign Up"

    }
  })
  
//signup
const signupForm = document.querySelector('#SignUpForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get info
    const email =signupForm['signup-email'].value;
    const password =signupForm['signup-password'].value;
    const name =signupForm['signup-name'].value;
    //console.log(email,password);
    //sign up usr 
    auth.createUserWithEmailAndPassword(email,password).then(
        cred => {
            console.log(cred.user);
            const model =document.querySelector("signup-modal");
            M.Model.getInstance(model).close();
            signupForm.reset();
        
        }
    )
    alert(name + "Account Created Successfully");
   //window.location.replace("home.html");
   
  //location.reload();
  //auth.signOut()
  
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    if (errorCode == "auth/wrong-password")
    {
     window.alert("Wrong Password"); //or window.alert(errorMessage);
    }
    else if( errorCode == "auth/user-not-found" ){
      window.alert("User Not Found");//alert(errorMessage); 
    }
    else
    {
      window.alert(errorMessage);
    }
    
    // ...
  });
});
//forget passwod
function Forgot()
{
  var emailAddress = prompt("Enter your Email Id:");
  console.log(emailAddress);
  if (emailAddress != null){
    alert("password  reset  link not send to your email");
  }
  auth.sendPasswordResetEmail(emailAddress).then(() => {
    // Email sent.
    console.log(emailAddress);
  }).catch(function(error){
    // An error happened.
    console.log(error);
  });
}
function Logout(){
  auth.signOut();
}
