/*function pont (a,b) {
    let result = a ** b;
    return result
}

console.log(pont(5,4));*/


/* Imprime todos los números del 1 al 1000 por consola, 
con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número,
se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los 
números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.*/

for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }