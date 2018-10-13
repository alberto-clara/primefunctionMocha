function primeGen123(limit) {
  const array = [];
  array.push(2);
  for (let i = 3; i < limit; i +=2 ){
    if(isPrime(i)){
      array.push(i);
    }
  }
  return array;
}

function isPrime(i) {
  for (let x = 2; x < i; x++)
    if (i % x === 0) return false;
  return i !== 1 && i !== 0;
}

// console.log(primeGen123(10));