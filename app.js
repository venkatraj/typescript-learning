// const person: {
//   name: string
//   age: number
//   sayHi: any
// } = {
var person = {
    name: 'Venkat',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    sayHi: function () {
        return "Hello, " + this.name;
    }
};
var favActivities;
favActivities = ['Sports', 'Cooking'];
var favActivities1;
favActivities1 = ['Sports', 1, true];
console.log(person.sayHi());
