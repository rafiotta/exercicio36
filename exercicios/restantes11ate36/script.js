// 11) Exibir o menor número entre dois números
let numero1 = 10;
let numero2 = 5;
var menorNumero = Math.min(numero1,numero2);
console.log("O menor número é: " + menorNumero);

// 12) Verificar se um número é primo
var numero = 11;
let primo = true;
for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}
if (primo) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}

// 13) Exibir todos os números de 1 até o número fornecido
let numero = 8;
console.log("Números de 1 até " + numero + ":");
for (let i = 1; i <= numero; i++) {
    console.log(i);
}

// 14) Verificar se um número é um quadrado perfeito
let numero = 16;
raizQuadrada = Math.sqrt(numero);
if (raizQuadrada % 1 === 0) {
    console.log("O número é um quadrado perfeito.");
} else {
    console.log("O número não é um quadrado perfeito.");
}

// 15) Verificar se um número é múltiplo de 3
let numero = 12;
if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3.");
} else {
    console.log("O número não é múltiplo de 3.");
}

// 16) Verificar se um número é divisível por 5
let numero = 25;
if (numero % 5 === 0) {
    console.log("O número é divisível por 5.");
} else {
    console.log("O número não é divisível por 5.");
}

// 17) Exibir a soma de todos os números pares de 1 até o número fornecido
let numero = 10;
somaPares = 0;
for (var i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log("A soma dos números pares de 1 até " + numero + " é: " + somaPares);

// 18) Exibir a soma de dois números
let numero5 = 15;
let numero6 = 23;
let soma = numero5 + numero6;
console.log("A soma dos números é: " + soma);

// 19) Exibir a subtração de dois números
let numero7 = 20;
let numero9 = 8;
let subtracao = numero7 - numero9;
console.log("A subtração dos números é: " + subtracao);

// 20) Exibir o produto de dois números
let numero11= 7;
let numero12 = 4;
let produto = numero11 * numero12;
console.log("O produto dos números é: " + produto);

// 21) Exibir a divisão de dois números
let numero20 = 20;
let numero21 = 5;
let divisao = numero20 / numero21;
console.log("A divisão dos números é: " + divisao);

// 22) Exibir o quadrado de um número
let numero = 9;
let quadrado = numero * numero;
console.log("O quadrado do número é: " + quadrado);

// 23) Exibir a raiz quadrada de um número
let numero = 25;
raizQuadrada = Math.sqrt(numero);
console.log("A raiz quadrada do número é: " + raizQuadrada);

// 24) Verificar se um número é par ou ímpar
let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// 25) Verificar se um número é positivo, negativo ou zero
let numero = -4;
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 26) Exibir o maior número entre dois números
let numero13 = 15;
let numero14 = 23;
let maiorNumero = Math.max(numero13, numero14);
console.log("O maior número é: " + maiorNumero);

// 27) Exibir o menor número entre dois números
let numero15 = 10;
let numero16 = 5;
let menorNumero = Math.min(numero15, numero16);
console.log("O menor número é: " + menorNumero);

// 28) Exibir a média de três números
let numero17 = 10;
let numero18 = 15;
let numero19 = 20;
let media = (numero17 + numero18 + numero19) / 3;
console.log("A média dos números é: " + media);

// 29) Exibir o fatorial de um número
let numero = 5;
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log("O fatorial de " + numero + " é: " + fatorial);

// 30) Verificar se um número é primo
let numero = 11;
primo = true;
for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}
if (primo) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}

// 31) Exibir todos os números de 1 até o número fornecido
let numero = 8;
console.log("Números de 1 até " + numero + ":");
for (let i = 1; i <= numero; i++) {
    console.log(i);
}

// 32) Exibir a tabuada de um número
let numero = 7;
console.log("Tabuada de " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

// 33) Verificar se um número é um quadrado perfeito
let numero = 16;
let raizQuadrada = Math.sqrt(numero);
if (raizQuadrada % 1 === 0) {
    console.log("O número é um quadrado perfeito.");
} else {
    console.log("O número não é um quadrado perfeito.");
}

// 34) Verificar se um número é múltiplo de 3
let numero = 12;
if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3.");
} else {
    console.log("O número não é múltiplo de 3.");
}

// 35) Verificar se um número é divisível por 5
let numero = 25;
if (numero % 5 === 0) {
    console.log("O número é divisível por 5.");
} else {
    console.log("O número não é divisível por 5.");
}

// 36) Exibir a soma de todos os números pares de 1 até o número fornecido
let numero = 10;
let somaPares = 0;
for (var i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log("A soma dos números pares de 1 até " + numero + " é: " + somaPares);