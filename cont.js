const adad= document.getElementById('parageraph');
const kam= document.getElementById('kahsh');
const poch= document.getElementById('rst');
const zyad= document.getElementById('afzayesh');

let newnum;


kam.addEventListener('click' , function(){
    newnum=Number(adad.innerHTML)-1;
    adad.innerHTML=newnum;

})

poch.addEventListener('click' , function(){
    adad.innerHTML=0;
})

zyad.addEventListener('click' , function(){
    newnum=Number(adad.innerHTML)+1;
    adad.innerHTML=newnum;
})

