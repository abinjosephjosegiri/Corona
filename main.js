const signUpButton = document.getElementById('signUp-slr');
const signInButton = document.getElementById('signIn-sll');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => 
container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => 
container.classList.remove('right-panel-active'));
//var ta=document.getElementById("title").;
//consol.log(ta.oninvalid);