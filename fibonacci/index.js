// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
//   (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
//     ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const isFibonacci = (n) => {
  let i = 0;
  while (fibonacci(i) < n) {
    i++;
  }
  return fibonacci(i) === n;
};

console.log(isFibonacci(0)); // true
console.log(isFibonacci(59)); // false
