let btn = document.querySelector("button");
 let h2 = document.querySelector("h2");
 var inner  = document.querySelector('.inner')
let grow = 0 ;

btn.addEventListener("click",()=>{

    let int  =setInterval(()=>{
        grow++;
        h2.innerHTML = grow + "%";
        inner.style.width = grow + "%";
    
},100) 

setTimeout(()=>{
clearInterval(int)
},10000)


}
);

// clearInterval();





