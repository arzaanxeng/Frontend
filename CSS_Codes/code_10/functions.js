
const multArrow = (a,b) =>{
    return a*b;
};

const addArrow = (a,b) =>{
    return a+b;
};

// Remember do not mix BigInt with other datatypes as it would throw an error -> TypeError

// const x = BigInt(prompt("Enter the first number : "));
// const y = BigInt(prompt("Enter the second number : "));
// console.log("The value of added number is : " , addArrow(x,y));
// console.log("The value of multiplied number is : " , multArrow(x,y));

// Total number of vowels in a String
const vowelNumbers = (x) =>{
    let count = 0;
    for(let i = 0 ; i < x.length ; i++){
        if( x[i] == 'a' || x[i] == 'e'  || x[i] == 'i'  || x[i] == 'o'  || x[i] == 'u' ){
            count++;
        }
    }
    return count;
};

let str = prompt("Enter the desired sentence : ").toLowerCase();
let count = vowelNumbers(str);
console.log("The number of vowels are : " , count );