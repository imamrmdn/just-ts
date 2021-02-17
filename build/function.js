"use strict";
//es module
// import fetch from 'node-fetch';
Object.defineProperty(exports, "__esModule", { value: true });
//common js
//const fetch = require('/node-fetch');
//Function
/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */
const variable = null;
console.log(typeof (variable));
//declaration
//z?: number artinya optional
function number(x, y, z) {
    return x + y;
}
console.log(number(8, 9));
//expression
const numberOne = function (x, z) {
    const name = `nama saya: ${z}, umur: ${x}`;
    return name;
};
console.log(numberOne(19, 'imam'));
//arrow function
const numberTwo = (x, z, y) => {
    return x * z + y;
};
console.log(numberTwo(4, 15, 10));
const cb = (url, callback) => {
    callback(url);
};
const fn = (str) => console.log(str);
cb('google.com', fn);
cb('youtube.com', (pesan) => console.log('ini pesann:', pesan));
const submitContact = (firstName, lastName, language = 'indonesia', gender) => {
    return {
        firstName,
        lastName,
        language,
        ...(gender && { gender }) // <<- kalau gendernya ada return valuenya
    };
};
const log = submitContact('imam', 'ramadhan', 'indo', 'laki');
console.log('result:', log);
//rest paramter in function
const collection = (item, ...itemBuah) => {
    return item + ' ' + itemBuah;
};
const fruits = collection('buah', 'mangga', 9, 'apple');
console.log(fruits);
//latihan rest paramater
const collectionEdukasi = (...edukasi) => {
    return edukasi;
};
const daftarEdukaso = collectionEdukasi({
    id: '2',
    title: 'buku',
    gambar: 'link',
    deskripsi: 'buku baru',
    penulis: 'imron',
    createdAt: '24/2020'
});
console.log(...daftarEdukaso);
//conditional type with union
//solution one: with union type
const ct = (param) => {
    return param;
};
console.log(ct(10), ct('imam'));
//solution two with generic type
// <T>
//type variable -> deteksi type data dari caller atau yang manggil functionnya
const gen = (param) => {
    return param;
};
const hasil_gen = gen([0, 9]);
console.log(hasil_gen);
console.log(gen('hello type generic'));
function ct_overload(param) {
    return param;
}
console.log(ct_overload('hello'));
console.log(ct_overload(999));
//console.log(ct_overload(true));
