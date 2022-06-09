const form = document.querySelector("form");
let eField = form.querySelector(".email");
let eInput = eField.querySelector("input");
let pField = form.querySelector(".password");
let pInput = pField.querySelector("input");
let nField = form.querySelector(".first-name");
let nInput = nField.querySelector("input");
let lField = form.querySelector(".last-name");
let lInput = lField.querySelector("input");
let phField = form.querySelector(".phone");
let phInput = phField.querySelector("input");
let sField = form.querySelector(".sex");
let sInput = form.querySelector("select");
let cpField = form.querySelector(".confirm-password");
let cpInput = cpField.querySelector("input");
let inputArray = form.querySelectorAll("input");

eInput.onkeyup = ()=>{checkEmail();} 
pInput.onkeyup = ()=>{checkPass();} 
lInput.onkeyup = ()=>{checkfName();} 
pInput.onkeyup = ()=>{checklName();} 
phInput.onkeyup = ()=>{checkPhone();} 
cpInput.onkeyup = ()=>{checkcorr();} 
sInput.onchange = ()=>{checksex();}
form.onsubmit = (e)=>{
    e.preventDefault(); 
    (nInput.value == "") ? nField.classList.add("shake", "error") : checkfName();
    (lInput.value == "") ? lField.classList.add("shake", "error") : checklName();
    (phInput.value == "") ? phField.classList.add("shake", "error") : checkPhone();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkcorr();
    (sInput.value == "") ? sField.classList.add("shake", "error") : checksex();
    
    setTimeout(()=>{
      eField.classList.remove("shake");
      pField.classList.remove("shake");
      cpField.classList.remove("shake");
      phField.classList.remove("shake");
      nField.classList.remove("shake");
      lField.classList.remove("shake");
      sField.classList.remove("shake");
    }, 500);

  function alertError() {
    Swal.fire({
      title: 'Error!',
      text: 'Wrong credential please try again',
      icon: 'error',
      confirmButtonText: 'ok'
    })
}
  for(let item of inputArray ){
      if(item.value == "" || sInput.value == ""){
          var ver=false;
          break
      }else{
          if(item.value != "" && sInput.value != ""){
            ver=true;
          }
      }
  }
  if(ver){
    console.log("redirecting");
    redirect();
  }
}
function checkEmail(){ 
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  if(!eInput.value.match(pattern)){ 
    eField.classList.add("error");
    eField.classList.remove("valid");
    let errorTxt = eField.querySelector(".error-text");
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  } else {
    eField.classList.remove("error");
    eField.classList.add("valid");
  }
}
function checkPhone(){ 
  let pattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if(!phInput.value.match(pattern)){ 
    phField.classList.add("error");
    phField.classList.remove("valid");
    let errorTxt = phField.querySelector(".error-text");
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
    let errorTxt = cpField.querySelector(".error-text");
    (cpInput.value !== pInput.value ) ? errorTxt.innerText = "password should be the same" : errorTxt.innerText = "this field can't be blank";
  }else{ 
    cpField.classList.remove("error");
    cpField.classList.add("valid");
  }
}
function redirect() {
  Swal.fire({
    title: 'good!',
    text: 'Thank you for registering, you will now be redirected',
    icon: 'success',
    confirmButtonText: 'ok'
  }).then(() => {
    console.log("haha haha in your face!!!")
    //window.location.href = form.getAttribute("action");
  })
}

export {inputArray, sInput, ver};
