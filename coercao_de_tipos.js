let x = 0;
if (x) {
    console.log("x é truthy");
} else {
    console.log("x é falsy"); // Saída: "x é falsy"
}

let y = "Hello";
if (y) {
    console.log("y é truthy"); // Saída: "y é truthy"
} else {
    console.log("x é falsy"); // Saída: "y é falsy"
}

let z = null;
console.log(Boolean(z)); // Saída: false

let w = 42;
console.log(Boolean(w)); // Saída: true