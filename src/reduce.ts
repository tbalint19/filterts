export const reduce = <IT, OT>(arr: IT[], reducer: (acc: OT, curr: IT) => OT, initial: OT): OT => {
  let result = initial

  let index = 0
  while (arr[index] !== undefined) {
    
    result = reducer(result, arr[index])

    index += 1
  }

  return result
}

// every
let allBiggerThan10_1 = reduce(
  [ 1, 4, 8, 12 ],
  (acc, curr) => !!acc && curr > 10,
  true
)
let allBiggerThan10_2 = reduce(
  [ 11, 14, 18, 12 ],
  (acc, curr) => !!acc && curr > 10,
  true
)

// find
let biggerOne_1 = reduce(
  [ 1, 4, 8 ],
  (acc: number | null, curr) => acc ? acc : curr > 10 ? curr : acc,
  null
)
let biggerOne_2 = reduce(
  [ 1, 4, 8, 12 ],
  (acc: number | null, curr) => acc ? acc : curr > 10 ? curr : acc,
  null
)

// filter
let biggers_1 = reduce(
  [ 1, 4, 8 ],
  (acc: number[], curr) => curr > 10 ? [ ...acc, curr ] : acc,
  []
)
let biggers_2 = reduce(
  [ 1, 4, 8, 12, 14 ],
  (acc: number[], curr) => curr > 10 ? [ ...acc, curr ] : acc,
  []
)

// map
let bools_1 = reduce(
  [ 1, 4, 8 ],
  (acc: boolean[], curr) => ([ ...acc, curr > 10 ]),
  []
)
let bools_2 = reduce(
  [ 1, 4, 8, 12 ],
  (acc: boolean[], curr) => ([ ...acc, curr > 10 ]),
  []
)

console.log(allBiggerThan10_1)
console.log(allBiggerThan10_2)
console.log(biggerOne_1)
console.log(biggerOne_2)
console.log(biggers_1)
console.log(biggers_2)
console.log(bools_1)
console.log(bools_2)

const result1 = reduce([1, 2, 3], (acc, curr) => acc + curr, 0)
const result2 = [1, 2, 3].reduce((acc, curr) => acc + curr, 0)

type User = {
  id: number
  username: string
  password: string
}

let users: User[] = [
  { id: 1, username: "John", password: "12345" },
  { id: 2, username: "John", password: "12345" },
  { id: 13, username: "Jack", password: "12345" },
  { id: 14, username: "Jack", password: "12345" },
  { id: 15, username: "Jim", password: "12345" },
]

const result3 = users
  .filter(user => user.id > 10)
  .map(user => user.username + "#" + user.id)

const result4 = reduce(users, (usernames: string[], user) => user.id > 10 ?
    [ ...usernames, user.username + "#" + user.id ] :
    usernames,
    [])

console.log(result3)
console.log(result4)