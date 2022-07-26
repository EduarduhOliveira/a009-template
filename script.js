/*const pessoa = prompt("qual seu nome?");
const corFavorita = prompt("Qual sua cor favorita?");
const citacao = prompt("Qual a sua citação favorita? ")
const nomeMaiusculo = pessoa.toUpperCase()

const fraseConcatenada = "A cor preferida de " +nomeMaiusculo+ " é "  +corFavorita+ " e a citação preferida dela(e) é :"+"\""+citacao+"\"";

console.log(fraseConcatenada,nomeMaiusculo.length, "tem letra a ?",pessoa.includes("a"))


const fraseTemplateString = `nome: ${nomeMaiusculo} \nCor favorita: ${corFavorita}`;

console.log (fraseTemplateString);*/

const nomeUsuario = prompt("Qual seu nome?");
const emailUsuario = prompt("Qual o seu e-mail ?");
const boasVindas =" O e-mail "+emailUsuario+ " foi cadastrado com sucesso. " + " seja bem vindo "  +nomeUsuario ;
console.log(boasVindas);
console.log("Seu nome tem "+nomeUsuario.length+" letras ");
 const substitui = boasVindas.replaceAll("r","l");
 console.log (substitui);

 const tem = emailUsuario.includes("@");
console.log(tem);