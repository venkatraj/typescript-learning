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
for (var _i = 0, favActivities_1 = favActivities; _i < favActivities_1.length; _i++) {
    var hobby = favActivities_1[_i];
    // inferred correct as string, so string methods as available
    console.log(hobby.toUpperCase());
    // show error when you access array methods, because it is string
    // console.log(hobby.map())
}
