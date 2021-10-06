let pessoa = {
  nome: 'Fulano',
  idade: 30
}

typeof pessoa
//object

pessoa.nome = 'Beltrano'

console.log(pessoa)
// nome: 'Beltrano', idade: 30 }

let person = {}

person.name = 'Beltrano'

console.log(person)
{ name: 'Beltrano' }
person.age = 33
console.log(person)
//{ name: 'Beltrano', age: 33 }

console.log(Object.values(pessoa)) // Só os valores das chaves
//[ 'Beltrano', 30 ]

console.log(Object.keys(pessoa)) // As chaves do objeto pessoa
//[ 'nome', 'idade' ]