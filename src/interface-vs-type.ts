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

type Warning1 = {
    list: string,
    rules: string,
}

type Warning2 = {
    list: string,
    rules: string,
    date: number
}

//intersection
type IntersectionWarning = Warning2 & Warning1 //<<-- dipakai 2" ny

//union
type UnionWarning = Warning1 | Warning2 // <-- dipakai salah satu


const warn: IntersectionWarning = {
    list: '',
    rules: '',
    date: 98
}

console.log(warn);

/**
 * Implements
 */

 interface People {
     name: string,
     addres: string
 }

 class Human implements People{
     name: string
     addres: string

    constructor(){
        this.name = 'imron'
        this.addres = 'jakut'
    }
 }

 console.log(new Human().addres);
 

/**
 * Extend
 */

 interface Before{
     name: string,
     status: boolean
 }

 interface After extends Before {
     city: string
 }

 class Country implements After{

    name: string
    status: boolean
    city: string

    constructor(){
        this.name = 'indo'
        this.status = true
        this.city = 'jakarta'
    }
 }

 console.log(new Country().status);
 