//Perbedaan Interface dengan Type
/*
 * umumnya interface digunakan untuk class dan object
 * dan type digunakan ketika kita menggunakan function
 * tetapi bisa dibalik juga penggunaanny
 */

 //aliases
 //interface tidak bisa menggunakan aliases sedangkan type bisa
 //example:
 type CustomData = string | string[]
 
 //default interface adalah object

/**
 * Object
 */

 interface NewUser {
     name: string,
     age: number
 }

 type NewUsers = {
     name: string,
     age: number
 }

/**
 * Merge
 */
//merge seperti meniban jika ada interface
//diinterface bisa ditype tidak bisa
//example

interface Rules{
    person: string,
    list: string[],
}

interface Rules{
    person: string,
    list: string[],
    expired: number
}

const rule: Rules = {
    person: 'kosong',
    list: ['kosong'],
    expired: 999
}

console.log(rule);



/**
 * Intersection & Union
 */
//kebalikannya dari merge
//bisa dipakai ditype tetapi tidak bisa dipakai diinterface
//menggabungkan 2 type

/**
 * Implements
 */

/**
 * Extend
 */
