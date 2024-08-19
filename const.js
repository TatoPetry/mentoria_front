// Const com tipo primitivo
const numero = 42;
console.log(numero); // Saída: 42

// Tentar reatribuir um valor a um const de tipo primitivo
// numero = 50; // Erro: Assignment to constant variable.

// Const com objeto
const pessoa = {
    nome: "Alice",
    idade: 30
};
console.log(pessoa); // Saída: { nome: 'Alice', idade: 30 }

// Alterando uma propriedade do objeto
pessoa.idade = 31;
console.log(pessoa); // Saída: { nome: 'Alice', idade: 31 }

// Tentando reatribuir um novo objeto a pessoa
// pessoa = { nome: "Bob", idade: 25 }; // Erro: Assignment to constant variable.