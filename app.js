var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["INSTRUCTOR"] = 1] = "INSTRUCTOR";
    Role[Role["STUDENT"] = 2] = "STUDENT"; // 2
})(Role || (Role = {}));
var Test2;
(function (Test2) {
    Test2[Test2["ADMIN"] = 5] = "ADMIN";
    Test2[Test2["INSTRUCTOR"] = 6] = "INSTRUCTOR";
    Test2[Test2["STUDENT"] = 7] = "STUDENT"; // 7
})(Test2 || (Test2 = {}));
var person = {
    // const person = {
    name: 'Venkat',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    sayHi: function () {
        return "Hello, " + this.name;
    }
};
// tuple won't work with array methods
// person.role.push('hello')
var favActivities;
// let favActivities: Array<string>
favActivities = ['Sports', 'Cooking'];
var favActivities1;
favActivities1 = ['Sports', 1, true];
console.log(person.sayHi());
console.log(person.role);
switch (person.role) {
    case 0:
        console.log('ADMIN');
        break;
    case 1:
        console.log('INSTRUCTOR');
        break;
    case 2:
        console.log('STUDENT');
        break;
}
for (var _i = 0, favActivities_1 = favActivities; _i < favActivities_1.length; _i++) {
    var hobby = favActivities_1[_i];
    // inferred correct as string, so string methods as available
    console.log(hobby.toUpperCase());
    // show error when you access array methods, because it is string
    // console.log(hobby.map())
}
