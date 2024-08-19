const promessa = new Promise((resolve, reject) => {
    let sucesso = true; // Simulando sucesso ou falha
    if (sucesso) {
        resolve("Operação bem-sucedida");
    } else {
        reject("Falha na operação");
    }
});

promessa
    .then(mensagem => console.log(mensagem))  // Será executado se a Promise for resolvida
    .catch(erro => console.error(erro));     // Será executado se a Promise for rejeitada