const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`Total de pessoas: ${data.length}`);

// 2. Imprima no console a quantidade de pessoas do sexo Feminino.
let feminino = data.filter((pessoa) => pessoa.sexo === "F");
console.log(`Total de mulheres: ${feminino.length}`);

// 3. Imprima no console a soma do salário de todas as pessoas.

let somaSalarios = data.reduce((soma, pessoa) => soma + pessoa.salario, 0);
console.log(`Soma dos salários: R$ ${somaSalarios.toFixed(2)}`);

// 4. Imprima no console a média do salário de todas as pessoas.

let mediaSalarios = somaSalarios / data.length;
console.log(`Média dos salários: R$ ${mediaSalarios.toFixed(2)}`);

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino

let somaSalariosHomens = data
  .filter((pessoa) => pessoa.sexo === "M")
  .reduce((soma, pessoa) => soma + pessoa.salario, 0);
console.log(
  `Soma dos salários dos homens: R$ ${somaSalariosHomens.toFixed(2)}`
);

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino

let mediaSalariosHomens =
  somaSalariosHomens / data.filter((pessoa) => pessoa.sexo === "M").length;
console.log(
  `Média dos salários dos homens: R$ ${mediaSalariosHomens.toFixed(2)}`
);

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.

let salarioMaior7000 = data.some((pessoa) => pessoa.salario > 7000);
console.log(`Existe salários superior a R$ 7.000:${salarioMaior7000}`);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

let posicaoEva = data.findIndex((pessoa) => pessoa.nome === "Eva Trindade");
console.log(`posição de Eva Trindade: ${posicaoEva}`);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

let pessoasSilva = data.filter((pessoa) => pessoa.nome.includes("Silva"));
console.log("pessoas com sobrenome 'Silva':", pessoasSilva);

// 10. Imprima os nomes utilizando o MAP

let nomes = data.map((pessoa) => pessoa.nome);
console.log("nomes:", nomes);
