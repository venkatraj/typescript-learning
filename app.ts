const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // tuple
  sayHi: any
} = {
// const person = {
  name: 'Venkat',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'admin'],
  sayHi() {
    return `Hello, ${this.name}`
  }
}

// tuple won't work with array methods
// person.role.push('hello')

let favActivities: string[]
// let favActivities: Array<string>
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