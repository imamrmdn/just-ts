//es module
// import fetch from 'node-fetch';

//common js
//const fetch = require('/node-fetch');
//Function

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */


 const variable = null

 console.log(typeof(variable));
 

 //declaration
 //z?: number artinya optional
function number(x: number, y: number, z?: number): number{
    return x + y
}

console.log(number(8, 9));

//expression
const numberOne = function(x: number, z: string): string{

    const name = `nama saya: ${z}, umur: ${x}`

    return name;
}

console.log(numberOne(19, 'imam'));


//arrow function
const numberTwo = (x: number, z: number, y: number): number => {

    return x * z + y
}

console.log(numberTwo(4, 15, 10));


//function callback
// const cb = (url: string, callback: Function): void => {
    //... tidak disarankan
// }

type CustomFunction = (msg: string) => void

const cb = (url: string, callback: CustomFunction): void => {
    callback(url)
}

const fn = (str: string) => console.log(str);

cb('google.com', fn)
cb('youtube.com', (pesan: string) => console.log('ini pesann:', pesan))

//function async await with error handling try catch
interface Edukasi {
    id: string,
    title: string,
    penulis: string,
    gambar: string,
    deskripsi: string,
    createdAt: string,
}

// const fetchData = async (): Promise<Edukasi[] | any> => {

//     try {
        
//         const response = await fetch('https://dbloods.herokuapp.com/api/edukasi')

//         const data = await response.json()

//         return data

//     } catch (error) {
//         if(error) error.message        
//     }

// }

// fetchData()

//optional and default params

export interface DataDiri {
    firstName: string,
    lastName: string,
    language: string,
    gender?: string,
}

const submitContact = (firstName: string, lastName: string, language = 'indonesia', gender?: string): DataDiri => {

    return{
        firstName,
        lastName,
        language,
        ...(gender && { gender }) // <<- kalau gendernya ada return valuenya
    }

}

const log = submitContact('imam', 'ramadhan', 'indo', 'laki');

console.log('result:', log);

//rest paramter in function

const collection = (item: string, ...itemBuah: (string | number)[]): string => {
     
    return item + ' ' + itemBuah
}

const fruits = collection('buah', 'mangga', 9, 'apple')

console.log(fruits);

//latihan rest paramater
const collectionEdukasi = (...edukasi: Edukasi[]) => {
    return edukasi
}

const daftarEdukaso = collectionEdukasi(
    
        {
            id: '2',
            title: 'buku',
            gambar: 'link',
            deskripsi: 'buku baru',
            penulis: 'imron',
            createdAt: '24/2020'
        }
    
)

console.log(...daftarEdukaso);


//conditional type with union

//solution one: with union type
const ct = (param: string | number): string | number => {
    return param
}

console.log(ct(10), ct('imam'));

//solution two with generic type
// <T>
//type variable -> deteksi type data dari caller atau yang manggil functionnya
 const gen = <T>(param: T): T => {
     return param;
 }

 const hasil_gen = gen<number[]>([0, 9])

 console.log(hasil_gen);
 console.log(gen<string>('hello type generic'));
  
///bedanya dengan union type, union didefine langsung di functionya
///generic type kita define dari yang manggilnya atau pada saat function itu di call

//function overloading yang saling menimpa
function ct_overload(param: string): string;
function ct_overload(param: number): number;
function ct_overload(param: any): any {
    return param
}

console.log(ct_overload('hello'));
console.log(ct_overload(999));
//console.log(ct_overload(true));



