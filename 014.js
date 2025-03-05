const clone = { ...original };

// OR using Object.assign()
// const clone = Object.assign({}, original);

console.log(clone); // Output: { name: "Alice", age: 25, city: "New York" }

// Verifying they are separate objects
clone.age = 30;
console.log(original.age); // Output: 25 (Original remains unchanged)
console.log(clone.age);    // Output: 30 (Only the clone is modified)
