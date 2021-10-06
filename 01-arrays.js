// arrays ou vetores, lista iteráveis de objetos

let array = []
//let array = new Array() - não muito comum

array.push(3) //adiciona ao final
array.push(2)

console.log(array) //primeiro o 3 e depois o 2
//[ 3, 2 ]

array.pop() //retira o útlimo
console.log(array)
//[ 3 ]

array.push(5)
console.log(array)
//[ 3, 5 ]

array.unshift(1) //Adiciona ao começo
console.log(array)
//[ 1, 3, 5 ]

array.includes(10)
//false

array.shift() //retira o primeiro
console.log(array)
//[ 3, 5 ]