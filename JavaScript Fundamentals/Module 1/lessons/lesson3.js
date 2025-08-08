// Objects

var customer = {
  name: "John Doe",
  age: 30,
  ocupation: "Software Engineer",
  kids: ["Alice", "Bob"],
};

console.log(customer.name); // Accessing object properties using dot notation
console.log(customer["age"]); // Accessing object properties using bracket notation

customer.age = 31; // Updating object property
console.log(customer.age);

customer["name"] = "Jane Doe"; // Updating object property
console.log(customer["name"]); // Output: Jane Doe

console.log(
  `Customer Name: ${customer.name}, Age: ${customer.age}, Occupation: ${customer.ocupation}`
);

// Arrays

var cars = ["Toyota", "Honda", "Ford"];
console.log(cars[0]); // Accessing array elements using index

cars[1] = "Chevrolet"; // Updating array element
console.log(cars[1]); // Output: Chevrolet

console.log(customer.kids[0]); // Accessing nested array in object
