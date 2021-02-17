//Class

import { off } from "process"

/*
 * class basic: constructor, properties, method
 * access modifiers (private, public, private)
 * inheritance / sub-class
 * static member
 * abstract classes
 */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

 //class --> object instance

 class User{

    //props atau properties
    id: number
    firstName: string
    lastName: string

    //acces modifiers    
    //public bisa diakses diclass itu sendiri, di sub-class/turunan dan instancenyy
    public alias: string

    //protected bisa diakses diclass itu sendiri dan di subclass, tidak bisa diinstance
    protected aliasLastName: string
    
    //private hanya bisa diakses oleh class itu sendiri
    private fakeName: string

    //static member
    static MAKS_SIGNIN = 2 //defaultnya 2

    private retryLogin = 0

    constructor(id: number, firstName: string, lastName: string){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.alias = 'imron'
        this.aliasLastName = 'jamrong'
        this.fakeName = 'kuman'
    }

    //method
    signIn(username: string, pass: string):  string | boolean{
        
        this.retryLogin += 1

        if(username === 'admin' && pass === '123'){
            return true
        }

        if(this.retryLogin >= User.MAKS_SIGNIN){
            return 'maks login please retry'
        }

        return false
    }

    signUp(): string{
        return this.alias
    }

 }

 class EnhancmentUser extends User{

    addres: string
    city: string

    constructor(city: string, id: number, firstName: string, lastName: string, aliasLast: string){
        super(id, firstName, lastName);
        this.addres = 'jakarta utara';
        this.city = city;
        this.aliasLastName =  aliasLast; //<<---dr class parentnya
    }

 }

 User.MAKS_SIGNIN = 3
//object myUser result dari instance class User
 const myUser = new User(19, 'iam', 'ramadhan')
 const myNewUser = new EnhancmentUser('jakut', 9, 'imm', 'srcsm', 'mbah')

 console.log(myUser.firstName);
 console.log(myUser.signUp());
 console.log(myNewUser.city);
 //console.log(User.MAKS_SIGNIN = 4); //langsung bisa akses tanpa inisialiasi classnya
 
 
//  console.log(myNewUser.aliasLastName); //<--tidak bisa
 
 console.log(myUser.signIn('', ''));
 console.log(myUser.signIn('', ''));
 console.log(myUser.signIn('', ''));
 console.log(myUser.signIn('admin', '123'));


 //abstract class adalah blueprint atau cetakan dr sebuah class itu sendiri

 abstract class Root {
     abstract status: boolean
 }

 class RootUser extends Root{

    username: string
    pass: string
    status: boolean

    constructor(){
        super();
        this.username = 'epn';
        this.pass = '123';
        this.status = false;
    }
 }


 console.log(new RootUser().username);
 