const temp = window.document.querySelectorAll("#content"); // -> mention the CSS selector
console.dir(temp);

const temp1 = window.document.getElementById("content");
console.dir(temp);
// The differnce between these two is thay .querySelectorAll will return an array which would require indexing
// to access and meanwhile .getElementById will return the the actual DOM element!

// temp1.textContent = "I am Arzaan and I am not sad today!"
// temp[1].textContent = "Click it !"

const temp2 = window.document.getElementById("heading");
console.dir(temp2);
temp2.style.backgroundColor = "pink";

//temp1.innerHTML  --> displays the whole content within all the tags!
//temp1.innerText  --> display the text only visible on the UI!

const temp3 = document.getElementsByTagName("li");
for(let i of temp3){
    console.log(i);
};