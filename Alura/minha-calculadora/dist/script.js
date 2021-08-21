///document.write("CALCULADORA E LAÇOS CONDICIONAIS NO JAVASCRIPT")
//var nome = prompt("Qual é o seu nome? ")
//document.write("Meu nome é " + nome)

var conta = prompt("Que conta você quer fazer? ")

var mutiplicação
var divisão
var soma
var subtração

var valor_1 = parseFloat(prompt("Digite um número: "))
var valor_2 = parseFloat(prompt("Digite um número: "))

var resultado_1 = valor_1 * valor_2
var resultado_2 = valor_1 / valor_2
var resultado_3 = valor_1 + valor_2
var resultado_4 = valor_1 - valor_2

if(conta == "mutiplicação"){
  document.write("<h2>" + valor_1 + " x " + valor_2 + " = " + resultado_1 + "</h2>")
}
else if(conta == "divisão"){
  document.write("<h2>" + valor_1 + " / " + valor_2 + " = " + resultado_2 + "</h2>")
}      
else if(conta == "soma"){
  document.write("<h2>" + valor_1 + " + " + valor_2 + " = " + resultado_3 + "</h2>")
}
else if(conta == "subtração"){
  document.write("<h2>" + valor_1 + " - " + valor_2 + " = " + resultado_4 + "</h2>")
}
else{alert("<h2>" + "Erro" + "</h2>")}




//document.write("<h2>" + valor_1 + " x " + valor_2 + " = " + resultado_1 + "</h2>")