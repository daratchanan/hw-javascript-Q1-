function multi(m, n) {
   for (let i = 2; i <= m; i++ ) {
      for (let j = 1; j <= n; j++) {
         console.log(`${i} x ${j} = ${i * j}`);
      }
   }
}
//multi(5, 12);
//-----------------------------------------------------
function primeNum(n) {
   primes = [];

   for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= n; j++) {
         if (i % j === 0) {

            if (j === i) {
               primes.push(i)
            }
            break;
         } 
      }
   }
   return primes;
};

//let arrPrime = primeNum(50);
//console.log(primeNum(50));
//console.log(arrPrime);
//console.log(arrPrime.length);
//---------------------------------------------------
//let str = "Hello";
//console.log(str.length);
//console.log(str[1]);
//console.log(str[str.length], str[str.length-1], str[str.length-2], str[str.length-3] );


// for (let i = 1;  i <= 5; i++) {
//   rev += str[str.length - (i)];
// }
// console.log(rev);


function revStr(str) {
   let rev = "";
   
   for (let j = str.length-1; j >= 0; j--) {
      rev += str[j]
   }
   return rev;
}

//console.log(revStr("Hello javaScript"));

function minFraction() {
   let m = +prompt("input num1 ");
   let n = +prompt("input num2 ");
   let result = "";
   let i = 1;

   while (i !== n) {
      i++;
      if ((m % i === 0) && (n % i === 0)) {
         m = m/i;
         n = n/i;
         i = 1;
      }

   }
   result = `${m}/${n}`;
   return result;
}

//console.log(minFraction());

