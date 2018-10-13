/* eslint-disable no-const-assign,no-return-assign,no-multi-assign */
// Alberto Clara
// CS320
// prime functions

function isPrime(i) {
  for (let x = 3; x < i; x+=2)
    if (i % x === 0) return false;
  return i > 1;
}

function Sum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) sum += n[i];
  return sum;
}

function primeGen(limit) {
  const bools = [];
  const primes = [];
  for (let i = 1; i < limit; i++) {
    bools.push(true);
  }
  for (let i = 2; i < limit; i++) {
    if (bools[i - 2]) {
      for (let j = i * 2; j <= limit; j += i) {
        bools[j - 2] = false;
      }
    }
  }
  for (let p = 0; p < bools.length; p++) {
    if (bools[p]) {
      primes.push(p + 2);
    }
  }
  return (primes);
}

function cumulativeSum(arr) {
  const total = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) total.push(arr[i]); else {
      let sum = 0;
      for (let n = i; n >= 0; n--) sum += arr[n];
      total.push(sum);
    }
  }
  return total;
}

function maxPrimeSum(n) { // this will display the total sum and how many prime number were sumed
  const List = primeGen(n); // calls my primeGen function
  let count = 0;
  let sum = 0;
  let minus = 0;
  let listLen = List.length;
  for (let i = 0; i < listLen; i++) { // starts the array
    let tmp = 0;
    for (let j = i; j < listLen; j++) { // this will increment the array
      tmp += List[j];
      if (tmp <= n) {
        minus = j - i;
        if (!(minus > count && isPrime(tmp) && tmp > sum)) {
          continue;
        }
        count = j - i;
        sum = tmp;
      } else { // will check if the amount of numbers is bigger than the input and will stop
        break;
      }
    }
  }
  return [sum, ++count];
}