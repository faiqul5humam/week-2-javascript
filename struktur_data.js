console.clear();
//macam variabel:
var nama="Faiqul Humam";
let nama="Faiqul Humam";
const nama="Faiqul Humam";
//konstanta dianggap sebagai variabel mutlak yang tidak bisa diubah - ubah, seperti halnya phi=3,14
//contoh, ketika dimasukkan:
nama="humam";
//jika  tipe yang disebutkan adalah let dan var, maka nama akan berubah sesuai inputan nama yang dimasukkan. sedangkan jika const hanya akan memunculkan alert: read only
//var bersifat lebih window(luas) dripada let. yaitu dimana ketika disebutkan var pada suatu file, maka file lain akan membacanya juga, sehingga saling terpengaruh. berbeda dengan let yang berlakunya hanya pada satu file

console.log(nama);
//console.log(...); disebut sebagai pengunci dari variabel yang akan ditampilkan atau yang akan menampilkan pada layar

//macam tipe data:
//undefined:
let nama;
//string:
let nama = 'Faiqul Humam';
let nama = "Faiqul Humam";
let nama = `Faiqul Humam`;
console.log(`halo nama saya ${nama}`); //terbaru
console.log(`halo nama saya`+nama);//dulu: operator concatenation
//pada console yang 'dulu' kalau mau dilakukan enter, maka harus menambahkan '\n', sedangkan yang terbaru, tinggal enter saja
//numbers:
let umur = 21; //integer
let tinggi = 170.5; //floating
console.log(`umur saya ${umur}`);
//booleans:
const jomblo = false;
const udahpunya = true;
console.log(`status saya saat ini ${udahpunya} bukan ${jomblo}`);
//array:
let hobi = ['makan','minum','ngegame offline', 12 , true , {nama:"Faiqul Humam"}];
console.log(hobi);
//objects:
let person = {
    nama: "Faiqul Humam",
    umur: 23,
    email: "humamku45@gmail.com",
    hobi: ["ngoding", "tidur"],
    sayHello: function() {
        console.log("halo nama saya"+this.nama);
    }
};
console.log(person.nama);
console.log(person.umur);
person.sayHello();
//empty:
let nama = "";
//NaN (not a number):
console.log(10/humam); //hasilnya NaN/Not a Number, mirip Null
//Dynamic Type:
let angka = 5;
console.log(angka + 5);

//Operators: lihat w3schools.com/jsref/jsref_operators.asp (simbol untuk melakukan operasi)
//operator aritmatika
//modulus:
let angka = 5;
console.log(angka % 2);// hasilnya 1 (sisa bagi)
//increment:
let angka = 5;
console.log(angka++);//tetap
console.log(angka);//jadi 6, karena ++ di belakang
console.log(++angka);//hasilnya 6
console.log(--angka);//hasilnya 4
//assignment:
angka += 20;
//concatenation: pertambahan
//comparison: perbandingan
//ternary: if else versi pendek
let nilai: 85;
let lulus: nilai > 75? "lulus" : "gagal";
console.log(lulus);
//logika operator > tentang benar salah gitu
//type of operator:
let humam: 85;
console.log(typeof humam);//maka munculnya type data dari humam, yaitu number
//in operator: untuk menacri urutan index dalam array
var cars = ["honda", "toyota", "audi"];
("honda" in cars)// maka akan muncul false, karena index nya hanya ada 0, 1, dan 2
// in indexnya, bukan nilainya
var person = (firstname: "john", lastname: "don", age:50);
("firstname" in person)// maka dianggap true, karena firstname ini merupakan index yang nilainya berupa john 
//atau bisa juga untuk mencari dalam index yang sudah umum seperti:
("PI" in Math)//maka hasilnya true, karena memang ada index PI (phi) dalam matematika
("NaN" in Number)//true