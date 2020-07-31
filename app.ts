enum Role {
  ADMIN,       // 0
  INSTRUCTOR,  // 1
  STUDENT      // 2
}

enum Test2 {
  ADMIN = 5,
  INSTRUCTOR, // 6
  STUDENT // 7
}

const person: {
  name: string
  age: number
  hobbies: string[]
  // role: [number, string] // tuple
  role: Role
  sayHi: any
} = {
// const person = {
  name: 'Venkat',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
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
console.log(person.role)
switch(person.role) {
  case 0:
    console.log('ADMIN')
    break;
  case 1:
    console.log('INSTRUCTOR')
    break;
  case 2:
    console.log('STUDENT')
    break;
}

for(const hobby of favActivities) {
  // inferred correct as string, so string methods as available
  console.log(hobby.toUpperCase()); 
  // show error when you access array methods, because it is string
  // console.log(hobby.map())
}