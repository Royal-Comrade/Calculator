let display=document.querySelector("#display");
let buttons=document.querySelectorAll(".button");
let operators=document.querySelectorAll(".ope");
let Ac=document.querySelector("#ac");
let Delete=document.querySelector("#del");
let result=document.querySelector("#Calculate");

buttons.forEach((box)=>{
  box.addEventListener("click",()=>{
    display.textContent+=box.textContent;
  });
});
operators.forEach((box)=>{
  box.addEventListener("click",()=>{
    display.textContent+=box.textContent;
  });
});
Ac.addEventListener("click",()=>{
  display.textContent=" ";
});
result.addEventListener("click",calculateResult)
function calculateResult(){
  try{
    display.textContent=eval(display.textContent)
  }catch(e){
    display.textContent="Error"
  }
}

Delete.addEventListener("click",()=>{
  display.textContent=display.textContent.slice(0,-1);
});