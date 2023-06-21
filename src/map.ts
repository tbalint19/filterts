type User = {
  id: number
  username: string
  password: string
}

type Account = {
  number: number
  balance: number
  isActive: boolean
}

let users: User[] = [
  { id: 1, username: "John", password: "12345" },
  { id: 2, username: "John", password: "12345" },
  { id: 3, username: "Jack", password: "12345" },
  { id: 4, username: "Jack", password: "12345" },
  { id: 5, username: "Jim", password: "12345" },
]

let accounts: Account[] = [
  { number: 12345, balance: 10, isActive: true },
  { number: 12345, balance: 10, isActive: true },
  { number: 12345, balance: 20, isActive: true },
  { number: 12345, balance: 10, isActive: true },
  { number: 12345, balance: 10, isActive: true },
]

const toUserIdentifier = (arr: User[]): string[] => {

  let result: string[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let element = arr[index]
    let newElement = element.username + "#" + element.id
    result = [ ...result, newElement ]
    index += 1
  }

  return result
}

const toBalance = (arr: Account[]): number[] => {

  let result : number[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let element = arr[index]
    let newElement = element.balance
    result = [ ...result, newElement ]
    index += 1
  }

  return result
}

export const convert = <IT, OT>(arr: IT[], convertFunction: (elem: IT) => OT): OT[] => {

  let result : OT[] = []

  let index = 0
  while (arr[index] !== undefined) {
    let element = arr[index]
    let newElement = convertFunction(element)
    result = [ ...result, newElement ]
    index += 1
  }

  return result
}


let result1 = toUserIdentifier(users)
console.log(result1)

let result12 = convert(users, user => user.username + "#" + user.id)
console.log(result12)

let result13 = users.map(user => user.username + "#" + user.id)
console.log(result13)

let result2 = toBalance(accounts)
console.log(result2)

let result22 = convert(accounts, account => account.balance)
console.log(result22)

let result23 = accounts.map(account => account.balance)
console.log(result23)



