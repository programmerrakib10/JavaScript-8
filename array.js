
const users = [
    {name: "Soyeb", id: 1, age: 25},
    {name: "Sakib", id: 2, age: 15},
    {name: "Rana" ,id: 3, age: 18},
    {name: "Rakib", id: 4, age: 20},
    {name: "Nahid", id: 5, age: 22},
    {name: "Sahin" ,id: 6, age: 24},
    {name: "Munna", id: 7, age: 27},
    {name: "Shafin",id: 8, age: 21},
];
// users.forEach((users) => console.log(users.name))
// users.forEach((user) => console.log(user.age))

// for (k =0; k <users.length; k++) {
//     console.log(users[k]);
// }

const Userlist = document.getElementById("user-list")

users.forEach((user) => {
    Userlist.innerHTML += `<li>${user.name} Age: ${user.age}Id : ${user.id}</li>`
})