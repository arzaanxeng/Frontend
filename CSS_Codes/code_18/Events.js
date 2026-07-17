// ====================== THEORY OF EVENT PROPAGATION ======================
// 
// When an event (like click) occurs on an element, it doesn't stop there.
// It goes through EVENT PROPAGATION, which has 3 phases:
// 
// 1. Capturing Phase   → Event travels from top (root) to target (down)
// 2. Target Phase      → Event reaches the actual element clicked
// 3. Bubbling Phase    → Event travels back up from target to root (default) => The condition is set to false by default

// By default, addEventListener() uses Bubbling Phase (bottom → up) => Here each element is checked wether it is calling or not?

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Grand Parent Event Listener
grandParent.addEventListener("click", () => {
    console.log("GrandParent was clicked!");
    // This will run during Bubbling phase (after child and parent)
});

// Parent Event Listener
parent.addEventListener("click", () => {
    console.log("Parent was clicked!");
    // This will run after child, before grandParent (in bubbling)
});

// Child Event Listener
child.addEventListener("click", () => {
    console.log("Child was clicked!");
    // This runs first if and because it's the target element
});


// ====================== KEY POINTS ======================
// 
// 1. Clicking on Child will trigger all three logs:
//    → Child → Parent → GrandParent   (This is Event Bubbling)
// 
// 2. Bubbling = Default behavior of addEventListener()
// 
// 3. To use Capturing Phase (Top to Bottom), use true as 3rd argument:
//    element.addEventListener("click", handler, true);
// 
// 4. Order in default bubbling:
//    Innermost element → Parents → Grand Parents
// 
// ========================================================

