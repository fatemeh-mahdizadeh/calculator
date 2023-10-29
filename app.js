function fill(value){
    document.querySelector(".h-text").textContent+=value;
    
}
function resett(){
    document.querySelector(".h-text").textContent="";
}
function dele(){
    del=document.querySelector(".h-text").textContent.slice(0,-1);
    document.querySelector(".h-text").textContent=del;
}
function final(){
    run=document.querySelector(".h-text").textContent;
    document.querySelector(".h-text").textContent=eval(run);
}
