// ====================== THEORY: CAPTURING vs BUBBLING ======================
// 
// Event Propagation has two main phases:
// 
// 1. CAPTURING PHASE (Trickling Down):
//    - Event starts from the root (document/window) and moves DOWN to the target.
//    - Triggered when 3rd parameter is set to `true`.
// 
// 2. BUBBLING PHASE (Default):
//    - Event starts at the target element and bubbles UP to the root.
//    - This is the default behavior when 3rd parameter is `false` or omitted.
// 
// Full Flow when clicking on Child:
//    Capturing (Top → Down) → Target → Bubbling (Bottom → Up)
// 
// =========================================================================

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


grandParent.addEventListener("click", (e) => {
    console.log(e.target); // It will point towards the element which triggered the event!
    console.log("GrandParent (Capturing)");
}, true); // true = Capturing Phase will be executing the event 

parent.addEventListener("click", () => {
    console.log("Parent (Capturing)");
}, true); // true = Capturing Phase will be executing the event

child.addEventListener("click", () => {
    console.log("Child (Capturing)");
}, true); // true = Capturing Phase will be executing the event

// ========================================================================
// Expected Output when clicking on the Child element:
// 
// 1. GrandParent (Capturing)     ← Capturing Phase (Top to Bottom)
// 2. Parent (Capturing)          ← Capturing Phase continues
// 3. Child was clicked!          ← Target Phase
// 4. Parent was clicked!         ← Bubbling Phase starts (if added)
// 5. GrandParent was clicked!    ← Bubbling Phase continues
// 
// Note: In this code, only Child has bubbling listener.
// You can add bubbling listeners to parent and grandParent too for full demo.
// ========================================================================