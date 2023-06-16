interface IPerson {
  getName: () => string
  getAge: () => number
  getIntro: () => string
}

class Person implements IPerson {

  private name;
  private age;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getIntro() {
    return "Hi, my name is " + this.name
  }
}

const p1 = new Person("John", 20)
p1.getIntro()
