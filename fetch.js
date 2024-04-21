let  Head=document.querySelector("#para");
let Button=document.querySelector("#btn");

Button.addEventListener("click",async()=>{

   let Api="https://api.adviceslip.com/advice";

    try{
        let Response=await (await fetch(Api)).json();
        Head.innerText=Response.slip.advice;
    }catch(err){
        console.log(err);
    }



});