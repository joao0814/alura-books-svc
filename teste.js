const fs = require("fs"); // Importa o módulo fs

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")); // Lê o arquivo livros.json

const novoDado = { id: "6", title: "O Senhor dos Anéis" }; // Novo livro a ser adicionado

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])); // Adiciona um novo livro ao arquivo

console.log(JSON.parse(fs.readFileSync("livros.json"))); // Exibe o conteúdo do arquivo
