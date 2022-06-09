window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
const form = document.querySelector("form");
var mypwd="123456789";
var myusr="sgi@user.com";
let eField = form.querySelector(".email");
let eInput = eField.querySelector("input");
let pField = form.querySelector(".password");
let pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
    e.preventDefault();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    setTimeout(()=>{
      eField.classList.remove("shake");
      pField.classList.remove("shake");
    }, 500);
    eInput.onkeyup = ()=>{checkEmail();} 
    pInput.onkeyup = ()=>{checkPass();} 
    function checkEmail(){
      let pattern1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      let pattern2 = /^\+[ ][0-9]{9,12}$/;
      if(!eInput.value.match(pattern1) && !eInput.value.match(pattern2)){
        eField.classList.add("error");
        eField.classList.remove("valid");
        let errorTxt = eField.querySelector(".error-txt");
        (eInput.value != "") ? errorTxt.innerText = "Enter a valid username address" : errorTxt.innerText = "Email can't be blank";
      } else {
        eField.classList.remove("error");
        eField.classList.add("valid");
      }
    }
    function checkPass(){ 
      if(pInput.value == ""){
        pField.classList.add("error");
        pField.classList.remove("valid");
      }else{ 
        pField.classList.remove("error");
        pField.classList.add("valid");
      }
    }
  function redirect() {
    Swal.fire({
      title: 'good!',
      text: 'Welcome back dear user, you will now be redirected to your profile page',
      icon: 'success',
      confirmButtonText: 'ok'
    }).then(() => {
      window.location.href = form.getAttribute("action");
    })
      
  }
  function alertError() {
    Swal.fire({
      title: 'Error!',
      text: 'Wrong credential please try again',
      icon: 'error',
      confirmButtonText: 'ok'
    })
}
  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    (eInput.value === myusr && pInput.value === mypwd) ? redirect() : alertError();
    }
  }