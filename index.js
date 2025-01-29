// Theme Toggle
const body = document.body;
const button = document.getElementById("button")
const header = document.querySelector(".header")
const container = document.querySelectorAll(".container")
const section = document.getElementsByTagName("section")
const h2tags = document.getElementsByTagName("h2")
const ptags = document.getElementsByTagName("p")
const litags = document.getElementsByTagName("li")
const atags = document.getElementsByTagName("a")




button.addEventListener("click", function(){
    if(button.innerHTML.includes('<i class="fa-regular fa-moon">')){

    body.style.backgroundColor = "black"
    button.innerHTML = '<i class="fas fa-sun"></i>'
    header.style.backgroundColor = "rgba(126, 126, 126, 0.8)"
    for( i=0; i<container.length; i++){
        container[i].style.backgroundColor = "rgba(109, 108, 108, 0.8)"
    }
    for( i=0; i<h2tags.length; i++){
        h2tags[i].style.color = "rgb(255, 255, 255)"
    }

    for( i=0; i<section.length; i++){
        section[i].style.borderBottomColor = "rgb(255, 255, 255)"
    }
    for( i=0; i<ptags.length; i++){
        ptags[i].style.color = "rgb(255, 255, 255)"
    }
    for( i=0; i<litags.length; i++){
        litags[i].style.color = "rgb(255, 255, 255)"
    }
    for( i=0; i<atags.length; i++){
        atags[i].style.color = "rgb(255, 255, 255)"
    }

}else if(button.innerHTML.includes('<i class="fas fa-sun">')){

    button.addEventListener("click", function(){

    location.reload()
    })
       
}}
)





