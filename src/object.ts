//Object pada typescipt
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

 /*
  * Catatan:
  * interface bisa extends kalau type tidak bisa
  * 
  */

 //1. Object Literal
//type inference
import { DataDiri } from './function';

const dataMurid: DataDiri = {
    firstName: 'nadia',
    lastName: 'sabile',
    language: 'indonesia'
}

console.log(dataMurid);


const products = {
    id: 'string', message: 890
}

console.log(products);

//interface object
interface Products {
    id: string,
    name: string,
    harga: number,
}

const prod: Products = {
    id: '8787',
    name: 'imam',
    harga: 88888,
}

console.log(prod);

const testFunc = (prod: Products, note?: string): Products => {

    return prod
}

const hasil = testFunc(prod)

console.log('ini hasilnya:', hasil);




//nested object
interface Item {
    id: string,
    count: number,
    productName: ItemDetail
}

interface ItemDetail {
    name: string,
    price: number
}

const prod1: Item = {
    id: '45454',
    count: 5,
    productName: {
        name: 'susu',
        price: 20000
    }
}

console.log(prod1);

interface DetailMahasiswa {
    addres: string,
    city: string,
    kode_pos?: number,
}

//Nested object of array
interface Mahasiswa {
    id: number,
    name: string,
    detail: DetailMahasiswa[]
}

//type MahasiswaDetail = { addres: string, city: string}[]

const mahasiswa2: Mahasiswa = {
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
}

console.log('mahasiswa:', mahasiswa2);

//Nested Object of Object
interface Dosen {
    id: number,
    namaDosen: string,
    mata_kuliah: DosenDetail
}

interface DosenDetail {
    matakuliah1: MatkulDosen,
    matakuliah2: MatkulDosen,
}

interface MatkulDosen {
    id: number,
    namaMatkul: string,
    sks: number,
}

const dosen: Dosen = {
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
}

console.log('detail dosen:', dosen);

//Nesterd Object of object 2
interface OrangDetail {
    alamat: string,
    keluarga: boolean,
}

interface Orang {
    id: string,
    name: string,
    age: number,
    detail: {
        [key: string]: OrangDetail
    }
}


const orang: Orang =  {
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
}

console.log('detailorang:', orang);


//Destructing object
interface Name {
    firstName: string,
    lastName: string,
}

const name = {
    firstName: 'imam',
    lastName: 'ramadhan'
}

const { firstName, lastName }: Name = name

console.log(firstName, lastName);
