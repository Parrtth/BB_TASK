function containsAlice(names) {
    return names.includes("Alice");
  }
  
  // Example usage:
  const namesArray = ["Bob", "Charlie", "Alice", "David"];
  console.log(containsAlice(namesArray)); // Output: true
  
  const anotherArray = ["John", "Jane", "Michael"];
  console.log(containsAlice(anotherArray)); // Output: false
  