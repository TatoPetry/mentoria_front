// Exemplo com var
function exemploVar() {
    if (true) {
        var mensagem = "Olá com var";
    }
    console.log(mensagem); // Funciona, porque var tem escopo de função
}

exemploVar(); // Saída: "Olá com var"

// Exemplo com let
function exemploLet() {
    if (true) {
        let mensagem = "Olá com let";
        console.log(mensagem); // Funciona, mensagem está dentro do escopo
    }
    console.log(mensagem); // Erro: mensagem is not defined
}

exemploLet(); // Saída: ReferenceError: mensagem is not defined