function Person(obj) {
  this.name = obj.name
  this.age = obj.age
  this.getIntro = function() {
    return "Hi, my name is " + this.name
  }
}

class Person {
  constructor(obj) {
    this.name = obj.name
    this.age = obj.age
  }

  getIntro() {
    return "Hi, my name is " + this.name
  }
}

/* Person.prototype.getIntro = function() {
  return "Hi, my name is " + this.name
} */

let person = {
  name: "John",
  age: 20
}

let person1 = new Person({
  name: "John",
  age: 20
})

let person2 = new Person({
  name: "Jim",
  age: 30
})

let result1 = person1.getIntro()
console.log(result1)

let result2 = person2.getIntro()
console.log(result2)
