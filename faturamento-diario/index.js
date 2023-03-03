// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar,
//   que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const dados = require("./dados.json");

const menorValor = dados.reduce((menor, atual) => {
  if (menor.valor > atual.valor && atual.valor > 0) {
    return atual;
  }
  return menor;
}).valor;

const maiorValor = dados.reduce((maior, atual) => {
  if (maior.valor < atual.valor) {
    return atual;
  }
  return maior;
}).valor;

const soma = dados.reduce((soma, atual) => {
  return soma + atual.valor;
}, 0);

const diasComFaturamento = dados.filter((dado) => dado.valor > 0).length;

const media = soma / diasComFaturamento;

const diasFaturamentoMaiorQueAMedia = dados.filter(
  (dado) => dado.valor > media
).length;

console.log("Menor valor: ", menorValor);
console.log("Maior valor: ", maiorValor);
console.log(
  "Dias com faturamento maior que a média: ",
  diasFaturamentoMaiorQueAMedia
);
