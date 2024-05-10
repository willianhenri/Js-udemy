let num1 = prompt('Digite um número')
num1 = Number(num1)

let num2 = prompt('Digite outro número')
num2 = Number(num2)

let soma = num1 + num2

let contador = document.getElementById('conta') 
contador.innerHTML = `${num1} + ${num2} = ${soma}`;