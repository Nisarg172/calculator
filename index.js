console.log("javaScript is work");
var answer=document.getElementById("answer");

getValue=()=>{
    answer=document.getElementById("answer");
    return answer.value;
}
var btn7=document.getElementById("btn7");
var btn8=document.getElementById("btn8");
var btn9=document.getElementById("btn9");
var btnPlus=document.getElementById("btnPlus");
var btnOpenBreacker=document.getElementById("btnOpenBreacker");

var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btnMinus=document.getElementById("btnMinus");
var btnCloseBreacker=document.getElementById("btnCloseBreacker");

var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btnMultiplication=document.getElementById("btnMultiplication");
var btnSquare=document.getElementById("btnSquare");

var btnDivide=document.getElementById("btnDivide");
var btn0=document.getElementById("btn0");
var btnPoint=document.getElementById("btnPoint");
var btnMod=document.getElementById("btnMod");
var btnEqalto=document.getElementById("btnEqalto");

var btnClearAll=document.getElementById("btnClearAll");

btn7.addEventListener("click", ()=>{
    let val= getValue()+'7';
    answer.value=val;    
});

btn8.addEventListener("click", ()=>{
    let val= getValue()+'8';
    answer.value=val;    
});

btn9.addEventListener("click", ()=>{
    let val= getValue()+'9';
    answer.value=val;    
});

btnPlus.addEventListener("click", ()=>{
    let val= getValue()+'+';
    answer.value=val;    
});

btnOpenBreacker.addEventListener("click", ()=>{
    let val= getValue()+'(';
    answer.value=val;    
});



btn4.addEventListener("click", ()=>{
    let val= getValue()+'4';
    answer.value=val;    
});

btn5.addEventListener("click", ()=>{
    let val= getValue()+'5';
    answer.value=val;    
});

btn6.addEventListener("click", ()=>{
    let val= getValue()+'6';
    answer.value=val;    
});
btnMinus.addEventListener("click", ()=>{
    let val= getValue()+'-';
    answer.value=val;    
});

btnCloseBreacker.addEventListener("click", ()=>{
    let val= getValue()+')';
    answer.value=val;    
});


btn1.addEventListener("click", ()=>{
    let val= getValue()+'1';
    answer.value=val;    
});

btn2.addEventListener("click", ()=>{
    let val= getValue()+'2';
    answer.value=val;    
});

btn3.addEventListener("click", ()=>{
    let val= getValue()+'3';
    answer.value=val;    
});
btnMultiplication.addEventListener("click", ()=>{
    let val= getValue()+'*';
    answer.value=val;    
});

btnSquare.addEventListener("click", ()=>{
    let val= getValue()+'**';
    answer.value=val;    
});




btnDivide.addEventListener("click", ()=>{
    let val= getValue()+'/';
    answer.value=val;    
});

btn0.addEventListener("click", ()=>{
    let val= getValue()+'0';
    answer.value=val;    
});

btnPoint.addEventListener("click", ()=>{
    let val= getValue()+'.';
    answer.value=val;    
});

btnMod.addEventListener("click", ()=>{
    let val= getValue()+'%';
    answer.value=val;    
});

btnEqalto.addEventListener("click", ()=>{
    var equation=getValue();

    let val= eval(equation) ;
    answer.value=val;    
});



btnClearAll.addEventListener("click", ()=>{
    let val= "";
    answer.value=val;    
});






