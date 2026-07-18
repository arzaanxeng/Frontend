// ==================================================
// Why is JavaScript Single-Threaded and Synchronous?
// ==================================================

/*
1. **Single-Threaded**:
   - JavaScript runs on a **single call stack** (one main thread).
   - Only ONE piece of code can execute at any given time.
   - This design choice was made by Brendan Eich (creator of JS) for simplicity,
     especially for browser scripting where manipulating the DOM needs to be safe.
   - Benefit: No race conditions or complex thread synchronization issues.
   - Downside: Long-running code can "block" the entire program (freezes UI in browsers).

2. **Synchronous by default**:
   - Code executes line-by-line, top-to-bottom.
   - Each statement waits for the previous one to finish before moving forward.
   - This is predictable and easy to reason about.
*/

// ==========================================
// Example 1: Synchronous Blocking Behavior
// ==========================================

console.log("=== Synchronous Example ===");

console.log("Start of script");

// This function simulates a heavy, long-running task (CPU-intensive)
function longRunningTask() {
    console.log("Starting long running task...");
    
    // This loop will block the entire JavaScript thread
    let sum = 0;
    for (let i = 0; i < 1_000_000_000; i++) {  // 1 billion iterations
        sum += i;
    }
    
    console.log("Long running task finished");
    return sum;
}

// This will block everything until it completes
const result = longRunningTask();

console.log("This line only runs AFTER the long task finishes");
console.log("Result:", result);
console.log("End of script");

// Output order will be:
// Start of script
// Starting long running task...
// Long running task finished
// This line only runs AFTER...
// End of script

/*
Why does this happen?
- JS has only **one call stack**.
- The `for` loop occupies the stack until it finishes.
- Nothing else (UI updates, other code, events) can run meanwhile.
*/

// =============================================
// Example 2: How JavaScript handles Asynchronicity
// (Despite being single-threaded)
// =============================================

console.log("\n=== Asynchronous Example (Non-blocking) ===");

console.log("Start of async script");

// setTimeout schedules a callback, but does NOT block
setTimeout(() => {
    console.log("This runs after the timeout (from callback queue)");
}, 0);  // Even with 0ms, it doesn't run immediately

console.log("This runs immediately - no blocking");

function normalTask() {
    console.log("Normal synchronous task");
}

normalTask();

console.log("End of async script");

/*
Execution flow:

1. "Start of async script" → executed immediately
2. setTimeout() → registers callback in Web APIs (browser) / libuv (Node)
3. "This runs immediately..." → executed
4. normalTask() → executed
5. "End of async script" → executed

Then Event Loop moves the callback from Callback Queue to Call Stack.

This is possible because of:
- Call Stack (where sync code runs)
- Web APIs / Runtime APIs (handle async operations)
- Callback/Task Queue
- Event Loop (continuously checks if stack is empty → moves tasks)

JavaScript itself is single-threaded, but the **browser/Node runtime** provides async APIs.
*/

// =============================================
// Key Takeaways
// =============================================

/*
- **Single-threaded** = One call stack = Only one thing runs at a time.
- **Synchronous** = Code runs sequentially, blocking until done.
- **Async behavior** is achieved via:
    - Event Loop
    - Callback/Promise/Task Queues
    - Browser/Node APIs (setTimeout, fetch, I/O, etc.)
- This model is called "Event-driven, non-blocking I/O".

Modern JS (Promises, async/await) makes async code look synchronous while keeping the single-threaded nature.
*/