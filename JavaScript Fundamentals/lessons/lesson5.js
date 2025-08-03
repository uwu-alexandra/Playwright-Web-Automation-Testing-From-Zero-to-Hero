// Logical Operators

// Logical "AND"

console.log(true && true); // all values have to be true

// Logical "OR"
console.log(true || false); // only one value has to be true

// Logical "NOT"
console.log(!true); // negates the value, so true becomes false

// Logical "XOR" (exclusive OR)
console.log(true ^ false); // true if one is true and the other is false, but not both

// Logical "NOR" (not OR)
console.log(!(true || false)); // true if both are false

// Logical "NAND" (not AND)
console.log(!(true && false)); // true if at least one is false

// Logical "XNOR" (not XOR)
console.log(!(true ^ false)); // true if both are the same (both true or both false)

// Logical "IMPLICATION" (if-then)
console.log(!true || false); // true if the first is false or both are true, otherwise false

// Logical "BICONDITIONAL" (if and only if)
console.log((true && false) || (!true && !false)); // true if both are the same (both true or both false)
