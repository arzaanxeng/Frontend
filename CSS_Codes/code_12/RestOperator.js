// The rest operator collects multiple values into one array or object.
const addNumbers = (...nums) =>{
    console.log(nums);
};
addNumbers(7,8,9,1,2,4,0,8,4,2);

// Addition of numbers!
function sum(...nums) {
    return nums.reduce((a,b) => a+b,0);
}
console.log(sum(1,2,3,4));

// Packing of arrays / obejcts using rest operator
const numbers = [10,20,30,40,50];
const[first,second,...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

const person = {
    name: "Arzaan",
    age: 20,
    city: "Delhi"
};

const {name ,...restDetails} = person;
console.log(name);
console.log(restDetails);

// Analogy of Rest Method
function pack(...items) {
    console.log(items);
}

pack("Book","Pen","Laptop");