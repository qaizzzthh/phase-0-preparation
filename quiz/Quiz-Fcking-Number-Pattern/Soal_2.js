/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
  //code here
  let ij_angka = [];
  let bilangan = 0;
  
  //Looping kolom baris angka
  for (let i = 0; i < num; i++) {
    let baris = [];
    for (let j = 0; j < num; j++) {
      bilangan++;
      baris.push(bilangan);
    }
    ij_angka.push(baris);
  }
  
  let papan = [];

  //Looping jadi papan angka uler tangga
  for (let i = 0; i < ij_angka.length; i++) {
    let baris = ij_angka[i];
    if (i % 2 === 1) {
      baris.reverse();
    }
    papan.push(baris);
  }
  
  let hasil = [];

  //Looping hasil
  for (let i = 0; i < papan.length; i++) {
    let baris = [];
    for (let j = 0; j < papan.length; j++) {
      if (papan[i][j] % 4 === 0) {
        baris.push("#");
      } else if (papan[i][j] % 2 === 0) {
        baris.push("o");
      } else if (papan[i][j] % 2 === 1) {
        baris.push("x");
      }
    }
    hasil.push(baris);
  }

  if (num > 2) {
    return hasil;
  } else {
    return "Minimal input adalah 3";
  }
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ 
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ] 
// ]

console.log(squareNumber(2)); // Minimal input adalah 3