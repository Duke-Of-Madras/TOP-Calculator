const display=document.getElementsByClassName("display")[0];
const one=document.getElementsByClassName("1")[0];
const two=document.getElementsByClassName("2")[0];
const three=document.getElementsByClassName("3")[0];
const four=document.getElementsByClassName("4")[0];
const five=document.getElementsByClassName("5")[0];
const six=document.getElementsByClassName("6")[0];
const seven=document.getElementsByClassName("7")[0];
const eight=document.getElementsByClassName("8")[0];
const nine=document.getElementsByClassName("9")[0];
const zero=document.getElementsByClassName("0")[0];

const AC=document.getElementsByClassName("ac")[0];
const DEL=document.getElementsByClassName("del")[0];
const mul=document.getElementsByClassName("*")[0];
const div=document.getElementsByClassName("/")[0];
const add=document.getElementsByClassName("+")[0];
const sub=document.getElementsByClassName("-")[0];
const decimal=document.getElementsByClassName(".")[0];
const equal=document.getElementsByClassName("=")[0];


let count=0;//for decimal point
let operatorcount=0;
display.textContent="";
let expression="";

function func(string){
    display.textContent+=string;
    expression+=string;
}

function funcreal(string){
    expression+=string;
}
function clear(){
    display.textContent="";
    expression="";
    operatorcount=0;
}

function cleardisplay(){
    display.textContent="";
}

function last(){
    display.textContent=display.textContent.slice(0,-1);
    expression=expression.slice(0,-1);
}

function calculate(){
    let a=(eval(expression));
    display.textContent=a;
    expression=a;

}

one.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("1");
    }else{
        func("1");
    }})
two.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("2");
    }else{
        func("2");
    }});
three.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("3");
    }else{
        func("3");
    }});
four.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("4");
    }else{
        func("4");
    }});
five.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("5");
    }else{
        func("5");
    }});
six.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("6");
    }else{
        func("6");
    }});
seven.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("7");
    }else{
        func("7");
    }});
eight.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("8");
    }else{
        func("8");
    }});
nine.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("9");
    }else{
        func("9");
    }});
zero.addEventListener("click",()=>{
    if(operatorcount===1){
        cleardisplay();
        func("0");
    }else{
        func("0");
    }});

add.addEventListener("click",()=>{
    count=0;
    if(operatorcount===1){
        operatorcount=0;
        calculate();
        funcreal("+");
        operatorcount++;

    }else{
        cleardisplay();
        funcreal("+");
        operatorcount++;
    }
});
sub.addEventListener("click",()=>{
     count=0;
    if(operatorcount===1){
        operatorcount=0;
        calculate();
        funcreal("-");
        operatorcount++;

    }else{
        cleardisplay();
        funcreal("-");
        operatorcount++;
    }
});

mul.addEventListener("click",()=>{
     count=0;
    if(operatorcount===1){
        operatorcount=0;
        calculate();
        funcreal("*");
        operatorcount++;

    }else{
        cleardisplay();
        funcreal("*");
        operatorcount++;
    }
});
div.addEventListener("click",()=>{
     count=0;
    if(operatorcount===1){
        operatorcount=0;
        calculate();
        funcreal("/");
        operatorcount++;

    }else{
        cleardisplay();
        funcreal("/");
        operatorcount++;
    }
});
decimal.addEventListener("click",()=>{
    if(count===0){
        func(".");
        count++;
    }else{
        
    }
    
});


AC.addEventListener("click",()=>clear());

DEL.addEventListener("click",()=>last());

equal.addEventListener("click",()=>calculate());





