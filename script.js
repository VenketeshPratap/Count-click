var boxclick=document.getElementById("box");
var countclick=document.getElementById("click-count");
var count=0;

boxclick.addEventListener('click',function(){
    count++;
    countclick.innerText=count + " ";
});
