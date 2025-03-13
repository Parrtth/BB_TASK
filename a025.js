function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 completed");
        }, 1000); // Resolves after 1 second
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 completed");
        }, 2000); // Resolves after 2 seconds
    });
}

// Using the Promises
task1().then(console.log); // Logs after 1 second
task2().then(console.log); // Logs after 2 seconds

