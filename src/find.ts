let numbers: number[] = [ 1, 3, 5, 8, 12, 6, 15 ]

let find = <Type>(array: Type[], validate: (elem: Type) => boolean): Type | null => {

  let index = 0
  while (array[index] !== undefined) {
    let element = array[index]
    let isWhatWeNeed = validate(element)
    if (isWhatWeNeed) {
      return element
    }
    index += 1
  }

  return null
}

let result1 = find(numbers, num => num > 10)
let result2 = find([], num => num > 10)
let result3 = find([ 1, 2, 3 ], num => num > 10)
let result4 = find([ 1, 11, 2 ], num => num > 10)
let result5 = find([ 11, 12, 2 ], num => num > 10)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

let result6 = find([ "alma", "korte", "barack"], word => word[0] === "a")
let result7 = find([ "alma", "korte", "barack"], word => word[0] === "b")
console.log(result6)
console.log(result7)
