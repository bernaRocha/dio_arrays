function substituiPares(array){
  if(!array.length) return -1;
  if(!array) return -1;

  for(let i =0; i < array.length; i++){
    if(array[i] === 0){
      console.log('Você já é zero')
    } else if(array[i] % 2 === 0){
      console.log(`Substituindo ${array[i]} por 0...` )
      array[i] = 0;
    } 
  }

  return array
}

let arr = [ 1,3,4,6,16,33,90]
console.log(substituiPares(arr))

        // Substituindo 4 por 0...
        // Substituindo 6 por 0...
        // Substituindo 16 por 0...
        // Substituindo 90 por 0...
        // [
        //   1,  3, 0, 0,
        //   0, 33, 0
        // ]