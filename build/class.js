"use strict";
//Class
Object.defineProperty(exports, "__esModule", { value: true });
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
class User {
    constructor(id, firstName, lastName) {
        this.retryLogin = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.alias = 'imron';
        this.aliasLastName = 'jamrong';
        this.fakeName = 'kuman';
    }
    //method
    signIn(username, pass) {
        this.retryLogin += 1;
        if (username === 'admin' && pass === '123') {
            return true;
        }
        if (this.retryLogin >= User.MAKS_SIGNIN) {
            return 'maks login please retry';
        }
        return false;
    }
    signUp() {
        return this.alias;
    }
}
//static member
User.MAKS_SIGNIN = 2; //defaultnya 2
class EnhancmentUser extends User {
    constructor(city, id, firstName, lastName, aliasLast) {
        super(id, firstName, lastName);
        this.addres = 'jakarta utara';
        this.city = city;
        this.aliasLastName = aliasLast; //<<---dr class parentnya
    }
}
User.MAKS_SIGNIN = 3;
//object myUser result dari instance class User
const myUser = new User(19, 'iam', 'ramadhan');
const myNewUser = new EnhancmentUser('jakut', 9, 'imm', 'srcsm', 'mbah');
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
class Root {
}
class RootUser extends Root {
    constructor() {
        super();
        this.username = 'epn';
        this.pass = '123';
        this.status = false;
    }
}
console.log(new RootUser().username);
