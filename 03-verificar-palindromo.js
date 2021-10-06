function verificaPalindromo(string){
  if(!string) return 'String inexistente'; //verifica se a string existe

  return string.split('').reverse().join('') === string
}

console.log(verificaPalindromo('gato')) //vai retornar true ou false caso a palavra seja palíndromo

// solução 2

function verificaPalindromo2(string){
  if(!string) return 'String inexistente';

  for(let i = 0; i < string.length / 2; i++){ // / 2 Porque verificamos se a primeira letra é igual a última
    if(string[i] !== string[string.length -1 - i]){
      return false
    } 
  }
  return true
}

console.log(verificaPalindromo2('palindromo')) //false
console.log(verificaPalindromo2('ovo'))  //true