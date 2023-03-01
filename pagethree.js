var btn1 =document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
var bt1 =document.getElementById("bt1");
var bt2 =document.getElementById("bt2");

btn1.addEventListener('click',()=>{
    bt1.style.display='block';
    bt2.style.display='none';
})
btn2.addEventListener('click',()=>{
    bt2.style.display='block';
    bt1.style.display='none';
})
