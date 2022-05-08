window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
function resizing(){
  if(window.innerHeight<=560){
    var main =document.querySelector(".main");
    var container = document.querySelector("body .container");
    main.style.width="100vw";
    main.style.height="100vh";
    container.style.width="100%";
    container.style.margin="0px 0px";
  }else{
    main.style.width="80vw";
    main.style.height="95vh";
  }
}
window.onresize=resizing;
const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");
nField = form.querySelector(".first-name");
nInput = nField.querySelector("input");
lField = form.querySelector(".last-name");
lInput = lField.querySelector("input");
phField = form.querySelector(".phone");
phInput = phField.querySelector("input");
sField = form.querySelector(".sex");
sInput = sField.querySelector("option");
cpField = form.querySelector(".confirm-password");
cpInput = cpField.querySelector("input");
inputArray = form.querySelectorAll("input");
form.onsubmit = (e)=>{
    e.preventDefault(); 
    console.log(nInput + ' ' + lInput+' '+phInput+' '+eInput+' '+pInput+' '+cpInput);
    (nInput.value == "") ? nField.classList.add("shake", "error") : checkfName();
    (lInput.value == "") ? lField.classList.add("shake", "error") : checklName();
    (phInput.value == "") ? phField.classList.add("shake", "error") : checkPhone();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkcorr();
    (sInput.value == " ") ? sField.classList.add("shake", "error") : checksex();
    
    setTimeout(()=>{
      eField.classList.remove("shake");
      pField.classList.remove("shake");
      cpField.classList.remove("shake");
      phField.classList.remove("shake");
      nField.classList.remove("shake");
      lField.classList.remove("shake");
      sField.classList.remove("shake");
    }, 500);
    eInput.onkeyup = ()=>{checkEmail();} 
    pInput.onkeyup = ()=>{checkPass();} 
    function checkEmail(){ 
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
      if(!eInput.value.match(pattern)){ 
        eField.classList.add("error");
        eField.classList.remove("valid");
        let errorTxt = eField.querySelector(".error-txt");
        (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
      } else {
        eField.classList.remove("error");
        eField.classList.add("valid");
      }
    }
    function checkPhone(){ 
      let pattern = /[1-9]{9,12}$/; 
      if(!phInput.value.match(pattern)){ 
        phField.classList.add("error");
        phField.classList.remove("valid");
        let errorTxt = phField.querySelector(".error-txt");
        (phInput.value != "") ? errorTxt.innerText = "Enter a valid phone number" : errorTxt.innerText = "phone number can't be blank";
      } else {
        phField.classList.remove("error");
        phField.classList.add("valid");
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
    function checksex(){ 
      console.log(sInput.value);
      if(sInput.value == ""){
        sField.classList.add("error");
        sField.classList.remove("valid");
      }else{ 
        sField.classList.remove("error");
        sField.classList.add("valid");
      }
    }
    function checkfName(){ 
      if(nInput.value == ""){
        nField.classList.add("error");
        nField.classList.remove("valid");
      }else{ 
        nField.classList.remove("error");
        nField.classList.add("valid");
      }
    }
    function checklName(){ 
      if(lInput.value == ""){
        lField.classList.add("error");
        lField.classList.remove("valid");
      }else{ 
        lField.classList.remove("error");
        lField.classList.add("valid");
      }
    }
    function checkcorr(){ 
      if(cpInput.value == "" || cpInput.value !== pInput.value){
        cpField.classList.add("error");
        cpField.classList.remove("valid");
      }else{ 
        cpField.classList.remove("error");
        cpField.classList.add("valid");
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
  for(let item in inputArray ){
      if(item == ""){
          var ver=false;
          break
      }else{
          if(sInput == ""){
            ver=false;
          }
      }
  }
  if(ver){
      redirect();
  }
}
  
