/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  //CODE HERE
  let inisial = [];
  for (let i = 0; i < studentsArr.length; i++) {
    if (i === 0) {
      inisial.push(studentsArr[i][0]);
    }
    for (let j = 0; j < inisial.length; j++) {
      if (studentsArr[i][0] === inisial[j]) {
        break;
      } else if (j === inisial.length - 1) {
        inisial.push(studentsArr[i][0]);
      }
    }
  }

  let data = {};
  for (let i = 0; i < inisial.length; i++) {
    let hasil = [];
    for (let j = 0; j < studentsArr.length; j++) {
      if (inisial[i] === studentsArr[j][0]) {
        hasil.push(studentsArr[j]);
      }
    }
    data[inisial[i]] = hasil;
  }

  return data;
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/