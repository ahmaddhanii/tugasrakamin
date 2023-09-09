// Fungsi untuk menghitung nilai minimum
function hitungMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Fungsi untuk menghitung nilai maksimum
function hitungMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung total
function hitungTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata(arr) {
  const total = hitungTotal(arr);
  return total / arr.length;
}

// Membuat array dengan 100 nilai acak antara 1 dan 50
const nilaiRandom = [];
for (let i = 0; i < 100; i++) {
  const randomNilai = Math.floor(Math.random() * 50) + 1;
  nilaiRandom.push(randomNilai);
}

// Membuat array untuk indeks genap dan ganjil
const nilaiGenap = [];
const nilaiGanjil = [];

for (let i = 0; i < nilaiRandom.length; i++) {
  if (i % 2 === 0) {
    nilaiGenap.push(nilaiRandom[i]);
  } else {
    nilaiGanjil.push(nilaiRandom[i]);
  }
}

// Menghitung nilai min, max, total, dan rata-rata untuk masing-masing array
const minGenap = hitungMin(nilaiGenap);
const maxGenap = hitungMax(nilaiGenap);
const totalGenap = hitungTotal(nilaiGenap);
const rataRataGenap = hitungRataRata(nilaiGenap);

const minGanjil = hitungMin(nilaiGanjil);
const maxGanjil = hitungMax(nilaiGanjil);
const totalGanjil = hitungTotal(nilaiGanjil);
const rataRataGanjil = hitungRataRata(nilaiGanjil);

// Menampilkan hasil
console.log('Array dengan jumlah index 100:', nilaiRandom);
console.log('Array genap dengan jumlah index 50:', nilaiGenap);
console.log('Array ganjil dengan jumlah index 50:', nilaiGanjil);
console.log('Min, Max, Total, Rata-rata pada array genap:');
console.log('Min:', minGenap);
console.log('Max:', maxGenap);
console.log('Total:', totalGenap);
console.log('Rata-rata:', rataRataGenap);
console.log('Min, Max, Total, Rata-rata pada array ganjil:');
console.log('Min:', minGanjil);
console.log('Max:', maxGanjil);
console.log('Total:', totalGanjil);
console.log('Rata-rata:', rataRataGanjil);

// Membandingkan hasil
console.log('Perbandingan nilai:');
console.log('Min lebih besar array genap:', minGenap > minGanjil);
console.log('Max lebih besar array ganjil:', maxGenap < maxGanjil);
console.log('Total memiliki nilai sama antara array genap dan ganjil:', totalGenap === totalGanjil);
console.log('Rata-rata lebih besar array ganjil:', rataRataGenap < rataRataGanjil);