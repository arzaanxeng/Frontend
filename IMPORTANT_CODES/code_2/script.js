// =============================================
// JavaScript Promises - Explained with Code
// =============================================

/*
What are Promises?

- A Promise is an object that represents the eventual completion (or failure)
  of an asynchronous operation and its resulting value.
  
- It solves the "callback hell" problem and makes asynchronous code
  more readable and manageable.

- Promises are part of how JavaScript handles asynchronicity while remaining
  single-threaded (using the Event Loop + Microtask Queue).

Key States of a Promise:
1. Pending   → Initial state (neither fulfilled nor rejected)
2. Fulfilled → Operation completed successfully
3. Rejected  → Operation failed
*/

// =============================================
// Example 1: Creating and Using a Basic Promise
// =============================================

console.log("=== Basic Promise Example ===");

console.log("Script started");

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    console.log("Promise executor running immediately (synchronously)");
    
    // Simulate async operation (e.g., API call, file read, timer)
    setTimeout(() => {
        const success = true;   // Change to false to test rejection
        
        if (success) {
            resolve("Data fetched successfully! ");   // Fulfilled
        } else {
            reject(new Error("Failed to fetch data ")); // Rejected
        }
    }, 1500); // 1.5 second delay
});

console.log("Promise created, but not yet resolved/rejected");
console.log("This code continues running immediately (non-blocking)");

// Consuming the Promise
myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    })
    .finally(() => {
        console.log("This always runs, regardless of success or failure");
    });

console.log("Script ended - waiting for Promise to settle...");

/*
Execution Flow:
1. Promise constructor runs synchronously (executor function).
2. setTimeout schedules the resolution in the future.
3. Rest of the script continues immediately.
4. After 1.5s, callback goes to Callback Queue → Event Loop moves it to Call Stack.
5. .then() / .catch() are queued in the Microtask Queue (higher priority than regular callbacks).
*/

// =============================================
// Example 2: Promise Chaining
// =============================================

console.log("\n=== Promise Chaining Example ===");

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 800);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 600);
    });
}

fetchUser()
    .then(user => {
        console.log("User fetched:", user);
        return fetchUserPosts(user.id);   // Return another promise
    })
    .then(posts => {
        console.log("Posts fetched:", posts);
    })
    .catch(err => console.error("Something went wrong:", err))
    .finally(() => console.log("User data flow completed"));

/*
Why chaining is powerful:
- Each .then() returns a new Promise
- Allows sequential async operations without nesting
- Much cleaner than nested callbacks
*/

// =============================================
// Example 3: Promise.all() and Error Handling
// =============================================

console.log("\n=== Promise.all() for Parallel Operations ===");

const promise1 = new Promise(r => setTimeout(() => r("API 1"), 1000));
const promise2 = new Promise(r => setTimeout(() => r("API 2"), 600));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("API 3 failed"), 400));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All succeeded:", results);
    })
    .catch(error => {
        console.log("One or more failed:", error);
        // Note: Promise.all() fails fast on first rejection
    });

// Alternative: Promise.allSettled() waits for all to complete
// Promise.race() returns as soon as first promise settles

/*
Useful static methods:
- Promise.all()      → All must succeed
- Promise.allSettled() → Waits for all, regardless of success/failure
- Promise.race()     → First one to settle wins
- Promise.any()      → First one to fulfill (ignores rejections)
*/

// =============================================
// Modern Way: async/await (Syntactic Sugar over Promises)
// =============================================

console.log("\n=== async/await Example ===");

async function getData() {
    try {
        console.log("Fetching data...");
        
        const user = await fetchUser();        // Pauses here until resolved
        console.log("User:", user);
        
        const posts = await fetchUserPosts(user.id);
        console.log("Posts:", posts);
        
        return "All data loaded successfully";
    } catch (error) {
        console.error("Caught error:", error);
    } finally {
        console.log("Cleanup done");
    }
}

// Call the async function
getData().then(result => console.log("Final result:", result));

console.log("async function called - it returns a Promise immediately");

/*
Important Notes:
- async functions always return a Promise
- await can only be used inside async functions
- Behind the scenes, it's still using Promises + Event Loop
*/

// =============================================
// Key Takeaways About Promises
// =============================================

/*
1. Promises make asynchronous code look more like synchronous code.
2. They are integrated with JavaScript's single-threaded model:
   - Resolution happens via Microtask Queue (higher priority than setTimeout).
3. Benefits:
   - Better error handling (catch works for entire chain)
   - Avoids callback hell
   - Easy chaining and parallel execution
4. Still single-threaded: No true parallelism, just better async coordination.

Promises are fundamental to modern JavaScript (fetch API, async/await, libraries, etc.).
*/