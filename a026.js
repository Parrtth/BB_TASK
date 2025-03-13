function checkPositiveNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive number");
        } else {
            reject("Negative number or zero");
        }
    });
}

// Using the function
checkPositiveNumber(10)
    .then(console.log)  // Output: "Positive number"
    .catch(console.error);  // Not executed in this case

checkPositiveNumber(-5)
    .then(console.log)  
    .catch(console.error);  // Output: "Negative number or zero"
