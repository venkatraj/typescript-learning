// const person: {
//   name: string
//   age: number
//   sayHi: any
// } = {
const person = {
  name: 'Venkat',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  sayHi() {
    return `Hello, ${this.name}`
  }
}

let favActivities: string[]
favActivities = ['Sports', 'Cooking']

let favActivities1: any[]
favActivities1 = ['Sports', 1, true]

console.log(person.sayHi())