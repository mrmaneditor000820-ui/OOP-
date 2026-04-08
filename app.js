
// class Students {
//     constructor (sname,sage,sclass,sid,sroll){
//         this.sname=sname
//         this.sage=sage
//         this.sclass=sclass
//         this.sid=sid
//         this.sroll=sroll
//     }

//     Studentsdata(){
//         console.log(`student name is ${this.sname} and age is ${this.sage}`)
//     }
// }

// const student1 = new Students ("ali",20)
// student1.Studentsdata()

// // Abstruction First piller of oop 
// // absraction me kisis user ko wo chizen dete hein jis ki ose zarorat ho bas baki piche kiya kam hoa hy os ka nai bta te wo hide rehta hy user se 

// function area (length){
//   return 5 * length      
// }
// console.log(area(10))




// inheritance

// object ke sath inheritancs

// const obj = {
//     name:"ali" ,
//     age:20,
// };
// Object.prototype.details = function main (){
//     console.log(`my name is ${this.name}`)
// };
// obj.details()


// function ke sath inheritance

// function studentdata (name){
//     this.name = name
// }
// studentdata.prototype.details = function(name){
//     console.log(`student name is ${this.name}`)
// }
// const mydata = new studentdata("ali")
// mydata.details()


// class ke sath inheritance 

// class Parentclass{
//    constructor(name , age){
//     this.name = name
//     this.age = age
//    }
//    details(){
//     console.log(`parent class name is ${this.name} and age is ${this.age}`)
//    }
// }
// class Childclass extends Parentclass{
//     constructor(name , age){
//       super(name,age)
//     }
// }
// const obj = new Childclass("ali" , 20)
// obj.details()

// factory function 

// function MainFunction(name, age) {
//     return {
//         name: name,
//         age: age,
//         details: function () {
//             console.log(`name is ${this.name} and age ${this.age}`)
//         }
//     }
// }

// const function1 = new MainFunction("ali", 20)
// const function2 = new MainFunction("khan", 30)
// function1.details()
// function2.details()

// incapsulation 

// class Moneychecker{
//     #money
//     constructor(cardnum,cardmoney){
//         this.cardnum = cardnum,
//         this.#money = cardmoney
//     };
//     sendmoney(cardmoney){
//      this.#money += cardmoney
//     }
//     showmoney(){
//         console.log(`availibal money is ${this.#money}`)
//     }

// }
// const moneytransfer = new Moneychecker(12345,5000)
// moneytransfer.sendmoney(200)
// moneytransfer.showmoney()


//              <------------------------------Polymorphism----------------------------->

// poly means (many)
// Manyforms or Manymethods

// 1 Overiding

// class Mainclass {
//     details(){
//         console.log("i am in main class")
//     }
// }
// class Subclass1 extends Mainclass{
//     details(){
//         console.log("i am in sub class")
//     }
// }
// class Subclass2 extends Mainclass {
//     details(){
//         console.log("i am sub2  class")
//     }
// }
// const obj1 = new Subclass1()
// const obj2 = new Subclass2()
// const obj3 = new Mainclass()
// obj1.details()
// obj2.details()
// obj3.details()

// 2. over loading ( compile time )

// class sum  {
//     add(num1,num2){
//         if(num2 === undefined){
//             return num1 + num1
//         }
//         return num1 + num2
//     }

// }
// const addnum = new sum()
// console.log(addnum.add(2,5))
