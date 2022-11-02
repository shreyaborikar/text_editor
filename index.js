const charVal=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");

let userChar=0;

const updateCounter = () =>{
    userChar=charVal.value.length;
    totalCount.innerText=userChar;
    remainingCount.innerText=200-userChar;
};

charVal.addEventListener("keyup",() => updateCounter());

const copyText= () =>{
     charVal.select();
     charVal.setSelectionRange(0,9999); //mobile version
     navigator.clipboard.writeText(charVal.value);
};