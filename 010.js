let person = {
    name: "Alice",
    age: 23,
    city: "New York",
    country: "USA"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
