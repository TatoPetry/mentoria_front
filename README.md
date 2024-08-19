
---

### 1. Introdução e História do JavaScript
**JavaScript** é uma linguagem de programação criada em 1995 por Brendan Eich enquanto trabalhava na Netscape. Originalmente chamada de Mocha, foi renomeada para JavaScript em uma tentativa de capitalizar o sucesso do Java. Hoje, JavaScript é uma das linguagens mais populares do mundo, usada principalmente para o desenvolvimento web, tanto no front-end quanto no back-end.

### 2. Variáveis em JavaScript
As variáveis em JavaScript são usadas para armazenar dados. Elas podem ser declaradas usando `var`, `let` ou `const`. Cada uma dessas palavras-chave tem características diferentes quanto ao escopo e à mutabilidade.

#### Diferença de Escopo entre `var` e `let`

**Exemplo:**
```javascript
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
```

- **`var`**: O escopo de `var` é a função ou o escopo global. Mesmo que seja declarada dentro de um bloco (`if`, `for`, etc.), a variável ainda é acessível fora desse bloco, desde que esteja dentro da mesma função.
  
- **`let`**: O escopo de `let` é o bloco de código onde foi declarada. Isso significa que uma variável declarada com `let` dentro de um bloco (`if`, `for`, etc.) não pode ser acessada fora desse bloco.

#### Diferença entre `const` com Tipos Primitivos e Objetos

**Exemplo:**
```javascript
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
```

- **`const` com Tipos Primitivos**: Quando você declara uma variável com `const` usando um tipo primitivo (como `number`, `string`, `boolean`), a referência e o valor são imutáveis. Tentar reatribuir um novo valor a essa constante resultará em um erro.
  
- **`const` com Objetos**: Quando você declara uma variável com `const` usando um objeto ou array, a referência à variável é imutável (ou seja, você não pode reatribuir a variável para apontar para um novo objeto ou array), mas as propriedades internas do objeto ou os elementos do array podem ser modificados.

### 3. Funções em JavaScript
Funções são blocos de código que podem ser executados quando chamados. Elas permitem reutilizar código e organizá-lo de forma mais eficiente. Em JavaScript, existem diferentes maneiras de definir funções, cada uma com suas particularidades.

#### Função Tradicional (Function Declaration)
Uma **função tradicional** é definida usando a palavra-chave `function`, seguida do nome da função e de um conjunto de parâmetros entre parênteses. Essas funções são **elevadas** (hoisting), o que significa que podem ser chamadas antes de serem definidas no código.

**Exemplo:**
```javascript
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Chamando a função
console.log(saudar("Alice")); // Saída: "Olá, Alice!"
```

- **Elevada (Hoisting)**: Pode ser chamada antes de sua declaração no código.
- **Escopo**: Funções tradicionais têm escopo de função, ou seja, as variáveis declaradas dentro da função não são acessíveis fora dela.

#### Função Anônima (Function Expression)
Uma **função anônima** é uma função sem nome, que é geralmente atribuída a uma variável. Esse tipo de função não é elevada, o que significa que não pode ser chamada antes de sua definição.

**Exemplo:**
```javascript
const multiplicar = function(a, b) {
    return a * b;
};

// Chamando a função
console.log(multiplicar(2, 3)); // Saída: 6
```

- **Não Elevada**: Deve ser definida antes de ser chamada.
- **Escopo**: Semelhante à função tradicional, tem escopo de função.
- **Nome**: Pode ser anônima ou ter um nome, mas geralmente é anônima.

#### Função de Seta (Arrow Function)
Uma **função de seta** (arrow function) é uma forma mais concisa de escrever funções em JavaScript. Elas são definidas usando a sintaxe `() => {}`. Arrow functions têm um comportamento especial em relação ao `this`, que é lexicamente vinculado, ou seja, o valor de `this` é determinado pelo contexto em que a função foi criada, e não pelo contexto em que foi chamada.

**Exemplo:**
```javascript
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Saída: 5
```

- **Não Elevada**: Deve ser definida antes de ser chamada.
- **Escopo**: Assim como outras funções, tem escopo de função.
- **`this` Lexical**: O valor de `this` dentro de uma arrow function é herdado do escopo onde a função foi definida, não do contexto de chamada.
- **Sintaxe Concisa**: Ideal para funções simples ou expressões curtas.

#### Resumo das Diferenças:
- **Hoisting**: Apenas as funções tradicionais são elevadas; function expressions e arrow functions não são.
- **`this`**: As arrow functions têm `this` lexical, enquanto as funções tradicionais e anônimas não.
- **Sintaxe**: Arrow functions oferecem uma forma mais curta e direta de escrever funções, mas podem ser limitadas em alguns casos (por exemplo, quando se precisa de um `this` dinâmico).


### 4. Tipos Primitivos em JavaScript
JavaScript possui seis tipos primitivos: `number`, `string`, `boolean`, `null`, `undefined` e `symbol`. Além desses, o `bigint` é um tipo numérico adicionado em versões mais recentes da linguagem.

**Exemplo:**
```javascript
let numero = 42;          // Number
let texto = "Hello";      // String
let verdade = true;       // Boolean
let vazio = null;         // Null
let indefinido;           // Undefined
let simbolo = Symbol();   // Symbol
```

#### Valores que se Convertem para `true` ou `false`
Em JavaScript, qualquer valor pode ser convertido para um valor booleano (`true` ou `false`). Isso é chamado de **coerção de tipos**. Alguns valores são considerados **falsy** (ou seja, se comportam como `false` em contextos booleanos), enquanto outros são considerados **truthy** (se comportam como `true`).

- **Valores Falsy**: 
  - `0`
  - `""` (string vazia)
  - `null`
  - `undefined`
  - `NaN` (Not a Number)
  - `false`

- **Valores Truthy**:
  - Qualquer número diferente de `0`
  - Strings não vazias (`"Hello"`, `"0"`, etc.)
  - Objetos e arrays (mesmo que vazios)
  - `true`

**Exemplo de Coerção de Tipos:**
```javascript
let x = 0;
if (x) {
    console.log("x é truthy");
} else {
    console.log("x é falsy"); // Saída: "x é falsy"
}

let y = "Hello";
if (y) {
    console.log("y é truthy"); // Saída: "y é truthy"
}

let z = null;
console.log(Boolean(z)); // Saída: false

let w = 42;
console.log(Boolean(w)); // Saída: true
```

#### Explicação:
- O número `0` é considerado falsy, enquanto qualquer outro número é truthy.
- Uma string vazia (`""`) é falsy, mas qualquer string com conteúdo é truthy.
- Valores como `null`, `undefined`, `NaN`, e `false` são falsy por definição.


### 5. Assincronia em JavaScript

JavaScript é uma linguagem de programação assíncrona, o que significa que pode executar várias operações ao mesmo tempo sem bloquear o fluxo principal do programa. Isso é particularmente útil ao lidar com tarefas que podem levar algum tempo para serem concluídas, como requisições a servidores, leitura de arquivos ou execução de temporizadores.

#### O que é Assincronia?
Imagine que você está cozinhando um jantar e precisa fazer várias coisas ao mesmo tempo: ferver água, preparar os ingredientes, e preaquecer o forno. Em vez de esperar que cada etapa termine antes de começar a próxima, você pode fazer várias coisas simultaneamente. Por exemplo, enquanto a água ferve, você pode cortar os legumes. Isso é semelhante ao que JavaScript faz com a programação assíncrona.

Em JavaScript, quando você faz uma chamada assíncrona, o código continua a ser executado enquanto a tarefa assíncrona (como uma requisição de rede) está em andamento. Quando a tarefa é concluída, o JavaScript retorna ao ponto em que deixou essa tarefa e executa qualquer código associado ao resultado.

#### Funções Assíncronas em JavaScript
JavaScript fornece várias maneiras de lidar com operações assíncronas:

- **setTimeout**: Executa uma função após um determinado período de tempo.
- **Promises**: Representam um valor que pode estar disponível agora, no futuro, ou nunca. Promises permitem que você manipule operações assíncronas de maneira mais clara.
- **async/await**: Uma sintaxe mais recente que facilita o trabalho com promises, permitindo escrever código assíncrono de forma semelhante ao código síncrono.

**Exemplo com `setTimeout`:**
```javascript
console.log("Início");
setTimeout(() => {
    console.log("Esse log aparece após 2 segundos");
}, 2000);
console.log("Fim");

// Saída:
// "Início"
// "Fim"
// "Esse log aparece após 2 segundos"
```
Neste exemplo, mesmo que o `setTimeout` seja definido para 2 segundos, o JavaScript não espera que esses 2 segundos passem antes de continuar. Ele segue adiante e imprime "Fim", e só então, quando o temporizador termina, imprime "Esse log aparece após 2 segundos".

#### Promises
Uma `Promise` em JavaScript é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

**Exemplo com `Promise`:**
```javascript
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
```
Aqui, a `Promise` simula uma operação que pode ser bem-sucedida ou não. Dependendo do resultado, a função `then` ou `catch` será chamada.

#### async/await
O `async/await` é uma maneira de lidar com promises que torna o código assíncrono mais fácil de ler e escrever. Com `async/await`, você pode esperar que uma `Promise` seja resolvida ou rejeitada dentro de uma função assíncrona sem precisar usar o método `then`.

**Exemplo com `async/await`:**
```javascript
async function executarAsync() {
    try {
        let resposta = await promessa; // Aguardar a resolução da promessa
        console.log(resposta);         // Executado após a Promise ser resolvida
    } catch (erro) {
        console.error(erro);           // Executado se a Promise for rejeitada
    }
}

executarAsync();
```
Esse exemplo simplifica o manuseio de operações assíncronas. O `await` faz com que a execução da função pause até que a `Promise` seja resolvida, mas sem bloquear o restante do código.

Pense na assincronia como a forma de realizar tarefas no seu dia a dia. Imagine que você está fazendo uma ligação para um amigo, mas ele não atende de imediato. Você não fica parado esperando ele retornar a ligação; em vez disso, continua suas outras atividades (como lavar a louça ou responder e-mails). Quando o amigo finalmente liga de volta, você atende e continua a conversa. Isso é semelhante a como o JavaScript lida com tarefas assíncronas: ele continua executando outras partes do código enquanto espera a resposta de operações que podem demorar, como uma requisição de rede.

### 6. Método `fetch` em JavaScript

O método `fetch` em JavaScript é usado para fazer requisições HTTP assíncronas. Ele retorna uma `Promise`, que resolve para a `Response` da requisição. Esse método é uma maneira moderna e poderosa de interagir com APIs, permitindo que você obtenha dados de servidores externos de forma eficiente.

#### Usando `fetch` para Obter Dados de uma API
Vamos usar o `fetch` para fazer uma requisição à API pública do Pokémon e obter informações sobre um Pokémon específico. A API do Pokémon é uma interface que permite acessar dados sobre Pokémons, como nome, tipo, habilidades, entre outros.

**Exemplo:**
```javascript
const url = "https://pokeapi.co/api/v2/pokemon/pikachu"; // URL da API para obter informações sobre o Pikachu

// Fazendo a requisição usando fetch
fetch(url)
    .then(response => {
        if (!response.ok) { // Verifica se a resposta foi bem-sucedida
            throw new Error("Falha na requisição");
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        console.log("Nome:", data.name); // Nome do Pokémon
        console.log("Altura:", data.height); // Altura do Pokémon
        console.log("Habilidades:", data.abilities.map(ability => ability.ability.name).join(", ")); // Habilidades do Pokémon
    })
    .catch(error => {
        console.error("Erro:", error); // Lida com qualquer erro na requisição
    });
```

#### Explicação do Código:
- **URL**: A URL usada para a requisição é específica para o Pokémon Pikachu, mas poderia ser substituída por qualquer outro Pokémon, como `https://pokeapi.co/api/v2/pokemon/charmander` para o Charmander.
- **fetch(url)**: Este método inicia a requisição à API. Ele retorna uma `Promise`, que é resolvida quando a resposta do servidor é recebida.
- **response.ok**: Este atributo verifica se a resposta foi bem-sucedida (status 200-299). Se a resposta não for bem-sucedida, lançamos um erro.
- **response.json()**: Se a resposta for bem-sucedida, ela é convertida para JSON usando o método `json()`, que também retorna uma `Promise`.
- **.then(data => { ... })**: Aqui, lidamos com os dados JSON recebidos da API. No exemplo, estamos extraindo o nome, altura e habilidades do Pikachu.
- **.catch(error => { ... })**: Caso ocorra algum erro durante a requisição ou o processamento da resposta, ele será capturado aqui e exibido no console.

