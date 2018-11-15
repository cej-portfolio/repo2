 var Person = require('./modules/Person');
//
// function person(name, favColor){
//     console.log("Hello, my name is "+name+" and my favorite color is "+favColor+ ".");
// }
//
// var johnName = "존 도";
// var johnFavColor = "블루";
//
// var john = {
//     name : "John Doe!!",
//     favoriteColor : "blue!!"
// }
//
// person("John Smith","green");
// person(johnName, johnFavColor);
// person(john.name, john.favoriteColor);
//
// var jon = {
//     name : "John Doe!!",
//     favoriteColor : "blue!!",
//     greet : function(){
//         console.log("oh... 안녕하세요? 오랜만이에요.");
//         console.log("Hello, My name is "+jon.name+" and my favorite color is "+jon.favoriteColor+".");
//     }
// }
// jon.greet();

alert('Test123!!!');


var suzy = new Person("John Doe","blue");
suzy.greet();

var jane = new Person("Jane Smith","Red");
jane.greet();
