console.log("Início");
setTimeout(() => {
    console.log("Esse log aparece após 2 segundos");
}, 2000);
console.log("Fim");

// Saída:
// "Início"
// "Fim"
// "Esse log aparece após 2 segundos"