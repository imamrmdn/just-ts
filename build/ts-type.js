"use strict";
console.log('hello ts');
//const halow: string = 'imam'
const count = (a, b) => {
    return a + b;
};
const sum = function (c, d) {
    const a = c.length;
    const b = d.length;
    return a + b;
};
console.log(sum('i', ['iii']));
const somemsg = function () {
    console.log('somemsg');
};
//void kalau tidak disi sesuatu akan menjadi undefined
const hell = function () {
    //...
    const res = count(9, 0);
    console.log(res);
};
console.log(somemsg());
console.log(hell());
const a = true;
console.log(a);
const b = 'test';
console.log(b);
// let c: number = 9
// // let d: bigint = 100n
// let e: symbol = Symbol('sym')
// let f: string[] = ['j', 'h']
// let g: number[] = [0, 8, 9, 0]
// let h: [] = []
// let i: {} = { msg: 'hello' }
// let j: {} = {}
// class Product{
//     //...
// }
// let k: object = new Product()
// console.log(k);
// //type any kurang direkomendasikan
// //dipakai dibeberapa case tertentu
// const z: any = ['j']
// let x: any;
// x = 9
// x = '3333'
// x = ['sa']
// //union type
// //multi type
// const multitype: string | number | string[] = ['k', 'p']
// //type aliases, type yang kita buat sendiri
// type CustomType = string;
// //type aliases digabung dengan union type
// type Numeric = number | number[];
// type CustomTipe = {
//     name: string
//     value: string[]
//     age: number    
// }
// const co: Numeric = [0, 9]
// const con: Numeric = 9999099099
// // const test: CustomTipe = { '' }
// const la: CustomTipe = { 
//     name: 'imamr', 
//     value: ['9'], 
//     age: 22 
// }
// console.log(la);
// let cc: string = 's'
