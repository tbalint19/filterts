let words = [ "alma", "korte", "barack", "narancs" ]

let filterByB = (arr: string[]): string[] => {

  let result: string[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let shouldAdd = arr[index][0] === "b"
    if (shouldAdd) {
      result = [ ...result, arr[index] ]
    }
    index += 1
  }

  return result
}

let result1 = filterByB(words)
console.log(result1)

let numbers = [ 1, 4, 78, 100 ]

let filterBy10 = (arr: number[]): number[] => {

  let result: number[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let shouldAdd = arr[index] > 9
    if (shouldAdd) {
      result = [ ...result, arr[index] ]
    }
    index += 1
  }

  return result
}

let result2 = filterBy10(numbers)
console.log(result2)


type Person = {
  name: string
  age: number
  gender: "male" | "female"
}

let people: Person[] = [
  { name: "John", age: 20, gender: "male" },
  { name: "James", age: 30, gender: "male" },
  { name: "Jane", age: 40, gender: "female" },
]

let filterByGender = (arr: Person[]): Person[] => {

  let result: Person[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let shouldAdd = arr[index].gender === "female"
    if (shouldAdd) {
      result = [ ...result, arr[index] ]
    }
    index += 1
  }

  return result
}

let result3 = filterByGender(people)
console.log(result3)


function filter<T>(arr: T[], compareFunction: (elem: T) => boolean): T[] {
  let result: T[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let shouldAdd = compareFunction(arr[index])
    if (shouldAdd) {
      result = [ ...result, arr[index] ]
    }
    index += 1
  }

  return result
}

let result4 = filter(words, word => word[0] === "b")
console.log(result4)

let result5 = filter(numbers, num => num > 9)
console.log(result5);

let result6 = filter(people, person => person["gender"] === "female")
console.log(result6);

let result7 = words.filter(word => word[0] === "b")
console.log(result4)

let result8 = numbers.filter(num => num > 9)
console.log(result5);

let result9 = people.filter(person => person["gender"] === "female")
console.log(result6);

export default filter