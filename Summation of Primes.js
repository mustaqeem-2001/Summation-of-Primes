function summationOfPrimes(num) {
    const primes = new Array(num).fill(true);
    primes[0] = primes[1] = false;

    let total = 0;

    for (let i = 2; i < num; i++) {
        if (primes[i]) {
            for (let j = i * i; j < num; j += i ) {
                primes[j] = false;
            }
            total += i;
        }
    }
    return total;
}
console.log(summationOfPrimes(2000000));