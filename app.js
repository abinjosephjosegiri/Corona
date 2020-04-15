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
  //  window.location.replace("index.html");
  location.reload();
});