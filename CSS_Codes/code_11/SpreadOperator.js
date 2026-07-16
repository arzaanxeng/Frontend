// The spread operator takes an array or object and expands it into individual elements/properties => Unpacking of objects/arrays .

const arr = [1,2,3];
console.log(...arr);

// The arr2 will point towars arr1 only !
const arr1 = [2,3,4];
const arr2 = arr1;
arr2.push(5);
console.log(...arr1);

// The copy of arr is made by spread method in following way:
const arr3 = [7,8,9];
const arr4 = [...arr3];
arr4.push(9);
console.log(...arr3);

// Merging of two arrays 
const arr6 = [17,18,9];
const arr5 = [10,11,2];
const arr7 = [...arr6,...arr5];
console.log(...arr7);

// Merging of two Objects
const person = {
    name: "Arzaan",
    age: 20
};

const newPerson = {
    ...person,
    city: "Hamirpur"
};

console.log(newPerson);
