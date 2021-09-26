var numero_secreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas > 0){
var chute = parseInt(prompt("Digite um número entre 0 e 10! "))  
if(numero_secreto == chute){
  alert("Você acertou! \n O número secreto é " + numero_secreto)
  break
  }
else if(chute > numero_secreto){
  alert("O número secreto é menor")
  tentativas = tentativas - 1
}
else if(chute < numero_secreto){
  alert("O número secreto é maior")
  tentativas = tentativas - 1
}
 
}

if(numero_secreto != chute){
  alert("Suas tentativas acabaram. \n  O número secreto é " + numero_secreto)
}
//else{document.write("Você errou!")}


  
  
    