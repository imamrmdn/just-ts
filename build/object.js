"use strict";
//Object pada typescipt
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dataMurid = {
    firstName: 'nadia',
    lastName: 'sabile',
    language: 'indonesia'
};
console.log(dataMurid);
const products = {
    id: 'string', message: 890
};
console.log(products);
const prod = {
    id: '8787',
    name: 'imam',
    harga: 88888,
};
console.log(prod);
const testFunc = (prod, note) => {
    return prod;
};
const hasil = testFunc(prod);
console.log('ini hasilnya:', hasil);
const prod1 = {
    id: '45454',
    count: 5,
    productName: {
        name: 'susu',
        price: 20000
    }
};
console.log(prod1);
//type MahasiswaDetail = { addres: string, city: string}[]
const mahasiswa2 = {
    id: 1,
    name: 'imam',
    detail: [
        {
            addres: 'ancol selatan',
            city: 'jakarta utara',
            kode_pos: 9
        },
        {
            addres: 'ancol selatan',
            city: 'jakarta utara'
        },
    ]
};
console.log('mahasiswa:', mahasiswa2);
const dosen = {
    id: 9,
    namaDosen: 'pak larso',
    mata_kuliah: {
        matakuliah1: {
            id: 1,
            namaMatkul: 'operasi mtk',
            sks: 3
        },
        matakuliah2: {
            id: 2,
            namaMatkul: 'struktur data',
            sks: 2
        }
    }
};
console.log('detail dosen:', dosen);
const orang = {
    id: 'j028',
    name: 'imam',
    age: 19,
    detail: {
        detail1: {
            alamat: 'jakarta utara',
            keluarga: false
        },
        detail2: {
            alamat: 'jakarta utara',
            keluarga: false
        }
    }
};
console.log('detailorang:', orang);
const name = {
    firstName: 'imam',
    lastName: 'ramadhan'
};
const { firstName, lastName } = name;
console.log(firstName, lastName);
