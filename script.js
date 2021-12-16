// function(){
//     console.log('hello world');
// }
console.log("disaridan merhaba");

function sayHello() {
    console.log("icerden merhaba");
    
} // Basit fonksiyonlar sayfanin neresinde yazilirsa yazilsin nerede cagirilirsa orada calisir.
console.log("asagidan merhaba");
sayHello();
console.log(sayHello); //fonksiyon tanimini verir
console.log(sayHello());//undefined verir cunku console log ile daha onceden cagirdimiz fonksiyonun sadece adini cagirarak yazdirabiliriz

const userName="naciye";

let a=5;
let b=6;
letd=0;
function calc() {
    let c=a+b
    d=a-c
    console.log(a+b)
    console.log(c)
}

calc();
console.log(d)

let name1="burakhan";

function nameUpper(isim) {
    console.log(isim.toUpperCase())
    
}
nameUpper("ali");
nameUpper(name1)


function calculate(param1,param2) {
    let number=param1*2;
    console.log(param1,"derdim derdim var")
    console.log(param1+param2)
    console.log(param2,"adet derdim var")
    console.log("iki kati", number)
}

calculate( 5 , 9 ); //param1=5 param2=9 //14
calculate(3,4); //7

//parametresiz versiyon

let var1=7;
let var2=2;
function calculate2() {
    let number=var1*2;
    console.log(var1,"adet param var")
    console.log(var1+var2);
    console.log(var2,'adet derdim var')
    console.log("iki kati", number)
    
}

calculate2() //7
calculate2() //7

function namer(param1, param2){
    console.log(param1, param2)
}
namer("mehmet"); //ikinciyi vermezsek undefined olur


function naming(param1, param2="erkek"){
    console.log(` ${param1} bir ${param2}`);
}
naming("mehmet"); //ahmet bir erkek
naming("seyda", "kiz"); //seyda bir kiz

function sayName(parametre){
    let cumle=`${parametre} benim adim`;
    return cumle;
}

console.log(sayName("veli"));

function basit() {
    return 5;
   // console.log("merhaba") //returnden sonra calismaz
    //return "merhaba"; //calismaz
}
console.log(basit()); //===console.log(5)
console.log(basit()+6); //===console.log(5+6)//11


function nameFunc(params){
    return params* 2;
}
console.log(nameFunc(6)) //12 //nameFunc 6 paramsa gidiyor oradan returna gidiyor ve oradan calisiyor.

let yenideger=(nameFunc(6)+7);
let yepyenideger=yenideger*2; //26
console.log(yenideger)
console.log(yepyenideger)

//FUNCTION EXPRESSION
const yeniFunc= function (value) {
    return value+2;
}
console.log(yeniFunc(5)); //7

//IIEF
// (function(){
//     console.log("welcome to immediately invoked function expression(IIEF");
// })();


const sayMello= function(name){
    const greeting='Hello'  + name; // hello john Wayne
    return greeting;

}
console.log(sayMello('JOHN WAYNE')); //HELLO JOHN WAYNE

function merhaba(params){
    document.write(`<p>merhaba ${params}</p>`)
}
merhaba("ayse")


let myAge = prompt("yasinizi giriniz");
console.log(myAge)
//promptan girdikten sonra mayAge degiskeni tanimlanmis oluyor,oradan girdigim deger
function writeMyAge(params) {
    document.write(`<p>senin yasin ${params}</p/>`)
}
writeMyAge(myAge)



let firstName=prompt("isminizi giriniz")
let firstAge= prompt("yasinizi giriniz")

function example(val1,val2) {
    let firstYears =2*10.5;
    let lastYears= (val2-2) * 4;
    let totalYears=firstYears+lastYears;
    document.write(`<h4>${val1},senin kopek yasin ${totalYears}</h4>`)
    return `${val1},senin kopek yasin ${totalYears}`
}
//example("burak",55);
example(firstName,firstAge);
let result = example("burak",55)
console.log(result)