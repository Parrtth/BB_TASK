function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Example usage:
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { city: "New York", country: "USA" };
  
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj);
  
  // Output: { name: "Alice", age: 25, city: "New York", country: "USA" }
  