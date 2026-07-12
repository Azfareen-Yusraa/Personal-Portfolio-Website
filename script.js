const links = document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

document.querySelector("form")

.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Message sent.");

});