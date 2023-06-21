let numbers1 = [ 1, 4, 5, 12, 15 ]

const allBiggerThanFive = (numbers: number[]): boolean => {

  let index = 0
  while (numbers[index] !== undefined) {
    let isValid = numbers[index] > 5
    if (!isValid) {
      return false
    }
    index += 1
  }

  return true
}

let res1 = allBiggerThanFive(numbers1)
let res2 = allBiggerThanFive([])
let res3 = allBiggerThanFive([5, 6])
let res4 = allBiggerThanFive([6, 7, 8])

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)


let words1 = [ "alma", "korte", "barack" ]

const allStartsWithK = (numbers: string[]): boolean => {

  let index = 0
  while (numbers[index] !== undefined) {
    let isValid = numbers[index][0] === "k"
    if (!isValid) {
      return false
    }
    index += 1
  }

  return true
}

let res5 = allStartsWithK(words1)
let res6 = allStartsWithK([])
let res7 = allStartsWithK([ "alma", "korte" ])
let res8 = allStartsWithK([ "korte", "kifli", "kenyer" ])

console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)

export const every = <T>(arr: T[], validate: (elem: T) => boolean): boolean => {
  let index = 0
  while (arr[index] !== undefined) {
    let isValid = validate(arr[index])
    if (!isValid) {
      return false
    }
    index += 1
  }
  return true
}

let res9 = every([ 3, 4, 5 ], num => num > 5)
let res10 = every([ "alma", "korte", "barack" ], word => word[0] === "k")

console.log(res9)
console.log(res10)
