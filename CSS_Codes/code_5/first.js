alert("Grade Calculator Loaded!");

const scoreInput = prompt("Enter your score (0-100):");
const score = Number(scoreInput);

if (isNaN(score) || score < 0 || score > 100) {
    alert("❌ Please enter a number between 0 and 100");
    console.log("Invalid input:", scoreInput);
} 
else if (score >= 90) {
    console.log("The overall grade obtained by the student is: A");
} 
else if (score >= 80) {
    console.log("The overall grade obtained by the student is: B");
} 
else if (score >= 70) {
    console.log("The overall grade obtained by the student is: C");
} 
else if (score >= 60) {
    console.log("The overall grade obtained by the student is: D");
} 
else {
    console.log("The overall grade obtained by the student is: F");
}