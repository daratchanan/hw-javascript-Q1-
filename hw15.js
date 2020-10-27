//No.1
function ex1() {
   let m = +prompt("input num1 ");
   let n = +prompt("input num2 ");
   let result = "";
   let i = 1;

   while (i !== n) {
      i++;
      if ((m % i === 0) && (n % i === 0)) {
         m = m / i;
         n = n / i;
         i = 1;
      }
   }
   result = `${m}/${n}`;
   return result;
}
//console.log(ex1());
//----------------------------------------------------
//No.2
function ex2() {
   let sum = 0;

   for (let i = 160; i <= 2048; i += 2) {
      sum += i;
   }
   return sum;
}

// console.log(ex2());
//-------------------------------------------------
//No.3
function ex3() {
   let sum = 0;

   for (let i = 163; i <= 815; i += 4) {
      sum += i;
      console.log(`i = ${i} => ${sum}`);
   }
   return sum;
}

// ex3();
//-----------------------------------------------------
//No.4
function ex4(n) {
   let nums = [0, 1];

   for (let i = 0; i < n - 2; i++) {
      nums.push(nums[i] + nums[i + 1])
      console.log(nums);
   }
   return nums[n - 1];
}

//console.log(ex4(7)); 
//-------------------------------------------------------
//No.5
function ex5(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
         sum -= i;
      } else {
         sum += i;
      }
   }
   return sum;
}

//console.log(ex5(18954));
//-------------------------------------------------------
//No.6 
function ex6(n) {
   let result = 0;
   for (let i = 0; i < n - 1; i++) {
      result += (i + 1) * (i + 2);
      console.log(`i : ${i}, result : ${result}`);
   }
   return result;
}

//console.log(ex6(88));
//--------------------------------------------------
//No.7
function ex7(n) {
   let result = 0;
   for (let i = 0; i < n - 2; i++) {
      result += (i + 1) * (i + 2) * (i + 3);
      console.log(`i : ${i}, result : ${result}`);
   }
   return result;
}

//console.log(ex7(89));
//--------------------------------------------------------
//No.8, 9
function ex8(n) {
   let result = 0;
   for (let i = 0; i < n - 4; i += 2) {
      result += (i + 1) * (i + 3) * (i + 5);
      console.log(`i : ${i}, result : ${result}`);
   }
   return result;
}

//console.log(ex8(159));
//--------------------------------------------------------
//No.10
function ex10() {
   let min = +prompt("Input start number ");
   let num = prompt("Input number ");


   while (num !== "stop") {
      if (Number(num) < min) {
         min = Number(num);
      }
      num = prompt("Input number ");
   }
   return min;
};

// console.log(ex10());
//-------------------------------------------------
//No.11
function ex11() {
   let arr = [];
   let min = [];
   let num = prompt("Input number ");

   while (num !== "stop") {
      arr.push(num);
      num = prompt("Input number ");
   }
   const sortArr = arr.sort((a, b) => a - b);
   for (const i of sortArr) {
      if (i < sortArr[3]) {
         min.push(i)
      }
   }
   return min;
}

//console.log(ex11());
//----------------------------------------------------
//No. 12
function ex12() {
   let arr = [];
   let num = prompt("Input number ");

   while (num !== "stop") {
      arr.push(num);
      num = prompt("Input number ");
   }
   const sortArr = arr.sort((a, b) => a - b);
   console.log(sortArr);
   return `min:${sortArr[0]} max:${sortArr[sortArr.length - 1]}`;
   //console.log(sortArr[0]);
   //console.log(sortArr[sortArr.length -1]);   
   // return [sortArr[0],sortArr[sortArr.length -1]]     
}

//console.log(ex12());
//---------------------------------------------------------
//No. 13
function ex13() {
   let arr = [];
   let num = prompt("Input number ");

   while (num !== "stop") {
      arr.push(Number(num));
      num = prompt("Input number ");
   }
   const sortArr = arr.sort((a, b) => a - b);
   console.log(sortArr);
   return `diff : ${sortArr[sortArr.length - 1] - sortArr[0]}`
   //console.log(sortArr[sortArr.length -1]- sortArr[0]);   
}

//console.log(ex13());
//------------------------------------------------------------
//No.14
function ex14() {
   let arr = [];
   let num = prompt("Input number");
   let result = 0;


   while (num !== "stop") {
      arr.push(Number(num));
      num = prompt("Input number");
   }
   for (const a of arr) {
      result += a;
   }
   console.log(arr);
   return result / arr.length;
}

//console.log(ex14());
//-------------------------------------------------------------
//No.15
function ex15(str) {
   let result = "";

   str += "";

   if (str[0] === "-") {
      result += "-";
      for (let i = str.length - 1; i > 0; i--) {
         result +=str[i];
      }
   } else {
      for (let j = str.length - 1; j >= 0; j--) {
         result += str[j];
      }
   }
   return Number(result);
}
//console.log(ex15(-5200));
//-----------------------------------------------------------
