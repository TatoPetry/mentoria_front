// function declaration
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Chamando a função
console.log(saudar("Alice")); // Saída: "Olá, Alice!"


// Function expression
const multiplicar = function(a, b) {
    return a * b;
};

// Chamando a função
console.log(multiplicar(2, 3)); // Saída: 6



// arrow function
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Saída: 5