console.log(document);           // The whole DOM
console.log(document.body);      // <body> element
console.log(document.title);     // Page title

// 1. By ID (most common)
const introduction = document.getElementById('intro');
console.log(introduction);
// 2. By Tag Names
const paras = document.getElementsByTagName('p');
console.dir(paras);
// 3. Multiple elements
const items = document.getElementsByClassName('menu'); 
console.dir(items);


