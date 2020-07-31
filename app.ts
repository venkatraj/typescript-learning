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

for(const hobby of favActivities) {
  // inferred correct as string, so string methods as available
  console.log(hobby.toUpperCase()); 
  // show error when you access array methods, because it is string
  // console.log(hobby.map())
}