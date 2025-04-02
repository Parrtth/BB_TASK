function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Promise!");
        }, 2000); // 2 seconds delay
    });
}

// Using the Promise
delayedPromise().then((message) => console.log(message));
