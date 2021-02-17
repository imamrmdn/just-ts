"use strict";
/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */
const arr = [0, 9, 0, 1];
const arr1 = ['4', '5', '0', 'imron'];
console.log(...arr, arr1);
//array dengan union type valuenya dicampur tidakbisa
//  const arr2: string[] | number[] = [0, 0, 'imron']
const arr2 = [0, 0, 10];
//cara ke 3 dengan union type
const arrays = ['imam', 8, 10, 'caca'];
console.log(arr2, arrays);
const arr4 = ['imrond'];
const arr3 = { msg: 'imron' };
console.log(arr4, arr3);
//tuple
//digunakan untuk tipe data dan jumlah yang fix
const arr6 = ['imm', 'rja', 9, 0];
const arr7 = [['i', 'b'], 9];
console.log(arr6, arr7);
//array of object
//dengan inline interface
const arr10 = [
    { index: '1', msg: 10 },
    { index: '2', msg: 100 },
    { index: '3', msg: 10000 }
];
console.log('arr of obj:', arr10);
//multi dimension array
const arr11 = [[9, 8], [0, 9, 1]];
const arr12 = [[''], ['im', 'sama']];
//multi dimension array dengan union type
const arr13 = [['9', 0], ['aku', 10, 'imron']];
console.log(arr11, arr12, arr13);
//destruc
const [satu, dua, tiga, empat] = ['im', 's', 'ss', 10];
const [lima, enam, tujuh] = ['imam', 10, 101];
const arr15 = [['imron', 0], 0, 0];
console.log(arr15);
