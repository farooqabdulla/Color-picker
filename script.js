let btn = document.querySelectorAll("button")
let sec = document.querySelector("section")
let h3 = document.querySelector("h3")
let h1 = document.querySelector("h1")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let heart = document.querySelector(".heart")

btn.forEach((x)=>{
    x.addEventListener("mouseover",()=>{
        x.style.backgroundColor=x.innerText
        h3.style.color=x.innerText
        h3.innerText=`click here to change to ${x.innerText} theme`
        left.style.backgroundColor=x.innerText
        right.style.backgroundColor=x.innerText
        h1.style.transform="rotateX(360deg)"
        h1.style.transition="1s"
    })

    x.addEventListener("mouseout",()=>{
        x.style.backgroundColor="black"
        // sec.style.backgroundColor="black"
        h3.innerText=`click here to change to change the color`
        h3.style.color="white"
        
    })
    x.addEventListener("click",()=>{
        sec.style.backgroundColor=x.innerText
        h1.innerText=`Welcome to ${x.innerText} theme`
        h3.style.color="white"
        left.style.backgroundColor="white"
        right.style.backgroundColor="white"
    })

})