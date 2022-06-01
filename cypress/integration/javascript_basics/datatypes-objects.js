var name = 'Furkan'
var age = 35
var name_object = {firstName:"Furkan",lastName:"Donkar"}
var truth = true
var sheets = ["HTML","CSS"]
var a = null

var students = {
    firstName : "Furkan",
    lastName : "Donkar",
    age : 35,
    height : 171,

    fullName : function(){
        return this.firstName + " " + this.lastName
    }

}

const ageValue = students.age

console.log(ageValue);
console.log(students.fullName());