const person = {
    name: "Alice",
    age: 25,
    city: "New York"
  };

  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  