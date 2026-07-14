console.log("Hello from my side!");

// Basic for loop
for(let i = 0 ; i < 6 ; i++){
    console.log("Arzaan thsi side!");
}

let sum = 0;
for(let i = 0 ; i <=100 ; i++){
    sum +=i;
}
console.log("The sum of first 100 natural numbers is : " , sum);
 let j = 10 , x = 1;

while( x <= j ){
    x++;
}
console.log("The value of x now is : " , x);

// Special types of loop in JavaScript
// 1. for of loop
let str = "arzaan";
for(let i of str){
    console.log("i = " , i);
}

// 1. for in loop
const student = {
    name : "Arzaan",
    age : 19,
    cgpa : 9.00,
    isPass : true
};

for( let key in student ){
    console.log("key = " , key , " value = " , student[key]);
}


alert("JS file is loaded");