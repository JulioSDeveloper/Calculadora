const NUMEROS=document.querySelectorAll(".numeros");
const OPERADORES=document.querySelectorAll(".operadores")
const PANTALLA=document.getElementById("pantalla");
const btnAC=document.getElementById("botonAC");
const btnIgual=document.getElementById("igual");
let numA=0;
let numB=0;
let acumulador=0;
let operador;

function operar(a,b,operacion){
    let resultado=0;
    if(operacion==="+"){
        resultado=a+b;
    }
    if(operacion==="-"){
        resultado=a-b;
    }
    if(operacion==="X"){
        resultado=a*b;
    }
    if(operacion==="/"){
        resultado=a/b;
    }
    return resultado;
    
}


NUMEROS.forEach(e=>{
    e.addEventListener("click",()=>{
        PANTALLA.innerHTML+=e.textContent;
        console.log(e.textContent);
    })
})
OPERADORES.forEach(e=>{
    e.addEventListener("click",()=>{
     numA=parseInt(PANTALLA.textContent.trim());
     operador=e.textContent;
     if(acumulador===0){
        acumulador+=numA;
        PANTALLA.innerHTML=acumulador;
     }else{
        acumulador=operar(acumulador,numA,operador);
        PANTALLA.innerHTML=acumulador;
     }
     PANTALLA.innerText="";
    })
})
btnIgual.addEventListener("click",()=>{
    numB=parseInt(PANTALLA.textContent.trim());
    if(numA===0 || numB===0){
        return;
    }
    let resultado=operar(acumulador,numB,operador);
    PANTALLA.innerHTML=resultado;
})

btnAC.addEventListener("click",()=>{
    numA=0;
    numB=0;
    acumulador=0;
    PANTALLA.innerHTML="";
})



