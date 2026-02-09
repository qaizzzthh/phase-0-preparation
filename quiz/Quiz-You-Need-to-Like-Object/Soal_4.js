/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here

  //Data Rute
  const rute = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
  const kendaraan = [
    ["Pesawat", 275000],
    ["Kereta", 250000],
    ["Bis", 225000]
  ];
  const pembayaran = [
    ["OVO", 15 / 100],
    ["Dana", 10 / 100],
    ["Gopay", 5 / 100],
    ["Cash"]
  ]

  //Data Penumpang
  let data_penumpang = [];
  for (let i = 0; i < arr.length; i++) {
    let data = [];
    let hasil = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== "-") {
        hasil += arr[i][j];
      } else if (arr[i][j] === "-") {
        data.push(hasil);
        hasil = "";
      }
      if (j === arr[i].length - 1) {
        data.push(hasil);
      }
    }
    data_penumpang.push(data);
  }

  //Hasil
  let hasil = [];
  for (let i = 0; i < data_penumpang.length; i++) {
    let data = {};

    //Jarak Kota
    let asal = 0;
    let tujuan = 0;
    for (let kota = 0; kota < rute.length; kota++) {
      if (rute[kota] === data_penumpang[i][1]) {
        asal = kota;
      } else if (rute[kota] === data_penumpang[i][2]) {
        tujuan = kota;
      }
    }
    let jarak = Math.abs(tujuan - asal);
    
    //Harga Transport
    let harga = 0;
    for (let k = 0; k < kendaraan.length; k++) {
      if (data_penumpang[i][3] === kendaraan[k][0]) {
        harga = jarak * kendaraan[k][1];
      }
    }

    //Diskon Payment
    for (let q = 0; q < pembayaran.length; q++) {
      if (emoney === pembayaran[q][0]) {
        if (emoney !== "Cash") {
          let diskon = pembayaran[q][1];
          harga = harga - (harga * diskon * 1);
        }
      }
    }

    data = {
      name: data_penumpang[i][0],
      departureCity: data_penumpang[i][1],
      destinationCity: data_penumpang[i][2],
      transport: data_penumpang[i][3],
      totalCost: harga
    }
    hasil.push(data)
  }

  //Sorting dari terbesar
  for (let a = 0; a < hasil.length - 1; a++) {
    for (let b = a + 1; b < hasil.length; b++) {
      if (hasil[a].totalCost < hasil[b].totalCost) {
        let temp = hasil[a];
        hasil[a] = hasil[b];
        hasil[b] = temp;
      }
    }
  }

  return hasil;
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];