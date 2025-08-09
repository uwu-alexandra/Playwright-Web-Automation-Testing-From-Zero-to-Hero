//Loops

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

while (true) {
  console.log("This will run forever");
  break; // Remove this line to create an infinite loop
}

// do-while loop
let j = 0;
do {
  console.log(`Do-while iteration ${j}`);
  j++;
} while (j < 5);

// Switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// forEach loop for arrays
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(`Number: ${num}`);
});
