// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
    } else {
      console.log('user logged out');
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
            alert("congratulations" + name  +"You Are Signed");
            signupForm.reset();
        
        }
    )
    alert("congratulations " + name  +" You Are Signed\n Now You Can Sign In" );
   //window.location.replace("home.html");
   
  location.reload();
  auth.signOut()
  
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});
