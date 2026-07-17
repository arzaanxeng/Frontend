const el = document.getElementById("header");
el.addEventListener("click" , ()=>{
    el.textContent = "Well , u can definitely see the text has changed!";
})

el.addEventListener("click" , ()=>{
    el.style.backgroundColor = "green";
})

const element = document.getElementById("parent");
console.dir(element.children); // We have three children

// We can see how optimally we are able to write our code using for each child!
for(let child of element.children){
    child.addEventListener("click" , ()=>{
    child.textContent = "Well , u can definitely see the text has changed!";
})
} 

