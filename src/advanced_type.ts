//Advanced type in ts

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 * Recrod => Record<K, T>
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

 import { type } from 'os';
import { DataDiri } from './function'
 
 //partial
 //membuat parameter menjadi optional

 const datadiri = (data: Partial<DataDiri>) => {

    return data
 }

const res =  datadiri({ 
     firstName: 'imron',
     lastName: 'romadon',
     //language: '' 
})

console.log(res);

//required kebalikkanya dari partial

//Readonly
//membuat data tidakbisa berubah
// const data = (data: Readonly<DataDiri>) => {
//     data.firstName = 3
// }

//Pick
//memilih property yang diinginkan dr interfacenya
function pick(data: Pick<DataDiri, 'firstName'>) {
    return data
}

console.log(pick({ firstName: 'amanda' }));


//Omit
//kebalikannya dari pick, mengecualikan

//Record
//usecase 1: object with flexible property
//usecase 2: nested object

type Value = string | string[] | number
type CustomObjectType = Record<string, Value>

const valueObj: CustomObjectType = {
    id: '91380219831',
    age: 8,
}

console.log(valueObj);
 
type AllUsers = Record<string, Required<DataDiri>>

const users: AllUsers = {
    name1: { firstName: '', lastName: '', language: '', gender: ''  },
    name2: { firstName: 'im', lastName: 'ma', language: 'jpn', gender: ''  }
}

console.log(users);



//Extract <<-- mencari properti yang sama
//Exclude
//Extract dan Exclude untuk 2 type

//keyof merubah interface menjadi union

interface Post{
    id: string,
    firstName: string,
}

type a = keyof Post

type ExtType = Extract<a, keyof DataDiri>

const test: ExtType = 'firstName'

console.log(test);
//bisa menjadi tipe baru untuk records

type RecExtType = Record<string, ExtType>

const msgs: RecExtType = {
    detail: 'firstName'
}

console.log(msgs);

//exclude kebalikannya
//mengambil yang tidak sama
type ExcType = Exclude<a, keyof DataDiri>

const x: ExcType = 'id'
console.log(x);
