/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  if (equation === 0 || equation % 10 === 0) {
    return String(equation);
  }

  let str = equation.toString();
  let panjang = str.length;
  let digit = parseInt(str[0]);
  let hasil = digit * Math.pow(10, panjang - 1);

  if (panjang === 1) {
    return hasil.toString();
  }

  return hasil + "+" + parseNumber(Number(str.slice(1)));
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3