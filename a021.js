function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5];
  console.log(sumArray(nums)); // Output: 15
  